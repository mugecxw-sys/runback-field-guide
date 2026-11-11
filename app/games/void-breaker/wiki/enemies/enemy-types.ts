export type EnemyEntry = {
  name: string;
  searchNames?: readonly string[];
  nameNote?: string;
  tags: readonly string[];
  encounterTypes: readonly string[];
  zones: readonly number[];
  modifiers: readonly string[];
  examples: readonly { context: string; text: string }[];
  relatedOnly: boolean;
  relation?: string;
  image?: { src: string; width: number; height: number };
};

export type EnemyFamily = {
  name: string;
  base: EnemyEntry;
  variants: readonly EnemyEntry[];
};

export type BossEntry = EnemyEntry & {
  number: number;
  achievements: readonly { name: string; objective: string }[];
};

export type CombatNote = { label: string; text: string };
