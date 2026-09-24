# Wanderburg Captains Wiki (0.9.14)

This page covers all 14 Captains visible in the current Wanderburg Early Access 0.9.14 client.

Current-client screenshots are the primary source for Captain names and visible effects. Official patch notes are used to track balance changes and older naming.

> **Current client:** Early Access 0.9.14
> **Client roster verified:** 14 Captains
> **Last reviewed:** September 23, 2026

## Current Captain List

| Captain | Positive effect | Drawback |
| --- | --- | --- |
| Patchy The Pirate | Cannons deal 30% extra damage | Enemy Cannons deal 25% extra damage |
| Dieter The Drunk | Super Lucky | Controls are wobbly |
| Duelist | 50% more melee damage when boosting | 20% more damage taken when boosting |
| Empress | Spawn 100% more friendly units | -30% speed |
| Huntress | +50% auto attack speed | +40% ability cooldown time |
| Kapitalistus Maximus | +25% Silver after run | Gain -15% Gold during run |
| Lumberjack | Consuming trees gains Nitro | Much slower Nitro regeneration |
| Norbert The Normal | No gameplay modifier shown | No gameplay modifier shown |
| Pyromaniac | Always on fire; touching enemies ignites them | No Luck |
| Racer Ruth | +50% speed when boosting | -15% normal driving speed |
| Sire Jonah | Plays techno music | Only knows one song |
| Tankbert | Max HP bar grows when destroying a vehicle | Current client displays -50% Nitro regeneration |
| The Count | Heal by consuming units | No health boxes spawn |
| Time Witch | The game runs twice as fast | The game runs twice as fast |

These are the effects shown directly in the captured 0.9.14 Captain-selection tooltips.

RUNBACK does not add hidden values, unlock requirements or undocumented effects that are not shown in the current client or supported by reliable first-party information.

---

# Current Names vs Patch-Note Names

Official Wanderburg patch notes do not always use the same spelling or formatting as the current English client.

| Current 0.9.14 client | Official patch-note name |
| --- | --- |
| Patchy The Pirate | PatchyThePirate |
| Kapitalistus Maximus | Kapitalstus Maximus |

RUNBACK uses the current-client spelling as the primary name.

Patch-note spellings are retained only when discussing version history.

---

# Patchy The Pirate

Patchy The Pirate changes Cannon damage on both sides of the fight.

Current-client tooltip:

**+ Your Cannons do 30% extra damage**

**- Enemy Cannons do 25% extra damage**

Official Hotfix 0.9.10 reduced the enemy Cannon bonus-damage drawback from:

**50% → 25%**

This matches the negative value visible in the current 0.9.14 client.

The current client also confirms the positive 30% Cannon-damage effect, which is not fully described in that patch note.

---

# Dieter The Drunk

Current-client tooltip:

**+ Super Lucky**

**- Controls are wobbly**

The client does not display a numerical Luck value or a numerical definition for the control effect on the Captain-selection screen.

RUNBACK therefore does not invent one.

These effects should be treated as current-client descriptions until more precise behavior is verified.

---

# Duelist

Current-client tooltip:

**+ 50% more melee damage when boosting**

**- 20% more damage taken when boosting**

Hotfix 0.9.10 reduced the boosting damage-taken penalty from:

**50% → 20%**

The current 0.9.14 client matches the newer 20% value.

The penalty applies while boosting.

It should not be rewritten as a permanent 20% damage-taken penalty.

---

# Empress

Current-client tooltip:

**+ Spawn +100% friendly units**

**- 30% speed**

Empress directly changes allied-unit quantity while imposing a movement penalty.

The current Captain-selection screen does not provide additional hidden spawning formulas or specify separate modifiers for different allied-unit sources.

Those details should not be inferred from the short tooltip alone.

---

# Huntress

Current-client tooltip:

**+ 50% auto attack speed**

**+ 40% ability cooldown time**

The second line is a drawback: abilities take longer to become available again.

Hotfix 0.9.10 reduced the additional ability cooldown time from:

**50% → 40%**

The current 0.9.14 tooltip matches the 40% patched value.

This Captain therefore creates a clear trade-off between faster automatic attacks and slower active-ability cycling.

That does not automatically make Huntress the best Captain for automatic-attack builds.

---

# Kapitalistus Maximus

The current client spells the name:

**Kapitalistus Maximus**

Official Hotfix 0.9.10 used the spelling:

**Kapitalstus Maximus**

Current-client tooltip:

**+ 25% Silver after run**

**- Gain 15% less Gold during run**

Hotfix 0.9.10 reduced the Gold penalty from:

**-30% → -15%**

The current-client drawback matches the patched -15% value.

The +25% post-run Silver effect is directly visible in the current client.

---

# Lumberjack

Current-client tooltip:

**+ Consuming trees gains Nitro**

**- Much slower Nitro regeneration**

The current selection screen does not provide:

- exact Nitro gained per tree
- exact Nitro regeneration penalty
- cooldown
- internal scaling

RUNBACK therefore keeps these effects qualitative until the actual numbers can be verified.

---

# Norbert The Normal

Norbert The Normal's current Captain screen does not show a green positive modifier or red negative modifier.

Its description is:

**The most boring person you've ever met.**

RUNBACK therefore does not assign Norbert an undocumented gameplay bonus or drawback.

If a hidden effect exists, it requires separate verification.

