# How Grammar Shapes LLM Outputs ✍️🧠

A prompt's grammar strongly guides what a large language model (LLM) produces. Clear
subjects, precise actions, and scoped qualifiers reduce ambiguity, leading to more
reliable and controllable results.

## Key Grammar Elements and Their Effects 📚

### I. Nouns (subjects, objects) 🧱
1. Anchor the model on specific entities or domains; increase precision.
2. Named entities trigger retrieval- or pattern-like responses around known topics.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">❌ Vague</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">✅ Specific</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Explain this <strong>process</strong>.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Explain the <strong>photosynthesis process in cyanobacteria for high-school students</strong>.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - This process has several steps and uses light.<br/>
        - Organisms convert energy in general terms.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Cyanobacteria absorb light via chlorophyll a.<br/>
        - Water splits to release oxygen.<br/>
        - ATP/NADPH power carbon fixation (Calvin cycle).<br/>
        - Simple, teen-friendly explanation with 2 examples.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### II. Verbs, Mood, and Tense 🚀
1. Imperatives ("list", "summarize", "compare") prompt actions/outputs.
2. Interrogatives (questions) invite reasoning/explanations.
3. Tense anchors timeframe; present/future can change recommendations.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🛠️ Action</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">❓ Question</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><strong>List</strong> three risks of using web scrapers.</td>
      <td style="border: 1px solid #ccc; padding: 6px;"><strong>What are</strong> three risks of using web scrapers?</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - There are some legal and technical risks.<br/>
        - It depends on the site and laws.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Legal exposure (ToS, CFAA).<br/>
        - IP blocking/rotation overhead.<br/>
        - Data quality drift; requires monitoring.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### III. Adjectives and Adverbs (qualifiers) 🎛️
1. Control tone, depth, and style: "brief", "formal", "step-by-step", "creatively".
2. Too many or conflicting qualifiers create ambiguity.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🪢 Neutral</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🎯 Qualified</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Summarize the paper.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Summarize the paper <strong>briefly and objectively</strong> in <strong>120–150 words</strong>.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - This paper is about many things and has results.<br/>
        - It explains methods and findings generally.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - 130-word neutral summary.<br/>
        - States problem, approach, key metrics, limits.<br/>
        - No opinionated adjectives.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### IV. Determiners and Quantifiers 🔢
1. Constrain scope: "exactly", "at least", "each", "every".
2. Help the model size the output and avoid over/under-generation.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🌫️ Loose</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">📏 Constrained</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Provide <strong>some</strong> bullet points.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Output <strong>exactly 5</strong> bullet points, <strong>each</strong> under <strong>15 words</strong>.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Multiple points in one line with rambly text and numbers vary.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Exactly five concise bullets.<br/>
        - Each line ≤ 15 words.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### V. Pronouns and Coreference 🔁
1. Unclear "it/this/they" leads to drift or hallucination.
2. Replace pronouns with explicit nouns or re-state the referent.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">⚠️ Ambiguous</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">✅ Clear</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Improve <strong>it</strong> and make <strong>it</strong> shorter.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Rewrite the <strong>executive summary</strong> to <strong>120 words</strong> with <strong>simpler vocabulary</strong>.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Revises the wrong section; inconsistent length.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - 118–122 words, plain language.<br/>
        - Conserves key facts and outcomes.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### VI. Prepositional Phrases (scope and constraints) 📍
1. Add audience, domain, format, or platform (e.g., "for beginners", "in Python", "under 200 words", "as a JSON array").

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🌐 Generic</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🎯 Scoped</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Generate a setup guide.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Generate a step-by-step setup guide <strong>in Markdown for Windows 11</strong>.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Generic, OS-agnostic steps, missing screenshots.
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        - Windows 11 specific steps with headings.<br/>
        - Includes PowerShell commands in code blocks.
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

### VII. Syntax and Structure 🗂️
1. Lists, tables, and numbered steps reduce ambiguity and improve adherence.
2. Use explicit output schemas when needed.

<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🧩 Unstructured</th>
      <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">🧱 Structured</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">Write how to install the tool.</td>
      <td style="border: 1px solid #ccc; padding: 6px;">Return <strong>JSON</strong> with keys: <strong>title</strong> (string), <strong>steps</strong> (array of strings).</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Poor output</em></td>
      <td style="border: 1px solid #ccc; padding: 6px;"><em>Correct output</em></td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 6px;">
        <pre style="margin: 6px 0; white-space: pre-wrap;">First, download it. Then install it by following the instructions on the website. After that, you can run it. Finally, make sure it works.</pre>
      </td>
      <td style="border: 1px solid #ccc; padding: 6px;">
        <pre style="margin: 6px 0; white-space: pre-wrap;">{
  "title": "Install FooCLI",
  "steps": [
    "Download FooCLI from releases page",
    "Unzip and add to PATH"
  ]
}</pre>
      </td>
    </tr>
  </tbody>
</table>

<div style="height: 24px;"></div>

## Quick Checklist for Better Prompts ✅
1. 🧱 Subject: Have you named the exact thing (noun) you care about?
2. 🚀 Action: Is the requested operation expressed with a strong imperative verb?
3. 🎛️ Qualifiers: Did you constrain tone, length, or depth appropriately?
4. 🔁 References: Did you resolve pronouns and remove ambiguity?
5. 📍 Scope/Format: Did you specify audience, domain, and output structure?

By aligning nouns, verbs, and modifiers with your intent—and by structuring the
expected output—you make it easier for an LLM to produce accurate, useful responses.

<div style="height: 24px;"></div>

## Documentation and Further Reading 📖
1. Microsoft Learn — Prompt engineering concepts (clarity, avoid ambiguous pronouns): [https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering)
2. OpenAI — Best practices (clear, specific instructions; style and tone control): [https://platform.openai.com/docs/guides/prompt-engineering](https://platform.openai.com/docs/guides/prompt-engineering)
3. Anthropic — Prompting with Claude (be specific and concrete; resolve references): [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
