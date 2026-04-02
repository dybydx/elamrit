import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);

export type GalleryFilterId = 'moments' | 'weddings' | 'corporate' | 'celebrations' | 'menus';

export interface GalleryItem {
  src: string;
  alt: string;
  categories: GalleryFilterId[];
}

/** Filter chips (excluding "all"), in display order */
export const galleryFilterOptions: { id: GalleryFilterId; label: string }[] = [
  { id: 'moments', label: 'Signature' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'menus', label: 'Menus & cuisine' },
];

function humanAlt(filename: string): string {
  const base = path.basename(filename, path.extname(filename));
  return base
    .replace(/^elamrit[-_]/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoriesForRelPath(relFromImages: string): GalleryFilterId[] {
  const norm = relFromImages.replace(/\\/g, '/').toLowerCase();
  const cats = new Set<GalleryFilterId>();

  if (norm.startsWith('about/')) return [];

  if (norm.startsWith('gallery/')) cats.add('moments');
  if (norm.startsWith('menus/')) cats.add('menus');

  if (
    /wedding|pre-wedding|hindu-wedding|multicultural-wedding|wedding-destination|wedding-feast|wedding-gallery/.test(
      norm,
    )
  ) {
    cats.add('weddings');
  }
  if (
    /corporate|business-dining|events-conference|gala-dinner|product-launch|corporate-event|corporate-gallery/.test(
      norm,
    )
  ) {
    cats.add('corporate');
  }
  if (
    /social-gallery|birthday|anniversary|cocktail-party|house-warming|private-dining/.test(norm)
  ) {
    cats.add('celebrations');
  }

  if (cats.size === 0 && norm.startsWith('services/')) cats.add('moments');
  if (cats.size === 0) cats.add('moments');

  return [...cats];
}

function collectImageFiles(absDir: string, out: string[]): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(absDir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const abs = path.join(absDir, e.name);
    if (e.isDirectory()) {
      collectImageFiles(abs, out);
    } else if (IMAGE_EXT.has(path.extname(e.name).toLowerCase())) {
      out.push(abs);
    }
  }
}

/**
 * All raster images under `public/images`, excluding the about section.
 * Categories are inferred from path and filename so new assets are picked up automatically.
 */
export function getGalleryItems(): GalleryItem[] {
  const publicImages = path.join(process.cwd(), 'public', 'images');
  const absFiles: string[] = [];
  collectImageFiles(publicImages, absFiles);

  const publicRoot = path.join(process.cwd(), 'public');
  const items: GalleryItem[] = [];

  for (const abs of absFiles) {
    const relPublic = path.relative(publicRoot, abs).replace(/\\/g, '/');
    if (!relPublic.toLowerCase().startsWith('images/')) continue;

    const relFromImages = relPublic.slice('images/'.length);
    const categories = categoriesForRelPath(relFromImages);
    if (categories.length === 0) continue;

    items.push({
      src: `/${relPublic}`,
      alt: humanAlt(relFromImages),
      categories,
    });
  }

  items.sort((a, b) => a.src.localeCompare(b.src));
  return items;
}
