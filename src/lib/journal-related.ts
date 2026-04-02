import type { CollectionEntry } from 'astro:content';
import { sortBlogEntries } from '@/lib/blog';
import { sortEventEntries } from '@/lib/events';

export const RELATED_JOURNAL_LIMIT = 3;

/** Other blog posts: same tag first, then by date. Excludes `excludeId`. */
export function relatedBlogPostsExcluding(
  all: CollectionEntry<'blog'>[],
  excludeId: string,
  tag: string,
  limit: number = RELATED_JOURNAL_LIMIT,
): CollectionEntry<'blog'>[] {
  const others = all.filter((e) => e.id !== excludeId);
  const sorted = sortBlogEntries(others);
  const sameTag = sorted.filter((e) => e.data.tag === tag);
  const otherTag = sorted.filter((e) => e.data.tag !== tag);
  return [...sameTag, ...otherTag].slice(0, limit);
}

/** Blog posts for a tag (newest in each group). Used from event pages. */
export function relatedBlogPostsByTag(
  all: CollectionEntry<'blog'>[],
  tag: string,
  limit: number = RELATED_JOURNAL_LIMIT,
): CollectionEntry<'blog'>[] {
  const sorted = sortBlogEntries(all);
  const sameTag = sorted.filter((e) => e.data.tag === tag);
  const otherTag = sorted.filter((e) => e.data.tag !== tag);
  return [...sameTag, ...otherTag].slice(0, limit);
}

/** Other events: same tag first, then by event date. Excludes `excludeId`. */
export function relatedEventsExcluding(
  all: CollectionEntry<'events'>[],
  excludeId: string,
  tag: string,
  limit: number = RELATED_JOURNAL_LIMIT,
): CollectionEntry<'events'>[] {
  const others = all.filter((e) => e.id !== excludeId);
  const sorted = sortEventEntries(others);
  const sameTag = sorted.filter((e) => e.data.tag === tag);
  const otherTag = sorted.filter((e) => e.data.tag !== tag);
  return [...sameTag, ...otherTag].slice(0, limit);
}

/** Events for a tag. Used from blog pages. */
export function relatedEventsByTag(
  all: CollectionEntry<'events'>[],
  tag: string,
  limit: number = RELATED_JOURNAL_LIMIT,
): CollectionEntry<'events'>[] {
  const sorted = sortEventEntries(all);
  const sameTag = sorted.filter((e) => e.data.tag === tag);
  const otherTag = sorted.filter((e) => e.data.tag !== tag);
  return [...sameTag, ...otherTag].slice(0, limit);
}
