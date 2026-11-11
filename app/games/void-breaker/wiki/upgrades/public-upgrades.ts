import type { Upgrade, UpgradeIcon } from './upgrade-types';

type UpgradeSource = {
  document: {
    upgrades: readonly {
      asset: string;
      name: string;
      description: string;
      thumbnail_image: string;
      rank_voidium_price:
        | readonly { Description: string; VoidiumPrice: number }[]
        | null;
    }[];
  };
  images: Record<string, UpgradeIcon>;
};

type UpgradeRules = {
  approvedAssets: readonly string[];
  withheldTierAssets: readonly string[];
};

// Only this projection crosses the server/client boundary. Original fields and
// evidence stay in the internal source, including Medcore's four complete rows.
export function buildUpgrades(
  source: UpgradeSource,
  rules: UpgradeRules,
): Upgrade[] {
  const assets = new Map(
    source.document.upgrades.map((entry) => [entry.asset, entry]),
  );
  return rules.approvedAssets.map((asset) => {
    const entry = assets.get(asset);
    if (!entry?.rank_voidium_price?.length) {
      throw new Error('An approved upgrade must have its own tier source.');
    }
    const icon = source.images[entry.thumbnail_image];
    return {
      name: entry.name,
      description: entry.description,
      ...(icon && {
        icon: { src: icon.src, width: icon.width, height: icon.height },
      }),
      tiers: rules.withheldTierAssets.includes(asset)
        ? []
        : entry.rank_voidium_price.map((rank, index) => ({
            tier: index + 1,
            effect: rank.Description,
            voidiumCost: rank.VoidiumPrice,
          })),
    };
  });
}
