# Agent-readable bundle for encodedbrands.com

Everything in this folder goes into the `Bruiserhq/encodedbrands.com` repo root.

## What this ships

Encoded is a protocol company that sells machine-readable brand identity. The site is currently not machine-readable. This bundle fixes that.

After this deploys:
- `encodedbrands.com/.well-known/brand.md` serves the root of Encoded's own BCP (the dogfood). Structurally analogous to AGENTS.md and MCP.
- Six daughter files under `/.well-known/brand/` — voice, values, boundaries, claims, representation, README.
- `ai.txt` declares our stance on AI training and use.
- `llms.txt` gives LLM crawlers an optimized site map.
- `robots.txt` points at all of the above.
- `sitemap.xml` lists every file.
- `_headers` configures Cloudflare to serve `.md` as `text/plain` with CORS open.
- `index.html` gets a block of meta tags and JSON-LD structured data injected into the `<head>`.

## Files to add at repo root

```
.well-known/
  brand.md
  brand/
    voice.md
    values.md
    boundaries.md
    claims.md
    representation.md
    README.md
robots.txt
ai.txt
llms.txt
sitemap.xml
_headers
```

## File to edit

`index.html` — insert the block from `index-head-patch.md` into the `<head>`. See that file for the exact instructions and insertion point.

## File not yet generated (manual task)

`og-image.png` at repo root. 1200×630. See `index-head-patch.md` for direction. Non-blocking — site works without it, social previews just fall back to text.

## Cloudflare Pages gotcha

If `encodedbrands.com/.well-known/brand.md` still returns the SPA HTML after deploy, the SPA fallback is swallowing the request. Fix: in the Cloudflare Pages dashboard for this project, check `Build configuration → Output directory` and `Functions → Routes`. A `_routes.json` at root with `{"version": 1, "exclude": ["/.well-known/*"]}` typically resolves it.

This repo is static (no build step), so in most cases the `_headers` file plus the dotfile directory structure will work directly. Test by hitting the URL immediately after deploy.

## Commit plan

One commit is fine. Suggested message:

```
ship agent-readable surface — BCP, llms.txt, ai.txt, schema.org

- Publish Encoded's own BCP at /.well-known/brand.md + daughter files
- Dogfood the protocol we sell
- Add ai.txt and llms.txt (Nate's-newsletter agent-readable web conventions)
- Add robots.txt + sitemap.xml
- Configure Cloudflare _headers for text/plain MIME + CORS on /.well-known/*
- Inject OpenGraph, Twitter cards, and schema.org JSON-LD (Organization,
  WebSite, TechArticle, FAQPage) into index.html head
```

## Verify after deploy

1. `curl https://encodedbrands.com/.well-known/brand.md` returns the markdown, not the HTML.
2. `curl -I https://encodedbrands.com/.well-known/brand.md` shows `Content-Type: text/plain; charset=utf-8`.
3. `curl https://encodedbrands.com/robots.txt` returns the robots content.
4. `curl https://encodedbrands.com/ai.txt` returns the ai.txt content.
5. `curl https://encodedbrands.com/llms.txt` returns the llms.txt content.
6. Paste `encodedbrands.com` into Slack — preview card renders with title, description, and image (or text fallback if no og-image.png yet).
7. View page source at encodedbrands.com — confirm the JSON-LD block is present inside `<head>`.
8. Test in Google Rich Results Test: https://search.google.com/test/rich-results?url=https%3A%2F%2Fencodedbrands.com%2F — should detect Organization + FAQPage + WebSite.
9. In ChatGPT/Claude/Perplexity, ask "What is Encoded and Brand Context Protocol?" a week after deploy. Compare to the pre-deploy baseline. Representation should converge on the content of `representation.md`.
