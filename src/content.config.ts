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

export const collections = { blog };
