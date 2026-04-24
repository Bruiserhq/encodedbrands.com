import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepage = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homepage" }),
  schema: z.object({
    // shared
    idx: z.string().optional(),
    eyebrow: z.string().optional(),
    heading: z.string().optional(),
    blurb: z.string().optional(),
    quote: z.string().optional(),

    // hero
    meta_left: z.string().optional(),
    meta_right: z.array(z.object({ text: z.string() })).optional(),
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
    ticker: z.array(z.object({ text: z.string() })).optional(),
    prompt_card_label: z.string().optional(),
    prompt_card_title: z.string().optional(),
    prompt_card_meta: z.string().optional(),
    prompt_card_body: z.string().optional(),
    prompt_cta_label: z.string().optional(),
    prompt_cta_href: z.string().optional(),

    // strip
    items: z.array(z.object({ text: z.string() })).optional(),

    // thesis
    lede_idx: z.string().optional(),
    lede: z.string().optional(),
    body_idx: z.string().optional(),
    body_paragraphs: z.array(z.object({ text: z.string() })).optional(),
    quote_idx: z.string().optional(),

    // surfaces
    cards: z.array(z.object({
      num: z.string(),
      title: z.string(),
      body: z.string(),
      chips: z.array(z.object({ text: z.string() })).optional(),
    })).optional(),

    // how
    steps: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).optional(),
    cta_primary_label: z.string().optional(),
    cta_primary_href: z.string().optional(),
    cta_secondary_label: z.string().optional(),
    cta_secondary_href: z.string().optional(),

    // pricing
    tiers: z.array(z.object({
      popular: z.boolean().default(false),
      tag: z.string(),
      price_num: z.string(),
      price_per: z.string(),
      title: z.string(),
      body: z.string(),
      features: z.array(z.object({ text: z.string() })).optional(),
      cta_label: z.string(),
      cta_href: z.string(),
      cta_accent: z.boolean().default(false),
    })).optional(),
    footer: z.string().optional(),

    // tech
    card_title: z.string().optional(),
    card_meta: z.string().optional(),

    // dogfood
    kicker: z.string().optional(),
    sub_heading: z.string().optional(),
    meta: z.array(z.object({ text: z.string() })).optional(),
    code_card_title: z.string().optional(),
    code_card_meta: z.string().optional(),

    // launch
    body: z.string().optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    brand: z.string().optional(),
    brand_small: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    cta_label: z.string().optional(),
    cta_href: z.string().optional(),
    sub: z.string().optional(),
    columns: z.array(z.object({
      heading: z.string(),
      links: z.array(z.object({ label: z.string(), href: z.string() })),
    })).optional(),
    bottom_left: z.string().optional(),
    bottom_right: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    meta_left: z.string().optional(),
    meta_right: z.string().optional(),
    hero_heading: z.string().optional(),
    hero_lede: z.string().optional(),
  }),
});

export const collections = { homepage, site, pages };
