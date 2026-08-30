# ptrkxlord portfolio

Personal bilingual portfolio published at [portfolio.aferapokitaysky.app](https://portfolio.aferapokitaysky.app/).

The site is a static project with no build step:

- `index.html` — content, SEO metadata and EN/RU text;
- `style.css` — responsive layout, 3D technology reel and interaction styles;
- `main.js` — language switching, scroll effects, custom cursor, GitHub data and canvas background;
- `project.html` — shared project-detail page selected through the `project` query parameter;
- `project.css` — project-page layout, cardboard technology cards and motion;
- `project.js` — bilingual project data, navigation and detail-page rendering;
- `assets/` — project images, logos, portrait and favicon.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

GitHub Pages publishes the `main` branch. The custom domain is configured in `CNAME`.
