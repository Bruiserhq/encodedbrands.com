# index.html head patch

One change to `index.html`. Insert a block of meta tags + structured data into the `<head>`.

## Where it goes

Find this existing line in `index.html`:

```html
<meta name="color-scheme" content="light" />
```

**Insert the block below immediately AFTER that line**, before the `<link rel="preconnect" ...>` fonts block.

## The block to insert

```html

<!-- ================================================================ -->
<!-- AGENT-READABLE METADATA                                          -->
<!-- Machine-readable surface for LLM crawlers, social previews,      -->
<!-- and any agent asking "what is this site about?"                  -->
<!-- Authoritative brand context lives at /.well-known/brand.md       -->
<!-- ================================================================ -->

<!-- Canonical -->
<link rel="canonical" href="https://hellotacit.ai/" />

<!-- Brand Context Protocol — the authoritative source -->
<link rel="brand-context" type="text/markdown" href="/.well-known/brand.md" title="Tacit — Brand Context Protocol (BCP v0.1)" />
<link rel="alternate" type="text/markdown" href="/.well-known/brand.md" title="brand.md" />

<!-- LLM-optimized site map -->
<link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt — LLM-optimized content map" />

<!-- OpenGraph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Tacit" />
<meta property="og:title" content="Tacit — Express and protect your brand in the age of the agent." />
<meta property="og:description" content="Tacit is a brand consultancy and protocol company. We author Brand Context Protocol (BCP) — the open standard for machine-readable brand identity. One spec, three surfaces: inside your stack, across your vendors, beyond your brand." />
<meta property="og:url" content="https://hellotacit.ai/" />
<meta property="og:image" content="https://hellotacit.ai/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Tacit — Express and protect your brand in the age of the agent." />
<meta property="og:locale" content="en_US" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Tacit — Express and protect your brand in the age of the agent." />
<meta name="twitter:description" content="The open standard for machine-readable brand identity. One spec, three surfaces." />
<meta name="twitter:image" content="https://hellotacit.ai/og-image.png" />
<meta name="twitter:image:alt" content="Tacit — Express and protect your brand in the age of the agent." />

<!-- Schema.org structured data — Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hellotacit.ai/#organization",
      "name": "Tacit",
      "url": "https://hellotacit.ai/",
      "description": "Tacit is a brand consultancy and protocol company. We author Brand Context Protocol (BCP) — the open standard for machine-readable brand identity — and run the consulting and monitoring services built on top of it.",
      "foundingDate": "2026",
      "email": "tacit@hellotacit.ai",
      "founder": [
        { "@type": "Person", "name": "Nick Strada" },
        { "@type": "Person", "name": "Julia Joung" },
        { "@type": "Person", "name": "James Jenkins" }
      ],
      "knowsAbout": [
        "Brand strategy",
        "Brand Context Protocol",
        "Agentic marketing",
        "Open protocols",
        "Machine-readable brand identity"
      ],
      "slogan": "Express and protect your brand in the age of the agent."
    },
    {
      "@type": "WebSite",
      "@id": "https://hellotacit.ai/#website",
      "url": "https://hellotacit.ai/",
      "name": "Tacit",
      "publisher": { "@id": "https://hellotacit.ai/#organization" },
      "inLanguage": "en-US",
      "description": "The open standard for brand identity in the agentic age."
    },
    {
      "@type": "TechArticle",
      "@id": "https://hellotacit.ai/#bcp",
      "name": "Brand Context Protocol (BCP) v0.1",
      "headline": "Brand Context Protocol — an open standard for machine-readable brand identity",
      "description": "Hierarchical markdown files at domain/.well-known/brand.md, structurally analogous to AGENTS.md and MCP. Encodes a brand's identity, voice, boundaries, claims, and representation into a file set every agent in the stack can consume.",
      "author": { "@id": "https://hellotacit.ai/#organization" },
      "publisher": { "@id": "https://hellotacit.ai/#organization" },
      "datePublished": "2026-04-18",
      "dateModified": "2026-04-18",
      "inLanguage": "en-US",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "url": "https://hellotacit.ai/.well-known/brand.md"
    },
    {
      "@type": "FAQPage",
      "@id": "https://hellotacit.ai/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Brand Context Protocol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brand Context Protocol (BCP) is an open, machine-readable standard for brand identity. It encodes a brand's strategy, voice, values, boundaries, claims, and representation preferences into hierarchical markdown files at domain/.well-known/brand.md. Every agent in the stack — internal, vendor, and consumer-facing — can read and act on it."
          }
        },
        {
          "@type": "Question",
          "name": "Why does brand need to be machine-readable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 12 to 36 months, most marketing teams will be staffed with more agents than humans. The tested brand knowledge that lives in senior marketers' heads has no machine-readable home. Without one, internal agents produce generic output, vendor platforms make decisions with partial information, and consumer agents like ChatGPT describe brands however the model guesses."
          }
        },
        {
          "@type": "Question",
          "name": "How is BCP different from AGENTS.md or MCP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BCP uses the same structural pattern as AGENTS.md and MCP — hierarchical files at a well-known path — but targets brand identity rather than codebase instructions or tool protocols. It's the brand layer of an agent-readable web."
          }
        },
        {
          "@type": "Question",
          "name": "Is BCP open source?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The BCP specification is published under CC BY 4.0. Reference code, validators, and SDKs are MIT. The Forge authoring wizard and Living BCP monitoring runtime are proprietary products built on top of the open spec."
          }
        },
        {
          "@type": "Question",
          "name": "How do I adopt BCP for my brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fork the template at github.com/Bruiserhq/hellotacit.ai, edit your brand's content, and publish at yourdomain.com/.well-known/brand.md. You can also work with Tacit directly — tiers run from a $1,500 expert session to a $150K enterprise engagement."
          }
        }
      ]
    }
  ]
}
</script>

<!-- ================================================================ -->
<!-- END AGENT-READABLE METADATA                                      -->
<!-- ================================================================ -->

```

## What this adds, and why

- **Link rel to `/.well-known/brand.md`** — points any crawler/agent that checks `<link>` tags directly at the authoritative BCP.
- **OpenGraph + Twitter card** — makes the site render as a rich preview card when pasted into Slack, LinkedIn, iMessage, ChatGPT conversations, etc. Currently renders as a bare URL.
- **Organization, WebSite, TechArticle, FAQPage JSON-LD** — structured data that ChatGPT, Perplexity, Gemini, and Google all consume. The FAQ block directly answers "what is BCP" in the training/RAG path.
- **`og:image`** — needs a 1200×630 PNG at `/og-image.png`. See the separate note about this below.

## Still needed

**`og-image.png`** — a 1200×630 preview image. Create one in Figma or any design tool, export, and place at the repo root as `og-image.png`. Simple direction: cream `#F4EFE6` background, Fraunces serif headline "Express and protect your brand in the age of the agent.", small "Tacit" wordmark with accent dot in the corner. Until this file exists, social previews will render text-only, which is fine but not ideal.
