# Alternative Approaches Pattern

The Alternative Approaches Pattern instructs a Large Language Model (LLM) to identify and present
multiple ways to accomplish a given task. Rather than providing a single solution, this pattern
encourages the LLM to explore different strategies, methodologies, or implementations that could
achieve the same goal. This approach helps users make informed decisions by understanding the
trade-offs between different solutions before committing to one.

This pattern is particularly valuable when facing unfamiliar problems or when the optimal solution
depends on contextual factors that may not be immediately obvious. By prompting the LLM to generate
alternatives, users gain broader perspective and can select approaches that best align with their
specific constraints, preferences, and requirements.

## Examples 💡

### I. Basic Alternative Approaches

```
From now on if there are alternative ways to accomplish the same thing, list the best alternative
approaches. Compare and contrast the alternatives and ask me questions to figure out which
alternative approach suits me.
```

### II. Meta-Prompting with Alternatives

```
Whenever I ask you to write a prompt for me to accomplish a task, list what the task is, list
alternative approaches for completing the task and then write a prompt for an LLM for each
approach. Ask me what I want you to write a prompt for.
```

### III. Prompt Wording Alternatives

```
For every prompt I give you, if there are alternative ways to word a prompt that I give you, list
the best alternate wordings. Compare/contrast the pros and cons of each wording.
```

### IV. Problem-Solution Alternatives

```
For anything that I ask you to write, determine the underlying problem that I am trying to solve
and how I am trying to solve it. List at least one alternative approach to solve the problem and
compare/contrast the approach with the original approach implied by my request to you.
```

## Further Reading 🔗

- [Prompt Engineering: Alternative Approach Pattern](https://debabratapruseth.com/prompt-engineering-alternative-approach-pattern/)
- [Prompt Engineering via Prompt Patterns — Alternative Approaches Pattern](https://medium.com/@a1guy/prompt-engineering-via-prompt-patterns-alternative-approaches-pattern-346344debfda)
