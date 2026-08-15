import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Yevgeny Yezub — mobile apps, AI automation and revenue growth',
    description:
      'I design, build and ship mobile apps, AI assistants and automation — solo, from idea to release. Three of my own apps are live in the stores with real revenue.',
  },
  nav: {
    name: 'Yevgeny Yezub',
    services: 'Services',
    work: 'Work',
    about: 'About',
    faq: 'FAQ',
    contact: 'Get in touch',
    langTitle: 'Russian version',
  },
  hero: {
    eyebrow: 'Mobile apps · AI automation · Revenue growth',
    h1: 'Products that work — and make money',
    sub: 'Apps, AI assistants, automation and analytics. I design, build and ship it myself — no team overhead, no account managers, no three-month approval cycles. Three of my own apps are live in the stores with real revenue.',
    cta: 'Discuss your project →',
    ctaNote: 'First call is free. I reply within a day.',
    stats: [
      { n: '14+ years', label: 'in engineering and IT' },
      { n: '6+ years', label: 'in commercial development' },
      { n: '3', label: 'apps of my own in the stores' },
    ],
    badges: ['Mobile Developer', 'AI · Automation'],
  },
  problems: {
    title: 'Sound familiar?',
    items: [
      'Your contractor shipped an app that lags and crashes — and now nobody can untangle it.',
      'You have the idea and the budget, but hiring a five-person team is slow and expensive.',
      "The product is live but doesn't earn: nobody buys the subscription, there's no analytics, nobody tests anything.",
      'Your team and your support inbox are drowning in manual work a machine should be doing.',
      'Everyone around you is "adopting AI" and you still have no answer for what it would actually do for your business.',
    ],
    conclusionStrong: 'I handle all five.',
    conclusionRest:
      ' Not as an outsourced pair of hands, but as a technical partner accountable for the outcome — not for ticket counts.',
  },
  services: {
    title: 'Two tracks',
    hint: 'Tap a card to expand the details',
    trackA: 'A · Build it and fix it',
    trackB: 'B · Automate it and grow the revenue',
    cardsA: [
      {
        n: '01',
        title: 'Full app build',
        price: 'from $8,000 · 6–10 weeks',
        dots: 3,
        intro: 'From idea to a published App Store / Google Play app. One person, the whole chain.',
        list: [
          'Architecture, UI, API integrations, caching and offline support',
          'Subscriptions and in-app purchases (StoreKit / RevenueCat), paywalls',
          'Analytics and crash reporting from day one (Firebase, Amplitude)',
          'Widgets, Apple Watch, push notifications — where they make sense',
          'CI/CD, store submission and handling Apple review',
        ],
      },
      {
        n: '02',
        title: 'AI-accelerated prototype in 2 weeks',
        price: 'from $3,000 · 10–14 days',
        dots: 2,
        intro:
          'Test the idea before you commit real money. A working prototype you can show an investor or put in front of real users.',
        list: [
          'A product you can tap, not pictures in Figma',
          'The core of the product built properly, secondary screens left out',
          'You finish with a firm estimate for the full build',
          'The prototype fee counts toward the project if we continue',
        ],
      },
      {
        n: '03',
        title: 'Audit and rescue of an existing app',
        price: 'from $1,500 · 5–10 days',
        dots: 1,
        intro:
          'Your app is slow, crashes, drains battery, or nobody dares touch it. I take it apart and fix it.',
        list: [
          'Profiling in Xcode Instruments to find the real bottlenecks, not the obvious ones',
          'SwiftUI render optimisation — on one production app this delivered a <strong style="font-weight: 500; color: var(--color-text);">10x+ improvement</strong>',
          'Diagnosing data races and crashes in concurrent code',
          'A written report: prioritised issues, each with an effort estimate',
        ],
        note: "I've taken two production apps to a 100% crash-free rate — one of them serving up to 1.5 million daily active users.",
      },
    ],
    cardsB: [
      {
        n: '04',
        title: 'AI assistants and chatbots',
        price: 'from $2,500 · 2–4 weeks',
        dots: 2,
        intro: 'A bot that actually works, instead of replying "sorry, I didn\'t understand that".',
        list: [
          'Support assistant grounded in your own knowledge base: documents, policies, past conversations',
          'Sales and lead qualification bot that hands qualified leads to your CRM',
          'Telegram, WhatsApp, website widget, or an internal bot for your team',
          'Clean handoff to a human on hard cases, with the context intact',
          'Honest economics: we measure how many conversations it closes without people',
        ],
      },
      {
        n: '05',
        title: 'AI features inside your product',
        price: 'from $3,500 · 3–5 weeks',
        dots: 3,
        intro: 'Not a separate bot — intelligence inside the app itself.',
        list: [
          "Personalised recommendations driven by your users' own data",
          'Content generation, summarisation, semantic search across your data',
          'Document, image and voice processing',
          'API cost control and a predictable cost per request',
        ],
        note: "In Surfcast it works like this: normalised forecast data plus the user's profile go to the Claude API, and the structured response renders as native UI.",
      },
      {
        n: '06',
        title: 'Process automation',
        price: 'from $1,500 · 1 week and up',
        dots: 1,
        intro: 'Anything your people do by hand to the same script should be done by a machine.',
        list: [
          'Pipelines and integrations between your services: CRM, spreadsheets, email, messengers, payments',
          'Automated data collection and parsing, scrapers, monitoring',
          'Content generation and auto-publishing to Instagram, Telegram and Facebook — with human approval before anything goes out',
          'Recurring reports that arrive where you actually read them',
          'Built on minimal infrastructure: no unnecessary servers or subscriptions, and you own all of it',
        ],
      },
      {
        n: '07',
        title: 'Analytics, conversion and ARR growth',
        price: 'from $2,000 for an audit · from $1,500 / month ongoing',
        dots: 2,
        intro: 'You have a product and users but no money. This is where I find the leak.',
        list: [
          'Funnel audit: exactly where users drop off between install and payment',
          'Proper product analytics set up (GA4, BigQuery, Firebase, Amplitude, RevenueCat)',
          'Paywall and pricing: A/B tests on price, tier composition and copy',
          'AI-generated hypotheses from your own data, queued and tested in order',
          'ASO and store listing conversion, plus a monthly report',
        ],
        note: 'I run all of this on my own apps: subscription price A/B tests, Remote Config paywalls, RevenueCat Experiments, and a pipeline that proposes the next hypothesis on its own.',
      },
      {
        n: '08',
        title: 'AI inside your team',
        price: 'from $2,000 per workshop · from $4,000 for a rollout',
        dots: 2,
        intro: '"Not buy everyone a subscription" — actually teaching a team to move faster.',
        list: [
          'Process audit: where AI pays off and where it just gets in the way',
          'Rolling AI into engineering: Claude Code, review workflows, agents, MCP integrations',
          "Guardrails and templates so quality doesn't drop as speed rises",
          'A live workshop for the team plus support through the first month',
        ],
        note: 'I spent seven years training customer engineers around the world. Same job — different tools.',
      },
      {
        n: '09',
        title: 'Fractional CTO',
        price: 'from $2,500 / month',
        dots: 2,
        intro: "For non-technical founders. I'm your engineering judgement, part-time.",
        list: [
          'Stack choices, realistic timelines and budgets, vetting contractors',
          'Code and architecture review for your existing team',
          'Which metrics matter and which hypotheses to test',
          'Untangling App Store and Google Play rejections',
        ],
      },
    ],
    noteStrong: 'Not sure what you need?',
    noteRest:
      " Describe the problem in two sentences. I'll tell you honestly whether you need me at all, and what it would cost.",
    noteCta: 'Discuss your project →',
  },
  work: {
    title: 'Not promises — shipped products',
    projects: [
      {
        kicker: 'My own product · App Store',
        title: 'Surfcast — Waves, Wind & Tides',
        titleSize: 24,
        featured: true,
        desc: 'Surf forecasting: waves, wind, precipitation and tides. Designed, built and shipped solo — including the app icon and visual identity.',
        tags: [
          { label: 'Swift / SwiftUI', variant: 'neutral' },
          { label: 'MVVM', variant: 'neutral' },
          { label: 'WidgetKit', variant: 'neutral' },
          { label: 'Firebase', variant: 'neutral' },
          { label: 'AI recommendations', variant: 'accent' },
        ],
        list: [
          'Disk cache, request coalescing and background refresh to cut redundant network calls',
          'Home screen and lock screen widgets built with Swift Charts',
          'AI spot recommendations: forecast data and user profile go to the model, the response renders as native UI',
          'Firebase Analytics, Crashlytics, Performance, Remote Config and App Check',
        ],
        meta: 'Shipped: May 2026 · Solo',
        link: {
          href: 'https://apps.apple.com/id/app/surfcast-waves-wind-tides/id6760907145',
          label: 'View on the App Store →',
        },
      },
      {
        kicker: 'My own product · 6 years in production',
        title: 'BaliTideForecast (iOS)',
        titleSize: 24,
        desc: 'Tide, swell and wind forecasting for surfers. In production since 2020 and generating revenue.',
        tags: [
          { label: '4.8★', variant: 'accent' },
          { label: '~1,000 MAU', variant: 'neutral' },
          { label: '~237 DAU', variant: 'neutral' },
          { label: 'Real MRR', variant: 'neutral' },
        ],
        list: [
          'Grew it to a 4.8-star rating through iterative releases, A/B-tested subscription pricing and analytics-driven decisions',
          'Hybrid SwiftUI/UIKit architecture with a cache-then-network strategy and graceful fallback to stale data',
          'Subscriptions (StoreKit / RevenueCat) with Remote Config–driven paywalls',
          'Widgets, an Apple Watch companion app, HealthKit, and a Firebase backend I built and own',
        ],
        link: {
          href: 'https://apps.apple.com/id/app/bali-tide-forecast/id1525663618',
          label: 'View on the App Store →',
        },
      },
      {
        kicker: 'My own product · Android',
        title: 'BaliTideForecast (Android)',
        titleSize: 21,
        desc: 'I wrote the Android version from scratch, alone.',
        tags: [
          { label: 'Kotlin', variant: 'neutral' },
          { label: 'Jetpack Compose', variant: 'neutral' },
          { label: 'Material 3', variant: 'neutral' },
          { label: 'StateFlow', variant: 'neutral' },
        ],
        list: [
          'Custom hand-drawn tide chart on Compose Canvas with interactive time scrubbing',
          'Coroutine-based HTTP client, multiple REST integrations, offline caching',
          'Secure keystore and API-key handling, signed AAB release pipeline for Google Play',
        ],
      },
      {
        kicker: 'Automation · My own project',
        title: 'Content generation and auto-publishing pipeline',
        titleSize: 21,
        desc: 'A system that writes the copy, generates the images and publishes to Instagram, Telegram and Facebook — with human approval before anything goes live.',
        list: [
          'Minimal infrastructure: no unnecessary servers, no third-party subscriptions',
          'One-tap moderation directly in the messenger',
          'Full ownership: all code and all keys stay with the owner',
        ],
      },
      {
        kicker: 'Automation · My own project',
        title: 'Revenue growth analytics loop',
        titleSize: 21,
        desc: 'A pipeline that pulls product data, sends it to the model and returns ready-to-run A/B test hypotheses.',
        tags: [
          { label: 'GA4 → BigQuery → AI → hypothesis queue', variant: 'accent' },
          { label: 'RevenueCat Experiments', variant: 'neutral' },
          { label: 'Remote Config', variant: 'neutral' },
        ],
      },
      {
        kicker: 'Client work · Real-time',
        title: 'POKS — real-time poker',
        titleSize: 21,
        desc: 'Mobile poker with real money transactions. Senior iOS Developer, 2.5 years.',
        tags: [
          { label: '900+ commits', variant: 'neutral' },
          { label: '0% crash rate', variant: 'accent' },
          { label: 'WebSocket', variant: 'neutral' },
          { label: 'gRPC', variant: 'neutral' },
        ],
        list: [
          'Layered networking architecture and a typed client with request idempotency',
          'Diagnosed and fixed critical race conditions in concurrent multi-session real-time flows',
          'Improved SwiftUI rendering performance by over 10x — zero downtime',
        ],
        meta: 'Earlier on the same product — iOS Team Lead, a team of 5 engineers',
        metaItalic: true,
        link: {
          href: 'https://apps.apple.com/id/app/poks-poker/id6670421396',
          label: 'App Store →',
        },
      },
      {
        kicker: 'Client work · High load',
        title: 'PlanetVPN',
        titleSize: 21,
        desc: 'A VPN app with up to <strong style="font-weight: 500; color: var(--color-text);">1,500,000 daily active users</strong>. Senior iOS Developer.',
        list: [
          'Reduced the crash rate to 0% using Instruments, crash reports and third-party analytics',
          'Researched and rebuilt the networking framework, then integrated it into the project',
          'Refactored legacy code; integrated Appodeal and AppsFlyer',
        ],
        link: {
          href: 'https://apps.apple.com/id/app/planet-free-vpn-super-proxy/id1410235921',
          label: 'App Store →',
        },
      },
      {
        kicker: 'Client work · Social',
        title: 'DaGama',
        titleSize: 21,
        desc: 'A location-based social app: interactive map of places, personalised feed, profiles, notifications.',
        tags: [
          { label: 'UIKit', variant: 'neutral' },
          { label: 'MVVM', variant: 'neutral' },
          { label: 'Apollo GraphQL', variant: 'neutral' },
          { label: 'Google Maps SDK', variant: 'neutral' },
        ],
        link: {
          href: 'https://apps.apple.com/id/app/dagama-monetize-your-reviews/id6477780357',
          label: 'App Store →',
        },
      },
    ],
  },
  aboutTeaser: {
    title: '18 years in engineering',
    text: 'I started as a field engineer in telecoms — seven years travelling the world training customer engineers. Then my own business, then project management at a digital agency for enterprise clients. Since 2019, development: from engineer to team lead running five people, and three apps of my own shipped to the stores along the way.',
    tags: ['Field engineering', 'Own business', 'Management', 'Development', 'My own products'],
    cta: 'More about me →',
  },
  process: {
    title: 'How I work',
    steps: [
      {
        step: 'STEP 01',
        title: 'A 30-minute call, free',
        text: 'You describe the problem, I ask the awkward questions.',
        active: true,
      },
      {
        step: 'STEP 02',
        title: 'A firm quote',
        text: "A number, a date, and exactly what's included. If it isn't a job for me, I'll say so and point you somewhere better.",
      },
      {
        step: 'STEP 03',
        title: 'Weekly builds',
        text: 'Every week you get something you can install and use. No "I\'ll show you at the end".',
      },
      {
        step: 'STEP 04',
        title: 'Handover',
        text: 'Code, documentation, credentials, keys, pipelines — all yours. No lock-in.',
      },
    ],
  },
  faq: {
    title: 'The questions I get most often',
    items: [
      {
        q: 'What does an app cost?',
        a: 'From $8,000 for an MVP. The exact figure comes after our call — it depends on screen count, integrations and whether you need a backend. If you\'d rather test the idea first, a two-week prototype starts at $3,000.',
      },
      {
        q: 'How long does it take?',
        a: 'MVP: 6–10 weeks. Prototype: 10–14 days. Chatbot: 2–4 weeks. Audit of an existing app: from 5 days.',
      },
      {
        q: 'Do you work alone or with a team?',
        a: "Alone. That's precisely why it's faster and cheaper: no managers, no context lost between people, no time burned on internal alignment. For specialist work like heavy visual design I bring in contractors I've worked with before.",
      },
      {
        q: 'How is your bot different from a $20/month builder?',
        a: 'A builder follows a script and breaks on the first question nobody anticipated. I build an assistant grounded in your knowledge base, with clean handoff to a human, real integration with your systems, and honest numbers on how many conversations it closes without people.',
      },
      {
        q: 'Do you guarantee revenue growth?',
        a: "No, and nobody honest does. What I guarantee is different: you'll see exactly where the money leaks, you'll have a queue of testable hypotheses, and you'll have the infrastructure to test them. After that it's a question of iterations.",
      },
      {
        q: 'Does my data stay with me?',
        a: "Everything runs in your environment, on your keys and your accounts. I don't hold your data. If the work is sensitive, we can talk about running local models.",
      },
      {
        q: 'Is it iOS only?',
        a: 'iOS (Swift, SwiftUI) is my core specialism. I build Android with Kotlin and Jetpack Compose, and automation and bots in Python and Node.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do. Completely, from day one, including the repository and every credential.',
      },
      {
        q: 'How does remote work in practice?',
        a: "I've worked remotely with clients across time zones for eight years. I schedule calls around you and keep status in writing, so you never have to chase me to find out where things stand.",
      },
      {
        q: 'Can you take over a project another contractor abandoned?',
        a: "Yes, and it's a common request. I start with an audit and tell you honestly whether fixing it is cheaper than rewriting it.",
      },
    ],
  },
  finalCta: {
    title: "Tell me the problem — I'll give you a price and a date",
    text: "The first call is free. If it isn't a job for me, I'll tell you straight away and point you to someone better.",
    telegram: 'Message me on Telegram',
    email: 'y.yezub@gmail.com',
  },
  footer: {
    tagline: 'Yevgeny Yezub · Mobile apps, AI automation and product growth',
    telegram: 'Telegram',
    github: 'GitHub',
    about: 'About',
    home: 'Home',
  },
  aboutPage: {
    meta: {
      title: 'About — Yevgeny Yezub',
      description:
        '18 years in engineering: from a field engineer in telecoms to team lead and three apps of my own in the stores.',
    },
    eyebrow: 'About',
    h1: '18 years in engineering: from field sites to my own products',
    lead: "The short version: I'm good at taking apart complicated systems I didn't build, explaining them to people, and getting a product to the point where someone pays for it. The long version is below.",
    timeline: [
      {
        period: '2008–2015',
        title: 'Field engineering, worldwide',
        paras: [
          'Support engineer at Infinet Wireless, a manufacturer of wireless data transmission equipment. The Middle East, Asia, Europe, Russia: training customer engineers and getting real deployments working on site.',
          "Two lessons from those years still pay my bills. The first: how to fix things you didn't design. On site there's no author to ask and no documentation, and the link has to be up today. That's exactly how I walk into someone else's codebase.",
          "The second: how to explain something complicated so the person on the other end can repeat it without you. An engineer in another country, with another language and another background, has to be able to work alone after the training ends. That's the same job I do now when I bring AI tooling into someone else's team.",
        ],
      },
      {
        period: 'Own business',
        title: 'Count the money, not the lines',
        paras: [
          'I spent several years running my own company. I know how the money gets counted, why a deadline beats elegant architecture, and exactly how it feels when a contractor goes quiet for a week.',
          "It changed how I work: I don't propose the technically interesting solution when a cheaper, more boring one exists.",
        ],
      },
      {
        period: 'Management',
        title: 'Projects at a digital agency',
        paras: [
          "Project manager at a digital agency, leading website builds for the agency's enterprise clients — among them Huawei, Philips and Microsoft.",
          'This is where I saw development from the business side: how a brief actually gets written, how work gets signed off, why projects slip, and what "no" sounds like from a client who was never told what he was paying for.',
        ],
        tags: ['Huawei', 'Philips', 'Microsoft'],
      },
      {
        period: '2019 — today',
        title: 'Engineering and my own products',
        accentLast: true,
        paras: [
          'From developer to iOS Team Lead running five engineers. Migrated a product from UIKit to SwiftUI, built code review and unit testing practice, fixed data races in real-time systems handling actual money, and took an app with 1.5 million daily users to a zero crash rate.',
          'Alongside that I build my own products. Three apps in the stores, each with its own backend, analytics, subscriptions, release pipeline and paying users. Plus everything around them: price A/B tests, publishing automation, AI loops that generate the next hypothesis.',
          "Your own products are the most honest school there is. There's no client to blame: if nobody buys the subscription, that's on you.",
        ],
      },
    ],
    beliefTitle: 'What I believe',
    beliefs: [
      {
        title: 'The simple solution beats the clever one',
        text: 'If 50 lines will do instead of 200, it should be 50.',
      },
      {
        title: 'A working build every week',
        text: 'Not a progress report — something you can install and use.',
      },
      {
        title: 'An honest estimate over a pleasant one',
        text: 'Better to say "expensive and slow" up front than "almost done" three months running.',
      },
      {
        title: 'The client owns everything',
        text: "Code, keys, credentials, infrastructure. Lock-in isn't a business model, it's hostage-taking.",
      },
    ],
    eduTitle: 'Education',
    eduText: 'University degree (Specialist) — Mathematics and Mechanics, Computer Science.',
    nowTitle: 'Now',
    nowText:
      'I work remotely with clients worldwide, and have done for eight years. I take on a limited number of projects at a time so each one moves instead of queuing.',
    ctaTitle: "Tell me the problem — I'll give you a price and a date",
    ctaDiscuss: 'Discuss your project →',
    ctaWork: 'See my work →',
  },
};
