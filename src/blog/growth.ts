/**
 * Руководство по запуску и росту приложения — 26 глав.
 * Source: app-growth-guide/guide.md, split into src/blog/growth/NN-slug.md
 * (frontmatter: n, title, lead, optional image + caption → src/assets/blog/growth/<image>.webp).
 */
import type { MarkdownInstance } from 'astro';

export interface GrowthFrontmatter {
  n: number;
  title: string;
  lead: string;
  image?: string;
  caption?: string;
}

const files = import.meta.glob<MarkdownInstance<GrowthFrontmatter>>('./growth/[0-9]*.md', { eager: true });

export const growthChapters = Object.entries(files)
  .map(([path, mod]) => ({
    slug: path.replace(/^.*\/\d+-/, '').replace(/\.md$/, ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => a.n - b.n);

export type GrowthChapter = (typeof growthChapters)[number];

/** Short card text: first sentence of the lead, capped. */
export function shortLead(lead: string, max = 150): string {
  const first = lead.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? lead;
  const s = first.length > max ? lead : first;
  return s.length > max ? s.slice(0, max).replace(/\s\S*$/, '') + '…' : s;
}
