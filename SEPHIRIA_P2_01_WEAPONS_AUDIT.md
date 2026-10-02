# Sephiria P2-01 — Weapons and Weapon Upgrades

Internal audit only. This document and `lib/sephiria-wiki-internal.ts` are not imported by public pages.

## Current Version

- Reviewed on: 2026-10-02 (Asia/Shanghai).
- Latest public patch returned by TEAM HORAY's official Steam announcements feed: **1.0.33**, published 2026-09-11.
- Latest announcement: Price Update Notice, 2026-09-12; this is not a game patch.
- No patch above 1.0.33 was found. Public Overview and navigation version remain unchanged.
- Development branch: `review/sephiria-p2-01-weapons`, based on main `5f491b9`.

The current descriptions for six upgrades use their complete new definitions introduced in official 1.0.31, reviewed against the only subsequent patch, 1.0.33. That patch changes Heidi, not those six. This is a review of the latest published specification, not a claim of live-client testing. Older Before/After changes are kept in Patch History; they do not become complete current effects. In particular, Rapid Freeze Crystal's 1.0.19 bonus is superseded by 1.0.31 and is not exposed as a current bonus.

## Weapons

An em dash here means a null/absent public field. Public cards hide it entirely. Unlock entries state only the published route; no chapter, quest steps, price or other prerequisites are invented.

| Name | Alias | Mechanic | Unlock | Related Upgrades | Internal Status |
| --- | --- | --- | --- | --- | --- |
| Sword & Shield | — | Block and Special Attack: Cleave | — | Blinding Silence; Garden of Needle Ice; Prismatic Magic Wand | Official actions / explicit 1.0.31 ownership; unlock unresolved |
| Greatsword | Great Sword | Charged Whirlwind; Special Attack replacement routes | — | Bloodletting Gearblade; Lightning Greatsword “S3G”; Greatsword of Exorcism | Official Whirlwind descriptions; explicit branch records; unlock unresolved |
| Crossbow | — | Ranged ammunition, Reload; Ammo Compression upgrade route | Destiny Inscription quest | M-9200; Colossal Crossbow: Rapid Freeze Crystal | Official weapon preview and Crossbow release |
| Dagger | — | Dash Attack chains into Parry or Fury | — | Lightning Dagger | Explicit 1.0.26 combat rule and 0.7.32 ownership; unlock unresolved |
| Blade | Katana | Sheath / Unsheath states and invincibility; replacement Special Attack routes | Destiny Inscription | Cerulean Cloud Sword 'Arges' | Official 0.8.11 release inside 0.8.12; 1.0.31 branch assignment |
| Staff | — | — | Destiny Inscription | — | Official 0.11.0 unlock route; base mechanics unresolved |

The 0.8.11 English text calls Blade's unlock system “fate engraving”. It is normalized to the existing Destiny Inscription system name. The published branch state transition is used instead of treating the older Katana preview animation as the final implementation. Staff remains separate from Grimoires and has no upgrade assigned by magic-related name or tag.

## Weapon Upgrades

Exact public current strings are in `lib/sephiria-wiki-data.ts`. The summaries below separate complete latest official specifications from historical-only records.

