const catalog = [
  {
    name: "Nike Pegasus Turbo Next",
    category: "run",
    weather: ["warm", "rain"],
    budget: "high",
    price: "$180",
    traits: ["Speed-focused", "Responsive foam", "Road running"],
  },
  {
    name: "Nike InfinityRN 4",
    category: "run",
    weather: ["cold", "rain", "warm"],
    budget: "mid",
    price: "$160",
    traits: ["Stability", "Cushion comfort", "Daily training"],
  },
  {
    name: "Nike Dri-FIT ADV Run Division Jacket",
    category: "run",
    weather: ["cold", "rain"],
    budget: "mid",
    price: "$130",
    traits: ["Water-repellent", "Reflective details", "Layering"],
  },
  {
    name: "Nike Metcon 9",
    category: "train",
    weather: ["warm", "cold", "rain"],
    budget: "mid",
    price: "$150",
    traits: ["Lateral stability", "Grip", "Strength sessions"],
  },
  {
    name: "Nike Pro Dri-FIT Top",
    category: "train",
    weather: ["warm", "cold"],
    budget: "low",
    price: "$45",
    traits: ["Sweat-wicking", "Base layer", "Gym essential"],
  },
  {
    name: "Nike Tech Fleece Hoodie",
    category: "lifestyle",
    weather: ["cold", "rain"],
    budget: "mid",
    price: "$125",
    traits: ["Everyday style", "Warmth", "Streetwear staple"],
  },
  {
    name: "Nike Air Max DN",
    category: "lifestyle",
    weather: ["warm", "cold"],
    budget: "high",
    price: "$170",
    traits: ["Visual impact", "All-day comfort", "Statement look"],
  },
  {
    name: "Jordan Luka 3",
    category: "basketball",
    weather: ["warm", "cold"],
    budget: "high",
    price: "$135",
    traits: ["Court control", "Quick cuts", "Supportive fit"],
  },
  {
    name: "Nike DNA Basketball Shorts",
    category: "basketball",
    weather: ["warm", "cold"],
    budget: "low",
    price: "$60",
    traits: ["On-court comfort", "Lightweight", "Daily hoops"],
  },
  {
    name: "Nike Storm-FIT Windrunner",
    category: "lifestyle",
    weather: ["rain", "cold"],
    budget: "high",
    price: "$220",
    traits: ["Weather defense", "Premium finish", "City-to-gym"],
  },
];

const budgetRank = { low: 1, mid: 2, high: 3 };
const activityBoost = { low: 2, medium: 6, high: 10 };

const form = document.getElementById("member-form");
const results = document.getElementById("results");
const stateChip = document.getElementById("state-chip");
const ctrLiftEl = document.getElementById("ctr-lift");
const atbLiftEl = document.getElementById("atb-lift");
const returnRiskEl = document.getElementById("return-risk");

function computeScore(item, profile) {
  let score = 50;

  if (item.category === profile.goal) score += 24;
  if (item.weather.includes(profile.weather)) score += 14;

  const itemBudgetRank = budgetRank[item.budget];
  const profileBudgetRank = budgetRank[profile.budget];

  if (itemBudgetRank <= profileBudgetRank) {
    score += 12;
  } else {
    score -= 8;
  }

  score += activityBoost[profile.activity];
  return Math.max(35, Math.min(score, 98));
}

function reasonChips(item, profile, score) {
  const chips = [];

  if (item.category === profile.goal) chips.push("Goal aligned");
  if (item.weather.includes(profile.weather)) chips.push("Weather fit");
  if (budgetRank[item.budget] <= budgetRank[profile.budget]) {
    chips.push("Budget fit");
  } else {
    chips.push("Stretch price");
  }

  if (score > 84) chips.push("High confidence");
  else if (score > 74) chips.push("Strong relevance");
  else chips.push("Good baseline match");

  return chips;
}

function deriveMetrics(topPicks) {
  const avg = topPicks.reduce((sum, item) => sum + item.score, 0) / topPicks.length;
  const ctrLift = ((avg - 60) / 2.6).toFixed(1);
  const atbLift = ((avg - 55) / 2.1).toFixed(1);

  let riskLevel = "Low";
  let cssClass = "level-low";

  if (avg < 74) {
    riskLevel = "High";
    cssClass = "level-high";
  } else if (avg < 82) {
    riskLevel = "Medium";
    cssClass = "level-medium";
  }

  return {
    ctrLift: `+${Math.max(4, Number(ctrLift)).toFixed(1)}%`,
    atbLift: `+${Math.max(6, Number(atbLift)).toFixed(1)}%`,
    returnRisk: riskLevel,
    returnRiskClass: cssClass,
  };
}

function recommendationCard(item) {
  const chipHtml = item.reasons.map((reason) => `<span class="chip">${reason}</span>`).join("");

  return `
    <article class="card">
      <div class="card-top">
        <div class="title-wrap">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <div class="score">
          <small>Match</small>
          <strong>${item.score}</strong>
        </div>
      </div>

      <div class="progress"><span style="width:${item.score}%;"></span></div>

      <div class="chips">${chipHtml}</div>

      <div class="chips">
        ${item.traits.map((trait) => `<span class="chip">${trait}</span>`).join("")}
      </div>

      <div class="actions">
        <button class="btn">Add to Bag</button>
        <button class="btn">Compare</button>
        <button class="btn save" data-id="${item.name}">Save</button>
      </div>
    </article>
  `;
}

function render(profile) {
  const scored = catalog
    .map((item) => {
      const score = computeScore(item, profile);
      return {
        ...item,
        score,
        reasons: reasonChips(item, profile, score),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const metrics = deriveMetrics(scored);
  ctrLiftEl.textContent = metrics.ctrLift;
  atbLiftEl.textContent = metrics.atbLift;
  returnRiskEl.textContent = metrics.returnRisk;
  returnRiskEl.className = metrics.returnRiskClass;

  stateChip.textContent = "Recommendations Ready";
  results.className = "results";

  results.innerHTML = `
    ${scored.map(recommendationCard).join("")}
    <p class="note">
      PM Note: This simulation estimates recommendation confidence using profile-to-catalog
      fit. Production rollout should validate impact via controlled A/B testing.
    </p>
  `;

  document.querySelectorAll(".btn.save").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.add("saved");
      button.textContent = "Saved";
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = {
    goal: document.getElementById("goal").value,
    activity: document.getElementById("activity").value,
    budget: document.getElementById("budget").value,
    weather: document.getElementById("weather").value,
  };

  render(profile);
});
