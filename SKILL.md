---
name: bitumad-design
description: Use this skill to generate well-branded interfaces and assets for Bitumad (a Madagascar bitumen / road-construction supplier), for production or throwaway prototypes/mocks. Contains brand guidelines, color & type tokens, fonts, logos, and a website UI kit.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Bitumad is a French-language bitumen supplier in Madagascar. The aesthetic is a dark, industrial,
premium "bitumen" system: warm near-black surfaces, one confident green accent (`#1D9E75`), warm
off-white type, hairline borders, 2px-grout tiled cards, and engineering-grade data tables.
Type: Bebas Neue (display caps) / Instrument Sans (body) / JetBrains Mono (labels & data).

Key files:
- `styles.css` — global entry; `@import`s the token files in `tokens/`.
- `tokens/` — colors, typography, spacing, fonts.
- `assets/` — logos (`bitumad-logo-simple.webp` for dark bg, `bitumad-logo-circle.webp` stamp) + hero/route photo.
- `components/` — React primitives (Button, Eyebrow, SectionTitle, Badge, FeatureCard, ProcessStep, Field, RadioCard, Ticker).
- `ui_kits/website/` — interactive recreation of the marketing site.
- `guidelines/` — foundation specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create
static HTML that links `styles.css`. If working on production code, copy assets and follow the
rules here to design on-brand. Copy needed assets into your output — never reference this skill's
paths directly. If invoked without guidance, ask the user what they want to build, ask a few
focused questions, and act as an expert Bitumad designer outputting HTML or production code.

Copy is **French**, formal « vous », confident & technical, no emoji. Icons are Lucide (stroke).
