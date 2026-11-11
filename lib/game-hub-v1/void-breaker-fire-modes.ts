import { voidBreakerModules } from './void-breaker-modules';

type FireModeVariant = {
  slug: string;
  weapon: string;
  damageTooltip?: string;
  additionalEffect?: string;
};

const generalPool = 'General';
const reducedBurstDelay = 'Reduces time between bursts';
const increasedFullAutoFireRate = 'Increases full auto fire rate';
const increasedSemiAutoFireRate =
  'Increases fire rate when this fire mode is active';

const series: {
  slug: string;
  title: string;
  method: string;
  additionalEffect?: string;
  activation?: string;
  variants: FireModeVariant[];
}[] = [
  {
    slug: 'burst-fire-quad',
    title: 'Burst Fire – QUAD',
    method: 'Adds a four-round burst mode.',
    additionalEffect: reducedBurstDelay,
    variants: [
      { slug: 'burst-fire-quad', weapon: generalPool },
      {
        slug: 'assault-burst-quad',
        weapon: 'Assault',
        damageTooltip: '+40%',
      },
      {
        slug: 'lmg-burst-quad',
        weapon: 'LMG',
        damageTooltip: '+40%',
      },
      {
        slug: 'pistol-burst-quad',
        weapon: 'Pistol',
        damageTooltip: '+20%',
      },
      {
        slug: 'smg-burst-quad',
        weapon: 'SMG',
        damageTooltip: '+250%',
      },
    ],
  },
  {
    slug: 'burst-fire-triple',
    title: 'Burst Fire – TRIPLE',
    method: 'Adds a three-round burst mode.',
    additionalEffect: reducedBurstDelay,
    variants: [
      {
        slug: 'burst-fire-triple',
        weapon: generalPool,
        damageTooltip: '+40%',
      },
      {
        slug: 'assault-burst-triple',
        weapon: 'Assault',
        damageTooltip: '+40%',
      },
      {
        slug: 'lmg-burst-triple',
        weapon: 'LMG',
        damageTooltip: '+60%',
      },
      {
        slug: 'marksman-burst-triple',
        weapon: 'Marksman',
        damageTooltip: '+10%',
      },
      {
        slug: 'pistol-burst-triple',
        weapon: 'Pistol',
        damageTooltip: '+25%',
      },
      {
        slug: 'smg-burst-triple',
        weapon: 'SMG',
        damageTooltip: '+300%',
      },
    ],
  },
  {
    slug: 'charged-shot',
    title: 'Charged Shot',
    method: 'Adds a charged-shot fire mode.',
    additionalEffect: 'Decreases time taken to reach full charge',
    variants: [
      { slug: 'charged-shot', weapon: generalPool },
      { slug: 'charged-shot-assault', weapon: 'Assault' },
      { slug: 'charged-shot-lmg', weapon: 'LMG' },
      { slug: 'charged-shot-marksman', weapon: 'Marksman' },
      { slug: 'charged-shot-pistol', weapon: 'Pistol' },
      { slug: 'charged-shot-shotgun', weapon: 'Shotgun' },
      { slug: 'charged-shot-sniper', weapon: 'Sniper' },
    ],
  },
  {
    slug: 'full-auto',
    title: 'Full Auto',
    method: 'Adds a fully automatic fire mode.',
    variants: [
      { slug: 'full-auto', weapon: generalPool },
      {
        slug: 'full-auto-marksman',
        weapon: 'Marksman',
        additionalEffect: increasedFullAutoFireRate,
      },
      {
        slug: 'full-auto-pistol',
        weapon: 'Pistol',
        additionalEffect: increasedFullAutoFireRate,
      },
      {
        slug: 'full-auto-shotgun',
        weapon: 'Shotgun',
        additionalEffect: increasedFullAutoFireRate,
      },
      {
        slug: 'full-auto-sniper',
        weapon: 'Sniper',
        additionalEffect: increasedFullAutoFireRate,
      },
    ],
  },
  {
    slug: 'semi-auto',
    title: 'Semi Auto',
    method: 'Adds a semi-automatic fire mode.',
    variants: [
      { slug: 'semi-auto', weapon: generalPool },
      {
        slug: 'semi-auto-assault',
        weapon: 'Assault',
        damageTooltip: '+150%',
        additionalEffect:
          'Continues to slightly increase damage when in semi-auto fire mode, but also decreases fire rate',
      },
      {
        slug: 'semi-auto-lmg',
        weapon: 'LMG',
        damageTooltip: '+60%',
        additionalEffect: increasedSemiAutoFireRate,
      },
      {
        slug: 'semi-auto-shotgun',
        weapon: 'Shotgun',
        additionalEffect: increasedSemiAutoFireRate,
      },
      {
        slug: 'semi-auto-sniper',
        weapon: 'Sniper',
        additionalEffect: increasedSemiAutoFireRate,
      },
    ],
  },
  {
    slug: 'pump-shot',
    title: 'Pump Shot',
    method: 'Adds a pump-action fire mode.',
    additionalEffect: 'Decreases time required to pump',
    variants: [
      {
        slug: 'pump-shot',
        weapon: generalPool,
        damageTooltip: '+300%',
      },
    ],
  },
  {
    slug: 'scream-trigger',
    title: 'Scream Trigger',
    method: 'Adds a microphone-triggered fire mode.',
    activation: 'Yell into the microphone.',
    variants: [
      {
        slug: 'scream-trigger-mic',
        weapon: 'Assault, LMG, Marksman, Pistol, SMG, Shotgun, Sniper',
      },
    ],
  },
];

const modulesBySlug = new Map(
  voidBreakerModules.map((entry) => [entry.slug, entry]),
);

export const voidBreakerFireModes = series.map(({ variants, ...group }) => {
  const records = variants.map((variant) => {
    const entry = modulesBySlug.get(variant.slug);
    if (entry?.type !== 'Fire Mode') {
      throw new Error(`Missing Fire Mode: ${variant.slug}`);
    }
    return { ...variant, entry };
  });
  return { ...group, icon: records[0].entry.icon, variants: records };
});
