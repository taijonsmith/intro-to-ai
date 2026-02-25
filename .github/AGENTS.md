# AGENTS.md — Agent Behavior for This Repository

## Overview

This repo is an educational "Intro to AI" guide. Agents working in this repo should prioritize clarity, correctness, and educational value.

## Agent Rules

### General

- Always read the relevant section markdown files before making changes to understand context
- Demo code must be self-contained and runnable — no broken examples
- Prefer simple, readable code over clever code in demos
- Add inline comments explaining "why" (not "what") for non-obvious code

### File Organization

- Section content goes in `sections/` — each file is numbered (01, 02, etc.)
- Demo code goes in `demos/` — each demo in its own subdirectory
- Agent templates go in `.github/agent-templates/`
- Static assets go in `assets/`

### When Creating Demos

1. Create a new directory under `demos/` with a descriptive name
2. Include a `README.md` with setup instructions
3. Include a `package.json` with all dependencies
4. Make sure `npm install && npm run dev` works
5. Include sample requests/commands for testing

### When Editing Sections

- Maintain the existing formatting style (emoji headers, ASCII diagrams, tables)
- Keep the navigation links at the bottom of each file updated
- Don't remove interactive exercises — add to them if relevant
- Verify all external links are still valid

### Code Generation Preferences

- TypeScript over JavaScript
- Express for APIs (these are demos, not production)
- Vitest for testing
- Zod for validation
- Prefer `fetch` over `axios`
- Use `console.log` for demo output (it's educational code)

### Security

- Never write real secrets into files
- Use `${VARIABLE}` placeholder syntax in configs
- Include `.env.example` files with placeholder values
- Remind users to check `.gitignore` before committing

## Permitted Operations

- Read any file in the repository
- Create/edit files in `demos/`, `sections/`, `assets/`
- Install npm packages for demo projects
- Run demo code for verification
- Create git branches for demo purposes

## Restricted Operations

- Do not modify `.vscode/mcp.json` without user approval
- Do not push to any remote repository
- Do not install global packages
- Do not access files outside this repository
