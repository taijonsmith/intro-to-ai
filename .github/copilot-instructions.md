# Copilot Instructions — Intro to AI Demo Repo

## Project Overview

This is an educational repository covering "Intro to AI" for developers and technical teams. The content is markdown-based and split into sections covering AI fundamentals, tools, workflows, and hands-on demos.

## Code Style

- Use **TypeScript** for all code examples and demos
- Prefer **modern ES module syntax** (`import`/`export`, not `require`)
- Use **`const`** by default; `let` only when reassignment is needed
- All functions should have JSDoc comments with `@param` and `@returns`
- Error handling: use proper try/catch, return meaningful error messages
- HTTP APIs: use proper status codes (201 for created, 400 for bad input, 404 for not found)

## Demo Code Standards

- Every demo should be self-contained and runnable
- Include a `package.json` with `start` and `dev` scripts
- Include a `README.md` in each demo directory
- Use `vitest` for testing, `zod` for validation, `express` for APIs
- No hardcoded secrets — use environment variables

## Markdown Standards

- Use emoji sparingly but effectively for section headers
- Include ASCII diagrams for architecture and flow visualization
- Use tables for comparisons
- Use `<details>` tags for optional deep-dive content
- Every section should have interactive exercises at the end
- Include "Further Reading" links to official documentation

## Tone

- Professional but approachable
- Target audience: developers (and some non-devs) at any skill level
- Goal: educate developers and help them evaluate AI tools honestly
- Be honest about limitations — don't oversell AI capabilities

## Security

- NEVER include real API keys, tokens, or credentials in any file
- Use `${ENV_VAR}` syntax for all secrets in config files
- All `.env` files must be in `.gitignore`
