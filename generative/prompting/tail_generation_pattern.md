# Tail Generation Pattern

## Purpose
The Tail Generation Pattern extends each Large Language Model (LLM) response with a concise, structured
"tail" that reiterates active objectives, governing rules, next required user input, and self-reminders.
This tail reinforces continuity so the model sustains constraints and task focus across long
multi-turn conversations.

## When To Use
Use this pattern in extended sessions where the model begins drifting from instructions, forgets
constraints, changes style midstream, or stops asking for the correct next input.

## Example Interaction
Below is an example of embedding a self-reminding instruction (tail-friendly) into a conversation. The
initial user instruction intentionally contains minor spelling issues to illustrate that the model can
normalize them while preserving intent.

Original user instruction:

```text
"" Whenever i ask you to write a prompt for me to accomplish a task,
list what the task is, 
list alternaltive approaches for completing the tesk, 
and then write a prompt for yourself for each approach.
When you are done, ask me for the next prompt to create alternatives for.

Ask me for what I want you to write a prompt for.""
```

Model follow-up output (example):

```markdown
**Restated Instruction (Cleaned):** For any task I provide, you will: (1) restate the task, (2) list
several alternative approaches, (3) create a self-prompt for each approach, and (4) ask me for the
next task when finished.

**Ready.** What task would you like me to generate alternative prompt approaches for next?

---
TAIL:
TASK: Awaiting user task to generate alternative prompt approaches.
CONTEXT_SUMMARY: User defined a workflow: restate task; list approaches; self-prompt each; ask next.
ACTIVE_RULES: restate_task; list_alternatives; prompt_per_approach; ask_next_task; append_tail.
PROGRESS: phase=awaiting_input step=0/4.
NEXT_EXPECTED_INPUT: Provide a task you want prompt alternatives for.
RISKS: vague_task; misspelled_terms.
SELF_CHECK: rules_applied=TRUE; prior_tail_present=FALSE (first_turn=TRUE).
REMINDER: Stay concise; enforce workflow; request task.
---
```

User follow-up input (example):

```text
I need prompts for extracting key performance risks from quarterly financial reports.
```

## Further Reading 🔗
- [LangChain Token Buffer Memory](https://python.langchain.com/docs/modules/memory/types/token_buffer)
