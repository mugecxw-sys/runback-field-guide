import type { ChaosContent, ChaosIcon, ChaosKind } from './chaos-types';

type Source = {
  core: readonly {
    category: string;
    grade: string;
    raw: {
      asset: string;
      name?: string;
      description?: string;
      thumbnail_image?: string;
      LootReward?: readonly string[];
    };
  }[];
  images: Record<string, ChaosIcon>;
  reward: { raw: { asset: string; name: string } };
};
type Rules = { approvedAssets: readonly string[] };

// Construct fresh objects: raw assets and field evidence remain server-side.
export function buildChaos(source: Source, rules: Rules): ChaosContent {
  const assets = new Map(source.core.map((entry) => [entry.raw.asset, entry]));
  if (assets.size !== source.core.length) throw new Error('Duplicate Chaos source asset.');
  const entries = rules.approvedAssets.map((asset) => {
    const entry = assets.get(asset);
    if (!entry || entry.grade === 'C' || !entry.raw.name || !entry.raw.description) {
      throw new Error('Approved Chaos definition is missing its own public fields.');
    }
    if (!['difficulty', 'corruptors', 'obelisks'].includes(entry.category)) {
      throw new Error('Unsupported Chaos category.');
    }
    const icon = entry.category === 'difficulty' && entry.raw.thumbnail_image
      ? source.images[entry.raw.thumbnail_image] : undefined;
    if (entry.category === 'difficulty' && !icon) throw new Error('Missing direct Difficulty icon.');
    return {
      name: entry.raw.name,
      description: entry.raw.description,
      category: entry.category as ChaosKind,
      ...(icon && { icon: { src: icon.src, width: icon.width, height: icon.height } }),
    };
  });
  const corruptors = rules.approvedAssets.map((asset) => assets.get(asset))
    .filter((entry) => entry?.category === 'corruptors');
  if (source.reward.raw.asset !== 'DA_RareChest' || corruptors.length !== 6 ||
      corruptors.some((entry) => entry?.raw.LootReward?.length !== 1 ||
        entry.raw.LootReward[0] !== source.reward.raw.asset)) {
    throw new Error('Shared configured reward requires six direct matching references.');
  }
  return { entries, configuredReward: source.reward.raw.name };
}

