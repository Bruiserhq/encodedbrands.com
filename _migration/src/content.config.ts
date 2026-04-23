import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepage = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homepage" }),
  schema: z.object({
    // hero
    meta_left: z.string().optional(),
    meta_right: z.array(z.object({ text: z.string() })).optional(),
    eyebrow: z.string().optional(),
    headline_lines: z.array(z.object({
      text: z.string(),
      style: z.enum(["normal", "em", "amp"]).default("normal"),
      break_after: z.boolean().default(false),
    })).optional(),
    subtitle: z.string().optional(),
    detail: z.string().optional(),
    ctas: z.array(z.object({
      label: z.string(),
      href: z.string(),
      ghost: z.boolean().default(false),
    })).optional(),
    quote: z.string().optional(),
    ticker: z.array(z.object({ text: z.string() })).optional(),
    prompt_card_label: z.string().optional(),
    prompt_card_title: z.string().optional(),
    prompt_card_meta: z.string().optional(),
    prompt_card_body: z.string().optional(),
    prompt_cta_label: z.string().optional(),
    prompt_cta_href: z.string().optional(),
    // strip
    items: z.array(z.object({ text: z.string() })).optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    // nav
    brand: z.string().optional(),
    brand_small: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
    // footer
    sub: z.string().optional(),
    columns: z.array(z.object({
      heading: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })),
    })).optional(),
    bottom_left: z.string().optional(),
    bottom_right: z.string().optional(),
  }),
});

export const collections = { homepage, site };
