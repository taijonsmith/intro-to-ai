# 🧠 AI Fundamentals & How AI "Thinks"

[📖 README](../README.md) · **Section 1 of 11** · [Next: Popular AI Tools →](./02-popular-ai-tools.md)

---

> **"AI is the new electricity."** — Andrew Ng
>
> Before we dive into tools and workflows, let's build a clear mental model of what AI actually is, how it works, and — critically — how it "thinks" differently than we do.

---

## Table of Contents

- [What Is an LLM?](#what-is-an-llm)
- [How LLMs Work (Simplified)](#how-llms-work-simplified)
- [The "Autocomplete on Steroids" Mental Model](#the-autocomplete-on-steroids-mental-model)
- [Why AI Gives Different Answers Each Time](#why-ai-gives-different-answers-each-time)
- [How AI "Thinks" — Chain-of-Thought Reasoning](#how-ai-thinks--chain-of-thought-reasoning)
- [Reasoning Models vs. Standard Models](#reasoning-models-vs-standard-models)
- [What AI Is Good At (and What It's Not)](#what-ai-is-good-at-and-what-its-not)
- [Key Takeaways](#-key-takeaways)
- [Try It Yourself](#-try-it-yourself)

---

## What Is an LLM?

A **Large Language Model** (LLM) is a type of AI trained on massive amounts of text to understand and generate human language. The simple way to think about it:

> 💡 **An LLM is an incredibly sophisticated autocomplete engine** — one that's read most of the internet.

When you type something and the AI responds, it's not "looking up" an answer in a database. It's **predicting** the most likely next words based on patterns it learned during training.

```
📚 Training Data (trillions of words from the internet)
        ↓
🔧 Training (find patterns in language)
        ↓
🧠 Trained Model (billions of "settings" that encode those patterns)
        ↓
💬 You type: "The capital of France is..."
        ↓
✨ AI predicts: "Paris" (because that pattern appeared millions of times)
```

### Key Terms You'll Hear

| Term               | Plain English                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Token**          | A chunk of text (~¾ of a word). LLMs read and write in tokens, not words.                                        |
| **Context Window** | How much text the AI can "see" at once (like its working memory).                                                |
| **Parameters**     | The model's internal settings — more parameters can mean more capable, but architecture and training matter too. |
| **Training Data**  | The text the model learned from (books, code, websites, etc.).                                                   |
| **Inference**      | When the model generates a response — the "thinking" phase.                                                      |
| **Hallucination**  | When the AI confidently says something incorrect (more on this below).                                           |

### Tokenization in Practice

Tokens aren't exactly words — they're chunks. Here's what they look like:

| Input              | Approx Tokens | Why                                           |
| ------------------ | :-----------: | --------------------------------------------- |
| `"Hello, world!"`  |       4       | Punctuation and common words each get a token |
| `"const x = 42;"`  |       5       | Code tokens include operators and keywords    |
| `"authentication"` |       1       | Common long words are single tokens           |
| `"defenestration"` |       3       | Rare words get split into subword pieces      |

> 💡 **Try it yourself**: Paste text into the [OpenAI Tokenizer](https://platform.openai.com/tokenizer) to see exactly how your prompts get tokenized. A useful rule of thumb: **1 token ≈ ¾ of a word** (or about 4 characters in English).

### Extended Glossary (Terms You'll Encounter)

<details>
<summary><strong>Click to expand 8 more key terms with developer analogies</strong></summary>

| Term                                                  | Plain English                                                                 | Developer Analogy                                                               |
| ----------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **RAG** (Retrieval-Augmented Generation)              | AI looks up real data before answering, instead of relying solely on training | Dependency injection for knowledge — inject fresh data at runtime               |
| **Fine-tuning**                                       | Additional training on specialized data to customize a model                  | Forking a library and modifying it for your specific use case                   |
| **Embedding**                                         | Converting text to a list of numbers that captures meaning                    | A hash function, but one that preserves semantic similarity                     |
| **RLHF** (Reinforcement Learning from Human Feedback) | Training the model on human preferences for what "good" responses look like   | Code review — humans rate outputs and the model learns to match their standards |
| **Multimodal**                                        | A model that handles text, images, audio, and/or video                        | A full-stack framework vs. a backend-only library                               |
| **Top-p / Top-k**                                     | Controls randomness by limiting which tokens the model considers              | Like filtering search results — only show the top N most relevant               |
| **System Prompt**                                     | Hidden instructions that configure the AI's behavior for a conversation       | Like a `.env` config — sets persistent rules the user doesn't see               |
| **Temperature**                                       | Controls randomness (0 = deterministic, 1+ = creative)                        | Like a random seed — higher values = more variation in output                   |

</details>

---

## How LLMs Work (Simplified)

You don't need a PhD to understand this. Here's the core idea:

```
┌──────────────────────────────────────────────────────────┐
│                   HOW AN LLM RESPONDS                     │
│                                                            │
│   1. You type a message                                    │
│      ↓                                                     │
│   2. Your text gets converted to numbers (tokens)          │
│      "Hello world" → [15496, 995]                          │
│      ↓                                                     │
│   3. The model looks at ALL the tokens and figures out     │
│      which ones are important to each other                │
│      (this is called "attention")                          │
│      ↓                                                     │
│   4. It predicts the probability of every possible         │
│      next token:                                           │
│      "Paris" → 95.2%                                       │
│      "Lyon"  → 2.1%                                        │
│      "the"   → 0.8%                                        │
│      ...thousands more options...                          │
│      ↓                                                     │
│   5. It picks one, adds it to the output, and repeats     │
│      from step 3 — one token at a time                     │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

**The key insight**: LLMs generate text **one token at a time**, left to right. Without special infrastructure (like chain-of-thought or tool use), they can't plan ahead, go back and fix earlier words, or "see" what they're about to write. Each token is a fresh prediction based on everything that came before it.

---

## The "Autocomplete on Steroids" Mental Model

This is the most useful way to think about AI as a developer:

| Autocomplete (Your Phone)       | LLM (ChatGPT, Claude, etc.)         |
| ------------------------------- | ----------------------------------- |
| Predicts the next **word**      | Predicts the next **token**         |
| Trained on your texts           | Trained on the internet             |
| ~3 suggestions                  | ~50,000+ possible tokens            |
| No understanding of meaning     | Emergent "understanding" from scale |
| Gets your name wrong constantly | Gets complex code right (usually)   |

The magic comes from **scale**. When you train on trillions of tokens with billions of parameters, the model develops an ability to follow instructions, write code, explain concepts, and even reason through problems — all as a side effect of learning to predict the next token.

---

## Why AI Gives Different Answers Each Time

AI is **nondeterministic** — ask the same question twice, and you might get different answers. This isn't a bug; it's by design.

### How It Works: Temperature

When the model predicts next tokens, it has a "temperature" setting:

```
Temperature = 0 (Deterministic):
  Always picks the highest-probability token.
  Same input → Same output every time.
  Good for: code generation, factual questions.

Temperature = 0.7 (Default for most chatbots):
  Adds some randomness to token selection.
  Same input → Slightly different output each time.
  Good for: creative writing, brainstorming.

Temperature = 1.0+ (Very creative):
  Lots of randomness — more surprising outputs.
  Same input → Very different outputs.
  Good for: creative exploration, poetry.
```

### Why This Matters for You

- 🔁 **If a response isn't great, just ask again** — you might get a better one
- 📌 **For code, lower temperature = more consistent** — most API defaults handle this
- 🎨 **For brainstorming, higher temperature = more creative** — embrace the variation
- ✅ **Always verify** — different doesn't mean wrong (or right)

---

## How AI "Thinks" — Chain-of-Thought Reasoning

Here's something important: **AI doesn't think like we do.** But understanding its process makes you dramatically better at using it.

### The Problem with "Just Answer"

When you ask an LLM a complex question, it has to generate the answer **one token at a time, immediately**. No scratch paper, no time to reflect.

```
❌ Without reasoning:
   Q: "If 3 people paint a house in 12 hours,
       how long for 4 people?"
   A: "8 hours"  ← Might be wrong (no work shown)

✅ With chain-of-thought:
   Q: "Think step by step: If 3 people paint
       a house in 12 hours, how long for 4 people?"
   A: "1. Total work = 3 people × 12 hours = 36 person-hours
       2. With 4 people: 36 ÷ 4 = 9 hours
       3. Answer: 9 hours" ✅
```

### Why Chain-of-Thought Works

Remember: each token the model generates becomes context for the next token. When you ask it to "think step by step":

1. **Step 1 becomes visible context** for Step 2
2. **Errors get caught earlier** because intermediate work is shown
3. **Complex problems break down** into manageable pieces
4. **You can spot where reasoning goes wrong** and correct it

> 💡 **Practical tip**: When you need accurate results, just add "Think through this step by step" to your prompt. It costs a few extra tokens but dramatically improves accuracy.

---

## Reasoning Models vs. Standard Models

In 2024-2025, a new category emerged: **reasoning models** that "think" before they answer.

```
┌─────────────────────────────────────────────────────────┐
│  STANDARD MODEL (e.g., GPT-4o, Claude Sonnet)           │
│                                                           │
│  Prompt → [Generate tokens immediately] → Response        │
│  Fast. Good for most tasks.                               │
│                                                           │
├─────────────────────────────────────────────────────────┤
│  REASONING MODEL (e.g., o3, Claude with Extended         │
│  Thinking, Gemini with "thinking")                        │
│                                                           │
│  Prompt → [Think... think... think...] → Response         │
│  Slower. MUCH better for complex or multi-step problems.  │
│                                                           │
│  The "thinking" phase produces internal reasoning tokens  │
│  that you sometimes can see (extended thinking) and       │
│  sometimes can't (hidden chain-of-thought).               │
└─────────────────────────────────────────────────────────┘
```

### When to Use Which

| Use Standard Models When... | Use Reasoning Models When...     |
| --------------------------- | -------------------------------- |
| Quick Q&A, chat             | Complex math or logic            |
| Simple code generation      | Multi-step debugging             |
| Summarization               | Architecture decisions           |
| Writing & editing           | Tricky code refactors            |
| Speed matters               | Accuracy matters more than speed |

> 💡 In most AI tools today (Claude, ChatGPT, etc.), you can choose between standard and reasoning modes. When in doubt, start with standard — switch to reasoning if you need more accuracy.

---

## What AI Is Good At (and What It's Not)

This is the most important mental model for using AI effectively:

```
┌──────────────────────────────┬──────────────────────────────┐
│      ✅ AI IS GREAT AT       │      ⚠️ AI STRUGGLES WITH    │
├──────────────────────────────┼──────────────────────────────┤
│ Code generation & boilerplate│ Novel algorithms             │
│ Explaining concepts          │ Truly creative breakthroughs │
│ Translating between languages│ Counting/precise math        │
│ Summarizing documents        │ Real-time/current events     │
│ Finding bugs in code         │ Your specific business logic │
│ Writing tests from specs     │ Long-term memory/state       │
│ Drafting documentation       │ Knowing what it doesn't know │
│ Answering "how do I..."      │ Being consistently right     │
│ Pattern matching & refactoring│ Understanding your intent   │
│ Learning new frameworks fast │ Replacing human judgment     │
└──────────────────────────────┴──────────────────────────────┘
```

### The Hallucination Problem

AI will sometimes **confidently state incorrect information**. This happens because:

1. The model always generates the "most likely next token" — even when it should say "I don't know"
2. It has no way to verify facts against a database
3. It sounds equally confident whether it's right or wrong

```
🚨 GOLDEN RULE: Trust but verify.

AI is like a very smart, very fast coworker who
occasionally makes things up with a straight face.
Always review the output before using it.
```

### Common Hallucination Examples

| Type                    | Example                                                       | How to Catch It             |
| ----------------------- | ------------------------------------------------------------- | --------------------------- |
| **Fake API methods**    | Uses `array.flatten()` when it doesn't exist in that language | Check the docs              |
| **Invented citations**  | "According to Smith et al., 2023..." (paper doesn't exist)    | Google the citation         |
| **Outdated info**       | Suggests a deprecated package version                         | Verify against current docs |
| **Plausible but wrong** | Code that looks right but has a subtle off-by-one error       | Run the tests               |

---

## 🎯 Key Takeaways

| #   | Takeaway                                                            |
| --- | ------------------------------------------------------------------- |
| 1   | LLMs predict the next token — they don't "understand" like humans   |
| 2   | They're nondeterministic — same question can give different answers |
| 3   | "Think step by step" dramatically improves accuracy                 |
| 4   | Reasoning models are slower but better for complex problems         |
| 5   | AI is great at many things but **always verify the output**         |
| 6   | Hallucinations are real — trust but verify                          |

---

## 🧪 Try It Yourself

1. **Test nondeterminism**: Ask ChatGPT or Claude the same question 3 times. Compare the answers — notice how they vary?

2. **Test chain-of-thought**: Ask "What's 17 × 28?" Then ask "What's 17 × 28? Think step by step." Compare the accuracy.

3. **Catch a hallucination**: Ask the AI to "recommend a TypeScript library called `ts-supervalidate` and show me how to use it." (Spoiler: it'll probably make something up.)

4. **Try a reasoning model**: If you have access, send the same complex question to a standard model and a reasoning model. Compare the depth and accuracy.

---

## 📚 Further Reading

- ["Attention Is All You Need"](https://arxiv.org/abs/1706.03762) — The original transformer paper that started it all
- [3Blue1Brown: "But what is a GPT?"](https://www.youtube.com/watch?v=wjZofJX0v4M) — Excellent visual explanation of transformers
- [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/) — The best visual walkthrough
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer) — See how text gets converted to tokens
- [Chain-of-Thought Prompting (Wei et al., 2022)](https://arxiv.org/abs/2201.11903) — The paper that popularized step-by-step reasoning

---

[📖 README](../README.md) · **Section 1 of 11** · [Next: Popular AI Tools →](./02-popular-ai-tools.md)
