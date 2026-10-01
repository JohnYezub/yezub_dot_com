/** schema.org (JSON-LD) helpers. */
export const SITE = 'https://www.yezub.com';
export const AUTHOR_NAME = 'Евгений Езуб';
export const PERSON_ID = `${SITE}/#person`;
export const WEBSITE_ID = `${SITE}/#website`;

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE + '/',
  name: 'Евгений Езуб',
  inLanguage: ['ru', 'en'],
  publisher: { '@id': PERSON_ID },
};

export function personNode(lang: 'ru' | 'en') {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: lang === 'ru' ? 'Евгений Езуб' : 'Yevgeny Yezub',
    alternateName: lang === 'ru' ? 'Yevgeny Yezub' : 'Евгений Езуб',
    url: SITE + '/',
    image: `${SITE}/assets/portrait.png`,
    jobTitle: lang === 'ru' ? 'Разработчик мобильных приложений' : 'Mobile developer',
    description:
      lang === 'ru'
        ? 'Проектирую, пишу и запускаю мобильные приложения, AI-ассистентов и автоматизацию.'
        : 'I design, build and launch mobile apps, AI assistants and automation.',
    knowsAbout: ['iOS', 'Mobile development', 'App growth', 'AdTech', 'Backend', 'AI automation'],
    sameAs: ['https://github.com/JohnYezub'],
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE + it.path,
    })),
  };
}

export function articleNode(a: {
  title: string;
  description: string;
  path: string;
  published: string;
  section: string;
  image?: string;
}) {
  return {
    '@type': 'TechArticle',
    '@id': `${SITE}${a.path}#article`,
    mainEntityOfPage: SITE + a.path,
    headline: a.title,
    description: a.description,
    inLanguage: 'ru',
    datePublished: a.published,
    dateModified: a.published,
    articleSection: a.section,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(a.image ? { image: a.image } : {}),
  };
}

export function itemListNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: SITE + it.path })),
  };
}
