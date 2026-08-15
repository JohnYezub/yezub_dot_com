import type { Lang, Content } from './types';
import { ru } from './ru';
import { en } from './en';

export type { Lang, Content } from './types';

export const content: Record<Lang, Content> = { ru, en };

/** Prefix a root-relative path with the locale (ru is the default → no prefix). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ru') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** The URL of the current page in the other language. */
export function alternatePath(page: 'home' | 'about', lang: Lang): string {
  const other: Lang = lang === 'ru' ? 'en' : 'ru';
  return localizePath(page === 'home' ? '/' : '/about', other);
}
