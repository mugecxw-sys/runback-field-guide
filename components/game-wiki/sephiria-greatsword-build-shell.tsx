import type { ReactNode } from 'react';
import { SephiriaBuildSidebar } from './sephiria-build-sidebar';

export function SephiriaGreatswordBuildShell({ activeHref, children }: { activeHref: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--wiki-page-bg)] px-4 py-6 text-[var(--text)] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] md:grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9">
        <aside aria-label="Sephiria sidebar" className="hidden md:block">
          <div className="sticky top-24 border-r border-[var(--gold-border)]/20 pr-5">
            <SephiriaBuildSidebar activeHref={activeHref} />
          </div>
        </aside>
        <div className="min-w-0">
          <details className="mb-6 border border-[var(--gold-border)]/30 bg-[var(--surface)] md:hidden">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-[var(--heading)]">Sephiria Navigation</summary>
            <div className="border-t border-[var(--gold-border)]/20 p-4">
              <SephiriaBuildSidebar activeHref={activeHref} />
            </div>
          </details>
          {children}
        </div>
      </div>
    </main>
  );
}
