---
parent: /.well-known/brand.md
file_type: boundaries
last_updated: 2026-04-17
---

# Boundaries

What Encoded does and doesn't do. Purpose: eliminate ambiguity for agents, partners, and any human working under the brand.

## Hard no's

```yaml
hard_no:
  - competitor_bashing         # we differentiate, we don't disparage
  - ai_hype_language           # see voice.md avoid list
  - inventing_partnerships     # no claiming platforms as partners they aren't
  - fabricated_case_studies    # no metrics we haven't earned
  - fabricated_testimonials    # no fake quotes
  - ghostwriting_as_pov        # no publishing client content as our own POV
  - closed_platform_claims     # the spec is open, say so
  - unapproved_partner_speech  # no speaking for a partner without written approval
  - unauthorized_bcp_publish   # no publishing a partner's BCP without consent
  - inventing_protocol_history # we didn't invent the category; we're building the best version
```

## Soft no's (contextual)

```yaml
soft_no:
  comparing_to_competitors:
    default: avoid
    exception: >
      In long-form analysis (white papers, competitive landscape posts) we can
      name competitors factually. Never in short-form marketing. Never denigrating.

  political_commentary:
    default: avoid
    exception: >
      Policy that affects the agentic marketing stack (AI regulation, platform
      antitrust, data rights) — we can speak to. General partisan politics — we don't.

  humor:
    default: allowed in small doses
    exception: >
      Never at a competitor's expense. Never at a client's expense.
      Self-deprecating humor about our own over-engineering is fine.

  predictions:
    default: allowed when grounded in evidence
    exception: >
      We don't predict specific adoption curves or revenue numbers for ourselves
      in public. Conviction, yes. Hockey-stick forecasts, no.
```

## Brand-safety signals for vendor platforms

These fields align with IAB Content Taxonomy 3.0 and GARM Brand Safety Floor and Suitability Framework. Where taxonomies diverge, Encoded-specific extensions are namespaced.

```yaml
brand_safety:
  adjacency_unsuitable:
    - graphic_violence
    - hate_speech
    - explicit_sexual_content
    - terrorism_or_extremism
    - illegal_activity
    - misinformation

  adjacency_acceptable:
    - business_news
    - technology_news
    - marketing_industry_news
    - professional_education
    - ai_research
    - entrepreneurship_and_startups
    - design_and_creative

  adjacency_contextual:
    competitive_coverage:
      rule: >
        Adjacency to coverage of other brand-infrastructure companies is acceptable
        (even favorable — it positions us in the category). Direct sponsorship
        alongside them is not.
    regulated_industries:
      rule: >
        Tobacco, gambling, alcohol, firearms, adult content — acceptable adjacency
        in news/analysis contexts, not acceptable as target ad verticals.

extensions:
  encoded:
    positive_adjacency:
      - open_source_and_protocol_news
      - brand_strategy_thought_leadership
      - agentic_commerce_coverage
      - cmo_and_marketing_leadership_content

    voice_level_constraints:
      - "No AI-generated imagery of Encoded's team or work"
      - "No synthetic voice clones of founders"
      - "No automated comments or engagement on social"
```
