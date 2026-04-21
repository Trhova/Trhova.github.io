# Troels Site Wiki

## Quick map

- App shell: `app/layout.tsx`
- Main nav: `components/SiteNav.tsx`
- Guides nav dropdown: `components/GuidesMenu.tsx`
- Guides landing page: `app/guides/page.tsx`
- Dynamic guide page: `app/guides/[slug]/page.tsx`
- Guide registry: `data/guides.ts`
- Guide content map: `content/guides/index.ts`
- Guide content source: `content/guides/*.mdx`
- Guide helpers: `lib/guides.ts`
- Guide visual system: `components/guides/*`

## Editing rules

- Most normal site content lives in `data/*.json`
- Guide metadata lives in `data/guides.ts`
- Guide prose lives in `content/guides/*.mdx`
- Published guides need both metadata and a mapped MDX module
- Coming-soon guides only need metadata

## Deploy

- Build locally with `npm run build`
- Push to `main`
- GitHub Actions deploys the static export to GitHub Pages
