'use client';

import { usePathname } from 'next/navigation';
import { GameDisclosure, gameDisclosureFor } from './game-disclosure';

export function GameDisclosureFooter({ gameHref }: { gameHref?: string }) {
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean) ?? [];
  const href = gameHref ?? (segments[0] === 'games' && segments.length > 2 ? `/games/${segments[1]}` : undefined);
  if (!href || !gameDisclosureFor(href)) return null;
  return <footer className="px-5 py-6"><GameDisclosure gameHref={href} position="footer" className="mx-auto max-w-5xl" /></footer>;
}
