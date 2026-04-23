# encodedbrands.com — CMS migration spec

**Status:** Draft, authored 2026-04-23, revised same day
**Author:** Prior Claude session (handoff)
**Audience:** Next Claude session with codebase access + appropriate tools
**Version:** 0.2 — folds in James's redesign brief, Nick's strategic corrections, and corrected CMS pricing reality

---

## 1. Strategic positioning — READ BEFORE ANYTHING ELSE

The rebuild is not just a stack migration. It's a migration plus a positioning correction. Before any code is written, internalise this:

**The central tension.** Encoded sells a consultancy built on top of an open spec (BCP). The spec must NEVER read as *"a consultancy's proprietary framework designed to sell consulting."* It must read as *"an open standard that exists because brand matters in the agentic age — and Encoded happens to be the best-equipped shop to help you adopt it well."*

If the smell is "consultancy invented a spec to serve itself," the entire thesis collapses. Competitors are already doing that. Encoded wins only by being demonstrably non-proprietary.

**Adoption is the #1 KPI.** More important than conversions to the paid tiers. The copy-the-prompt path must be visible and usable from the hero — not behind a CTA, not moved to `/start`, not buried. Right side of the hero, as it is currently placed. It serves two simultaneous functions:

1. Lowest-friction adoption path for visitors who want to try it themselves
2. Commitment device proving the spec is genuinely open — a consultancy hiding a proprietary framework does not hand you the framework for free in the hero

Any design iteration that weakens or removes this affordance fails the brief.

**Value-ladder framing.** The three tiers are not "three ways to get the same artifact." They are three levels of depth applied to the user's brand:

| Tier | What the user pays for | Why we can/must price it this way |
|---|---|---|
| Free | Their own AI's inference and their own time | Zero cost to Encoded. Adoption engine. |
| Expert Session ($1,500) | A structured self-service flow informed by our opinionated corpus of brand strategy work, plus strategist time reviewing the output | We're running the inference on our compute with our frameworks embedded, and a senior strategist is devoting real time to the engagement |
| Sprint ($15,000) | A senior strategist applies the corpus with judgment an automated flow can't replicate | Human time on hard questions |

