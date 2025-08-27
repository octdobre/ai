# 🧠 AI Dev Playground

Welcome, builder! 👋 This repo is a friendly, hands-on collection of small AI projects, prompting patterns, and reusable tools. It’s designed for developers who want practical examples, concise guides, and copy‑pasteable building blocks. ⚙️✨

### Highlights
- Guides and patterns for prompting in `generative/prompting/`
- Space for modality-specific examples in `generative/{audio,image,text,video}/`
- Tooling scaffolds for LLMs and MCP integrations in `tools/`

## 🚀 Prompting

High-signal guides and reusable patterns for crafting effective prompts across tasks and models.

- [Pre-prompting](generative/prompting/pre_prompting.md): Set context and constraints before the ask.
- [Persona pattern](generative/prompting/persona_pattern.md): Structure a model's role, voice, and constraints.
- [Word completion](generative/prompting/word_completion.md): Encourage targeted completions with minimal context.
- [Grammar and prompting](generative/prompting/prompting_grammar.md): How nouns, verbs, and modifiers shape LLM outputs.
 - [Compressing input information](generative/prompting/compressing_input_information.md): Strategies to shrink inputs without losing signal.
 - [Recursive prompting](generative/prompting/recursive_prompting.md): Iteratively refine outputs with self-critique and re-asking.
 - [Root prompting](generative/prompting/root_prompting.md): Establish invariant principles to guide downstream prompts.

## 📦 Repository layout

```
.
├─ agentic/
├─ generative/
│  ├─ audio/
│  ├─ image/
│  ├─ prompting/
│  │  ├─ compressing_input_information.md
│  │  ├─ persona_pattern.md
│  │  ├─ pre_prompting.md
│  │  ├─ prompting_grammar.md
│  │  ├─ recursive_prompting.md
│  │  ├─ root_prompting.md
│  │  └─ word_completion.md
│  ├─ text/
│  └─ video/
├─ tools/
│  ├─ llm/
│  └─ mcp/
└─ README.md
```


## Acknowledgements

All content in this repository is fully AI-generated. 🤖✨😄🧪
