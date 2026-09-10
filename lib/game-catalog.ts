export type GameLibrary = {
  slug: string;
  title: string;
  type: string;
  version: string;
  description: string;
  status: 'LIVE' | 'DRAFT';
  guideCount: number;
  categories: string[];
  sourceHref: string;
};

export const gameLibraries: GameLibrary[] = [
  {
    slug: 'repo',
    title: 'R.E.P.O.',
    type: 'Extraction horror roguelite',
    version: 'v0.4.0 baseline',
    description: 'Carry valuable loot, read the room, and make it back to the truck.',
    status: 'LIVE',
    guideCount: 30,
    categories: ['First runs', 'Loot & quota', 'Enemies', 'Upgrades', 'Co-op'],
    sourceHref: 'https://store.steampowered.com/app/3241660/R.E.P.O/',
  },
  {
    slug: 'cult-of-the-lamb',
    title: 'Cult of the Lamb',
    type: 'Cult-management action roguelite',
    version: 'Source-backed guides · September 2026',
    description: 'Build a reliable cult loop across followers, rituals, resources, and Woolhaven.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Followers', 'Woolhaven', 'Rituals', 'Base', 'Resources', 'Troubleshooting'],
    sourceHref: 'https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/',
  },
  {
    slug: 'deep-rock-galactic',
    title: 'Deep Rock Galactic',
    type: 'Co-op mining FPS',
    version: 'Source-backed guides · September 2026',
    description: 'Read the mission, protect the team, unlock the deeper progression loop, and extract together.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Missions', 'Promotion', 'Overclocks', 'Classes', 'Extraction'],
    sourceHref: 'https://deeprockgalactic.wiki.gg/wiki/How_to_Play_Guide_for_Deep_Rock_Galactic',
  },
  {
    slug: 'gamble-with-your-friends',
    title: 'Gamble With Your Friends',
    type: 'Party minigame roguelite',
    version: 'Source-backed guides · September 2026',
    description: 'Turn tickets, items, minigames, and achievements into a readable route for every table.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Tickets', 'Items', 'Minigames', 'Achievements', 'Strategy'],
    sourceHref: 'https://www.gamblewithyourfriends.wiki/gameplay/gamble-with-your-friends-minigames',
  },
  {
    slug: 'hades-ii',
    title: 'Hades II',
    type: 'Action roguelike',
    version: 'Source-backed guides · September 2026',
    description: 'Build a repeatable escape plan around weapons, boons, incantations, and the Surface route.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Weapons', 'Boons', 'Incantations', 'Surface', 'Bosses'],
    sourceHref: 'https://www.supergiantgames.com/games/hades-ii/',
  },
  {
    slug: 'lost-castle-2',
    title: 'Lost Castle 2',
    type: 'Co-op action roguelite',
    version: 'Source-backed guides · September 2026',
    description: 'Connect weapons, runes, treasures, inscriptions, and resonance into a build that survives depth.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Weapons', 'Runes', 'Resonance', 'Builds', 'Multiplayer'],
    sourceHref: 'https://steamdb.info/patchnotes/23666497/',
  },
  {
    slug: 'risk-of-rain-2',
    title: 'Risk of Rain 2',
    type: 'Third-person action roguelike',
    version: 'Source-backed guides · September 2026',
    description: 'Make proc chains, stage timing, survivors, and lunar choices legible before the run snowballs.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Survivors', 'Items', 'Proc chains', 'Stages', 'Bosses'],
    sourceHref: 'https://riskofrain2.wiki.gg/',
  },
  {
    slug: 'sephiria',
    title: 'Sephiria',
    type: 'Grid-based action roguelike',
    version: 'Source-backed guides · September 2026',
    description: 'Use the grid, Tablets, Artifacts, and weapon branches to make each run readable and repeatable.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Grid', 'Tablets', 'Artifacts', 'Weapons', 'Bosses'],
    sourceHref: 'https://sephiriagame.com/guides/beginner-guide/',
  },
  {
    slug: 'yet-another-zombie-survivors',
    title: 'Yet Another Zombie Survivors',
    type: 'Squad-based survivorslike',
    version: 'Source-backed guides · September 2026',
    description: 'Build around the leader perk, keep the squad moving, and turn missions into deliberate unlock routes.',
    status: 'LIVE',
    guideCount: 10,
    categories: ['Start', 'Characters', 'Squads', 'Upgrades', 'Achievements', 'Bosses'],
    sourceHref: 'https://yetanotherzombie.wiki/guides/beginner-guide',
  },
];

export const additionalGames = gameLibraries.filter(game => game.slug !== 'repo');
export const additionalGuideCount = additionalGames.reduce((total, game) => total + game.guideCount, 0);
