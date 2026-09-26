import type { GameWikiConfig } from './game-wiki';
import { sephiriaWikiPages } from '@/lib/sephiria-wiki-data';

const categories = sephiriaWikiPages.filter((page) => page.group === 'category');
const systems = sephiriaWikiPages.filter((page) => page.group === 'system');

export const sephiriaWikiConfig: GameWikiConfig = {
  gameName: 'Sephiria',
  hubHref: '/games/sephiria',
  version: 'Patch 1.0.33',
  showAboutLink: false,
  navigationSections: [
    { label: 'GUIDES', links: [{ href: '/games/sephiria', label: 'Overview' }, { href: '/games/sephiria/wiki', label: 'Wiki Home' }] },
    { label: 'WIKI', links: categories.map(({ title, href }) => ({ href, label: title })) },
    { label: 'SYSTEMS', links: systems.map(({ title, href }) => ({ href, label: title })) },
  ],
};
