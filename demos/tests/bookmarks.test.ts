import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import { createBookmarkRouter } from "../src/routes/bookmarks.js";

/**
 * Bookmark API integration tests
 * Demonstrates AI-assisted test generation (see Section 11, Demo 1)
 */

function createApp() {
  const app = express();
  app.use(express.json());
  app.use("/api/bookmarks", createBookmarkRouter([]));
  return app;
}

describe("Bookmark API", () => {
  let app: express.Express;

  beforeEach(() => {
    // Fresh app and routes for each test
    app = createApp();
  });

  describe("POST /api/bookmarks", () => {
    it("should create a bookmark with valid input", async () => {
      const res = await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://example.com", title: "Example", tags: ["test"] });

      expect(res.status).toBe(201);
      expect(res.body).toMatchObject({
        url: "https://example.com",
        title: "Example",
        tags: ["test"],
      });
      expect(res.body.id).toBeDefined();
      expect(res.body.createdAt).toBeDefined();
    });

    it("should reject invalid URLs", async () => {
      const res = await request(app)
        .post("/api/bookmarks")
        .send({ url: "not-a-url" });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe("Invalid input");
    });

    it("should use hostname as default title", async () => {
      const res = await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://github.com/features/copilot" });

      expect(res.status).toBe(201);
      expect(res.body.title).toBe("github.com");
    });

    it("should reject missing URL", async () => {
      const res = await request(app)
        .post("/api/bookmarks")
        .send({ title: "No URL" });

      expect(res.status).toBe(400);
    });
  });

  describe("GET /api/bookmarks", () => {
    it("should return empty array initially", async () => {
      const res = await request(app).get("/api/bookmarks");

      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });

    it("should return created bookmarks", async () => {
      await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://example.com" });

      const res = await request(app).get("/api/bookmarks");

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });

    it("should filter by tag", async () => {
      await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://a.com", tags: ["ai"] });

      await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://b.com", tags: ["web"] });

      const res = await request(app).get("/api/bookmarks?tag=ai");

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0].tags).toContain("ai");
    });
  });

  describe("DELETE /api/bookmarks/:id", () => {
    it("should delete an existing bookmark", async () => {
      const created = await request(app)
        .post("/api/bookmarks")
        .send({ url: "https://example.com" });

      const res = await request(app).delete(
        `/api/bookmarks/${created.body.id}`,
      );

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Bookmark deleted");
    });

    it("should return 404 for non-existent bookmark", async () => {
      const res = await request(app).delete("/api/bookmarks/non-existent-id");

      expect(res.status).toBe(404);
    });
  });
});
