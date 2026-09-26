import type { ReactNode } from 'react';
import Image from 'next/image';

export type GameWikiLink = {
  href: string;
  label: string;
  description?: string;
  count?: string;
};

export type GameWikiNavigationSection = {
  label: string;
  links: GameWikiLink[];
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
  return <p className="mb-2 mt-6 text-[11px] font-bold tracking-[0.18em] text-[#b99256]">{children}</p>;
}

export function GameWikiSidebar({ config, activeHref }: { config: GameWikiConfig; activeHref: string }) {
  const link = (item: GameWikiLink) => {
    const active = item.href === activeHref;
    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={active ? 'page' : undefined}
        className={`block border-l-2 px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662] ${
          active
            ? 'border-[#ff7043] bg-[#ff7043]/10 font-semibold text-[#fff2df]'
            : 'border-transparent text-[#bdc6c5] hover:border-[#b99256]/70 hover:bg-white/[0.035] hover:text-[#fff2df]'
        }`}
      >
        {item.label}
      </a>
    );
  };
  return (
    <nav aria-label={`${config.gameName} navigation`} className="text-[#e1e6e8]">
      <p className="font-serif text-lg font-semibold tracking-wide text-[#fff2df]">{config.gameName}</p>
      <p className="mt-1 text-xs text-[#b4a78f]">{config.version}</p>
      {config.navigationSections.map((section) => (
        <div key={section.label}>
          <SectionLabel>{section.label}</SectionLabel>
          <div>{section.links.map(link)}</div>
        </div>
      ))}
      {(config.officialHref || config.showAboutLink !== false) && <SectionLabel>MORE</SectionLabel>}
      {config.officialHref && (
        <a
          href={config.officialHref}
          className="block border-l-2 border-transparent px-3 py-2 text-sm text-[#bdc6c5] hover:border-[#b99256]/70 hover:bg-white/[0.035] hover:text-[#fff2df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]"
        >
          Official Steam ↗
        </a>
      )}
      {config.showAboutLink !== false && (
        <a href="/about" className="block border-l-2 border-transparent px-3 py-2 text-sm text-[#bdc6c5] hover:border-[#b99256]/70 hover:bg-white/[0.035] hover:text-[#fff2df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">
          About
        </a>
      )}
    </nav>
  );
}

export function GameWikiMobileNav({ config, activeHref }: { config: GameWikiConfig; activeHref: string }) {
  const links = config.navigationSections.flatMap((section) => section.links);
  return (
    <details className="mb-6 border border-[#b99256]/30 bg-[#17201d] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-[#fff2df] marker:content-none">
        <span>{config.gameName}</span>
        <span className="text-xs font-medium tracking-wide text-[#dca464]">Browse {config.gameName}</span>
      </summary>
      <nav aria-label={`${config.gameName} navigation`} className="grid border-t border-white/10 p-2 sm:grid-cols-2">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.href === activeHref ? 'page' : undefined}
            className={`px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662] ${item.href === activeHref ? 'bg-[#ff7043]/10 font-semibold text-[#fff2df]' : 'text-[#bdc6c5] hover:bg-white/[0.04] hover:text-[#fff2df]'}`}
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
    <main className="min-h-screen bg-[#101714] px-4 py-6 text-[#e1e6e8] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9">
        <aside className="hidden lg:block"><div className="sticky top-24 border-r border-[#b99256]/20 pr-5"><GameWikiSidebar config={config} activeHref={activeHref} /></div></aside>
        <div className="min-w-0"><GameWikiMobileNav config={config} activeHref={activeHref} />{children}</div>
      </div>
    </main>
  );
}

export function GameWikiHero({ eyebrow, title, description, version, image }: { eyebrow: string; title: string; description: string; version: string; image?: { src: string; alt: string } }) {
  return (
    <section className="relative overflow-hidden border border-[#b99256]/35 bg-[#17201d] px-5 py-7 shadow-[0_12px_32px_rgba(0,0,0,0.16)] sm:px-8 sm:py-10">
      {image ? <Image src={image.src} alt={image.alt} fill sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-25" /> : <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(185,146,86,0.16),transparent_32%),linear-gradient(135deg,rgba(255,112,67,0.08),transparent_45%)]" />}
      <div className="relative max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[#fff2df] sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#c4cfca] sm:text-lg">{description}</p>
        <p className="mt-5 inline-flex border border-[#b99256]/35 bg-[#0f1513]/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#f2d6ac]">{version}</p>
      </div>
    </section>
  );
}

