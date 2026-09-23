# Wanderburg Modules Wiki (0.9.14)

This page covers the Modules visible in the current Wanderburg Early Access 0.9.14 client.

The current roster below is based on the in-game Module selection screen and current English tooltips. Patch notes and external data are used only to supplement information that the selection screen does not show.

> **Current client:** Early Access 0.9.14
> **Client roster verified:** 20 Modules
> **Last reviewed:** September 23, 2026

## Current Module List

| Module | Slot | Current-client role |
| --- | --- | --- |
| Archer Tower | Top | Fires arrows at nearby enemies; active ability is Arrow Rain |
| Arms | Side | Melee-oriented Module that strikes enemies and blocks projectiles |
| Cannon | Side | Fires cannonballs from the side; active ability fires a broadside |
| Cannon Tower | Top | Targets strong nearby enemies and can fire a barrage |
| Catapult | Back | Creates pestilence zones behind the vehicle |
| Companion | Back | Spawns a Hammer Companion that fights nearby enemies |
| Dash | Back | Dashes forward and produces fire behind the vehicle while boosting |
| Fire Mage | Top | Fires fire projectiles and has a ring-of-fire active ability |
| Force Mage | Front | Pushes enemies away and provides a force-based active ability |
| Front Barracks | Front | Spawns Biker Knights that fight for the player |
| FrontCannon | Front | Long-range forward Cannon with a powerful active shot |
| Lightning Mage | Top | Attacks nearby enemies with lightning and stun effects |
| Mine Layer | Back | Drops mines behind the vehicle |
| RAM | Front | Deals speed-based collision damage and knockback |
| Side Ballista | Side | Fires large penetrating arrows from the side |
| Side Barracks | Side | Spawns allied troops |
| Side Flamethrower | Side | Burns enemies beside the vehicle |
| Teleporter | Front | Teleports forward and damages the arrival area |
| Top Mortar | Top | Fires cannonballs from the top and can bombard an area behind the vehicle |
| Turret Layer | Back | Places friendly Ballista Turrets |

This list intentionally follows the current 0.9.14 client. Third-party databases may contain additional names that are not visible in the current captured Module-selection roster. Those entries are not added here unless they can be verified in the current client.

---

# Patch-Note Names vs Current Client Names

| Current client | Name used in official patch notes |
| --- | --- |
| Lightning Mage | Electric Mage / Top Electric Mage |
| Arms | Side Arm Module |
| Turret Layer | Back Turret Module |

These are aliases for patch-history purposes, not separate Modules.

---

# Base Module Values

The Module-selection screen does not display complete damage and cooldown values. The following values are secondary reference data matched against the current Module roster. Where an official patch gives a newer value, the official patch takes priority over older database values.

| Module | Active Base | Auto Base | Active CD | Auto CD |
| --- | ---: | ---: | ---: | ---: |
| Archer Tower | 10 | 5 | 25s | 2s |
| Arms | 40 | 40 | 30s | **2.5s** |
| Cannon | 30 | 15 | 15s | 3s |
| Cannon Tower | 75 | 90 | 45s | 3s |
| Catapult | 10 | 5 | 45s | 2.8s |
| Companion | 2 | 100 | — | 2s |
| Dash | — | 20 | 18s | 2.5s |
| Fire Mage | 125 | 2.5 | 30s | 10s |
| Force Mage | 20 | 80 | 30s | 4s |
| Front Barracks | **250** | 5 | 45s | 10s |
| FrontCannon | 150 | 7 | 10s | 2s |
| Lightning Mage | 150 | 20 | 60s | 2s |
| Mine Layer | 50 | 80 | 40s | 5s |
| RAM | — | — | 15s | — |
| Side Ballista | — | — | — | — |
| Side Barracks | — | 3 | 60s | 12s |
| Side Flamethrower | 30 | 50 | 35s | 4.5s |
| Teleporter | 100 | 15 | 20s | 5s |
| Top Mortar | 70 | 70 | 40s | 2.5s |
| Turret Layer | — | — | — | — |

— means RUNBACK does not currently have a sufficiently clear value to publish. It does not mean zero.

## Important Data Notes

