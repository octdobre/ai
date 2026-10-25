# Writing a prompt pattern page

Pattern pages are the HTML files in this folder (`generative/prompting/`), styled by `assets/site.css`. Use [root.html](root.html) as the model for structure and markup.

## Page structure

- Open with a short paragraph (`<p class="lead">`), then a "Why it works" section near the top, then the examples.
- Start with the substance right after the opening paragraph. Cut filler sections such as "Why use this pattern" or "Core idea" when they repeat the opening.
- Remove sections that only repeat what's said elsewhere, such as a "When to use" section.
- Keep the gaps between the opening paragraph and the sections tight. Use the `h2`/`h3` margins in `site.css`; don't add spacing of your own.
- End with a "Further reading 🔗" section (`<h2 id="further-reading">`) and give it an entry in the "On this page" contents.

## Dates

- Each page shows when it was created, in the `.doc-meta` row between the category badge and the read time:
  `<span class="created">📅 Created: <time datetime="2025-08-27">August 27, 2025</time></span>`
- A new page's created date is the day you write it. Don't change the created date of an existing page.
- When you change pages, set "Last updated" to today's date on the front page, in both [index.html](../../index.html) and [README.md](../../README.md).

## Writing

- Use as few words as possible while staying clear. Brevity must never cost clarity.
- The opening paragraph states the problem the pattern solves in plain words, for example: LLMs forget the conversation's goal as it grows.
- When the page names its own pattern in prose, italicize it: `The <em>tail generation</em> pattern…`.
- Write prompts and examples as paragraphs, not bullet points.
- When quoting something, format it as a quote, in curly quotation marks (“…”), not as plain text. A quoted prompt inside a bubble or sentence is `<em>“…”</em>`.

## Examples

- Keep each page on its own pattern. Don't bring in other patterns (audience, goals, constraints and so on) or generic templates.
- Use concrete, real examples instead of vague placeholders, such as real facts to check on the Fact Check List page.
- Show examples as conversations: the user sets up the model, then they take turns, for example to learn a subject or research a problem.
- Remove or rewrite vague parts rather than leaving them in.

## Chat formatting

- Every user input is a right-aligned `bubble user`, like a chat message. This includes system prompts, templates and prompt libraries.
- Every bubble's `.who` label says whether it's from the user or the model, for example "User", "User · system prompt", "Model", "Before · no tail · Model", "After · with root prompt · Model".
- Real model output and descriptions of model output must look different. Put descriptions in a `<p class="note">` at the end of the bubble (it renders as "What happened"), never in the model's reply text.
- Wrap each exchange in `<div class="exchange">`. For before/after comparisons, put the two model bubbles in `<div class="compare">`, with `bubble before` for the reply without the pattern and `bubble model` for the reply with it.

```html
<div class="exchange">
  <div class="bubble user"><span class="who">User</span>…</div>
  <div class="compare">
    <div class="bubble before"><span class="who">Before · no tail · Model</span>…<p class="note">What went wrong.</p></div>
    <div class="bubble model"><span class="who">After · with tail · Model</span>…<p class="note">What changed.</p></div>
  </div>
</div>
```

## Links

- Every page has at least one reference link in Further reading. If it has none, find a relevant article about the page's pattern and add it.
- Only link to articles whose content is about the page's pattern.
- External links open in a new tab: `<a class="ext" href="…" target="_blank" rel="noopener">`.
- Don't change reference links (Further reading, external sources) unless they no longer work.
- If a link no longer works, replace it with a link to a working article on the same subject.
- A link that redirects still counts as working only if the page it lands on is still about the same subject.
