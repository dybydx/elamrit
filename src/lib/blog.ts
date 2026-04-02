import type { CollectionEntry } from 'astro:content';
import { wedding } from '@/lib/hero-images';

export const BLOG_PAGE_SIZE = 10;

export const blogHubHero = wedding;

/** Newest first */
export function sortBlogEntries(entries: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...entries].sort(
    (a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime(),
  );
}

export function totalBlogPages(entryCount: number): number {
  return Math.max(1, Math.ceil(entryCount / BLOG_PAGE_SIZE));
}

/** 1-based page */
export function sliceBlogPage(
  sorted: CollectionEntry<'blog'>[],
  page: number,
  pageSize: number = BLOG_PAGE_SIZE,
): CollectionEntry<'blog'>[] {
  const start = (page - 1) * pageSize;
  return sorted.slice(start, start + pageSize);
}

/** e.g. 18 March 2026 */
export function formatBlogDate(isoDate: string): string {
  const d = new Date(isoDate + 'T12:00:00');
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
