# Wanderburg Artifacts Wiki (0.9.14)

Artifacts are part of Wanderburg's progression and build system.

They are separate from Modules, and Wanderburg gives players dedicated Artifact rerolls when choosing between Artifact options.

This page tracks Artifact mechanics and individual Artifacts that are explicitly named in official Early Access patch notes.

> **Current coverage:** Early Access 0.9.14\
> **Last reviewed:** September 22, 2026\
> **Important:** Randwerk has not published a complete official Artifact database. This page is a verified reference, not a claim that Repair Wrench, Electric Arrow and Tinderbox are the only Artifacts in Wanderburg.

## Quick Artifact Reference

| Artifact       | What is officially confirmed             | Latest relevant patch |
| -------------- | ---------------------------------------- | --------------------- |
| Repair Wrench  | Healing changed from 25% to a flat 25 HP | 0.9.14                |
| Electric Arrow | Trigger reliability was improved         | 0.9.10                |
| Tinderbox      | An Artifact-specific bug was fixed       | 0.9.14                |

The official patch notes do not provide complete current tooltips, rarity tables or unlock conditions for these Artifacts.

When those details are not verified in the current client, RUNBACK does not fill them in from guesswork.

---

# Repair Wrench

Repair Wrench received a direct mechanical change in Hotfix 0.9.14.

Its healing changed from:

**25% healing**

to:

**25 HP healing**

This is not merely a wording change.

Percentage healing scales with the value it is calculated from, while a flat heal restores the same stated amount each time the effect applies.

## Why older guides can now be wrong

Any guide or database that still describes Repair Wrench as restoring:

**25%**

is using pre-0.9.14 information.

For the current version covered by this page, the official patch note specifies:

**25 HP**

## What the patch does not tell us

The 0.9.14 announcement does not provide a complete Repair Wrench tooltip.

From this patch alone, RUNBACK should not invent:

- exact trigger conditions
- cooldown
- rarity
- unlock requirement
- maximum uses
- additional hidden effects

Those details need current-client verification before being presented as current facts.

---

# Electric Arrow

Electric Arrow is explicitly identified as an Artifact in Hotfix 0.9.10.

That update states that:

**Electric Arrow Artifact now triggers more reliably.**

This confirms two things:

- Electric Arrow is an Artifact
- its trigger behavior had a reliability issue that was addressed in 0.9.10

## What changed?

The official announcement does not provide a numerical trigger-rate change.

It does not say:

- how often Electric Arrow should trigger
- what exact condition activates it
- its current damage
- its rarity
- its unlock requirement

For that reason, RUNBACK should not convert “triggers more reliably” into a fabricated percentage.

## Current takeaway

Very early launch footage or player reports may show Electric Arrow behaving inconsistently.

For current-version testing, use behavior from 0.9.10 or later as the baseline.

---

# Tinderbox

Tinderbox is explicitly identified as an Artifact in Hotfix 0.9.14.

The official patch notes state that the developers:

**fixed a bug with the Tinderbox artifact.**

That confirms Tinderbox as part of the current Early Access Artifact system.

However, the patch announcement does not explain:

- what the bug was
- Tinderbox's full effect
- its damage
- its trigger condition
- its rarity
- its unlock requirement

## Current takeaway

Tinderbox can be listed as a confirmed Artifact.

Its complete effect should not be reconstructed from this patch note alone.

A current-client tooltip capture is the appropriate next source for a full Tinderbox entry.

---

# Artifact Rerolls

Wanderburg has a dedicated reroll system for Artifact selections.

Two post-launch updates are important.

## Hotfix 0.9.10

The developers added additional rerolls based on permanent unlock progress.

For every:

**6 unlocked Artifacts**

you gain:

**+1 Artifact Reroll**

Modules use a separate progression rule.

This means unlocking more Artifacts can increase the number of times you can reroll Artifact choices in later runs.

---

## Hotfix 0.9.14

The developers added:

**a second Artifact reroll from the start**

This changed the baseline Artifact-selection experience again.

Older launch-day guides that describe Artifact rerolls as more limited may therefore no longer reflect the current version.

---

# Artifact Rerolls vs Module Rerolls

Wanderburg tracks the two systems separately.

## Modules

Every:

**6 unlocked Modules**

grants:

**+1 New Module Reroll**

## Artifacts

