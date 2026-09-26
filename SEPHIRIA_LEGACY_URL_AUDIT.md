# Sephiria Legacy URL Audit

The existing Next.js redirect configuration in Vinext supports permanent redirects as HTTP 308. This is the project's existing permanent-redirect behavior; it does not emit 301 for App Router config redirects.

| Old URL | Type | Useful Data | Destination | Action |
| --- | --- | --- | --- | --- |
| `/games/sephiria/beginner-guide-weapons-artifacts-and-the-inventory-grid` | Beginner guide | Generic advice only; no unique supported data retained. | `/games/sephiria/wiki` | 308 permanent redirect |
| `/games/sephiria/build-choices-a-safe-weapon-and-one-supported-artifact-family` | Build guide | Generic advice only; no unique supported data retained. | `/games/sephiria/wiki` | 308 permanent redirect |
| `/games/sephiria/hard-mode-preparation-survive-the-opening-rooms` | Hard Mode guide | Generic preparation advice; named current scope is retained on Hard Mode page. | `/games/sephiria/wiki/hard-mode` | 308 permanent redirect |
| `/games/sephiria/anvil-upgrades-choose-the-branch-your-build-supports` | Upgrade guide | Generic advice only; no unique supported data retained. | `/games/sephiria/wiki/weapon-upgrades` | 308 permanent redirect |
| `/games/sephiria/weapon-evolution-commit-to-a-branch-without-breaking-the-run` | Weapon guide | Generic advice only; no unique supported data retained. | `/games/sephiria/wiki/weapon-upgrades` | 308 permanent redirect |
| `/games/sephiria/artifacts-active-effects-placement-conditions-and-replacements` | Artifact guide | Generic advice only; unsupported mechanics not migrated. | `/games/sephiria/wiki/artifacts` | 308 permanent redirect |
| `/games/sephiria/tablet-placement-read-the-pattern-and-protect-the-core` | Tablet guide | Generic advice only; no unprovided current patterns migrated. | `/games/sephiria/wiki/tablets` | 308 permanent redirect |
| `/games/sephiria/artifact-combinations-choose-a-trigger-your-weapon-repeats` | Build guide | Generic advice only; no unique supported data retained. | `/games/sephiria/wiki/artifacts` | 308 permanent redirect |
| `/games/sephiria/boss-strategy-check-the-bag-watch-the-tell-and-punish-briefly` | Boss guide | Generic combat advice; boss names retained without invented mechanics. | `/games/sephiria/wiki/bosses` | 308 permanent redirect |
| `/games/sephiria/secret-rooms-cracked-walls-and-the-library-secret-study` | Route guide | Unverified route claims not migrated. | `/games/sephiria/wiki` | 308 permanent redirect |
| `/games/sephiria/sephiria-wiki` | Legacy Wiki article | Superseded by the structural Wiki hub. | `/games/sephiria/wiki` | 308 permanent redirect |
