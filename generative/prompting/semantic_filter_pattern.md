# Semantic Filter Pattern

Semantic filtering leverages an LLM’s strength at understanding *meaning* rather than just surface tokens. Instead of brittle regexes, you instruct the model to remove (or mask / rewrite) spans of text that are unnecessary, sensitive, repetitive, stale, or outside scope—while preserving the rest. The result is a cleaner, safer, lower‑token input for downstream tasks.

## Why It Works 🧠

- **Latent pattern matching**: LLMs internalize linguistic, structural, and entity patterns (dates, PII, log noise, boilerplate) and can generalize beyond explicit rules.
- **Context‑aware redaction**: The model can drop only *semantically redundant* sentences (e.g., repeated status lines) while keeping novel facts.

## When To Use ✅

- Pre‑processing user or system logs before embedding / retrieval.
- Scrubbing PII (emails, phone numbers, names) or secrets (API keys) prior to persistence.
- Collapsing repeated boilerplate in meeting notes, tickets, or chat transcripts.
- Normalizing drafts by removing dates or outdated references before rewriting.

## Minimal Example Prompt 🔧

```text
You are a semantic filter. Task: Remove all calendar dates and obvious duplicates; lightly rewrite awkward wording for clarity. Preserve meaning.
Return only the cleaned text.

Text:
"Filter the text to remove the dates and rewrite the text to fix the wording." (instruction example)
```

## Worked Example 🧪

### Input Prompt (Full)

```text
You are a semantic filter. Objectives:
1. Remove all explicit calendar dates (any form like Jan 2 2024, 2024-01-02, 2/1/24).
2. Remove obvious repetition of identical sentences.
3. Improve awkward wording minimally for clarity; do not add new facts.
4. Output only the cleaned text.

Text:
Project Alpha daily status - 2024-09-14
Yesterday (2024/09/13) we completed the data load. Yesterday (2024/09/13) we completed the data load.
We will likely finish the index build at 2024-09-16.
API key: sk-live-12345ABC should NEVER be shared.
The timelines seems slippy but manageable.
End of report 2024.09.14
```

### Sample LLM Output (Filtered)

```text
Project Alpha daily status
We completed the data load.
We will likely finish the index build soon.
[REDACTED_API_KEY] should never be shared.
The timeline seems tight but manageable.
End of report
```

### What Happened
- Dates removed or generalized ("soon").
- Duplicate sentence collapsed.
- API key replaced with placeholder.
- Minor grammar fixes ("timelines seems slippy" → "timeline seems tight").

## Further Reading 🔗

- [Weaviate Search Filters](https://docs.weaviate.io/developers/weaviate/search#filters)
- [Pinecone Metadata Filtering Guide](https://docs.pinecone.io/docs/metadata-filtering)
- [Google Cloud DLP InfoTypes Concepts](https://cloud.google.com/dlp/docs/concepts-infotypes)
- [Microsoft Presidio (PII Detection Toolkit)](https://microsoft.github.io/presidio/)
- [OpenAI Moderation Guide](https://platform.openai.com/docs/guides/moderation)
- [OpenAI Cookbook: Semantic Text Splitting](https://cookbook.openai.com/examples/semantic_text_splitting)
 - [OpenAI Cookbook: Semantic Text Splitting](https://cookbook.openai.com/examples/semantic_text_splitting)

