/**
 * Publication dates for blog pages: all pages are spread evenly from FIRST_DATE to LAST_DATE,
 * in this order: Backend Map → AdTech → Growth guide.
 */
import { backendEntries } from './backend';
import { adtechEntries } from './adtech';
import { growthChapters } from './growth';

export type BlogSection = 'backend' | 'adtech' | 'growth';

const FIRST_DATE = Date.UTC(2026, 8, 1); // 2026-09-01
const LAST_DATE = Date.UTC(2026, 9, 1); // 2026-10-01
const DAY = 24 * 3600 * 1000;

const order: [BlogSection, number][] = [
  ['backend', backendEntries.length],
  ['adtech', adtechEntries.length],
  ['growth', growthChapters.length],
];
const total = order.reduce((n, [, len]) => n + len, 0);

/** ISO date (YYYY-MM-DD) of the page at `index` (0-based) in `section`. */
export function publishedAt(section: BlogSection, index: number): string {
  let offset = 0;
  for (const [name, len] of order) {
    if (name === section) break;
    offset += len;
  }
  const k = offset + index;
  const d = new Date(FIRST_DATE + Math.round(((LAST_DATE - FIRST_DATE) / DAY) * (k / (total - 1))) * DAY);
  return d.toISOString().slice(0, 10);
}

/** Section index page: dated by its most recent page. */
export function sectionUpdatedAt(section: BlogSection): string {
  const len = order.find(([name]) => name === section)![1];
  return publishedAt(section, len - 1);
}

const fmt = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (iso: string) => fmt.format(new Date(iso));
