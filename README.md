# hellotacit.ai

The Tacit website and the reference implementation of **Brand Context Protocol (BCP)** — an open standard for machine-readable brand identity in the agentic age.

## Adopt BCP in 15 minutes

**You don't need to clone this repo.** The fastest path to a live BCP for your brand is:

1. Go to **[hellotacit.ai/start](https://hellotacit.ai/start)**
2. Copy the BCP authoring prompt
3. Paste it into Claude, ChatGPT, Cowork, or any AI
4. Answer 18 questions over ~15 minutes
5. Publish the seven files at `yourdomain.com/.well-known/brand.md`

Free. No signup. No Tacit involvement required.

Full spec: **[hellotacit.ai/docs](https://hellotacit.ai/docs)**

## Fork this repo instead (technical path)

If you'd rather work in the shell:

```bash
# Clone this repo
git clone https://github.com/Bruiserhq/hellotacit.ai.git my-brand-bcp
cd my-brand-bcp

# The live BCP files for Tacit itself are in .well-known/
ls .well-known/
#   brand.md               <- root, always loaded
#   brand/voice.md         <- tone, prefer/avoid
#   brand/values.md        <- priority-ordered values
#   brand/boundaries.md    <- hard/soft no's, IAB/GARM
#   brand/claims.md        <- approved claims + evidence
#   brand/representation.md <- for consumer agents
#   brand/README.md        <- human overview

# Edit each file for your brand
# (See /docs for field-by-field reference)

# Deploy to any static host:
# Cloudflare Pages, Vercel, Netlify, GitHub Pages, your CDN

# Verify it's live
curl https://yourdomain.com/.well-known/brand.md
```

## What is BCP?

Brand Context Protocol is an open standard for publishing brand identity in a form every AI agent can read and act on.

- **Hierarchical markdown** at `yourdomain.com/.well-known/brand.md` (the IETF-registered path per [RFC 8615](https://www.rfc-editor.org/rfc/rfc8615.html))
- **Structurally analogous** to [AGENTS.md](https://github.com/Bruiserhq/hellotacit.ai) and the [Model Context Protocol](https://modelcontextprotocol.io)
- **Three consumption surfaces**: inside your brand (your own agents), across your vendor stack (platforms like Canva, Zefr, Meta), and beyond your brand (ChatGPT, Claude, Perplexity, Gemini describing you)
- **Open standard**: the spec is CC BY 4.0. Reference code is MIT. No lock-in.

The thesis: in 12-36 months, most marketing teams will be staffed with more agents than humans. BCP gives brands a machine-readable home for the tested knowledge that lives in senior marketers' heads.

Full thesis: **[hellotacit.ai](https://hellotacit.ai)**

## Repo contents

```
.
├── index.html                    # hellotacit.ai home
├── start/index.html              # /start — the adoption page
├── docs/index.html               # /docs — the full spec
├── encode/index.html             # /encode — commercial services
├── .well-known/
│   ├── brand.md                  # Tacit's own BCP root
│   └── brand/
│       ├── voice.md
│       ├── values.md
│       ├── boundaries.md
│       ├── claims.md
│       ├── representation.md
│       └── README.md
├── robots.txt
├── ai.txt
├── llms.txt
├── sitemap.xml
├── _headers                      # Cloudflare Pages config
└── _routes.json                  # Cloudflare routing
```

## Contributing to the spec

BCP v0.1 is new. We maintain the spec in public. File issues, open PRs, propose field additions. Every v0.x commit is a design decision with a named author.

- [Open an issue](https://github.com/Bruiserhq/hellotacit.ai/issues)
- [Read the changelog](https://github.com/Bruiserhq/hellotacit.ai/commits/main)

## License

- **Spec** (the BCP v0.1 specification): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code** (reference templates, site source, validators): [MIT](https://opensource.org/licenses/MIT)

## Contact

tacit@hellotacit.ai
