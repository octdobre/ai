# Cognitive Verifier Pattern 🧩

*Created: September 10, 2025*

The Cognitive Verifier pattern improves answer reliability by explicitly generating sub‑questions,
answering them independently, and synthesizing a final response from those grounded partial
answers. It reduces hallucinations, surfaces missing information early, and creates a transparent
reasoning trail you can audit.

## Core idea in one sentence 💡

Break the problem into targeted questions, answer each, then combine the results to form the
overall answer—verifying assumptions along the way.

## Copy‑paste prompt 🔧

Use this snippet as a drop‑in behavior modifier.

```text
When you are asked a question, follow these rules:

Generate a number of additional questions that would help more accuratelly answere the question.

Combine the answers to the individual  questions to produce the final answer to the overall question.
```

## Template you can adapt 📝

```text
Task: [the original question]

Step 1 — Sub‑questions:
- Q1: [...]
- Q2: [...]
- Q3: [...]

Step 2 — Brief answers:
- A1: [...]
- A2: [...]
- A3: [...]

Step 3 — Synthesis:
- Final answer: [...]
- Rationale: A1 + A2 + A3 → [...]

Step 4 — Checks and gaps:
- Assumptions: [...]
- Missing info that would change the outcome: [...]
```

## Example and LLM outputs 🤖

Example: “Which laptop should I buy for software development under $1,500?” The model first
generates sub‑questions (e.g., preferred operating system, workload types, battery life priority,
screen size, ports, and upgradeability), then answers them briefly and synthesizes a conclusion.

```text
Question:
Which laptop should I buy for software development under $1,500?

Generated sub‑questions:
- What OS do you prefer or need (Windows, macOS, Linux)?
- Are you compiling large codebases or running VMs/containers regularly?
- Do you prioritize battery life over raw performance?
- What screen size and resolution do you prefer?
- Any required ports (HDMI, Ethernet, SD) or upgradeability needs (RAM/SSD)?

Brief answers (hypothetical):
- OS: Prefer Windows or Linux.
- Workload: Medium projects, some Docker containers; no heavy GPU needs.
- Battery: Prefer all‑day battery over peak performance.
- Display: 14–15" 1080p+.
- Ports: USB‑C + HDMI; upgradeable RAM ideal.

Final synthesized answer:
Consider a 14–15" Windows laptop with 16 GB RAM and Ryzen 7 or Intel i7 U‑series CPU, such as the
Lenovo ThinkPad T14 or ASUS Zenbook 14. They balance battery life and multi‑core performance, offer
USB‑C and HDMI, and often allow RAM/SSD upgrades—meeting your Docker use and budget.
```

## Tailored examples 🎯

- 🐞 Debug a web service: When you are asked to debug a failing web service, follow these rules. Generate a number of additional questions about recent deployments, error logs, and upstream or downstream dependencies. Combine the answers to isolate the failing component and propose a minimal rollback or targeted fix.

- 🗄️ Choose a data store: When you are asked to select a data storage option, follow these rules. Generate a number of additional questions about data volume, access patterns, latency needs, and compliance constraints. Combine the answers to recommend a store (e.g., relational vs. document vs. key‑value) with a brief rationale.

## Further Reading 🔗

- [Vanderbilt University: Prompt Patterns](https://www.vanderbilt.edu/generative-ai/prompt-patterns/)


