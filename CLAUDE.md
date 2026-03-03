# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist
npm run preview   # Preview production build locally
npm run astro check  # TypeScript checking
```

Deploy manually: `npx wrangler pages deploy dist` (Cloudflare Pages; auto-deploy via git integration is also active)

## Architecture

Static portfolio site built with **Astro 5** + TypeScript (strict). Zero client-side JavaScript except a small mobile menu toggle in `Header.astro`.

**Single source of truth:** All CV/portfolio content lives in [src/content/cv.json](src/content/cv.json). Never hard-code personal data in components — always pull from this file via the utility functions in [src/lib/cv.ts](src/lib/cv.ts).

**Data flow:** `cv.json` → typed interfaces in [src/lib/types.ts](src/lib/types.ts) → utility functions in `cv.ts` → Astro components.

Key utility functions in `cv.ts`: `getCVData()`, `getFeaturedProjects()`, `getCurrentPosition()`, `getExperienceByCountry()`, `formatDate()`, `calculateDuration()`.

## Pages & Components

Four pages in [src/pages/](src/pages/): `index.astro` (home), `cv.astro`, `projects.astro`, `contact.astro`.

Components are co-located by page under [src/components/](src/components/): `layout/`, `home/`, `cv/`, `projects/`, `contact/`.

The layout chain: `Page.astro` (SEO meta/OG tags) wraps `BaseLayout.astro` (HTML shell + Header/Footer) wraps page content.

## Styling

Vanilla CSS only — no Tailwind or CSS framework. Design tokens (colors, spacing, typography) are defined in [src/styles/variables.css](src/styles/variables.css) as CSS custom properties. Dark mode is handled via `@media (prefers-color-scheme: dark)` in that file. Global resets and base typography are in [src/styles/global.css](src/styles/global.css).

Spacing uses an 8px grid (`--space-1` through `--space-20`). Layout max-widths: 800px (narrow), 1200px (content), 1400px (wide).

## Astro Config

- Output: `static` (fully pre-rendered, no SSR)
- URLs: directory format (`/cv/` not `/cv.html`)
- HTML compression enabled
- Site URL: `https://hernanleon.com`