**Arms** — Hotfix 0.9.13 explicitly changed the Side Arms Module base auto-attack interval from **3.0s → 2.5s**. RUNBACK therefore uses **2.5 seconds**, not older external 3-second data.

**Front Barracks** — Hotfix 0.9.7 explicitly changed active base damage from **200 → 250**. RUNBACK therefore uses **250**.

**Lightning Mage** — Hotfix 0.9.14 increased its base automatic target count from **5 → 7**. Upgrades can add more targets per attack.

**RAM** — Available extracted data contains values that appear to behave as speed/damage multipliers rather than straightforward displayed damage. RUNBACK does not present those raw internal values as normal damage numbers.

**Side Ballista and Turret Layer** — Reliable current base damage/cooldown tables are incomplete, so missing values remain unpublished rather than being reconstructed.

---

# Top-Slot Modules

## Archer Tower

Archer Tower uses the Top slot. Its current client description shows automatic arrows against nearby enemies and an Arrow Rain active ability. Current external base-data matching gives 10 active base damage, 5 automatic base damage, a 25-second active cooldown and a 2-second automatic cooldown.

## Cannon Tower

Cannon Tower uses the Top slot. Its automatic behavior prioritizes a strong nearby enemy, while its active ability fires a barrage: **75 active / 90 automatic**, with **45s active cooldown / 3s automatic cooldown**.

## Fire Mage

Fire Mage uses the Top slot: automatic fire projectiles and an active ring of fire. Current external base-data matching gives **125 active / 2.5 automatic**, with **30s active cooldown / 10s automatic cooldown**. Fire Mage was explicitly touched by early post-launch balancing, so old demo values should not automatically be treated as current.

## Lightning Mage

Lightning Mage is the current-client name for **Electric Mage** in official patch notes. Its current client describes lightning attacks that can stun enemies. Hotfix 0.9.14 changed its automatic attack from **5 → 7 base targets per attack**, and upgrades can add more targets. Hotfix 0.9.10 fixed the lightning attack so it no longer stunned allied units. Current matched values are **150 active / 20 automatic** and **60s active cooldown / 2s automatic cooldown**.

## Top Mortar

Top Mortar uses the Top slot. Its automatic attack bombards nearby enemies, while its active ability fires a volley into an area behind the vehicle. Current matched values: **70 active / 70 automatic** and **40s active cooldown / 2.5s automatic cooldown**. Hotfix 0.9.6 reduced active projectile count.

---

# Side-Slot Modules

## Arms

Arms is the current-client name corresponding to **Side Arm Module** in official notes. One part strikes enemies and another blocks projectiles; its active enters a bashing frenzy. Current matched values are **40 active / 40 automatic**, **30s active cooldown**, and **2.5 seconds** automatic timing. Hotfix 0.9.10 increased rarity-based damage for both attacks.

## Cannon

Cannon uses a Side slot. Normal attacks fire at nearby enemies and its active fires a broadside: **30 active / 15 automatic**, **15s active cooldown / 3s automatic cooldown**.

## Side Ballista

Side Ballista fires large side arrows. The client distinguishes automatic arrow volleys from large active Ballista arrows. Hotfix 0.9.9 nerfed the automatic attack and buffed the active ability. RUNBACK does not assign exact base damage or cooldown values.

## Side Barracks

Side Barracks summons allied troops. Its active summons additional troops and buffs them; automatic behavior spawns troops. Current matched data gives **3 automatic base damage**, **60s active cooldown / 12s automatic cooldown**. A clear active base-damage value is not currently published.

## Side Flamethrower

Side Flamethrower attacks beside the vehicle with an active side-flame attack and recurring automatic fire projectiles: **30 active / 50 automatic**, **35s active cooldown / 4.5s automatic cooldown**.

---

# Front-Slot Modules

## Force Mage

Force Mage uses the Front slot. The client describes pushing nearby enemies away and firing magic tornadoes from the front. Hotfix 0.9.9 confirms its active ability cancels incoming projectiles; that does not establish immunity against every type of incoming damage. Current matched values: **20 active / 80 automatic**, **30s active cooldown / 4s automatic cooldown**.

## Front Barracks