export function GameWikiCategoryCard({ item }: { item: GameWikiLink }) {
  return (
    <a href={item.href} className="group border border-[#b99256]/25 bg-[#17201d] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-colors hover:border-[#ff8662]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">
      <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-xl font-semibold text-[#fff2df]">{item.label}</h3><span className="text-[#dca464] transition-transform group-hover:translate-x-0.5">→</span></div>
      {item.description && <p className="mt-3 text-sm leading-6 text-[#bdc6c5]">{item.description}</p>}
      {item.count && <p className="mt-5 border-t border-white/10 pt-3 text-xs font-semibold tracking-wide text-[#dca464]">{item.count}</p>}
    </a>
  );
}

export function GameWikiArticleLayout({ config, activeHref, title, description, publishedAt, modifiedAt, reviewedAt, toc, children, schema, label = 'Reference', labelTone = 'verified', coverage, footerNote = 'RUNBACK reference' }: { config: GameWikiConfig; activeHref: string; title: string; description: string; publishedAt?: string; modifiedAt?: string; reviewedAt?: string; toc: string[]; children: ReactNode; schema: unknown; label?: string; labelTone?: 'verified' | 'neutral'; coverage?: string; footerNote?: string }) {
  const related = config.navigationSections.flatMap((section) => section.links).filter((item) => item.href !== activeHref);
  const lastReviewed = reviewedAt ?? modifiedAt ?? publishedAt;
  const tocLinks = toc.map((item) => ({ label: item, href: '#' + item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }));
  const onThisPage = (compact = false) => (
    <nav aria-label="On this page" className={compact ? 'border border-[#b99256]/25 bg-[#17201d] p-4' : ''}>
      <p className="text-sm font-semibold text-[#fff2df]">On this page</p>
      <ul className="mt-3 space-y-2 text-sm">
        {tocLinks.map((item) => <li key={item.href}><a href={item.href} className="text-[#c4cfca] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">{item.label}</a></li>)}
      </ul>
    </nav>
  );
  return (
    <main className="min-h-screen bg-[#101714] px-4 py-6 text-[#e1e6e8] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9 xl:grid-cols-[13.5rem_minmax(0,46rem)_13rem]">
        <aside className="hidden lg:block"><div className="sticky top-24 border-r border-[#b99256]/20 pr-5"><GameWikiSidebar config={config} activeHref={activeHref} /></div></aside>
        <article className="min-w-0">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
          <GameWikiMobileNav config={config} activeHref={activeHref} />
          <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-[#aeb7bc]"><a href="/">Home</a><span>›</span><a href="/#game-library">Games</a><span>›</span><a href={config.hubHref}>{config.gameName}</a><span>›</span><span aria-current="page">{title}</span></nav>
          <header className="mt-5 border-b border-[#b99256]/25 pb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dca464]">RUNBACK → {config.gameName} Wiki</p>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#fff2df] sm:text-4xl">{title}</h1>
            <p className="mt-4 text-base leading-7 text-[#c4cfca]">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs"><span className="border border-[#b99256]/30 bg-[#17201d] px-2.5 py-1.5 font-semibold text-[#f2d6ac]">{config.version}</span><span className={`border px-2.5 py-1.5 font-semibold ${labelTone === 'neutral' ? 'border-[#dca464]/30 bg-[#dca464]/10 text-[#f0c98b]' : 'border-[#79c7a0]/30 bg-[#79c7a0]/10 text-[#a8d9b8]'}`}>{label}</span>{coverage && <span className="border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[#c4cfca]">{coverage}</span>}{lastReviewed && <span className="border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[#c4cfca]">Last reviewed {lastReviewed.slice(0, 10)}</span>}</div>
          </header>
          <details className="mt-5 border border-[#b99256]/25 bg-[#17201d] p-4 xl:hidden"><summary className="cursor-pointer text-sm font-semibold text-[#fff2df]">On this page</summary><div className="mt-3">{onThisPage()}</div></details>
          {children}
        </article>
        <aside className="hidden xl:block"><div className="sticky top-24 space-y-8 border-l border-[#b99256]/20 pl-5">{onThisPage()}<nav aria-label={config.relatedLabel ?? 'Related guides'}><p className="text-sm font-semibold text-[#fff2df]">{config.relatedLabel ?? 'Related guides'}</p><ul className="mt-3 space-y-2 text-sm">{related.map((item) => <li key={item.href}><a href={item.href} className="text-[#c4cfca] hover:text-[#ff9a7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8662]">{item.label}</a></li>)}</ul></nav><div className="border-t border-white/10 pt-4 text-xs leading-5 text-[#aeb7bc]">{config.version}<br />{footerNote}</div></div></aside>
      </div>
    </main>
  );
}
