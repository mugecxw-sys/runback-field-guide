import { notFound, redirect } from 'next/navigation';
import { hubHref } from '@/lib/game-hub-v1/config';
import { voidBreakerFireModes } from '@/lib/game-hub-v1/void-breaker-fire-modes';
import { voidBreakerModules } from '@/lib/game-hub-v1/void-breaker-modules';
import { game } from '../../../game';

type Props = {
  params: Promise<{ section: string; entry: string; record: string }>;
};

export default async function ModuleRecordRoute({ params }: Props) {
  const { section, entry, record } = await params;
  if (
    section !== 'wiki' ||
    entry !== 'modules' ||
    !voidBreakerModules.some(({ slug }) => slug === record)
  ) {
    notFound();
  }

  const list = hubHref(game.slug, 'wiki', 'modules');
  const series = voidBreakerFireModes.find(({ variants }) =>
    variants.some(({ slug }) => slug === record),
  );
  redirect(
    series ? `${list}?fireMode=${encodeURIComponent(series.slug)}` : list,
  );
}
