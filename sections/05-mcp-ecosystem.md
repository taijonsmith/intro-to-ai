# 🔌 The MCP Ecosystem

[← Previous: Quality Checks](./04-quality-checks.md) · **Section 5 of 11** · [Next: Code Editors & CLI →](./06-code-editors.md)

---

> **MCP is to AI what USB-C is to devices** — a universal standard that lets AI models connect to any tool, data source, or service through a single protocol.

---

## Table of Contents

- [What Problem Does MCP Solve?](#what-problem-does-mcp-solve)
- [How MCP Works](#how-mcp-works)
- [Top MCPs You Should Know](#top-mcps-you-should-know)
- [Setting Up MCPs](#setting-up-mcps)
- [Security Considerations](#security-considerations)
- [Try It Yourself](#-try-it-yourself)

---

## What Problem Does MCP Solve?

Before MCP, every AI tool had to build custom integrations with every service. This didn't scale.

```
WITHOUT MCP (every tool needs its own integration):
┌─────────┐     ┌──────────┐
│ Claude   │────→│ GitHub   │  Custom integration
│ Claude   │────→│ Slack    │  Custom integration
│ ChatGPT  │────→│ GitHub   │  DIFFERENT custom integration
│ ChatGPT  │────→│ Slack    │  DIFFERENT custom integration
│ Copilot  │────→│ GitHub   │  YET ANOTHER custom integration
└─────────┘     └──────────┘

WITH MCP (build once, works everywhere):
┌─────────┐     ┌─────┐     ┌──────────┐
│ Claude   │────→│     │────→│ GitHub   │  1 MCP server
│ ChatGPT  │────→│ MCP │────→│ Slack    │  1 MCP server
│ Copilot  │────→│     │────→│ Database │  1 MCP server
└─────────┘     └─────┘     └──────────┘
```

### MCP in One Sentence

> **MCP (Model Context Protocol)** is an open standard that defines how AI apps connect to external tools and data sources — created by Anthropic, now governed by the Linux Foundation.

|                   |                                                                  |
| ----------------- | ---------------------------------------------------------------- |
| **Created**       | Anthropic (November 2024)                                        |
| **Governance**    | Linux Foundation                                                 |
| **Protocol**      | JSON-RPC 2.0                                                     |
| **Supported by**  | VS Code, Cursor, Claude Desktop, Windsurf, Claude Code, and more |
| **SDK Languages** | TypeScript, Python, Java, Kotlin, C#, Go, Rust, and more         |

🔗 [modelcontextprotocol.io](https://modelcontextprotocol.io/) · [GitHub](https://github.com/modelcontextprotocol)

---

## How MCP Works

### The Architecture

```
┌──────────────────────────────────────────────────────┐
│                  HOST APPLICATION                      │
│             (VS Code, Claude Desktop)                  │
│                                                        │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │ MCP      │  │ MCP      │  │ MCP      │          │
│   │ Client 1 │  │ Client 2 │  │ Client 3 │          │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘          │
└────────┼─────────────┼─────────────┼─────────────────┘
         │             │             │
   ┌─────▼─────┐ ┌────▼────┐ ┌─────▼─────┐
   │ GitHub    │ │ Notion  │ │ Database  │
   │ MCP Server│ │ MCP     │ │ MCP Server│
   └───────────┘ └─────────┘ └───────────┘
```

### What MCP Servers Expose

| Capability    | Description               | Example                                    |
| ------------- | ------------------------- | ------------------------------------------ |
| **Tools**     | Functions the AI can call | `create_issue`, `run_query`, `search_docs` |
| **Resources** | Data the AI can read      | Files, database records, API responses     |
| **Prompts**   | Reusable prompt templates | "Summarize this PR", "Review for security" |

### How a Tool Call Works (Plain English)

```
1. You: "Create a GitHub issue for the login bug"

2. AI recognizes it needs the GitHub MCP

3. AI calls the MCP: create_issue(repo: "myapp", title: "Login bug")

4. MCP server calls the GitHub API and creates the issue

5. AI: "Done! I created issue #42: https://github.com/..."
```

It's that simple. The AI gets access to real tools, and you stay in your editor.

---

## Top MCPs You Should Know

### Essential MCPs

#### 📚 Context7 — Live Library Docs

Instead of the AI hallucinating API details from outdated training data, Context7 fetches **current documentation** directly.

```
Without Context7: AI guesses at API syntax → might be wrong
With Context7:    AI fetches current docs → accurate every time
```

🔗 [github.com/upstash/context7](https://github.com/upstash/context7)

#### 🧠 Sequential Thinking — Better Reasoning

Lets the AI work through complex problems step-by-step in a structured way — branching, revising, and exploring different approaches before committing to an answer.

🔗 [npmjs.com/package/@modelcontextprotocol/server-sequential-thinking](https://www.npmjs.com/package/@modelcontextprotocol/server-sequential-thinking)

#### 🐙 GitHub — Repo Management

Create issues, manage PRs, search code, review changes — all through natural language.

🔗 [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

#### 🗃️ Filesystem — File Access

Read, write, and search files on your machine. (Use with caution — restrict to specific directories.)

🔗 [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

### Other Notable MCPs

| MCP            | What It Does                                     |
| -------------- | ------------------------------------------------ |
| **Notion**     | Read/write Notion pages and databases            |
| **Supabase**   | Manage databases, run SQL, deploy edge functions |
| **Playwright** | Browser automation and testing                   |
| **PostgreSQL** | Direct database queries                          |
| **Slack**      | Read/send messages, manage channels              |
| **Sentry**     | Query error logs and performance data            |
| **Linear**     | Issue tracking and project management            |

### MCP for QA & Testing (Playwright)

One of the most impressive MCP use cases: **AI-powered automated testing.**

With the Playwright MCP, the AI can:

```
Available tools:
├── browser_navigate    — Go to a URL
├── browser_click       — Click elements
├── browser_fill_form   — Fill in forms
├── browser_take_screenshot — Capture the screen
├── browser_snapshot    — Get accessibility tree
├── browser_evaluate    — Run JS in the browser
└── ...and more
```

**Example: AI-Powered Login Test**

```
Prompt: "Navigate to localhost:3000/login, fill in the email
and password fields, click Submit, and verify we land on
the dashboard page."

AI + Playwright MCP:
1. browser_navigate("http://localhost:3000/login")
2. browser_fill_form("#email", "test@example.com")
3. browser_fill_form("#password", "password123")
4. browser_click("button[type='submit']")
5. browser_take_screenshot()  ← Shows dashboard! ✅
```

> 💡 AI-driven QA testing in a real browser is one of the most impressive MCP use cases — and something most developers haven't seen yet.

### Where to Find MCPs

- [mcp.so](https://mcp.so) — MCP marketplace / directory
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Official reference servers
- [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) — Community curated list

---

## Setting Up MCPs

MCPs are configured in your editor's settings. Here's how it looks in VS Code:

### VS Code Configuration

Create `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "${workspaceFolder}"
      ]
    }
  }
}
```

> ⚠️ **Important**: Never hardcode API keys in config files. Use `${ENV_VAR}` syntax to reference environment variables.

### Claude Desktop Configuration

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

---

## Security Considerations

MCPs are powerful — they give AI direct access to systems. Use them wisely.

```
┌──────────────────────────────────────────────────┐
│              MCP SECURITY RULES                    │
│                                                    │
│  ✅ Only install MCPs from trusted sources         │
│  ✅ Review source code before installing           │
│  ✅ Limit filesystem access to project dirs        │
│  ✅ Use env vars for API keys (never hardcode)     │
│  ✅ Prefer local MCPs over remote ones             │
│  ❌ Never give filesystem MCP access to ~ or /     │
│  ❌ Never install MCPs from unknown authors         │
│  ❌ Never put real tokens in config files           │
└──────────────────────────────────────────────────┘
```

For more on security, see [Section 09 — Privacy & Security](./09-privacy-and-security.md).

---

## 🧪 Try It Yourself

1. **Check this repo**: Look at the `.vscode/mcp.json` in this project — it has MCPs configured that you can try out yourself.

2. **Verify your setup**: In VS Code, open the Command Palette (⌘⇧P) → "MCP: List Servers" → verify servers show as running. Then look for MCP tools appearing in Copilot Chat.

3. **Ask with Context7**: Next time you're unsure about a library's API, ask an AI tool with Context7 enabled. Compare the accuracy vs. asking without it.

4. **Browse MCPs**: Visit [mcp.so](https://mcp.so) and find 2-3 MCPs that would be useful for your daily work.

5. **Build Your Own MCP** (advanced): MCPs are surprisingly easy to build. Here's a minimal example:

<details>
<summary><strong>TypeScript MCP Server Example (~30 lines)</strong></summary>

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "team-acronyms",
  version: "1.0.0",
});

// Define a tool that AI can call
server.tool(
  "lookup_acronym",
  "Look up what a team acronym means",
  { acronym: z.string().describe("The acronym to look up") },
  async ({ acronym }) => {
    const acronyms: Record<string, string> = {
      SOW: "Statement of Work",
      RFP: "Request for Proposal",
      ADR: "Architecture Decision Record",
      SLA: "Service Level Agreement",
    };
    const result = acronyms[acronym.toUpperCase()] ?? "Unknown acronym";
    return { content: [{ type: "text", text: result }] };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
```

Add to your `.vscode/mcp.json`:

```json
{
  "servers": {
    "team-acronyms": {
      "command": "npx",
      "args": ["tsx", "path/to/your-mcp-server.ts"]
    }
  }
}
```

</details>

---

## 📚 Further Reading

- [MCP Specification](https://modelcontextprotocol.io/) — Official protocol documentation
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) — Build MCPs in TypeScript
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) — Build MCPs in Python
- [VS Code MCP Docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) — Setting up MCPs in VS Code
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) — Browser automation MCP
- [Context7 Docs](https://github.com/upstash/context7) — Live documentation MCP

---

[← Previous: Quality Checks](./04-quality-checks.md) · **Section 5 of 11** · [Next: Code Editors & CLI →](./06-code-editors.md)
