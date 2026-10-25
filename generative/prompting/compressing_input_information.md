# Compressing information to fit inside an LLM input context

*Created: August 27, 2025*

Large Language Models (LLMs) accept prompts up to a fixed input context window. They can
reason over any data placed inside that window, but if the raw data is too large it cannot be
included directly. The solution is to compress only the relevant information so it fits, enabling
the model to answer questions accurately and efficiently. ✂️🧠

## Scenario

Example: You want to ask historical questions using dozens of Wikipedia articles (e.g., World
War II, the French Revolution, the Industrial Revolution). A naive prompt might try to paste
entire articles:

```text
You are a historian. Answer questions using ONLY the provided sources.

Sources (full articles):
- [W1] Wikipedia: World War II — full text
- [W2] Wikipedia: French Revolution — full text
- [W3] Wikipedia: Industrial Revolution — full text
- [W4..W50] Additional history articles — full text

Question: How did industrial capacity influence major European conflicts between 1789 and 1945?
```

This would exceed most context windows.

Solution: Extract only the most informative sentences
from each article (dates, causal claims, quantitative figures, key actors), attribute them to
stable IDs (e.g., W1.S17), and include just those in the prompt. The compressed set of sentences
fits the input window and still lets the model answer questions about the original content.

 
 
## A practical workflow 🚀
 
### I. 🔎 Scope and select
 
- **Define the question** (who/what/why/how, timeframe). Keep only relevant sources.
- **Skip** tangential articles to save tokens.
 
Prompt example:
 
```text
System: You are a research assistant. Identify which sources are relevant to the question.
User: Question: How did industrial capacity affect European conflicts (1789–1945)?
Sources: [W1..W50]
Return: IDs of relevant sources only, with 1‑line rationale per source.
```
 
### II. ✂️ Extract key sentences (with citations)
 
- **Pull verbatim sentences** that carry dates, metrics, causes, or named actors.
- **Attach IDs** like W3.S112 for traceability.
 
Prompt example:
 
```text
System: Extract only factual sentences from the given sources. No paraphrasing.
User: Return ≤ 20 sentences that best answer the question. Include source IDs.
Question: How did industrial capacity influence major European conflicts (1789–1945)?
Sources: <relevant snippets>
Format:
- [W3.S112] <sentence>
- [W1.S487] <sentence>
```
 
### III. 🧠 Summarize tightly (optional)
 
- **Condense** the extracted sentences into a 50–100 token synthesis.
- **Cite** the supporting IDs at the end.
 
Prompt example:
 
```text
Write a 70‑token synthesis using ONLY these sentences. Append cited IDs.
[W3.S112] ...
[W1.S487] ...
[W2.S233] ...
```
 
### IV. 📦 Assemble the bounded prompt
 
- **Compose** the final prompt with instructions, the user question, and compressed artifacts.
- **Leave headroom** (10–15%) for the model’s answer. ✅
 
Prompt skeleton:
 
```text
System: You are a precise historian. Use only the artifacts below. Cite IDs.
User question: <insert>
Artifacts (≤ 300 tokens):
[W3.S112] British iron output exceeded 2.25M tons by mid‑19th century.
[W1.S487] U.S. aircraft production rose from 6k (1940) to 96k (1944).
[W2.S233] Price controls (1793) sought to curb wartime inflation in France.
Constraints: If information is missing, say so and stop.
```
 
### V. ✅ Answer with citations
 
- **Constrain reasoning** to the provided artifacts; **cite** after each claim.
 
Prompt example:
 
```text
System: Answer using only artifacts. After each paragraph, list cited IDs.
User: How did industrial capacity influence major European conflicts (1789–1945)?
```

## Prompt templates

### I. Faithful extraction (with citations)

```text
You are a precise analyst. Extract only facts that appear verbatim in the sources.
Return JSON with fields: claim, citation_ids[], source_span.
If uncertain, output an empty array.
```

### II. Abstractive synthesis (bounded)

```text
Write a concise synthesis for the given question using ONLY the provided artifacts.
Hard limit: 200 tokens. Cite artifact IDs after each paragraph.
If information is missing, say what is missing and stop.
```

## Further Reading 🔗

- [tiktoken](https://github.com/openai/tiktoken)
- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)
- [LangChain Summarization](https://python.langchain.com/docs/use_cases/summarization)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [OpenAI Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)


