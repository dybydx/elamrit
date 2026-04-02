import type { CollectionEntry } from 'astro:content';
import { corporate } from '@/lib/hero-images';

export const EVENT_PAGE_SIZE = 10;

export const eventsHubHero = corporate;

/** Newest event date first */
export function sortEventEntries(entries: CollectionEntry<'events'>[]): CollectionEntry<'events'>[] {
  return [...entries].sort(
    (a, b) => new Date(b.data.eventAt).getTime() - new Date(a.data.eventAt).getTime(),
  );
}

export function totalEventPages(entryCount: number): number {
  return Math.max(1, Math.ceil(entryCount / EVENT_PAGE_SIZE));
}

/** 1-based page */
export function sliceEventPage(
  sorted: CollectionEntry<'events'>[],
  page: number,
  pageSize: number = EVENT_PAGE_SIZE,
): CollectionEntry<'events'>[] {
  const start = (page - 1) * pageSize;
  return sorted.slice(start, start + pageSize);
}

/** e.g. 18 March 2026 */
export function formatEventDate(isoDate: string): string {
  const d = new Date(isoDate + 'T12:00:00');
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
