import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import { HubWiki } from '@/components/game-hub-v1/hub-wiki';
import { GameWikiHero } from '@/components/game-wiki/game-wiki';
import { WikiColumns } from '../../wiki-columns';
import { warhammerWikiCategories } from '@/lib/game-hub-v1/warhammer-wiki-categories';
import { game } from '../../../game';

type Props = { params: Promise<{ category: string }> };

async function readCategory(params: Props['params']) {
  const { category } = await params;
  const wiki = game.sections.wiki;
  if (!wiki) notFound();
  if (category === 'all') redirect('/games/warhammer-survivors/wiki');
  const current = warhammerWikiCategories.find(({ slug }) => slug === category);
  if (!current) notFound();
  const groups = current.groups.flatMap((slug) =>
    wiki.groups.filter((group) => group.slug === slug).flatMap((group) => {
      if (group.slug !== 'stages') return [group];
      const specialStages = group.entries.filter((entry) =>
        [entry.attributes?.stageNumber].flat().includes('Special'),
      );
      const specialSlugs = new Set(specialStages.map(({ slug }) => slug));
      return [
        { ...group, entries: group.entries.filter(({ slug }) => !specialSlugs.has(slug)) },
        { ...group, slug: 'hidden-stages', label: 'Hidden & special stages', entries: specialStages },
      ].filter(({ entries }) => entries.length > 0);
    }),
  );
  return { ...wiki, ...current, groups };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { label, description } = await readCategory(params);
  const { category } = await params;
  return { title: `${label} | Warhammer Survivors Wiki | RUNBACK`, description, alternates: { canonical: `https://roguelikegame.org/games/warhammer-survivors/wiki/categories/${category}` } };
}

export default async function WarhammerWikiCategoryPage({ params }: Props) {
  const { label, ...wiki } = await readCategory(params);
  return (
    <HubShell game={game} active="wiki" detail breadcrumbLabel="Wiki">
      <WikiColumns>
        <GameWikiHero eyebrow={game.name} title={label} description={wiki.description} version={game.version} />
        <HubWiki slug={game.slug} groups={wiki.groups} pageSize={wiki.pageSize} compactGrid showResultCount={false} expandable />
      </WikiColumns>
    </HubShell>
  );
}
