# Pre‑Prompting: Setting the Stage for Better LLM Outputs

Pre‑prompting is a short, reusable setup you place before user prompts to define role, goals, rules,
and output format. It reduces ambiguity and makes responses more consistent and policy‑aligned.

## Quick example

```markdown
System:
You are a concise project assistant. Always answer in 3 bullets: Summary, Risks, Next steps.

User:
Plan a one‑week timeline to ship a landing page.
```

```markdown
Output:
- Summary: One‑week plan to design, build, and launch a landing page.
- Risks: Scope creep; asset delays; mobile perf regressions.
- Next steps: Define scope; set milestones; implement; QA; launch; monitor.
```

## Practical examples

### I. Engineering assistant with output contract

```markdown
You are a senior code reviewer.

Goals:
1) Find correctness, security, and performance issues.
2) Suggest minimal edits only.

Output format:
- Start with a one‑line summary.
- Then a bulleted list of issues with file paths in backticks.
- Provide code diffs in fenced blocks with language tags.

If uncertain, state the assumption before proposing an edit.
```

### II. Lightweight JSON schema for tool usage

```json
{
  "role": "system",
  "content": "When answering, return valid JSON only matching this schema: { type: object, properties: { summary: string, actions: array of string }, required: [\"summary\", \"actions\"] }. If you cannot comply, return { \"summary\": \"cannot_comply\", \"actions\": [] }."
}
```

## Patterns that work ✅

- **Make rules testable**
  
  Write constraints that can be checked objectively. This reduces ambiguity and helps the model self‑audit.
  
  Example:
  ```markdown
  System:
  1) Limit answers to 120 words.
  2) Include exactly one quote in double quotes.
  3) End with a single action item starting with "Next:".
  ```
  Output (compliant):
  ```markdown
  "Simplicity is the soul of efficiency." — Austin Freeman
  Next: Draft a 3‑step rollout plan.
  ```

- **Define an output contract**
  
  Specify the exact structure (Markdown sections or JSON keys) so downstream systems can parse reliably.
  
  Example:
  ```markdown
  System:
  Respond with three sections: Summary, Risks, Next steps. Use H3 headings only.
  ```
  Output shape:
  ```markdown
  ### Summary
  ...
  ### Risks
  ...
  ### Next steps
  ...
  ```

- **Specify uncertainty behavior**
  
  Tell the model how to proceed when information is missing (ask one question, state assumptions, or return a placeholder).
  
  Example:
  ```markdown
  If key info is missing, ask exactly one clarifying question before answering. If unanswered, proceed with two explicit assumptions.
  ```

- **Keep it concise**
  
  Short pre‑prompts are easier to follow and less likely to conflict. Prefer 5–12 lines that capture role, goals, rules, and format.
  
  Example (concise):
  ```markdown
  You are a fintech explainer. Use plain language, no jargon. Structure: TL;DR, Details, Action.
  ```

- **Use one or two mini examples**
  
  A small in‑context example anchors tone and format without overwhelming the model.
  
  Example:
  ```markdown
  Example input: "Explain APR to teens"
  Example output:
  - TL;DR: APR is the yearly cost of borrowing.
  - Details: ...
  - Action: Compare two cards using APR, not teaser rate.
  ```

## Common pitfalls ⚠️

- **Overlong or conflicting rules**
  
  Long lists of mixed policies often contradict. Consolidate and prioritize the top rules.
  
  Anti‑pattern:
  ```markdown
  Be verbose and concise. Provide all details but keep it short.
  ```
  Better:
  ```markdown
  Be concise. Provide only essential details.
  ```

- **Vague goals**
  
  “Be helpful” or “do your best” is not measurable. Replace with explicit outcomes.
  
  Better goal:
  ```markdown
  Produce a 5‑point checklist suitable for a non‑technical stakeholder.
  ```

- **Hidden constraints**
  
  Policies buried in user prompts are easy to miss. Put them in the pre‑prompt where precedence is highest.
  
  Example:
  ```markdown
  System: Never include PII. If asked, refuse and explain why, then provide anonymized guidance.
  ```

- **No fallback**
  
  Without a default behavior, outputs stall when inputs are incomplete.
  
  Example fallback:
  ```markdown
  If data is missing after one question, state two assumptions and continue.
  ```

## Quick checklist 🧭

- **Role/persona**: Is the voice and expertise defined for this task?
- **Goals**: Are success criteria concrete and testable?
- **Format**: Is there a clear structure (sections/JSON) for downstream use?
- **Safety**: Are refusal rules and escalation paths explicit?
- **Examples**: Is there at least one tiny example that matches real inputs?

Well‑crafted pre‑prompts turn sporadic success into repeatable performance—small up‑front effort,
big downstream gains.


