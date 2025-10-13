# Outline Expansion Pattern 🗺️🧱

The Outline Expansion pattern overcomes model input/output length limits by progressively
structuring, expanding, and assembling content in controllable chunks. Instead of asking
for a full large artifact in one shot (risking truncation or generic filler), you iteratively
build an outline, deepen selected branches, then stitch refined segments into a cohesive whole. 🧩🛠️

Visual mantra: 🪄 Idea → 🗂️ Outline → 🌿 Branches → 🧬 Leaves → 🪢 Assemble → 🔍 Polish

## Example Interaction 💬🧪

Below is a concise, token‑efficient loop illustrating seeding, outlining, selection, and branch expansion.

User:
```text
Act as an outline expander. Generate a bullet point outline based on the input that I give you and then ask me which bullet point to expand. Ask me what to outline.
```

Model:
```text
Please provide the topic, target audience, desired length, and any must‑include constraints.
```

User:
```text
Topic: Developer onboarding guide for our internal CLI.
Audience: New backend engineers.
Length: ~2,000 words.
Constraints: Emphasize security & reproducibility.
```

Model (Outline v1):
```text
1. Overview & Purpose
2. Prerequisites & Access
3. Install & Configure
4. Core Commands
5. Environment Management
6. Security & Secrets Handling
7. Troubleshooting
8. Next Steps & Resources

Which item (number) should I expand first? (Type "done" to stop.)
```

User:
```text
6
```

Model (Expand 6):
```text
Security & Secrets Handling
6.1 Principle of Least Privilege
6.2 API Tokens & Storage
6.3 Rotating Credentials
6.4 Auditing & Logs
6.5 Common Pitfalls

Expand another? Reply with e.g. 6.2, 4, or "done".
```

User:
```text
6.2
```

Model (Expand 6.2):
```text
API Tokens & Storage
6.2.1 Secure Retrieval Process
6.2.2 Local Encryption / Secret Manager
6.2.3 Rotation Workflow
6.2.4 Revocation & Incident Handling
6.2.5 Common Mistakes to Avoid

Next target? (Another ID or "done").
```

Loop continues 🔁 until depth or coverage criteria are satisfied, then each terminal node is realized into prose ✨.

## Further Reading 📚🧠

- [OpenAI Prompt Engineering Guide – decomposition & iterative refinement](https://platform.openai.com/docs/guides/prompt-engineering) 📐
- [Microsoft Learn – Break down complex tasks & structure outputs](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering#break-down-complex-tasks) 🏗️
- [Hierarchical Neural Story Generation (Fan et al., 2018)](https://arxiv.org/abs/1805.04833) 🌳
