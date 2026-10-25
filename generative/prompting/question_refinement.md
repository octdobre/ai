# LLM Question Refinement with Pre‑Prompting

*Created: September 10, 2025*

Pre‑prompting equips a large language model (LLM) with instructions that run before any
conversation. By adding a brief, reusable directive that asks the model to clarify or improve a
user’s input, you can turn vague queries into precise questions that yield higher‑quality answers.
This article explains how to design that directive, integrate it into user experience (UX), and
measure the benefits.

## Why Question Refinement Matters

- **Higher answer quality**: Specific, well‑scoped questions reduce ambiguity and error.
- **Faster resolution**: Fewer back‑and‑forth turns to reach the real need.
- **Better user trust**: The model demonstrates listening and intent alignment.
- **Reusability**: The same pre‑prompt works across many domains with minimal tuning.

## Example Prompt You Can Paste 🔧

```text
Whenever i ask a question, suggest a better question and ask me if i would like to use it instead.
```

## Quick Examples Table

| Original Ask | Refined Question | Rationale |
| --- | --- | --- |
| "Make my site faster" | "Which pages have slow Largest Contentful Paint (LCP), and can we prioritize image optimization for those pages first?" | Targets a web performance metric and concrete action. |
| "Help with data" | "Should we use a star schema or snowflake schema for a 10 TB analytics warehouse with hourly batch updates and 50 concurrent BI users?" | Adds scale, workload, and decision framing. |
| "Write an email" | "Draft a 150‑word, friendly reminder email to ACME’s CFO, due Friday, summarizing Q3 budget variances and requesting a 30‑minute call next week." | Specifies length, tone, recipient, content, and timeline. |

## FAQ

### I. Is this the same as chain‑of‑thought (CoT)?

No. Chain‑of‑thought reveals intermediate reasoning steps. Question refinement focuses on clarifying
what to answer before answering. They can be combined but serve different goals.

### II. When should I skip refinement?

When the user is clearly specifying a deterministic action (e.g., "convert this JSON to CSV").
Over‑refinement becomes friction.

## Further Reading 🔗

- [Question Refinement Pattern (doubleSlash blog)](https://blog.doubleslash.de/en/software-technologien/kuenstliche-intelligenz/prompt-of-the-week-the-question-refinement-pattern/)
