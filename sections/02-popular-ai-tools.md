# 🛠️ Popular AI Tools & Models

[← Previous: AI Fundamentals](./01-ai-fundamentals.md) · **Section 2 of 11** · [Next: Prompting Basics →](./03-prompting-basics.md)

---

> **"Which AI should I use?"** — The answer depends on the task. Here's your guide to the current landscape (February 2026).
>
> ⚠️ **Model names, versions, and pricing change frequently.** The specifics here were accurate as of Feb 2026 — always check provider websites for the latest model identifiers before using them in code or making purchasing decisions.

---

## Table of Contents

- [The Big Three](#the-big-three)
- [Head-to-Head Comparison](#head-to-head-comparison)
- [Current Top Models (Feb 2026)](#current-top-models-feb-2026)
- [How to Evaluate Models (Benchmarks 101)](#how-to-evaluate-models-benchmarks-101)
- [Open-Source & Other Notable Tools](#open-source--other-notable-tools)
- [Choosing the Right Tool](#choosing-the-right-tool)
- [Deep Research](#deep-research)
- [Try It Yourself](#-try-it-yourself)

---

## The Big Three

Every developer should be familiar with these three platforms. Each has unique strengths.

### 🟢 ChatGPT (OpenAI)

|                       |                                                              |
| --------------------- | ------------------------------------------------------------ |
| **Latest Models**     | GPT-5.2, GPT-5 mini, o3                                      |
| **Best For**          | General-purpose, code, image gen (DALL·E), fast iteration    |
| **Context Window**    | 400K tokens (GPT-5.2)                                        |
| **Pricing**           | Free tier (limited), Plus $20/mo, Pro $200/mo                |
| **Standout Features** | Canvas editor, DALL·E image gen, Codex CLI, code interpreter |

**Why developers choose it:**

- Massive user base — most tutorials and tips reference ChatGPT
- Built-in code interpreter (runs Python in a sandbox)
- Canvas mode for collaborative code/document editing
- Image generation with DALL·E and GPT-4o
- **Codex CLI** — open-source terminal agent with scheduled automation

```
💡 Pro Tip: Use Canvas mode when you want to collaboratively
   edit code or docs with the AI side-by-side.
```

🔗 [chat.openai.com](https://chat.openai.com) · [API Docs](https://platform.openai.com/docs)

---

### 🟣 Claude (Anthropic)

|                       |                                                                 |
| --------------------- | --------------------------------------------------------------- |
| **Latest Models**     | Claude Opus 4.6, Claude Sonnet 4.6, Claude 4.5 Haiku            |
| **Best For**          | Long-form reasoning, coding agents, careful analysis            |
| **Context Window**    | 200K tokens (up to 1M in beta)                                  |
| **Pricing**           | Free tier, Pro $20/mo, Max $100–200/mo (extended thinking)      |
| **Standout Features** | Projects, Artifacts, Extended Thinking, Claude Code CLI, Cowork |

**Why developers choose it:**

- **200K context window** — paste entire codebases for analysis
- **Artifacts** — generates interactive components, diagrams, and documents live
- **Projects** — upload reference docs and set persistent instructions
- **Extended Thinking** — watch the model reason step-by-step (great for debugging)
- **Claude Code** — the most powerful CLI coding agent available
- Known for being more honest about uncertainty — if it doesn't know, it says so

```
💡 Pro Tip: Use Claude's "Projects" to upload your team's
   coding standards and architecture docs. Claude will
   reference them in every conversation.
```

🔗 [claude.ai](https://claude.ai) · [API Docs](https://docs.anthropic.com) · [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)

---

### 🔵 Gemini (Google)

|                       |                                                                           |
| --------------------- | ------------------------------------------------------------------------- |
| **Latest Models**     | Gemini 3.1 Pro, Gemini 3 Flash                                            |
| **Best For**          | Multimodal (video, audio, images), huge context, Google ecosystem         |
| **Context Window**    | Up to **1 million tokens** (among the largest available)                  |
| **Pricing**           | Free tier (generous), Advanced $20/mo (included with Google One AI)       |
| **Standout Features** | Native Google integration, Gemini CLI, Deep Research, video understanding |

**Why developers choose it:**

- **1M token context** — analyze entire repositories at once
- **Truly multimodal** — natively understands text, code, images, audio, AND video
- **Google integration** — works with Gmail, Docs, Drive, Search
- **Deep Research** — autonomous agent that browses the web and compiles reports
- **Gemini CLI** — free tier with generous daily limits
- **Google Search grounding** — can search the web for current info

```
💡 Pro Tip: Gemini's 1M context window is a game-changer for
   code review. You can paste an entire large repo and ask
   questions about it.
```

🔗 [gemini.google.com](https://gemini.google.com) · [API Docs](https://ai.google.dev/docs) · [Gemini CLI](https://github.com/google-gemini/gemini-cli)

---

## Head-to-Head Comparison

| Feature              |  ChatGPT   |   Claude    |    Gemini    |
| -------------------- | :--------: | :---------: | :----------: |
| Code Generation      | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |   ⭐⭐⭐⭐   |
| Complex Reasoning    | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  |  ⭐⭐⭐⭐⭐  |
| Image Understanding  |  ⭐⭐⭐⭐  |  ⭐⭐⭐⭐   |  ⭐⭐⭐⭐⭐  |
| Image Generation     | ⭐⭐⭐⭐⭐ |     ❌      |   ⭐⭐⭐⭐   |
| Video Understanding  |   ⭐⭐⭐   |     ❌      |  ⭐⭐⭐⭐⭐  |
| Context Window       |    400K    |    200K     |    **1M**    |
| Web Search           |     ✅     |     ✅      |  ✅ (best)   |
| CLI Tool             | Codex CLI  | Claude Code |  Gemini CLI  |
| Free Tier            |  Limited   |   Limited   | **Generous** |
| Safety/Honesty Focus |   Medium   | **Highest** |    Medium    |

### Quick Decision Guide

```
┌─────────────────────────────────────────────────────────┐
│              WHICH AI SHOULD I USE?                       │
│                                                           │
│  Need to analyze a huge codebase?                         │
│  └── Gemini (1M context) or Claude (200K)                │
│                                                           │
│  Need an image generated?                                 │
│  └── ChatGPT (DALL·E / GPT-4o)                          │
│                                                           │
│  Need careful, step-by-step reasoning?                    │
│  └── Claude (Extended Thinking) or Gemini 3.1 Pro       │
│                                                           │
│  Need to analyze a video?                                 │
│  └── Gemini (native video understanding)                 │
│                                                           │
│  Need a terminal coding agent?                            │
│  └── Claude Code or Gemini CLI                           │
│                                                           │
│  Need to search the web for current info?                 │
│  └── Gemini or ChatGPT                                   │
│                                                           │
│  Working in Google Workspace?                             │
│  └── Gemini (native integration)                         │
│                                                           │
│  Not sure / first time?                                   │
│  └── Start with Claude or ChatGPT — both are excellent   │
└─────────────────────────────────────────────────────────┘
```

---

## Current Top Models (Feb 2026)

The AI landscape moves fast. Here's where things stand right now, based on independent benchmarks from [Artificial Analysis](https://artificialanalysis.ai/leaderboards/models), [LM Arena](https://lmarena.ai), and [Arena AI](https://arena.ai/leaderboard/):

### Frontier Models (Best Intelligence)

| Rank | Model                      | Provider  | Context | Approx. Cost (per 1M tokens) |
| ---- | -------------------------- | --------- | ------- | ---------------------------- |
| 🥇   | **Gemini 3.1 Pro Preview** | Google    | 1M      | $4.50                        |
| 🥈   | **Claude Opus 4.6**        | Anthropic | 200K    | $10.00                       |
| 🥉   | **Claude Sonnet 4.6**      | Anthropic | 200K    | $6.00                        |
| 4    | **GPT-5.2**                | OpenAI    | 400K    | $4.81                        |
| 5    | **GLM-5**                  | Zhipu AI  | 200K    | $1.55                        |
| 6    | **DeepSeek V3.2**          | DeepSeek  | 128K    | $0.32                        |

### Best Value (Intelligence per Dollar)

| Model              | Provider | Why It's Great                               |
| ------------------ | -------- | -------------------------------------------- |
| **DeepSeek V3.2**  | DeepSeek | Near-frontier intelligence at $0.32/M tokens |
| **Gemini 3 Flash** | Google   | Very capable, fast, $1.13/M tokens           |
| **GPT-5 mini**     | OpenAI   | Solid reasoning at $0.69/M tokens            |
| **Qwen3.5**        | Alibaba  | Strong open-weight model at $1.35/M tokens   |

### Fastest Models (Tokens per Second)

| Model                     | Speed     | Use Case               |
| ------------------------- | --------- | ---------------------- |
| **Mercury 2** (Inception) | 1,196 t/s | Ultra-low latency apps |
| **Gemini Flash-Lite**     | 473 t/s   | Quick responses        |
| **GPT-5 nano**            | 132 t/s   | Budget real-time apps  |

> 💡 **Key insight**: The "best" model depends on your use case. For most day-to-day coding and chat, a mid-tier model (Sonnet, GPT-5 mini, Gemini Flash) is fast, cheap, and plenty smart. Save the frontier models for complex reasoning tasks.

---

## How to Evaluate Models (Benchmarks 101)

New models drop every week — how do you know which is actually better? Benchmarks and leaderboards help, but they have caveats.

### Key Benchmarks to Know

| Benchmark                                          | What It Tests                                               | Why It Matters                                                              |
| -------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| [**LM Arena (Chatbot Arena)**](https://lmarena.ai) | Human preference — real users vote on anonymous responses   | The most trusted "vibes" benchmark. If users prefer it, it's probably good. |
| [**SWE-bench Verified**](https://www.swebench.com) | Can the AI fix real GitHub issues from open-source repos?   | Best measure of practical coding ability.                                   |
| **MMLU-Pro**                                       | Multiple-choice across 57 subjects                          | Broad knowledge test.                                                       |
| **GPQA Diamond**                                   | PhD-level science questions                                 | Tests deep reasoning.                                                       |
| **ARC-AGI**                                        | Novel pattern recognition — problems never seen in training | Tests genuine reasoning vs. memorization.                                   |

### Benchmark Caveats (Read This!)

```
⚠️ Benchmarks are useful but NOT the whole picture:

1. Models can be optimized FOR benchmarks (overfitting)
2. Benchmarks don't test real-world UX (latency, formatting, etc.)
3. Score differences of 1-2% are often meaningless
4. A model that's "best" on MMLU may be mediocre at coding
5. Vibes matter — LM Arena captures this, benchmarks don't
```

> 💡 **Best practice**: Check [LM Arena](https://lmarena.ai) or [Arena AI](https://arena.ai/leaderboard/) for "real user" rankings and [SWE-bench](https://www.swebench.com) for coding. Don't chase benchmark points — try the model on YOUR tasks.

### Model Strengths by Use Case

| Need               | Best Choice                         | Runner-Up           |
| ------------------ | ----------------------------------- | ------------------- |
| General coding     | Claude Sonnet 4.6                   | GPT-5.3 Codex       |
| Agentic workflows  | Claude Opus 4.6                     | Gemini 3.1 Pro      |
| Complex reasoning  | Claude Extended Thinking            | Gemini 3.1 Pro      |
| Media & multimodal | Gemini (native video, audio, image) | ChatGPT (GPT Image) |
| Speed / latency    | Gemini Flash                        | GPT-5 mini          |
| Huge context       | Gemini (1M tokens)                  | Claude (200K)       |
| Budget-friendly    | DeepSeek V3.2                       | Gemini Flash        |
| Privacy (local)    | Llama 4 (via Ollama)                | Qwen3.5             |

---

## Open-Source & Other Notable Tools

### Open-Weight Models (Run Locally or via API)

| Model               | Creator    | Standout                                 |
| ------------------- | ---------- | ---------------------------------------- |
| **Llama 4**         | Meta       | Top open-weight family, huge ecosystem   |
| **DeepSeek V3.2**   | DeepSeek   | Remarkable quality at extremely low cost |
| **Qwen3.5**         | Alibaba    | Strong multilingual support, many sizes  |
| **Mistral Large 3** | Mistral AI | European alternative, strong performance |

### Running Models Locally

```bash
# Run a model on your machine with Ollama (it's this easy!)
brew install ollama
ollama run llama3.2

# Now you have a local AI chatbot — no internet needed! 🎉
# Great for: privacy, offline use, experimentation
```

| Tool                                 | What It Does                   |
| ------------------------------------ | ------------------------------ |
| [**Ollama**](https://ollama.com)     | One-command local model runner |
| [**LM Studio**](https://lmstudio.ai) | GUI for running local models   |

### Specialized AI Tools

| Tool                                        | Purpose                                   |
| ------------------------------------------- | ----------------------------------------- |
| [**Perplexity**](https://perplexity.ai)     | AI-powered search with citations          |
| [**v0**](https://v0.dev)                    | AI UI generator (React + Tailwind)        |
| [**Bolt.new**](https://bolt.new)            | Full-stack app generator in browser       |
| [**NotebookLM**](https://notebooklm.google) | AI research assistant + podcast generator |
| [**Replit Agent**](https://replit.com)      | AI pair programmer with hosting           |

---

## Choosing the Right Tool

Here's a simple framework:

```
1. Start with ONE tool and get good at it
   (Claude or ChatGPT are both great starting points)

2. Learn a second tool for its unique strengths
   (e.g., Gemini for large context, ChatGPT for images)

3. Use specialized tools for specific needs
   (v0 for UI, Perplexity for research, etc.)

4. Don't try to learn everything at once
   — the tools are converging toward similar capabilities
```

---

## Deep Research

All three major providers now offer **deep research** — an agentic mode where the AI autonomously browses, reads, and synthesizes information before writing a structured report.

| Provider      | Feature Name      | How to Access                                        |
| ------------- | ----------------- | ---------------------------------------------------- |
| **Google**    | Deep Research     | Gemini Advanced ($20/mo) or Gemini API               |
| **OpenAI**    | Deep Research     | ChatGPT Plus/Pro/Team (model picker → Deep Research) |
| **Anthropic** | Research (Cowork) | Claude Pro/Max → Cowork mode for research tasks      |

> ⚠️ Anthropic's "Extended Thinking" is a different feature (step-by-step reasoning, not web browsing). Claude's web-search-based research is available via Cowork/tool-use features, not through extended thinking.

### What deep research actually does

```
Your question
  → AI generates a research plan (sub-questions, sources to check)
    → AI browses dozens of web pages autonomously
      → AI reads, evaluates, and cross-references findings
        → AI produces a structured report with citations
```

### When to use it

- **Technology evaluations** — "Compare message queue options for our use case"
- **Market research** — "What are the current CMS solutions with headless API support?"
- **Due diligence** — "Summarize the security track record of [library]"
- **Learning** — "Explain the tradeoffs of different state management approaches in React"

> Deep research typically takes 2–10 minutes per query (it's doing real browsing) and produces multi-page reports. It's not for quick questions — it's for questions that would take you an hour or more to research manually.

---

## 🧪 Try It Yourself

1. **Same-prompt test**: Send the exact same prompt to ChatGPT, Claude, and Gemini. Compare the responses — notice the personality differences.

2. **Find your default**: Based on your typical work, pick one tool to make your daily driver. Give it a week.

3. **Try a local model**: Install Ollama and run `ollama run llama3.2`. Ask it a coding question. Notice the difference in quality vs. cloud models.

---

## 📚 Further Reading

- [Arena AI](https://arena.ai/leaderboard/) — Multi-provider model leaderboard
- [Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) — Independent model speed & cost benchmarks
- [SWE-bench Leaderboard](https://www.swebench.com) — Real-world coding ability rankings
- ["There's an AI for That"](https://theresanaiforthat.com) — Discover specialized AI tools
- [Open LLM Leaderboard (Hugging Face)](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) — Open-weight model rankings

---

[← Previous: AI Fundamentals](./01-ai-fundamentals.md) · **Section 2 of 11** · [Next: Prompting Basics →](./03-prompting-basics.md)
