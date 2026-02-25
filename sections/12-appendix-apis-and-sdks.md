# 📚 Appendix: APIs & SDKs

[← Previous: Demos](./11-demos.md) · **Appendix** · [📖 README](../README.md)

---

> **This appendix is reference material** for developers who want to go deeper into building AI-powered features.
>
> ⚠️ **Model names and context windows are current as of Feb 2026.** Check provider docs for the latest model identifiers before copy-pasting code examples.

---

## Table of Contents

- [AI SDK by Vercel](#ai-sdk-by-vercel)
- [OpenAI API](#openai-api)
- [Anthropic API](#anthropic-api)
- [Google Gemini API](#google-gemini-api)
- [When to Use What](#when-to-use-what)
- [Quick Start: Build a Chat API](#quick-start-build-a-chat-api)
- [Common Patterns](#common-patterns)
- [Further Reading](#further-reading)

---

## AI SDK by Vercel

The **recommended starting point** for TypeScript/JavaScript developers.

The [AI SDK](https://sdk.vercel.ai) provides a unified interface across multiple AI providers — switch models without rewriting code.

### Key Functions

| Function           | Purpose                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `generateText()`   | One-shot text generation                                                                                          |
| `streamText()`     | Streaming text generation (for chat UIs)                                                                          |
| `generateObject()` | Structured output with Zod validation                                                                             |
| `streamObject()`   | Streaming structured output (check AI SDK version — v5 supports this; v6+ uses `streamText` with `Output.object`) |
| `embed()`          | Generate embeddings for search/RAG                                                                                |
| `tool()`           | Define tools the AI can call                                                                                      |

### Example: Streaming Chat

```typescript
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const result = streamText({
  model: openai("gpt-5.2"),
  messages: [
    {
      role: "user",
      content: "Explain React Server Components in 3 sentences.",
    },
  ],
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}
```

### Example: Structured Output

```typescript
import { anthropic } from "@ai-sdk/anthropic";
import { generateObject } from "ai";
import { z } from "zod";

const { object } = await generateObject({
  model: anthropic("claude-sonnet-4-6"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    sentiment: z.enum(["positive", "negative", "neutral"]),
  }),
  prompt: "Analyze this article: [article text here]",
});

console.log(object.title); // Typed and validated!
console.log(object.sentiment); // "positive" | "negative" | "neutral"
```

### Why AI SDK?

- **Provider-agnostic** — Switch between OpenAI, Anthropic, Google with one line
- **TypeScript-first** — Full type inference, Zod integration
- **React hooks** — `useChat()`, `useCompletion()` for frontend
- **Streaming** — Built-in streaming with backpressure handling
- **Tool calling** — Unified tool API across all providers

---

## OpenAI API

Direct API access for OpenAI models.

```bash
npm install openai
```

```typescript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.chat.completions.create({
  model: "gpt-5.2",
  messages: [
    { role: "system", content: "You are a helpful coding assistant." },
    { role: "user", content: "Write a binary search in TypeScript." },
  ],
  temperature: 0.3,
});

console.log(response.choices[0].message.content);
```

### Key Models (Feb 2026)

| Model          | Best For                                | Context Window |
| -------------- | --------------------------------------- | -------------- |
| `gpt-5.2`      | General purpose, best quality           | 400K tokens    |
| `o3`           | Complex reasoning, math, code           | 200K tokens    |
| `gpt-4.1-mini` | Fast, cheap, good enough for most tasks | 1M tokens      |
| `gpt-4.1-nano` | Fastest, lowest cost                    | 1M tokens      |

---

## Anthropic API

Direct API access for Claude models.

```bash
npm install @anthropic-ai/sdk
```

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const response = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 4096,
  messages: [
    {
      role: "user",
      content: "Explain the CAP theorem with a real-world analogy.",
    },
  ],
});

console.log(response.content[0].text);
```

### Key Models (Feb 2026)

| Model               | Best For                          | Context Window |
| ------------------- | --------------------------------- | -------------- |
| `claude-opus-4-6`   | Highest quality, complex tasks    | 200K tokens    |
| `claude-sonnet-4-6` | Best balance of speed and quality | 200K tokens    |
| `claude-4.5-haiku`  | Fast and cheap                    | 200K tokens    |

---

## Google Gemini API

```bash
npm install @google/genai
```

```typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY! });

const response = await ai.models.generateContent({
  model: "gemini-3.1-pro",
  contents:
    "Explain Kubernetes in terms a frontend developer would understand.",
});

console.log(response.text);
```

### Key Models (Feb 2026)

| Model              | Best For                          | Context Window |
| ------------------ | --------------------------------- | -------------- |
| `gemini-3.1-pro`   | Highest quality, #1 on benchmarks | 1M tokens      |
| `gemini-2.5-flash` | Fast, multimodal, great value     | 1M tokens      |

---

## When to Use What

| Scenario                        | Recommended Approach                      |
| ------------------------------- | ----------------------------------------- |
| Building a chat UI in Next.js   | AI SDK + `useChat()` hook                 |
| Backend text processing         | AI SDK `generateText()` or direct API     |
| Structured data extraction      | AI SDK `generateObject()` with Zod        |
| Need to switch providers easily | AI SDK (provider-agnostic)                |
| Need provider-specific features | Direct API (OpenAI, Anthropic, Google)    |
| Embeddings for search/RAG       | AI SDK `embed()` or OpenAI embeddings API |
| Image generation                | OpenAI DALL-E API or Stability AI         |

---

## Quick Start: Build a Chat API

A minimal Express API with streaming chat:

```typescript
import express from "express";
import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    messages,
    system: "You are a helpful assistant for a software development team.",
  });

  // Stream the response
  result.pipeDataStreamToResponse(res);
});

app.listen(3000, () => console.log("Chat API running on :3000"));
```

---

## Common Patterns

### RAG (Retrieval-Augmented Generation)

```
User question
    ↓
Embed the question → Search vector DB → Get relevant docs
    ↓
Send to LLM: "Answer this question using these docs: [docs]"
    ↓
Grounded answer (with sources)
```

### Tool Calling / Function Calling

```
User: "What's the weather in NYC?"
    ↓
LLM decides to call: getWeather({ city: "NYC" })
    ↓
Your code executes the function, returns data
    ↓
LLM uses the data to form a response
```

### Multi-Agent Orchestration

```
User task → Planner Agent → breaks into subtasks
    ↓
Subtask 1 → Research Agent
Subtask 2 → Coding Agent
Subtask 3 → Review Agent
    ↓
Results combined → Final output
```

---

## Further Reading

| Resource                 | Link                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------ |
| AI SDK Documentation     | [sdk.vercel.ai/docs](https://sdk.vercel.ai/docs)                                     |
| OpenAI API Reference     | [platform.openai.com/docs](https://platform.openai.com/docs)                         |
| Anthropic API Reference  | [docs.anthropic.com](https://docs.anthropic.com)                                     |
| Google AI for Developers | [ai.google.dev](https://ai.google.dev)                                               |
| OpenAI Cookbook          | [cookbook.openai.com](https://cookbook.openai.com)                                   |
| Anthropic Prompt Library | [docs.anthropic.com/en/prompt-library](https://docs.anthropic.com/en/prompt-library) |

---

[← Previous: Demos](./11-demos.md) · **Appendix** · [📖 README](../README.md)