| Name | Weapon | Current Effect | Mechanic | Patch History | Internal Status |
| --- | --- | --- | --- | --- | --- |
| Glacial Blade | — | — | — | 1.0.19: smaller Scabbard of Exorcism projectile; 50% faster charge retained; multiplicative Frost Relic interaction | History only; branch / complete current description unresolved |
| Blinding Silence | Sword & Shield | Lightning +5; Thunder's Earring +1 attack, +100 damage | Cleave triggers Thunder's Earring | — | Complete 1.0.31 definition, reviewed through 1.0.33 |
| Garden of Needle Ice | Sword & Shield | Cold +5 | Activated Ice Vine orbits the player without cooldown | — | Complete 1.0.31 definition, reviewed through 1.0.33 |
| Prismatic Magic Wand | Sword & Shield | Magic Missile Weapon Attack | Highest elemental damage; tied highest elements use Chaos | 1.0.31: replaces Magic Wand | Complete replacement definition, reviewed through 1.0.33 |
| Bloodletting Gearblade | Greatsword | Fixed Max HP; excess HP converted into damage; converted current HP restored on expiry | Bloodletting replaces Reassemble | — | Complete published behavior; fixed HP and conversion coefficient not supplied |
| M-9200 | Crossbow | Enhanced Round damage +20% | Compress at least 10 rounds for a larger Enhanced Round | — | Complete 1.0.31 definition, reviewed through 1.0.33 |
| Cerulean Cloud Sword 'Arges' | Blade | Weapon Attack -20%, Lightning scaling; Cloud Slash 5 MP; official base-power sequence and +5% per stack retained | Cloud Slash replaces Sheath; independent Storm Cloud hits grant Residual Lightning, cap 20; slash consumes all stacks | — | Complete published behavior; no inferred damage formula / threshold mapping |
| Incendium | — | — | — | 1.0.19: replaces Fire +5 with -15% Weapon Attack damage and Fire scaling | History only; branch / complete current description unresolved |
| Solis Missio | — | — | — | 1.0.19: Reignite interval 0.2s → 0.12s; 1.0.31: timer runs only during Block | History only; Block does not prove Sword & Shield ownership |
| Flame Eater: Haetae | — | — | — | 0.11.3: Slam → Flame Strike, no MP consumption; 1.0.19: faster base attack | History only; branch / current speed and description unresolved |
| Hypersensitivity | — | — | — | 1.0.19: general Special Attack +20% → Whirlwind +20%; 50% faster charging retained | History only; Whirlwind does not establish ownership by itself |
| Lightning Greatsword “S3G” | Greatsword | — | — | 0.11.0: multiplicative Electrocution fix; 1.0.19: bonus 20% → 33% | Official Greatsword identity corroborated by explicit secondary branch listing; current description unresolved |
| Greatsword of Exorcism | Greatsword | — | — | 0.12.0: charge speed 50% → 80%; 1.0.19: stat application fix | Official Greatsword identity corroborated by explicit secondary branch listing; current description unresolved |
| Mischievous Prank | — | — | — | 1.0.19: old critical/weapon bonus replaced by Leaf Explosion and Normal Attack Damage contribution | History only; old “Mischievous Play” is not assumed to be the same identity |
| Red Snake Crush | — | — | — | 1.0.19: Red Snake Eyes bonus 20% → 33%, Normal Attack reduces cooldown 2.5s | History only; branch / complete current description unresolved |
| Solis Cineris | — | — | — | 0.10.6: extra triggers limited to Weapon Attack; 1.0.19: critical bonus 33% → 36%, 2 extra activations retained | History only; branch / complete current description unresolved |
| Colossal Crossbow: Rapid Freeze Crystal | Crossbow | — | — | 1.0.19: no-arrow-consumption effect → Frost Relic +20%; 1.0.31: replaces bonus with Frost Relic: Frost Veil and Normal Attack interaction | Explicit Colossal Crossbow record; latest change is not a complete current tooltip |
| Lightning Dagger | Dagger | — | — | 1.0.19: extra damage 20% → 25% of Lightning Damage | Explicit Dagger ownership in official 0.7.32; complete current description unresolved |

## Sources / Evidence

Primary material:

