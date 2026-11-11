// Every blog post, one entry each. The front page shows the newest one and
// blog/index.html lists them all, newest first (sorted by date, so order here doesn't matter).
// To publish a post: copy blog/_template.html to blog/<slug>.html, write it, then add its entry here.
//
// {
//   slug: "2026-10-25-why-agents-need-specs",   // file name without .html
//   title: "Why agents need specs",
//   date: "2026-10-25",                          // YYYY-MM-DD
//   summary: "One or two sentences shown on the front page and the blog list.",
//   tags: ["agents"]                             // optional
// },
window.BLOG_POSTS = [
  {
    slug: "2026-11-11-the-mind-we-see-in-the-machine",
    title: "The mind we see in the machine",
    date: "2026-11-11",
    summary: "AI talks so well that many people feel someone is on the other side. What makes it look alive, and how that tricks us.",
    tags: ["llms", "consciousness"]
  },
];
