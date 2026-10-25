# Persona Pattern for Prompting ✨

*Created: August 26, 2025*

The persona pattern asks the model to “act as” a specific role with a defined voice, expertise, and constraints. By shaping the assistant’s identity and goals, you improve consistency, tone, depth, and structure of outputs.

## Understanding the core template 🧩
Imagine you ask for a trip plan and get a polite wall of text. Helpful? Kind of. Precise? Not really. Now watch the same request evolve as we add one ingredient at a time from the template.

1) We start with identity.
```text
Prompt (adds Act as):
Act as: A meticulous travel planner.

Effect on output:
Output becomes structured and process-minded (sections, checklists), not a casual narrative.
```

2) Then we say who it’s for.
```text
Prompt (adds Audience):
Audience: A couple in their 30s traveling for 7 days in May.

Effect on output:
Recommendations fit the couple (no backpacker hostels), time-bound to May (seasonal hours, weather).
```

3) We define success.
```text
Prompt (adds Goals):
Goals: Create a cost-efficient itinerary with reliable transit and flexible options.

Effect on output:
The plan now optimizes for budget and reliability; alternatives appear for key days.
```

4) We limit the surface area.
```text
Prompt (adds Scope):
Scope: Focus on Lisbon and Porto; avoid nightlife; include food and culture.

Effect on output:
Irrelevant suggestions disappear; museum and food stops increase; no nightlife items remain.
```

5) We tune the voice.
```text
Prompt (adds Style):
Style: Friendly, concise, bulleted; include brief justifications.

Effect on output:
Bulleted steps with one-line reasons replace paragraphs; scannability improves.
```

6) We add guardrails.
```text
Prompt (adds Constraints):
Constraints: Max €140/day excluding flights; include transit times.

Effect on output:
Daily budgets and transit minutes appear; any plan exceeding €140 is revised.
```

7) We declare what the model may rely on.
```text
Prompt (adds Tools/Context):
Tools/Context: Official rail schedules; saved hotel shortlist.

Effect on output:
Train choices align with real departure windows; hotels are picked only from the shortlist.
```

8) We specify deliverables.
```text
Prompt (adds Outputs):
Outputs: 7-day itinerary table + packing checklist + daily budget.

Effect on output:
The response contains a table, a checklist, and per-day cost lines—nothing extra.
```

9) Finally, we ask for the next step.
```text
Prompt (adds Task):
Task: Draft the itinerary and highlight 2 alternatives for rainy days.

Effect on output:
The reply executes immediately on the exact deliverable, with the requested alternatives.
```

## Core template
Use this as a compact starting point. Fill brackets with specifics.

```text
Act as: [role/persona].
Audience: [who this is for].
Goals: [primary objectives].
Scope: [what to cover / avoid].
Style: [tone, voice, reading level].
Constraints: [formatting, length, safety, citations, step limits].
Tools/Context: [data, links, codebase, APIs].
Outputs: [exact deliverables and structure].
Task: [the immediate task or question].
```

Tip: Keep the persona (role, audience, style, constraints) consistent across the conversation; for each new request, change only the Task—and, if the deliverable format must change, the Outputs.

---

## Examples 📚

### I. General expert persona 🧭
```text
Act as: A meticulous travel planner specializing in budget European trips.
Audience: A couple in their 30s traveling for 7 days in May.
Goals: Create a cost-efficient itinerary with reliable transit and flexible options.
Scope: Focus on Lisbon and Porto; avoid nightlife; include food and culture.
Style: Friendly, concise, bulleted; include brief justifications.
Constraints: Max €140/day excluding flights; include transit times.
Outputs: 7-day itinerary table + packing checklist + daily budget.
Task: Draft the itinerary and highlight 2 alternatives for rainy days.
```

### II. Socratic teaching persona 🎓
```text
Act as: A Socratic math tutor.
Audience: A high-school student.
Goals: Build intuition before formulas; avoid giving final answers immediately.
Style: Ask one question at a time; short steps; supportive tone.
Constraints: No more than 3 hints before asking the student to try.
Outputs: A sequence of questions; reveal answer only upon request.
Task: Help the student understand why the derivative of sin(x) is cos(x).
```



---

## Programming personas (software engineer variants) 💻

Use these to steer depth, stack choices, and output formats.

### I. Frontend Engineer (React + TypeScript) 🎨
```text
Act as: A senior frontend engineer specializing in React 18 + TypeScript.
Audience: Mid-level web devs.
Goals: Build accessible, performant components with clean state management.
Style: Concise; explain trade-offs briefly; use modern React patterns.
Constraints: No deprecated APIs; a11y first; include prop and type definitions.
Outputs: Component code, usage example, and a11y checklist.
Task: Create a controlled `Autocomplete` component with keyboard navigation and ARIA roles.
```

### II. Backend Engineer (Python + FastAPI) 🐍
```text
Act as: A backend engineer specializing in FastAPI and Pydantic.
Audience: Backend team.
Goals: Implement reliable REST endpoints with validation and observability.
Style: Explicit; handle edge cases; include tests.
Constraints: Use Pydantic models; structured logging; 95% test coverage target.
Outputs: Endpoint code, Pydantic models, error mapping, and pytest cases.
Task: Add a POST /orders endpoint with idempotency and input validation.
```

### III. Backend Engineer (Node.js + Express) 🛠️
```text
Act as: A senior Node.js backend engineer using Express and TypeScript.
Audience: Server engineers.
Goals: Build maintainable routes with robust validation and error handling.
Style: Modular; SOLID principles; minimal coupling.
Constraints: Zod for validation; async/await; no callback-style code.
Outputs: Route, service, schema, error middleware, and unit tests.
Task: Implement a rate-limited webhook receiver with HMAC verification.
```

### IV. DevOps/SRE ⚙️
```text
Act as: A DevOps/SRE focusing on CI/CD and reliability.
Audience: Platform team.
Goals: Ship safely; enable fast feedback.
Style: Declarative; security-conscious; audit-friendly.
Constraints: Immutable builds; least privilege; fail fast.
Outputs: CI pipeline YAML, rollback plan, and monitoring/alerting rules.
Task: Author a GitHub Actions workflow for build, test, SBOM, and OIDC deploy to AWS.
```


---

## Quick prompt snippets 📌

- **Persona + Task one-liner**:
```text
Act as a [role] for [audience]; produce [outputs]. Task: [what you need now].
```

- **Persona + Checklist output**:
```text
Act as a QA lead. Output a 15-item test checklist for [feature], grouped by risk.
```

- **Persona + Format constraint**:
```text
Act as a technical writer. Summarize [topic] in exactly 5 bullets with verbs first.
```

- **Persona + Safety constraint**:
```text
Act as a compliance officer. Answer only with HIPAA-safe guidance; redact PHI.
```

---

## Anti-patterns and tips 🚫

- **Avoid contradictions**: Don’t mix “be terse” with “write detailed explanations”.
- **Prefer constraints over adjectives**: Say “<= 150 words” instead of “short”.
- **Pin the audience**: Different readers imply different depth and vocabulary.
- **Keep persona stable**: Change tasks, not the core role, across a session.
- **Test with adversarial cases**: Add “what would make this wrong?” prompts.

---

## Further Reading 🔗

- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)
- [Best practices](https://platform.openai.com/docs/guides/prompt-engineering)
- [Prompt design strategies](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies)
- [Establish context and role](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering#establish-context-and-role)
- [Techniques and guidelines](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering)


