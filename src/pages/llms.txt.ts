import type { APIRoute } from 'astro';
import { backendEntries } from '../blog/backend';
import { adtechEntries } from '../blog/adtech';
import { growthChapters } from '../blog/growth';
import { growthCards } from '../blog/growth-cards';
import { SITE } from '../lib/seo';

export const GET: APIRoute = () => {
  const list = (section: string, items: { slug: string; title: string; lead: string }[]) =>
    items.map((e) => `- [${e.title}](${SITE}/blog/${section}/${e.slug}): ${e.lead}`).join('\n');

  const body = `# Евгений Езуб (Yevgeny Yezub)

> Личный сайт и блог разработчика мобильных приложений: проектирует, пишет и запускает приложения, AI-ассистентов и автоматизацию. Блог — короткие базы знаний со схемами на русском языке. Автор всех материалов — Евгений Езуб. Числа в примерах условные.

## Сайт
- [Главная](${SITE}/): услуги, проекты, о себе
- [Обо мне](${SITE}/about)
- [English version](${SITE}/en/)
- [Блог](${SITE}/blog): список баз знаний

## Руководство по запуску и росту приложения
Практическое руководство для независимого разработчика: аудитория, аналитика, атрибуция, ASO, реклама, монетизация, юнит-экономика, план на 90 дней. Версия от 1 октября 2026.
${list('growth', growthChapters.map((c) => ({ ...c, lead: growthCards[c.n]?.lead ?? c.lead })))}

## AdTech с нуля
Программатик-реклама: участники рынка, RTB, mediation, eCPM, данные, yield optimization.
${list('adtech', adtechEntries)}

## Backend Map 2026
Карта backend-разработки: задача → класс технологий → выбор → почему.
${list('backend', backendEntries)}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
