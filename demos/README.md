# 🎬 Demo Code

This directory contains runnable demo code for the [Intro to AI](../README.md) guide.

## Quick Start

```bash
npm install
npm run dev     # Start dev server with hot reload
npm test        # Run tests
```

## What's Inside

### Bookmark API (`src/`)

A simple Express.js REST API that demonstrates:

- **Zod validation** — Input validation on all routes
- **TypeScript** — Full type safety throughout
- **CRUD endpoints** — Create, read, filter, and delete bookmarks
- **Proper error handling** — Meaningful error messages and correct status codes

### Tests (`tests/`)

Integration tests using Vitest + Supertest that demonstrate:

- Happy path testing
- Edge case coverage (invalid URLs, missing fields)
- API contract validation

## Demo Usage

This API is meant to be **built live** using AI Agent Mode (see [Section 11](../sections/11-demos.md)). The code here serves as:

1. **Reference** — What the AI should roughly generate
2. **Fallback** — If the live demo hits issues, you can show this
3. **Starting point** — Use this as a base and extend with AI

## API Endpoints

| Method   | Endpoint                | Description         |
| -------- | ----------------------- | ------------------- |
| `GET`    | `/api/health`           | Health check        |
| `GET`    | `/api/bookmarks`        | List all bookmarks  |
| `GET`    | `/api/bookmarks?tag=ai` | Filter by tag       |
| `GET`    | `/api/bookmarks/:id`    | Get single bookmark |
| `POST`   | `/api/bookmarks`        | Create bookmark     |
| `DELETE` | `/api/bookmarks/:id`    | Delete bookmark     |

### Example Request

```bash
curl -X POST http://localhost:3000/api/bookmarks \
  -H "Content-Type: application/json" \
  -d '{"url": "https://claude.ai", "title": "Claude", "tags": ["ai", "tools"]}'
```