Every:

**6 unlocked Artifacts**

grants:

**+1 Artifact Reroll**

Hotfix 0.9.14 additionally added the second starting Artifact reroll.

Do not treat Module rerolls and Artifact rerolls as the same resource unless the current game UI explicitly says so.

---

# Rare Artifact Screen

Hotfix 0.9.10 also fixed:

**a softlock on the Rare Artifact screen**

This confirms that Wanderburg distinguishes at least one Rare Artifact selection context in the current Early Access system.

The patch note does not provide a complete rarity structure.

RUNBACK therefore does not infer a full Artifact rarity table from this bug fix alone.

---

# Are These All Wanderburg Artifacts?

No.

Repair Wrench, Electric Arrow and Tinderbox are the Artifacts that can currently be named confidently from the official Early Access patch history reviewed for this page.

That is not the same thing as a complete Artifact roster.

A larger roster may exist in the playable client and in community databases.

Before RUNBACK adds those entries as current facts, the important fields to verify are:

- current English name
- tooltip text
- effect
- trigger condition
- rarity
- unlock condition
- version-sensitive values

This prevents demo-era or outdated information from being mixed into the current Early Access reference.

---

# Why RUNBACK Does Not Copy a Community Artifact List

Third-party databases can be useful for discovering what needs verification.

They are not automatically proof that every listed value is current.

Wanderburg changed substantially between its demo and Early Access release, and the developers explicitly retired the Steam demo because it no longer represented the released Early Access version.

For Artifact data, this creates several possible problems:

- old tooltip wording
- changed effects
- old numerical values
- renamed items
- outdated unlock conditions
- bugs that changed observed behavior

RUNBACK therefore uses community lists as leads, not as the final evidence layer.

---

# How to Evaluate an Artifact

When looking at an Artifact during a run, separate four questions.

## 1. What does the tooltip actually say?

Use the current-client wording rather than memory from an older guide.

## 2. What triggers the effect?

Do not assume that seeing an effect once explains its full activation condition.

## 3. Does the effect solve a problem in this run?

An Artifact may be real and useful without being universally useful.

## 4. Has the Artifact changed since launch?

Repair Wrench is the clearest example.

A pre-0.9.14 guide describing 25% healing is now outdated.

---

# Artifacts and Builds

An Artifact reference and a build guide serve different purposes.

This page answers:

**What is currently confirmed about the Artifact?**

A build guide should answer:

**Why would you choose it in a particular setup?**

A confirmed Artifact effect should not automatically become:

- best Artifact
- mandatory pick
- S tier
- universal build requirement

Those conclusions require gameplay evidence beyond the existence of the effect itself.

For module mechanics, see the [Wanderburg Modules Wiki](/games/wanderburg/wiki/modules).

For Captain changes, see the [Wanderburg Captains Wiki](/games/wanderburg/wiki/captains).

For practical build directions, see the [Wanderburg Builds Guide](/games/wanderburg/builds).

For the broader patch and system overview, see the [Wanderburg Wiki & Reference](/games/wanderburg/reference). Return to the [Wanderburg game hub](/games/wanderburg) for all Wanderburg guides.

---

# What RUNBACK Still Needs to Verify

The next useful Artifact data should come from the current 0.9.14 client.

Priority fields are:

1. complete Artifact roster
2. current English names
3. full tooltip text
4. rarity
5. unlock conditions
6. exact trigger conditions
7. numerical effects
8. whether effects stack
9. interactions with specific Modules or Captains

This does not require completing full runs.

A short Artifact-selection capture session can verify much of the missing reference data.

---

# Version Status

Current page coverage:

**Early Access 0.9.14**

Relevant confirmed Artifact changes:

## 0.9.10

- Electric Arrow trigger reliability fixed
- Rare Artifact screen softlock fixed
- every 6 unlocked Artifacts grants +1 Artifact Reroll

## 0.9.14

- second Artifact reroll added from the start
- Repair Wrench changed from 25% healing to 25 HP
- Tinderbox Artifact bug fixed

If a future Wanderburg patch changes any of these systems, update the version label and the affected entry together.

## Sources

Primary sources:

- [Official Wanderburg Hotfix 0.9.14](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.10](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Steam Store](https://store.steampowered.com/app/3624140/Wanderburg/)

Current reference coverage: Early Access 0.9.14.
