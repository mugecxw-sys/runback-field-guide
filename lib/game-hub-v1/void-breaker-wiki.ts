type WikiSubcategory = {
  label: string;
  records: number;
  images: number;
};

export type WikiCategory = {
  slug: string;
  label: string;
  summary: string;
  records: number;
  images: number;
  coverage: string;
  subcategories?: readonly WikiSubcategory[];
};

// Counts describe the inspected local export. Each image count is the number
// of distinct linked PNG paths in that scope, including any shared artwork.
export const wikiCategories: readonly WikiCategory[] = [
  {
    slug: 'modules',
    label: 'Modules',
    summary:
      'Module asset groups from the expanded export, including body, projectile, sword, and weapon modules.',
    records: 266,
    images: 208,
    coverage:
      'The expanded export contains 266 assets, with 227 distinct assets referenced in the exported mod pools. Ten corroborated modules are shown below. Body is the source group; Passive is unverified as a taxonomy label. Messages and Special retain their source groups with unverified gameplay availability. Schematics is pending.',
    subcategories: [
      { label: 'Body', records: 73, images: 66 },
      { label: 'Messages', records: 3, images: 2 },
      { label: 'Projectiles', records: 18, images: 17 },
      { label: 'Special', records: 4, images: 3 },
      { label: 'Sword', records: 8, images: 8 },
      { label: 'Weapons', records: 133, images: 118 },
      { label: 'Weapons / Assault', records: 4, images: 4 },
      { label: 'Weapons / LMG', records: 4, images: 4 },
      { label: 'Weapons / Marksman', records: 3, images: 3 },
      { label: 'Weapons / Mastery', records: 4, images: 4 },
      { label: 'Weapons / Pistol', records: 4, images: 4 },
      { label: 'Weapons / SMG', records: 2, images: 2 },
      { label: 'Weapons / Shotgun', records: 3, images: 3 },
      { label: 'Weapons / Sniper', records: 3, images: 3 },
    ],
  },
  {
    slug: 'weapons',
    label: 'Weapons',
    summary:
      'Weapon assets, chassis, skins, and fire modes, kept as separate data groups.',
    records: 84,
    images: 26,
    coverage:
      'These are asset records, including an Unarmed record, chassis, skins and fire-mode definitions. There are no shared asset IDs across the four groups. The 21 legacy weapon rows already occur in the 46-row export. Two rows lack damage; inherited fields and some chassis links are unverified.',
    subcategories: [
      {
        label: 'Weapon Assets (with legacy thumbnail references)',
        records: 46,
        images: 7,
      },
      { label: 'Chassis', records: 14, images: 8 },
      { label: 'Skins', records: 15, images: 8 },
      { label: 'Fire Modes', records: 9, images: 9 },
    ],
  },
  {
    slug: 'enemies',
    label: 'Enemies & Bosses',
    summary: 'Enemy and boss assets identified in the export.',
    records: 58,
    images: 0,
    coverage:
      'Three test objects are set aside from the 61-row source. Combat stats and attack behavior are incomplete. Available boss marker art belongs to map scenarios.',
    subcategories: [
      { label: 'Enemies', records: 52, images: 0 },
      { label: 'Bosses', records: 6, images: 0 },
    ],
  },
  {
    slug: 'world-and-locations',
    label: 'World & Locations',
    summary:
      'Zones, stronghold markers, and orange areas kept in their original source groups.',
    records: 32,
    images: 22,
    coverage:
      'The source counts are 6 zone rows, 19 stronghold rows, and 7 orange-area rows. The same teleporter asset appears in two sources and remains counted in each. Nested level, traversal, and spawn rows are outside this total. This count describes source records.',
  },
  {
    slug: 'upgrades',
    label: 'Upgrades',
    summary: 'Upgrade assets and their linked icons from the expanded export.',
    records: 43,
    images: 18,
    coverage:
      'All 43 have names, descriptions, and linked images. Four lack a price. No row has an explicit rarity, category, star rank, or prerequisite in the normalized fields. The older 24-row export overlaps by asset ID.',
  },
  {
    slug: 'chaos',
    label: 'Chaos',
    summary:
      'Difficulty modifiers, corruptors, and obelisks from their dedicated exports.',
    records: 36,
    images: 18,
    coverage:
      'The 18 legacy Chaos rows match the three dedicated exports. One difficulty modifier lacks a linked image, and one obelisk lacks a name and description. Corruptors and obelisks have no linked images in the inspected data.',
    subcategories: [
      { label: 'Difficulty Modifiers', records: 19, images: 18 },
      { label: 'Corruptors', records: 6, images: 0 },
      { label: 'Obelisks', records: 11, images: 0 },
    ],
  },
  {
    slug: 'rewards',
    label: 'Items & Rewards',
    summary: 'Loot and relic asset groups.',
    records: 13,
    images: 8,
    coverage:
      'Eight loot records link to seven images. One of five relics has a linked image, with two explicit texture references unresolved.',
    subcategories: [
      { label: 'Loot', records: 8, images: 7 },
      { label: 'Relics', records: 5, images: 1 },
    ],
  },
  {
    slug: 'missions-and-logs',
    label: 'Missions & Logs',
    summary:
      'Mission records, terminal entries, and scout log sequence references.',
    records: 117,
    images: 0,
    coverage:
      'Six mission rows lack both names and descriptions. One terminal row lacks a description. Scout log records contain names and sequence references without transcript text or linked images.',
    subcategories: [
      { label: 'Missions', records: 69, images: 0 },
      { label: 'Terminals', records: 22, images: 0 },
      { label: 'Scout Logs', records: 26, images: 0 },
    ],
  },
  {
    slug: 'achievements',
    label: 'Achievements',
    summary: 'Achievement names and descriptions from the structured export.',
    records: 80,
    images: 0,
    coverage:
      'All 80 have a name and description. The raw achievement rows are counted separately as source evidence. The structured export has no achievement image bindings.',
  },
];

export const wikiLocationCategories: readonly WikiCategory[] = [
  {
    slug: 'zones',
    label: 'Zones',
    summary:
      'Six numbered zones with attached combat, traversal, and spawn reference tables.',
    records: 6,
    images: 0,
    coverage:
      'The two exports describe the same six zones. Proper names and zone artwork are absent. Zone 06 lacks a difficulty table in the zone export. Nested rows are reference data outside the zone total.',
    subcategories: [
      { label: 'Zone 01–06', records: 6, images: 0 },
      { label: 'Combat Area Rows', records: 114, images: 0 },
      { label: 'Boss Level Rows', records: 5, images: 0 },
      { label: 'Traversal Rows', records: 29, images: 0 },
      { label: 'Spawn Query Rows', records: 58, images: 0 },
    ],
  },
  {
    slug: 'strongholds',
    label: 'Strongholds',
    summary:
      'Stronghold and scenario markers from the island map, including anomaly-marked scenarios.',
    records: 19,
    images: 17,
    coverage:
      'All 19 records link to thumbnails, and 12 also link to anomaly icons. Three spawn tables contain 28 rows; their zone assignments are unresolved. The teleporter also occurs in Orange Areas and remains listed in both sources.',
    subcategories: [{ label: 'Map Markers', records: 19, images: 17 }],
  },
  {
    slug: 'orange-areas',
    label: 'Orange Areas',
    summary: 'Map area definitions from the Orange Areas export.',
    records: 7,
    images: 6,
    coverage:
      'One thumbnail reference is unresolved. The teleporter also appears in Strongholds; its ownership is pending review.',
  },
];
