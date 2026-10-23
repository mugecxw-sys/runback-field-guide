import type { SephiriaRecord } from './sephiria-wiki-data';

type UpgradeFacts = Pick<SephiriaRecord, 'weapon' | 'relatedIds' | 'effectCurrent' | 'mechanicCurrent'>;

export const sephiriaWeaponUpgradeFacts: Record<string, UpgradeFacts> = {
  'WUP-01': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Cold Damage +5. Scabbard of Exorcism charges 50% faster.',
    mechanicCurrent: 'Scabbard of Exorcism fires a smaller projectile.',
  },
  'WUP-02': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: "Lightning Damage +5. Thunder's Earring gains 1 additional attack and its damage increases by 100%.",
    mechanicCurrent: "Special Attack: Cleave immediately triggers Thunder's Earring.",
  },
  'WUP-03': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Cold Damage +5.',
    mechanicCurrent: 'When Ice Vine activates, it orbits the player and its cooldown is removed.',
  },
  'WUP-04': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Weapon Attack fires Magic Missiles. For every 20 points in the combined total of all four elemental damage values above 20, Special Attack: Cleave fires 1 additional Magic Missile.',
    mechanicCurrent: 'Magic Missiles use your highest-damage element. A tie between two or more highest elements produces Chaos Damage.',
  },
  'WUP-05': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Normal Attacks gradually increase Attack Speed, up to 35%; the bonus resets when you stop attacking. Bloodletting reduces Max HP to 50. At activation, excess Max HP grants +2% Normal Attack Damage per 10 points, and excess current HP grants +1% damage dealt per point. Received Damage Reduction: 25%. Converted current HP returns when Bloodletting ends.',
    mechanicCurrent: 'Special Attack: Bloodletting replaces Reassemble.',
  },
  'WUP-06': {
    weapon: 'Crossbow', relatedIds: ['WPN-03'],
    effectCurrent: 'Normal Attack pierces enemies and deals 15% more damage. Compressing at least 10 rounds creates a larger Enhanced Round that deals 20% more damage.',
    mechanicCurrent: 'Special Attack becomes Ammo Compression.',
  },
  'WUP-07': {
    weapon: 'Blade', relatedIds: ['WPN-05'],
    effectCurrent: 'Weapon Attack damage is reduced by 20% and scales with Lightning Damage. Cloud Slash costs 5 MP. Its base power rises every 5 Residual Lightning stacks (200/220/250/300% of Lightning Damage), with an additional 5% damage per stack.',
    mechanicCurrent: 'Cloud Slash replaces Sheath and consumes all Residual Lightning for a wide frontal slash. Each independent Storm Cloud lightning strike grants 1 stack, up to 20.',
  },
  'WUP-08': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Weapon Attack damage is reduced by 15% and is based on Fire Damage.',
    mechanicCurrent: null,
  },
  'WUP-09': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Weapon Attack damage is reduced by 15% and is based on Fire Damage. Gain Reignite. Move Speed is reduced by 90% while using Block.',
    mechanicCurrent: 'Weapon actions grant Reignite time. While Reignite time remains, Block automatically throws Solar Blades. Reignite time only decreases during Block.',
  },
  'WUP-10': {
    weapon: 'Sword & Shield', relatedIds: ['WPN-01'],
    effectCurrent: 'Weapon Attack damage is reduced by 15% and is based on Fire Damage.',
    mechanicCurrent: 'Special Attack: Cleave changes to Normal Attack: Flame Strike.',
  },
  'WUP-11': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Special Attack: Whirlwind deals 20% more damage and charges 50% faster.',
    mechanicCurrent: null,
  },
  'WUP-12': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Weapon Attacks deal additional damage equal to 30% of Lightning Damage. Electrocution extra damage increases by 33%.',
    mechanicCurrent: 'Weapon Attacks inflict Electrocution on the target.',
  },
  'WUP-13': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Weapon Attacks deal additional damage equal to 30% of Cold Damage. Scabbard of Exorcism deals 33% more damage and charges 15% faster.',
    mechanicCurrent: null,
  },
  'WUP-14': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Normal Attack damage increases by 20%, but Dash Attack can no longer be used.',
    mechanicCurrent: 'Special Attack is replaced by Leaf Explosion. Leaf Explosion adds Normal Attack Damage to its damage.',
  },
  'WUP-15': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Weapon Attacks deal additional damage equal to 30% of Fire Damage. Red Snake Eyes deals 33% more damage.',
    mechanicCurrent: 'Normal Attack reduces the cooldown of Red Snake Eyes by 2.5 seconds.',
  },
  'WUP-16': {
    weapon: 'Greatsword', relatedIds: ['WPN-02'],
    effectCurrent: 'Weapon Attacks deal additional damage equal to 30% of Fire Damage. Solar Blade Critical Damage increases by 36%.',
    mechanicCurrent: 'Weapon Attack triggers Solar Blade 2 additional times.',
  },
  'WUP-17': {
    weapon: 'Crossbow', relatedIds: ['WPN-03'],
    effectCurrent: 'Special Attack becomes Frost Relic: Frost Veil.',
    mechanicCurrent: 'Normal Attack also benefits from effects that enhance Frost Relic.',
  },
  'WUP-18': {
    weapon: 'Dagger', relatedIds: ['WPN-04'],
    effectCurrent: 'Weapon Attacks deal additional damage equal to 25% of Lightning Damage.',
    mechanicCurrent: null,
  },
};