---

# Pyromaniac

Current-client tooltip:

**+ Always on fire, ignites enemies when touching**

**- No Luck**

The tooltip establishes a contact-based fire interaction and removes Luck.

It does not provide an exact contact-damage value, burn duration or numerical Luck value on the Captain-selection screen.

Those values remain unpublished here.

---

# Racer Ruth

Current-client tooltip:

**+ 50% speed when boosting**

**- 15% normal driving speed**

This Captain clearly separates:

**boosting speed**

from:

**normal driving speed**

The -15% modifier should therefore not be described as a permanent reduction to all movement.

---

# Sire Jonah

Current-client tooltip:

**+ Plays techno music**

**- Only knows one song**

These are the effects shown by the current client.

The Captain-selection screen does not display a numerical combat, economy, health or movement modifier.

RUNBACK therefore does not invent one.

---

# Tankbert

Tankbert currently has the most important unresolved Captain-data conflict.

Current-client tooltip:

**+ Your Max HP bar gets bigger when destroying a vehicle**

and:

**-50% Nitro Regeneration**

However, official Hotfix 0.9.10 states that Tankbert's Nitro regeneration penalty was reduced from:

**50% slower → 30% slower**

These two current evidence sources do not agree.

## Current evidence

**Current-client 0.9.14 UI**

-50% Nitro regeneration

**Official Hotfix 0.9.10**

-30% intended Nitro regeneration penalty

## RUNBACK status

**CONFLICT — runtime value not yet verified**

RUNBACK does not silently replace the current UI with the patch-note value, and it does not assume that the UI value necessarily reflects the actual runtime calculation.

A short controlled gameplay test would be required to resolve which value the current build actually applies.

Hotfix 0.9.6 also states that Tankbert was nerfed, but that update did not publish the exact changed value.

---

# The Count

Current-client tooltip:

**+ Heal by consuming units**

**- No health boxes spawn**

The current selection screen does not specify the exact healing amount per consumed unit.

RUNBACK therefore does not attach a numerical heal value without additional verification.

The drawback is explicit: normal health boxes do not spawn.

---

# Time Witch

Time Witch has an unusual current tooltip.

Both sides state:

**The game runs twice as fast.**

The same effect is presented as both an advantage and a disadvantage.

RUNBACK preserves that current-client presentation instead of trying to reinterpret one side into a different hidden effect.

---

# Captain Balance History

Several Captains changed very early in Wanderburg's Early Access period.

## Hotfix 0.9.6

The developers stated:

**Tankbert nerfed**

but did not publish the numerical change.

## Hotfix 0.9.7

The developers fixed:

**Captain localization/description**

This is one reason current-client wording takes priority when names differ from early patch notes.

## Hotfix 0.9.10

Five Captains received explicitly documented changes:

**PatchyThePirate**

Enemy Cannon bonus damage:

**50% → 25%**

**Kapitalstus Maximus**

Gold penalty:

**-30% → -15%**

**Huntress**

Extra ability cooldown time:

**50% → 40%**

**Tankbert**

Nitro regeneration penalty:

**50% slower → 30% slower**

**Duelist**

Extra damage taken while boosting:

**50% → 20%**

The current 0.9.14 client agrees with four of those newer drawback values.

Tankbert is the exception and remains marked as a conflict.

---

# How to Read Captain Effects

Captain tooltips often combine a major benefit with a meaningful cost.

When evaluating one, separate the effect into the system it changes.

### Damage

Examples:

- Patchy The Pirate
- Duelist

### Attack timing

Example:

- Huntress

### Movement and Nitro

Examples:

- Lumberjack
- Racer Ruth
- Tankbert

### Economy and progression

Example:

- Kapitalistus Maximus

### Allied units

Example:

- Empress

### Healing

Example:

- The Count

### Rule-changing effects

Examples:

- Dieter The Drunk
- Pyromaniac
- Time Witch

This is more useful than turning the current roster into an unsupported universal tier list.

---

# Captains and Builds

A Captain effect can matter very differently depending on the Modules and Vehicle used in a run.

Examples:

A faster automatic-attack effect matters more to setups that already rely heavily on automatic Module attacks.

A boosting modifier matters more to playstyles that use Nitro repeatedly.

An allied-unit modifier matters only when the run actually makes meaningful use of allied units.

These are mechanical relationships, not proof that a specific Captain + Module combination is universally best.

See:

- [Wanderburg Modules Wiki](/games/wanderburg/wiki/modules)
- [Wanderburg Builds Guide](/games/wanderburg/builds)

for the systems those Captain effects interact with.

For broader patch and system context, see the [Wanderburg Wiki & Reference](/games/wanderburg/reference). Return to the [Wanderburg game hub](/games/wanderburg) for all Wanderburg guides.

---

# Current Coverage

This reference covers the 14 Captains shown in the Wanderburg Early Access 0.9.14 client. Tankbert's conflicting Nitro regeneration values remain documented in the Tankbert section above.

## Sources

Primary evidence:

- Wanderburg Early Access 0.9.14 current-client Captain captures
- [Official Wanderburg Hotfix 0.9.10](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.7](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.6](https://steamcommunity.com/app/3624140/allnews/)
- [Official Wanderburg Hotfix 0.9.14](https://steamcommunity.com/app/3624140/allnews/) for current-version context

Current reference coverage: Early Access 0.9.14.
