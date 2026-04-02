import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elamrit.com',
  trailingSlash: 'never',
  redirects: {
    '/catering-in/delhi-ncr': '/catering-in/delhi',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
