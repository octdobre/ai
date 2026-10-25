# Output Template Pattern

*Created: October 13, 2025*

The Output Template pattern instructs a Large Language Model (LLM) to generate output in a specific,
predefined format. This pattern provides precise control over structure and presentation by using
placeholders that the model fills with generated content while preserving the overall formatting.

## Overview

Template prompting gives you fine-grained control over output structure. Instead of letting the
model choose how to format its response, you define the exact layout, use placeholders for
variable content, and instruct the model to populate those placeholders. This approach ensures
consistency across multiple generations and makes downstream processing more predictable.

## Example Prompt

Here's a practical example that demonstrates the Output Template pattern:

```
I am going to give you a template for an output. Capitalized words are my placeholders.
Fill in my placeholders with your output. Preserve the overall formatting of my template.

My template is 

Question word in Italic followed by : and placeholder QUESTION, write the letters capitalized.

Answer word in Italic followed by : and placeholder ANSWER

I will give you the data to format in the next prompt. Create twenty questions using my template.
Wait for me to give you the data.
```

This prompt establishes:
- Placeholder convention (capitalized words)
- Formatting requirements (italic text, capitalization rules)
- Expected structure (question-answer pairs)
- Generation quantity (twenty questions)
- Multi-turn interaction (wait for data)

## Example Output

Following the template above, the model would generate:

```
*Question:* WHAT IS PHOTOSYNTHESIS?

*Answer:* The process by which plants convert light energy into chemical energy

*Question:* WHO INVENTED THE TELEPHONE?

*Answer:* Alexander Graham Bell invented the telephone in 1876
```

## Use Cases

The Output Template pattern excels in scenarios requiring consistent formatting:

- **Structured data generation** 📊 — Generate CSV, JSON, or XML-like formats
- **Educational content** 📚 — Create flashcards, quizzes, or study materials
- **Documentation** 📝 — Produce API docs, changelogs, or release notes
- **Reports** 📈 — Generate standardized reports with fixed sections
- **Form filling** 📋 — Complete templates with variable information

## Related Patterns

The Output Template pattern combines well with other prompting strategies:

- **Few-Shot** — Provide filled template examples to guide the model
- **Persona** — Apply templates to persona-specific outputs
- **Chain-of-Thought** — Template the reasoning steps before the final answer

## Further Reading 🔗

- [From Prompts to Templates: A Systematic Prompt Template Analysis for Real-world LLMapps](https://arxiv.org/html/2504.02052)
- [How to Use Templates for ChatGPT Prompts (With Examples)](https://careercatalyst.asu.edu/newsroom/career/foundations-of-prompt-template-development/)
