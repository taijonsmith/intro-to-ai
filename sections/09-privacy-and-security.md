# 🔒 Privacy & Security

[← Previous: Creative AI](./08-creative-ai.md) · **Section 9 of 11** · [Next: Future of Dev →](./10-future-of-dev.md)

---

> **"The biggest barrier to AI adoption isn't capability — it's trust."**
>
> A quick overview of what data goes where and how to use AI tools responsibly.

---

## Table of Contents

- [The Core Question](#the-core-question)
- [Data Flow: Where Does Your Code Go?](#data-flow-where-does-your-code-go)
- [Training vs. Context](#training-vs-context)
- [Enterprise Data Policies by Tool](#enterprise-data-policies-by-tool)
- [Threat Model for AI-Assisted Development](#threat-model-for-ai-assisted-development)
- [Best Practices for Teams](#best-practices-for-teams)
- [MCP Security Risks](#mcp-security-risks)
- [Running AI Locally (Maximum Privacy)](#running-ai-locally-maximum-privacy)
- [Try It Yourself](#-try-it-yourself)

---

## The Core Question

Every time you paste code into an AI tool, ask:

```
┌──────────────────────────────────────────────┐
│  1. Where is this data being sent?           │
│  2. Is it stored? For how long?              │
│  3. Will it be used to train future models?  │
│  4. Who else could potentially see it?       │
└──────────────────────────────────────────────┘
```

The answers vary **dramatically** between tools and plans.

---

## Data Flow: Where Does Your Code Go?

```
You type code in VS Code
        ↓
┌───────────────┐
│  Copilot       │ → Sent to GitHub/Azure servers for inference
│  Extension     │ → NOT stored for training (Business/Enterprise)
└───────────────┘ → Returned response, then discarded

vs.

You paste code in ChatGPT (Free)
        ↓
┌───────────────┐
│  ChatGPT       │ → Sent to OpenAI servers
│  Free Tier     │ → MAY be used for training
└───────────────┘ → Stored in conversation history
```

**Key insight**: The same AI company often has very different policies depending on the plan tier (free vs. paid vs. enterprise).

---

## Training vs. Context

This is the most misunderstood distinction:

| Concept                 | What It Means                                                        | Risk Level |
| ----------------------- | -------------------------------------------------------------------- | ---------- |
| **Training data**       | Your data becomes part of the model's weights — permanently baked in | 🔴 High    |
| **Context / inference** | Your data is sent for processing, then discarded                     | 🟡 Medium  |
| **Local processing**    | Never leaves your machine                                            | 🟢 Low     |

Think of it this way:

- **Training** = The AI **memorizes** your data
- **Context** = The AI **reads** your data, then forgets it
- **Local** = The AI never **sees** your data leave your machine

---

## Enterprise Data Policies by Tool

| Tool               | Free Tier                        | Paid/Business                                     | Enterprise                               |
| ------------------ | -------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| **GitHub Copilot** | N/A                              | ✅ No training on your code                       | ✅ No training, IP indemnity, audit logs |
| **ChatGPT**        | ⚠️ May train                     | ✅ No training (Team+)                            | ✅ No training, SOC 2, SSO               |
| **Claude**         | ⚠️ May train (opt-out available) | ✅ No training (Pro — opt-out enabled by default) | ✅ No training, SOC 2 Type II            |
| **Gemini**         | ⚠️ May use for improvement       | ✅ No training (Workspace)                        | ✅ No training, data residency           |
| **Cursor**         | ⚠️ Sends to API providers        | ✅ Privacy mode available                         | ✅ SOC 2, zero retention                 |

> 🎯 **Rule of thumb**: If you're on a **free tier**, assume your data may be used for training unless you explicitly opt out. **Paid tiers** generally default to not training on your data, but verify the current policy for each provider.

---

## Threat Model for AI-Assisted Development

### What Can Go Wrong

| Threat               | Example                                   | Mitigation                                                 |
| -------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| **Data leakage**     | Pasting API keys into ChatGPT             | Strip secrets before pasting; use .env files               |
| **Insecure code**    | AI generates SQL without parameterization | Security review all generated code                         |
| **Dependency risks** | AI suggests outdated/vulnerable packages  | Run `npm audit`, check package health                      |
| **Prompt injection** | Malicious input manipulates AI behavior   | Validate all inputs, don't trust AI output blindly         |
| **IP concerns**      | AI output resembles copyrighted code      | Use tools with IP indemnification (e.g., Copilot Business) |

### The Supply Chain Angle

```
Your code → AI tool → AI provider → Cloud infrastructure
                ↓
         Depends on:
         - Provider's privacy policy
         - Data center location
         - Sub-processor agreements
         - Retention policies
```

---

## Best Practices for Teams

### 1. Establish a Clear AI Usage Policy

Every team should have a written policy covering:

```markdown
## AI Usage Policy — [Team Name]

### Approved Tools

- GitHub Copilot (Business plan) ✅
- Claude (Pro or Team plan) ✅
- ChatGPT (Team or Enterprise plan) ✅

### Never Send to AI

- API keys, tokens, credentials, .env contents
- Production database contents
- PII (names, emails, SSNs, health data)

### Always Do

- Review all AI-generated code before committing
- Run security scans on AI suggestions
- Strip sensitive data before pasting
- Use paid tiers for work — they have better data policies
```

### 2. Use AI-Specific .gitignore Patterns

```gitignore
# AI conversation exports
.ai-conversations/
.claude/
.copilot/

# Environment files (should already be here)
.env
.env.local
.env.*.local
```

### 3. Leverage Privacy Mode in Tools

Most tools offer privacy modes or zero-retention options:

- **Cursor**: Privacy Mode → code never stored on their servers
- **Claude**: API usage → zero retention by default
- **GitHub Copilot**: Business plan → code excluded from training

### 4. Pre-Screening Prompts

Before pasting code into AI, quickly scan for:

```
✓ No hardcoded credentials or .env values
✓ No real customer data
✓ No production infrastructure details (IPs, hostnames)
✓ Code is representative, not the exact production version
```

---

## MCP Security Risks

MCP servers (covered in [Section 5](./05-mcp-ecosystem.md)) are powerful — but they introduce a new class of security concerns:

| Risk                           | Description                                                              | Mitigation                                                          |
| ------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **Over-permissioned servers**  | An MCP server with full filesystem or DB access can read/modify anything | Restrict to specific directories; use read-only mode where possible |
| **Untrusted MCP sources**      | Installing MCPs from unknown authors could introduce malicious tools     | Only install from verified sources (npm, official repos)            |
| **Credential exposure**        | MCP configs may contain hardcoded API keys                               | Use environment variables: `${GITHUB_TOKEN}`, never hardcode        |
| **Prompt injection via tools** | Malicious data returned by an MCP could manipulate the AI's behavior     | Don't auto-approve MCP tool calls; review what the AI is doing      |
| **Network access**             | Some MCPs make HTTP requests — they could exfiltrate data                | Review what endpoints the MCP connects to                           |

### MCP Security Checklist

- [ ] Only install MCPs from trusted, well-known sources
- [ ] Never give an MCP write access to production databases
- [ ] Never give filesystem MCPs access to `~` (home directory)
- [ ] Use `${ENV_VAR}` syntax for all credentials in MCP configs
- [ ] Don't auto-approve MCP tool calls — review them
- [ ] Regularly audit which MCPs are installed and active
- [ ] Prefer MCPs with open source code you can inspect

---

## Running AI Locally (Maximum Privacy)

For regulated or high-security environments where no data can leave the network:

```bash
# Install Ollama (local model runner)
brew install ollama

# Run a coding-focused model locally
ollama run qwen2.5-coder:14b

# Now you have a fully local AI — zero data leaves your machine
```

### Local vs. Cloud Trade-Offs

|                  | Cloud AI (ChatGPT, Claude)    | Local AI (Ollama)                           |
| ---------------- | ----------------------------- | ------------------------------------------- |
| **Intelligence** | Best-in-class                 | Good, but not frontier-level                |
| **Privacy**      | Depends on plan/provider      | Fully private — nothing leaves your machine |
| **Speed**        | Fast (powerful servers)       | Depends on your hardware (GPU helps)        |
| **Cost**         | Paid subscriptions / API fees | Free (just your hardware + electricity)     |
| **Offline**      | No — needs internet           | Yes — works completely offline              |

> 💡 **Tip**: If your organization prohibits cloud AI tools, local models are the answer. Pair Ollama with [Continue.dev](https://continue.dev/) (a VS Code extension) for a fully local Copilot alternative.

---

## 🧪 Try It Yourself

1. **Audit your workflow**: List every AI tool you use. Check if each one has a training opt-out for your plan tier.

2. **Secret scanner**: Use [gitleaks](https://github.com/gitleaks/gitleaks) or [trufflehog](https://github.com/trufflesecurity/trufflehog) to scan a repo for accidentally committed secrets. Then set up pre-commit hooks to prevent future leaks.

3. **Try local AI**: Install Ollama and run a model locally. Compare the experience to a cloud tool.

---

## 📚 Further Reading

- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/) — Privacy policies and data handling
- [Anthropic Privacy & Safety](https://www.anthropic.com/privacy) — Claude data policies
- [OpenAI Data Usage Policies](https://openai.com/enterprise-privacy/) — API and ChatGPT data handling
- [Ollama](https://ollama.com) — Run AI models locally
- [gitleaks](https://github.com/gitleaks/gitleaks) — Secret scanning for git repos
- [Continue.dev](https://continue.dev/) — Open-source local AI code assistant

---

[← Previous: Creative AI](./08-creative-ai.md) · **Section 9 of 11** · [Next: Future of Dev →](./10-future-of-dev.md)
