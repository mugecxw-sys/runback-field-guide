# Wanderburg Complete Reference Guide: Core Loop, Modules, Vehicles, Bosses and Map Data

> **Last updated:** 2026-09-16  
> **Coverage:** Early Access / current community-tested data, checked against official hotfixes through 0.9.10

> Sources: user-provided Chinese screenshots captured on 2026-09-16, compared with the Wanderburg community Wiki and official Steam announcements.  
> **Version notice:** The official Steam feed shows hotfixes through 0.9.10 as of 2026-09-16. Exact values below that come only from the supplied test/reference material remain source-capture values, not confirmed current constants. Recheck them after game updates. Any item marked “needs verification” should not be treated as a permanent rule without a game version.

## Page scope and navigation

This is a data-focused reference page for players who already understand the basic loop and want to look up mechanics, tables, or unlock rules. Recommended Wiki structure:

1. [Core Loop and Controls](#core-loop-and-controls)
2. [Upgrades, Difficulty and Run Flow](#upgrades-difficulty-and-run-flow)
3. [Vehicles and Chassis](#vehicles-and-chassis)
4. [Modules and Unlocks](#modules-and-unlocks)
5. [Captains, Crew and Artifacts](#captains-crew-and-artifacts)
6. [Enemies, Bosses and Non-Consumable Targets](#enemies-bosses-and-non-consumable-targets)
7. [Maps, Stages and Tasks](#maps-stages-and-tasks)
8. [Mechanics, Bugs and Open Questions](#mechanics-bugs-and-open-questions)

## Core Loop and Controls

### Run structure

- One map equals one run.
- Each run has four stages, with separate enemy pools, wave tables, swarm events and bosses.
- The goal is not to duel the boss immediately. Consume low-risk targets to grow, then build enough size, health and module synergy before the boss arrives.
- Stage progression is tied to taking an upgrade card. Before the card is selected, the run remains in the current stage and enemy pool.
- After an upgrade is selected, remaining armies disappear, survivors are pushed back, module cooldowns reset and the stage timer returns to zero. The boss does not immediately end the run when the timer expires; the clearing period can still be used as an escape window.

### Stage timers and boss spawn data

| Stage | Boss spawn time | Spawn distance |
|---|---:|---:|
| 1 | 210 seconds | 120–150 |
| 2 | 240 seconds | 120–180 |
| 3 | 200 seconds | 180–210 |
| 4 | 160 seconds | 240–250 |

> Boss timers are the same across maps in the supplied data. Swarm events usually occur before the boss, beginning with an elite vehicle followed about two seconds later by a large group. Recorded swarm timings are approximately 70–122 seconds and occur earlier at higher stage levels.

### Controls

| Action | Keyboard and mouse | Controller |
|---|---|---|
| Turn / drive | W/A/S/D, or point toward a target; the castle turns toward the pointer | Left stick or D-pad |
| Aim | Mouse pointer or direction keys | Right stick |
| Nitro boost | Left Shift | Left trigger |
| Module ability 1 | Q | Y / Triangle |
| Module ability 2 | E | B / Circle |
| Module ability 3 | R | A / Cross |
| Module ability 4 | Space | X / Square |
| Confirm / interact | Left click, Space, Enter, Right Ctrl | Right trigger |
| Control overlay | Tab | Select / View |
| Stats screen (pause) | Ctrl | Right shoulder button |
| Pause menu | Esc | Start / Menu |

In selection screens, Q/E move the highlight, R performs an available discard/action, Enter confirms and Backspace returns.

## Upgrades, Difficulty and Run Flow

### Upgrade count and castle level

| Event | Castle level afterward | Reward |
|---|---:|---|
| Run start | 0 | — |
| Boss 1 defeated | 1 | Defense or movement card |
| Boss 2 defeated | 2 | Defense or movement card |
| Boss 3 defeated | 3 | Defense or movement card |
| Boss 4 defeated | 3 (cap) | None; victory only |

Boss kills do not directly restore health. They provide an invulnerability window and one upgrade; the upgrade raises maximum health, which can make the health bar appear refilled. Small health crates restore approximately 10%, large crates approximately 25%. Map repair facilities are the only complete-heal source recorded in the supplied material.

### Difficulty

There is no traditional standalone difficulty selector; choosing a map also chooses the difficulty. The supplied data records map damage multipliers from 0.50 on Green Plains to 1.40 on Wasteland, a range of roughly 2.8×. Enemy health, speed and projectile speed are treated as 1× across maps at the same stage. Most difficulty comes from enemy pools, waves, swarm composition and boss lineups.

## Vehicles and Chassis

### Vehicle overview

| Vehicle | Role and characteristics | Key values in the supplied data |
|---|---|---|
| Wanderturm | 1/1/1/1 layout; can equip side, rear and top modules; average health and speed; the only chassis affected by terrain | Speed approximately 18/20/23/26 per level; health approximately 200 (needs verification) |
| Spiderburg | Fastest chassis at each level, best turning and ignores terrain; lowest health | Speed approximately 22/24/26/28; level-3 health approximately 150; starts with two top slots |
| Tankenburg | Highest health, largest nitro pool, poor speed and recovery; ignores terrain | Level-3 health approximately 300; starts with two front slots |

> **Important restriction (source-capture value):** An N-level castle can consume enemy vehicles of size level ≤ N. This is a common reason a boss cannot be consumed, but the exact size rule is not independently confirmed by the current official notes cited here. The supplied notes also flag possible differences between the advertised and observed turning behavior; verify this in the current build.

## Modules and Unlocks

### Module slots

- Wanderturm starts with one top, one front and one rear slot.
- Spiderburg starts with two top slots.
- Tankenburg starts with two front slots.
- Slots do not increase during a run; an empty slot cannot be used to begin a run.
- Top-slot modules include Fire Mage, Lightning Mage, Top Mortar, Archer Tower, Cannon Tower, Archers and Fire Archers.

### Unlock ladder

- New modules appear at player levels 3, 12 and 24.
- Module level 5 unlocks a special module; level 10 unlocks a legendary module; level 15 unlocks a second special module.
- Special and legendary choices are exclusive A/B selections. Crew slots skip this check.
- The ladder cannot be skipped: taking tier N inserts tier N+1.
- “Reroll upgrade” is not simply a reroll of one card; it redistributes upgrade strength. The supplied notes record four strength levels per upgrade, which should be verified in the current version.
- Tasks requiring modules generally check that the module is both owned and equipped. Owning it without equipping it does not count.

## Captains, Crew and Artifacts

### Choosing a captain

Choose a captain around the problem your build needs to solve, rather than rarity alone:

- For stable ranged pressure, prioritize archer or cannon synergies.
- For crowd control, prioritize mage, mortar or fire-based modules.
- For pursuit or retreat, prioritize nitro, mobility or ramming synergies.
- For sustain, prioritize healing, damage reduction or tools that reliably create safe windows.

The existing English Wiki also separates Captains, Modules, Crew and Artifacts into dedicated reference pages, but does not cover the complete numerical tables found in the supplied screenshots. The data in this draft is best split into those database pages with a version field retained on every entry.

### Key progression rules

- Cards read the post-upgrade castle level; earlier choices do not permanently override later checks.
- The supplied notes record Wanderturm defense as approximately +75 / +125 / +175 per selection, or about +375 over three selections on a 200-health chassis. Bind this value to a game version.
- Movement values are recorded as +6 maximum speed, +15 maximum nitro and +0.5 nitro recovery. The official 0.9.8 hotfix states that Nitro regeneration starts 0.5 seconds after using boost; treat this as a 0.9.8 behavior, not a permanent rule. Later official hotfix summaries checked here do not state that this delay was reverted.

## Enemies, Bosses and Non-Consumable Targets

### Non-consumable targets

The supplied material describes 25 targets within one size/“fullness” tier and additional higher-tier targets marked as inedible. The heavy encyclopedia units listed are Axeman, Triple Cannon Tank, Caravan, two Spiked Ball families and 13 boss records; two are neutral hunting targets.

#### City

- Health: 5,000
- Reward: 8 silver
- Three per run: one in stage 3 and two in stage 4
- When marked inedible, it cannot be consumed simply by increasing your size; it must be destroyed or handled by a later condition.

#### Reaper

- Health: 10,000
- Reward: 100 gold + 10 silver
- Can acquire pickups from allied and enemy drops.

### Why a target refuses to be consumed

| Reason | Condition | Response |
|---|---|---|
| Temporarily too large | Target is larger than the player, but the difference is no more than 3 size levels | Defeat the next boss, then return |
| Permanently too large | Target is size level 4+ | Shoot it; no level can consume it |
| Marked inedible | Chest Walker, City, Reaper, Boss or Artifact Tower | Shoot it |

### Boss order

| Stage | Grasslands | Desert | Dark Forest |
|---|---|---|---|
| 1 | Taurus Drillus | Rostenschild | Schnittburg |
| 2 | Fressburg | King Klopp | Burg Schnappenstein |
| 3 | Bombardia | Saturna Raketa | Rammi |
| 4 | Dark Tower | The Ancient | Kanoningen |

> Names are kept in the English/game spelling from the supplied material. Final localization should be checked against the in-game language files before publication.

### Boss health table

| Boss | Map 1 | Map 2 | Map 3 |
|---|---:|---:|---:|
| Taurus Drillus | 2,000 | 3,000 | 4,500 |
| Fressburg | 5,500 | 5,500 | 14,000 |
| Bombardia | 7,000 | 13,000 | 18,500 |
| Dark Tower | 9,500 | 16,000 | 22,000 |
| Rostenschild | 1,800 | 2,800 | 2,800 |
| King Klopp | 5,500 | 8,000 | 8,000 |
| Saturna Raketa | 8,000 | 12,000 | 12,000 |
| The Ancient | 12,000 | 12,000 | 12,000 |
| Schnittburg | 2,000 | 2,000 | 6,000 |
| Burg Schnappenstein | 5,500 | 5,500 | 9,500 |
| Rammi | 7,000 | 7,000 | 16,000 |
| Kanoningen | 12,000 | 12,000 | 24,000 |

**Conflict requiring caution:** The supplied table is not reconciled with the current community database, which lists the standard Tier 0/1/2/3 bosses as 1,800 / 4,500 / 6,000 / 10,000 HP and labels Dark Tower separately at approximately 10,000 HP. Keep the table above only as a versioned source-capture table; do not present it as a current universal boss-health table until in-game testing or database evidence resolves the discrepancy. The supplied notes about Desert scaling and The Ancient are likewise unverified here.

## Maps, Stages and Tasks

### Recommended map-page structure

Every map page should include:

- Damage multiplier
- Enemy pool for all four stages
- Wave timing and unit composition
- Swarm event
- Boss order, spawn distance and health
- Special targets such as Cities, Reapers and Artifact Towers
- Map-specific tasks and rewards

The English Wiki already provides Biomes and Map and Core Mechanics entries, but those pages focus on general gameplay. This material is best used to add a map database and boss data tables.

### Task-writing rules

Task pages should distinguish “owned” from “equipped”:

- “Own module” checks unlock status.
- “Equip module” requires the module to be installed in a valid slot on the current vehicle.
- Combination tasks should list the minimum valid combination, slot requirements and whether special/legendary variants are allowed.

## Mechanics, Bugs and Open Questions

### Mechanics suitable for direct publication

- Boss spawn timers are recorded in the supplied material, but are not established as the same across all maps by the current sources checked here. For example, the community stage database lists Golden Dunes Stage 2 at 240 seconds, while the current progression guide gives Dark Forest Stage 1 as 180 seconds.
- Before an upgrade is selected, the run remains in the old stage; the next stage begins after selection.
- Boss kills do not directly restore health, but the resulting upgrade raises maximum health.
- Repair facilities fully restore health; health crates only restore a portion.
- Module unlocks use a level ladder and cannot be skipped in the supplied capture; keep this version-scoped until the unlock registry is checked against the current client.
- Tasks generally require a module to be both owned and equipped.

### Values that need version labels

- Wanderturm defense, speed and health growth.
- Nitro recovery delay.
- Vehicle turning speed and terrain effects.
- Boss health, spawn distance and swarm timing.
- Exact effects and appearance weights of special and legendary modules.

### Bug and unexplained-mechanic records

The original material includes several cases where in-game text may differ from observed behavior. Publish these in a separate Known Issues and Testing page with the fields: `version`, `reproduction steps`, `expected behavior`, `observed behavior`, `scope` and `still present?`. Do not turn an unverified community claim into a confirmed mechanic.

## Comparison with the Existing Wanderburg Wiki

As of 2026-09-16, the English community Wiki covers beginner guidance, controls, progression, bosses, maps/biomes, modules, captains, crew and artifacts. Its progression guide describes Gold as run/shop currency and Silver as persistent upgrade currency; its enemy database is explicitly labeled as launch-build data. See [Getting Started](https://wanderburggame.wiki/guides/getting-started/), the [Progression Guide](https://wanderburggame.wiki/guides/progression/), and the [Enemy Database](https://wanderburggame.wiki/players/enemies/). Official version changes should be taken from the [Steam announcements](https://steamcommunity.com/app/3624140/allnews/).

This page adds:

1. Searchable tables for the numerical data found in the supplied screenshots.
2. Boss timing, distance, map order and health in one reference section.
3. Explicit rules for non-consumable targets, size restrictions, unlock ladders and “owned vs. equipped” task checks.
4. Version and verification flags for values likely to change after patches, including an explicit warning where current community data conflicts with the supplied table.

## Image Inventory for Upload

The following images were extracted from the supplied ZIP. Upload them to the site with descriptive filenames:

| Suggested filename | Use |
|---|---|
| `wanderburg-castle-city.png` | City target illustration |
| `wanderburg-boss-example.png` | Boss illustration |
| `wanderburg-vehicle-wanderturm.png` | Wanderturm / vehicle illustration |
| `wanderburg-vehicle-spiderburg.png` | Spiderburg vehicle icon |
| `wanderburg-vehicle-tankenburg.png` | Tankenburg vehicle icon |
| `wanderburg-captains-overview-01.png` | Captain reference group |
| `wanderburg-module-unlock-ladder.png` | Module unlock ladder |
| `wanderburg-boss-hp-table.png` | Boss health table screenshot |
| `wanderburg-map-and-task-table.png` | Map and task table screenshot |

> **Copyright and publishing note:** These images came from user-provided screenshots/material. Confirm usage rights before publication. Game art, Wiki screenshots and community submissions should have separate source credits.

## Editorial note

This page is ready for publication as a community reference. Numerical values are tied to the source capture date and should be versioned when the game changes. For future updates, preserve the previous value in the page history and add the new build number beside the replacement value.
