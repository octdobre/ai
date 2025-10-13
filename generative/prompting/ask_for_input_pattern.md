# Ask for Input Pattern 🛎️

The Ask for Input Pattern instructs a Large Language Model (LLM) to pause before producing a full
answer and explicitly request missing input, a next task, or clarifying data. Instead of assuming
intent and replying immediately, the model performs a lightweight handshake: acknowledge scope,
surface what it needs, then wait. This prevents premature elaboration, hallucinated context, and
wasted tokens. ⏳

## Example interraction 🧪

Prompt:

```
Whenever I ask you to write a prompt for me to accomplish a task, list what the task is, list
alternative approaches for completing the task, and then write a prompt for yourself for each
approach. When you are done, ask me for the next prompt to create alternatives for.

Ask me for the first task.
```

Sample LLM first response (waiting state) 💤:

```
Understood. To proceed I will need your first task. When you give it, I will:
  1) Restate the task succinctly.
  2) List several distinct approaches (e.g., framework-driven, constraint-first, persona-driven, tool-augmented).
  3) Generate a purpose-built prompt for each approach.
  4) Ask you if you want refinements, combination, or a different angle.

Provide the first task.
```

User follow-up ✍️:

```
Create a prompt for the task for "cleaning up a cluttered desk"
```

Sample LLM output 📦:

```
Task: Create a prompt that will guide an LLM to produce an action plan for cleaning up a cluttered desk.

Alternative Approaches:
  A) Time-Boxed Sprint Approach
  B) Categorize-and-Conquer Approach
  C) Minimalist Value Filter Approach
  D) Maintenance Routine + Initial Overhaul Combo

---
A) Time-Boxed Sprint Prompt
"You are an efficiency coach. I have a cluttered desk with mixed papers, old notes, cables, random gadgets, pens, and unopened mail. Create a 30-minute cleanup plan divided into 5-minute sprints. For each sprint: goal, specific actions (imperative verbs), quick win rationale, and a micro-motivation phrase. End with a 5-minute daily maintenance routine. Ask me if there are any sensitive documents before advising disposal." 

---
B) Categorize-and-Conquer Prompt
"Act as a professional organizer. My desk has papers, mail, sticky notes, cables, stationery, and miscellaneous objects. Produce a phased plan: (1) Define category bins (Keep Immediate / Action / Archive / Recycle / Trash / Unsure), (2) Sorting protocol with decision rules, (3) Recommended temporary staging layout, (4) Reassembly (placement logic), (5) Post-clean review checklist. Keep instructions concise, bullet-based. Ask me to confirm any category I seem uncertain about before final placement suggestions." 

---
C) Minimalist Value Filter Prompt
"You are a minimalist consultant. Help me clear a cluttered desk by applying a value filter: REMOVE anything that does not directly support today's core work or baseline function. Provide: (1) 3 value criteria, (2) Triage pass instructions (<10 minutes), (3) Deep refinement pass, (4) Visual reset steps, (5) Two-sentence mindset anchor to prevent reclutter. Keep tone calm, decisive. End by asking if I want a looser or stricter version." 

---
D) Maintenance Routine + Initial Overhaul Combo Prompt
"Serve as a habit-focused productivity coach. I need a one-time overhaul + lightweight daily reset for a cluttered desk. Output sections: (1) One-time Preparation (tools & surfaces), (2) Overhaul sequence (ordered, with estimated minutes), (3) Post-overhaul baseline definition (describe 'done'), (4) 2-minute end-of-day reset script, (5) Weekly audit checklist. Keep language actionable and positive. Ask me to rate current clutter level (1–5) at the end to personalize future tweaks." 

Next Step: Would you like to refine one, merge elements, or request a different angle (e.g., kid-friendly, ADHD-friendly, gamified)?
```

---

## Variations 🔄

### I. Minimal Deferral ⏱️

```
I will give you tasks. Do not solve until I supply the first one. Simply ask: "What is the first
task?"
```

### II. Clarification First ❓

```
Before answering, list up to 5 clarifying questions in priority order. Then ask me to answer them.
Do not proceed until I reply.
```

### III. Progressive Elaboration 🪜

```
We will build the solution in stages: (1) goals, (2) constraints, (3) outline, (4) full draft.
Request stage (1) only. After each stage, ask for the next. Do not skip ahead.
```

### IV. Input Schema Enumeration 🗂️

```
List a JSON schema of required inputs (no example values). Ask me to populate it. Wait.
```

## Further Reading 🔗

- [Flipped Interaction Pattern (Article in Prompt Pattern Catalog)](https://arxiv.org/abs/2302.11382)
- [Flipped interaction pattern (internal)](flipped_interraction.md)
