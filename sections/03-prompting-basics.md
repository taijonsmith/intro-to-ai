# 💬 Prompting Basics

[← Previous: Popular AI Tools](./02-popular-ai-tools.md) · **Section 3 of 11** · [Next: Quality Checks →](./04-quality-checks.md)

---

> **"The quality of your output is directly proportional to the quality of your input."**
>
> Learning to prompt effectively is the single highest-leverage AI skill. A well-crafted prompt can turn a mediocre response into an exceptional one.

---

## Table of Contents

- [The Golden Rules](#the-golden-rules)
- [Talk to It Like a Person](#talk-to-it-like-a-person)
- [The CRAFT Framework](#the-craft-framework)
- [7 Prompting Techniques](#7-prompting-techniques)
- [Common AI Tendencies](#common-ai-tendencies)
- [Context and Length Guidelines](#context-and-length-guidelines)
- [Quick Reference Cheat Sheet](#-quick-reference-cheat-sheet)
- [Copy-Paste Prompt Templates](#-copy-paste-prompt-templates)
- [Try It Yourself](#-try-it-yourself)

---

## The Golden Rules

```
┌──────────────────────────────────────────────────────────┐
│              THE 5 GOLDEN RULES OF PROMPTING              │
│                                                            │
│  1. 🎯 Be specific about what you want                    │
│  2. 📚 Provide relevant context                            │
│  3. 📋 Show examples of desired output                     │
│  4. 🔄 Iterate — refine based on results                  │
│  5. ✅ Verify — never blindly trust the output             │
└──────────────────────────────────────────────────────────┘
```

These apply whether you're using ChatGPT, Claude, Gemini, Copilot, or any other AI tool.

---

## Talk to It Like a Person

The #1 tip: **talk to the AI like you'd talk to a skilled coworker.** Don't use robotic, keyword-stuffed language.

### ❌ Bad: Keyword Soup

```
code javascript function sort array ascending performance big-O
```

### ✅ Good: Natural Conversation

```
Hey, I need a JavaScript function that sorts an array of numbers in
ascending order. Performance matters because the array could have
up to 1 million elements. Can you use an efficient algorithm and
explain the time complexity?
```

### Why This Works

LLMs are trained on human conversations, documentation, and tutorials. They understand natural language nuances:

- "I'm a beginner" → adjusts explanation level
- "Be thorough" → gives more detail
- "Keep it simple" → reduces complexity
- "This is for production" → focuses on reliability

---

## The CRAFT Framework

Use this to structure any prompt:

| Letter | Meaning         | Example                                                 |
| ------ | --------------- | ------------------------------------------------------- |
| **C**  | **Context**     | "I'm building a Next.js e-commerce app with TypeScript" |
| **R**  | **Role**        | "Act as a senior backend engineer"                      |
| **A**  | **Action**      | "Write a middleware function for rate limiting"         |
| **F**  | **Format**      | "Return just the code with inline comments"             |
| **T**  | **Tone/Target** | "Optimize for production readiness"                     |

### CRAFT in Action

<table>
<tr><th>Without CRAFT</th><th>With CRAFT</th></tr>
<tr>
<td>

```
Write rate limiting code
```

</td>
<td>

```
Context: I'm building a Next.js API with
TypeScript, deployed on Vercel.

Role: Act as a senior backend engineer
specializing in security.

Action: Write rate limiting middleware
for API routes. Limit 100 requests per
15 minutes per IP.

Format: TypeScript code with inline
comments, plus a usage example.

Target: Production-ready with proper
429 responses and rate limit headers.
```

</td>
</tr>
<tr>
<td>Gets generic, possibly wrong code</td>
<td>Gets exactly what you need, production-ready</td>
</tr>
</table>

> 💡 You don't have to use CRAFT every time — but for important prompts, hitting all 5 elements makes a huge difference.

---

## 7 Prompting Techniques

### 1. Few-Shot Prompting (Show Examples)

Give the AI examples of the pattern you want:

```
Convert these error messages to user-friendly notifications:

Input: "TypeError: Cannot read property 'name' of undefined"
Output: "We couldn't load the user profile. Please refresh the page."

Input: "Error 429: Rate limit exceeded"
Output: "You're making requests too quickly. Please wait a moment."

Input: "ECONNREFUSED 127.0.0.1:5432"
Output: ???
```

The AI follows the pattern: _"We're having trouble connecting to the database. Please try again shortly."_

### 2. Chain-of-Thought (Think Step by Step)

Ask the AI to show its reasoning (as covered in [Section 01](./01-ai-fundamentals.md)):

```
I have a React component that re-renders 50+ times when I type
in an input field.

Before suggesting a fix:
1. List possible causes of excessive re-renders
2. Rank them by likelihood given it's triggered by typing
3. For the top cause, explain WHY it causes re-renders
4. Then suggest the fix with code
```

### 3. Role Prompting

Assign a persona to get specialized responses:

```
You are a principal engineer conducting a code review.
Review this PR for:
- Performance issues
- Security vulnerabilities
- Missing edge cases

Be direct and specific.
```

### 4. Constraint Prompting

Tell the AI what **not** to do:

```
Rewrite this function to handle errors properly.

Constraints:
- Do NOT use try/catch (use Result types instead)
- Do NOT add external dependencies
- Do NOT change the function signature
- Keep it under 30 lines
```

### 5. Output Format Specification

Be explicit about the structure you want:

```
Analyze this API endpoint for security issues.

Return your analysis as:
- Severity (critical/high/medium/low)
- List of issues with line numbers
- Suggested fix for each issue
- A confidence score (1-10) for each finding
```

### 6. Iterative Refinement (The Most Important Habit)

Don't try to get it perfect in one shot. Build up incrementally:

```
Round 1: "Build a login form component in React."
         → Gets basic structure

Round 2: "Now add Zod validation for email and password
          (min 8 chars, 1 uppercase, 1 number)."
         → Gets validation layer

Round 3: "Add loading state, error display, and
          disable the button while submitting."
         → Gets polished UI
```

This mirrors how you'd build it manually — layer by layer — and gives you checkpoints to verify each piece.

### 7. System Prompt vs. User Prompt (For API Users)

When using AI via API, you have two message types:

```
System Prompt (the "config"):
  "You are a senior TypeScript engineer. You follow
   our team's ESLint config. You always use Zod for
   validation. You never use 'any' type."

User Prompt (the "function call"):
  "Write a route handler for POST /api/users that
   validates the request body and creates a user."
```

Think of it like: **System prompt = `.env` config file, User prompt = function arguments.** The system prompt sets persistent rules; the user prompt gives the specific task.

---

## Common AI Tendencies

Understanding how AI behaves helps you write better prompts and catch issues:

| Tendency               | What Happens                                      | How to Handle It                                       |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| **People-pleasing**    | Agrees with your bad idea instead of pushing back | Ask: "What's wrong with this approach?"                |
| **Overconfidence**     | States uncertain things as facts                  | Ask: "How confident are you? What might be wrong?"     |
| **Verbosity**          | Gives a 500-word answer to a yes/no question      | Add: "Be concise" or "Answer in one sentence"          |
| **Outdated knowledge** | Suggests deprecated APIs or old patterns          | Specify versions: "Using React 19, Next.js 15"         |
| **Anchor bias**        | Gets stuck on your framing even if it's wrong     | Try: "Ignore my assumption. What's the BEST approach?" |
| **Loss of context**    | Forgets instructions in long conversations        | Repeat key constraints or start a fresh conversation   |

### The "Frustrated Developer" Anti-Pattern

```
❌ Don't do this:
"That's wrong. Try again."

✅ Do this instead:
"The previous response had [specific issue].
Here's what I need differently: [specific correction].
Additional context: [what you forgot to mention]."
```

AI doesn't have feelings to hurt, but **specific feedback produces better results** than vague frustration — just like with human coworkers.

---

## Context and Length Guidelines

### How Much Context to Provide

```
Too little context:           Just right:              Too much context:
"Fix the bug"                "Fix the TypeError in     [pastes entire 5000-line
                              auth.ts line 42.          file and says "help"]
→ Generic answer              I'm using NextAuth v5
                              with Prisma."
                                                       → AI gets confused or
                             → Targeted, accurate fix     ignores key info
```

**Rule of thumb**: Include what a senior dev would need to understand the problem:

- What you're building (brief)
- The specific error or goal
- Relevant code snippets (just the important parts)
- Version numbers for frameworks/libraries

### Prompt Length Sweet Spots

| Task                | Ideal Prompt Length                        |
| ------------------- | ------------------------------------------ |
| Quick question      | 1-3 sentences                              |
| Code generation     | 5-15 lines (with spec)                     |
| Complex debugging   | 10-30 lines (error + context + code)       |
| Architecture advice | 10-20 lines (requirements + constraints)   |
| Code review         | Paste the code + 3-5 lines of instructions |

---

## 📋 Quick Reference Cheat Sheet

```
┌──────────────────────────────────────────────────────────┐
│                 PROMPTING CHEAT SHEET                      │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Want better code?                                         │
│  → "Use TypeScript, add error handling, include tests"     │
│                                                            │
│  Want more accuracy?                                       │
│  → "Think step by step before answering"                   │
│                                                            │
│  Want specific format?                                     │
│  → "Return as JSON/table/bullet points"                    │
│                                                            │
│  Want less fluff?                                          │
│  → "Be concise. No explanations, just the code."          │
│                                                            │
│  Want to challenge the AI?                                 │
│  → "What's wrong with this approach?"                      │
│                                                            │
│  Want consistent output?                                   │
│  → Provide examples (few-shot prompting)                   │
│                                                            │
│  Want the AI to admit uncertainty?                         │
│  → "If you're not sure, say so."                          │
│                                                            │
│  Getting bad results?                                      │
│  → Add more context, be more specific, try again           │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 📋 Copy-Paste Prompt Templates

<details>
<summary><strong>🐛 Debug an Error</strong></summary>

```
I'm getting this error in my [framework] app:

[paste exact error message and stack trace]

Here's the relevant code:
[paste code]

Setup: [framework version], [runtime], [deployment target].
What I've already tried: [list attempts].

What's causing this and how do I fix it?
```

</details>

<details>
<summary><strong>🔍 Code Review</strong></summary>

```
Review this [language] code for:
1. Bugs and logic errors
2. Security vulnerabilities
3. Performance issues
4. Missing error handling
5. Readability improvements

Be specific — reference line numbers and explain WHY
each issue matters, not just what to change.

[paste code]
```

</details>

<details>
<summary><strong>🏗️ Architecture Decision</strong></summary>

```
I need to decide between [Option A] and [Option B] for [problem].

Context:
- Project: [brief description]
- Scale: [expected load/data size]
- Team: [team size and experience]
- Constraints: [time, budget, existing tech]

Compare both options on: performance, maintainability,
team learning curve, and long-term flexibility.
Recommend one with justification.
```

</details>

<details>
<summary><strong>🧪 Write Tests</strong></summary>

```
Write comprehensive tests for this function using [test framework].

[paste function]

Include:
- Happy path (normal inputs)
- Edge cases (empty, null, boundary values)
- Error conditions (invalid input, failures)
- Descriptive test names explaining behavior

Mock external dependencies. Each test should be independent.
```

</details>

<details>
<summary><strong>📖 Explain Code</strong></summary>

```
Explain this code as if I'm a [junior/mid/senior] developer
coming from a [your background] background.

[paste code]

Cover:
1. What it does (high-level purpose)
2. How it works (step by step)
3. Why it's written this way (design decisions)
4. Any gotchas or non-obvious behavior
```

</details>

---

## 🧪 Try It Yourself

1. **CRAFT test**: Take a vague prompt you'd normally use and rewrite it using the CRAFT framework. Compare the outputs.

2. **Role play**: Ask the AI the same coding question twice — once normally, once as "You are a security expert." Notice how framing changes the response.

3. **Constraint challenge**: Ask the AI to write a function, then add 3 constraints and regenerate. See how constraints shape the output.

4. **Few-shot magic**: Give the AI 2-3 examples of how you want commit messages formatted, then ask it to write the next one. It'll match your style.

5. **Prompt improvement challenge**: Take this vague prompt — `"write me code for login"` — and transform it into a full CRAFT prompt with role, context, constraints, and output format. Compare the outputs of both.

---

## 📚 Further Reading

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — Official prompt best practices
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Claude-specific techniques
- [Google Prompting Guide](https://ai.google.dev/gemini-api/docs/prompting-intro) — Gemini-specific approaches
- [PromptingGuide.ai](https://www.promptingguide.ai/) — Community-maintained prompt technique reference
- [LearnPrompting.org](https://learnprompting.org/) — Free course on prompting

---

[← Previous: Popular AI Tools](./02-popular-ai-tools.md) · **Section 3 of 11** · [Next: Quality Checks →](./04-quality-checks.md)
