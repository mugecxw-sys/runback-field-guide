import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  SephiriaBuildMobileNav,
  SephiriaBuildSidebar,
} from '@/components/game-wiki/sephiria-build-sidebar';
import { SephiriaBuildLayout } from '@/components/game-wiki/sephiria-build-layout';
import { listedWeaponBuildGroups, weaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { sephiriaImageManifest } from '@/lib/sephiria-image-manifest';
import type { LocalBuildImage, SephiriaSwordShieldBuildPageData } from '@/lib/sephiria-builds/sword-and-shield-pages';
import sns06Layout from '@/lib/sephiria-builds/sns-06-layout.json';
import type { BuildLayoutData } from '@/components/game-wiki/sephiria-build-layout';
import { buildLayoutForDisplay } from '@/lib/sephiria-builds/build-layout-from-planner';
import { siteUrl } from '@/lib/repo-guide-pages';

const layoutByBuild = {
  'SNS-06': sns06Layout as BuildLayoutData,
};

export function PageSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-10 min-w-0 scroll-mt-24 border-t border-[var(--gold-border)]/25 pt-6 sm:mt-12 sm:pt-7"
    >
      {number && <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
        Build Guide / {number}
      </p>}
      <h2
        id={`${id}-heading`}
        className="mb-4 mt-2 font-serif text-2xl font-semibold leading-tight text-[var(--heading)] sm:mb-5 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="min-w-0 space-y-4 text-[var(--body)]">{children}</div>
    </section>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
      {children}
    </div>
  );
}

export function LocalGameImage({ image, size = 44 }: { image: LocalBuildImage; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative flex shrink-0 items-center justify-center overflow-hidden border border-[var(--gold-border)]/25 bg-[var(--surface-inset)] p-1"
      style={{ width: size, height: size }}
    >
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        unoptimized
        loading="lazy"
        decoding="async"
        sizes={`${size}px`}
        className="h-full w-full object-contain [image-rendering:pixelated]"
      />
    </span>
  );
}

export function SephiriaBuildSetupCards({ cards }: { cards: SephiriaSwordShieldBuildPageData['setup'] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title}>
          <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{card.title}</h3>
          {card.fruits && <ul className="mt-3 space-y-3">{card.fruits.map(fruit => <li key={fruit.category} className="flex items-center gap-3">
            <LocalGameImage image={fruit.image} size={40} />
            <div><p className="font-semibold text-[var(--heading)]">{fruit.fruit} ×{fruit.quantity}</p><p className="text-sm text-[var(--muted)]">{fruit.category}</p></div>
          </li>)}</ul>}
          {card.selections && <ul className="mt-3 space-y-3">{card.selections.map(selection => <li key={selection.name} className="flex min-w-0 items-center gap-3">
            <LocalGameImage image={selection.image} size={40} />
            <div className="min-w-0"><p className="break-words text-sm font-semibold leading-6 text-[var(--heading)]">{selection.name}</p>{selection.note && <p className="text-xs leading-5 text-[var(--body-soft)]">{selection.note}</p>}</div>
          </li>)}</ul>}
          {(!card.selections || card.image || card.lines.length > 0) && <div className="mt-3 flex items-start gap-3">
            {card.image && <LocalGameImage image={card.image} size={44} />}
            <ul className="space-y-1 text-sm leading-6 text-[var(--body-soft)]">{card.lines.map((line) => <li key={line}>{line}</li>)}</ul>
          </div>}
          {card.description && <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">{card.description}</p>}
        </Card>
      ))}
    </div>
  );
}

function SnapshotField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-b border-[var(--gold-border)]/15 pb-2 last:border-0 last:pb-0">
      <dt className="text-[var(--muted)]">{label}</dt>
      <dd className="min-w-0 font-medium text-[var(--heading)]">{children}</dd>
    </div>
  );
}

