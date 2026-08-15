export type Lang = 'ru' | 'en';

export interface StatItem {
  n: string;
  label: string;
}

export interface ServiceCard {
  n: string;
  title: string;
  price: string;
  /** number of accent-filled dots (1–3) */
  dots: number;
  /** intro paragraph */
  intro: string;
  /** bullet list (may contain inline HTML) */
  list: string[];
  /** optional italic footnote (may contain inline HTML) */
  note?: string;
}

export interface TagItem {
  label: string;
  variant: 'neutral' | 'accent' | 'outline';
}

export interface Project {
  kicker: string;
  title: string;
  /** heading font-size in px (24 for the two flagship apps, 21 otherwise) */
  titleSize: number;
  /** description (may contain inline HTML) */
  desc: string;
  tags?: TagItem[];
  list?: string[];
  featured?: boolean;
  /** small line on the left of the footer row (italic when `metaItalic`) */
  meta?: string;
  metaItalic?: boolean;
  link?: { href: string; label: string };
}

export interface ProcessStep {
  step: string;
  title: string;
  text: string;
  active?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  paras: string[];
  /** last paragraph uses the accent colour when true */
  accentLast?: boolean;
  tags?: string[];
}

export interface Belief {
  title: string;
  text: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: {
    name: string;
    services: string;
    work: string;
    about: string;
    faq: string;
    contact: string;
    langTitle: string; // tooltip on the inactive language chip (unused when linked)
  };
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    cta: string;
    ctaNote: string;
    stats: StatItem[];
    badges: string[];
  };
  problems: {
    title: string;
    items: string[];
    conclusionStrong: string;
    conclusionRest: string;
  };
  services: {
    title: string;
    hint: string;
    trackA: string;
    trackB: string;
    cardsA: ServiceCard[];
    cardsB: ServiceCard[];
    noteStrong: string;
    noteRest: string;
    noteCta: string;
  };
  work: {
    title: string;
    projects: Project[];
  };
  aboutTeaser: {
    title: string;
    text: string;
    tags: string[];
    cta: string;
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    text: string;
    telegram: string;
    email: string;
  };
  footer: {
    tagline: string;
    telegram: string;
    github: string;
    about: string;
    home: string;
  };
  aboutPage: {
    meta: { title: string; description: string };
    eyebrow: string;
    h1: string;
    lead: string;
    timeline: TimelineEntry[];
    beliefTitle: string;
    beliefs: Belief[];
    eduTitle: string;
    eduText: string;
    nowTitle: string;
    nowText: string;
    ctaTitle: string;
    ctaDiscuss: string;
    ctaWork: string;
  };
}
