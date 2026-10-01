import type { APIRoute } from 'astro';
import { backendEntries } from '../blog/backend';
import { adtechEntries } from '../blog/adtech';
import { growthChapters } from '../blog/growth';
import { publishedAt, sectionUpdatedAt, type BlogSection } from '../blog/dates';
import { SITE } from '../lib/seo';

interface Url {
  path: string;
  lastmod?: string;
  alt?: { ru: string; en: string };
}

const latest = sectionUpdatedAt('growth');
const urls: Url[] = [
  { path: '/', alt: { ru: '/', en: '/en/' } },
  { path: '/en/', alt: { ru: '/', en: '/en/' } },
  { path: '/about', alt: { ru: '/about', en: '/en/about' } },
  { path: '/en/about', alt: { ru: '/about', en: '/en/about' } },
  { path: '/blog', lastmod: latest },
];

const sections: [BlogSection, { slug: string }[]][] = [
  ['growth', growthChapters],
  ['backend', backendEntries],
  ['adtech', adtechEntries],
];
for (const [section, entries] of sections) {
  urls.push({ path: `/blog/${section}`, lastmod: sectionUpdatedAt(section) });
  entries.forEach((e, i) => urls.push({ path: `/blog/${section}/${e.slug}`, lastmod: publishedAt(section, i) }));
}

export const GET: APIRoute = () => {
  const body = urls
    .map((u) => {
      const alt = u.alt
        ? ['ru', 'en', 'x-default']
            .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${l === 'en' ? u.alt!.en : u.alt!.ru}"/>`)
            .join('\n') + '\n'
        : '';
      return `  <url>\n    <loc>${SITE}${u.path}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ''}${alt}  </url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
