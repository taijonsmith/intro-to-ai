import { Router } from "express";
import { randomUUID } from "node:crypto";
import { CreateBookmarkSchema, type Bookmark } from "../types.js";

/** In-memory bookmark store (module-level for the running server) */
const defaultBookmarks: Bookmark[] = [];

/**
 * Creates a bookmark router with its own store.
 * @param store - Optional array to use as the bookmark store (useful for testing)
 * @returns Express Router
 */
export function createBookmarkRouter(store: Bookmark[] = defaultBookmarks) {
  const router = Router();
  const bookmarks = store;

  /**
   * GET /api/bookmarks
   * List all bookmarks, with optional ?tag= filter
   */
  router.get("/", (req, res) => {
    const tag = req.query.tag as string | undefined;

    if (tag) {
      const filtered = bookmarks.filter((b) => b.tags.includes(tag));
      res.json(filtered);
      return;
    }

    res.json(bookmarks);
  });

  /**
   * GET /api/bookmarks/:id
   * Get a single bookmark by ID
   */
  router.get("/:id", (req, res) => {
    const bookmark = bookmarks.find((b) => b.id === req.params.id);

    if (!bookmark) {
      res.status(404).json({ error: "Bookmark not found" });
      return;
    }

    res.json(bookmark);
  });

  /**
   * POST /api/bookmarks
   * Create a new bookmark
   * @param url - Valid URL (required)
   * @param title - Optional title
   * @param tags - Optional array of tags
   */
  router.post("/", (req, res) => {
    const result = CreateBookmarkSchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: "Invalid input",
        details: result.error.flatten().fieldErrors,
      });
      return;
    }

    const bookmark: Bookmark = {
      id: randomUUID(),
      url: result.data.url,
      title: result.data.title ?? new URL(result.data.url).hostname,
      tags: result.data.tags,
      createdAt: new Date().toISOString(),
    };

    bookmarks.push(bookmark);
    res.status(201).json(bookmark);
  });

  /**
   * DELETE /api/bookmarks/:id
   * Delete a bookmark by ID
   */
  router.delete("/:id", (req, res) => {
    const index = bookmarks.findIndex((b) => b.id === req.params.id);

    if (index === -1) {
      res.status(404).json({ error: "Bookmark not found" });
      return;
    }

    const [deleted] = bookmarks.splice(index, 1);
    res.json({ message: "Bookmark deleted", bookmark: deleted });
  });

  return router;
}

/** Default router instance for the server */
export const bookmarkRouter = createBookmarkRouter();
