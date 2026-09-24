import type { GameWikiConfig } from './game-wiki';

export const wanderburgWikiConfig: GameWikiConfig = {
  gameName: 'Wanderburg',
  hubHref: '/games/wanderburg',
  version: 'Early Access 0.9.14',
  navigationSections: [
    {
      label: 'GUIDES',
      links: [
        { href: '/games/wanderburg', label: 'Overview' },
        { href: '/games/wanderburg/reference', label: 'Reference' },
        { href: '/games/wanderburg/builds', label: 'Builds' },
      ],
    },
    {
      label: 'WIKI',
      links: [
        { href: '/games/wanderburg/wiki/modules', label: 'Modules' },
        { href: '/games/wanderburg/wiki/captains', label: 'Captains' },
        { href: '/games/wanderburg/wiki/artifacts', label: 'Artifacts' },
      ],
    },
    {
      label: 'TOOLS',
      links: [{ href: '/games/wanderburg/mods', label: 'Mods' }],
    },
  ],
  officialHref: 'https://store.steampowered.com/app/3624140/Wanderburg/',
};
