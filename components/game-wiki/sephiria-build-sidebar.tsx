import { sephiriaWikiConfig } from './sephiria-config';
import { weaponBuildGroups } from '@/lib/sephiria-build-navigation';

const linkStyle =
  'block border-l-2 border-transparent px-3 py-1.5 text-sm text-[var(--secondary)] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]';

export function SephiriaBuildSidebar({ activeHref }: { activeHref: string }) {
  const sectionLinks = (label: string) =>
    sephiriaWikiConfig.navigationSections.find(
      (section) => section.label === label,
    )?.links ?? [];
  return (
    <nav aria-label="Sephiria build navigation" className="text-[var(--text)]">
      <p className="font-serif text-lg font-semibold text-[var(--heading)]">
        Sephiria
      </p>
      <p className="mt-1 text-xs text-[var(--gold-muted)]">
        {sephiriaWikiConfig.version}
      </p>
      <section data-sidebar-section="Start" className="mt-5">
        <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
          Start
        </h2>
        {sectionLinks('START').map((item) => (
          <a key={item.href} href={item.href} className={linkStyle}>
            {item.label}
          </a>
        ))}
      </section>
      <details open data-sidebar-section="Build" className="mt-5">
        <summary className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
          Build
        </summary>
        <div className="mt-2 space-y-1">
          {weaponBuildGroups.map((group) => {
            const current = group.builds.some(
              (build) => build.href === activeHref,
            );
            return group.builds.length ? (
              <details
                key={group.name}
                open={current}
                data-weapon-group={group.name}
              >
                <summary
                  className={`cursor-pointer px-2 py-1.5 text-sm ${current ? 'font-semibold text-[var(--gold-text)]' : 'text-[var(--secondary)]'}`}
                >
                  {group.name}
                </summary>
                <div className="ml-3">
                  {group.builds.map((build) => (
                    <a
                      key={build.href}
                      href={build.href}
                      aria-current={
                        build.href === activeHref ? 'page' : undefined
                      }
                      style={
                        build.href === activeHref
                          ? {
                              borderLeftColor: 'var(--orange-text)',
                              backgroundColor: 'var(--surface-raised)',
                              color: 'var(--heading)',
                            }
                          : undefined
                      }
                      className={`${linkStyle} ${build.href === activeHref ? 'font-semibold' : ''}`}
                    >
                      {build.title}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <div
                key={group.name}
                data-weapon-group={group.name}
                className="px-2 py-1.5 text-sm text-[var(--secondary)]"
              >
                <span>{group.name}</span>
                <span
                  style={{ marginLeft: '0.5rem' }}
                  className="text-[10px] text-[var(--muted)]"
                >
                  Coming Soon
                </span>
              </div>
            );
          })}
        </div>
      </details>
      <section data-sidebar-section="Tools" className="mt-5">
        <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
          Tools
        </h2>
        {sectionLinks('TOOLS').map((item) => (
          <a key={item.href} href={item.href} className={linkStyle}>
            {item.label}
          </a>
        ))}
      </section>
    </nav>
  );
}

export function SephiriaBuildMobileNav({ activeHref }: { activeHref: string }) {
  return (
    <details className="mb-6 border border-[var(--gold-border)]/30 bg-[var(--surface)] lg:hidden">
      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-[var(--heading)]">
        Browse Sephiria Builds
      </summary>
      <div className="border-t border-[var(--gold-border)]/20 p-4">
        <SephiriaBuildSidebar activeHref={activeHref} />
      </div>
    </details>
  );
}
