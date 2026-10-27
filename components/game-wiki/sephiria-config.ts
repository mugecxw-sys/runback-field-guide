import type { GameWikiConfig } from './game-wiki';
import { sephiriaWikiPages } from '@/lib/sephiria-wiki-data';
import { listedWeaponBuildGroups as weaponBuildGroups } from '@/lib/sephiria-build-navigation';

const categories = sephiriaWikiPages.filter((page) => page.group === 'category');
const systems = sephiriaWikiPages.filter((page) => page.group === 'system');
const tools = sephiriaWikiPages.filter((page) => page.group === 'tool');

export const sephiriaWikiConfig: GameWikiConfig = {
  gameName: 'Sephiria',
  hubHref: '/games/sephiria',
  version: 'Patch 1.0.33',
  showAboutLink: false,
  relatedLabel: 'Related pages',
  navigationSections: [
    { label: 'START', links: [{ href: '/games/sephiria', label: 'Overview' }, { href: '/games/sephiria/wiki', label: 'Wiki Home' }] },
    { label: 'BUILD', links: weaponBuildGroups.flatMap((group) => group.builds.map((build) => ({ href: build.href, label: build.title }))), groups: weaponBuildGroups.map((group) => ({ label: group.name, links: group.builds.map((build) => ({ href: build.href, label: build.title })) })) },
    { label: 'TOOLS', links: tools.map(({ title, href }) => ({ href, label: title })) },
    { label: 'DATABASE', links: categories.map(({ title, href }) => ({ href, label: title })) },
    { label: 'SYSTEMS', links: systems.map(({ title, href }) => ({ href, label: title })) },
  ],
};
