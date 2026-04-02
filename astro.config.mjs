import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elamrit.com',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/catering-in/delhi-ncr': '/catering-in/delhi',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
