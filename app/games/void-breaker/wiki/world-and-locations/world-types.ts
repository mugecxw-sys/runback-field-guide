export type WorldIcon = {
  src: string;
  width: number;
  height: number;
  kind: string;
};
export type WorldEnemy = { name: string; tags: readonly string[] };
export type WorldGroup = {
  label: string;
  members: readonly { name: string; count: number }[];
};
export type WorldZone = {
  number: number;
  name: string;
  enemies: readonly WorldEnemy[];
  representatives: readonly string[];
  groups: readonly WorldGroup[];
  modifiers: readonly string[];
  boss?: { name: string; href: string; sourceHref: string };
};
export type WorldMarker = {
  name: string;
  description: string;
  group: string;
  searchNames: readonly string[];
  icon: WorldIcon;
  secondaryIcon?: WorldIcon;
};
export type WorldContent = {
  zones: readonly WorldZone[];
  markers: readonly WorldMarker[];
  notes: readonly { label: string; text: string }[];
};
