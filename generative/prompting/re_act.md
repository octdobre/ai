# ReAct Prompting 🏁

ReAct (Reason + Act) is a prompting pattern that instructs a large language model (LLM) to
explicitly alternate between short reasoning steps and taking actions with tools that access
external knowledge (e.g., documents, wiki pages, APIs, search). The model consults sources,
gathers evidence, and then compiles a final, cited answer. 🧭📚🏃🏃‍♀️

## When to Use

- Resolve questions that require fresh, specific, or verifiable information.
- Synthesize answers from multiple documents or knowledge bases.
- Reduce hallucinations by grounding outputs in retrieved sources.
- Build agents that can search, read, extract, and assemble answers.

## Prompt Templates

### II. Prompt input example

```text
Question: Find out when the Tirolean Firmenlauf is going to start the 5.8k race. 🏃🏁

Follow ReAct: iterate Thought → Action → Observation until sufficient evidence, then provide a
concise Final answer followed by a Sources list.
```

### III. Prompt output example

```text
Thought 1: I should search for the official Tiroler/Tirol/Tirolean Firmenlauf site and event page.
Action 1: web_search(query="Tirolean Firmenlauf 5.8k start time official site")
Observation 1: Results show the official event website and a PDF with the schedule.

Thought 2: Open the official schedule page/PDF to locate the 5.8k start.
Action 2: web_get(url="https://example.tiroler-firmenlauf.at/schedule.pdf")
Observation 2: The schedule lists multiple events; the 5.8 km run start is noted with a time. 🏃‍♀️🏁

Thought 3: Cross-check with the event homepage or news post for confirmation.
Action 3: web_get(url="https://example.tiroler-firmenlauf.at/programm")
Observation 3: Confirms the same start time for the 5.8 km race.

Final answer: The 5.8 km Tirolean Firmenlauf race is scheduled to start at 18:30 (6:30 PM). 🏁

Sources:
- [Official schedule PDF]
- [Event programme page]
```

## Further Reading 🔗

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [LangChain ReAct](https://python.langchain.com/docs/expression_language/how_to/react)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP](https://arxiv.org/abs/2005.11401)
- [OpenAI function calling and tool use guide](https://platform.openai.com/docs/guides/function-calling)
 - [Model Context Protocol (MCP) Server documentation](https://modelcontextprotocol.io)


