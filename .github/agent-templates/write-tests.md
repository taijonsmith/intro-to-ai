---
name: "Write Tests"
description: "Generate comprehensive tests for existing code."
---

## Instructions

Write tests for the specified code following these guidelines:

### Test Framework
- Use **Vitest** (`describe`, `it`, `expect`)
- Use **supertest** for HTTP endpoint testing
- Colocate test files: `*.test.ts` next to the source file

### Coverage Requirements
1. **Happy path** — normal usage with valid inputs
2. **Validation** — invalid inputs, missing fields, wrong types
3. **Edge cases** — empty arrays, boundary values, special characters
4. **Error conditions** — 404s, 500s, network failures
5. **Auth** — unauthorized access, forbidden operations (if applicable)

### Test Structure
```typescript
describe("[ModuleName]", () => {
  describe("[functionName]", () => {
    it("should [expected behavior] when [condition]", () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### Rules
- Test names describe BEHAVIOR, not implementation
- Each test should be independent (no shared mutable state)
- Mock external dependencies, not internal modules
- Prefer realistic test data over `"test"` and `123`
- Include at least one test that verifies error messages/codes
- Add a brief comment for non-obvious test setups

### Code to Test

<!-- Specify the files or paste the code to test -->
