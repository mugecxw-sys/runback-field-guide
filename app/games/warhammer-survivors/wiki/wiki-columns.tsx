import { WikiFeedback } from '@/components/game-wiki/wiki-feedback';
import type { ReactNode } from 'react';

export function WikiColumns({ children }: { children: ReactNode }) {
  return (
    <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_13rem]">
      <div className="min-w-0">
        <div data-ad-placement="warhammer-wiki-content" />
        {children}
      </div>
      <aside aria-label="Wiki sidebar" className="hidden xl:block">
        <div className="sticky top-6 space-y-8 border-l border-[var(--gold-border)]/20 pl-5">
          <div data-ad-placement="warhammer-wiki-sidebar" />
          <WikiFeedback />
        </div>
      </aside>
    </div>
  );
}
