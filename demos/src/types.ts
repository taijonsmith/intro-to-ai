import { z } from "zod";

/** Schema for creating a new bookmark */
export const CreateBookmarkSchema = z.object({
  url: z.string().url("Must be a valid URL"),
  title: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
});

/** A stored bookmark with server-generated fields */
export interface Bookmark {
  id: string;
  url: string;
  title: string;
  tags: string[];
  createdAt: string;
}

export type CreateBookmarkInput = z.infer<typeof CreateBookmarkSchema>;
