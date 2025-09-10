# 🧠 AI Dev Playground

Welcome, builder! 👋 This repo is a friendly, hands-on collection of small AI projects, prompting patterns, and reusable tools. It’s designed for developers who want practical examples, concise guides, and copy‑pasteable building blocks. ⚙️✨

### Highlights
- Guides and patterns for prompting in `generative/prompting/`
- Space for modality-specific examples in `generative/{audio,image,text,video}/`
- Tooling scaffolds for LLMs and MCP integrations in `tools/`

## 🚀 Prompting

High-signal guides and reusable patterns for crafting effective prompts across tasks and models.

### Role and guardrails
- [Root prompting](generative/prompting/root_prompting.md): Establish invariant principles to guide downstream prompts.
- [Persona pattern](generative/prompting/persona_pattern.md): Structure a model's role, voice, and constraints.
- [Audience persona](generative/prompting/audience_persona.md): Tailor outputs to a specific reader with appropriate depth, tone, and structure.
- [Grammar and prompting](generative/prompting/prompting_grammar.md): How nouns, verbs, and modifiers shape LLM outputs.

### Clarify and refine questions
- [Pre-prompting](generative/prompting/pre_prompting.md): Set context and constraints before the ask.
- [Question refinement](generative/prompting/question_refinement.md): Improve questions via pre‑prompting.
- [Flipped interaction](generative/prompting/flipped_interraction.md): Let the model ask one-at-a-time
  questions, then deliver when ready.

### Decompose and verify
- [Cognitive verifier](generative/prompting/cognitive_verifier.md): Decompose with sub‑questions, then synthesize.
- [Recursive prompting](generative/prompting/recursive_prompting.md): Iteratively refine outputs with self-critique and re-asking.
- [Chain-of-thought prompting](generative/prompting/chain_of_thought.md): Elicit intermediate reasoning steps for complex tasks.
- [ReAct prompting](generative/prompting/re_act.md): Reason-and-act workflow to retrieve evidence and compile answers.

### Optimize inputs and completions
- [Compressing input information](generative/prompting/compressing_input_information.md): Strategies to shrink inputs without losing signal.
- [Word completion](generative/prompting/word_completion.md): Encourage targeted completions with minimal context.
- [Few-shot prompting](generative/prompting/few_shot.md): Teach the model a format and decision pattern with short exemplars.

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
│  │  ├─ audience_persona.md
│  │  ├─ pre_prompting.md
│  │  ├─ prompting_grammar.md
│  │  ├─ recursive_prompting.md
│  │  ├─ root_prompting.md
│  │  ├─ question_refinement.md
│  │  ├─ cognitive_verifier.md
│  │  ├─ few_shot.md
│  │  ├─ chain_of_thought.md
│  │  ├─ re_act.md
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

## Further Reading 🔗

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
