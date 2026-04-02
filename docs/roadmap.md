# Elamrit Website — Project Roadmap (from Sitemap v1.0, March 2026)

Source: `Elamrit-Website-Sitemap.pdf` (Version 1.0 — March 2026)

Legend:
- [x] Complete (route exists in `src/pages/`)
- [~] Partial (content exists as a section/component, but the dedicated route does not exist yet)
- [ ] Not started (route missing)

---

## Current state (repo reality check)

- **Implemented routes**:
  - [x] `/` (`src/pages/index.astro`)
  - [x] `/about` (`src/pages/about.astro`)
- **Homepage sections already present (but not standalone pages yet)**:
  - [~] Gallery section (homepage component exists)
  - [~] Testimonials section (homepage component exists)
  - [~] Food Junction teaser section (homepage component exists)

---

## Roadmap by sitemap section

### 01) Core pages

- [x] `/` — Homepage
- [x] `/about` — About Us
- [ ] `/about/our-story`
- [ ] `/about/our-philosophy`
- [ ] `/about/our-team`
- [ ] `/about/awards`

- [ ] `/gallery` — Gallery Overview
- [ ] `/gallery/events`
- [ ] `/gallery/food`
- [ ] `/gallery/setup-decor`

- [ ] `/testimonials` — Testimonials Index

Notes:
- The `/about` route already contains story/philosophy/team/locations as sections; the sitemap asks for separate dedicated routes too.

### 02) Wedding catering

- [ ] `/services/wedding-catering`
- [ ] `/services/wedding-catering/hindu-weddings`
- [ ] `/services/wedding-catering/pre-wedding-events`
- [ ] `/services/wedding-catering/destination-weddings`
- [ ] `/services/wedding-catering/multicultural-weddings`

### 03) Corporate & social

- [ ] `/services/corporate-catering`
- [ ] `/services/corporate-catering/events-conferences`
- [ ] `/services/corporate-catering/product-launches`
- [ ] `/services/corporate-catering/business-dining`
- [ ] `/services/corporate-catering/gala-dinners`

- [ ] `/services/social-events`
- [ ] `/services/social-events/birthday-catering`
- [ ] `/services/social-events/anniversary-catering`
- [ ] `/services/social-events/cocktail-parties`
- [ ] `/services/social-events/house-warming-puja`

### 04) Specialty services

- [ ] `/services/private-dining`
- [ ] `/services/live-cooking-stations`
- [ ] `/services/outdoor-catering`
- [ ] `/services/pan-india-catering`

### 05) Menu pages

- [ ] `/menus` — Menu Overview
- [ ] `/menus/indian-cuisine`
- [ ] `/menus/international-cuisine`
- [ ] `/menus/fusion-cuisine`
- [ ] `/menus/desserts`
- [ ] `/menus/beverages`
- [ ] `/menus/custom-menu` — Custom Menu Builder

### 06) Location pages (Local SEO) — `/catering-in/*`

- [ ] `/catering-in/pune` — HQ
- [ ] `/catering-in/pune/wedding-catering`
- [ ] `/catering-in/mumbai`
- [ ] `/catering-in/delhi-ncr`
- [ ] `/catering-in/bangalore`
- [ ] `/catering-in/hyderabad`
- [ ] `/catering-in/pan-india`
- [ ] `/catering-in/singapore` — Coming soon / waitlist

### 07) Food Junction (sub-brand) — `/food-junction/*`

- [ ] `/food-junction`
- [ ] `/food-junction/services`
- [ ] `/food-junction/menus`
- [ ] `/food-junction/testimonials`
- [ ] `/food-junction/get-a-quote`

### 08) The Journal (blog) — `/journal/*`

- [ ] `/journal`
- [ ] `/journal/wedding-catering`
- [ ] `/journal/event-planning`
- [ ] `/journal/culinary-trends`
- [ ] `/journal/behind-the-feast`

### 09) Conversion + utility pages

- [ ] `/contact`
- [ ] `/contact/get-a-quote`
- [ ] `/privacy-policy`
- [ ] `/terms`
- [ ] `/sitemap.xml`

---

## Suggested implementation phases (practical order)

### Phase A — Conversion baseline (high ROI, low dependency)
- [ ] Create `/contact` + `/contact/get-a-quote`
- [ ] Create `/privacy-policy` + `/terms`
- [ ] Create `/testimonials` (can re-use homepage testimonials content)

### Phase B — Services core (primary SEO landing pages)
- [ ] Create `/services/wedding-catering` + children
- [ ] Create `/services/corporate-catering` + children
- [ ] Create `/services/social-events` + children
- [ ] Create specialty service pages

### Phase C — Menus (supports services + quote funnel)
- [ ] Create `/menus` + category pages
- [ ] Create `/menus/custom-menu` (even if MVP is a guided form)

### Phase D — Local SEO (locations)
- [ ] Create `/catering-in/*` pages (start with Pune HQ + Pan-India)
- [ ] Create Singapore “Coming soon” waitlist page

### Phase E — Brand expansion (Food Junction)
- [ ] Create `/food-junction/*` section

### Phase F — Content engine (Journal)
- [ ] Create `/journal/*` taxonomy pages (initially as category landing pages)

---

## Completion checklist (quick view)

- **Routes complete**: 2 / 40+ (only `/` and `/about` exist as routes today)
- **Core sections present (partial)**: Gallery, Testimonials, Food Junction teaser (homepage sections exist, not standalone routes)

