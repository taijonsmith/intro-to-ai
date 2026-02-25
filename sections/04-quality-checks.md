# ✅ Quality Checks

[← Previous: Prompting Basics](./03-prompting-basics.md) · **Section 4 of 11** · [Next: MCP Ecosystem →](./05-mcp-ecosystem.md)

---

> **"AI can write code fast. The question is: can it write _correct_ code?"**
>
> This section covers strategies for ensuring AI-generated code meets production standards. This is what separates casual users from AI power users.

---

## Table of Contents

- [The Trust Spectrum](#the-trust-spectrum)
- [Spec-Driven Development](#spec-driven-development)
- [Test-Driven Development with AI](#test-driven-development-with-ai)
- [The Agent Council Pattern](#the-agent-council-pattern)
- [Quality Checklist](#-quality-checklist)
- [Automated Quality Pipeline](#automated-quality-pipeline)
- [Try It Yourself](#-try-it-yourself)

---

## The Trust Spectrum

AI writes code fast — but speed without quality is dangerous. Here's the right mindset:

```
Never Trust AI          Trust But Verify ✅          Blindly Trust AI
(waste of the tool)     (the sweet spot)             (asking for bugs)
     ←──────────────────────●──────────────────────────→
                            │
                   Read every line.
                   Run the tests.
                   Question assumptions.
```

### Common Issues with AI-Generated Code

| Issue                     | Example                                      |
| ------------------------- | -------------------------------------------- |
| 🐛 Happy path only        | Works for normal input, breaks on edge cases |
| 📦 Wrong versions         | Uses deprecated APIs or outdated packages    |
| 🔓 Security gaps          | SQL injection, missing auth checks           |
| 🏗️ Wrong patterns         | Doesn't follow your team's conventions       |
| 📝 Missing error handling | No try/catch, silent failures                |
| 🧪 No tests               | Unless you specifically ask for them         |

> 💡 **None of these are reasons to avoid AI.** They're reasons to have a quality process — which you should have anyway.

---

## Spec-Driven Development

The most effective way to use AI for code: **write the spec first, then have AI implement it.**

### The Workflow

```
┌──────────────────────────────────────────────────┐
│         SPEC-DRIVEN AI DEVELOPMENT                │
│                                                    │
│  1. 📝 Write the spec (with AI help, if needed)   │
│     ↓                                              │
│  2. 🔍 You review & refine the spec               │
│     ↓                                              │
│  3. 🤖 AI implements against the spec              │
│     ↓                                              │
│  4. ✅ You verify it matches the spec              │
│     ↓                                              │
│  5. 🧪 AI writes tests derived from the spec      │
│     ↓                                              │
│  6. 🔄 Iterate until tests pass & you're happy    │
└──────────────────────────────────────────────────┘
```

### Example Spec

```markdown
## Feature: User Registration

### Endpoint: POST /api/auth/register

### Request Body

| Field    | Type   | Required | Validation                     |
| -------- | ------ | -------- | ------------------------------ |
| email    | string | yes      | Valid email, max 255 chars     |
| password | string | yes      | Min 8 chars, 1 upper, 1 number |
| name     | string | yes      | 2-100 chars                    |

### Responses

| Code | When         | Response                     |
| ---- | ------------ | ---------------------------- |
| 201  | Success      | { id, email, name }          |
| 400  | Bad input    | { errors: [{ field, msg }] } |
| 409  | Email exists | { error: "Email taken" }     |

### Business Rules

- Emails unique (case-insensitive)
- Passwords hashed with bcrypt
- Rate limit: 5 per IP per hour
```

### Why This Works

When you give AI a clear spec:

1. ✅ Less ambiguity → fewer hallucinated features
2. ✅ Defined edge cases → better error handling
3. ✅ Clear validation → correct implementation
4. ✅ Testable requirements → AI can write accurate tests

> 💡 **Pro Tip**: Ask AI to help you WRITE the spec first. Review it. Then have AI implement it. The spec is the contract between you and the AI.

---

## Test-Driven Development with AI

TDD with AI is incredibly powerful. The workflow:

```
┌──── 🔴 RED ──────────────┐
│  Write failing test        │
│  (you + AI together)       │
└────────┬───────────────────┘
         ↓
┌──── 🟢 GREEN ────────────┐
│  AI implements code to     │
│  make the test pass        │
└────────┬───────────────────┘
         ↓
┌──── 🔄 REFACTOR ─────────┐
│  AI refactors, you review  │
└────────┬───────────────────┘
         ↓
    All done? ── No → Back to RED
         │
        Yes → ✅ Ship it!
```

### Why TDD + AI Works So Well

- **Tests define "done"**: AI has a clear success criterion
- **Tests catch regressions**: If AI breaks something, you know immediately
- **Tests document behavior**: Your spec becomes executable
- **AI is great at writing tests**: Give it a function signature + spec, and it writes comprehensive tests fast

### Example Prompt

```
Write tests for a password strength validator.
Use Vitest with describe/it blocks.

Cover:
- Passwords shorter than 8 chars (should fail)
- Missing uppercase (should fail)
- Missing number (should fail)
- Valid passwords (should pass)
- Multiple errors at once

Then implement the function to make all tests pass.
```

---

## The Agent Council Pattern

This is one of the most powerful quality techniques: **have multiple AI models review the same work.**

```
┌─────────────────────────────────────────────────────┐
│               THE AGENT COUNCIL                       │
│                                                       │
│  Your code ──→ Claude reviews it                     │
│            ──→ ChatGPT reviews it                    │
│            ──→ Gemini reviews it                     │
│                                                       │
│  Each may catch different issues due to different     │
│  training emphases:                                   │
│  • One model spots a security issue                  │
│  • Another flags a performance concern               │
│  • A third catches a logic edge case                 │
│                                                       │
│  You: Compare reviews, take the best advice          │
└─────────────────────────────────────────────────────┘
```

### How to Do It

1. **Generate code** with one AI model
2. **Review it** with a different model (paste the code and ask for a ruthless review)
3. **Fix issues** found — either manually or with AI help
4. **Repeat** if needed

### Why Different Models Catch Different Things

Each model has different training emphases and blind spots. Using multiple models is like having multiple reviewers on a PR — they each bring a different perspective.

> 💡 **Practical tip**: Even within the SAME model, you can do an "agent council" by asking it to review its own work: _"Now act as a security expert and review the code you just wrote. Be ruthless."_

---

## 📋 Quality Checklist

Before shipping any AI-generated code:

```
┌──────────────────────────────────────────────────┐
│         AI CODE QUALITY CHECKLIST                  │
│                                                    │
│  □  Did you read every line? (not skim — READ)    │
│  □  Do you understand what it does?                │
│  □  Does it handle error cases?                    │
│  □  Are there tests? Do they pass?                 │
│  □  Are package versions current?                  │
│  □  Does it follow your team's conventions?        │
│  □  Did you check for security issues?             │
│  □  Does it work for edge cases, not just the      │
│      happy path?                                   │
│  □  Did you run linting & type-checking?           │
│  □  Would you be comfortable debugging this at     │
│      2 AM?                                         │
└──────────────────────────────────────────────────┘
```

### Don't Forget Static Analysis

The easiest quality gate for AI code: **run your existing linter and type-checker.**

- **TypeScript strict mode** — Catches type errors AI often introduces
- **ESLint** — Catches patterns AI frequently misuses (e.g., `any` types)
- **`npm audit`** — Catches vulnerable packages AI might suggest

These are zero-effort, high-value checks. If AI code doesn't pass your existing lint/type checks, don't ship it.

---

## Automated Quality Pipeline

For teams, formalize your quality gates:

```
┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
│  1. Lint   │──→│ 2. Type   │──→│ 3. Tests  │──→│ 4. AI     │──→│ 5. Human  │
│  & Format  │   │   Check   │   │           │   │   Review   │   │   Review  │
│            │   │           │   │           │   │            │   │           │
│  ESLint,   │   │  tsc      │   │  Vitest   │   │  Copilot   │   │  Focus on │
│  Prettier  │   │  --noEmit │   │  runs     │   │  PR Review │   │  design & │
│            │   │           │   │           │   │            │   │  logic    │
└───────────┘   └───────────┘   └───────────┘   └───────────┘   └───────────┘
     Auto           Auto            Auto           Auto/Semi        Manual
```

<details>
<summary><strong>Example: Quality Thresholds Config (quality-gates.yml)</strong></summary>

```yaml
# quality-gates.yml — Adapt to your team
quality_gates:
  tests:
    min_coverage: 80
    required: true
    framework: vitest

  security:
    npm_audit: true
    max_severity: moderate # Block on high/critical
    secret_scanning: true

  code_quality:
    eslint_errors: 0 # Zero tolerance
    eslint_warnings: 10 # Soft limit
    typescript_strict: true
    no_any_types: true

  performance:
    max_bundle_size_kb: 500
    lighthouse_min: 80

  documentation:
    require_jsdoc: public_functions
    require_readme: new_packages
```

</details>

> 💡 **The goal**: AI handles Gates 1-4 automatically. Humans focus on Gate 5 — the stuff that requires judgment, context, and taste.

---

## 🧪 Try It Yourself

1. **Spec-driven challenge**: Write a 10-line spec for a simple function (e.g., email validator). Give it to the AI. See how closely the implementation matches your spec.

2. **Agent council**: Generate a function with one AI, then paste it into a different AI and ask for a "ruthless code review." Compare the findings.

3. **TDD flow**: Ask AI to write tests first, then implement. See if you find the tests-first approach produces better code.

4. **Quality gate challenge**: Set up a git pre-commit hook that runs `tsc --noEmit && eslint .` before allowing commits. Then let AI generate code and see how often it passes on the first try.

---

## 📚 Further Reading

- [Anthropic: Building Effective Agents](https://docs.anthropic.com/en/docs/build-with-claude/agents) — Multi-agent patterns and quality
- [Kent Beck: Test-Driven Development](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530) — The original TDD book
- [GitHub Copilot Code Review](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review) — Automated PR reviews

---

[← Previous: Prompting Basics](./03-prompting-basics.md) · **Section 4 of 11** · [Next: MCP Ecosystem →](./05-mcp-ecosystem.md)
