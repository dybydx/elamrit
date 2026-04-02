import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Short label for breadcrumbs (no truncation) */
    breadcrumbTitle: z.string(),
    publishedAt: z.string(),
    excerpt: z.string(),
    tag: z.string(),
    heroImageSrc: z.string(),
    quote: z.string(),
    quoteAttribution: z.string(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    breadcrumbTitle: z.string(),
    /** When the event takes place (ISO date YYYY-MM-DD) */
    eventAt: z.string(),
    excerpt: z.string(),
    tag: z.string(),
    heroImageSrc: z.string(),
    quote: z.string(),
    quoteAttribution: z.string(),
    /** City or venue line for cards and hero */
    location: z.string().optional(),
  }),
});

export const collections = { blog, events };
