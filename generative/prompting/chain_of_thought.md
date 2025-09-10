# Chain-of-Thought Prompting ⛓️🧠

Chain-of-thought (CoT) prompting is a pattern that elicits intermediate reasoning steps
from a large language model (LLM). Instead of jumping directly to the answer, the model
articulates a brief sequence of thoughts, enabling stronger performance on tasks that
require multi-step reasoning, planning, or decomposition. 🧠

## When to Use ⛓️

- Clarifying multi-step math, logic, and word problems. ⛓️
- Decomposing complex instructions into smaller, verifiable steps. ⛓️

## Example: Prompt ⛓️

```text
Task: Please describe how to create an omellete. Briefly explain your reasoning behind it in steps.
Instruction: Briefly explain your reasoning behind it in steps.
```

```text
1) Gather ingredients (eggs, salt, butter) and tools (nonstick pan, whisk, spatula).
2) Whisk eggs with a pinch of salt until uniform; preheat pan on medium-low and melt butter.
3) Pour eggs in; gently stir and push curds, then smooth surface to set a thin layer.
4) Add optional fillings, fold the omelette, cook briefly until just set, and serve.
```


## Example Prompts You Can Reuse ⛓️

```text
Think step by step. Use 2–5 concise, factual steps. Then provide a single "Answer:" line.
```

```text
Show a short chain of thought for verification. Keep it under 5 lines, then give the answer.
```

```text
Generate three brief reasoning paths and answers; pick the answer that passes a units check.
Return only the final answer.
```

## Further Reading 🔗

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)


