---
name: "Code Review"
description: "Perform a thorough code review on a file or set of changes."
---

## Instructions

Review the code below (or the specified files) with the rigor of a senior engineer. Check for:

### Categories
1. **Bugs** — Logic errors, off-by-one, null/undefined risks, race conditions
2. **Security** — Injection vulnerabilities, exposed secrets, missing auth checks
3. **Performance** — N+1 queries, unnecessary re-renders, memory leaks, large bundles
4. **Error Handling** — Missing try/catch, swallowed errors, unhelpful error messages
5. **Types** — `any` usage, missing types, incorrect generics
6. **Style** — Naming, file organization, consistency with project conventions
7. **Testing** — Missing test coverage, brittle tests, untested edge cases
8. **Documentation** — Missing JSDoc, outdated comments, unclear intent

### Output Format

For each issue found:

```
[SEVERITY: critical | warning | suggestion]
File: [filename]
Line: [line number or range]
Category: [from list above]
Issue: [what's wrong]
Fix: [how to fix it, with code if applicable]
```

### Summary

End with:
- Total issues found (by severity)
- Overall code quality assessment (1-10)
- Top 3 priorities to address
