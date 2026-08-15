# yezub.com

Personal site for Yevgeny Yezub (Евгений Езуб) — mobile apps, AI automation and product growth.
Built with [Astro](https://astro.build), deployed as a static site on Vercel. Bilingual (RU / EN).

## Stack

- **Astro 5** — static output (SSG), no runtime framework.
- **Nocturne** design system — the original CSS + tokens live in `public/_ds/` and are linked as-is.
- **i18n** — RU is the default locale (served at `/`), EN is prefixed (`/en/`).

## Routes

| Page    | RU        | EN            |
| ------- | --------- | ------------- |
| Landing | `/`       | `/en/`        |
| About   | `/about`  | `/en/about`   |
| 404     | `/404`    | —             |

## Project layout

```
public/
  _ds/…            design-system CSS + tokens (from the original export)
  assets/          portrait.png
  uploads/         source images / reference content
src/
  i18n/            content dictionaries — all copy lives here
    ru.ts  en.ts   per-locale content (edit copy here)
    types.ts       shape of the content object
    index.ts       locale map + URL helpers
  layouts/Base.astro       <head>, global styles, hreflang, behaviour script
  components/
    SiteHeader.astro  nav + working RU/EN switcher
    SiteFooter.astro
    Landing.astro     the landing page, section by section
    AboutPage.astro   the about page
    ServiceCard.astro / ProjectCard.astro   repeated cards
  pages/           thin route files that assemble the components
_source/           original DesignSync export (.dc.html + support.js) — reference only, not built
```

**All text lives in `src/i18n/ru.ts` and `src/i18n/en.ts`.** The markup is written once and
rendered for both languages, so to change copy or prices you only edit those two files.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

## Deploy (Vercel)

Vercel auto-detects Astro. `vercel.json` pins the framework, enables clean URLs and adds
long-lived cache headers for `/_ds` and `/assets`. Just import the repo in Vercel — no env vars needed.

## Notes

- Interactivity (parallax, scroll-reveal, `style-hover` states, `<details>` accordions) is a small
  inline script in `Base.astro` — it replaces the original React `dc-runtime`; no external JS.
- Fonts (Inter) load from Google Fonts via the design-system stylesheet.
- **Known content gap:** the service prices differed between the original RU export
  (e.g. "от 200 $") and the EN copy source (e.g. "from $8,000"). RU was ported verbatim and EN
  uses the English copy — reconcile the numbers in `ru.ts` / `en.ts` when convenient.
