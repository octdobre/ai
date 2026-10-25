# Menu Actions Pattern ⚡📋🚀

*Created: October 13, 2025*

Define a small, explicit menu of action keywords (macro triggers) 🧩. Each keyword expands into a longer
instruction the model follows consistently, so you avoid retyping formatting or process guidance every
turn 💨. After this menu is installed at the start of a session, you can run complex workflows by sending only
short control tokens (for example: `ANALYZE` 🔍, `REFORMAT:JSON` 🛠️, `CRITIQUE|depth=2` 🧪).

### I. Example Installation Prompt 🧾✨
```text
Whenever I write "summary", write a paragraph summary about the input.
When I write "bulletpoint", write a bullet pointed list about the input.
When I write "mainidea", summarize into one sentence with the main idea from the input.
If my message does not start with one of those trigger words, ask me which of (summary | bulletpoint | mainidea) I want.
Confirm installation by restating the triggers in a compact table, then wait for input.
```

### II. Follow‑Up Interaction Example 🔄💬

User (after sending installation prompt) 📨
```text
(Model renders table: Trigger | Output Form | Length Constraints)  
summary | Paragraph (<=1 short paragraph)  
bulletpoint | Bulleted list (5–8 concise items)  
mainidea | Single sentence (<=25 words)  
```

User 📝
```text
summary Climate change accelerates polar ice melt, affecting sea levels and weather extremes.
```
Model 🤖
```text
Polar ice is melting faster, driving sea level rise and amplifying extreme weather patterns through disrupted
temperature and moisture dynamics.
```

User 🗂️
```text
bulletpoint The same sentence.
```
Model 🤖
```text
• Accelerating polar ice melt  
• Rising global sea levels  
• Increased frequency of extreme weather  
• Disrupted temperature/moisture patterns  
```

User 💡
```text
mainidea Provide a broader paragraph about software reliability and testing.
```
Model 🤖
```text
Rigorous, automated testing underpins software reliability by catching regressions early and creating a
repeatable safety net for change.
```

## Further Reading 🔗📚

- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382)

