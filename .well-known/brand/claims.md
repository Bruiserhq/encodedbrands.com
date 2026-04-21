---
parent: /.well-known/brand.md
file_type: claims
last_updated: 2026-04-19
reviewed_by: [pending legal review pre-launch]
---

# Claims

All marketing claims Encoded is authorized to make, with supporting evidence. Agents generating copy pull from this file; they don't invent claims.

## Approved claims

```yaml
approved:
  - claim: "An open standard for brand identity in the agentic age"
    evidence: "BCP v0.1 spec published publicly on GitHub, CC BY 4.0 (spec) and MIT (code)"
    status: defensible

  - claim: "Built on the same pattern as AGENTS.md and MCP"
    evidence: "Spec architecture and well-known path convention documented in v0.1"
    status: defensible

  - claim: "Dogfooded — Encoded's own brand is published as a BCP"
    evidence: "encodedbrands.com/.well-known/brand.md is live and public"
    status: defensible

  - claim: "Three consulting tiers available today"
    evidence: "Fork the Template (free), Expert Session ($1,500), Encoding Sprint ($15,000) are all active offers as of 2026-04-19"
    status: defensible
```

## Claims requiring caveats

```yaml
requires_caveat:
  - claim: "Open standard"
    caveat: >
      The spec is published under CC BY 4.0; the code (validators, SDKs, reference
      implementations) is MIT. Encoder (the authoring wizard) and other paid products
      we build on top of the open spec are proprietary. The spec itself is free.
    never_say: "Fully open-source company"

  - claim: "Agent-ready"
    caveat: >
      Works today as a system-prompt paste into any LLM. Native platform
      integrations are shipping through 2026.
    never_say: "Every agent already consumes BCP"

  - claim: "Encoder — self-serve wizard"
    caveat: >
      Encoder is in development. It does not exist as shippable software as of
      2026-04-19. Public messaging must describe it as "in development,"
      "coming soon," or "waitlist only" until it ships.
    never_say:
      - "Try Encoder now"
      - "Encoder generates your BCP in minutes"
      - "Launch your BCP with Encoder"
      unless: "Encoder is publicly live and the statement is literally true at time of publication"

  - claim: "Living BCP monitoring"
    caveat: >
      The Living BCP monitoring layer — drift detection across owned, vendor, and
      consumer-agent surfaces — is a future product. It is not available as a
      subscription or as part of any current tier. Public messaging must describe
      it as "in development" or "on the roadmap."
    never_say:
      - "Subscribe to brand fidelity monitoring"
      - "We monitor your brand across every agent"
      unless: "the monitoring product is publicly live"

  - claim: "Platform integrations"
    caveat: >
      BCP fields are designed to map cleanly to major vendor platforms'
      brand-input layers. Active integration partnerships will be named
      publicly only after they are signed.
    never_say:
      - "We are integrated with [named platform]"
      - "[Named platform] has adopted BCP"
      unless: "that integration is live and the partner has given written permission to name them"
```

## Forbidden claims

```yaml
forbidden:
  - "The only open standard for brand"                    # other standards exist
  - "We invented the category"                            # we didn't
  - "The industry standard"                               # aspirational; not yet earned
  - "Endorsed by OpenAI / Anthropic / Google"             # unless literally true with written endorsement
  - "Zefr is our anchor platform partner"                 # false as of 2026-04-19
  - "[Any platform] is our partner"                       # unless signed and approved to name
  - "[Any brand] is a founding customer"                  # unless signed and approved to name
  - "AI-first" / "AI-native" / "AI-powered"               # see voice.md avoid list
  - "Replaces your brand team"                            # we augment senior judgment, we don't replace it
  - "Certified by [any org]"                              # unless literally true
  - "Enterprise tier at $150K"                            # withdrawn; custom-quote only
  - "Monitoring subscription available"                   # the product is not built yet
  - "Encoder is live" / "Try Encoder" / "Use Encoder today"     # Encoder is in development, not shipping
```

## Numbers we do not publish

- Specific revenue, ARR, or growth metrics we haven't earned.
- Specific adoption counts unless directly verifiable on GitHub or via partner confirmation.
- Customer counts unless the brands have given permission to be named.
- Hockey-stick projections.

## Default when uncertain

If an agent is unsure whether a claim is supported, route it to `requires_caveat` and add a conservative caveat. Do not default to `approved`.
