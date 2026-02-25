import express from "express";
import { bookmarkRouter } from "./routes/bookmarks.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Bookmark routes
app.use("/api/bookmarks", bookmarkRouter);

app.listen(PORT, () => {
  console.log(`🚀 Demo API running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Bookmarks: http://localhost:${PORT}/api/bookmarks`);
});

export { app };
