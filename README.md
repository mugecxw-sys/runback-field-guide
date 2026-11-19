# RUNBACK Field Guide

A community field guide for players: builds, routes, tier lists, enemy intel, and planning tools — as a fast, statically rendered multi-game site.

**Live:** *(custom domain — add here once confirmed)*

## Games covered

The library is data-driven from `lib/game-catalog.ts` (slug, status, guide count, categories, source link). Twelve games are live:

`brotato` · `wanderburg` · `repo` · `cult-of-the-lamb` · `deep-rock-galactic` · `gamble-with-your-friends` · `hades-ii` · `lost-castle-2` · `risk-of-rain-2` · `sephiria` · `yet-another-zombie-survivors` · `void-breaker`

Four of them have dedicated page trees (`sephiria` is the largest; `void-breaker` keeps an internal data layer; `repo` was the original focus). The rest are served by the `app/games/[game]/[slug]` route backed by `lib/game-articles.json`. Adding a game starts in the catalog, not in a new folder.

## Stack

- **Framework** — [`vinext`](https://www.npmjs.com/package/vinext) (Next.js-compatible API) with React 19 + React Server Components
- **Build** — Vite 8 + `@cloudflare/vite-plugin` + `@openai/sites-vite-plugin`
- **Styling** — Tailwind CSS 4, shadcn, `@base-ui/react`
- **Runtime** — Cloudflare **Workers** (`wrangler`), output in `dist/server/wrangler.json`
- **Tooling** — `oxlint`, `oxfmt`; Node `>= 22.13.0`

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build (runs data validation in prebuild)
npm run start    # serve the build through wrangler
npm run lint
npm run format
```

## Project structure

```
app/            routes and pages (keep them thin; logic lives in lib/)
components/     UI — components/ui holds shadcn primitives
lib/            data, copy, and calculation logic
  sephiria-planner/   damage / stat planning (unit tested)
  sephiria-builds/    build presets + validation
public/data/    versioned item data (JSON)
public/images/  images, grouped by game
public/videos/  site videos (large — see "Assets")
tests/          unit tests and build-time validation
scripts/        navigation / structure / theme checkers
templates/      page and article templates
```

## Data conventions

- Item data is **versioned in the filename**: `public/data/sephiria-items-1.1.4.json`. The current version lives in `lib/sephiria-current-version.ts`.
- Historical versions are kept on purpose so tools can compare across patches.
- Internal-only data stays in `*.internal.json` / `*-internal.ts` and is never rendered directly.
- Every stat should be traceable to a **source, a game version, and a sampling basis**. Numbers without provenance do not belong in page copy.
- Icons live under `public/images/games/<game>/`; keep the manifest in sync and always ship a fallback.

## Assets

`public/images` is roughly 120 MB and `public/videos` roughly 370 MB. Cloudflare serves static assets with a **25 MiB per-file limit**, so large media is being moved to object storage (R2) and referenced by URL. Until that migration lands, a local clone can skip video files:

```bash
git sparse-checkout set --no-cone '/*' '!/public/videos/**'
```

Assets are the property of their respective game developers. Icons are used for identification and commentary; do not redistribute raw game archives from this repository.

## Deployment

Build with `npm run build`, which produces `dist/server/wrangler.json` for Cloudflare Workers. Deployment is handled on the Cloudflare side (project integration or `wrangler deploy`) — check the project settings before publishing.

## Contributing

Read `AGENTS.md` before changing anything. It lists the hard rules (no unsolicited changes), the stack constraints, data conventions, known environment pitfalls, and the acceptance checklist every change must pass.

## 中文说明

- 这是多游戏 wiki / 攻略站，正文英文，开发沟通中文。
- 改任何东西前先读 `AGENTS.md`（含铁律、验收标准、本机环境坑）。
- 常用：`npm install` → `npm run dev`；提交前 `npm run lint` 和 `npm run build`。
- 视频暂未纳入本地克隆，需要时执行上面的 `git sparse-checkout` 命令补全。
