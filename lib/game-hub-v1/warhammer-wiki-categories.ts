export const warhammerWikiCategories = [
  { slug: 'characters', label: 'Characters', description: 'Playable characters, their abilities, and variants.', groups: ['characters'] },
  { slug: 'enhancements', label: 'Enhancements', description: 'Permanent upgrades, their effects, prices, and unlock conditions.', groups: ['enhancements'] },
  { slug: 'bit-box', label: 'Bit Box', description: 'Weapons, 22 equipment passives, evolutions, Arcana, items, merchants, and stages. The LIMITLESS stat table is separate and is not used as the equipment passive catalog.', groups: ['weapons', 'passives', 'evolutions', 'arcanas', 'items', 'merchants', 'stages'] },
  { slug: 'paint-pots', label: 'Paint Pots', description: 'Paint colours, collection requirements, and acquisition hints.', groups: ['paintpots'] },
  { slug: 'objectives', label: 'Objectives', description: 'Objectives, Steam achievements, puzzles, and incantations.', groups: ['objectives', 'steam-achievements', 'puzzles', 'incantations'] },
  { slug: 'bestiary', label: 'Bestiary', description: 'Enemies, bosses, and their variants.', groups: ['enemies'] },
] as const;

export function warhammerWikiHref(category: string) {
  return `/games/warhammer-survivors/wiki/categories/${category}`;
}
