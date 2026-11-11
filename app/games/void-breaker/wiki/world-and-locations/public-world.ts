import type {
  WorldContent,
  WorldEnemy,
  WorldGroup,
  WorldMarker,
} from './world-types';

type QueryItem = {
  EnemyData: string;
  'AlwaysSpawn?': boolean;
  NumberToSpawnIfAlways: number;
  'ChanceToGiveArmour?': number;
  'ChanceToGiveShield?': number;
};
type Source = {
  zones: readonly { number: number; name: string }[];
  queries: readonly {
    table: string;
    rows: Record<string, { List: readonly QueryItem[] } | undefined>;
  }[];
  markers: readonly {
    key: string;
    namespace: string;
    raw: {
      name: string;
      description: string;
      anomaly_name?: string | null;
      anomaly_description?: string | null;
      anomaly_icon_image?: string | null;
      thumbnail_image?: string | null;
    };
  }[];
  images: Record<string, { src: string; width: number; height: number }>;
  notes: readonly { label: string; text: string }[];
};
type Rules = {
  approvedMarkerKeys: readonly string[];
  navigationKeys: readonly string[];
  representativeLimit: number;
  groupRules: readonly {
    zone: number;
    table: string;
    row: string;
    label: string;
  }[];
  bossRule: { zone: number; asset: string; source: string };
};
type FrozenEnemies = {
  records: readonly {
    asset: string;
    projection: { display: { name: string; tags: readonly string[] } } | null;
  }[];
};

export function buildWorldContent(
  source: Source,
  rules: Rules,
  frozen: FrozenEnemies,
): WorldContent {
  const enemies = new Map(
    frozen.records.flatMap((record) =>
      record.projection
        ? [[record.asset, record.projection.display] as const]
        : [],
    ),
  );
  const identity = (asset: string): WorldEnemy => {
    const enemy = enemies.get(asset);
    if (!enemy)
      throw new Error('World reference has no approved enemy identity');
    return { name: enemy.name, tags: enemy.tags };
  };
  const asset = (item: QueryItem) => {
    const match = /'([^']+)'/.exec(item.EnemyData);
    if (!match) throw new Error('Invalid enemy source reference');
    return match[1];
  };
  const icon = (file: string, kind: string) => {
    const image = source.images[file.replace(/^12_images\//, '')];
    if (!image) throw new Error('Marker has no directly sourced image');
    return { ...image, kind };
  };

  return {
    zones: source.zones.map((zone) => {
      const queries = source.queries.filter(
        (query) =>
          query.table.startsWith(
            `DT_B${String(zone.number).padStart(2, '0')}_`,
          ) && !query.table.endsWith('_Demo'),
      );
      const items = queries.flatMap((query) =>
        Object.values(query.rows).flatMap((row) => row?.List ?? []),
      );
      const members = [...new Set(items.map(asset))]
        .map(identity)
        .sort((a, b) => a.name.localeCompare(b.name));
      const baseForms = members.filter((enemy) => !enemy.tags.length);
      const groups: WorldGroup[] = rules.groupRules
        .filter((rule) => rule.zone === zone.number)
        .map((rule) => {
          const row = source.queries.find((query) => query.table === rule.table)
            ?.rows[rule.row];
          if (!row) throw new Error('Missing approved encounter configuration');
          return {
            label: rule.label,
            members: row.List.filter(
              (item) => item['AlwaysSpawn?'] && item.NumberToSpawnIfAlways > 0,
            ).map((item) => ({
              name: identity(asset(item)).name,
              count: item.NumberToSpawnIfAlways,
            })),
          };
        });
      return {
        number: zone.number,
        name: zone.name,
        enemies: members,
        representatives: (baseForms.length ? baseForms : members)
          .slice(0, rules.representativeLimit)
          .map((enemy) => enemy.name),
        groups,
        modifiers: [
          ...(items.some((item) => item['ChanceToGiveArmour?'] > 0)
            ? ['Armor']
            : []),
          ...(items.some((item) => item['ChanceToGiveShield?'] > 0)
            ? ['Shields']
            : []),
        ],
        ...(zone.number === rules.bossRule.zone
          ? {
              boss: {
                name: identity(rules.bossRule.asset).name,
                href: '/games/void-breaker/wiki/enemies#bosses-heading',
                sourceHref: rules.bossRule.source,
              },
            }
          : {}),
      };
    }),
    markers: source.markers.flatMap((marker): WorldMarker[] => {
      if (!rules.approvedMarkerKeys.includes(marker.key)) return [];
      const raw = marker.raw;
      const primary = raw.anomaly_icon_image || raw.thumbnail_image;
      if (!primary) throw new Error('Missing approved map marker');
      const secondary =
        raw.anomaly_icon_image && raw.thumbnail_image !== primary
          ? raw.thumbnail_image
          : null;
      return [
        {
          name: raw.anomaly_name || raw.name,
          description: raw.anomaly_description || raw.description,
          group:
            marker.namespace === 'OrangeAreas'
              ? 'Points of Interest'
              : rules.navigationKeys.includes(marker.key)
                ? 'Navigation'
                : 'Encounters',
          searchNames: [raw.name],
          icon: icon(
            primary,
            raw.anomaly_icon_image ? 'Anomaly marker' : 'Map marker',
          ),
          ...(secondary
            ? { secondaryIcon: icon(secondary, 'Base map marker') }
            : {}),
        },
      ];
    }),
    notes: source.notes.map(({ label, text }) => ({ label, text })),
  };
}
