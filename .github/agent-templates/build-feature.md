---
name: "Build a Feature"
description: "Scaffold a complete feature from a spec — routes, validation, tests, and docs."
---

## Instructions

Build the feature described below. Follow these steps:

1. **Read the spec** carefully. Ask clarifying questions if anything is ambiguous.
2. **Plan the implementation** — list the files you'll create/modify.
3. **Implement** — write the code following the project's code style (see `.github/instructions/code-style.instructions.md`).
4. **Add tests** — write integration tests for all endpoints and unit tests for business logic.
5. **Document** — add a README.md to the feature's directory and JSDoc to all exports.
6. **Verify** — run the tests and make sure the code compiles.

## Feature Spec

<!-- Replace this with your actual feature spec -->

### Entity: [EntityName]

- Fields: id, name, ...
- Constraints: ...

### Endpoints

- POST /[entities] — create
- GET /[entities] — list (with pagination)
- GET /[entities]/:id — get by ID
- PATCH /[entities]/:id — update
- DELETE /[entities]/:id — delete

### Validation Rules

- ...

### File Structure

```
demos/[feature-name]/
├── src/
│   ├── index.ts
│   ├── routes/[entity].ts
│   ├── schema.ts
│   └── types.ts
├── tests/
│   └── [entity].test.ts
├── package.json
├── tsconfig.json
└── README.md
```
