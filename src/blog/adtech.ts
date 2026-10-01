/**
 * AdTech с нуля — 13 cheat-sheet pages.
 * Source: adtech_agent_content_map.md (§ = section of the source map).
 * Text fields may contain inline HTML (<b>, <code>) — rendered with set:html.
 * Examples are illustrative, numbers are conditional.
 */

export interface AdtechEntry {
  slug: string;
  /** Section of the map this page belongs to, e.g. "§4" */
  ref: string;
  title: string;
  /** One-line "what is it" under the title */
  lead: string;
  /** File in src/assets/blog/adtech/ (without extension); some pages have no scheme */
  image?: string;
  /** Short caption under the scheme: what exactly it shows */
  caption?: string;
  /** Short theses */
  points: string[];
  /** Optional mini-example */
  example?: { title: string; code: string };
  /** "What to pick when" */
  pick?: { title?: string; items: string[] };
  /** Trap / nuance */
  warn?: { title: string; text: string };
}

export const adtechEntries: AdtechEntry[] = [
  {
    slug: 'ecosystem',
    ref: '§1 · §2',
    title: 'Что продаётся и кто участвует',
    lead: 'Publisher продаёт не картинку, а возможность показать объявление человеку здесь и сейчас.',
    image: 'ecosystem',
    caption: 'Упрощённая карта рынка: advertisers создают спрос, publishers предоставляют inventory, а DSP, Ad Exchange и SSP соединяют стороны.',
    points: [
      '<b>Impression</b> — базовая единица торговли: один состоявшийся показ.',
      '<b>Demand</b> — спрос рекламодателей. <b>Supply</b> — рекламный инвентарь площадок.',
      '<b>Publisher</b> — владелец сайта или приложения: есть аудитория, нужен revenue.',
      '<b>Advertiser</b> — платит за показы, клики, регистрации, покупки, установки.',
      '<b>Ad Network</b> — агрегирует спрос и помогает площадкам монетизироваться.',
      '<b>DSP</b> — система покупателей. <b>SSP</b> — система продавцов.',
    ],
    example: {
      title: 'Главная формула',
      code: 'Advertiser создаёт demand\n  → инфраструктура сопоставляет его с inventory\n  → publisher получает revenue',
    },
    warn: {
      title: 'Схема — модель',
      text: 'В реальности это граф, а не цепочка: одна компания может быть сразу ad network, SSP и exchange.',
    },
  },
  {
    slug: 'inventory',
    ref: '§3',
    title: 'Inventory, placement, ad tag, SDK',
    lead: 'Inventory — это не «сколько показов», а показы с контекстом: где, кому, на чём и когда.',
    image: 'inventory',
    caption: 'Одна страница может содержать несколько независимых placements, каждый со своим форматом, размером и статистикой.',
    points: [
      '<b>Inventory</b> — всё, что publisher может предложить рынку. Контекст: страница, формат, страна, устройство, время.',
      '<b>Placement</b> — конкретное место: top banner, блок в статье, sticky, видео перед контентом, native в ленте.',
      '<b>Ad tag</b> — код для запроса и отрисовки рекламы (в вебе чаще всего JavaScript).',
      '<b>SDK</b> — набор для интеграции: создаёт ad requests, отслеживает impression, собирает latency и ошибки.',
    ],
    example: {
      title: 'Ad tag на веб-странице',
      code: '<script src="https://example.com/ad.js"></script>\n// грузится → создаёт ad request → рисует объявление в placement',
    },
    pick: {
      title: 'Tag или SDK',
      items: ['Сайт → ad tag (JS)', 'Мобильное приложение → SDK', 'Нужны латентность и ошибки по каждому placement → SDK или tag с событиями'],
    },
  },
  {
    slug: 'funnel',
    ref: '§4',
    title: 'Request → impression → click → conversion',
    lead: 'Запрос рекламы и показ — не одно и то же. Это разные измеримые этапы воронки.',
    image: 'funnel',
    caption: 'Один рекламный запрос проходит через несколько измеримых этапов: request → impression → click → conversion.',
    points: [
      '<b>Ad Request</b> — система запросила рекламу. <b>Impression</b> — её реально показали.',
      '<b>Click</b> — пользователь взаимодействовал. <b>Conversion</b> — выполнил целевое действие.',
      '<b>CTR</b> — доля показов с кликом. <b>CPC</b> — цена клика. <b>CPA</b> — цена целевого действия.',
      'Между этапами теряется трафик: no fill, таймаут, ошибка, объявление не отрисовалось.',
    ],
    example: {
      title: 'Условная воронка',
      code: '100 000 requests → 90 000 impressions → 450 clicks → 18 conversions\n\nCTR = 450 / 90 000 × 100% = 0.5%\nCPC = Spend / Clicks\nCPA = Spend / Conversions',
    },
    warn: {
      title: 'Частая ошибка',
      text: 'Считать request и impression одним событием. Тогда fill rate и потери по пути невидимы.',
    },
  },
  {
    slug: 'cpm-ecpm',
    ref: '§5 · §6',
    title: 'CPM, eCPM и Fill Rate',
    lead: 'Высокая ставка в прайсе ещё не значит высокий доход: цена умножается на то, сколько реально показано.',
    image: 'cpm-ecpm',
    caption: 'CPM описывает цену тысячи показов, а eCPM — фактическую монетизацию тысячи состоявшихся impressions.',
    points: [
      '<b>CPM</b> — цена 1 000 показов (<i>mille</i> = тысяча).',
      '<b>eCPM</b> — фактический доход на 1 000 показов. Приводит разные источники к одной единице.',
      '<b>Fill Rate</b> — доля requests, закончившихся impression.',
      'Показ не случился: нет demand, неподходящий GEO или формат, ставка ниже floor, таймаут, ошибка.',
    ],
    example: {
      title: 'Формулы и сравнение',
      code: 'CPM $2 × 1 000 000 показов = $2 000\neCPM = Revenue / Impressions × 1 000  ($500 / 300k → $1.67)\nFill Rate = Impressions / Requests × 100%\n\nNetwork A  eCPM $2.50  fill 45%   ← красиво, но монетизирует меньше половины\nNetwork B  eCPM $1.90  fill 92%\nNetwork C  eCPM $1.30  fill 99%',
    },
    warn: {
      title: 'Вывод',
      text: 'Самый высокий eCPM не обязательно даёт максимальный revenue. Смотри eCPM вместе с fill rate, GEO, форматом и latency.',
    },
  },
  {
    slug: 'mediation',
    ref: '§7',
    title: 'Mediation',
    lead: 'Слой, который управляет несколькими рекламными источниками: берёт лучшее у каждого и страхуется при no fill.',
    image: 'mediation',
    caption: 'Mediation сочетает высокий eCPM одних источников с высоким fill rate других и использует fallback при no fill.',
    points: [
      'Выбирает предпочтительный источник и ждёт ответа.',
      'При <code>no fill</code> уходит в следующий источник (waterfall-fallback).',
      'Учитывает статистику сетей и контекст запроса.',
      'Разные маршруты для разных типов трафика: GEO, устройство, placement.',
    ],
    example: {
      title: 'Простой fallback',
      code: 'Ad Request → Network A → No Fill\n                      ↓\n                 Network B → Ad',
    },
    pick: {
      items: [
        'Одна сеть, мало трафика → mediation избыточна',
        'Несколько сетей с разным eCPM и fill → mediation',
        'Много контекстов и данных → умный routing (см. Yield)',
      ],
    },
    warn: {
      title: 'Цена fallback',
      text: 'Каждый шаг по цепочке — это ожидание ответа. Лишний fallback растит latency и может стоить показа.',
    },
  },
  {
    slug: 'rtb',
    ref: '§8',
    title: 'RTB: аукцион за один impression',
    lead: 'Real-Time Bidding: на каждую возможность показа покупатели в реальном времени присылают ставки.',
    image: 'rtb',
    caption: 'Упрощённый RTB-аукцион: несколько bidders оценивают одну рекламную возможность, после чего выбирается выигравшее объявление.',
    points: [
      'Появляется возможность показа — участники оценивают её и отвечают ставкой или <code>no bid</code>.',
      'Побеждает не просто «кто дал больше»: работают правила аукциона.',
      'Учитываются: floor price, targeting, eligibility, формат, brand safety, timeout.',
      'Ответ, пришедший после timeout, в аукционе не участвует.',
    ],
    example: {
      title: 'Условный аукцион',
      code: 'Bidder A → $1.20\nBidder B → $2.05   ← сильнейшая ставка\nBidder C → $1.75\nBidder D → No Bid',
    },
    warn: {
      title: 'Не путай',
      text: 'RTB — это способ продажи одного показа. Mediation — способ выбора между источниками. Это разные слои.',
    },
  },
  {
    slug: 'timeline',
    ref: '§9',
    title: 'Что происходит за миллисекунды',
    lead: 'Для пользователя реклама просто «появилась». Внутри — цепочка операций с жёстким временным бюджетом.',
    image: 'timeline',
    caption: 'Иллюстративная временная шкала одного рекламного запроса — от пустого placement до отрисованного объявления.',
    points: [
      '1. Placement стал доступен → 2. создан ad request → 3. сформирован bid request.',
      '4. Участники вернули bid responses → 5. выбран победитель.',
      '6. Вернулся creative → 7. объявление отрисовано.',
      'Каждый шаг — это сеть, и каждый шаг ограничен timeout.',
    ],
    example: {
      title: 'Где обычно уходит время',
      code: 'сеть и география · число участников аукциона\ntimeout-политика · доставка creative (вес, CDN)',
    },
    warn: {
      title: 'Про цифры',
      text: 'Значения на схеме — пример последовательности, не норматив. Реальная latency зависит от маршрута, архитектуры и количества участников.',
    },
  },
  {
    slug: 'dsp-ssp',
    ref: '§10',
    title: 'DSP, SSP и Ad Exchange',
    lead: 'Две стороны рынка и площадка между ними: кто покупает, кто продаёт и где встречаются.',
    image: 'dsp-ssp',
    caption: 'DSP представляет покупателей, SSP — продавцов inventory, а Ad Exchange соединяет стороны через аукционную инфраструктуру.',
    points: [
      '<b>DSP</b> (demand side): рекламодатель задаёт бюджет, GEO, аудиторию, устройство, формат, max-ставку, цель — DSP сам оценивает возможности.',
      '<b>SSP</b> (supply side): publisher отдаёт inventory, SSP подключает demand, задаёт floor price и правила продажи.',
      '<b>Ad Exchange</b>: рынок, где DSP и SSP встречаются и проходят аукционы.',
    ],
    example: {
      title: 'Кто за кого',
      code: 'Advertiser → DSP  ⇄  Ad Exchange  ⇄  SSP ← Publisher\n(покупает)                          (продаёт)',
    },
    pick: {
      title: 'Ты на какой стороне?',
      items: ['Покупаю трафик → DSP', 'Продаю свой inventory → SSP', 'Нужна нейтральная площадка торгов → exchange'],
    },
    warn: {
      title: 'Роли смешиваются',
      text: 'Современная платформа часто совмещает несколько ролей одновременно. Схема — карта функций, не список компаний.',
    },
  },
  {
    slug: 'data-pipeline',
    ref: '§11 · §12',
    title: 'Данные: API и AdTech Data Pipeline',
    lead: 'Чтобы оптимизировать, надо знать фактический результат. Для этого собирают два разных потока данных.',
    image: 'data-pipeline',
    caption: 'События из браузера и финансовая статистика рекламных источников объединяются в data pipeline для расчёта monetization metrics.',
    points: [
      '<b>Event data</b> — около момента показа: ad request, impression, click, latency, error, timeout. Приходит почти сразу.',
      '<b>Reporting data</b> — деньги и агрегаты: revenue, earnings, fill, срезы по GEO, device, placement. Часто приходит позже, через reporting API.',
      'Потоки объединяют и считают eCPM, Fill Rate, Revenue, Latency, ошибки по источникам.',
      'API нужен, когда источников много: ручная сверка не масштабируется.',
    ],
    example: {
      title: 'Ответ reporting API → метрика',
      code: '{ "date": "2026-08-22", "impressions": 1000000, "revenue": 2100 }\n\neCPM = 2100 / 1 000 000 × 1000 = $2.10\n\n100 publishers × 3 networks × 30 days = 9 000 строк в день\n(плюс country, device, placement, час → намного больше)',
    },
    warn: {
      title: 'Рассинхрон',
      text: 'События и финстатистика приходят в разное время. Сводить их надо по ключам и датам, и помнить, что свежие деньги могут ещё уточняться.',
    },
  },
  {
    slug: 'yield-engine',
    ref: '§13 · §14',
    title: 'Yield Optimization и Decision Engine',
    lead: 'Не «найти самый высокий CPM», а выбрать маршрут, который максимизирует ожидаемый фактический доход для этого запроса.',
    image: 'yield-engine',
    caption: 'Yield engine оценивает несколько источников в контексте конкретного ad request, а не выбирает одну универсально «лучшую» сеть.',
    points: [
      '<b>Yield</b> — насколько эффективно inventory превращается в revenue.',
      'Нет сети, которая всегда лучшая. Лучший источник зависит от контекста.',
      'Сигналы: GEO, device, browser, placement, format, время суток, historical eCPM, fill rate, latency, доступность, timeout.',
      'Простая реализация — правила и агрегированная статистика. Machine learning не обязателен.',
    ],
    example: {
      title: 'Один движок, разные ответы',
      code: 'Germany · Android · Article Bottom · 20:00 → Network B\nUS · iPhone · Morning                     → другой результат\n\nContext → Signals → Evaluate → Select Route → Ad Source\n\n100k impressions:  A $100 · B $115 · C $130',
    },
    warn: {
      title: 'Что оптимизируем',
      text: 'Ожидаемый revenue, а не CPM из прайс-листа. Цена × вероятность показа × задержка.',
    },
  },
  {
    slug: 'feedback-loop',
    ref: '§15',
    title: 'Feedback Loop',
    lead: 'Выбор источника — не конец. Результат возвращается в систему и влияет на следующие решения.',
    image: 'feedback-loop',
    caption: 'Yield optimization — замкнутый цикл: система принимает решение, измеряет результат и использует накопленные данные для следующих запросов.',
    points: [
      'Что измеряем: ответила ли сеть или вернула no fill, сколько заняло, был ли показ, какой revenue, были ли ошибки.',
      'Результат становится входом для аналитики и следующих маршрутов.',
      'Цикл: Observe → Measure → Optimize → Observe again.',
      'Поэтому качество измерения так же важно, как сам routing.',
    ],
    example: {
      title: 'Цикл',
      code: 'Observe → Measure → Optimize\n   ↑                      │\n   └──────────────────────┘',
    },
    warn: {
      title: 'Мусор на входе',
      text: 'Если события теряются или считаются неверно, система уверенно оптимизирует неправильное. Сначала корректный tracking, потом routing.',
    },
  },
  {
    slug: 'platform-metrics',
    ref: '§16',
    title: 'Бизнес-метрики платформы',
    lead: 'Рекламные метрики описывают трафик. Но у самой платформы есть своя экономика — не смешивай два уровня.',
    points: [
      '<b>Revenue</b> — выручка самой платформы. <b>Take Rate</b> — доля денежного потока, остающаяся платформе.',
      '<b>MRR / ARR</b> — месячная и годовая регулярная выручка. <b>Churn</b> — доля ушедших клиентов.',
      '<b>ARPU</b> — средняя выручка на клиента. <b>CAC</b> — цена привлечения. <b>LTV</b> — ценность за всё время.',
      '<b>GMV</b> — общий объём сделок. В ad-tech понятнее: gross ad spend, media spend, advertising volume.',
    ],
    example: {
      title: 'Take rate и LTV/CAC (условно)',
      code: 'Advertising Volume = $1 000 000\nTake Rate          = 10%\nRevenue платформы  = $100 000\n\nLTV = $2 000, CAC = $300  →  LTV / CAC ≈ 6.7',
    },
    warn: {
      title: 'Всегда уточняй',
      text: 'Речь о денежном потоке через платформу или о её собственной выручке? Это числа на порядок разные. Пример выше — расчёт, не рыночный benchmark.',
    },
  },
  {
    slug: 'glossary',
    ref: '§17 · §18 · §19',
    title: 'Словарь и путь одного impression',
    lead: 'Минимальный словарь и всё в одной последовательности: от открытия страницы до денег и следующего решения.',
    points: [
      '<b>Publisher</b> — площадка · <b>Advertiser</b> — рекламодатель · <b>Inventory</b> — доступные возможности · <b>Placement</b> — конкретное место.',
      '<b>Ad Request</b> → <b>Impression</b> → <b>CTR / CPC / CPA</b> · <b>CPM</b> — цена · <b>eCPM</b> — факт · <b>Fill Rate</b> — доля заполненных.',
      '<b>Mediation</b> — несколько источников · <b>RTB</b> — аукцион · <b>DSP / SSP / Exchange</b> — покупатель / продавец / площадка.',
      '<b>SDK / Ad Tag</b> — интеграция · <b>Yield</b> — эффективность монетизации.',
      '<b>Mental model:</b> publisher имеет inventory и хочет монетизировать; SSP / network / exchange сводят его со спросом; DSP и advertiser — покупатели.',
    ],
    example: {
      title: 'Один impression от страницы до денег',
      code: 'Ad Request\n→ Decision\n→ Ad Source        (ad / no fill / error)\n→ Impression       (после отрисовки)\n→ Revenue Data     (reporting API, позже)\n→ Analytics        (eCPM, fill, latency)\n→ Next Decision',
    },
    warn: {
      title: 'Главный вопрос',
      text: 'Как из доступных возможностей получить максимально эффективный фактический результат с учётом цены, fill rate, latency, контекста и доступности спроса?',
    },
  },
];