export function SephiriaBuildVideo({
  videoPath,
  title,
  caption,
  poster,
  preload = 'none',
}: {
  videoPath: string;
  title: string;
  caption: string;
  poster?: string;
  preload?: 'none' | 'metadata';
}) {
  return (
    <div className="max-w-[640px]">
      <video controls playsInline preload={preload} poster={poster} aria-label={title} className="block aspect-video w-full border border-[var(--gold-border)]/25 bg-[var(--surface-inset)]">
        <source src={videoPath} type="video/mp4" />
        <track kind="captions" src={videoPath.replace('gameplay-demo.mp4', 'gameplay-context.vtt')} srcLang="en" label="Gameplay context" />
        Your browser does not support this video.
      </video>
      <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">{caption}</p>
    </div>
  );
}

export function SephiriaSwordShieldBuildPage({
  data,
  layoutData,
  children,
}: {
  data: SephiriaSwordShieldBuildPageData;
  layoutData?: BuildLayoutData;
  children?: ReactNode;
}) {
  const currentGroup = weaponBuildGroups.find((group) =>
    group.builds.some((build) => build.href === data.href),
  );
  if (!currentGroup) throw new Error(`Missing Weapon Builds navigation for ${data.buildId}`);
  const currentBuild = currentGroup.builds.find((build) => build.href === data.href)!;
  const layout = layoutData ?? (currentBuild.plannerLayout ? buildLayoutForDisplay(currentBuild) : layoutByBuild[data.buildId as keyof typeof layoutByBuild]);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Sephiria', item: `${siteUrl}/games/sephiria` },
      { '@type': 'ListItem', position: 3, name: 'Sword & Shield Build', item: `${siteUrl}${data.href}` },
    ],
  };

  const weaponOptions = listedWeaponBuildGroups.map((group) => {
    const image = sephiriaImageManifest[group.imageKey];
    if (!image) throw new Error(`Missing local weapon category image ${group.imageKey}`);
    return {
      name: group.name,
      href: group.builds[0]?.href,
      selected: group.name === currentGroup.name,
      count: group.builds.length,
      image,
    };
  });

  return (
    <main className="min-h-screen bg-[var(--wiki-page-bg)] px-4 py-6 text-[var(--text)] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9">
        <aside className="hidden lg:block">
          <div className="sticky top-24 border-r border-[var(--gold-border)]/20 pr-5">
            <SephiriaBuildSidebar activeHref={data.href} />
          </div>
        </aside>
        <div className="min-w-0">
          <SephiriaBuildMobileNav activeHref={data.href} />
          <article className="mx-auto min-w-0 max-w-[1120px]">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c'),
              }}
            />
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex min-w-0 flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm"
            >
              <a className="underline-offset-4 hover:text-[var(--orange-hover)] hover:underline" href="/">RUNBACK</a>
              <span aria-hidden="true">/</span>
              <a className="underline-offset-4 hover:text-[var(--orange-hover)] hover:underline" href="/games/sephiria">Sephiria</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sword &amp; Shield Build</span>
            </nav>

            <section aria-labelledby="weapon-builds-heading">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">SEPHIRIA BUILDS</p>
              <h2 id="weapon-builds-heading" className="mb-3 mt-1 font-serif text-2xl font-semibold text-[var(--heading)]">Weapon Builds</h2>
              <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))' }}>
                {weaponOptions.map((option) => (
                  <Card key={option.name}>
                    <div className="flex min-w-0 items-center gap-3">
                      {option.image ? <LocalGameImage image={option.image} size={36} /> : <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center border border-[var(--gold-border)]/25 text-xs text-[var(--gold-text)]">◇</span>}
                      <div className="min-w-0">
                        {option.href ? (
                          <a href={option.href} className="font-semibold text-[var(--heading)] hover:text-[var(--orange-hover)]">{option.name}</a>
                        ) : <span className="font-semibold text-[var(--heading)]">{option.name}</span>}
                        <p className="mt-1 text-xs text-[var(--muted)]">{option.count ? `${option.count} build${option.count === 1 ? '' : 's'}` : 'Coming soon'}{option.selected ? ' · Selected' : ''}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section aria-labelledby="weapon-build-list-heading" className="mt-6">
              <h2 id="weapon-build-list-heading" className="mb-3 font-serif text-2xl font-semibold text-[var(--heading)]">Sword &amp; Shield Builds</h2>
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))' }}>
                {currentGroup.builds.filter((build) => build.listed !== false).map((build) => (
                  <a key={build.href} href={build.href} aria-current={build.href === data.href ? 'page' : undefined} className="min-w-0 border border-[var(--orange-text)]/60 bg-[var(--surface)] p-4 hover:border-[var(--orange-text)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{build.title}</h3>
                      {build.href === data.href && <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--orange-text)]">Current</span>}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]"><span className="font-semibold text-[var(--heading)]">Weapon Route:</span> {build.weaponRoute.join(' → ')}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--body-soft)]"><span className="font-semibold text-[var(--heading)]">{build.comboLabel ?? 'Final Build'}:</span> {build.finalBuild.join(' · ')}</p>
                    {build.style && <p className="mt-1 text-sm leading-6 text-[var(--body-soft)]"><span className="font-semibold text-[var(--heading)]">Style:</span> {build.style}</p>}
                  </a>
                ))}
              </div>
            </section>

            <header className="mt-8 grid min-w-0 gap-5 border border-[var(--gold-border)]/35 bg-[var(--surface)] p-5 sm:p-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))' }}>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">RUNBACK FIELD GUIDE / SEPHIRIA</p>
                <h1 className="mt-3 break-words font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">{data.h1 ?? 'Sephiria Sword & Shield Build'}</h1>
                <p className="mt-3 font-serif text-xl font-semibold text-[var(--gold-text)] sm:text-2xl">{data.subtitle}</p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--body-soft)] sm:text-base">{data.intro}</p>
                {data.introDetail && <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--body-soft)] sm:text-base">{data.introDetail}</p>}
              </div>
              <aside aria-label="Build Snapshot" className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface-inset)] p-4 sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Build Snapshot</p>
                <dl className="mt-4 grid gap-2">
                  {!data.hideBuildId && <SnapshotField label="Build ID">{data.buildId}</SnapshotField>}
                  <SnapshotField label="Costume"><span className="inline-flex items-center gap-2"><LocalGameImage image={data.costumeImage} size={36} />{data.costumeName ?? 'White Rabbit'}</span></SnapshotField>
                  {data.costumeEffects && <SnapshotField label="Costume Effects"><span className="grid gap-1">{data.costumeEffects.map((effect) => <span key={effect}>{effect}</span>)}</span></SnapshotField>}
                  {data.weaponName && <SnapshotField label="Weapon">{data.weaponName}</SnapshotField>}
                  <SnapshotField label="Weapon Route">
                    <span className="flex flex-wrap items-center gap-1.5">
                      {data.weaponRoute.map((step, index) => <span key={step.label} className="inline-flex items-center gap-1.5">{index > 0 && <span aria-hidden="true" className="text-[var(--muted)]">→</span>}<span className="inline-flex items-center gap-1"><LocalGameImage image={step.image} size={32} />{step.label}</span></span>)}
                    </span>
                  </SnapshotField>
                  <SnapshotField label={data.comboLabel ?? "Final Build"}><span className="flex flex-wrap gap-x-2 gap-y-1">{layout ? layout.comboCounts.map((combo) => <span key={combo.name}>{combo.name} {combo.count}</span>) : currentBuild.finalBuild.map((combo) => <span key={combo}>{combo}</span>)}</span></SnapshotField>
                  {data.coreEngine ? <SnapshotField label="Core Engine">{data.coreEngine}</SnapshotField> : <SnapshotField label="Main Damage"><span className="font-semibold text-[var(--orange-text)]">{data.mainDamage}</span></SnapshotField>}
                  {data.buildStyle && <SnapshotField label="Build Style">{data.buildStyle}</SnapshotField>}
                </dl>
              </aside>
            </header>

            {children ?? <>
            <PageSection id="before-the-run" number="01" title="Before the Run">
              <SephiriaBuildSetupCards cards={data.setup} />
            </PageSection>

            <PageSection id="core-items" number="02" title="Core Items">
              {(data.coreItems.some(item => item.group) ? ['Essential Engine', 'Supporting Core'] : ['']).map(group => <div key={group}>
                {group && <h3 className="mb-3 font-serif text-xl font-semibold text-[var(--heading)]">{group}</h3>}
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{data.coreItems.filter(item => !group || (item.group ?? 'Essential Engine') === group).map(item => <Card key={item.name}>
                  <div className="flex min-w-0 items-center gap-3"><LocalGameImage image={item.image} size={44} /><div className="min-w-0"><h4 className="break-words font-semibold leading-6 text-[var(--heading)]">{item.name}</h4><p className="text-sm text-[var(--gold-text)]">Target effective level · Lv{item.effectiveLevel}</p></div></div>
                  <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]"><span className="font-semibold text-[var(--heading)]">Role:</span> {item.role}</p>
                  {item.categories && <p className="mt-2 text-xs text-[var(--muted)]">{item.categories.join(' / ')}</p>}
                </Card>)}</div>
              </div>)}
            </PageSection>

            <PageSection id="damage" number="03" title="How This Build Deals Damage">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">{data.damageHeading}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {data.damageSteps.map((step, index) => <Card key={step.title}><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">{String(index + 1).padStart(2, '0')}</p><h3 className="mt-1 font-serif text-lg font-semibold text-[var(--heading)]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{step.detail}</p></Card>)}
              </div>
              <Card><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">Main Damage</p><p className="mt-2 text-xl font-semibold text-[var(--orange-text)]">{data.mainDamage}</p></Card>
            </PageSection>

            <PageSection id="how-to-play" number="04" title="How to Play">
              <ol className="grid gap-3 sm:grid-cols-2">
                {weaponBuildGroups.find((group) => group.builds.some((build) => build.href === data.href))!.builds.find((build) => build.href === data.href)!.fieldNotes.map((note, index) => (
                  <li key={note.title} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">Play Note {index + 1}</p>
                    <h3 className="mt-1 font-semibold leading-6 text-[var(--heading)]">{note.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{note.detail}</p>
                  </li>
                ))}
              </ol>
            </PageSection>

            <PageSection id="replacements" number="05" title="Replacements">
              <Card>
                <p className="text-sm leading-6 text-[var(--body-soft)]">{data.replacementsText ?? 'No replacement Artifact has been verified for this exact preset yet. The page lists its confirmed core items without suggesting unverified swaps.'}</p>
              </Card>
              {data.replacements && <div className="grid gap-3 md:grid-cols-2">
                {data.replacements.map((entry) => <Card key={entry.missing}>
                  <h3 className="font-semibold text-[var(--heading)]">Missing: {entry.missing}</h3><p className="mt-2 text-sm font-semibold text-[var(--gold-text)]">Use: {entry.replacement}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]"><strong>Keeps:</strong> {entry.keep}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]"><strong>Trade-off:</strong> {entry.tradeOff}</p>
                </Card>)}
              </div>}
              {data.replacementKeep && <Card><p className="text-sm leading-6 text-[var(--body-soft)]">{data.replacementKeep}</p></Card>}
            </PageSection>

            {layout && <PageSection id="build-layout" number="06" title="Build Layout">
              <SephiriaBuildLayout layoutData={layout} build={currentBuild} />
            </PageSection>}

            <PageSection id="gameplay-demo" number="07" title="Gameplay Demo">
              <SephiriaBuildVideo videoPath={data.videoPath} poster={data.videoPoster} title={`${data.hideBuildId ? data.subtitle : data.buildId} gameplay demo`} caption="A short gameplay clip showing the build in an actual run." />
            </PageSection>

            <PageSection id="related-guides" number="08" title="Related Guides">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {data.relatedGuides.map((guide) => (
                  <a key={guide.href} href={guide.href} className="group flex min-w-0 items-center justify-between gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 transition-colors hover:border-[var(--orange-text)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">
                    <span className="min-w-0 break-words font-semibold text-[var(--heading)] group-hover:text-[var(--orange-hover)]">{guide.title}</span>
                    <span aria-hidden="true" className="shrink-0 text-[var(--gold-label)]">→</span>
                  </a>
                ))}
              </div>
            </PageSection>
            </>}
          </article>
        </div>
      </div>
    </main>
  );
}
