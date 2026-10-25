# 💬 Fully Prompted

*Last updated: October 25, 2026*

A field guide to working with LLMs, written entirely by AI. Start with prompting patterns, move on to building agents, then dig into the science underneath. Every word was generated from prompts, which makes the whole site its own example.

Open [index.html](index.html) for the full site, with search, the latest blog post and a random link.

## ✍️ Blog

Longer posts on what changed and what worked. All posts are listed in [blog/index.html](blog/index.html), newest first. No posts yet.

## 🛠️ Practice

### Agent development *(planned)*

How coding agents work and how to direct them, from a single instruction file to many subagents running in parallel.

- **Building blocks:** agent skills, agent instructions, agents, subagents, harness, MCP, worktrees for agents
- **Agent patterns:** inflection point (code, tests, run), spec-driven development, define goals, split work to subagent context size, context engineering, loop engineering, stochastic multi-agent consensus, 60/30/10 model rule
- **Under the hood:** the LLM, the tools, the loop, the memory

### Prompting patterns

25 patterns, each explained and shown working in a real conversation. The overview page is [generative/prompting/index.html](generative/prompting/index.html); the full list is also under [All prompting patterns](#-all-prompting-patterns).

**Applications:** [Tic Tac Toe game engine](generative/text/tictactoe_game.md), a rule-enforced conversational game with a structured action tail.

### Reusable prompting patterns *(planned)*

Prompts you write once and reuse: skills, taste as a frontend skill, instructions, spec-driven development.

## 🔬 Foundations

- **Science** *(planned)*: neural networks, machine learning, large language models, pattern recognition, sentiment analysis, ranking and scoring, categorizing, language
- **Humanities** *(planned)*: psychology, politics, philosophy

## 🖥️ Infrastructure

- Running local LLMs *(planned)*

## 📚 Library

### Papers

- [2606.18902](https://arxiv.org/abs/2606.18902): SAGE: Stochastic Prompt Optimization via Agent-Guided Exploration (Zhu et al., 2026)
- [2506.03926](https://arxiv.org/abs/2506.03926): Multiple Stochastic Prompt Tuning for Few-shot Adaptation under Extreme Domain Shift (Brahma and Biswas, 2025)
- [2302.11382](https://arxiv.org/abs/2302.11382): A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT (White et al., 2023)

### Links

Tools, articles, courses and videos worth keeping, with search and three random picks: [links/index.html](links/index.html). The list itself lives in [links/links.js](links/links.js).

## 🚀 All prompting patterns

### Role and guardrails
- [Root prompting](generative/prompting/root.md): Establish invariant principles to guide downstream prompts.
- [Persona pattern](generative/prompting/persona.md): Structure a model's role, voice, and constraints.
- [Audience pattern](generative/prompting/audience_persona.md): Tailor outputs to a specific reader with appropriate depth, tone, and structure.
- [Grammar and prompting](generative/prompting/prompting_grammar.md): How nouns, verbs, and modifiers shape LLM outputs.
- [Game play pattern](generative/prompting/game_play.md): Let the model act as a Game Master to run rules-based sessions.
- [Menu actions pattern](generative/prompting/menu_actions.md): Trigger keywords that expand into longer instructions.
- [Fact Check List pattern](generative/prompting/fact_check_list.md): Enumerate atomic claims for verification to reduce hallucinations.
- [Tail generation pattern](generative/prompting/tail_generation.md): Append a structured tail to preserve objectives across turns.

### Clarify and refine questions
- [Pre-prompting](generative/prompting/pre_prompting.md): Set context and constraints before the ask.
- [Question refinement](generative/prompting/question_refinement.md): Improve questions via pre‑prompting.
- [Flipped interaction](generative/prompting/flipped_interraction.md): Let the model ask one-at-a-time questions, then deliver when ready.
- [Alternative approaches pattern](generative/prompting/alternative_approaches.md): List and compare multiple ways to accomplish a task.
- [Ask for input pattern](generative/prompting/ask_for_input.md): Force a handshake so the model requests inputs before solving.

### Decompose and verify
- [Cognitive verifier](generative/prompting/cognitive_verifier.md): Decompose with sub‑questions, then synthesize.
- [Recursive prompting](generative/prompting/recursive.md): Iteratively refine outputs with self-critique and re-asking.
- [Chain-of-thought prompting](generative/prompting/chain_of_thought.md): Elicit intermediate reasoning steps for complex tasks.
- [ReAct prompting](generative/prompting/re_act.md): Reason-and-act workflow to retrieve evidence and compile answers.
- [Recipe prompting pattern](generative/prompting/recipe.md): Fill in missing steps while respecting known constraints.
- [Outline expansion pattern](generative/prompting/outline_expansion.md): Outline, then expand branches to build large outputs within token limits.

### Optimize inputs and completions
- [Compressing input information](generative/prompting/compressing_input_information.md): Strategies to shrink inputs without losing signal.
- [Word completion](generative/prompting/word_completion.md): Encourage targeted completions with minimal context.
- [Few-shot prompting](generative/prompting/few_shot.md): Teach a format and decision pattern with short exemplars.
- [Output template pattern](generative/prompting/template.md): Define exact output format with placeholders.
- [Meta language creation](generative/prompting/meta_language.md): Teach the model custom notation or shorthand.
- [Semantic filter pattern](generative/prompting/semantic_filter.md): Remove low-signal, sensitive, or redundant spans while preserving meaning.

## 📦 Repository layout

```
.
├─ index.html            front page
├─ index_v1.html         previous front page
├─ assets/
│  └─ site.css           shared styles
├─ blog/
│  ├─ index.html         all posts
│  ├─ posts.js           post list (add new posts here)
│  └─ _template.html     starting point for a new post
├─ links/
│  ├─ index.html         links page
│  └─ links.js           link list (add new links here)
└─ generative/
   ├─ prompting/
   │  ├─ index.html      prompting patterns overview
   │  └─ ...             one .md and one .html page per pattern
   └─ text/
      ├─ tictactoe_game.html
      ├─ ai_samples/
      └─ human_samples/
```

## Acknowledgements

All content in this repository is fully AI-generated. 🤖✨😄🧪
