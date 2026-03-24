# Nike Membership AI PM Prototype

This repository now contains a **Product Manager style AI feature proposal** and a **working prototype** tailored for Nike Membership.

## What is included

- `docs/ai-pm-nike-membership-proposal.md`
  - Industry-style PM framing
  - User problem, MVP scope, success metrics, AI guardrails
  - Experimentation and rollout logic

- `prototype/index.html`
- `prototype/styles.css`
- `prototype/script.js`
  - Interactive prototype: profile inputs -> AI recommendation cards
  - Explainability chips, match scoring, and simulated KPI lift metrics

## Prototype concept

### Nike Membership AI Coach

A member-facing assistant that personalizes weekly gear recommendations using:

- Fitness goal
- Activity level
- Budget
- Weather context

It outputs transparent recommendations with confidence and rationale so members can act quickly.

## How to run

Open the file directly in browser:

- `prototype/index.html`

Or run a local static server from project root:

```bash
python -m http.server 8000
```

Then visit:

- `http://localhost:8000/prototype/`

## Why this is interview-ready

This prototype demonstrates PM fundamentals beyond idea-generation:

- Customer-problem orientation
- Clear MVP boundary
- KPI-first thinking
- AI trust and safety framing
- Build-and-ship execution
