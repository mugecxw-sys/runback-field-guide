export type ChaosKind = 'difficulty' | 'corruptors' | 'obelisks';
export type ChaosIcon = { src: string; width: number; height: number };
export type ChaosEntry = {
  name: string;
  description: string;
  category: ChaosKind;
  icon?: ChaosIcon;
};
export type ChaosContent = { entries: ChaosEntry[]; configuredReward: string };