The artifact is nominally the same (a BCP file tree at the user's domain), but at $15k the brand is better encoded because the hard questions get resolved by a human. Copy should be honest about this — not "every path produces the same thing," but "same shape of output, different depth of thinking applied."

**Vocabulary decision.** Keep "BCP" and "brand.md" as the product nouns throughout the site. Do not soften to "brand briefing" or similar consultant-friendly substitutes. The technical jargon *is* the proof of the standard's existence and openness. Softening it loses the signal that differentiates Encoded from every other brand-AI consultancy.

**Two readers must both be satisfied by one scan:**

- *Brand leader:* "Your brand is at risk from the agents already in your stack. There is a way to fix this. You can try it yourself right now, or you can hire professionals who literally wrote the standard. The standard exists because brand matters — not because we needed a product."
- *Skeptical technologist or CMO's CTO:* "This is an open spec, CC BY 4.0, implemented at a standard well-known URL, pattern-matching AGENTS.md and robots.txt. Reference implementation is public on GitHub. The consultancy is one possible commercial layer on an open standard. You can fork it and ignore us."

Every content and design decision in the rebuild must be checked against both reads.

---

## 2. Mission

Migrate encodedbrands.com from hand-authored raw HTML on Cloudflare Pages to a Git-backed CMS architecture **and** rebuild the homepage content according to the revised positioning in §1 and the content architecture in §6. The rebuild and the migration ship together — not sequenced. Ship order: stack chosen (Phase 0) → new homepage built on new stack (Phase 1) → remaining pages migrated (Phase 2) → production cutover (Phase 3).

The site's commercial job: drive adoption of BCP (primary KPI), sell Expert Sessions and Sprints (secondary KPI), evangelise the open standard, and serve as its public reference implementation.

The migration's editorial job: make the marketing layer editable by Nick and 1–2 non-dev collaborators without a PR.

The migration's architectural job: preserve the BCP reference implementation exactly as it exists at `/.well-known/brand.md` and daughter files. BCP stays Git-edited, dev-maintained, dogfooded in public.

---

## 3. Non-negotiables

These are load-bearing. The rebuild breaks them only with explicit sign-off from Nick.

### Strategic (from §1)

1. **The copy-the-prompt affordance lives in the hero, visible above the fold.** Right side of the hero as currently placed is correct. Must be visibly usable as a *thing on the page right now*, not hidden behind a CTA like "Start." This is load-bearing for the #1 KPI (adoption) and for the anti-consultancy-smell posture. Any design that weakens, relocates, or hides this fails the brief.
2. **"BCP" and "brand.md" remain the product nouns throughout the site.** No substitution to "brand briefing" or similar softened alternatives. The jargon is the proof of standard.
3. **Pricing copy frames the three tiers as three levels of depth applied to the user's brand.** Not "three ways to get the same thing." Copy must be honest that $15k produces a better-encoded brand than the free path — while still making the free path legitimate and real.
4. **Primary nav CTA on the homepage is "Book a call."** The commercial model on the homepage is now selling the service, with the open spec as the credibility underneath.

### Architectural

5. **BCP stays in Git, edited by developers.** The `/.well-known/brand.md` root and all daughter files (`/.well-known/brand/*.md`) remain plain markdown committed to the repo. No CMS involvement. No database. No generated-at-build-time emission from a different source. The files on disk *are* the BCP.
6. **The site and the BCP live in the same repo.** Currently `github.com/Bruiserhq/encodedbrands.com`. This coupling is intentional — it's how the site functions as a reference implementation.
7. **Cloudflare Pages hosting stays.** Deploy pipeline is git → Cloudflare Pages.
8. **`/.well-known/` MIME + CORS headers remain correct.** `text/plain; charset=utf-8`, `Access-Control-Allow-Origin: *`. The `_headers` file at repo root governs this.
9. **All existing URLs continue to resolve.** `/`, `/start`, `/docs`, `/encode`, `/.well-known/brand.md`, `/.well-known/brand/*.md`.
10. **Spec fidelity.** The `/docs` page's technical content must match the BCP files themselves. Treat the BCP files as canonical source.
11. **Open-source posture preserved in the public-facing product.** The repo stays public. The spec stays CC BY 4.0. Reference code stays MIT. The BCP reference implementation and anything a visitor or a forking brand interacts with must not depend on a proprietary SaaS. *The authoring CMS is internal tooling and is out of scope for this rule* — use whichever CMS best serves Nick and his collaborators, even if it's a paid SaaS. What matters is that the artifact (the BCP files, the site as reference implementation) is fully portable and fully forkable.
12. **Site pulls from `main` at build.** No long-lived branches, no preview-environment ambiguity.

---

## 4. Non-goals

Explicit exclusions. If the next session finds itself doing these, stop and check in.

- **Not Webflow.** Visual-first, designer-in-the-loop. Good at pixels; bad at Git-native content; bad at exposing structured data cleanly; would require leaving Cloudflare Pages. Audited and rejected in the prior session.
- **Not Sanity / Contentful / headless-CMS-with-content-lake.** Would split the source of truth between CMS DB and Git. Undermines the walk-the-talk pitch. Audited and rejected.
- **Not building a new authoring UI for BCP files.** Devs edit them in the editor/IDE they already use. Phase 3 may expose them via the CMS later; v1 does not.
- **Not full visual-canvas WYSIWYG parity with Webflow.** A block-based editor with live preview is enough. Don't over-invest in trying to replicate drag-and-drop design.
- **Not a full visual redesign of every page.** The homepage is being rebuilt per §6 (content architecture follows James's brief with Nick's corrections). `/start`, `/docs`, `/encode` — or whatever replaces them — get migrated to the new stack but retain their existing visual treatment unless a specific change is explicitly called for. The rebuild is not a blank-canvas redesign of the whole site.
- **Not multi-locale.** `en-US` only for now. The BCP frontmatter supports it, but the marketing site does not need it yet.

---

## 5. Current state

### 5.1 Stack
- **Hosting:** Cloudflare Pages
- **Source:** Raw HTML (no framework, no build step, or a minimal one)
- **Repo:** `github.com/Bruiserhq/encodedbrands.com`
- **Deploy:** git push → Cloudflare Pages auto-deploy

### 5.2 Pages inventory

| Route | Purpose | Length | Complexity |
|---|---|---|---|
| `/` | Marketing homepage | Long scroll, 8+ sections | High — hero, thesis, three-surfaces grid, start CTA, protocol explainer with code blocks, manifesto, dogfood section, encode/pricing teaser, launch CTA, footer |
| `/start` | Free BCP authoring path | 3-step explainer + full prompt | Medium — copy-heavy, code block for the prompt, multi-path deployment explainer |
| `/docs` | BCP v0.1 technical specification | TOC + long technical doc | High — mirrors content of the BCP spec itself, heavy on code blocks, tables, schemas |
| `/encode` | Pricing (three tiers) | Tier cards + comparison table | Medium — structured pricing data, feature matrices |
| `/.well-known/brand.md` | BCP root (live reference) | ~3KB markdown | Low — this is the BCP, it stays untouched |
| `/.well-known/brand/*.md` | BCP daughter files | Small markdown each | Low — same |

### 5.3 Content categories

1. **BCP files** — markdown, git-edited, stays as-is
2. **Marketing prose** — hero copy, thesis, manifesto, CTAs (currently HTML-embedded)
3. **Pricing data** — three tiers, feature matrix (currently HTML-embedded, wants to be structured data)
4. **Technical spec content on `/docs`** — mirrors BCP files; currently hand-kept-in-sync HTML (risk: drift)
5. **Site chrome** — nav, footer, metadata (currently HTML-embedded)

### 5.4 Known problems Nick has flagged
- Site reads as "generic, too technical, and hard to update"
- Updates require a code-level commit, which is friction for non-dev content changes
- Raw-HTML aesthetic reads as dev-doc to the CMO audience the $15k tier targets

### 5.5 Things that aren't problems (don't fix)
- BCP file format and tree structure
- Repo structure (single-repo for site + BCP)
- Hosting platform
- Open-source licensing posture

---

## 6. Target architecture

### 6.1 Stack decisions

**Framework:** Astro
- Rationale: Cloudflare-native, ships almost no JS by default, first-class markdown support, Content Collections API is ideal for the BCP files, works with every Git-backed CMS under consideration, minimal runtime cost.
- Alternative considered: Next.js. Heavier, overkill for a marketing site, Cloudflare adapter is fine but Astro's is native.

**CMS:** TinaCMS (primary recommendation — Tina Cloud free tier)

TinaCMS was the right default all along. Rationale:

- **Editing UX.** Live visual editing with inline preview on the actual site. For Nick's stated need ("a place to edit content that isn't GitHub or Claude Code") this is the strongest option. Sveltia's editor is a side-panel form; Tina's is closer to editing-on-the-page.
- **Git-backed.** Despite being a hosted service, Tina writes commits to your repo. Your content stays in Git. If Tina disappears tomorrow, your files are untouched and you can switch editors without a data migration.
- **Scale.** Tina Cloud free tier covers 2 users and 1 project — fits Nick + one collaborator exactly. Adding a second collaborator pushes to the $29/mo Team tier; not meaningful money, and the decision is reversible.
- **Ecosystem fit.** Works with Astro. Works with Cloudflare Pages. Schema-driven, so content is typed.

Earlier versions of this spec demoted Tina in favor of Sveltia on open-source-purist grounds. That was a misread of Nick's strategic frame — the open-source requirement applies to the public-facing product (BCP files, site as reference implementation), not to internal authoring tooling visitors never see. See non-negotiable §3.11.

**Alternatives, for reference:**

- **Sveltia CMS** — Fully open-source (MIT), browser-only, zero SaaS dependency. Good fallback if Nick later wants to eliminate all SaaS from the stack, but editing UX is noticeably weaker than Tina.
- **Self-hosted Tina** — Same open-source Tina backend, hosted by us. Available as an escape hatch if Tina Cloud ever becomes a problem (pricing change, reliability, acquisition). Preserves all the editing-UX benefits with more ops work.

**Phase 0 validation still required.** Next session stands up Tina Cloud + Astro + Cloudflare Pages against the Phase 0 validators (§8.1) and confirms it works. Sveltia only gets tested if Tina Cloud fails a Phase 0 check or Nick explicitly wants a comparison.

**Hosting:** Cloudflare Pages (unchanged)

**Content storage:**
- **BCP files** → `/.well-known/` in the repo (untouched)
- **Marketing content** → `/src/content/` as markdown/MDX with frontmatter, organised by page
- **Pricing, tier data** → `/src/content/data/` as structured YAML or JSON collections
- **Global site data (nav, footer, metadata)** → `/src/content/site/` as single YAML files

**The `/docs` spec-drift problem:** The docs page currently restates BCP file structure by hand. Next session should evaluate generating the `/docs` page content *from* the BCP files in `/.well-known/` — use them as the source, render them into the docs page at build time. This eliminates drift and doubles the walk-the-talk.

### 6.2 Repo structure (target)

```
encodedbrands.com/
├── .well-known/                  # BCP — untouched, dev-edited
│   ├── brand.md
│   └── brand/
│       ├── voice.md
│       ├── values.md
│       ├── boundaries.md
│       ├── claims.md
│       ├── representation.md
│       └── README.md
├── _headers                      # Cloudflare Pages headers for MIME + CORS
├── public/                       # Static assets, favicons, OG images
├── src/
│   ├── content/
│   │   ├── pages/               # Homepage, /start, /encode marketing copy
│   │   │   ├── home.md
│   │   │   ├── start.md
│   │   │   └── encode.md
│   │   ├── data/
│   │   │   ├── tiers.yaml       # Pricing tiers, feature matrix
│   │   │   └── audiences.yaml   # Three-surfaces data
│   │   └── site/
│   │       ├── nav.yaml
│   │       ├── footer.yaml
│   │       └── meta.yaml
│   ├── pages/                   # Astro routes
│   │   ├── index.astro
│   │   ├── start.astro
│   │   ├── docs.astro           # Generated from /.well-known/ content
│   │   └── encode.astro
│   ├── components/
│   └── layouts/
├── tina/ or admin/              # CMS config (depends on which CMS)
├── astro.config.mjs
├── package.json
└── wrangler.toml                # If using Cloudflare bindings
```

### 6.3 Build + deploy flow

1. Dev or non-dev edits content (dev: directly in files; non-dev: via CMS web UI)
2. CMS commits to `main` (or a branch → PR → `main` if guardrails are added later)
3. Cloudflare Pages detects push, runs `npm run build` (Astro build)
4. Astro generates static HTML for all pages, copies `/.well-known/` through unchanged
5. `_headers` applied at edge
6. Live

No runtime CMS. No database query on page load. Fully static.

---

## 7. Phased plan

### Phase 0: Prove the stack (timebox: 1 day)

**Goal:** Before migrating anything, verify TinaCMS + Astro + Cloudflare Pages work together for this use case.

Tasks:
- Spin up a throwaway Astro project
- Install TinaCMS (Tina Cloud free tier), configure one schema (e.g., a "page" collection with title + body)
- Deploy to Cloudflare Pages
- Copy `/.well-known/brand.md` into the throwaway repo as-is, confirm it serves with correct MIME + CORS
- Edit the page via the Tina visual editor, confirm commit to Git, confirm deploy, confirm live update
- Run all Phase 0 validators (§8.1)

Exit criteria: All Phase 0 validators pass.

### Phase 1: Rebuild the homepage on the new stack (timebox: 3 days)

**Goal:** Ship a new homepage that implements §1 (strategic positioning) and §6 (target content architecture, per James's brief with Nick's corrections). This is the most strategically important page and it's the one Nick has explicitly flagged as not working. Everything else on the site is lower stakes.

The homepage is first, not last, because:
- It's the page where the positioning shift in §1 lands or doesn't
- It's the page that drives the #1 KPI (adoption) via the hero prompt affordance
- Migrating peripheral pages first is effort on content that may get retired anyway once the new homepage is live

Tasks:
- Fork or branch the production repo
- Introduce Astro, preserve existing raw HTML for `/start`, `/docs`, `/encode` temporarily (they continue to work untouched during Phase 1)
- Author the CMS schema for the homepage content model, including: hero (headline, standfirst, CTAs, pull-quote, ticker items, prompt block on the right), § 01 Why it matters (headline, body, pull-quote), § 02 Where your brand needs to live (intro + three cards with title/body/tags), How it works (intro + three numbered steps), Pricing (intro + three cards with price/name/body/CTA/"most popular" flag), For the technically curious (intro + one short YAML block + license line), Manifesto (pull-quote only), We use it ourselves (body + short voice.md preview block), Launch (eyebrow + body + CTAs), footer
- Port/rewrite content per §6 content architecture — this is where James's brief and Nick's corrections get implemented in copy
- Build homepage as an Astro page reading from the CMS
- Deploy to a staging Cloudflare Pages environment
- Run Phase 1 validators (§8.2), including the human positioning-smell review gate (V1.7)

Exit criteria: Staging homepage passes all Phase 1 validators including the human positioning review by Nick (and ideally James).

### Phase 2: Migrate remaining pages (timebox: 3 days)

Port `/start`, `/encode`, `/docs` to the new stack. Order:

1. `/start` — the copy-the-prompt detail page. Ports relatively cleanly; content is close to production-ready. Check that the hero prompt on the homepage and the full prompt on `/start` don't diverge over time (same source file, two render sites).
2. `/encode` — pricing detail page. Copy must be rewritten per §1 pricing framing (three levels of depth, not "three ways to the same thing"). Homepage already states the new pricing framing; `/encode` deepens it.
3. `/docs` — the technical spec. This is where the spec-drift elimination happens. The docs page should import content from `/.well-known/brand.md` and daughter files, extract the frontmatter and body, and render them in the docs layout. Spec content never duplicated. Also: add a short bridging line at the top of `/docs` that maps any consumer-language terms introduced on the homepage to the technical terms used on `/docs` — resolves the vocabulary-cliff risk flagged in §9.

Exit criteria: All pages ported, all Phase 2 validators (§8.3) pass, Lighthouse scores no worse than current production, zero broken links.

### Phase 3: Ship to production (timebox: 1 day)

Tasks:
- Final review with Nick
- Merge to `main`
- Point Cloudflare Pages at the new build
- Monitor for 48 hours
- Onboard 1–2 non-dev collaborators on the chosen CMS (30-min session each)

Exit criteria: Production serves the new build, BCP still served correctly, no regressions, collaborators confirmed able to edit.

### Out of scope / Phase 4+ (mentioned for context, not blocking)
- Visual redesign to de-genericize the aesthetic (separate engagement)
- Case studies / founding partner logos section (content work)
- Newsletter integration (if desired)
- Agent-facing analytics on BCP fetches (separate product track)

---

## 8. Validators

Each phase has concrete, automatable checks. Next session must implement these (or equivalent) and run them before declaring a phase done. Where a check is inherently manual (e.g., a human editing via CMS UI), the script still exists and is triggered manually.

### 8.1 Phase 0 validators

Written as bash / curl / simple scripts. These run against the throwaway Astro + CMS deploy from Phase 0.

**V0.1 — Stack deploys**
```bash
# Assertion: staging URL returns 200
curl -sfo /dev/null -w "%{http_code}" https://<staging>.pages.dev/
# Must output 200
```

**V0.2 — `/.well-known/brand.md` serves with correct MIME**
```bash
curl -sI https://<staging>.pages.dev/.well-known/brand.md | grep -i "content-type: text/plain"
# Must exit 0
```

**V0.3 — CORS headers present**
```bash
curl -sI https://<staging>.pages.dev/.well-known/brand.md | grep -i "access-control-allow-origin: \*"
# Must exit 0
```

**V0.4 — Markdown renders as markdown, not HTML**
```bash
# BCP files must be served raw, not rendered through the Astro HTML pipeline
curl -s https://<staging>.pages.dev/.well-known/brand.md | head -1
# Must output: ---   (the YAML frontmatter opening)
```

**V0.5 — CMS edit → Git commit → deploy → live**
Manual script, documented steps:
1. Open Tina on the staging deploy
2. Edit the test page's title from "Foo" to "Bar"
3. Save
4. Within 60 seconds, `curl https://<staging>.pages.dev/` must contain "Bar" and not "Foo"
5. `git log origin/main -1` must show a commit with the change

Pass = all steps succeed within the time window.

### 8.2 Phase 1 validators (post-migration of homepage)

**V1.1 — URL continuity**
```bash
for url in / /start /docs /encode /.well-known/brand.md /.well-known/brand/voice.md /.well-known/brand/values.md /.well-known/brand/boundaries.md /.well-known/brand/claims.md /.well-known/brand/representation.md; do
  code=$(curl -sfo /dev/null -w "%{http_code}" https://<staging>.pages.dev$url)
  [ "$code" = "200" ] || { echo "FAIL: $url returned $code"; exit 1; }
done
echo "All URLs 200"
```

**V1.2 — BCP file byte-equal to production**
```bash
# BCP must not have been mutated during migration
for f in brand.md brand/voice.md brand/values.md brand/boundaries.md brand/claims.md brand/representation.md; do
  diff <(curl -s https://encodedbrands.com/.well-known/$f) <(curl -s https://<staging>.pages.dev/.well-known/$f)
  [ $? -eq 0 ] || { echo "FAIL: $f differs"; exit 1; }
done
```

**V1.3 — BCP frontmatter schema valid**
```bash
# Run against the root file
python3 scripts/validate-bcp.py https://<staging>.pages.dev/.well-known/brand.md
```
Script checks:
- Required fields present: `bcp_version`, `brand_name`, `file_type`, `last_updated`
- `file_type` is `root` for brand.md, matches filename for daughters
- `last_updated` is valid ISO 8601
- All `daughter_files` paths return 200

**V1.4 — Homepage content completeness**
Manual spot-check comparing the staging homepage to §6 content architecture. Every section in §6 must be present in the rendered page in the specified order. Specifically:
- Hero: headline, standfirst, two CTAs (primary "Book a call", secondary to free prompt), manifesto pull-quote, ticker, copy-the-prompt affordance visible on the right side above the fold
- § 01 Why it matters: keep-exactly content per James's brief with pull-quote
- § 02 Where your brand needs to live: three cards ("Inside your team" / "Across your partners" / "Beyond your control") with tag pills using category names, not product names
- How it works: three numbered steps ending in a link to `/start`
- Pricing: three tier cards with "Most popular" badge on Expert Session, copy framed as three levels of depth per §1
- For the technically curious: one YAML block only, license line, link to `/docs`
- Manifesto: pull-quote only
- We use it ourselves: body + short voice.md preview + link to full BCP
- Launch: eyebrow + body + CTAs
- Footer

Pass = every section present, in order, with content matching §6.

**V1.5 — Non-dev edit flow on the homepage**
Same mechanics as V0.5, against the new homepage. A non-dev collaborator (or a dev simulating one via the CMS UI only, no direct file editing) edits the hero headline from its current text to a known test string. Within 60 seconds, `curl https://<staging>.pages.dev/` must contain the test string, and `git log origin/main -1` must show a commit authored by the CMS integration. Revert the change afterwards.

**V1.6 — Lighthouse score**
```bash
npx lighthouse https://<staging>.pages.dev/ --output=json --quiet > lighthouse-home.json
# Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95
```

**V1.7 — Positioning smell review (human-only, required)**
Not automatable. Required gate before Phase 1 can exit.

Nick (and ideally James) scan the staging homepage once, top to bottom, at the pace a real visitor would. Then answer each question yes/no in writing:

1. *Would a Head of Brand at a mid-to-large company, landing here cold, feel "this is my problem and these people have solved it"?*
2. *Would a skeptical CTO or technical advisor, reading over the CMO's shoulder, feel "this is a legitimate open standard, not a Trojan horse for consulting sales"?*
3. *Is the copy-the-prompt affordance visible above the fold, usable as a thing on the page right now, without clicking through to another page?*
4. *Does the pricing language frame the three tiers as three levels of depth applied to the brand, rather than "three ways to get the same thing"?*
5. *Has any consumer-language softening of "BCP" or "brand.md" crept in? (e.g. "brand briefing," "brand kit," "brand config")*
6. *Does any single sentence read as "a consultancy invented this framework to sell itself"?*

Pass = Q1–Q4 all yes, Q5–Q6 both no. Any failure blocks Phase 1 exit. Document the answers in a commit message or GitHub issue before proceeding.

**V1.8 — Adoption affordance works end-to-end**
Automated + manual. The copy-the-prompt block on the homepage must:
```bash
# The prompt block must be present in the rendered HTML above the fold
curl -s https://<staging>.pages.dev/ | head -c 50000 | grep -q "You are helping me author a Brand Context Protocol"
# Expected: match
```
Plus manual: click the copy button in the hero, paste into a fresh Claude / ChatGPT / Gemini session, confirm the AI begins the interview flow correctly (asks "What have you got?" per the prompt's Part 0). If the prompt has regressed or been truncated, fail.

### 8.3 Phase 2 validators (full site migrated)

All Phase 1 validators, plus:

**V2.1 — All routes migrated**
Every page from §5.2 renders via Astro, no raw-HTML fallbacks remain.

**V2.2 — `/docs` content derived from BCP files**
Grep the generated `/docs` HTML for a known distinctive string from `/.well-known/brand/voice.md`. If the string appears on `/docs`, derivation is working. If `/docs` is hand-authored separately, fail — the whole point is spec-drift elimination.
```bash
# Example: pick a string unique to voice.md and assert it appears on /docs
distinctive=$(curl -s https://<staging>.pages.dev/.well-known/brand/voice.md | grep -oP 'preferred voice phrasing' | head -1)
curl -s https://<staging>.pages.dev/docs | grep -q "$distinctive"
```

**V2.3 — No drift**
Run V1.2 across all BCP files. Must still be byte-equal to production.

**V2.4 — Build is reproducible**
`npm install && npm run build` from a clean checkout produces a working `/dist` with all pages. No missing env vars required for a marketing-only build. (CMS authentication is a runtime concern, not a build concern.)

**V2.5 — Link check**
```bash
npx linkinator https://<staging>.pages.dev --recurse --skip "mailto:|cdn-cgi"
# Zero broken internal links
```

### 8.4 Phase 3 validators (production)

All Phase 2 validators, run against the production URL after cutover.

**V3.1 — No regression in agent fetch path**
```bash
# Simulate an agent fetching BCP: must succeed from any origin
curl -sH "Origin: https://arbitrary-origin.example" \
     -I https://encodedbrands.com/.well-known/brand.md \
  | grep -i "access-control-allow-origin"
```

**V3.2 — Collaborator sign-off**
Manual. Non-dev collaborator successfully edits one piece of copy end-to-end without a dev present. Documented with a timestamp and a commit hash.

### 8.5 Continuous validators (after launch)

Run on a cron (GitHub Action, weekly):

**VC.1 — BCP spec conformance** — V1.3 against production weekly
**VC.2 — Spec-page-vs-BCP-file parity** — V2.2 equivalent, weekly
**VC.3 — MIME + CORS still correct** — V0.2, V0.3, V3.1 weekly

Any failure opens a GitHub issue automatically.

---

## 9. Open questions for the next session

Flag these at the start. They need Nick's input before committing.

1. **Confirm TinaCMS Cloud free tier as the CMS choice.** §6.1 recommends Tina Cloud free tier. Sveltia and self-hosted Tina are alternatives if Tina Cloud fails Phase 0 validation or Nick later wants to eliminate SaaS from the stack. Surface this decision at Phase 0 kickoff — if Nick wants to reconsider, now's the time.
2. **`/docs` generation strategy.** Fully derived from BCP files (ideal, eliminates drift) vs partially derived with hand-authored wrapper prose (pragmatic). Evaluate in Phase 2 and decide.
3. **Vocabulary-cliff bridging on `/docs`.** The homepage uses consumer-readable language for the three audiences ("Inside your team / Across your partners / Beyond your control") while keeping "BCP" and "brand.md" as product nouns throughout. `/docs` still uses the full technical vocabulary (daughter files, resolve lazily, frontmatter schema, etc). A reader moving from homepage to `/docs` needs a one-paragraph bridge at the top of `/docs` mapping the on-homepage terms to the technical terms. Next session drafts this in Phase 2, Nick reviews before cutover.
4. **Homepage visual treatment during rebuild.** The rebuild follows James's content architecture (§6) but the visual system is underspecified. Options: (a) preserve the existing aesthetic exactly, just re-laid-out for new content, (b) apply light design improvements implied by the new structure (typography hierarchy, whitespace, pricing card treatment), (c) fuller design pass. James's brief implies (b). Default to (b) unless Nick explicitly requests (a) or (c).
5. **Branch strategy.** Direct commits to `main` from CMS (fast, risky) vs CMS → branch → PR → `main` (slower, safer). Recommend direct-to-`main` for solo/small-team speed. Reconsider when team grows.
6. **BCP editing via CMS (Phase 3+).** Nick has said not needed. Captured as a decision. Revisit only if editing friction becomes a real bottleneck for Nick or collaborators.
7. **Retirement of `/encode` page.** James's brief folds pricing into the homepage. This reduces `/encode` to an optional detail page. Options: (a) keep `/encode` as a deeper pricing breakdown page, (b) redirect `/encode` → `/#pricing` anchor on homepage, (c) retire `/encode` entirely. Decide in Phase 2.

---

## 10. Handoff prompt for the next session

Paste this into the fresh session to activate it correctly:

```
You are picking up work on a CMS migration for encodedbrands.com. A prior session produced a full spec with validators — it is in the repo at docs/cms-migration-spec.md (or wherever Nick has placed it). Read it first before proposing anything.

Context you must load:
1. The spec document (above path)
2. The production site — https://encodedbrands.com
3. The current repo — github.com/Bruiserhq/encodedbrands.com
4. The live BCP — https://encodedbrands.com/.well-known/brand.md and daughter files

Your first actions, in order:
1. Confirm you have access to the repo. If not, ask Nick.
2. Read §1 (Strategic positioning) first. This is the spine every content and design decision must pass through. If anything downstream in the spec contradicts §1, §1 wins.
3. Read the rest of the spec end-to-end. Flag any assumption you think is wrong before starting work.
4. Surface the §9 open questions to Nick and get decisions before Phase 0.
5. Begin Phase 0. Do not skip to Phase 1 until all Phase 0 validators pass.

Your operating mode:
- Capture decisions to Open Brain as you go.
- The validators in §8 are not optional. Run them. Show Nick the output.
- If a validator fails, fix the underlying thing. Do not rewrite the validator.
- V1.7 (positioning smell review) is required and human-only. Do not self-certify it. Nick runs it.
- Push back if you think the spec is wrong. It was written by a session without codebase access.

Non-negotiables are in §3 — Strategic (1–4) and Architectural (5–12). Honor all of them. The strategic non-negotiables are as load-bearing as the architectural ones; a migrated site that builds cleanly but smells like a consultancy selling a proprietary framework has failed.

Current session date: [fill in when running]
```

---

## 11. Changelog

- **2026-04-23 v0.2** — Folded in James's homepage redesign brief and Nick's strategic corrections. Added §1 Strategic positioning as the spine. §3 Non-negotiables split into Strategic (1–4) + Architectural (5–12). §7 Phased plan reordered: Phase 1 is now homepage rebuild. §8.2 validators updated to target homepage; added V1.7 (human positioning-smell review) and V1.8 (adoption affordance works end-to-end). §9 open questions updated — vocabulary-cliff bridging question added, `/encode` retirement question added. §10 handoff prompt updated to reference §1 first.

  Mid-draft, the CMS recommendation was briefly flipped to Sveltia based on a misread of the "open-source product" posture. Nick pushed back: the open-source requirement applies to the public-facing product (BCP, site as reference implementation), not to internal authoring tooling. CMS reverted to TinaCMS (Tina Cloud free tier) as primary. Non-negotiable §3.11 narrowed accordingly. Sveltia and self-hosted Tina remain listed as alternatives/escape hatches.

- **2026-04-23 v0.1** — Initial draft. Authored without codebase access, based on public site audit + conversation with Nick. All assumptions about current stack (raw HTML / Cloudflare Pages) were confirmed by Nick. Assumptions about repo structure are inferred and may need correction.
