import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { HubEntryPage } from '@/components/game-hub-v1/hub-pages';
import { findHubEntry, hubHref, isHubResourceSection } from '@/lib/game-hub-v1/config';
import retiredMusic from '@/data/warhammer-survivors/wiki-retired-music-redirects.json';
import wikiEntryAliases from '@/data/warhammer-survivors/wiki-entry-slug-aliases.json';
import { game } from '../../game';

type Props = { params: Promise<{ section: string; entry: string }> };

async function readEntry(params: Props['params']) {
  const { section, entry } = await params;
  if (!isHubResourceSection(section)) notFound();
  if (
    game.slug === 'warhammer-survivors' &&
    section === 'wiki' &&
    retiredMusic.entrySlugs.includes(entry)
  ) {
    redirect(hubHref(game.slug, 'wiki'));
  }
  if (
    game.slug === 'warhammer-survivors' &&
    section === 'wiki' &&
    Object.prototype.hasOwnProperty.call(wikiEntryAliases, entry)
  ) {
    const canonical = (wikiEntryAliases as Record<string, string>)[entry];
    redirect(`${hubHref(game.slug, 'wiki')}#sample-entry-${canonical}`);
  }
  const record = findHubEntry(game, section, entry);
  if (!record) notFound();
  return { section, ...record };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { entry, section } = await readEntry(params);
  return {
    title:
      entry.title +
      ' · ' +
      game.name +
      (game.demo || entry.demo ? ' Demo' : '') +
      ' | RUNBACK',
    description: entry.summary || game.description,
    alternates: { canonical: `https://roguelikegame.org/games/warhammer-survivors/${section}/${entry.slug}` },
  };
}

export default async function GameHubEntryRoute({ params }: Props) {
  const record = await readEntry(params);
  if ((record.entry.entryDisplay ?? record.group.entryDisplay) === 'compact') {
    if (game.slug === 'warhammer-survivors' && record.section === 'wiki') {
      redirect(`${hubHref(game.slug, 'wiki')}#sample-entry-${record.entry.slug}`);
    }
    redirect(hubHref(game.slug, record.section));
  }
  return <HubEntryPage game={game} {...record} />;
}
