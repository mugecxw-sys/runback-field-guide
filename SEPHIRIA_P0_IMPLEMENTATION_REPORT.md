# Sephiria Wiki P0 Implementation Report

## Routes

15 structural pages: the Sephiria game hub, Wiki landing page, eight category indexes, and five system pages.

## Data collections

- Weapons: 6
- Weapon upgrades: 18
- Artifacts: 45
- Tablets: 6
- Costumes: 7
- Hard Mode named records: 6
- Bosses / minibosses: 4
- Grimoires: 1 named related record

Internal verification/source fields are separated into a maintenance-only registry, not passed to public pages or Search. Nullable current fields are not rendered. Runtime validation checks unique IDs/slugs, names, internal status coverage, and relation targets.

## Shared UI

Reuses `GameWikiShell`, `GameWikiHero`, `GameWikiCategoryCard`, and `GameWikiArticleLayout`. The shared shell gained a config switch to suppress its Sources/About link for Sephiria only; Wanderburg keeps the existing default. `TabletPatternGrid` is data-driven, supports cell types/values and rotation, and renders nothing without a pattern.

## Legacy migration

Eleven old Sephiria guide URLs use the repository's existing permanent redirect configuration. Vinext's App Router emits HTTP 308 for these redirects (not 301). Their guide records are excluded from public search and sitemap; the source JSON remains available for internal audit. See `SEPHIRIA_LEGACY_URL_AUDIT.md`.

## QA

Passed: changed-files lint, TypeScript, production build, record validation, route/H1/TOC/heading-ID/content-language checks for all 15 routes, sitemap inclusion for all 15 routes, Search checks including aliases, and responsive overflow checks at 1440/768/390. Eleven legacy URLs were checked and return 308 permanent redirects to verified 200 destinations. Wanderburg Reference, Builds, Modules, Captains, and Artifacts returned HTTP 200 at desktop and 390px with one H1 and no horizontal overflow. Full-project lint reports 28 existing errors, all in unrelated unchanged files. Automated tests are not configured. Production deployment was not performed.

## Current data gaps

Current effects, rarity, weapon branches, tablet patterns/rarity, costume effects, and unprovided boss details remain unpublished. No individual detail pages were generated. No new external links were added.
