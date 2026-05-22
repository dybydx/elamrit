/** Site-root path with `.webp` when a matching `.png` exists under `/images/`. */
export function preferWebp(path: string): string {
  if (path.endsWith('.png')) return path.replace(/\.png$/, '.webp');
  return path;
}

/** CSS `background-image` value: WebP first, PNG fallback. */
export function cssBackgroundImage(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!normalized.endsWith('.png')) {
    return `url('${normalized}')`;
  }
  const webp = preferWebp(normalized);
  return `image-set(url('${webp}') type('image/webp'), url('${normalized}') type('image/png'))`;
}
