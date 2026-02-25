# 💻 Code Editors & CLI Tools

[← Previous: MCP Ecosystem](./05-mcp-ecosystem.md) · **Section 6 of 11** · [Next: Use Cases →](./07-use-cases.md)

---

> **Your code editor is now your most important AI interface.** Understanding how to leverage AI in your editor is the biggest daily productivity improvement for most developers.

---

## Table of Contents

- [The Editor Landscape](#the-editor-landscape)
- [VS Code + GitHub Copilot](#vs-code--github-copilot)
- [Cursor](#cursor)
- [Custom Instructions & Agent Config](#custom-instructions--agent-config)
- [Copilot Memory](#copilot-memory)
- [Agent Skills](#agent-skills)
- [CLI Tools: Claude Code, Codex, Gemini CLI](#cli-tools-claude-code-codex-gemini-cli)
- [Parallel Agents](#parallel-agents)
- [Try It Yourself](#-try-it-yourself)

---

## The Editor Landscape

```
┌────────────────────────────────────────────────────────┐
│              AI-POWERED CODE EDITORS                     │
│                                                          │
│  ┌───────────────────┐  ┌──────────────┐               │
│  │   VS Code +        │  │   Cursor     │               │
│  │   GitHub Copilot   │  │              │               │
│  │                     │  │              │               │
│  │  🏢 Enterprise     │  │  🚀 Power    │               │
│  │  standard           │  │  users       │               │
│  │                     │  │              │               │
│  │  ✅ Agent mode     │  │  ✅ Agent    │               │
│  │  ✅ MCP support    │  │  ✅ Composer │               │
│  │  ✅ Multi-model    │  │  ✅ MCP      │               │
│  └───────────────────┘  └──────────────┘               │
│                                                          │
│  Both support: inline completions, chat, multi-file      │
│  editing, terminal AI, and custom instructions.          │
└────────────────────────────────────────────────────────┘
```

---

## VS Code + GitHub Copilot

### What You Get

| Feature                 | What It Does                              |
| ----------------------- | ----------------------------------------- |
| **Inline Suggestions**  | Ghost text completions as you type        |
| **Copilot Chat** (⌃⌘I)  | Side panel AI conversation                |
| **Copilot Edits** (⌘⇧I) | Multi-file editing mode                   |
| **Agent Mode**          | Autonomous coding with tool use           |
| **MCP Support**         | Connect external tools and data           |
| **Multi-Model**         | Choose from Claude, GPT, Gemini, and more |

### Agent Mode

Agent mode lets Copilot autonomously plan and execute multi-step tasks:

```
You: "Add dark mode to the settings page"

Agent:
├── 🔍 Reads existing code structure
├── 📋 Creates a plan
│   ├── 1. Create ThemeContext
│   ├── 2. Add toggle component
│   ├── 3. Update CSS variables
│   └── 4. Add localStorage persistence
├── 💻 Implements each step
├── 🐚 Runs terminal commands (npm install)
├── 🧪 Runs tests to verify
└── ✅ Presents all changes for review
```

### Key Shortcuts

| Shortcut | Action                   |
| -------- | ------------------------ |
| `Tab`    | Accept inline suggestion |
| `Esc`    | Dismiss suggestion       |
| `⌃⌘I`    | Open Copilot Chat        |
| `⌘I`     | Inline chat at cursor    |
| `⌘⇧I`    | Open Copilot Edits       |

### Multi-Model Support (Feb 2026)

VS Code Copilot lets you choose your model per-conversation:

```
Available Models:
├── Claude Sonnet 4.6    ← Great for coding
├── Claude Opus 4.6      ← Deep reasoning
├── GPT-5.2              ← Fast all-rounder
├── o4-mini              ← Complex reasoning
├── Gemini 3.1 Pro       ← Large context
└── Gemini 3 Flash       ← Super fast
```

---

## Cursor

Cursor is a VS Code fork with AI deeply integrated into every interaction.

| Feature               | What It Does                                       |
| --------------------- | -------------------------------------------------- |
| **Composer**          | Multi-file AI editing with full codebase awareness |
| **⌘K**                | Inline code generation/editing                     |
| **Agent Mode**        | Autonomous multi-step implementation               |
| **.cursorrules**      | Per-project AI behavior customization              |
| **@-mentions**        | Reference files, docs, web, and git in prompts     |
| **Codebase indexing** | AI understands your entire repo                    |

### Cursor's @ System

```
@file       — Reference a specific file
@folder     — Reference a directory
@codebase   — Search the whole repo
@web        — Search the web
@docs       — Search documentation
@git        — Reference git history
```

### VS Code vs. Cursor — Quick Comparison

|              | VS Code + Copilot                 | Cursor                  |
| ------------ | --------------------------------- | ----------------------- |
| Base         | VS Code                           | VS Code fork            |
| Agent mode   | ✅                                | ✅                      |
| MCP support  | ✅                                | ✅                      |
| Custom rules | `.github/copilot-instructions.md` | `.cursorrules`          |
| Multi-model  | ✅                                | ✅                      |
| Price        | $10-39/mo                         | $20-40/mo               |
| Extensions   | Full marketplace                  | Most VS Code extensions |
| Enterprise   | Strong                            | Growing                 |

> 💡 **Bottom line**: Both are excellent. VS Code + Copilot is the safer enterprise choice. Cursor is often favored by power users who want deeper AI integration. You can't go wrong with either.

---

## Custom Instructions & Agent Config

### The Key Idea

You can tell AI how to behave in your specific project. This means consistent output across your team — no more generic boilerplate.

### Configuration Files

```
.github/
├── copilot-instructions.md        ← VS Code: global project rules (always-on)
├── instructions/
│   └── code-style.instructions.md ← VS Code: file-specific rules (applyTo globs)
├── agents/
│   └── my-agent.md                ← VS Code: custom reusable agents (invoke by name)
└── AGENTS.md                      ← General agent instructions (multi-agent compat)

CLAUDE.md                          ← Claude Code: project memory
.cursorrules                       ← Cursor: project rules
```

> The `.github/agents/` directory lets you define **custom agents** that Copilot can invoke by name in chat (e.g., `@my-agent`). Each `.md` file defines an agent's persona, instructions, and tools. Great for specialized workflows like "security reviewer" or "test writer."

### Example: copilot-instructions.md

```markdown
# Project Instructions

## Stack

- Next.js 15 with App Router, TypeScript, Tailwind CSS
- Vitest for testing, Zod for validation

## Code Style

- Use `const` by default; `let` only when reassignment is needed
- All functions need JSDoc comments with @param and @returns
- Use proper try/catch with meaningful error messages

## Conventions

- Use server actions, NOT API routes
- All money values stored in cents (integer)
- Conventional commits (feat:, fix:, chore:)
```

### Example: AGENTS.md

```markdown
# Agent Instructions

## Architecture

- This is a monorepo managed with Turborepo
- Frontend: /apps/web (Next.js 15)
- Backend: /apps/api (Express + TypeScript)
- Shared: /packages/shared (types, utils)

## Testing Rules

- All new code must include Vitest tests
- Minimum 80% coverage on new files
- Integration tests go in **tests**/ directories

## Common Commands

- `npm run build` — Build all packages
- `npm run test` — Run all tests
- `npm run lint` — Lint all packages
```

### Example: CLAUDE.md

```markdown
# Claude Code Project Memory

## About This Project

E-commerce platform for B2B wholesale orders.
~50K lines of TypeScript. PostgreSQL + Prisma ORM.

## Key Conventions

- All API responses use { success, data, error } shape
- Auth uses JWT stored in httpOnly cookies
- Prices are stored in cents (integer) — never use floats for money
- Feature flags in /lib/flags.ts

## Common Tasks

- Run dev server: `npm run dev` (port 3000)
- Run tests: `npm test`
- Generate Prisma client: `npx prisma generate`
- Migrate DB: `npx prisma migrate dev`
```

> 💡 **This is one of the highest-value, lowest-effort things you can do.** Write these once, and every AI interaction in your project follows your rules.

---

## Copilot Memory

Custom instructions are static — you write and maintain them manually. **Copilot Memory** takes this further by letting the AI _learn_ about your codebase over time.

### How it works

- Copilot stores **repository-scoped memories** — small, specific facts it discovers while working (e.g., "this repo uses httpOnly cookies for auth," "settings in config.ts and env.ts must stay in sync")
- Memories are **created automatically** as Copilot works on PRs and code reviews
- Each memory includes **citations** pointing to specific code locations
- Before using a memory, Copilot **validates it** against the current codebase — so stale info doesn't affect output
- Memories **expire after 28 days** unless revalidated through use

### Why it matters

- Memories **cross Copilot features** — something learned during code review will be applied by the coding agent, and vice versa
- Reduces repeating the same context in every prompt
- Works alongside (not instead of) instruction files

### How to enable

1. Copilot Memory is **off by default**
2. Enable in your GitHub settings (personal, org, or enterprise level)
3. View and delete stored memories from the repository settings page

> ⚠️ Copilot Memory is currently in **public preview** (as of Feb 2026). Available on Pro, Pro+, Business, and Enterprise plans.

🔗 [Copilot Memory Docs](https://docs.github.com/en/copilot/concepts/agents/copilot-memory)

---

## Agent Skills

**Agent Skills** are reusable capabilities you can install to give AI agents specialized knowledge — coding standards, framework patterns, best practices — without writing instructions from scratch.

### The skills.sh Ecosystem

[skills.sh](https://skills.sh) is the open registry for community-contributed skills. Install any skill with one command:

```bash
npx skills add <owner/repo>
```

Skills work across most major agents: VS Code Copilot, Claude Code, Cursor, Codex CLI, Gemini CLI, and more.

### Popular Skills

| Skill                              | What It Does                               |
| ---------------------------------- | ------------------------------------------ |
| `vercel-react-best-practices`      | React/Next.js performance patterns         |
| `web-design-guidelines`            | UI review against interface best practices |
| `frontend-design`                  | Production-grade frontend code generation  |
| `remotion-best-practices`          | Video creation in React with Remotion      |
| `supabase-postgres-best-practices` | Postgres optimization patterns             |

### How Skills Differ from Instructions

| Aspect          | Instructions files                   | Agent Skills                             |
| --------------- | ------------------------------------ | ---------------------------------------- |
| **Scope**       | Project-specific rules               | Reusable across projects                 |
| **Maintenance** | You write and maintain them          | Community-maintained                     |
| **Source**      | `.github/instructions/`, `AGENTS.md` | Installed from skills.sh or GitHub repos |
| **Best for**    | Your codebase conventions            | Framework/tool best practices            |

> 💡 Use **both** together: skills for general best practices (React patterns, Postgres optimizations), instructions for your project-specific conventions (auth approach, API shape, naming rules).

🔗 [skills.sh](https://skills.sh) · [Agent Skills Docs](https://code.visualstudio.com/docs/copilot/customization/agent-skills) · [agentskills.io](https://agentskills.io)

---

## CLI Tools: Claude Code, Codex, Gemini CLI

Beyond editors, there are powerful command-line AI tools:

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Claude Code  │  │  Codex CLI   │  │  Gemini CLI  │
│  (Anthropic)  │  │  (OpenAI)    │  │  (Google)    │
│               │  │              │  │              │
│ 🏆 Most      │  │ 🔓 Open     │  │ 🆓 Free     │
│  powerful     │  │  source     │  │  tier        │
│  agent        │  │  source     │  │  1000/day    │
│               │  │              │  │              │
│ MCP, hooks,  │  │ Skills,     │  │ 1M context,  │
│ subagents    │  │ agent jobs  │  │ Search       │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Claude Code

The most capable terminal AI agent. It reads your codebase, edits files, runs commands, and manages git.

```bash
# Install
npm install -g @anthropic-ai/claude-code

# Start in your project
cd your-project && claude

# One-shot command
claude "explain what this project does"

# Pipe input
cat error.log | claude "what's causing these errors?"
```

**Killer features:**

- **Subagents** — spawn parallel workers for independent tasks
- **Hooks** — event-driven automation (pre-commit, post-edit)
- **CLAUDE.md** — project-specific memory and instructions
- **MCP support** — same MCP ecosystem as VS Code

### OpenAI Codex CLI

Open-source terminal coding assistant from OpenAI.

```bash
# Install
npm install -g @openai/codex

# Start
codex
```

**Killer features:**

- **Open source** — community-driven, transparent
- **Skills system** — custom tools and workflows
- **Agent jobs** — scheduled background tasks (e.g., daily code quality checks)
- **Sandbox** — safe execution environment

### Google Gemini CLI

```bash
# Install via npm
npm install -g @google/gemini-cli

# Or run directly (no global install needed)
npx @google/gemini-cli

# Start
gemini
```

**Killer features:**

- **Free tier** — 1,000 requests/day, no credit card required
- **1M context** — analyze massive codebases
- **Google Search** — web-grounded answers

### CLI Comparison

|                | Claude Code      | Codex CLI   | Gemini CLI    |
| -------------- | ---------------- | ----------- | ------------- |
| Best at        | Agentic coding   | Automation  | Large context |
| MCP support    | ✅               | ✅          | ✅            |
| Subagents      | ✅               | ❌          | ❌            |
| Open source    | Source-available | ✅          | ✅            |
| Free tier      | ❌               | Via ChatGPT | ✅            |
| Scheduled jobs | Via hooks        | ✅          | ❌            |

---

## Parallel Agents

One of the most powerful advanced techniques: **run multiple AI agents simultaneously on different tasks.**

```
You: "Add rate limiting, write tests, update docs"

Terminal 1 (Claude Code):          Terminal 2 (Claude Code):
├── Adding rate limiting           ├── Writing test suite
│   middleware                     │   for all endpoints
│   ...working...                  │   ...working...
└── ✅ Done (2 min)                └── ✅ Done (3 min)

                Terminal 3 (Codex):
                ├── Updating API docs
                │   ...working...
                └── ✅ Done (2 min)

Total wall time: 3 minutes
Equivalent solo dev time: ~2 hours
```

### How to Do It

1. Open 2-3 terminal panes side by side
2. Give each agent an **independent** task (different files to minimize conflicts)
3. Let them work simultaneously
4. Review all changes

> 💡 This is conceptually similar to having multiple pair programmers — except they work in parallel and the cost scales linearly with token usage.

---

## 🧪 Try It Yourself

1. **Agent mode**: Open VS Code Copilot (⌘⇧I), switch to Agent mode, and ask it to build something. Watch how it plans and executes.

2. **Custom instructions**: Create a `.github/copilot-instructions.md` in your project with 5-10 rules. Ask the AI to generate code and verify it follows the rules.

3. **CLI trial**: Install Claude Code (`npm install -g @anthropic-ai/claude-code`) and try `claude "explain this project"` in a repo. Compare the experience to editor-based AI.

4. **Parallel agents**: Open two terminals, start two Claude Code sessions on different tasks in the same repo. Watch them work simultaneously.

---

## 📚 Further Reading

- [GitHub Copilot Docs](https://docs.github.com/en/copilot) — Official Copilot documentation
- [Cursor Docs](https://docs.cursor.com/) — Official Cursor documentation
- [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview) — Complete Claude Code reference
- [Codex CLI (GitHub)](https://github.com/openai/codex) — OpenAI's open-source CLI agent
- [Gemini CLI (GitHub)](https://github.com/google-gemini/gemini-cli) — Google's CLI tool
- [Aider](https://aider.chat/) — Popular open-source alternative (41K+ GitHub stars)

---

[← Previous: MCP Ecosystem](./05-mcp-ecosystem.md) · **Section 6 of 11** · [Next: Use Cases →](./07-use-cases.md)
