# ptrkxlord portfolio

Personal trilingual portfolio published at [portfolio.aferapokitaysky.app](https://portfolio.aferapokitaysky.app/). The project cases are available in English, Russian and Ukrainian.

The site is a static project with no build step:

- `index.html` — content, SEO metadata and EN/RU/UA text;
- `project.html` — shared project-detail page selected through the `project` query parameter;
- `css/style.css` — responsive layout, 3D technology reel and interaction styles;
- `css/project.css` — project-page layout, cardboard technology cards and motion;
- `js/main.js` — language switching, scroll effects, custom cursor, GitHub data and canvas background;
- `js/project.js` — trilingual project data, navigation and detail-page rendering;
- `assets/` — project images, logos, portrait and favicon;
- `sitemap.xml`, `robots.txt` — search indexing.

The selected work includes TaskHunt, SHO Events, Anonymous Creo, Slate Capital, Aferapokitaysky Player and KGTA Alert. KGTA Alert is an internal campus system; automatic alerts are disabled by default and require approval of the sources, scenarios and audio equipment setup. Its Windows edge service can keep local playback running without the central server; the operator PWA still requires a server connection.

The KGTA Alert mark in `assets/kpk-logo-512.png` is taken from the project's `Watcher.Api/wwwroot/images` assets.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

GitHub Pages publishes the `main` branch. The custom domain is configured in `CNAME`.
