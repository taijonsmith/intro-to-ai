# 🤖 Intro to AI — A Developer's Guide

> **A practical, interactive guide to AI for developers and technical teams.**
> From beginners to power users — everyone learns something.

---

## 🎯 What Is This?

This repository is a self-contained guide to AI tools, techniques, and workflows for software developers. It covers everything from "What is an LLM?" to running parallel AI agents on your codebase.

**It's also a working example** — the repo itself uses custom instructions, MCP servers, agent templates, and AI-optimized project structure. The medium _is_ the message.

**Target audience**: Developers (and some non-devs) at any skill level.
**Goal**: Educate, demonstrate practical techniques, and help developers evaluate AI tools honestly — including their limitations.

---

## 📖 Table of Contents

### Foundations

| #   | Section                                             | What You'll Learn                                                |
| --- | --------------------------------------------------- | ---------------------------------------------------------------- |
| 01  | [AI Fundamentals](sections/01-ai-fundamentals.md)   | LLMs, tokens, how AI "thinks", reasoning models, hallucinations  |
| 02  | [Popular AI Tools](sections/02-popular-ai-tools.md) | ChatGPT vs Claude vs Gemini, model rankings, pricing, what's new |
| 03  | [Prompting Basics](sections/03-prompting-basics.md) | CRAFT framework, 5 techniques, AI tendencies, context rules      |

### Tools & Workflows

| #   | Section                                           | What You'll Learn                                                  |
| --- | ------------------------------------------------- | ------------------------------------------------------------------ |
| 04  | [Quality Checks](sections/04-quality-checks.md)   | Trust spectrum, spec-driven dev, TDD, agent council pattern        |
| 05  | [MCP Ecosystem](sections/05-mcp-ecosystem.md)     | What MCP is, top MCPs, setup for VS Code & Claude Desktop          |
| 06  | [Code Editors & CLI](sections/06-code-editors.md) | VS Code + Copilot, Cursor, Claude Code, Codex CLI, parallel agents |

### Applications & Strategy

| #   | Section                                                   | What You'll Learn                                      |
| --- | --------------------------------------------------------- | ------------------------------------------------------ |
| 07  | [Real-World Use Cases](sections/07-use-cases.md)          | PR reviews, debugging, docs, professional workflows    |
| 08  | [Creative AI](sections/08-creative-ai.md)                 | Image gen, audio, video, UI prototyping with v0        |
| 09  | [Privacy & Security](sections/09-privacy-and-security.md) | Data policies, threat model, team policies, compliance |
| 10  | [Future of Dev](sections/10-future-of-dev.md)             | How roles are changing, new skills stack, action plan  |
| 11  | [Hands-On Demos](sections/11-demos.md)                    | Agent Mode, debugging, MCP, CLI tools, v0 prototyping  |

### Reference

|     | Section                                                        |                                                     |
| --- | -------------------------------------------------------------- | --------------------------------------------------- |
| 📚  | [Appendix: APIs & SDKs](sections/12-appendix-apis-and-sdks.md) | AI SDK, OpenAI/Anthropic/Google APIs, code examples |

---

## 🚀 Getting Started

### Prerequisites

