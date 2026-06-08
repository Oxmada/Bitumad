# Bitumad — Design System

**Bitumad** is a bitumen supplier serving the road-construction sector in **Madagascar**. Its
flagship product is **penetration bitumen 60/70**, certified to international **ASTM** standards,
sold to public institutions, civil-engineering (BTP) firms, and private builders for road
construction and maintenance. Brand promise (logo tagline): **« Bitume pur, futur sûr »**
("Pure bitumen, sure future"). Primary headline: *Des routes solides commencent ici* — "Solid
roads start here."

The product surface is a **French-language marketing website** (Next.js). The visual identity is
a dark, industrial, premium "bitumen" aesthetic — near-black asphalt surfaces, a single confident
green accent, warm off-white type, and engineering-grade data tables. It should feel like
infrastructure: solid, precise, certified.

## Sources
- **Codebase:** local Next.js app `bitumad/` (App Router). Key files:
  - `app/globals.css`, `app/page.css`, `components/Navbar.css` — the real, current design language (extracted here).
  - `app/page.tsx` — homepage (hero, about, spec sheet, ordering process, quote form).
  - `components/Navbar.tsx`, `components/Footer.tsx` — chrome.
  - `public/` — logos + hero/route imagery (copied into `assets/`).
- **Note / deprecated:** `components/hero.css` + `components/Hero.tsx` contain a stale template
  leftover (blue `#223553`, EB Garamond, placeholder text "Thadeus Externalia Juris"). This is
  **not** the Bitumad brand and is intentionally excluded. The canonical system is the dark
  bitumen aesthetic in `globals.css` / `page.css`.

---

## CONTENT FUNDAMENTALS

**Language.** All copy is **French** (`lang="fr"`). Accents and special characters are used
correctly (é, à, °C, ≥, —).

**Voice.** Confident, technical, reassuring. Bitumad is a trustworthy industrial partner, not a
hype startup. Copy leans on competence and certification rather than emotion.

**Address.** Speaks to the customer as **« vous »** (formal you). Refers to itself as **« nous »**
/ "Bitumad". Example: *"Notre équipe analyse votre demande et prépare une proposition claire."*

**Casing.** Two registers:
- **Headlines** are SET IN ALL CAPS via Bebas Neue (e.g. `DES ROUTES SOLIDES COMMENCENT ICI`,
  `FICHE TECHNIQUE BITUME 60/70`). The caps come from the typeface/treatment, not the source string necessarily.
- **Eyebrows & data labels** are uppercase mono with wide tracking (`À PROPOS`, `ÉTAPE 01`, `MÉTHODE`).
- **Body** is sentence case.

**Eyebrow pattern.** Most sections open with a small green mono eyebrow preceded by a short rule:
`— À propos`, `— Notre bitume`, `— Demande de devis`. It names the section in 1–3 words.

**Numerals & specs.** Technical values are first-class content. Penetration grade **60/70**,
temperatures in **°C**, ASTM method codes (`ASTM D5`, `ASTM D36`), tonnage ranges
("5 – 20 tonnes"). Min values are framed positively (green), max/limit values in terracotta.

**Tone examples.**
- Promise: *"Notre équipe vous répond sous 24h avec une proposition adaptée à votre chantier."*
- Reassurance: *"Vos données sont utilisées uniquement pour traiter votre demande. Aucune divulgation à des tiers."*
- Ticker (caps, declarative): `DURABILITÉ ÉPROUVÉE · PERFORMANCE OPTIMALE · QUALITÉ CERTIFIÉE ASTM`.

**No emoji.** Ever. Icons are line icons (see Iconography). Punctuation uses real em-dashes (—)
and middots (·) as separators.

---

## VISUAL FOUNDATIONS

**Overall feel.** Dark, industrial, premium. Think a spec sheet crossed with a construction-grade
landing page. Depth comes from *value steps* (black → dark → dark2 → dark3) and **hairlines**, not
from drop shadows or gradients.

**Color.** See `tokens/colors.css`.
- Background is warm near-black `--black #0c0c0b` (the asphalt). Sections alternate `--black` and
  `--dark #161614` for rhythm, separated by 0.5px hairlines.
- One accent: **green `#1D9E75`** → light `#25c490` on hover. Used for CTAs, links, eyebrows, icon
  wells, focus rings. Buttons put **dark text on green** (`--text-on-accent`).
- Text is warm off-white `--white #f5f2eb` (never pure white), with `--muted` (45% white) for
  supporting copy and `--faint` (18% white) for borders.
- A single reserved **terracotta `#f0906a`** appears *only* on data "max/limit" badges — never decoratively.
- Madagascar flag red/green appear **only inside the logo mark**.

