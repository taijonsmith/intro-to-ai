# 🎯 Real-World Use Cases

[← Previous: Code Editors & CLI](./06-code-editors.md) · **Section 7 of 11** · [Next: Creative AI →](./08-creative-ai.md)

---

> **"The best way to learn AI is to use it on something you actually care about."**
>
> You've learned the tools. Now let's see how they come together in real workflows — from everyday dev tasks to full project delivery.

---

## Table of Contents

- [Developer Use Cases](#developer-use-cases)
- [Copilot PR Reviews](#copilot-pr-reviews)
- [Professional & Business Use Cases](#professional--business-use-cases)
- [Non-Dev Use Cases](#non-dev-use-cases)
- [When NOT to Use AI](#when-not-to-use-ai)
- [Try It Yourself](#-try-it-yourself)

---

## Developer Use Cases

### 1. Code Generation & Scaffolding

The most obvious use case — and still one of the best.

```
Prompt: "Create an Express.js REST API with:
- JWT auth middleware
- Zod validation on all routes
- CRUD endpoints for a 'projects' resource
- Integration tests using Vitest
- Error handling middleware"
```

**AI does well**: Generates boilerplate instantly, follows common patterns, produces consistent style.

**Watch for**: Outdated package versions, generic security patterns, missing edge cases.

---

### 2. Debugging & Error Resolution

One of AI's strongest use cases. Paste an error, get a fix.

**Great prompt pattern:**

```
I'm getting this error in my Next.js 15 app:

Error: `headers()` should be awaited before using its value.

Here's my code:
[paste the relevant function]

Setup: Next.js 15.1, App Router, deployed on Vercel.
What's wrong and how do I fix it?
```

**Why this works:**

- Exact error message ✅
- Code context ✅
- Version numbers ✅

<details>
<summary>🎯 Pro Tips for Debugging with AI</summary>

- Include the **full stack trace**, not just the error message
- Mention what you **already tried** — saves redundant suggestions
- Provide **version numbers** — AI patterns differ between versions
- Ask **"why" not just "how"** — understanding > patching

</details>

---

### 3. Test Generation

```
Write comprehensive tests for this function:
[paste function]

Requirements:
- Use Vitest with describe/it blocks
- Cover happy path, edge cases, and error conditions
- Mock external dependencies
- Descriptive test names explaining behavior
```

**Quality check for AI-generated tests:**

- [ ] Tests assert something meaningful (not just "doesn't throw")
- [ ] Edge cases covered (empty input, null, boundaries)
- [ ] Test names describe behavior, not implementation

---

### 4. Documentation Generation

```
Generate JSDoc for this module. Include:
- Function descriptions
- @param with types and descriptions
- @returns with type and description
- @example for each public function
```

AI is excellent at this — it can see the code and write accurate docs faster than you ever could manually.

---

### 5. Code Review Assistance

Ask AI to review code **before** human reviewers see it:

```
Review this code for:
- Bugs and logic errors
- Security vulnerabilities
- Performance issues
- Missing error handling

Be specific. Reference line numbers.
```

This catches the easy stuff so human reviewers can focus on architecture, design, and business logic.

---

### 6. Learning New Frameworks Fast

This is an underrated superpower. Instead of reading docs for hours:

```
I'm a React developer picking up Svelte for a new project.
Walk me through building a form with validation in Svelte 5.
Compare to how I'd do it in React so I can map the concepts.
```

AI is essentially a **patient, personalized tutor** that adapts to your experience level.

---

## Copilot PR Reviews

> 💡 This is one of the most immediately valuable features for teams.

GitHub Copilot can **automatically review pull requests**, catching issues before human reviewers look.

### How It Works

```
PR Opened
    ↓
Copilot Automatic Review
├── ✓ Code quality analysis
├── ✓ Bug detection
├── ✓ Security scanning
├── ✓ Performance flagging
├── ✓ Style & consistency
└── ✓ Suggested fixes (with diffs)
    ↓
Human Reviewer (Focused)
├── Architecture decisions
├── Business logic correctness
├── Team conventions
└── Strategic design
```

### What Copilot Catches

| Category       | Example                                                           |
| -------------- | ----------------------------------------------------------------- |
| 🐛 Bugs        | "`await` inside `forEach` doesn't work — use `for...of`"          |
| 🔒 Security    | "SQL query uses string interpolation — use parameterized queries" |
| ⚡ Performance | "`.filter().map()` iterates the array twice — combine them"       |
| ♻️ Duplication | "This logic exists in `userService` too — extract to shared util" |

### Setting It Up

1. **Repo Settings** → Copilot → Enable "Code Review"
2. **Or**: On any PR, click Reviewers → Select **Copilot**
3. **Custom rules**: Add review guidelines to `.github/copilot-instructions.md` or create files in `.github/instructions/` with your team's standards

---

## Professional & Business Use Cases

### Client Proposal Drafts

```
Draft a technical proposal for a client modernizing a legacy
Java monolith into microservices.

Context:
- Current: Java 8, Spring MVC, Oracle DB, on-prem
- Team: 12 developers
- Timeline: 18 months
- Budget: needs justification

Include: executive summary, phased approach, risk assessment,
and rough estimates.
```

### Meeting Notes → Action Items

```
Here are the raw notes from today's client meeting:
[paste notes]

Create:
1. Formatted meeting summary (5 sentences max)
2. Action items with owners and deadlines
3. Follow-up questions for next meeting
4. Risks or concerns identified
```

### SOW and RFP Analysis

```
Review this SOW and identify:
- Ambiguous requirements that need clarification
- Technical risks
- Missing acceptance criteria
- Unrealistic timelines based on the scope
```

---

## Non-Dev Use Cases

AI isn't just for developers. Here's what non-technical team members can leverage:

| Role                | Use Case                                                  | Tool                        |
| ------------------- | --------------------------------------------------------- | --------------------------- |
| **Project Manager** | Meeting summaries, status reports, timeline estimates     | ChatGPT, Claude             |
| **Designer**        | Quick mockup generation, copy writing                     | v0, Midjourney, ChatGPT     |
| **QA**              | Test case generation, bug report writing                  | ChatGPT, Claude             |
| **Sales**           | Proposal drafts, email follow-ups, competitive analysis   | ChatGPT, Claude             |
| **Leadership**      | Data analysis, presentation outlines, strategic summaries | ChatGPT, Claude, NotebookLM |

---

## When NOT to Use AI

Being honest about limitations builds credibility. Here's where AI isn't the right tool:

| Task                               | Why Not AI                                                                                            | What to Do Instead                                                |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Cryptographic implementations**  | Subtle bugs = security breaches. AI may produce plausible-looking crypto that's fundamentally broken. | Use audited libraries (libsodium, Web Crypto API)                 |
| **Performance-critical hot paths** | AI optimizes for readability, not nanoseconds                                                         | Profile first, optimize by hand                                   |
| **Novel algorithms / research**    | AI remixes known patterns; it can't invent new ones                                                   | Think first, then use AI to implement your design                 |
| **Compliance-regulated code**      | Financial/medical regulations require auditable human authorship                                      | Write it yourself, use AI only for review                         |
| **Merge conflict resolution**      | AI lacks the project history context to know which side is "right"                                    | Resolve manually with team context                                |
| **Sensitive data handling**        | Pasting PII/secrets into prompts creates data exposure risk                                           | See [Section 9: Privacy & Security](./09-privacy-and-security.md) |

> 💡 **The 80/20 Rule of AI**: AI gets you **80% of the way in 20% of the time**. The remaining 20% — edge cases, optimization, domain-specific correctness — still needs human expertise. Knowing where that line is makes you effective, not dependent.

---

## 🧪 Try It Yourself

1. **Debug challenge**: Take a real error from your recent work. Paste it into AI with context. See how quickly it identifies the issue.

2. **PR review**: Enable Copilot reviews on your next PR. Compare its findings to human reviewer findings.

3. **Teach me mode**: Ask AI to explain a framework or tool you've been meaning to learn. Ask it to compare concepts to what you already know.

4. **Meeting notes**: After your next meeting, paste raw notes into AI and ask it to extract action items. See how much time it saves.

---

## 📚 Further Reading

- [GitHub Copilot Code Review Docs](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review)
- [Copilot for Business](https://github.com/features/copilot)
- [Anthropic: AI-Assisted Development Best Practices](https://docs.anthropic.com/en/docs/claude-code/overview)

---

[← Previous: Code Editors & CLI](./06-code-editors.md) · **Section 7 of 11** · [Next: Creative AI →](./08-creative-ai.md)
