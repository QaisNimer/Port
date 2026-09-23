# Salma Momani Portfolio

Modern Angular portfolio for Salma Momani.

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production Build

```bash
npm run build
```

## GitHub Pages Build

```bash
npm run build:github
```

The GitHub Pages build uses the repository base href `/Salma_Portfolio_CV_Updated/` and copies `index.html` to `404.html` so Angular routes can refresh correctly on GitHub Pages.

## Architecture

- `src/app/core` contains typed models, centralized portfolio/project data, and services.
- `src/app/shared/components` contains reusable UI such as the navbar, footer, project cards, and gallery.
- `src/app/features` contains lazy-loaded pages for home, about, projects, project details, and contact.
- `src/assets/projects` contains the migrated original project screenshots.
