import type { ReactNode } from 'react';
import { AdSlot, ContactRail, GameBreadcrumb, GameShell } from './game-wiki';
import { sephiriaWikiConfig } from './sephiria-config';

// Thin compatibility wrapper: every Sephiria build page now uses the one
// unified GameShell, so the left rail, right rail, breadcrumb and breakpoints
// are identical to the rest of the wiki. Kept under this name so the existing
// build pages do not have to change their import.
export function SephiriaGreatswordBuildShell({ activeHref, children }: { activeHref: string; children: ReactNode }) {
  return (
    <GameShell
      config={sephiriaWikiConfig}
      activeHref={activeHref}
      breadcrumb={<GameBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Games', href: '/#game-library' }, { label: 'Sephiria', href: '/games/sephiria' }, { label: 'Builds' }]} />}
      rightRail={<><AdSlot variant="box" /><ContactRail /></>}
    >
      {children}
    </GameShell>
  );
}
