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
- [Game play pattern](generative/prompting/game_play_pattern.md): Let the model act as a Game Master to run rules-based sessions for practice and content.
- [Menu actions pattern](generative/prompting/menu_actions_pattern.md): Install a small menu of trigger keywords that expand into longer instructions for faster, consistent prompting.
- [Fact Check List pattern](generative/prompting/fact_check_list_pattern.md): Force the model to enumerate atomic claims for downstream verification to reduce hallucinations.
- [Tail generation pattern](generative/prompting/tail_generation_pattern.md): Append a structured tail to each response to preserve objectives and rules across turns.

### Clarify and refine questions
- [Pre-prompting](generative/prompting/pre_prompting.md): Set context and constraints before the ask.
- [Question refinement](generative/prompting/question_refinement.md): Improve questions via pre‑prompting.
- [Flipped interaction](generative/prompting/flipped_interraction.md): Let the model ask one-at-a-time
  questions, then deliver when ready.
- [Alternative approaches pattern](generative/prompting/alternative_approaches_prompting_pattern.md): Instruct the model to list and compare multiple ways to accomplish a task.
- [Ask for input pattern](generative/prompting/ask_for_input_pattern.md): Force a handshake so the model requests required inputs before solving.

### Decompose and verify
- [Cognitive verifier](generative/prompting/cognitive_verifier.md): Decompose with sub‑questions, then synthesize.
- [Recursive prompting](generative/prompting/recursive_prompting.md): Iteratively refine outputs with self-critique and re-asking.
- [Chain-of-thought prompting](generative/prompting/chain_of_thought.md): Elicit intermediate reasoning steps for complex tasks.
- [ReAct prompting](generative/prompting/re_act.md): Reason-and-act workflow to retrieve evidence and compile answers.
- [Recipe prompting pattern](generative/prompting/recipe_prompting_pattern.md): Fill in missing steps to complete a sequence while respecting known constraints.
- [Outline expansion pattern](generative/prompting/outline_expansion_pattern.md): Iteratively outline and selectively expand branches to assemble large outputs within token limits.

### Optimize inputs and completions
- [Compressing input information](generative/prompting/compressing_input_information.md): Strategies to shrink inputs without losing signal.
- [Word completion](generative/prompting/word_completion.md): Encourage targeted completions with minimal context.
- [Few-shot prompting](generative/prompting/few_shot.md): Teach the model a format and decision pattern with short exemplars.
- [Template pattern](generative/prompting/template_prompt_pattern.md): Define exact output format with placeholders for structured generation.
- [Meta language creation](generative/prompting/meta_language_prompt_pattern.md): Teach the model custom notation or shorthand instead of natural language.
- [Semantic filter pattern](generative/prompting/semantic_filter_pattern.md): Redact or remove low-signal, sensitive, or redundant spans while preserving meaning.

### 🧩 Applications

Concrete, self-contained prompt artifacts and mini systems you can run end-to-end to study structure, constraint handling, state tracking, and evaluation. These go beyond patterns into runnable specs.

- [Tic Tac Toe game engine](generative/text/tictactoe_game.md) – rule‑enforced conversational game with structured action tail.

## 📦 Repository layout

```
.
├─ agentic/
├─ generative/
│  ├─ audio/
│  ├─ image/
│  ├─ prompting/
│  │  ├─ alternative_approaches_prompting_pattern.md
│  │  ├─ ask_for_input_pattern.md
│  │  ├─ audience_persona.md
│  │  ├─ chain_of_thought.md
│  │  ├─ cognitive_verifier.md
│  │  ├─ fact_check_list_pattern.md
│  │  ├─ compressing_input_information.md
│  │  ├─ few_shot.md
│  │  ├─ flipped_interraction.md
│  │  ├─ game_play_pattern.md
│  │  ├─ semantic_filter_pattern.md
│  │  ├─ meta_language_prompt_pattern.md
│  │  ├─ menu_actions_pattern.md
│  │  ├─ persona_pattern.md
│  │  ├─ pre_prompting.md
│  │  ├─ prompting_grammar.md
│  │  ├─ question_refinement.md
│  │  ├─ re_act.md
│  │  ├─ recipe_prompting_pattern.md
│  │  ├─ recursive_prompting.md
│  │  ├─ root_prompting.md
│  │  ├─ template_prompt_pattern.md
│  │  ├─ tail_generation_pattern.md
│  │  └─ word_completion.md
│  ├─ text/
│  │  ├─ ai_samples/
│  │  │  └─ markdown.txt
│  │  └─ human_samples/
│  │     ├─ csharpbackend.txt
│  │     └─ markdown.txt
│  └─ video/
├─ tools/
│  ├─ llm/
│  └─ mcp/
└─ README.md
```


## Acknowledgements

All content in this repository is fully AI-generated. 🤖✨😄🧪

