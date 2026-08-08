# Portfolio — ptrkxlord

**[English](#english)** · **[Русский](#русский)**

Live site: **https://portfolio.aferapokitaysky.app**

---

<a id="english"></a>
## English

### Overview

Personal portfolio website for **ptrkxlord**, a full-stack developer and systems architect. It presents a tech-stack showcase, an in-depth look at featured production projects, an about/experience section, and contact links. Built as a static site with no framework — plain HTML, CSS, and JavaScript — deployed via GitHub Pages on a custom domain.

The site is fully bilingual (English / Russian), animated with GSAP and Lenis smooth-scroll, and pulls live GitHub stats (repos, stars, forks) to populate a repositories showcase at the bottom of the page.

### Key Features

- **Bilingual i18n toggle (EN/RU)** — every piece of copy is duplicated via `data-en` / `data-ru` attributes on the markup; `main.js` swaps `innerHTML` on toggle, persists the choice in `localStorage`, and also swaps input placeholders (`data-en-ph` / `data-ru-ph`).
- **Animated tech-stack "universe"** — an orbiting-rings visualization of core languages/frameworks plus categorized skill cards with animated proficiency bars (languages, frameworks, DevOps/infrastructure) and an auto-scrolling ticker.
- **Featured project showcase — TaskHunt** — a hero terminal-style animated panel plus a capabilities grid describing the platform's architecture (double-entry ledger, escrow, microservices, WebSocket chat, etc.).
- **Production deployments grid** — cards for three live/production projects the author built: **TaskHunt** (enterprise freelance marketplace), **Anon Creo Studio** (Telegram Mini App), and **Slate Capital** (trading platform landing/admin).
- **Architecture "dossier" modal** — a tabbed deep-dive modal (`#dossier-box`) with detailed write-ups, tech badges, and inline SVG architecture diagrams for each project (TaskHunt, Anon Creo, Slate Capital, and a "Player App" tab).
- **Hire-me / contact modal** — a secondary modal triggered from the navbar that links through to the contact section.
- **Custom cursor, floating orb canvas background, film-grain overlay, and scroll-triggered reveal animations** throughout, powered by GSAP `ScrollTrigger` and Lenis smooth scrolling.
- **Live GitHub stats widget** — fetches the author's public repos via the GitHub REST API at runtime to render repo/star/fork counts and a grid of top repositories.
- **Animated stat counters and skill bars** that count up / fill in when scrolled into view.
- **SEO/social metadata** — Open Graph, Twitter Card, JSON-LD (`Person` + `WebSite`), canonical/hreflang tags, `sitemap.xml`, and `robots.txt` for search indexing.

### Tech Stack

- **Markup/Styling**: HTML5, CSS3 (custom properties, responsive layout, no CSS framework)
- **Scripting**: Vanilla JavaScript (ES6+), no build step or bundler
- **Animation**: [GSAP](https://greensock.com/gsap/) + `ScrollTrigger`
- **Smooth scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Devicon](https://devicon.dev/) (via CDN)
- **Fonts**: Google Fonts (Inter, DM Mono)
- **Analytics**: Google tag (gtag.js)
- **Data**: GitHub REST API (client-side fetch, no backend)
- **Hosting**: GitHub Pages with a custom domain (`CNAME`)

### Project Structure

```
.
├── index.html       # Single-page markup: hero, skills, projects, about, experience, contact, modals
├── main.js          # i18n toggle, GSAP/Lenis animations, modal + dossier logic, GitHub API fetch
├── style.css        # All styling — layout, theme, responsive rules, animations
├── assets/          # Images, logos (TaskHunt, Anon Creo, Slate Capital), avatar, favicon
├── robots.txt        # Search engine crawl rules
├── sitemap.xml        # Sitemap for search indexing
└── CNAME             # Custom domain for GitHub Pages (do not modify)
```

### Setup / Local Preview

No build tools or dependencies are required — this is a static site.

```bash
git clone https://github.com/aferapokitaysky/portfolio.git
cd portfolio
open index.html          # macOS
# or serve it locally, e.g.:
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Deployment

The site deploys automatically via **GitHub Pages**, serving from the repository root on the custom domain configured in `CNAME`.

---

<a id="русский"></a>
## Русский

### Описание

Персональный сайт-портфолио **ptrkxlord** — фулл-стек разработчика и системного архитектора. Сайт демонстрирует технологический стек, подробный разбор ключевых продакшен-проектов, раздел «обо мне»/опыт и контактные ссылки. Реализован как статический сайт без фреймворков — на чистых HTML, CSS и JavaScript — и развёрнут через GitHub Pages на собственном домене.

Сайт полностью двуязычный (английский/русский), анимирован с помощью GSAP и плавного скролла Lenis, а также подгружает живую статистику GitHub (репозитории, звёзды, форки) для блока с репозиториями внизу страницы.

### Ключевые возможности

- **Переключатель языка (EN/RU)** — весь текст продублирован через атрибуты `data-en` / `data-ru` в разметке; `main.js` подменяет `innerHTML` при переключении, сохраняет выбор в `localStorage`, а также подменяет плейсхолдеры полей ввода (`data-en-ph` / `data-ru-ph`).
- **Анимированная «вселенная» технологий** — визуализация орбитальных колец с ключевыми языками/фреймворками, а также категоризированные карточки навыков с анимированными шкалами уровня (языки, фреймворки, DevOps/инфраструктура) и бегущая строка технологий.
- **Витрина ключевого проекта — TaskHunt** — анимированная панель в стиле терминала и сетка возможностей платформы (double-entry реестр, эскроу, микросервисы, WebSocket-чат и т. д.).
- **Блок продакшен-проектов** — карточки трёх реальных проектов автора: **TaskHunt** (enterprise-биржа фриланса), **Anon Creo Studio** (Telegram Mini App) и **Slate Capital** (трейдинг-платформа/админка).
- **Модальное «досье» с архитектурой проектов** — модальное окно с вкладками (`#dossier-box`), содержащее подробные описания, технологические бейджи и встроенные SVG-диаграммы архитектуры для каждого проекта (TaskHunt, Anon Creo, Slate Capital и вкладка «Player App»).
- **Модальное окно «Нанять меня» / контакты** — второе модальное окно, вызываемое из навбара, ведущее к разделу контактов.
- **Кастомный курсор, фон с плавающими «орбами» на canvas, эффект зерна плёнки и анимации появления элементов при скролле** — на базе GSAP `ScrollTrigger` и плавного скролла Lenis.
- **Виджет живой статистики GitHub** — во время выполнения запрашивает публичные репозитории автора через GitHub REST API и отображает счётчики репозиториев/звёзд/форков и сетку топ-репозиториев.
- **Анимированные счётчики статистики и шкалы навыков**, которые заполняются при попадании в область видимости.
- **SEO/социальные метаданные** — Open Graph, Twitter Card, JSON-LD (`Person` + `WebSite`), canonical/hreflang теги, `sitemap.xml` и `robots.txt` для индексации поисковиками.

### Технологический стек

- **Разметка/стили**: HTML5, CSS3 (кастомные свойства, адаптивная вёрстка, без CSS-фреймворков)
- **Скрипты**: чистый JavaScript (ES6+), без сборщика и шага сборки
- **Анимации**: [GSAP](https://greensock.com/gsap/) + `ScrollTrigger`
- **Плавный скролл**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Иконки**: [Devicon](https://devicon.dev/) (через CDN)
- **Шрифты**: Google Fonts (Inter, DM Mono)
- **Аналитика**: Google tag (gtag.js)
- **Данные**: GitHub REST API (запрос на клиенте, без бэкенда)
- **Хостинг**: GitHub Pages с собственным доменом (`CNAME`)

### Структура проекта

```
.
├── index.html       # Разметка одностраничника: hero, skills, projects, about, experience, contact, модалки
├── main.js          # Переключение языка, анимации GSAP/Lenis, логика модалок и досье, запрос к GitHub API
├── style.css        # Все стили — раскладка, тема, адаптивность, анимации
├── assets/          # Изображения, логотипы (TaskHunt, Anon Creo, Slate Capital), аватар, favicon
├── robots.txt        # Правила индексации для поисковых роботов
├── sitemap.xml        # Карта сайта для индексации
└── CNAME             # Собственный домен для GitHub Pages (не изменять)
```

### Установка / локальный просмотр

Сборка и зависимости не требуются — это статический сайт.

```bash
git clone https://github.com/aferapokitaysky/portfolio.git
cd portfolio
open index.html          # macOS
# либо запустите локальный сервер, например:
python3 -m http.server 8000
# затем откройте http://localhost:8000
```

### Деплой

Сайт автоматически разворачивается через **GitHub Pages** из корня репозитория на домене, указанном в `CNAME`.

---

© 2025 PTRKXLORD
