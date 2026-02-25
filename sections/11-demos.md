# 🎬 Hands-On Demos

[← Previous: Future of Dev](./10-future-of-dev.md) · **Section 11 of 11** · [Appendix: APIs & SDKs →](./12-appendix-apis-and-sdks.md)

---

> **Time to see it in action.** These demos are designed to show real AI-assisted workflows, not synthetic toy examples.

---

## Table of Contents

- [Demo 1: Agent Mode — Build a Feature](#demo-1-agent-mode--build-a-feature)
- [Demo 2: Multi-File Debugging](#demo-2-multi-file-debugging)
- [Demo 3: MCP in Action](#demo-3-mcp-in-action)
- [Demo 4: CLI Power Tools](#demo-4-cli-power-tools)
- [Demo 5: UI Prototyping with v0](#demo-5-ui-prototyping-with-v0)
- [Running the Demos](#running-the-demos)
- [After the Demos](#after-the-demos)

---

## Demo 1: Agent Mode — Build a Feature

**Goal**: Show how VS Code Agent Mode can scaffold and implement a feature from a natural language description.

### Setup

Open the `demos/` directory in VS Code with Copilot enabled.

### The Prompt

```
Create a REST API endpoint that:
- POST /api/bookmarks
- Accepts { url: string, title?: string, tags?: string[] }
- Validates input with Zod
- Stores in an in-memory array
- Returns the created bookmark with an auto-generated ID and timestamp
- Include error handling for invalid URLs

Also create:
- GET /api/bookmarks (list all, with optional ?tag= filter)
- DELETE /api/bookmarks/:id
- Vitest tests for all endpoints
```

### What to Watch For

- Agent Mode creates multiple files without being asked
- Generates types, routes, validation, and tests together
- Terminal commands run automatically (installs packages, runs tests)
- You review and approve each step

### Key Takeaway

> "The developer's job becomes reviewing and directing, not typing."

---

## Demo 2: Multi-File Debugging

**Goal**: Show AI debugging a realistic error that spans multiple files.

### Setup

Use a pre-broken project (or introduce a bug into an existing one):

```typescript
// Bug: the auth middleware checks for a token in a custom header
// but the frontend sends it in the standard Authorization header.
// This causes silent auth failures.
```

### The Prompt

```
Users are reporting 401 errors when they're logged in.
The token is definitely valid — I checked.

Here's the error from the logs:
"Unauthorized: No token provided"

Relevant files:
@middleware/auth.ts
@routes/users.ts
@lib/tokenService.ts

What's wrong?
```

### What to Watch For

- AI reads multiple files and traces the data flow
- Identifies the case-sensitivity issue
- Suggests the fix AND explains why it happened
- Recommends a preventive measure (case-insensitive header access)

### Key Takeaway

> "AI can trace issues across files quickly — especially useful for subtle bugs that touch multiple modules."

---

## Demo 3: MCP in Action

**Goal**: Show how MCP servers extend what AI can do in your editor.

### Demos to Show

**1. Context7 — Live Documentation**

```
@context7 How do I use the App Router in Next.js 15
with server actions and form validation?
```

Shows: AI fetches current docs instead of relying on training data.

**2. Sequential Thinking — Complex Problem Solving**

```
Help me design a caching strategy for our API.
Requirements:
- 10K requests/minute
- Data changes every 5 minutes
- Some endpoints are user-specific
- Need to invalidate on writes
Think through this step by step.
```

Shows: The thinking MCP breaks the problem into structured reasoning steps.

**3. GitHub MCP — PR and Issue Management**

```
Show me the open PRs on this repo that have been waiting
for review for more than 3 days.
```

Shows: AI reads live data from GitHub without leaving the editor.

### Key Takeaway

> "MCPs turn AI from a chatbot into a connected assistant that can actually do things."

---

## Demo 4: CLI Power Tools

**Goal**: Show Claude Code or Codex CLI handling a real task from the terminal.

### Claude Code Demo

```bash
# Start Claude Code
claude

# Give it a task
> Look at the current codebase and add comprehensive
> error handling to all API routes. Each route should
> return appropriate HTTP status codes and error messages.
> Don't change any business logic.
```

### Codex CLI Demo

```bash
# Quick one-off task
codex "Add TypeScript strict mode to tsconfig.json
and fix all resulting type errors"
```

### What to Watch For

- CLI tools read the entire project context
- They make changes across multiple files
- They explain what they're changing and why
- You review a diff before accepting

### Key Takeaway

> "AI in the terminal = AI that understands your whole project, not just one file."

---

## Demo 5: UI Prototyping with v0

**Goal**: Show how quickly AI can create a working UI component.

### Live Demo at [v0.dev](https://v0.dev)

```
Create a project dashboard with:
- Sidebar with navigation links (Dashboard, Projects, Team, Settings)
- Header with search bar and user avatar
- Main content area with 4 stat cards (Total Projects, Active Tasks,
  Team Members, Completion Rate)
- A recent activity feed below the cards
- Dark mode support
- Use shadcn/ui components and Tailwind CSS
```

### What to Watch For

- Full working React component generated in seconds
- Responsive layout out of the box
- Can iterate with follow-up prompts ("make the sidebar collapsible")
- One-click export to your project

### Key Takeaway

> "UI prototyping cycles are dramatically shorter. The loop is now: prompt → preview → iterate."

---

## Running the Demos

### Demo Prep Checklist

Before running demos, verify everything works:

- [ ] VS Code open with Copilot extension active
- [ ] MCP servers running (Context7, Sequential Thinking, GitHub)
- [ ] Claude Code installed and authenticated (`claude --version`)
- [ ] Codex CLI installed and authenticated (`codex --version`)
- [ ] `demos/` directory — `npm install` done, `npm test` passes
- [ ] Font size increased (⌘+ or Ctrl+ several times)
- [ ] Terminal font size increased too
- [ ] API keys set as environment variables (NOT hardcoded)
- [ ] v0.dev account logged in on a separate browser tab
- [ ] Backup screenshots ready for each demo (in case of network issues)
- [ ] Wi-Fi tested — AI tools need internet

### Tips for Running Demos

1. **Narrate while AI works** — Don't sit in silence while code generates. Talk through what it's doing: "Notice it's creating the validation schema first..."
2. **Show right AND wrong** — Demo a bad prompt, then a good one. The contrast is more memorable than perfection.
3. **Have fallback plans** — If a demo fails, switch to screenshots or a pre-recorded version. Tech demos fail — it happens.
4. **Budget time wisely** — Each demo should take 5-8 minutes including discussion.
5. **Start with Demo 1** — It's the safest and most impressive. Build confidence before riskier demos.
6. **Save CLI demos for technical audiences** — Non-devs won't appreciate terminal workflows as much.

### Prerequisites

```bash
# Node.js 20+
node --version

# VS Code with Copilot
code --list-extensions | grep -i copilot

# Claude Code (optional)
claude --version

# Codex CLI (optional)
codex --version
```

### Quick Start

```bash
cd demos/
npm install
npm run dev
```

### Demo Project Structure

```
demos/
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── README.md            # Setup instructions
├── src/
│   ├── server.ts        # Express server entry
│   ├── types.ts         # Zod schemas & types
│   └── routes/
│       └── bookmarks.ts # CRUD route handlers
└── tests/
    └── bookmarks.test.ts  # Vitest integration tests
```

> 💡 **Tip**: Have the demos pre-loaded and dependencies installed. Nothing kills momentum like watching `npm install`.

---

## After the Demos

### Group Exercise: Everyone Tries AI

> 💡 **This is the most impactful part.** Get everyone to try AI _right now_.

**Universal prompt (works for any role):**

```
I'm a [your role] working on [brief project description].
What are 3 ways AI could save me time this week?
Be specific to my role and project.
```

Have everyone open ChatGPT, Claude, or Gemini on their phone/laptop and try this prompt. Then ask 2-3 people to share what they got.

### Discussion Questions

1. **"Which of these would save you the most time today?"**
2. **"What's a task from your current sprint that we could try with AI right now?"**
3. **"What concerns do you have about adopting these tools?"**

### The "Can AI Do This?" Challenge

Invite participants to name a task they think AI _can't_ handle. Try it live. Either:

- AI handles it → impressive demo
- AI fails → honest discussion about limitations (which builds trust)

Both outcomes build credibility and trust.

---

## 📚 Further Reading

- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Codex CLI (GitHub)](https://github.com/openai/codex)
- [Gemini CLI (GitHub)](https://github.com/google-gemini/gemini-cli)
- [v0.dev](https://v0.dev)

---

[← Previous: Future of Dev](./10-future-of-dev.md) · **Section 11 of 11** · [Appendix: APIs & SDKs →](./12-appendix-apis-and-sdks.md)
