# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview built site locally
npm run astro check  # Type-check all .astro files (runs in CI on PRs)
```

## Architecture

This is an **Astro 5** personal portfolio site (demborg.se) deployed to GitHub Pages on push to `master`.

**Content-driven**: Projects live as markdown files in `src/content/projects/`. Each project folder contains a markdown file plus any co-located assets (images, videos). The content schema in `src/content/config.ts` enforces a discriminated union — every project must be one of three types:

- `video`: Has a `video` field (path string) and optional `poster` image
- `iframe`: Has an `iframe` field (URL)
- `images`: Has an `images` array (at least one image)

All types share `date`, `title`, `intro`, and optional `links`.

**Rendering flow**:
- `src/pages/index.astro` — fetches all projects, sorts by date, renders a grid of `ProjectCard` components
- `src/pages/projects/[...slug].astro` — dynamic route for individual project pages; switches on `type` to render `Video`, `Iframe`, or `Images` component
- `src/layouts/Layout.astro` — base layout wrapping all pages with `Nav` and Pico CSS

**Visual components** (`src/components/visual/`):
- `Images.astro` — responsive image carousel with vanilla JS; shows 1–3 slides based on viewport width, auto-advances via ping-pong animation
- `Video.astro` — HTML5 video (autoplay, loop, muted)
- `Iframe.astro` — lazy-loaded iframe with microphone permission

## Adding a New Project

Create a folder under `src/content/projects/` with an `index.md` (or `.mdx`) and any assets. The frontmatter must match one of the three typed schemas in `config.ts`.
