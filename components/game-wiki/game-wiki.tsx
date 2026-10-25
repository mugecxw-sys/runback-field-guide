import type { ReactNode } from 'react';
import Image from 'next/image';
import { GameDisclosure } from '@/components/game-disclosure';

export type GameWikiLink = {
  href: string;
  label: string;
  description?: string;
  count?: string;
  backgroundImage?: string;
};

export type GameWikiNavigationSection = {
  label: string;
  links: GameWikiLink[];
  groups?: { label: string; links: GameWikiLink[] }[];
};

export type GameWikiConfig = {
  gameName: string;
  hubHref: string;
  version: string;
  navigationSections: GameWikiNavigationSection[];
  officialHref?: string;
  showAboutLink?: boolean;
  relatedLabel?: string;
};

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mb-2 mt-6 text-[11px] font-bold tracking-[0.18em] text-[var(--gold)]">{children}</p>;
}

function NavigationGroups({ groups, activeHref }: { groups: NonNullable<GameWikiNavigationSection['groups']>; activeHref: string }) {
  return <div className="space-y-1">{groups.map((group) => group.links.length ? (
    <details key={group.label} open data-weapon-group={group.label}>
      <summary className={`cursor-pointer px-2 py-1.5 text-sm ${group.links.some((item) => item.href === activeHref) ? 'font-semibold text-[var(--gold-text)]' : 'text-[var(--secondary)]'}`}>{group.label}</summary>
      <div className="ml-3">{group.links.map((item) => <a key={item.href} href={item.href} aria-current={item.href === activeHref ? 'page' : undefined} className="block border-l-2 px-3 py-2 text-sm text-[var(--secondary)] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]" style={{ borderLeftColor: item.href === activeHref ? 'var(--orange-text)' : 'transparent' }}>{item.label}</a>)}</div>
    </details>
  ) : <div key={group.label} data-weapon-group={group.label} className="px-2 py-1.5 text-sm text-[var(--secondary)]">{group.label}<span style={{ marginLeft: '0.5rem' }} className="text-[10px] text-[var(--muted)]">Coming Soon</span></div>)}</div>;
}

export function GameWikiSidebar({ config, activeHref }: { config: GameWikiConfig; activeHref: string }) {
  const link = (item: GameWikiLink) => {
    const active = item.href === activeHref;
    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={active ? 'page' : undefined}
        className={`block border-l-2 px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)] ${
          active
            ? 'border-[var(--orange)] bg-[var(--orange)]/10 font-semibold text-[var(--heading)]'
            : 'border-transparent text-[var(--secondary)] hover:border-[var(--gold-border)]/70 hover:bg-[var(--neutral-wash)]/[0.035] hover:text-[var(--heading)]'
        }`}
      >
        {item.label}
      </a>
    );
  };
  return (
    <nav aria-label={`${config.gameName} navigation`} className="text-[var(--text)]">
      <p className="font-serif text-lg font-semibold tracking-wide text-[var(--heading)]">{config.gameName}</p>
      <p className="mt-1 text-xs text-[var(--gold-muted)]">{config.version}</p>
      {config.navigationSections.map((section) => section.groups ? (
        <details key={section.label} open data-navigation-section={section.label}>
          <summary className="mb-2 mt-6 cursor-pointer text-[11px] font-bold tracking-[0.18em] text-[var(--gold)]">{section.label}</summary>
          <NavigationGroups groups={section.groups} activeHref={activeHref} />
        </details>
      ) : (
        <div key={section.label} data-navigation-section={section.label}>
          <SectionLabel>{section.label}</SectionLabel>
          <div>{section.links.map(link)}</div>
        </div>
      ))}
      {(config.officialHref || config.showAboutLink !== false) && <SectionLabel>MORE</SectionLabel>}
      {config.officialHref && (
        <a
          href={config.officialHref}
          className="block border-l-2 border-transparent px-3 py-2 text-sm text-[var(--secondary)] hover:border-[var(--gold-border)]/70 hover:bg-[var(--neutral-wash)]/[0.035] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]"
        >
          Official Steam ↗
        </a>
      )}
      {config.showAboutLink !== false && (
        <a href="/about" className="block border-l-2 border-transparent px-3 py-2 text-sm text-[var(--secondary)] hover:border-[var(--gold-border)]/70 hover:bg-[var(--neutral-wash)]/[0.035] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">
          About
        </a>
      )}
    </nav>
  );
}

