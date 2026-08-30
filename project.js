const localized = (en, ru) => ({ en, ru });

const technologyIcons = {
  'TypeScript': 'devicon-typescript-plain colored',
  'JavaScript': 'devicon-javascript-plain colored',
  'React': 'devicon-react-original colored',
  'Next.js': 'devicon-nextjs-plain',
  'Node.js': 'devicon-nodejs-plain colored',
  'NestJS': 'devicon-nestjs-original colored',
  'Fastify': 'devicon-fastify-plain',
  'Express': 'devicon-express-original',
  'Vite': 'devicon-vitejs-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-original colored',
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'Prisma': 'devicon-prisma-original',
  'Redis': 'devicon-redis-plain colored',
  'Docker': 'devicon-docker-plain colored',
  'Nginx': 'devicon-nginx-original colored',
  'Telegram API': { img: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg', alt: 'Telegram logo' },
  'Swift': 'devicon-swift-plain colored',
  'AppKit': 'devicon-apple-original',
  'Tauri': 'devicon-tauri-plain colored',
  'Svelte': 'devicon-svelte-plain colored',
  'ffmpeg': { img: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ffmpeg.svg', alt: 'FFmpeg logo' }
};

const projects = {
  taskhunt: {
    title: 'TaskHunt', type: 'MARKETPLACE', year: '2025', image: 'assets/taskhunt-og.jpg', visualClass: 'taskhunt',
    liveUrl: 'https://taskhunt.lol', repoUrl: 'https://github.com/aferapokitaysky/taskhuntweb', next: 'sho-events',
    summary: localized('A freelance marketplace where clients and freelancers share one flow for orders, milestones, chat and NOWPayments crypto escrow.', 'Фриланс-платформа, где заказчик и фрилансер работают в одном потоке: заказы, этапы, чат и крипто-эскроу через NOWPayments.'),
    role: localized('Full-stack: client, API, data and deployment', 'Full-stack: клиент, API, данные и деплой'),
    scope: localized('Web app / admin / payment flow', 'Веб-приложение / админка / платежи'),
    status: localized('Public project', 'Публичный проект'),
    problemTitle: localized('Keep the work process and money state understandable for both sides.', 'Сделать процесс работы и состояние денег понятными обеим сторонам.'),
    problemBody: localized('A client creates an order, a freelancer bids, and both need one place for milestones, files, chat, invoices and acceptance. The admin needs role-based access, dispute tools and a separate way to flag risky orders and users.', 'Заказчик создаёт заказ, исполнитель откликается, а дальше обоим нужен один понятный поток: этапы, файлы, чат, инвойсы и приёмка. Администратору нужны разграничение прав, инструменты для споров и отдельный механизм для выявления подозрительных заказов и пользователей.'),
    built: [
      localized('Google, GitHub and Apple OAuth alongside email sign-up, with role selection and an onboarding questionnaire.', 'Вход через Google, GitHub и Apple вместе с регистрацией по email, выбором роли и анкетой при онбординге.'),
      localized('Orders, bids, milestones, work submission, reviews and disputes, plus catalog search and matching.', 'Заказы, отклики, этапы, сдача работы, отзывы и споры, а также каталог, поиск и подбор заказов.'),
      localized('WebSocket order chat with automatic invoice and receipt cards.', 'Чат заказа по WebSocket с автоматическими карточками инвойсов и чеков.'),
      localized('A double-entry wallet ledger with escrow lock, release and refund through NOWPayments.', 'Учёт баланса на основе двойной записи и сценарии блокировки, выплаты и возврата эскроу через NOWPayments.'),
      localized('Admin RBAC, configurable commissions, feature flags and support tickets with their own chat.', 'RBAC в админке, настраиваемые комиссии, feature flags и тикеты поддержки со своим чатом.')
    ],
    tech: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'Docker'],
    notes: [
      { label: 'BACKEND', title: localized('Money logic stays together', 'Денежная логика собрана вместе'), body: localized('Transactions and core business rules live in the main NestJS monolith; notifications and fraud scoring run as separate event-driven workers.', 'Транзакции и основные бизнес-правила находятся в главном NestJS-монолите; уведомления и риск-скоринг выполняются отдельными событийными воркерами.') },
      { label: 'DATA', title: localized('Ledger before balance', 'Сначала журнал, потом баланс'), body: localized('Balance changes are recorded as ledger entries so payment history can be checked instead of inferred from one number.', 'Изменения баланса записываются отдельными проводками, поэтому историю платежей можно проверить, а не восстанавливать по одному числу.') },
      { label: 'SECURITY', title: localized('Uploads are scanned before they land', 'Загруженные файлы проверяются заранее'), body: localized('Files go to S3-compatible storage through a ClamAV antivirus scan, and every payment route sits behind role-based access checks.', 'Файлы попадают в S3-совместимое хранилище через антивирусную проверку ClamAV, а каждый платёжный маршрут закрыт проверкой прав по ролям.') }
    ]
  },
  'sho-events': {
    title: 'SHO Events', type: 'EVENT WEBSITE', year: '2025', image: 'assets/shoeven-og.jpg', visualClass: 'sho',
    liveUrl: 'https://shoevents.org', repoUrl: 'https://github.com/aferapokitaysky/sho-events', next: 'anonymous-creo',
    summary: localized('A multilingual website for a premium event agency, with its own SVG icon set and a small API for lead delivery.', 'Мультиязычный сайт премиального event-агентства с собственным набором SVG-иконок и небольшим API для доставки заявок.'),
    role: localized('Frontend, forms API and deployment', 'Фронтенд, API форм и деплой'),
    scope: localized('Website / lead delivery / i18n', 'Сайт / доставка заявок / локализация'),
    status: localized('Live website', 'Сайт запущен'),
    problemTitle: localized('Present different event formats without turning the website into a generic catalogue.', 'Показать разные форматы событий и не превратить сайт в обычный каталог.'),
    problemBody: localized('The website needed separate pages, three languages and an editorial, custom-built visual style, while the contact flow had to stay short and reliable on mobile.', 'Сайту нужны были отдельные страницы, три языка и авторский, нешаблонный визуальный стиль, а форма заявки должна была оставаться короткой и надёжной на мобильных устройствах.'),
    built: [
      localized('A React single-page app for services, formats, partners and contacts, with a custom SVG icon set and Framer Motion transitions instead of a UI kit.', 'React SPA для услуг, форматов, партнёров и контактов с собственным набором SVG-иконок и переходами на Framer Motion вместо готового UI-кита.'),
      localized('Typed content for Russian, English and Slovak, sharing one interface so no text can be missed for a language.', 'Типизированный контент на русском, английском и словацком в рамках одного интерфейса, из-за чего ни один текст не может быть пропущен для языка.'),
      localized('Express endpoints with validation and rate limiting (20 requests per 15 minutes) for the contact and partner forms.', 'Express-эндпоинты с валидацией и rate limit (20 запросов за 15 минут) для форм заявки и партнёрства.'),
      localized('Structured Telegram notifications for every submission, plus a token-protected endpoint to review stored requests.', 'Структурированные Telegram-уведомления по каждой заявке и защищённый токеном эндпоинт для просмотра сохранённых заявок.')
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Express', 'Tailwind CSS', 'Telegram API'],
    notes: [
      { label: 'CONTENT', title: localized('Text is separated from components', 'Тексты отделены от компонентов'), body: localized('Each language has its own typed content file that implements one shared interface, so page components hold no translation conditions.', 'Для каждого языка есть отдельный типизированный файл, реализующий общий интерфейс, поэтому в компонентах страниц нет условий для переводов.') },
      { label: 'FORMS', title: localized('The lead path stays small', 'Короткий путь заявки'), body: localized('The server validates and trims the fields, rate-limits repeated requests and sends one structured Telegram message without blocking the response.', 'Сервер проверяет и очищает поля, ограничивает повторные запросы и отправляет одно структурированное сообщение в Telegram, не блокируя ответ клиенту.') },
      { label: 'UI', title: localized('Motion supports the content', 'Анимация поддерживает контент'), body: localized('Framer Motion transitions and a custom icon library carry the design, while forms and navigation stay conventional and keyboard accessible.', 'Переходы на Framer Motion и собственная библиотека иконок несут дизайн, а формы и навигация остаются привычными и доступны с клавиатуры.') }
    ]
  },
  'anonymous-creo': {
    title: 'Anonymous Creo', type: 'TELEGRAM MINI APP', year: '2025', image: 'assets/anoncreo-logo.png', visualClass: 'creo',
    liveUrl: 'https://t.me/anoncreo_bot', repoUrl: null, next: 'slate-capital',
    summary: localized('A Telegram Mini App that produces ad creatives on demand for traffic-arbitrage teams — order, pay and download inside one bot.', 'Telegram Mini App для продакшена рекламных креативов под арбитраж трафика — заказ, оплата и выдача материалов в одном боте.'),
    role: localized('Full-stack Mini App development', 'Full-stack разработка Mini App'),
    scope: localized('Telegram / creative orders / admin', 'Telegram / заказы на креативы / админка'),
    status: localized('Live Telegram bot', 'Работает в Telegram'),
    problemTitle: localized('Turn one-off creative requests into a repeatable ordering flow inside Telegram.', 'Превратить разовые запросы на креативы в повторяемый процесс заказа внутри Telegram.'),
    problemBody: localized('Arbitrage teams need a steady stream of fresh ad images and short videos without emailing a studio back and forth. The whole flow had to live inside Telegram — place an order, pay from balance, track status and download the result — while managers needed their own view of the order queue, balances and referrals.', 'Командам арбитража нужен постоянный поток свежих рекламных картинок и коротких видео без переписки со студией по почте. Весь процесс должен был жить внутри Telegram — оформить заказ, оплатить с баланса, отследить статус и скачать результат, — а менеджерам требовался отдельный вид на очередь заказов, балансы и рефералов.'),
    built: [
      localized('Telegram-native onboarding via Telegraf, with client and manager roles split from the first session.', 'Онбординг прямо в Telegram через Telegraf с разделением ролей клиента и менеджера с первой сессии.'),
      localized('An order flow for ad creatives — brief, format and quantity — paid from the in-app balance before work starts.', 'Оформление заказа на креативы — бриф, формат и количество — с оплатой с баланса приложения до начала работы.'),
      localized('A background ffmpeg pipeline that renders and packages the finished creatives, with live job status in the Mini App.', 'Фоновый пайплайн на ffmpeg, который собирает и упаковывает готовые креативы, со статусом задачи прямо в Mini App.'),
      localized('A referral program with attributed sign-ups and balance payouts.', 'Реферальная программа с привязкой регистраций и выплатами на баланс.'),
      localized('A separate manager view of the order queue, balances and uploaded media.', 'Отдельный интерфейс менеджера для очереди заказов, балансов и загруженных материалов.')
    ],
    tech: ['TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Redis', 'Telegram API', 'ffmpeg', 'Docker'],
    notes: [
      { label: 'ACCESS', title: localized('Telegram is the entry point', 'Telegram — точка входа'), body: localized('The Mini App uses Telegram identity via Telegraf for the first session and maps it to internal roles and permissions.', 'Mini App использует Telegram-профиль через Telegraf при первом входе и связывает его с внутренними ролями и правами.') },
      { label: 'JOBS', title: localized('Media work does not block requests', 'Медиа не блокирует запросы'), body: localized('Long media operations run in the background while the API returns a job state to the interface.', 'Долгие операции с файлами выполняются в фоне, а API возвращает интерфейсу состояние задачи.') },
      { label: 'PRODUCT', title: localized('The bot itself is public', 'Сам бот публичный'), body: localized('Anonymous Creo runs live as @anoncreo_bot on Telegram — the source and admin screens stay private, but the ordering flow described here is exactly what real users go through.', 'Anonymous Creo работает как @anoncreo_bot в Telegram — исходный код и экраны админки закрыты, а описанный здесь процесс заказа — именно то, через что проходят реальные пользователи.') }
    ]
  },
  'slate-capital': {
    title: 'Slate Capital', type: 'FINANCE WEBSITE', year: '2025', image: 'assets/slate-og.png', visualClass: 'slate',
    liveUrl: 'https://slate-capital.com', repoUrl: 'https://github.com/aferapokitaysky/slate-capital-site', next: 'player',
    summary: localized('A trading-education landing page with an admin control room, a 1:1 live preview and per-language link previews for messengers and search engines.', 'Лендинг для обучения трейдингу с админ-панелью, live preview 1-в-1 и корректными превью ссылок для мессенджеров и поисковиков на каждом языке.'),
    role: localized('Website, admin panel, API and deployment', 'Сайт, админка, API и деплой'),
    scope: localized('Content / SEO / admin', 'Контент / SEO / админка'),
    status: localized('Live website', 'Сайт запущен'),
    problemTitle: localized('Let the owner update offers without breaking layout or messenger previews.', 'Дать владельцу менять предложения, не ломая вёрстку и превью в мессенджерах.'),
    problemBody: localized('The public pages had to stay fast, dependency-free and bilingual. At the same time, the admin needed full control over the offer cards while seeing the exact on-site result before saving, and every shared link needed a correct preview in the right language.', 'Публичные страницы должны были оставаться быстрыми, без лишних зависимостей и двуязычными. При этом в админке требовался полный контроль над карточками предложений с точным превью результата до сохранения, а каждая расшаренная ссылка должна была получать корректное превью на нужном языке.'),
    built: [
      localized('A vanilla HTML/CSS/JS frontend with instant EN/RU switching and no framework overhead.', 'Фронтенд на чистых HTML/CSS/JS с мгновенным переключением EN/RU без накладных расходов фреймворка.'),
      localized('An admin control room with full CRUD, ordering and visibility toggles for offer cards.', 'Админ-панель с полным CRUD, сортировкой и переключателями видимости карточек предложений.'),
      localized('A split-screen live preview that renders the exact public card 1:1 while editing, in either language.', 'Live preview со сплит-экраном, который отрисовывает карточку 1-в-1 как на сайте прямо во время редактирования, на любом языке.'),
      localized('Express middleware that rewrites Open Graph, Twitter and language meta tags per locale before HTML is sent, so Telegram, Discord and Facebook previews and Google/Yandex indexing stay correct.', 'Express-мидлвар, который подменяет Open Graph, Twitter и языковые метатеги под локаль до отдачи HTML — превью в Telegram, Discord и Facebook и индексация в Google/Яндекс остаются корректными.'),
      localized('JWT + bcrypt admin auth over httpOnly cookies, with PostgreSQL storage that falls back to an in-memory store when the database is unreachable.', 'JWT + bcrypt аутентификация админки через httpOnly cookies и хранение в PostgreSQL с автоматическим переходом на in-memory режим, если база недоступна.')
    ],
    tech: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Nginx'],
    notes: [
      { label: 'EDITOR', title: localized('Preview matches the public card 1:1', 'Превью совпадает с карточкой 1-в-1'), body: localized('The split-screen editor renders the same card component the site uses and lets the owner switch preview language before saving.', 'Редактор со сплит-экраном использует тот же компонент карточки, что и сайт, и позволяет переключить язык превью до сохранения.') },
      { label: 'SHARING', title: localized('Metadata is set before HTML is sent', 'Метаданные готовы до отдачи HTML'), body: localized('Server middleware injects locale-specific Open Graph and Twitter tags so messenger crawlers and search engines receive the correct preview per language.', 'Серверный мидлвар подставляет метатеги Open Graph и Twitter под нужную локаль, поэтому краулеры мессенджеров и поисковики получают корректное превью на каждом языке.') },
      { label: 'RESILIENCE', title: localized('The admin still works without a database', 'Админка работает и без базы данных'), body: localized('If PostgreSQL is unreachable, the server falls back to a secure in-memory store seeded from .env, so local development and demos never hard-fail.', 'Если PostgreSQL недоступен, сервер переключается на защищённое in-memory хранилище на основе .env, поэтому локальная разработка и демо не падают.') }
    ]
  },
  player: {
    title: 'Aferapokitaysky Player', type: 'DESKTOP APPLICATION', year: '2024–25', image: 'assets/logo.png', visualClass: 'player',
    liveUrl: 'https://aferapokitaysky.app', repoUrl: 'https://github.com/aferapokitaysky/music-player', next: 'taskhunt',
    summary: localized('A native, glassmorphic macOS media player with a notch mini-player and a terminal UI, plus an experimental Windows interface built with Tauri.', 'Нативный медиаплеер для macOS в стиле glassmorphism с мини-плеером под вырезом экрана и терминальным режимом, плюс экспериментальный Windows-интерфейс на Tauri.'),
    role: localized('Desktop UI, native integration and builds', 'Desktop UI, нативная интеграция и сборка'),
    scope: localized('macOS / Windows prototype', 'macOS / прототип Windows'),
    status: localized('macOS app / Windows in progress', 'macOS-приложение / Windows в работе'),
    problemTitle: localized('Build a desktop player that behaves like part of the operating system.', 'Сделать плеер, который ощущается частью операционной системы.'),
    problemBody: localized('On macOS the app needed native windows, media keys and a compact notch player, plus a way to control it without touching the UI at all. The Windows branch explores the same interface in a Tauri shell and is clearly kept as a work in progress.', 'На macOS приложению нужны были нативные окна, медиаклавиши, компактный плеер под вырезом экрана и способ управлять им вообще без интерфейса. Windows-ветка повторяет этот интерфейс в Tauri и остаётся прототипом в разработке.'),
    built: [
      localized('A fully transparent, glassmorphic main window built with AppKit and SwiftUI, using native macOS materials instead of a web wrapper.', 'Полностью прозрачное главное окно в стиле glassmorphism на AppKit и SwiftUI, с нативными материалами macOS вместо web-обёртки.'),
      localized('A notch mini-player with ambient glow and a particle backdrop, plus a real-time audio visualizer with four render modes.', 'Мини-плеер под вырезом экрана с окружающей подсветкой и фоном из частиц, а также аудио-визуализатор реального времени с четырьмя режимами отображения.'),
      localized('Spotify and SoundCloud web login with tokens stored in Keychain, and in-app track search.', 'Web-вход в Spotify и SoundCloud с хранением токенов в Keychain и поиском треков прямо в приложении.'),
      localized('A terminal UI mode (--cli) that drives playback, search and library navigation entirely from the command line.', 'Терминальный режим (--cli), из которого можно полностью управлять воспроизведением, поиском и библиотекой.'),
      localized('An experimental Tauri and Svelte Windows shell that mirrors the interface; playback and visualizer data are still simulated.', 'Экспериментальная Windows-оболочка на Tauri и Svelte, повторяющая интерфейс; воспроизведение и данные визуализатора пока симулируются.')
    ],
    tech: ['Swift', 'AppKit', 'Tauri', 'Svelte', 'TypeScript'],
    notes: [
      { label: 'MACOS', title: localized('Native where system behavior matters', 'Нативно там, где важно поведение системы'), body: localized('Window materials, media keys, Keychain, the notch mini-player and the terminal UI all use platform APIs instead of a web wrapper.', 'Материалы окон, медиаклавиши, Keychain, мини-плеер под вырезом и терминальный режим используют системные API, а не web-обёртку.') },
      { label: 'BUILD', title: localized('The macOS build can run without Xcode', 'Сборка macOS не требует Xcode'), body: localized('A shell script discovers Swift sources and compiles the application with the command-line Swift toolchain.', 'Shell-скрипт находит Swift-файлы и собирает приложение через консольный Swift toolchain.') },
      { label: 'WINDOWS', title: localized('Prototype status is explicit', 'Статус прототипа указан прямо'), body: localized('The Tauri branch mirrors the interface, but audio decoding and real frequency data are not presented as finished.', 'Ветка на Tauri повторяет интерфейс, но декодирование аудио и реальные данные частот не выдаются за готовую функцию.') }
    ]
  }
};

const copy = {
  back: localized('Projects', 'Проекты'), open: localized('Open site', 'Открыть сайт'), projectFile: localized('Project file', 'Карточка проекта'),
  role: localized('Role', 'Роль'), scope: localized('Scope', 'Объём'), status: localized('Status', 'Статус'), inside: localized('Inside the project', 'О проекте'),
  task: localized('The task', 'Задача'), built: localized('What I built', 'Что сделано'), technology: localized('Technology', 'Технологии'),
  stackHeading: localized('Tools used in this project.', 'Инструменты, использованные в проекте.'), stackBody: localized('Only the technologies that had a clear job in the product.', 'Только технологии, у которых была конкретная задача в продукте.'),
  notes: localized('Implementation notes', 'Детали реализации'), next: localized('Next project', 'Следующий проект'), contact: localized('Contact', 'Связаться'),
  github: localized('Source on GitHub', 'Код на GitHub'), detailsUnavailable: localized('Private project', 'Закрытый проект')
};

document.addEventListener('DOMContentLoaded', () => {
  const key = new URLSearchParams(window.location.search).get('project') || 'taskhunt';
  const project = projects[key] || projects.taskhunt;
  let language = localStorage.getItem('portfolio-language') || 'en';
  const pick = (value) => typeof value === 'string' ? value : value[language];
  const byId = (id) => document.getElementById(id);

  const render = () => {
    document.documentElement.lang = language;
    document.title = `${project.title} — ptrkxlord`;
    document.querySelector('meta[name="description"]').content = pick(project.summary);
    document.querySelectorAll('[data-copy]').forEach((element) => { element.textContent = pick(copy[element.dataset.copy]); });
    byId('case-lang').textContent = language === 'en' ? 'RU' : 'EN';
    byId('case-title').textContent = project.title;
    byId('case-type').textContent = project.type;
    byId('case-year').textContent = project.year;
    byId('case-summary').textContent = pick(project.summary);
    byId('case-role').textContent = pick(project.role);
    byId('case-scope').textContent = pick(project.scope);
    byId('case-status').textContent = pick(project.status);
    byId('case-problem-title').textContent = pick(project.problemTitle);
    byId('case-problem-body').textContent = pick(project.problemBody);
    byId('case-image').src = project.image;
    byId('case-image').alt = `${project.title} preview`;
    byId('case-visual').className = `case-visual ${project.visualClass}`;
    byId('case-mark').textContent = project.title.slice(0, 2).toUpperCase();

    const liveLink = byId('case-live');
    liveLink.hidden = !project.liveUrl;
    if (project.liveUrl) liveLink.href = project.liveUrl;

    const actions = byId('case-actions');
    actions.replaceChildren();
    if (project.liveUrl) actions.appendChild(createLink(project.liveUrl, `${pick(copy.open)} ↗`, 'case-action case-action-primary', 'Open'));
    if (project.repoUrl) actions.appendChild(createLink(project.repoUrl, `${pick(copy.github)} ↗`, 'case-action', 'GitHub'));
    if (!project.liveUrl && !project.repoUrl) {
      const privateLabel = document.createElement('span');
      privateLabel.className = 'case-private';
      privateLabel.textContent = pick(copy.detailsUnavailable);
      actions.appendChild(privateLabel);
    }

    const builtList = byId('case-built-list');
    builtList.replaceChildren();
    project.built.forEach((item, index) => {
      const row = document.createElement('li');
      row.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><p>${pick(item)}</p>`;
      builtList.appendChild(row);
    });

    const techGrid = byId('case-tech-grid');
    techGrid.replaceChildren();
    project.tech.forEach((technology) => {
      const card = document.createElement('article');
      card.className = 'case-tech-card';
      card.tabIndex = 0;
      const icon = technologyIcons[technology] || 'devicon-devicon-plain';
      const iconMarkup = typeof icon === 'string'
        ? `<i class="${icon}" aria-hidden="true"></i>`
        : `<img src="${icon.img}" alt="${icon.alt}">`;
      card.innerHTML = `<div class="case-tech-logo">${iconMarkup}</div><b>${technology}</b><small>PROJECT TOOL</small>`;
      techGrid.appendChild(card);
    });

    const noteGrid = byId('case-note-grid');
    noteGrid.replaceChildren();
    project.notes.forEach((note) => {
      const article = document.createElement('article');
      article.innerHTML = `<span>${note.label}</span><h3>${pick(note.title)}</h3><p>${pick(note.body)}</p>`;
      noteGrid.appendChild(article);
    });

    const nextProject = projects[project.next];
    byId('case-next-title').textContent = nextProject.title;
    byId('case-next-link').href = `project.html?project=${project.next}`;
    const projectKeys = Object.keys(projects);
    byId('case-next-count').textContent = `${String(projectKeys.indexOf(project.next) + 1).padStart(2, '0')} / ${String(projectKeys.length).padStart(2, '0')}`;
    const nextImage = byId('case-next-image');
    nextImage.src = nextProject.image;
    nextImage.alt = `${nextProject.title} preview`;
  };

  const createLink = (href, label, className, cursorLabel) => {
    const link = document.createElement('a');
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = className;
    link.textContent = label;
    if (cursorLabel) link.dataset.cursor = cursorLabel;
    return link;
  };

  byId('case-lang').addEventListener('click', () => {
    language = language === 'en' ? 'ru' : 'en';
    localStorage.setItem('portfolio-language', language);
    render();
    registerReveals();
  });

  const progress = byId('case-progress');
  window.addEventListener('scroll', () => {
    const scrollLimit = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${scrollLimit > 0 ? window.scrollY / scrollLimit : 0})`;
  }, { passive: true });

  const cursor = byId('case-cursor');
  const magnetSelector = '.case-action, .case-live, .case-next a, .case-back, .case-wordmark';
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cursorLabel = cursor.querySelector('.case-cursor-label');
    window.addEventListener('pointermove', (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.add('visible');
    });
    document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    document.addEventListener('pointerdown', () => cursor.classList.add('click'));
    document.addEventListener('pointerup', () => cursor.classList.remove('click'));
    document.addEventListener('pointerover', (event) => {
      const techCard = event.target.closest('.case-tech-card');
      const interactive = event.target.closest('a, button, [data-cursor]');
      cursor.classList.toggle('tech', Boolean(techCard));
      if (techCard) { cursorLabel.textContent = ''; return; }
      cursor.classList.toggle('hot', Boolean(interactive));
      cursorLabel.textContent = interactive ? (interactive.dataset.cursor || (interactive.tagName === 'A' ? 'Open' : 'Select')) : '';
    });
    document.addEventListener('pointerout', (event) => {
      if (event.target.closest('.case-tech-card')) cursor.classList.remove('tech');
      if (event.target.closest('a, button, [data-cursor]')) {
        cursor.classList.remove('hot');
        cursorLabel.textContent = '';
      }
    });
    document.addEventListener('pointermove', (event) => {
      const magnet = event.target.closest(magnetSelector);
      if (!magnet) return;
      const rect = magnet.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * .08;
      const y = (event.clientY - rect.top - rect.height / 2) * .08;
      magnet.style.transform = `translate(${x}px, ${y}px)`;
    });
    document.addEventListener('pointerout', (event) => {
      const magnet = event.target.closest(magnetSelector);
      if (magnet) magnet.style.transform = '';
    });
  }

  byId('case-year-current').textContent = new Date().getFullYear();
  render();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealObserver = reducedMotion ? null : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -7%' });

  const registerReveals = () => {
    document.querySelectorAll('.case-story-copy, .case-built, .case-tech-heading, .case-tech-card, .case-note-grid article').forEach((element) => {
      if (element.classList.contains('case-reveal')) return;
      element.classList.add('case-reveal');
      if (revealObserver) revealObserver.observe(element);
      else element.classList.add('in-view');
    });
  };

  registerReveals();
  window.requestAnimationFrame(() => document.body.classList.add('case-loaded'));
});
