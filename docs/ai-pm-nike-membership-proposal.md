# Nike Membership AI Prototype Proposal

## 1) Role framing: what an AI Product Manager is expected to do

For an entry-level candidate targeting Nike, the strongest signal is not just "AI ideas" but **feature shipping discipline**:

- Start from a real customer journey (browse -> decide -> buy -> train -> return)
- Tie ideas to business metrics (conversion, retention, order frequency, return rate)
- Scope a realistic MVP and launch plan
- Define guardrails for privacy, fairness, and brand voice
- Partner cross-functionally with design, engineering, data science, legal, and marketing

This prototype demonstrates that mindset with one focused concept.

---

## 2) Opportunity statement (Nike Membership)

Nike already has strong membership engagement, but there is still friction:

- Members spend time searching across broad catalog choices
- Product uncertainty increases returns (size/fit/context mismatch)
- High-intent users can still drop off when recommendations feel generic

### Proposed feature

## **Nike Membership AI Coach**

A personalized assistant on Nike membership surfaces that blends:

1. **Member intent** (sport goals, routine, style preference)
2. **Context** (weather, activity type, session intensity)
3. **Catalog relevance** (new arrivals, restocks, price band)

to generate a **weekly plan + curated products + confidence reasons**.

---

## 3) User problem and jobs-to-be-done

### Target users
- New members who need guidance
- Returning members with active fitness goals
- Mobile-first shoppers with short decision windows

### Jobs to be done
- "Help me pick the right gear for this week quickly"
- "Recommend items for my training routine and weather"
- "Tell me *why* this recommendation fits me"

---

## 4) MVP definition (what to ship first)

### In-scope for MVP
- Membership profile inputs: goal, activity level, budget, weather
- AI-generated weekly recommendation cards (3-5 suggestions)
- "Why this" explanations for trust
- Basic priority scoring (performance, style, budget fit)
- CTA flows: Save, Add to Bag, Compare

### Out-of-scope (phase 2+)
- Full conversational chat with memory across channels
- Real-time inventory and geolocation store stock
- Advanced multimodal fit estimation from photos

---

## 5) Product requirements and success metrics

### North-star hypothesis
If membership recommendations become context-aware and explainable, members will convert faster and return more often.

### Primary metrics
- Recommendation CTR
- Add-to-bag rate from recommendations
- Conversion rate lift vs control

### Secondary metrics
- 30-day member repeat visit rate
- Return rate delta on recommended items
- Time-to-first-add-to-bag

### Quality / AI guardrails
- Explainability shown on each recommendation
- No sensitive attributes used for targeting
- Clear disclaimer for "assistive recommendations"
- Fallback logic when profile signals are incomplete

---

## 6) Experimentation plan

### A/B test design (MVP)
- **Control**: Existing static/segment-based recommendation rail
- **Variant A**: AI coach recommendations without explanation chips
- **Variant B**: AI coach recommendations with explanation chips

### Expected learning
- Whether explanation increases trust and conversion
- Which user cohorts respond best (new vs returning members)
- Sensitivity to price band + sport goal alignment

---

## 7) Why this matters for Nike specifically

- Aligns with Nike's member-first ecosystem strategy
- Supports personalized digital commerce without losing brand voice
- Creates a repeatable data flywheel: better intent -> better recs -> better engagement

---

## 8) Technical outline (prototype level)

This repo includes a UI prototype that simulates:

- Profile-driven recommendation generation
- Score logic by goal, weather, and budget
- Explainability chips and confidence bars
- "Save" interactions and quick PM-style summary metrics

---

## 9) What this showcases in interviews

- Problem framing grounded in customer behavior
- MVP scope and prioritization discipline
- KPI and experimentation thinking
- Practical product sense + execution prototype