export function GameWikiMobileNav({ config, activeHref }: { config: GameWikiConfig; activeHref: string }) {
  const links = config.navigationSections.flatMap((section) => section.links);
  const grouped = config.navigationSections.some((section) => section.groups);
  return (
    <details className="mb-6 border border-[var(--gold-border)]/30 bg-[var(--surface)] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-[var(--heading)] marker:content-none">
        <span>{config.gameName}</span>
        <span className="text-xs font-medium tracking-wide text-[var(--gold-label)]">Browse {config.gameName}</span>
      </summary>
      <nav aria-label={`${config.gameName} navigation`} className="grid border-t border-[var(--neutral-edge)]/10 p-2 sm:grid-cols-2">
        {grouped ? config.navigationSections.map((section) => <div key={section.label} data-navigation-section={section.label} className="sm:col-span-2"><SectionLabel>{section.label}</SectionLabel>{section.groups ? <NavigationGroups groups={section.groups} activeHref={activeHref} /> : section.links.map((item) => <a key={item.href} href={item.href} aria-current={item.href === activeHref ? 'page' : undefined} className="block px-3 py-2 text-sm text-[var(--secondary)] hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--orange-text)]">{item.label}</a>)}</div>) : links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.href === activeHref ? 'page' : undefined}
            className={`px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)] ${item.href === activeHref ? 'bg-[var(--orange)]/10 font-semibold text-[var(--heading)]' : 'text-[var(--secondary)] hover:bg-[var(--neutral-wash)]/[0.04] hover:text-[var(--heading)]'}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}

export function GameWikiShell({ config, activeHref, children }: { config: GameWikiConfig; activeHref: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--wiki-page-bg)] px-4 py-6 text-[var(--text)] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9">
        <aside className="hidden lg:block"><div className="sticky top-24 border-r border-[var(--gold-border)]/20 pr-5"><GameWikiSidebar config={config} activeHref={activeHref} /></div></aside>
        <div className="min-w-0"><GameWikiMobileNav config={config} activeHref={activeHref} />{children}</div>
      </div>
    </main>
  );
}

export function GameWikiHero({ eyebrow, title, description, version, image, gameHref }: { eyebrow: string; title: string; description: string; version: string; image?: { src: string; alt: string }; gameHref?: string }) {
  return (
    <>
    <section className={`${image ? 'theme-image-panel ' : ''}relative overflow-hidden border border-[var(--gold-border)]/35 bg-[var(--surface)] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10`}>
      {image ? <Image src={image.src} alt={image.alt} fill sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-25" /> : <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(185,146,86,0.16),transparent_32%),linear-gradient(135deg,rgba(255,112,67,0.08),transparent_45%)]" />}
      <div className="relative max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--heading)] sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--body-soft)] sm:text-lg">{description}</p>
        <p className="mt-5 inline-flex border border-[var(--gold-border)]/35 bg-[var(--surface-inset)]/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--gold-text)]">{version}</p>
      </div>
    </section>
    {gameHref && <GameDisclosure gameHref={gameHref} position="hub" className="mt-3 max-w-3xl" />}
    </>
  );
}

export function GameWikiCategoryCard({ item }: { item: GameWikiLink }) {
  return (
    <a href={item.href} className={`${item.backgroundImage ? 'theme-image-panel ' : ''}group relative isolate block overflow-hidden border border-[var(--gold-border)]/25 bg-[var(--surface)] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-colors hover:border-[var(--orange-text)]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]`}>
      {item.backgroundImage && <div aria-hidden="true" className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-300 ease-out group-hover:scale-[1.03]" style={{ backgroundImage: `url(${item.backgroundImage})` }} />}
      {item.backgroundImage && <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--image-overlay)]/75 transition-colors duration-300 group-hover:bg-[var(--image-overlay)]/65" />}
      <div className="relative flex items-start justify-between gap-4"><h3 className="font-serif text-xl font-semibold text-[var(--heading)]">{item.label}</h3><span className="text-[var(--gold-label)] transition-transform group-hover:translate-x-0.5">→</span></div>
      {item.description && <p className="relative mt-3 text-sm leading-6 text-[var(--card-description)]">{item.description}</p>}
      {item.count && <p className="relative mt-5 border-t border-[var(--neutral-edge)]/20 pt-3 text-xs font-semibold tracking-wide text-[var(--gold-bright)]">{item.count}</p>}
    </a>
  );
}

export function GameWikiArticleLayout({ config, activeHref, title, description, publishedAt, modifiedAt, reviewedAt, toc, children, schema, label = 'Reference', labelTone = 'verified', coverage, footerNote = 'RUNBACK reference', breadcrumbItems }: { config: GameWikiConfig; activeHref: string; title: string; description: string; publishedAt?: string; modifiedAt?: string; reviewedAt?: string; toc: string[]; children: ReactNode; schema: unknown; label?: string; labelTone?: 'verified' | 'neutral'; coverage?: string; footerNote?: string; breadcrumbItems?: { label: string; href?: string }[] }) {
  const related = config.navigationSections.flatMap((section) => section.links).filter((item) => item.href !== activeHref);
  const lastReviewed = reviewedAt ?? modifiedAt ?? publishedAt;
  const tocLinks = toc.map((item) => ({ label: item, href: '#' + item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }));
  const onThisPage = (compact = false) => (
    <nav aria-label="On this page" className={compact ? 'border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4' : ''}>
      <p className="text-sm font-semibold text-[var(--heading)]">On this page</p>
      <ul className="mt-3 space-y-2 text-sm">
        {tocLinks.map((item) => <li key={item.href}><a href={item.href} className="text-[var(--body-soft)] hover:text-[var(--orange-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">{item.label}</a></li>)}
      </ul>
    </nav>
  );
  return (
    <main className="min-h-screen bg-[var(--wiki-page-bg)] px-4 py-6 text-[var(--text)] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9 xl:grid-cols-[13.5rem_minmax(0,46rem)_13rem]">
        <aside className="hidden lg:block"><div className="sticky top-24 border-r border-[var(--gold-border)]/20 pr-5"><GameWikiSidebar config={config} activeHref={activeHref} /></div></aside>
        <article className="min-w-0">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
          <GameWikiMobileNav config={config} activeHref={activeHref} />
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[var(--muted)]">{breadcrumbItems ? breadcrumbItems.map((item, index) => <span key={item.label} className="contents">{index > 0 && <span aria-hidden="true">›</span>}{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</span>) : <><a href="/">Home</a><span>›</span><a href="/#game-library">Games</a><span>›</span><a href={config.hubHref}>{config.gameName}</a><span>›</span><span aria-current="page">{title}</span></>}</nav>
          <header className="mt-5 border-b border-[var(--gold-border)]/25 pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK → {config.gameName} Wiki</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--heading)] sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-7 text-[var(--body-soft)]">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs"><span className="border border-[var(--gold-border)]/30 bg-[var(--surface)] px-2.5 py-1.5 font-semibold text-[var(--gold-text)]">{config.version}</span><span className={`border px-2.5 py-1.5 font-semibold ${labelTone === 'neutral' ? 'border-[var(--gold-label)]/30 bg-[var(--gold-label)]/10 text-[var(--gold-bright)]' : 'border-[var(--success)]/30 bg-[var(--success)]/10 text-[var(--success-soft)]'}`}>{label}</span>{coverage && <span className="border border-[var(--neutral-edge)]/10 bg-[var(--neutral-wash)]/[0.035] px-2.5 py-1.5 text-[var(--body-soft)]">{coverage}</span>}{lastReviewed && <span className="border border-[var(--neutral-edge)]/10 bg-[var(--neutral-wash)]/[0.035] px-2.5 py-1.5 text-[var(--body-soft)]">Last reviewed {lastReviewed.slice(0, 10)}</span>}</div>
          </header>
          <details className="mt-5 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 xl:hidden"><summary className="cursor-pointer text-sm font-semibold text-[var(--heading)]">On this page</summary><div className="mt-3">{onThisPage()}</div></details>
          {children}
        </article>
        <aside className="hidden xl:block"><div className="sticky top-24 space-y-8 border-l border-[var(--gold-border)]/20 pl-5">{onThisPage()}<nav aria-label={config.relatedLabel ?? 'Related guides'}><p className="text-sm font-semibold text-[var(--heading)]">{config.relatedLabel ?? 'Related guides'}</p><ul className="mt-3 space-y-2 text-sm">{related.map((item) => <li key={item.href}><a href={item.href} className="text-[var(--body-soft)] hover:text-[var(--orange-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">{item.label}</a></li>)}</ul></nav><div className="border-t border-[var(--neutral-edge)]/10 pt-4 text-xs leading-5 text-[var(--muted)]">{config.version}<br />{footerNote}</div></div></aside>
      </div>
    </main>
  );
}
