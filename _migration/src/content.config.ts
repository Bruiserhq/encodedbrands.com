import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepage = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homepage" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
  }),
});

export const collections = { homepage };
