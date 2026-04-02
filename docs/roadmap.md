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

- [x] `/testimonials` — Testimonials Index

Notes:
- The `/about` route already contains story/philosophy/team/locations as sections; the sitemap asks for separate dedicated routes too.

### 02) Wedding catering

- [x] `/services/wedding-catering`
- [x] `/services/wedding-catering/hindu-weddings`
- [x] `/services/wedding-catering/pre-wedding-events`
- [x] `/services/wedding-catering/destination-weddings`
- [x] `/services/wedding-catering/multicultural-weddings`

### 03) Corporate & social

- [x] `/services/corporate-catering`
- [x] `/services/corporate-catering/events-conferences`
- [x] `/services/corporate-catering/product-launches`
- [x] `/services/corporate-catering/business-dining`
- [x] `/services/corporate-catering/gala-dinners`

- [x] `/services/social-celebrations` (slug aligned with nav)
- [x] `/services/social-celebrations/birthday-catering`
- [x] `/services/social-celebrations/anniversary-catering`
- [x] `/services/social-celebrations/cocktail-parties`
- [x] `/services/social-celebrations/house-warming-puja`

### 04) Specialty services

- [x] `/services/private-dining`
- [x] `/services/live-stations` (nav slug)
- [ ] `/services/outdoor-catering`
- [x] `/services/pan-india-catering`
- [x] `/services/destination-weddings` (nav-level specialty page)
- [x] `/services/theme-catering`

### 05) Menu pages

- [x] `/menus` — Menu Overview
- [x] `/menus/indian-cuisine`
- [x] `/menus/international-cuisine`
- [x] `/menus/fusion-cuisine`
- [x] `/menus/desserts`
- [x] `/menus/beverages`
- [x] `/menus/custom-menu` — Custom Menu Builder

### 06) Location pages (Local SEO) — `/catering-in/*`

- [x] `/catering-in/pune` — HQ
- [x] `/catering-in/pune/wedding-catering`
- [x] `/catering-in` — Locations hub
- [x] `/catering-in/mumbai`
- [x] `/catering-in/delhi` (redirect from `/catering-in/delhi-ncr`)
- [x] `/catering-in/bangalore`
- [x] `/catering-in/hyderabad`
- [x] `/catering-in/goa`
- [x] `/catering-in/pan-india`
- [x] `/catering-in/singapore` — Coming soon / waitlist

### 07) Food Junction (sub-brand) — `/food-junction/*`

- [x] `/food-junction`
- [x] `/food-junction/services`
- [x] `/food-junction/menus`
- [x] `/food-junction/testimonials`
- [x] `/food-junction/get-a-quote`

### 08) The Journal (blog) — `/journal/*`

- [ ] `/journal`
- [ ] `/journal/wedding-catering`
- [ ] `/journal/event-planning`
- [ ] `/journal/culinary-trends`
- [ ] `/journal/behind-the-feast`

### 09) Conversion + utility pages

- [x] `/contact`
- [x] `/contact/get-a-quote`
- [x] `/privacy-policy`
- [x] `/terms`
- [ ] `/sitemap.xml`

---

## Suggested implementation phases (practical order)

### Phase A — Conversion baseline (high ROI, low dependency)
- [x] Create `/contact` + `/contact/get-a-quote`
- [x] Create `/privacy-policy` + `/terms`
- [x] Create `/testimonials` (can re-use homepage testimonials content)

### Phase B — Services core (primary SEO landing pages) ✓ COMPLETE
- [x] Create `/services/wedding-catering` + children (hindu-weddings, pre-wedding-events, destination-weddings, multicultural-weddings)
- [x] Create `/services/corporate-catering` + children (events-conferences, product-launches, business-dining, gala-dinners)
- [x] Create `/services/social-celebrations` + children (birthday-catering, anniversary-catering, cocktail-parties, house-warming-puja)
- [x] Create `/services/private-dining`
- [x] Create specialty service pages (live-stations, pan-india-catering, destination-weddings, theme-catering)

### Phase C — Menus (supports services + quote funnel) ✓ COMPLETE
- [x] Create `/menus` + category pages
- [x] Create `/menus/custom-menu` (even if MVP is a guided form)

### Phase D — Local SEO (locations) ✓ COMPLETE
- [x] Create `/catering-in/*` pages (start with Pune HQ + Pan-India)
- [x] Create Singapore “Coming soon” waitlist page

### Phase E — Brand expansion (Food Junction)
- [x] Create `/food-junction/*` section

### Phase F — Content engine (Journal)
- [ ] Create `/journal/*` taxonomy pages (initially as category landing pages)

---

## Completion checklist (quick view)

- **Routes complete**: 48+ / 50+ (`/`, `/about`, `/gallery`, `/contact`, `/contact/get-a-quote`, `/testimonials`, `/privacy-policy`, `/terms`, `/services`, all Phase B service routes, all Phase C menu routes, all Phase D location routes, `/food-junction/*`)
- **Core sections present (partial)**: Gallery, Testimonials, Food Junction teaser (homepage sections exist, not standalone routes)

