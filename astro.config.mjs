// @ts-check
import { defineConfig } from 'astro/config';

// Static site (SSG). Deployed on Vercel via the zero-config Astro preset:
// build command `astro build`, output directory `dist/`.
// https://docs.astro.build/en/guides/deploy/vercel/
export default defineConfig({
  site: 'https://www.yezub.com',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: false, // ru -> /, en -> /en
    },
  },
});
