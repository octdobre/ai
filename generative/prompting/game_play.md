# Game Play Prompting Pattern

Design interactive sessions where a large language model (LLM) acts as a Game Master (GM),
guiding a structured game to practice skills, explore ideas, or generate content. The model
sets or negotiates rules, runs turns, evaluates actions, and produces rich in-world outputs
like quest text, dialogues, and scoring. 🎮

## Why use this pattern

- **Practice safely**: Rehearse complex tasks (e.g., interviewing, prompting, ideation) with
  immediate GM feedback.
- **Motivate learning**: Games add stakes, clear goals, and rapid iteration.
- **Generate content**: Produce coherent in-world assets (quests, NPC dialogue, maps, clues).
- **Adapt difficulty**: Let the GM scale challenge as the player improves.

## Core idea

You ask the LLM to play a game with you. The model plays the GM: it proposes or adopts rules
you specify, runs a turn-based loop, evaluates your actions, and advances the game state. You
may provide seed rules or constraints (e.g., topic, tone, time limits) and the GM fills in
the rest.

## Prompt templates

### I. Minimal "Game Master" prompt

```text
You are the Game Master. Let's play a game about <topic>.
Here are my basic rules:
- Role: You are the GM; I am the player.
- Flow: Present one challenge per turn, wait for my reply, then score and continue.
- Constraints: <constraints>.
- End: Stop after <N> turns or when I say "stop".

Propose the full rules succinctly, confirm them, then start Turn 1.
```

### II. Structured template with seed rules

```text
System: You are a fair, concise Game Master.
User: I want a learning game focused on <topic>.
Seed rules:
1) The GM defines realistic challenges that do not require writing source code.
2) Each turn, the GM provides: (a) a challenge, (b) evaluation rubric, (c) success criteria.
3) After my reply, the GM returns: (a) outcome, (b) rationale, (c) brief coaching, (d) next turn.
4) Keep turns short and specific. Ask clarification questions sparingly.
5) Stop after <N> turns or when I say "stop".

Confirm rules, invite edits, then begin.
```

## Example game: Prompt engineering trainer

```text
We are going to play a game involving prompt engineering.
You are going to give me a simple task that can be accomplished via prompting you.
Your tasks should all have a reasoning to them; they should not require creating source code.

I will write a prompt for you to solve the task.
You will give me the output of my prompt and tell me if the prompt solved the task.
Ask me questions until I tell you to stop.
You will ask me a question, wait for my response, tell me how I did, and then ask me another question.

Ask me the first question.
```

## Further Reading 🔗

- [Role-Playing Prompts: Enhancing AI Interaction](https://promptsincluded.com/prompt-engineering-guide/role-playing-prompts/)


