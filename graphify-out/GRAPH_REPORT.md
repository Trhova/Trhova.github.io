# Graphify Report

## Overview

- Repo: `Trhova/Trhova.github.io`
- Stack: `Next.js 14` + `React 18` + `TypeScript` + `Tailwind CSS` + local `MDX`
- Deployment: static export via GitHub Actions to GitHub Pages
- Main purpose: personal website with content-driven sections and an internal guides system

## Top-level structure

- `app/`
  - App Router pages and shared app shell
  - Includes core site routes and the `/guides` route family
- `components/`
  - shared UI primitives and navigation
  - `components/guides/` contains guide-only presentation blocks
- `content/guides/`
  - MDX source for published guides
- `data/`
  - editable JSON/TS content registries for public site sections
- `lib/`
  - guide lookup and heading extraction helpers
- `.github/workflows/deploy-pages.yml`
  - build and deploy pipeline for GitHub Pages

## Key nodes

- `app/layout.tsx`
  - root layout and metadata base
- `components/SiteNav.tsx`
  - top navigation for the entire site
- `components/GuidesMenu.tsx`
  - desktop guides dropdown
- `app/guides/page.tsx`
  - guides landing page
- `app/guides/[slug]/page.tsx`
  - published guide renderer
- `data/guides.ts`
  - source of truth for guide metadata, ordering, and published vs coming-soon state
- `content/guides/index.ts`
  - explicit slug-to-MDX module map
- `content/guides/bulk-rna-seq.mdx`
  - current live guide content
- `lib/guides.ts`
  - guide lookup and TOC extraction

## Content/data flow

1. Shared site shell comes from `app/layout.tsx`, `components/SiteNav.tsx`, and `components/SiteFooter.tsx`.
2. Standard site pages pull most editable content from `data/*.json`.
3. Guide navigation and landing-page metadata come from `data/guides.ts`.
4. Published guide pages resolve through `app/guides/[slug]/page.tsx`.
5. That route reads metadata from `data/guides.ts`, content modules from `content/guides/index.ts`, and heading data from `lib/guides.ts`.
6. Guide content is rendered inside `components/guides/GuidePageLayout.tsx` with guide-specific presentation components.

## Guides subsystem

- Published guide requirements:
  - entry in `data/guides.ts` with `status: "published"`
  - matching MDX file in `content/guides/`
  - matching module entry in `content/guides/index.ts`
- Coming-soon guide requirements:
  - entry in `data/guides.ts` with `status: "coming-soon"`
  - no route or MDX file required

## Notes

- `graphify-out/` is a lightweight repo-local artifact snapshot so future architecture questions can anchor on a stable summary even when the external Graphify tool is not installed in the environment.
