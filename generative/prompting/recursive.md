# Iterative Prompt Refinement

Iterative prompt refinement is a practical way to steer a large language model (LLM) toward
clearer, more accurate, and more useful outputs. By testing, diagnosing, and revising in short
loops, you convert vague intent into precise instructions the model can follow. 🔁

## Step By Step

**Input**: "Write a short product update about our app’s new offline mode."

**Step 1**: A **vague prompt** yields a **generic, low‑value output** — little context, low relevance. 😕

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Prompt: Write a quick update.</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Output: We launched a new feature. It’s great.</td>
  </tr>
  
</table>

**Step 2**: Adding **clear constraints** produces a **clearer, more relevant output** with concrete details. ✍️✨

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Prompt: Write 120–150 words for end users; include the key
    benefit and how to enable; avoid jargon.</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Output: Offline mode lets you keep working without internet and
    syncs when you’re back online. To enable it, open Settings and turn on Offline Mode. This reduces interruptions and
    helps you capture ideas anywhere.</td>
  </tr>
  
</table>

**Step 3**: Adding **structure** and a **tone exemplar** results in an **on‑tone, actionable output**. 🧩✅

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Prompt: Three sentences: what changed, why it matters for
    productivity, how to turn it on in Settings; tone warm and concise. Example tone: “We built this to help you
    focus.”</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Output: We’re introducing offline mode so you can keep writing
    without an internet connection. It reduces interruptions and keeps your notes synced the moment you’re back online.
    To try it, open Settings → Features and switch on Offline Mode.</td>
  </tr>
  
</table>

**Step 4**: A brief **self‑check** reduces misses and yields a **polished final answer**. 🔎✅

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Prompt: Before finalizing, verify: 3 sentences, includes benefit
    and enable steps, no jargon; if any fail, fix once.</td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Output: We’re introducing offline mode so you can capture ideas
    without an internet connection. It keeps your notes synced when you’re back online, reducing interruptions and
    helping you stay focused. To try it, open Settings → Features and switch on Offline Mode.</td>
  </tr>
  
</table>

## Choosing a Stop Rule ✅

- **Stability**: Two consecutive iterations produce materially similar outputs.
- **Cost**: Marginal gains no longer justify additional tokens.

## Further Reading 🔗

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)

