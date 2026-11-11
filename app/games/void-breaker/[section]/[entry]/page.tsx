import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HubEntryPage } from '@/components/game-hub-v1/hub-pages';
import { findHubEntry, isHubResourceSection } from '@/lib/game-hub-v1/config';
import {
  wikiCategories,
  wikiLocationCategories,
} from '@/lib/game-hub-v1/void-breaker-wiki';
import { game } from '../../game';
import { WikiCategoryPage } from '../../wiki-category-pages';

type Props = {
  params: Promise<{ section: string; entry: string }>;
  searchParams: Promise<{ fireMode?: string | string[] }>;
};

async function readEntry(params: Props['params']) {
  const { section, entry } = await params;
  if (!isHubResourceSection(section)) notFound();
  // V1 opens only the Wiki section; keep demo definitions for future work.
  if (!['wiki'].includes(section)) notFound();
  // V1 publishes the six complete libraries; static routes handle five of them.
  if (section === 'wiki' && entry !== 'modules') notFound();
  const record = findHubEntry(game, section, entry);
  if (!record) notFound();
  return { section, ...record };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, entry } = await readEntry(params);
  if (section === 'wiki') {
    return voidBreakerReleaseMetadata(
      '/games/void-breaker/wiki/modules',
      'Modules · VOID/BREAKER Wiki | RUNBACK',
      'Browse module effects and Fire Modes in VOID/BREAKER.',
    );
  }
  return {
    title:
      entry.title +
      ' · ' +
      game.name +
      (game.demo || entry.demo ? ' Demo' : '') +
      ' | RUNBACK',
    description: entry.summary,
  };
}

export default async function GameHubEntryRoute({
  params,
  searchParams,
}: Props) {
  const record = await readEntry(params);
  if (record.section === 'wiki') {
    const category = [...wikiCategories, ...wikiLocationCategories].find(
      (item) => item.slug === record.entry.slug,
    );
    if (!category) notFound();
    const fireMode =
      category.slug === 'modules' ? (await searchParams).fireMode : undefined;
    return (
      <WikiCategoryPage
        category={category}
        initialFireMode={typeof fireMode === 'string' ? fireMode : undefined}
      />
    );
  }
  return <HubEntryPage game={game} {...record} />;
}