- [VS Code](https://code.visualstudio.com/) with [GitHub Copilot](https://github.com/features/copilot) extension
- [Node.js 20+](https://nodejs.org/) (for demo code)
- A ChatGPT, Claude, or Gemini account (for interactive exercises)

### Optional (for advanced demos)

- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) — `npm install -g @anthropic-ai/claude-code`
- [Codex CLI](https://github.com/openai/codex) — `npm install -g @openai/codex`
- [Ollama](https://ollama.com/) — for running models locally

### Setup

```bash
# Clone the repo
git clone <your-repo-url> intro-to-ai
cd intro-to-ai

# Open in VS Code (MCPs and custom instructions load automatically)
code .

# For demos that need packages:
cd demos/
npm install
npm run dev
```

---

## 📁 Repository Structure

```
intro-to-ai/
├── README.md                          ← You are here
├── .gitignore
├── .vscode/
│   └── mcp.json                       ← MCP server configurations
├── .github/
│   ├── copilot-instructions.md        ← Global AI instructions for this repo
│   ├── AGENTS.md                      ← Agent behavior rules
│   ├── instructions/
│   │   └── code-style.instructions.md ← Code style rules for AI
│   └── agent-templates/
│       ├── build-feature.md           ← Template: scaffold a feature
│       ├── code-review.md             ← Template: thorough code review
│       └── write-tests.md             ← Template: generate tests
├── sections/                          ← All guide content
│   ├── 01-ai-fundamentals.md
│   ├── 02-popular-ai-tools.md
│   ├── 03-prompting-basics.md
│   ├── 04-quality-checks.md
│   ├── 05-mcp-ecosystem.md
│   ├── 06-code-editors.md
│   ├── 07-use-cases.md
│   ├── 08-creative-ai.md
│   ├── 09-privacy-and-security.md
│   ├── 10-future-of-dev.md
│   ├── 11-demos.md
│   └── 12-appendix-apis-and-sdks.md
├── demos/                             ← Example demo code
├── archive/
│   └── sections-v1/                   ← Original 15-section drafts (reference)
└── assets/                            ← Images and media
```

---

## 🧰 Built-In AI Features

This repo demonstrates AI-native project setup. Open it in VS Code and try:

1. **Custom Instructions** — Ask Copilot to write code. It follows the rules in `.github/copilot-instructions.md` automatically.

2. **Agent Templates** — In Copilot chat, reference a template:

   ```
   Follow the build-feature template to create a TODO app
   ```

3. **MCP Tools** — Ask Copilot:

   ```
   Use Context7 to look up the Express.js middleware documentation
   ```

4. **AGENTS.md** — AI agents (Claude Code, Codex) read `.github/AGENTS.md` for repo-specific behavior rules.

### MCP Servers (Pre-Configured)

| MCP                     | What It Does                                                     |
| ----------------------- | ---------------------------------------------------------------- |
| **Context7**            | Pulls live documentation for any library into AI context         |
| **Sequential Thinking** | Structured multi-step reasoning for complex problems             |
| **GitHub**              | Interact with GitHub repos, issues, PRs through natural language |
| **Filesystem**          | Read/write/search files in the workspace                         |
| **Playwright**          | Browser automation for testing web apps                          |

> ⚠️ The GitHub MCP requires a `GITHUB_TOKEN` environment variable. Set it in your shell profile.

---

## 📊 Key Takeaways

After going through this guide, your team should understand:

- ✅ What LLMs are and how they work (at a practical level)
- ✅ Which AI tools to use and when (and what's current in Feb 2026)
- ✅ How to write effective prompts using the CRAFT framework
- ✅ How to integrate AI into daily development workflows
- ✅ How to maintain code quality with AI assistance
- ✅ MCP and how it connects AI to real tools
- ✅ Privacy and security best practices for client work
- ✅ How AI is changing the developer role (and how to adapt)

---

## 🤝 Contributing

This is a living document. To add or update content:

1. Create a branch: `git checkout -b update/section-name`
2. Edit the relevant markdown file in `sections/`
3. Open a PR — let Copilot review it 😉
4. Merge after human + AI review

---

## 📚 Quick Reference Links

| Resource            | URL                                                                |
| ------------------- | ------------------------------------------------------------------ |
| ChatGPT             | [chat.openai.com](https://chat.openai.com)                         |
| Claude              | [claude.ai](https://claude.ai)                                     |
| Gemini              | [gemini.google.com](https://gemini.google.com)                     |
| GitHub Copilot      | [github.com/features/copilot](https://github.com/features/copilot) |
| v0 (UI gen)         | [v0.dev](https://v0.dev)                                           |
| Ollama (local AI)   | [ollama.com](https://ollama.com)                                   |
| MCP Spec            | [modelcontextprotocol.io](https://modelcontextprotocol.io)         |
| ElevenLabs          | [elevenlabs.io](https://elevenlabs.io)                             |
| Vercel AI SDK       | [sdk.vercel.ai](https://sdk.vercel.ai)                             |
| Artificial Analysis | [artificialanalysis.ai](https://artificialanalysis.ai)             |

---

<div align="center">

**Built with AI, for humans learning AI.** 🤖

_This entire repository — structure, content, configs, and demos — was created with AI assistance. That's kind of the point._

</div>
