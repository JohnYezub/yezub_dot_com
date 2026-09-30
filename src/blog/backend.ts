/**
 * Backend Map 2026 — 25 cheat-sheet pages.
 * Order follows backendmap2026_full.md (§ = section of the map).
 * Text fields may contain inline HTML (<b>, <code>) — rendered with set:html.
 */

export interface BackendEntry {
  slug: string;
  /** Section of the map this page belongs to, e.g. "§2" */
  ref: string;
  title: string;
  /** One-line "what is it" under the title */
  lead: string;
  /** Short theses */
  points: string[];
  /** Optional mini-example */
  example?: { title: string; code: string };
  /** "What to pick when" */
  pick?: string[];
  /** Trap / when NOT to use */
  warn?: { title: string; text: string };
}

export const backendEntries: BackendEntry[] = [
  {
    slug: 'tradeoffs',
    ref: '§0 · §18',
    title: 'Оси компромиссов',
    lead: 'Любой выбор в backend — торговля по осям. Не «что лучше», а «что мы готовы отдать».',
    points: [
      '<b>Latency</b> — как быстро один ответ. <b>Throughput</b> — сколько запросов в секунду. Батчинг растит второе ценой первого.',
      '<b>Consistency</b> — видят ли все одно и то же сразу. Strong (ждём) против eventual (быстро, но врозь) — это <i>продуктовое</i> решение.',
      '<b>Durability</b> — переживут ли данные сбой. Репликация и fsync надёжнее, но медленнее.',
      '<b>Scalability</b> — что будет при ×100. Stateless масштабируется легко, stateful — больно.',
      '<b>Complexity · Cost · Dev speed</b> — кто чинит в 3 ночи, сколько стоит и как быстро выкатим фичу.',
    ],
    example: {
      title: 'Пример: лайк vs счётчик',
      code: '«Лайк виден мгновенно»      → strong consistency (дороже)\n«Счётчик обновится через 2с» → eventual (дёшево, быстро)',
    },
    pick: [
      '<b>CAP:</b> при сетевом разрыве выбираешь консистентность или доступность.',
      '<b>Fallacies of Distributed Computing:</b> сеть не надёжна, не бесплатна, latency не ноль.',
      '<b>Choose Boring Technology:</b> у команды ограниченный бюджет новизны — каждая экзотика тратит «токен».',
    ],
    warn: {
      title: 'Главное',
      text: 'К каждой «коробке» на схеме задавай два вопроса: какую ось она обслуживает и что отдаёт взамен.',
    },
  },
  {
    slug: 'languages',
    ref: '§1',
    title: 'Языки backend',
    lead: 'Вопрос не «какой лучший», а «для какого типа системы».',
    points: [
      '<b>Go</b> — API, микросервисы, high-load: просто, быстро, дешёвая concurrency.',
      '<b>Java / Kotlin / C#</b> — enterprise и крупные системы: зрелые экосистемы, Spring / .NET.',
      '<b>TypeScript / Node</b> — SaaS, BFF, realtime; один язык на фронте и бэке. CPU-heavy — осторожно.',
      '<b>Python</b> — AI/ML, data, automation. Огромная экосистема, но слабее в производительности.',
      '<b>Rust / C++</b> — ultra-low latency, инфраструктура, trading. Высокий порог входа.',
      '<b>PHP / Ruby</b> — быстрый MVP и SaaS (Laravel, Rails).',
    ],
    example: {
      title: 'Типичные стеки',
      code: 'Backend к мобильному → Go + PostgreSQL + Redis\nAI-сервис            → Python + FastAPI + PostgreSQL + Redis\nEnterprise           → Kotlin/Java + Spring Boot + PostgreSQL + Kafka + Redis',
    },
    pick: [
      'Быстрый SaaS / MVP → TS, Python, Ruby, PHP',
      'Обычный production → Go, Java, Kotlin, C#, TS',
      'High-load сеть → Go, Java, Rust',
      'Ultra-low latency → Rust, C++',
    ],
  },
  {
    slug: 'databases',
    ref: '§2',
    title: 'Классы баз данных',
    lead: 'Не сравнивай «MySQL vs Redis» — они решают разные задачи. Мысли классами.',
    points: [
      '<b>Relational (PostgreSQL, MySQL)</b> — пользователи, платежи, заказы, связи. Default для нового проекта: Postgres.',
      '<b>Key-value (Redis)</b> — кэш, сессии, rate limit, счётчики, блокировки. Обычно не замена Postgres.',
      '<b>Document (MongoDB)</b> — когда данные естественно документные, а структура гибкая.',
      '<b>OLAP (ClickHouse)</b> — аналитика по миллиардам событий, логи, телеметрия.',
      '<b>Search (Elasticsearch / OpenSearch)</b> — полнотекстовый поиск, автодополнение, логи.',
      '<b>Vector (pgvector, Qdrant, Pinecone)</b> — поиск «по смыслу», основа RAG.',
    ],
    example: {
      title: 'Два разных вопроса к данным',
      code: 'OLTP:  «какая подписка у юзера 123?»           → PostgreSQL\nOLAP:  «4 млрд событий по странам за 90 дней»   → ClickHouse',
    },
    warn: {
      title: 'Антипаттерн',
      text: '«У нас JSON API → значит Mongo». Нет: Postgres хранит JSONB и даёт реляционную модель. Для небольшого RAG хватит PostgreSQL + pgvector.',
    },
  },
  {
    slug: 'scaling-postgres',
    ref: '§2',
    title: 'Масштабирование реляционной БД',
    lead: 'Слой, который всегда кусает: разные узкие места — разные способы масштабирования.',
    points: [
      '<b>Connection pooling (PgBouncer)</b> — Postgres умирает от числа соединений раньше, чем от объёма. Особенно в serverless.',
      '<b>Read replicas</b> — разгрузить чтение: запись на primary, чтение с реплик (с лагом репликации).',
      '<b>Partitioning</b> — одна большая таблица режется на части по времени или ключу внутри одной БД.',
      '<b>Sharding</b> — данные разнесены по разным БД. Самый дорогой шаг, откладывай до последнего.',
      '<b>Миграции схемы</b> (Flyway, Liquibase, Prisma, Drizzle) — менять таблицы без даунтайма.',
      '<b>Isolation levels и deadlocks</b> — почему параллельные запросы дали «не тот» результат.',
    ],
    example: {
      title: 'Порядок действий при росте',
      code: '1. индексы и запросы  →  2. pooling  →  3. read replicas\n→  4. partitioning  →  5. sharding (если правда нужно)',
    },
    warn: {
      title: 'Не путай',
      text: 'Read replicas ≠ partitioning ≠ sharding. Это три разных инструмента под три разных узких места: чтение, размер таблицы, объём всей БД.',
    },
  },
  {
    slug: 'file-storage',
    ref: '§3',
    title: 'Где хранить файлы',
    lead: 'Метаданные — в базе, бинарные файлы — в object storage, доставка — через CDN.',
    points: [
      '<b>Object storage:</b> S3, Cloudflare R2, GCS, Azure Blob. Дёшево, почти безлимитно, устойчиво.',
      '<b>Postgres</b> хранит только метаданные: кто загрузил, имя, права, ссылка на файл.',
      '<b>CDN</b> кэширует контент рядом с пользователем: images, video, JS/CSS, downloads.',
      '<b>Signed URLs</b> — клиент грузит и скачивает напрямую в хранилище, минуя твой API.',
      'У R2 нулевой egress, а egress у S3 часто главная статья счёта.',
    ],
    example: {
      title: 'Загрузка фото',
      code: 'User → API → PostgreSQL (metadata)\n            → S3 (сам файл)\n\nUser в Бали → CDN Singapore → S3 (US origin)',
    },
    warn: {
      title: 'Не делай так',
      text: 'Фото пользователей не кладут в Postgres без веской причины: раздувается база, бэкапы и репликация.',
    },
  },
  {
    slug: 'caching',
    ref: '§4',
    title: 'Кэширование',
    lead: 'Отдельная дисциплина: быстро отдаём, но рискуем устаревшими данными.',
    points: [
      '<b>Cache-aside</b> — базовый паттерн: сначала кэш, при промахе — БД и запись в кэш с TTL.',
      '<b>Инвалидация</b> — «одна из двух труднейших вещей в CS». Стратегии: TTL, write-through, write-behind, cache-aside.',
      '<b>Cache stampede</b> — TTL истёк, 10 000 запросов разом ломятся в БД.',
      'Лечится: <b>locking</b> (один грузит, остальные ждут), <b>early recompute</b>, <b>jitter</b> в TTL.',
    ],
    example: {
      title: 'Cache-aside',
      code: 'GET /user/123 → Redis\n  HIT  → вернуть\n  MISS → PostgreSQL → записать в Redis (TTL) → вернуть',
    },
    warn: {
      title: 'Когда Redis не нужен',
      text: 'Нет реальной проблемы latency или нагрузки — Redis это лишний stateful-компонент, который тоже может упасть.',
    },
  },
  {
    slug: 'why-kafka',
    ref: '§5',
    title: 'Зачем нужна Kafka',
    lead: 'Меняет топологию с «все знают обо всех» на «событие произошло — подписчики сами решают».',
    points: [
      '<b>До:</b> Order Service вызывает Payment, Email, Analytics, Warehouse, CRM — жёсткая связанность.',
      '<b>После:</b> Order публикует <code>ORDER_CREATED</code>, потребители подписываются независимо.',
      'Kafka — не БД и не HTTP: это <b>durable event log</b> с возможностью перечитать историю.',
      'Подходит: огромные потоки событий, analytics pipelines, интеграции, микросервисы.',
    ],
    example: {
      title: 'Топология',
      code: 'Order Service → ORDER_CREATED → Kafka → { Email | Analytics | CRM | Warehouse }',
    },
    warn: {
      title: 'Часто берут слишком рано',
      text: 'Меньше сотен тысяч событий — хватит API → PostgreSQL или простой очереди. Для 10k пользователей это прекрасная архитектура.',
    },
  },
  {
    slug: 'reliable-events',
    ref: '§5',
    title: 'Надёжная обработка событий',
    lead: 'Самое трудное в messaging — не картинка, а гарантии доставки.',
    points: [
      '<b>At-least-once</b> — почти всегда. <b>Exactly-once</b> — почти миф. Значит, событие придёт дважды.',
      '<b>Idempotency key</b> — каждый consumer и webhook обязан быть идемпотентным. Иначе деньги спишутся трижды.',
      '<b>Dual-write problem</b> — пишем в Postgres и шлём в Kafka двумя действиями; второе падает, данные разъезжаются.',
      '<b>Outbox pattern</b> — пишем событие в таблицу outbox в той же транзакции, отдельный процесс публикует в брокер.',
      '<b>Saga</b> — «транзакция» через 5 сервисов без общего commit: компенсирующие действия вместо rollback.',
      '<b>Backpressure</b> — что делать, когда producer быстрее consumer.',
    ],
    example: {
      title: 'Outbox в одной транзакции',
      code: 'BEGIN;\n  INSERT INTO orders ...;\n  INSERT INTO outbox (type, payload) VALUES (\'ORDER_CREATED\', ...);\nCOMMIT;\n-- relay читает outbox и публикует в Kafka',
    },
  },
  {
    slug: 'cdc',
    ref: '§5',
    title: 'CDC: из OLTP в аналитику',
    lead: 'Как данные попадают из Postgres в ClickHouse без нагрузки на боевую БД.',
    points: [
      '<b>Change Data Capture</b> читает WAL (журнал) Postgres и превращает изменения строк в поток событий.',
      '<b>Debezium</b> — стандартный инструмент: публикует INSERT / UPDATE / DELETE в Kafka.',
      'Kafka буферизует поток, ClickHouse забирает его для аналитики почти в реальном времени.',
      'Боевая БД не страдает от тяжёлых аналитических запросов.',
    ],
    example: {
      title: 'Клей между двумя мирами',
      code: 'PostgreSQL → (WAL) → Debezium → Kafka → ClickHouse',
    },
    warn: {
      title: 'Важно',
      text: 'CDC — не замена хорошо спроектированному API. Продумай схему событий, эволюцию схемы и ретеншн в Kafka.',
    },
  },
  {
    slug: 'background-jobs',
    ref: '§6',
    title: 'Фоновые задачи и очереди',
    lead: 'Пользователь не должен ждать HTTP 4 минуты. Тяжёлое — в очередь.',
    points: [
      'API быстро принимает запрос, кладёт задачу в очередь и сразу отвечает «Processing started».',
      'Worker забирает задачу и делает работу асинхронно: видео, e-mail, картинки, отчёты.',
      'Получаем <b>лучший UX, масштабируемость и надёжность</b>: воркеры добавляются независимо, задачи ретраятся.',
      'Инструменты: RabbitMQ, SQS, Redis queues, BullMQ, Celery, Sidekiq.',
    ],
    example: {
      title: 'Загрузка видео',
      code: 'Upload → API (202 Accepted) → Queue → Video Worker → S3\n                                  ↳ уведомление по готовности',
    },
    warn: {
      title: 'Kafka не обязательна',
      text: 'Kafka может участвовать, но для каждой background job она не нужна. Ретраи и идемпотентность задач нужны всегда.',
    },
  },
  {
    slug: 'api-styles',
    ref: '§7',
    title: 'Стили API',
    lead: 'Нет одного лучшего протокола: у каждого своя роль.',
    points: [
      '<b>REST</b> — default почти для всего: просто, понятно, кэшируется.',
      '<b>GraphQL</b> — сложные fe/mobile, когда клиент сам выбирает поля. Гибко, но своя сложность.',
      '<b>gRPC</b> — internal между сервисами: binary + Protobuf, быстро и строго типизировано.',
      '<b>WebSocket</b> — постоянная двусторонняя связь: chat, trading, multiplayer, live dashboards.',
      'Протоколы можно сочетать в одной системе.',
    ],
    example: {
      title: 'Типичная комбинация',
      code: 'Mobile → REST / GraphQL → Gateway → gRPC → сервисы\nBrowser ⇄ WebSocket (live-обновления)',
    },
    warn: {
      title: 'GraphQL не нужен',
      text: 'Для простого CRUD REST проще и дешевле в поддержке.',
    },
  },
  {
    slug: 'docker',
    ref: '§8',
    title: 'Как работает Docker',
    lead: 'Build once, run consistently: одно окружение на laptop, в CI и в production.',
    points: [
      '<b>Image</b> = код + runtime + зависимости + системные библиотеки в одном артефакте.',
      '<b>Container</b> — запущенный image, изолированный и переносимый.',
      'Конец «у меня работает»: одинаковые версии, зависимости и окружение везде.',
      'Сейчас это базовое знание для backend-разработчика.',
    ],
    example: {
      title: 'Минимальный Dockerfile',
      code: 'FROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nCMD ["node", "server.js"]',
    },
    warn: {
      title: 'Docker ≠ Kubernetes',
      text: 'Docker упаковывает приложение. Запускать его можно и без k8s — на ECS, Cloud Run, Fly.io, Render.',
    },
  },
  {
    slug: 'kubernetes',
    ref: '§8',
    title: 'Как работает Kubernetes',
    lead: 'Оркестратор: управляет сотнями контейнеров вместо тебя.',
    points: [
      '<b>Auto scaling</b> — добавляет и убирает pod-ы по нагрузке (CPU, RPS).',
      '<b>Self-healing</b> — упавший pod заменяется автоматически.',
      '<b>Rolling deployments</b> — плавное обновление без даунтайма.',
      '<b>Service discovery + load balancing</b> — сервисы находят друг друга по имени.',
      '<b>Config / Secrets</b> — конфигурация и чувствительные данные отдельно от image.',
    ],
    example: {
      title: 'Стратегии выката',
      code: 'rolling     — постепенная замена pod-ов\nblue-green  — два окружения, мгновенный переключатель\ncanary      — 5% трафика на новую версию, потом больше',
    },
    warn: {
      title: 'Маленькой команде k8s часто лишний',
      text: 'Хватит ECS, Cloud Run, Fly.io или Render. Kubernetes — когда действительно много сервисов и есть кому им заниматься.',
    },
  },
  {
    slug: 'serverless',
    ref: '§9',
    title: 'Как работает Serverless',
    lead: 'Код запускается по событию, провайдер управляет инфраструктурой.',
    points: [
      'Цикл: запрос → функция стартует → выполняет → отвечает → исчезает.',
      '<b>Плюсы:</b> авто-масштабирование, платишь за использование, не администрируешь серверы.',
      '<b>Cold start</b> — первый вызов после простоя медленнее. Warm start — инстанс уже жив.',
      '<b>Лимиты</b> по времени выполнения и ресурсам; нет локального состояния.',
      'Платформы: AWS Lambda, Cloudflare Workers, Vercel / Netlify Functions, GCP Functions.',
    ],
    example: {
      title: 'Где подходит',
      code: 'webhooks · интеграции · небольшие API · background tasks ·\nнерегулярная нагрузка',
    },
    warn: {
      title: 'Подводный камень: соединения с БД',
      text: 'Каждый инстанс функции открывает своё соединение — нужен pooling (PgBouncer, Data API), иначе Postgres упрётся в лимит соединений.',
    },
  },
  {
    slug: 'api-gateway',
    ref: '§10',
    title: 'API Gateway',
    lead: 'Единая защищённая входная дверь для всех клиентов.',
    points: [
      'Делает сквозные задачи в одном месте: <b>auth, routing, TLS, rate limiting, load balancing, logging</b>.',
      'Клиенты (mobile, web, partners) видят один адрес, а не десяток сервисов.',
      'Внутри — Auth, Users, Orders, Payments, каждый со своей БД.',
      'Reverse proxy и gateway: Nginx, Envoy, Traefik, Kong, облачные gateways.',
    ],
    example: {
      title: 'Маршрутизация',
      code: 'Internet → API Gateway → { /auth | /users | /orders | /payments }',
    },
    warn: {
      title: 'На что смотреть',
      text: 'Gateway может стать единой точкой отказа и добавляет латентность. Нужен мониторинг и масштабирование самого шлюза.',
    },
  },
  {
    slug: 'jwt',
    ref: '§11',
    title: 'Как работает JWT',
    lead: 'Подписанный, но не зашифрованный токен: подтверждает, что данные не изменены.',
    points: [
      'Структура: <b>Header . Payload . Signature</b> (base64url, через точки).',
      'Flow: логин → сервер проверяет пароль → выпускает JWT → клиент хранит → шлёт в <code>Authorization: Bearer</code> → сервер проверяет подпись и срок.',
      'Stateless: серверу не нужна сессия в БД — всё внутри токена.',
      'Короткий <b>access-token</b> + долгий <b>refresh-token</b>; на вебе — HttpOnly cookie.',
    ],
    example: {
      title: 'Заголовок запроса',
      code: 'GET /profile\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIs…',
    },
    warn: {
      title: 'Типичные ошибки',
      text: 'Не клади секреты в payload — его может прочитать каждый. Всегда проверяй exp и подпись. Не храни токены в localStorage без нужды.',
    },
  },
  {
    slug: 'oauth',
    ref: '§11',
    title: 'OAuth 2.0 + OpenID Connect',
    lead: 'AuthN — кто ты, AuthZ — что тебе можно. Это две разные вещи.',
    points: [
      '<b>OAuth 2.0</b> — делегированный доступ: «что приложению разрешено делать от твоего имени» (access token).',
      '<b>OpenID Connect</b> — слой аутентификации поверх OAuth: «кто пользователь» (ID token).',
      'Flow: Sign in → редирект на Authorization Server → логин → code → обмен на токены → вызов API.',
      '<b>AuthZ-модели:</b> RBAC (по ролям), ABAC (по атрибутам).',
      'Готовые сервисы: Auth0, Clerk, Keycloak, Cognito.',
    ],
    example: {
      title: 'Sign in with Google',
      code: 'App → Google (Authorization Server) → code → App обменивает на access + ID token\nID token = кто, access token = что разрешено',
    },
    warn: {
      title: 'Security шире auth',
      text: 'Ещё: secrets management (Vault), валидация ввода, rate limiting, TLS, OWASP Top 10.',
    },
  },
  {
    slug: 'iac',
    ref: '§12',
    title: 'Infrastructure as Code',
    lead: 'Когда серверов много, кликать в UI — плохо. Инфраструктура как версионируемый код.',
    points: [
      'Опиши инфраструктуру в коде: VPC, балансировщики, БД, Redis, контейнеры, S3.',
      'Цикл: <b>Plan → Review → Apply</b> — видишь изменения до применения.',
      'Плюсы: повторяемость, ревью через pull request, история в Git, меньше ошибок руками.',
      'Инструменты: Terraform / OpenTofu, Pulumi, CloudFormation.',
    ],
    example: {
      title: 'Terraform',
      code: 'resource "aws_s3_bucket" "files" {\n  bucket = "my-app-files"\n}\n\n$ terraform plan\n$ terraform apply',
    },
    warn: {
      title: 'Ручной режим',
      text: 'Клики в консоли долгие, подвержены ошибкам и не воспроизводимы: «а кто это поменял?».',
    },
  },
  {
    slug: 'ci-cd',
    ref: '§13',
    title: 'CI/CD: от git push до production',
    lead: 'Backend-разработчик понимает не только API, но и как код становится работающим сервисом.',
    points: [
      'Конвейер: <b>push → tests → build → package (Docker image) → registry → deploy → health check</b>.',
      'Каждое изменение проходит автоматические проверки: unit, integration, линтеры, security.',
      '<b>Стратегии выката:</b> rolling, blue-green, canary.',
      '<b>Feature flags</b> отделяют деплой от релиза: код уже в проде, фича включается позже.',
      'Инструменты: GitHub Actions, GitLab CI, Jenkins, CircleCI.',
    ],
    example: {
      title: 'Feature flag',
      code: 'if (flags.newDashboard) {\n  renderNewDashboard()\n} else {\n  renderOldDashboard()\n}',
    },
    pick: ['Автоматизируй повторяющееся, фокус — на важном.'],
  },
  {
    slug: 'observability',
    ref: '§14',
    title: 'Observability',
    lead: 'Почему сегодня API отвечает 800 ms вместо 120? Нужны данные, а не догадки.',
    points: [
      '<b>Metrics</b> (Prometheus) — что происходит: latency p95/p99, RPS, ошибки, CPU.',
      '<b>Logs</b> (ELK, Loki, Datadog) — что случилось: структурные JSON-логи с correlation ID.',
      '<b>Traces</b> (OpenTelemetry) — как запрос шёл через сервисы и где потерял время.',
      '<b>Dashboards</b> (Grafana) — всё вместе, плюс алерты.',
    ],
    example: {
      title: 'Distributed tracing показывает, где болит',
      code: 'iOS → Gateway 20ms → Order 40ms → Payment 600ms ⚠ → PostgreSQL 15ms',
    },
    warn: {
      title: 'Новички забывают',
      text: 'Production — не только написать код. Без observability ты не узнаешь о проблеме раньше пользователя.',
    },
  },
  {
    slug: 'resilience',
    ref: '§15',
    title: 'Resilience: сеть ненадёжна',
    lead: 'Отказы — норма. Хорошая система грамотно переживает их.',
    points: [
      '<b>Timeout → Retry (backoff + jitter) → Circuit breaker</b> — правильная цепочка защиты.',
      '<b>Circuit breaker</b>: Closed → Open (вызовы блокируются) → Half-open (пробуем снова).',
      '<b>Idempotency</b> — повтор запроса не должен ломать данные (ключ идемпотентности).',
      '<b>Bulkhead</b> — изолируй ресурсы, чтобы падение одного сервиса не утянуло остальные.',
      '<b>Graceful degradation</b> — падает часть функций, ядро работает.',
    ],
    example: {
      title: 'Без breaker — каскад',
      code: 'Payment тормозит 600ms → ретраи множатся → очередь растёт → падает всё\nС breaker: быстро отказываем → fallback → система жива',
    },
    warn: {
      title: 'Ретраи без лимитов',
      text: 'Бездумные повторы усиливают проблему. Всегда: таймаут, backoff с jitter и breaker.',
    },
  },
  {
    slug: 'testing',
    ref: '§16',
    title: 'Стратегия тестирования',
    lead: 'Найди проблему в 800 ms до production, а не в observability после.',
    points: [
      '<b>Unit</b> — много, быстро, дёшево: логика в изоляции.',
      '<b>Integration</b> — против настоящих Postgres и Redis через <b>Testcontainers</b>, а не моков.',
      '<b>Contract (Pact)</b> — сервисы не ломают друг друга при выкатке.',
      '<b>End-to-end</b> — мало, медленно, дорого: критичные пользовательские сценарии.',
      '<b>Load testing</b> (k6, Locust) — латентность, throughput, ошибки под нагрузкой.',
    ],
    example: {
      title: 'Пирамида',
      code: '      E2E        (мало)\n    Contract\n  Integration\nUnit             (много)',
    },
    warn: {
      title: 'В картах почти всегда отсутствует',
      text: 'Чем раньше найдёшь проблему, тем она дешевле. Тестируй рано и часто.',
    },
  },
  {
    slug: 'architecture-evolution',
    ref: '§17',
    title: 'Эволюция архитектуры',
    lead: 'Нет единственной правильной архитектуры — есть та, что подходит твоему контексту.',
    points: [
      '<b>Monolith</b> — один backend, одна БД. Для большинства новых проектов это правильный старт, а не «плохо».',
      '<b>Modular Monolith</b> — один деплой, чёткие модули внутри. Часто лучший вариант для нового продукта.',
      '<b>Microservices</b> — свой деплой, БД, scaling и команда на сервис. Плюс большим организациям, overhead маленьким.',
      '<b>Правило:</b> начинай просто, усложняй, когда больно.',
    ],
    example: {
      title: 'Путь',
      code: 'Monolith → Modular Monolith → Microservices\n(каждый шаг — когда есть реальная боль, а не мода)',
    },
    warn: {
      title: 'Когда микросервисы не нужны',
      text: 'Нет отдельных команд и независимого масштабирования — монолит быстрее и дешевле. Проверь себя по Fallacies of Distributed Computing.',
    },
  },
  {
    slug: 'event-driven',
    ref: '§17',
    title: 'Event-driven архитектура',
    lead: 'Синхронное и асинхронное общение могут жить вместе.',
    points: [
      '<b>Sync request/response</b> — когда нужен немедленный ответ: пользователь ждёт (создать заказ).',
      '<b>Async events</b> — когда реакция может подождать: уведомления, аналитика, склад.',
      'Order Service публикует <code>ORDER_CREATED</code>; Payment, Notification, Analytics, Warehouse реагируют сами.',
      'Event-driven — <b>стиль взаимодействия</b>, а не модель деплоя: работает и в монолите, и в микросервисах.',
    ],
    example: {
      title: 'Цепочка событий',
      code: 'Order → ORDER_CREATED → Payment → PAYMENT_COMPLETED → Warehouse, Notification',
    },
    warn: {
      title: 'Цена подхода',
      text: 'Eventual consistency, сложнее отладка, нужны идемпотентность и observability. Используй для decoupling, где это окупается.',
    },
  },
  {
    slug: 'system-design',
    ref: '§19 · §20',
    title: 'Как всё соединяется',
    lead: 'Не «что такое Redis» абстрактно, а почему архитектор поставил именно эту коробку именно сюда.',
    points: [
      '<b>Client → Edge (CDN, LB) → API Gateway → сервисы → Data layer</b>.',
      'Асинхронные потоки через Kafka/очереди идут в Analytics (ClickHouse) и Notifications.',
      'Файлы — S3 + CDN; кэш — Redis; фоновая работа — очередь и workers.',
      'Поверх всего — Observability (метрики, логи, трейсы) и trade-offs на каждом слое.',
    ],
    example: {
      title: 'Instagram-like backend',
      code: 'Mobile → API Gateway → User Service → PostgreSQL\n                     → Feed Service → Redis\nPostgres → Kafka → Analytics → ClickHouse\n                 → Notifications\nImages → S3 → CDN',
    },
    pick: [
      '<b>Kafka</b> не нужна, если событий меньше сотен тысяч.',
      '<b>Kubernetes</b> не нужен маленькой команде — хватит ECS / Cloud Run / Fly.io.',
      '<b>MongoDB</b> не нужна при реляционных данных — Postgres + JSONB лучше.',
      '<b>Redis</b> не нужен без реальной проблемы latency.',
      '<b>Elasticsearch</b> — не основная БД. <b>Vector DB</b> — хватит pgvector. <b>GraphQL</b> — для простого CRUD избыточен.',
    ],
    warn: {
      title: 'Читая схему',
      text: 'К каждой коробке спрашивай: какую ось компромисса она обслуживает и что отдаёт взамен?',
    },
  },
];
