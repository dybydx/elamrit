# Image assets — generation checklist

**Brand context:** Elamrit Luxe Feast — premium Pan-India catering (Pune HQ). Visual tone: editorial luxury, warm **cream / dark red / blush**, composed service, Indian high-end occasions (weddings, corporate galas, private dining).

**Technical:** Raster assets live under `public/` and are referenced from the site root (e.g. `/images/about/...`). Optimise PNGs for web after export.

**Split page heroes:** Internal routes with a right-hand hero use `PageHero` / `ChildServiceHero` with `imageClass="ph-image"` and `heroImageSrc={…}` pointing at a site-root path. Defaults and reuse live in [`src/lib/hero-images.ts`](../src/lib/hero-images.ts); CSS uses `--ph-hero-image` (see `app.css` `.ph-image::before`). Center-only heroes (e.g. multicultural weddings) have no photo pane.

**Progress:** all checklist rasters below exist under `public/images/` (2026-04-02). Optimise PNG weight for production when convenient.

---

## Generation order

| # | Path | Status |
|---|------|--------|
| 1–3 | `/images/about/elamrit-about-*.png` (3 files) | done |
| 4–8 | `/images/gallery/elamrit-gallery-*.png` (5 files) | done |
| 9–14 | `/images/menus/menu-card-*.png` (6 files) | done |
| 15–32 | `/images/menus/gallery-*.png` (18 files) | done |
| 33–41 | `/images/services/*-gallery-*.png` (9 files) | done |
| 42–77 | `/images/services/child/*.png` (36 files, 12 child routes × 3 tiles) | done |

**Child service galleries:** Tile data lives in [`src/lib/service-child-galleries.ts`](../src/lib/service-child-galleries.ts); each child route under wedding / corporate / social catering imports `MenuGallery` with its own three images (except the three category index pages, which already used hub galleries).

**Not in this raster list:** `/videos/hero-reel.mp4` (video). Team section: prefer real founder photography over stock/AI faces.

---

## `/images/about/` (global CSS — heroes & story stacks)

| Filename | Brief |
|----------|--------|
| `elamrit-about-hero.png` | Wide moody hero: premium Indian wedding or gala banquet — long table or buffet, warm candlelight, cream linen, maroon/dark wood hints. Must read clearly when desaturated and under dark-red overlay. |
| `elamrit-about-story-main.png` | Vertical feel (3:4): composed Indian fine-dining tablescape — thali progression or multi-course plating on cream ceramic, subtle floral or brass. |
| `elamrit-about-story-float.png` | Square inset detail: chef hands finishing a dish, live-station moment, or stacked brass serveware — pairs with main without duplicating frame. |

---

## `/images/gallery/` (home)

| Filename | Brief |
|----------|--------|
| `elamrit-gallery-wedding-feast.png` | Grand Indian wedding reception — buffet or family service, rich but restrained decor, formal Indian dress at distance. |
| `elamrit-gallery-artisan-plating.png` | Close editorial plate — Indian regional or fusion fine course, shallow depth of field. |
| `elamrit-gallery-live-station.png` | Live station — tandoor/dosa/chaat counter, uniformed staff, controlled steam, premium staging. |
| `elamrit-gallery-corporate-event.png` | India corporate gala — rounds, stage lighting, suits and sarees/formals. |
| `elamrit-gallery-private-dining.png` | Intimate private dining — small table, candlelight, bespoke service. |

---

## `/images/menus/` — hub cards

| Filename | Brief |
|----------|--------|
| `menu-card-indian.png` | Anchor Indian spread — thali, biryani, or regional hero; warm appetite lighting. |
| `menu-card-international.png` | Plated international fine course — clean global, warm grade. |
| `menu-card-fusion.png` | One plate: Indian flavour + global technique. |
| `menu-card-desserts.png` | Indian sweets or Indo-fusion dessert — jewel tones on cream. |
| `menu-card-beverages.png` | Indian beverage bar — sherbet, mocktail, or artisanal service. |
| `menu-card-custom.png` | Bespoke cue — tasting spoons, menu sketch, or chef table (no legible private text). |

---

## `/images/menus/` — galleries (3 per category)

**Indian:** `gallery-indian-1.png` … `3` — regional veg spread; tandoor/grill highlight; bread + rice or festive course.

**International:** `gallery-intl-1.png` … `3` — three distinct international plated moments.

**Fusion:** `gallery-fusion-1.png` … `3` — amuse; main cross-over; bold premium plate.

**Desserts:** `gallery-desserts-1.png` … `3` — mithai/fusion; chocolate-berry; mini spread.

**Beverages:** `gallery-beverages-1.png` … `3` — welcome drink; mocktail; tea/coffee or after-dinner.

**Custom:** `gallery-custom-1.png` … `3` — bespoke menu + dish; chef plating; themed table.

---

## `/images/services/` — hub galleries (3 each)

**Wedding:** `wedding-gallery-1.png` … `3` — ceremony-adjacent catering; reception service; emotional detail.

**Corporate:** `corporate-gallery-1.png` … `3` — conference lunch; launch canapés; gala dinner.

**Social:** `social-gallery-1.png` … `3` — milestone; cocktail; anniversary-style.

## `/images/services/child/` — child route galleries (3 tiles each)

Filenames map to service pages: e.g. `hindu-wedding-1.png` … `3` → Hindu Weddings; `events-conference-1.png` … `3` → Events & Conferences; `house-warming-1.png` … `3` → House-warming & Puja. See `service-child-galleries.ts` for labels, alt text, and captions.

---

## Consistency checklist

- Indian luxury event or kitchen reality (venues, attire, food cues).
- Harmonise with site palette; avoid cold blue-grey stock look.
- No watermarks; no legible fake brand text.
- Safe for large hero and retina tiles.
