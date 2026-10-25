// Every link on the site, one entry each. links/index.html shows them all (newest first) and
// picks 3 at random; the front page picks 1 at random.
// To add a link: put a new entry at the top of this list.
//
// {
//   url: "https://example.com/article",          // drop tracking parameters (utm_*, gclid, ...)
//   title: "Short title",
//   description: "One short sentence on what it is and why it's worth a look.",
//   tag: "Article"                                // Article, Video, Tool, Agents, Course, Community, Local LLMs, Culture
// },
window.LINKS = [
  {
    url: "https://agents.md/",
    title: "AGENTS.md",
    description: "An open format for a Markdown file that gives coding agents a project's setup, test and style instructions.",
    tag: "Agents"
  },
  {
    url: "https://www.tasteskill.dev/",
    title: "Taste Skill",
    description: "Open-source SKILL.md files that give coding agents design rules so their frontend code looks less generic.",
    tag: "Agents"
  },
  {
    url: "https://www.skool.com/maker-zero/about",
    title: "Maker Zero",
    description: "Free Skool community on Claude Code, Codex, AI agents and automation.",
    tag: "Community"
  },
  {
    url: "https://balajichippada.com/roadmap",
    title: "Agentic AI Engineer Roadmap (2026)",
    description: "A 26-week path from Python basics to multi-agent systems deployed on AWS.",
    tag: "Course"
  },
  {
    url: "https://www.xda-developers.com/dropped-qwen-and-gemma-for-27b-model-that-runs-smoothly-on-8gb-card/",
    title: "A 27B model on an 8GB graphics card",
    description: "XDA on Bonsai 27B, a 1-bit compressed Qwen-based model that fits on 8GB GPUs.",
    tag: "Local LLMs"
  },
  {
    url: "https://www.freecodecamp.org/news/build-and-train-a-25m-parameter-llm-from-scratch-on-your-cpu/",
    title: "Build and train a 25M-parameter LLM on your CPU",
    description: "freeCodeCamp video course: build, pre-train and fine-tune a small language model on a laptop.",
    tag: "Course"
  },
  {
    url: "https://www.opensourceprojects.dev/post/anti-slop",
    title: "Anti Slop",
    description: "Open-source agent skills that stop coding agents shipping generic UI and filler copy.",
    tag: "Agents"
  },
  {
    url: "https://info.mit-online.getsmarter.com/presentations/lp/mit-sloan-agentic-ai-program/",
    title: "MIT Sloan: Implementing Agentic AI",
    description: "Online short course on redesigning a business process as an agent-driven workflow.",
    tag: "Course"
  },
  {
    url: "https://github.com/github/awesome-copilot/blob/main/agents/dotnet-self-learning-architect.agent.md",
    title: ".NET Self-Learning Architect agent",
    description: "A Copilot agent file that designs .NET systems, delegates to subagents and saves lessons learned.",
    tag: "Agents"
  },
  {
    url: "https://en.wikipedia.org/wiki/Way_of_the_Future",
    title: "Way of the Future",
    description: "Wikipedia on the church Anthony Levandowski founded in 2015 to worship an AI godhead.",
    tag: "Culture"
  },
  {
    url: "https://manus.im/",
    title: "Manus",
    description: "AI agent product that builds slides, websites, games, video and designs.",
    tag: "Tool"
  },
  {
    url: "https://thenewstack.io/kill-code-review-theater/",
    title: "Kill the code review theater, keep the review",
    description: "The New Stack on dropping performative code review while keeping the real thing.",
    tag: "Article"
  },
  {
    url: "https://youtube.com/shorts/T1cZ3bbXumc",
    title: "Claude design tools for front-end work",
    description: "Short video on using Claude's design tools for front-end creativity and testing.",
    tag: "Video"
  }
];

// Returns n distinct links chosen at random.
window.randomLinks = function (n) {
  const pool = [...window.LINKS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
};

// Renders one link as a card, used by the front page and the links page.
window.linkCard = function (l) {
  const host = new URL(l.url).hostname.replace(/^www\./, '');
  return `<a class="card link-card" href="${l.url}" target="_blank" rel="noopener">
      <span class="link-meta"><span class="link-tag">${l.tag}</span><span class="link-host">${host}</span></span>
      <span class="card-title">${l.title} <span class="arrow">↗</span></span>
      <p>${l.description}</p>
    </a>`;
};
