---
applyTo: "**/*.{ts,tsx,js,jsx}"
---

# Code Style Instructions

## TypeScript Conventions

- Strict mode enabled (`"strict": true` in tsconfig)
- Prefer `interface` over `type` for object shapes
- Use `unknown` instead of `any` — narrow with type guards
- Prefer named exports over default exports
- Use barrel exports (`index.ts`) for public API surfaces

## Naming Conventions

- Files: `kebab-case.ts` (e.g., `user-service.ts`)
- Interfaces: `PascalCase` with no `I` prefix (e.g., `User`, not `IUser`)
- Functions: `camelCase` — verb-first (e.g., `createUser`, `validateInput`)
- Constants: `UPPER_SNAKE_CASE` for true constants, `camelCase` for config objects
- Enums: `PascalCase` for name AND values

## Error Handling

- Use the Result pattern where possible:
  ```typescript
  type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };
  ```
- Never catch and swallow errors silently
- Log errors with context (what operation, what input)
- HTTP error responses should always include: `{ error: string, code: string, details?: unknown }`

## Testing

- Test file naming: `*.test.ts` colocated with source
- Use `describe` blocks grouped by function/method
- Test names should describe behavior: `"returns 404 when bookmark not found"`
- Prefer integration tests over unit tests for API routes
- Mock external dependencies, not internal modules

## Imports

- Group imports: (1) Node built-ins, (2) External packages, (3) Internal modules
- Separate groups with a blank line
- Use path aliases (`@/` prefix) for internal imports when available
