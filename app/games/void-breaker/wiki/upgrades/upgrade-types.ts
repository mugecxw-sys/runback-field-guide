export type UpgradeIcon = {
  src: string;
  width: number;
  height: number;
};

export type UpgradeTier = {
  tier: number;
  effect: string;
  voidiumCost: number;
};

export type Upgrade = {
  name: string;
  description: string;
  icon?: UpgradeIcon;
  tiers: readonly UpgradeTier[];
};
