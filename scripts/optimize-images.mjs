#!/usr/bin/env node
/**
 * Generates responsive WebP variants and recompresses hero/gallery assets.
 * Run: node scripts/optimize-images.mjs
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicImages = path.join(root, 'public', 'images');
const galleryDir = path.join(publicImages, 'gallery');

const GALLERY_WIDTHS = [520, 768, 1040];
const HERO_WIDTHS = [640, 1280, 1920];
const GALLERY_QUALITY = 78;
const HERO_QUALITY = 72;

function cwebp(input, output, { width, quality }) {
  const resize = width ? `-resize ${width} 0 ` : '';
  fs.mkdirSync(path.dirname(output), { recursive: true });
  execSync(`cwebp -quiet -q ${quality} ${resize}"${input}" -o "${output}"`, {
    stdio: 'inherit',
  });
}

function stemFromWebp(filePath) {
  return filePath.replace(/\.webp$/, '');
}

function writeVariants(sourceWebp, widths, quality) {
  const stem = stemFromWebp(sourceWebp);
  for (const w of widths) {
    const out = `${stem}-${w}w.webp`;
    cwebp(sourceWebp, out, { width: w, quality });
  }
  cwebp(sourceWebp, sourceWebp, { quality });
}

const galleryFiles = fs
  .readdirSync(galleryDir)
  .filter((name) => name.endsWith('.webp') && !/-\d+w\.webp$/.test(name));

for (const name of galleryFiles) {
  const source = path.join(galleryDir, name);
  console.log(`Gallery: ${name}`);
  writeVariants(source, GALLERY_WIDTHS, GALLERY_QUALITY);
}

const heroPoster = path.join(publicImages, 'hero-poster.webp');
console.log('Hero poster');
writeVariants(heroPoster, HERO_WIDTHS, HERO_QUALITY);

console.log('Done.');