Front Barracks spawns Biker Knights. Its active performs a larger cavalry summon and automatic behavior produces allied units. Hotfix 0.9.7 changed active base damage **200 → 250**. Hotfix 0.9.9 fixed diminishing-damage upgrades, buffed the active ability and increased allied melee-unit movement. Hotfix 0.9.14 made allied units immune to fire, stun and knockback. Current values: **250 active**, **5 automatic**, **45s active cooldown / 10s automatic cooldown**.

## FrontCannon

FrontCannon is the current-client spelling. It is a forward-facing long-range Cannon with a stronger active cannonball and smaller automatic cannonballs: **150 active / 7 automatic**, **10s active cooldown / 2s automatic cooldown**.

## RAM

RAM is a collision-oriented Front Module. The client states that damage is based on speed and its active ability increases ramming performance. The reliable current reference is **15s active cooldown**. Exact collision damage remains version- and speed-dependent until the formula is properly verified.

## Teleporter

Teleporter moves the vehicle forward. Its active teleport damages the arrival area and its automatic attack fires front magic projectiles: **100 active / 15 automatic**, **20s active cooldown / 5s automatic cooldown**.

---

# Back-Slot Modules

## Catapult

Catapult creates pestilence zones behind the vehicle. Its active creates a larger zone and its automatic attack produces smaller zones: **10 active / 5 automatic**, **45s active cooldown / 2.8s automatic cooldown**.

## Companion

Companion summons a Hammer Companion that fights near the player; its active sends the Companion into a more aggressive state. Current matched data gives **2 active base / 100 automatic base** and **2s automatic cooldown**. A clear current active cooldown is not published.

## Dash

Dash provides forward movement and produces flames behind the vehicle while boosting. Current matched data gives **20 automatic base damage** and **18s active cooldown / 2.5s automatic cooldown**. The active movement ability is not assigned a flat damage value.

## Mine Layer

Mine Layer drops mines behind the vehicle and its active creates a larger mine field: **50 active / 80 automatic**, **40s active cooldown / 5s automatic cooldown**.

## Turret Layer

Turret Layer is the current-client name corresponding to **Back Turret Module** in official notes. The current client shows single friendly Ballista Turrets automatically, and a group of turrets plus a buff from the active ability. Hotfix 0.9.10 reduced its maximum attack-speed boost. A complete current base damage/cooldown table remains unpublished.

---

# Module Rerolls

Official Hotfix 0.9.10 added permanent progression for Module rerolls: **Every 6 unlocked Modules → +1 New Module Reroll**. This is separate from Artifact rerolls. The roster above is based on the current-client selection screen, not inferred unlock-state information.

---

# Data Confidence

### Current Client Verified

Current Module names, visible roster, slots, current English descriptions, and visible active/automatic behavior.

### Official Verified

Patch changes including Lightning Mage/Electric Mage targets, Arms/Side Arm timing, Front Barracks 200 → 250, Force Mage projectile cancellation, Side Ballista balance direction, Turret Layer/Back Turret attack speed, and Module rerolls.

### External Data Cross-Check

Base damage and cooldown values not displayed on the selection screen. When external data conflicts with a newer official patch, the official patch wins. When a value cannot be interpreted safely, RUNBACK leaves it blank.

---

# Current Coverage

This page covers the **20 Modules visible in the captured Wanderburg 0.9.14 client roster**. It does not automatically add entries that appear only in external databases.

For broader patch and system context, see the [Wanderburg Wiki & Reference](/games/wanderburg/reference). For current build directions, see the [Wanderburg Builds Guide](/games/wanderburg/builds). For verified Captain changes, see the [Wanderburg Captains Wiki](/games/wanderburg/wiki/captains). Return to the [Wanderburg game hub](/games/wanderburg) for all Wanderburg guides.

## Sources

Primary evidence:

- Wanderburg Early Access 0.9.14 current-client Module selection captures
- [Official Wanderburg Hotfix 0.9.14](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.13](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.10](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.9](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.8](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.7](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.6](https://steamcommunity.com/app/3624140/allnews/)

Supplemental numerical reference:

- [PlayerTome Wanderburg Module database](https://wanderburg.playertome.com/database/modules/)

Current reference coverage: Early Access 0.9.14.
