# Troels Site

Personal website for Troels Holger Vaaben.

This repository contains a small Next.js site for:
- a landing page / profile
- publications
- writing posts
- links and resources
- a CV page

## Stack

- `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS`

## Project structure

- `app/` — route pages and app shell
- `components/` — reusable UI components
- `data/` — editable site content such as profile, publications, and writing entries
- `public/` — static assets such as images and icons

## Content updates

Most site content is driven by files in `data/`:

- `data/profile.json` — name, tagline, links, about text
- `data/publications.json` — publication list
- `data/writing.json` — writing / post cards
- `data/inspirations.json` — curated inspirations/resources

For simple content changes, edit the JSON files first before changing page code.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

The static export is written to `out/`.

## Deployment

This repo already includes a GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.

- Push to `main`
- GitHub Actions builds the static site
- The workflow deploys the `out/` directory to GitHub Pages

### Custom domain

The workflow supports an optional repository variable:

- `PAGES_CUSTOM_DOMAIN`

If this variable is set, the build will:
- remove the project-page base path
- set the site URL to the custom domain
- generate a `CNAME` file during the Pages build

If the variable is not set, the site builds as a normal project Pages site under:

```text
https://<username>.github.io/<repository-name>/
```

## Notes

- The repository currently contains some old `.next*` build directories from earlier local runs.
- The README now documents the actual website project, not the older unrelated workflow that had previously been copied into this repository.