- [Official Steam announcement feed](https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=2436940&count=100&maxlength=0&feeds=steam_community_announcements): latest-version check and chronological scan of all returned official announcements for the 18 identities.
- [1.0.33](https://steamcommunity.com/games/2436940/announcements/detail/692020124159312357): latest game patch; no change to the six new definitions.
- [1.0.31](https://steamcommunity.com/games/2436940/announcements/detail/692020124159312087): six explicit additions/replacement definitions, Solis Missio and Rapid Freeze Crystal changes.
- [1.0 launch / embedded 1.0.19](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1839676055887303): twelve existing upgrade changes; the relevant section is explicitly labeled 1.0.19, not merely 1.0.
- [1.0.26](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1840944183776721): Dagger Dash Attack chaining rule.
- [0.12.0](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1832700592786134): Greatsword of Exorcism charge change.
- [0.11.3](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1828441623103940): Flame Eater: Haetae attack change.
- [0.11.0](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1827626365768135): Staff unlock route and S3G fix.
- [0.10.6](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1821288646578852): Solis Cineris trigger restriction.
- [0.8.12 / embedded 0.8.11](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1810503566450829): Blade unlock route and sheathed/unsheathed states.
- [0.7.35: Crossbow](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1799817379594929): explicit unlock quest and Sword & Shield Cleave action.
- [Future Updates Preview](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1799088287950279): Crossbow reload mechanic and earlier Katana name.
- [0.7.32](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1799088287863948): explicit Dagger Lightning Dagger label and Greatsword Whirlwind descriptions.

Secondary material reviewed:

- [sephiriawiki.com weapon index](https://sephiriawiki.com/weapons), [upgrade index](https://sephiriawiki.com/weapon-upgrades), and the six 1.0.31 individual records. They reproduce patch definitions, not verified complete live tooltips.
- Explicit [Greatsword](https://sephiriawiki.com/weapons/greatsword), [Crossbow](https://sephiriawiki.com/weapons/crossbow), [Dagger](https://sephiriawiki.com/weapons/dagger) and [Staff](https://sephiriawiki.com/weapons/staff) branch listings were checked. No tag-only ownership links were copied.
- [sephiria.online weapon guide](https://sephiria.online/guides/weapons) is a community 1.0 overview. It offers no exact upgrade database; its rankings and suggested synergies are not used as hard data.

Primary/secondary URLs, review baseline and per-record decisions are stored only in `lib/sephiria-wiki-internal.ts`. Public components receive gameplay fields only.

## Publicly confirmed

- Exactly 6 weapon records and 18 original upgrade identities; Blade / Katana is one record.
- 5 weapon mechanics, 3 limited unlock routes and 10 reciprocal upgrade links.
- 10 upgrades with an explicit weapon assignment; 6 latest published current definitions; 6 mechanics; 13 records with necessary Patch History.
- No Staff upgrade or Grimoire relationship is fabricated.

## Still unresolved

**16 records** have a material missing field (counted once per record):

- Weapon unlocks: Sword & Shield, Greatsword, Dagger. The three published Destiny Inscription routes do not imply complete quest walkthroughs.
- Staff: complete current base attack mechanics.
- Twelve upgrades lack complete current effects/mechanics: Glacial Blade, Incendium, Solis Missio, Flame Eater: Haetae, Hypersensitivity, Lightning Greatsword “S3G”, Greatsword of Exorcism, Mischievous Prank, Red Snake Crush, Solis Cineris, Colossal Crossbow: Rapid Freeze Crystal, Lightning Dagger.
- Eight of those also lack explicit branch ownership: Glacial Blade, Incendium, Solis Missio, Flame Eater: Haetae, Hypersensitivity, Mischievous Prank, Red Snake Crush, Solis Cineris. Their `weapon` remains null and they have no weapon relationship.

## MANUAL_VERIFY_LIST

These are optional high-value checks only if already unlocked and available in the current save. No farming, campaign completion or new unlock grind is requested. Other missing fields stay empty.

| Item | Need to verify | Why public data is insufficient | Fastest in-game method |
| --- | --- | --- | --- |
| Staff | Base normal/special attacks and control names | Public launch note confirms access but not a complete base combat description | Select the already-unlocked Staff in the Training Grounds; capture its base tooltip and briefly try each displayed action |
| Glacial Blade | Weapon branch and full current effect | Published record supplies only a historical Artifact interaction, with no explicit branch | If already available, inspect its complete tooltip in the current inventory/testing interface and capture the displayed weapon route; skip if unavailable |
| Colossal Crossbow: Rapid Freeze Crystal | Complete current tooltip after the 1.0.31 replacement | The 1.0.19 effect was superseded; the latest patch describes a replacement action, not a full tooltip | If already available, capture the full tooltip in the testing inventory; inspect the Frost Relic: Frost Veil keyword; no damage testing required |

## QA

- Changed-files lint: PASS for all five modified TypeScript/TSX source files.
- Full-project lint: EXISTING_27_UNRELATED; the same 27 diagnostics occur in unchanged files. No unrelated lint fixes are included.
- Typecheck: PASS.
- Production build: PASS. Local QA serves the built worker at `http://127.0.0.1:8791`; this is not a production deployment.
- The installed local Oxlint, TypeScript and vinext entrypoints were invoked with Node because npm/npx are unavailable in this shell. These are the project's existing lint/typecheck/build tools; no package installation or dependency change was made.
- Data integrity: PASS. Counts are 6 / 18; original IDs, names and slugs preserved; no duplicate IDs/slugs, missing targets or non-reciprocal weapon relationships. Other categories and their page metadata, Overview, shared navigation and legacy redirects remain unchanged against the branch baseline.
- Search: PASS for all 24 names and their original anchor URLs. Katana resolves to the single Blade record.
- Public content: no source links, source/evidence/verification jargon, empty placeholders or internal audit metadata. History-only records retain null current fields.
- Responsive: PASS at 1440 and 390 for Weapons and Weapon Upgrades, including long names, Patch History, breadcrumbs, relationship links and expanded mobile navigation. DOM checks report document widths of 1425 / 375 respectively, not exceeding window widths of 1440 / 390.
- All 10 upgrade anchors and 10 reciprocal weapon links resolve to existing rendered IDs. A related-upgrade link and its return weapon link were also clicked successfully; alias filtering and mobile navigation were exercised.
- Wanderburg Modules / Captains / Artifacts: PASS at both widths, with correct active navigation, headings and canonical URLs. Existing mobile tables scroll inside their existing containers without page-level overflow; shared layout and Wanderburg source/data are not modified.
- No screenshots, temporary QA files, dependencies, build output or deployment configuration are included in this commit.
