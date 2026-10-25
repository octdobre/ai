# Agent instructions

- Before writing or editing a prompt pattern page in `generative/prompting/`, read [generative/prompting/WRITING_GUIDE.md](generative/prompting/WRITING_GUIDE.md) and follow it.
- To publish a blog post: copy `blog/_template.html` to `blog/<YYYY-MM-DD>-<slug>.html`, fill in every TODO, then add an entry for it to `blog/posts.js`. That entry puts it at the top of `blog/index.html` and, if it's the newest, on the front page. Don't hand-edit the post lists in either page.
- To add a link: put a new entry at the top of `links/links.js` (title, one-sentence description, tag) with tracking parameters removed from the URL. The links page and the front page read from that file only.
- Never rebase or rewrite history. Merge instead, and don't amend, reset or force-push.
