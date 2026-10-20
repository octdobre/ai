# Fact Check List Pattern 🕵️‍♂️✅

## Introduction 🧭

Large language models are probabilistic text generators, so they inevitably make mistakes, confidently
produce wrong statements, and sometimes emit prose that looks like an authoritative answer while lacking
grounded factual support. They are not literal question‑answer tools; they are pattern completers that
approximate likely continuations. To reduce the risk of silently accepting polished but unfounded output,
we can use structured prompts that force the model to surface the discrete facts it is relying on. Once
those atomic claims are explicit, a human or a secondary automated checker can verify them, catch
hallucinations early, and decide whether the response is trustworthy.

## Example Interaction 💬🔍

Objective: force the model to externalize the factual claims it is asserting, then verify them in a
fresh context.

1. Minimal installation prompt (raw) ⚙️:

```text
Any time you produce a text give me the facts that you have produced.
```

2. Expanded, more prescriptive instruction (as provided, including original typos) 📐:

```text
Whenever you output text, generate a set of facts that are contained in the output.
The set of facts should be inserted at the end of the output.
The set of facts whould be fundamental facts that could underminde teh veracity of the output if any of them is incorrect.
```

3. Model responds to a user question. It appends a section like: 📦

```text
Facts:
- <fact 1>
- <fact 2>
- ...
```

4. Independent verification in a fresh conversation (no prior context) 🔄:

```text
Please check if the facts in the text match the facts in the bullet point list.
```

5. A checker model (or human) labels each fact Supported / Not Supported and suggests corrections 🧪.
	Loop until all facts are validated, reducing the likelihood that polished but incorrect claims pass
	through unnoticed 🔐.

## Further Reading 🔗📚

- [Fact-Checking Language Models via Claim Extraction](https://arxiv.org/abs/2305.13281)
