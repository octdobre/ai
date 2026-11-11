# Agent instructions

- Before writing or editing a prompt pattern page in `generative/prompting/`, read [generative/prompting/WRITING_GUIDE.md](generative/prompting/WRITING_GUIDE.md) and follow it.
- To publish a blog post: copy `blog/_template.html` to `blog/<YYYY-MM-DD>-<slug>.html`, fill in every TODO, then add an entry for it to `blog/posts.js`. That entry puts it at the top of `blog/index.html` and, if it's the newest, on the front page. Don't hand-edit the post lists in either page.
- To add a link: put a new entry at the top of `links/links.js` (title, one-sentence description, tag) with tracking parameters removed from the URL. The links page and the front page read from that file only.
- Whenever you add content that carries a date (a page's "Created" date, a blog post date, and so on) and that date is newer than the front page's, update the "Last updated" badge in `index.html` to the same date.
- Whenever you add a new element type to the site (a new component, a new class in `assets/site.css`, or a new page-local style), add an example of it to `theme/theme.html` in the fitting category. Links inside that page's examples use `href="#"` so they never navigate away.
- When writing any page or post, follow these rules:
  - Surround names (models, products, tools and so on) with quotes: "Llama 2", not Llama 2.
  - Write in paragraphs. Use bullet points only where a list really matters.
  - Each paragraph holds one idea in at most two sentences.
- Never rebase or rewrite history. Merge instead, and don't amend, reset or force-push.
- Never create git branches or worktrees. Make every change directly on `main`.
