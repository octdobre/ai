# Flipped Interaction Pattern

## Overview

The flipped interaction pattern reverses the usual flow of prompting: instead of the prompter
delivering all context up-front, the large language model (LLM) proactively asks clarifying
questions. This adaptive questioning helps the LLM collect the right information before
synthesizing a final answer or deliverable.

## Core idea ❓

You explicitly tell the LLM to become the interviewer: it should ask targeted, incremental
questions to gather only what it needs. After each answer, it should evaluate whether it has
enough context to produce the deliverable. If yes, it stops asking and presents the result.

## Example prompt 🏃

Use this prompt:

```text
Ask me questions about my running goal until you have enough information to show me a personalized running training plan.
When you have enough information, show me the running plan.
Ask me the first question.
```

## Forcing one question at a time (and why “Ask me the first question” matters) ✅

LLMs often try to batch questions. Prevent this by stating both the pacing rule and an explicit
starter instruction:

- **Pacing rule**: “Ask ONE question at a time.”
- **Starter**: “Ask me the first question.”

The starter line ends the initial interaction cleanly, prompting the LLM to output exactly one
question rather than a list. It also ensures the conversation turns into a simple Q&A loop.

## Prompt blueprint 🧭

Use this structure to reliably flip the interaction and control pacing:

```text
You are an expert [role]. Your task is to deliver [deliverable].

Interaction rules:
- Ask targeted clarification questions to gather only necessary information.
- Ask ONE question at a time. After each answer, decide whether more information is needed.
- If you have enough information, stop asking questions and produce [deliverable].
- Optional: Ask at most [N] total questions.

Begin now. Ask me the first question.
```

## Putting it all together (concise template)

```text
You are an expert [role]. Your goal is to deliver [deliverable] that fits my needs and constraints.
Ask ONE question at a time to collect only the necessary information. After each answer, reevaluate
whether you can produce the deliverable. If you have enough information, stop asking and present it.
Optional: Ask at most [N] questions.

Begin by asking me the first question.
```
## Further Reading 🔗

- [Self-Ask Prompting](https://arxiv.org/abs/2210.03350)


