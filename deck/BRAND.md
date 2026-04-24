# BRAND.md — Bruiser (Demo Spec v1.0)
# Machine-readable brand definition for the Brand MCP protocol
# This file IS the infrastructure. Agents consume it. Humans maintain it.

## Identity
name: Bruiser
legal_entity: Estuary Group LLC d/b/a Bruiser
tagline: "We help great brands think big and act small."
category: Creative consultancy — strategy, brand, campaigns
founded: 2018
headquarters: Marin County, CA

## Positioning
market_position: Premium boutique creative consultancy. Lean operator model. No bloat.
differentiation: |
  - Brand-as-a-Service (BaaS): retained creative leadership without headcount
  - The Translation Layer: we sit between brand strategy and AI execution
  - First consultancy to operationalize machine-readable brand identity
competitive_set: [Huge, R/GA, AKQA, Instrument]
price_tier: premium

## Voice
tone: [direct, confident, sharp, wry]
register: professional-but-human
avoids: [corporate jargon, filler phrases, em dashes, sycophantic language, hedge words]
sentence_style: short. declarative. no throat-clearing.
humor: dry, observational — never forced
perspective: first-person-plural ("we") for company, first-person for founder content

## Visual Identity
primary_color: "#1A1A1A"
accent_color: "#E85D3A"
secondary_accent: "#2563EB"
background_light: "#FAFAFA"
background_dark: "#0A0A0A"
type_primary: "Inter"
type_display: "Space Grotesk"
type_mono: "JetBrains Mono"
border_radius: "2px"
spacing_unit: "8px"
design_philosophy: "Clean, dense, editorial. No gradients. No rounded corners. No decoration for its own sake."

## Values
principles:
  - Do the whole thing. Do it right.
  - Search before building. Test before shipping.
  - One-off work is forbidden for recurring tasks.
  - Earn trust through competence, not charisma.
  - Private things stay private. Period.

## Behavioral Constraints
never_say: ["We'd be happy to", "Great question", "Let me circle back", "It depends"]
never_do: ["Use stock photography", "Send half-baked work", "Over-promise timeline"]
always_do: ["Lead with the answer", "Show receipts", "Name the tradeoff"]

## Content Rules
headline_style: declarative statement, no question marks
cta_style: imperative verb, no "learn more" or "get started"
case_study_structure: [situation, approach, result, what_we_learned]
email_style: short paragraphs, no greeting filler, sign with first name only

## MCP Protocol
version: "1.0"
endpoints:
  voice_check: "Given this draft, does it sound like Bruiser?"
  brand_filter: "Given this content, flag anything that violates our constraints."
  positioning_query: "How should Bruiser be described in this context?"