**Type.** See `tokens/typography.css`. Bebas Neue (display caps) / Instrument Sans (body/UI) /
JetBrains Mono (labels/data). Hero headline `clamp(64px, 9vw, 120px)` at line-height 0.95.
The accented word in a headline is colored green (`.hero-title em { color: var(--green) }`).

**Layout.** Generous: sections are `120px 80px` on desktop, dropping to `60px 24px` on mobile.
Max content width ~1280px. Two-column grids (about, devis) collapse to one on tablet/mobile.

**Tiled "grout" surfaces.** Card clusters (features 2×2, process 3×1, promises) are laid out with a
**2px gap** on a dark field so they read as cut tiles. Only the *outer* corners of the cluster are
rounded (`12px`); interior corners stay square. This is a signature pattern.

**Cards.** Flat `--dark2` fill, no border, no shadow. Hover lifts the value to `--dark3`. Radius
12px on clusters, 14px on standalone feature panels/forms.

**Borders.** Hairlines everywhere: `0.5px solid var(--faint)`. Accent hairlines use
`var(--green-border)`. Section tops carry a `0.5px` top border.

**Backgrounds & texture.**
- Hero: full-bleed darkened photo (`brightness(0.55) saturate(0.8)`) under a vertical black
  gradient overlay, plus a faint **engineering grid** (`80px` lines, radial-masked to one side).
- Subtle Ken-Burns: hero photo animates `scale(1.04)→scale(1)` over 8s on load.
- A muted looping **video strip** (object-fit cover, opacity 0.6) with edge-fade gradients.

**Buttons.**
- *Primary:* solid green, dark text, `8px` radius, `14px 28px`, weight 600, trailing arrow icon.
  Hover → `--green-light` + `translateY(-2px)`.
- *Ghost:* transparent, muted text, hairline border. Hover → white text + brighter border.

**Forms.** Inputs are `--dark3` fill, hairline border, `8px` radius. Focus → green-border + fill
darkens to `--dark2` (no glow). Labels are tiny uppercase mono. Custom radio cards (green dot,
tinted-green selected state) and a custom select caret. Form panels have a green→transparent 2px
top accent line.

**Data tables.** The spec sheet is core IP: mono uppercase headers, hairline row separators, warm
row-hover wash (`--sand-dim`), method/unit columns in muted mono, and value **badges**
(green = min, terracotta = max, faint dash = N/A).

**Motion.** Restrained and functional. Scroll-reveal: `opacity 0 + translateY(24px)` → settle over
0.7s with staggered `0.1s` delays. Ticker scrolls horizontally (28s linear loop). Hover
transitions 0.15–0.2s. Easing `cubic-bezier(0.4,0,0.2,1)`. No bounce, no parallax soup.

**Radii.** 4 (badges) · 8 (buttons/inputs) · 10 (small panels) · 12 (card clusters) · 14 (feature panels/forms).

---

## ICONOGRAPHY

- **System: Lucide** (`lucide-react` in the codebase; inline Lucide-style SVGs in markup). Stroke
  icons, `1.8–2` stroke width, round caps/joins, 24×24 viewBox, currentColor.
- Icons usually sit in a **tinted "well"**: a rounded square (`7–8px`) filled `--green-dim` with a
  `--green-border` hairline, icon stroked in `--green`. Sizes 28–40px wells.
- Use Lucide from CDN in prototypes: `https://unpkg.com/lucide@latest` or inline the SVG paths.
  Common icons in use: `shield`, `activity`, `alert-triangle`, `award`, `clock`, `map-pin`,
  `phone`, `arrow-right`, `menu`, `x`.
- **No emoji. No filled/duotone icons.** Decorative arrows use thin Lucide chevrons/arrows only.

---

## INDEX / MANIFEST

- **`styles.css`** — root entry (import this). `@import`s the four token files.
- **`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- **`assets/`** — `bitumad-logo-circle.webp` (badge/stamp lockup), `bitumad-logo-simple.webp`
  (horizontal wordmark, light — for dark backgrounds), `bitumad-hero-route.jpg` (hero/route photo).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.
- **`components/`** — reusable React primitives:
  - `buttons/` — `Button` (primary / ghost / submit, optional icon).
  - `labels/` — `Eyebrow`, `SectionTitle`, `Badge` (min / max / neutral data badges).
  - `cards/` — `FeatureCard`, `ProcessStep` (tiled-grout surfaces).
  - `forms/` — `Field` (input / textarea / select), `RadioCard`.
  - `marketing/` — `Ticker` (scrolling caps marquee).
- **`ui_kits/website/`** — high-fidelity interactive recreation of the Bitumad marketing site.
- **`SKILL.md`** — Agent-Skill manifest for downloading/using this system in Claude Code.
