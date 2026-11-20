import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HubEntryPage } from '@/components/game-hub-v1/hub-pages';
import { findHubEntry } from '@/lib/game-hub-v1/config';
import { warhammerSurvivorsStage13SampleGame } from '@/lib/game-hub-v1/warhammer-survivors-stage13-samples';

type Props = { params: Promise<{ entry: string }> };

async function readEntry(params: Props['params']) {
  const { entry } = await params;
  const record = findHubEntry(warhammerSurvivorsStage13SampleGame, 'wiki', entry);
  if (!record?.entry.href) notFound();
  return record;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { entry } = await readEntry(params);
  return {
    title: entry.title + ' · Warhammer Survivors | RUNBACK',
    description: entry.summary || warhammerSurvivorsStage13SampleGame.description,
    robots: { index: false, follow: false },
  };
}

export default async function WarhammerSurvivorsWikiSampleEntry({ params }: Props) {
  const record = await readEntry(params);
  return (
    <HubEntryPage
      game={warhammerSurvivorsStage13SampleGame}
      section="wiki"
      {...record}
      back={{ href: '/games/warhammer-survivors/wiki-samples', label: 'Wiki samples' }}
      breadcrumbLabel="Wiki samples"
      breadcrumbHref="/games/warhammer-survivors/wiki-samples"
      alternateLink={{ href: '/games/warhammer-survivors/wiki', label: 'Open full Wiki' }}
    />
  );
}
