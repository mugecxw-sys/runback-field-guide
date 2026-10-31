import type { Metadata } from 'next';
import Image from 'next/image';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { sephiriaImageManifest } from '@/lib/sephiria-image-manifest';

const href = '/games/sephiria/builds/greatsword';

export const metadata: Metadata = {
  title: 'Sephiria Greatsword Builds | RUNBACK',
  alternates: { canonical: href },
  robots: { index: false, follow: false },
};

export default function GreatswordBuildsPage() {
  const group = listedWeaponBuildGroups.find((entry) => entry.href === href)!;
  const image = sephiriaImageManifest[group.imageKey]!;
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <section className="mx-auto max-w-[1080px] px-3 py-7 sm:px-8" aria-labelledby="greatsword-builds-heading">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">Sephiria Builds</p>
        <h1 id="greatsword-builds-heading" className="mt-3 font-serif text-3xl font-bold text-[var(--heading)] sm:text-4xl">Greatsword Builds</h1>
        <p className="mt-3 text-[var(--body-soft)]">Choose a build to see its setup, core items, weapon upgrades, and gameplay.</p>
        <div className="mt-8 grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,300px),1fr))' }}>
          {group.builds.map((build) => (
            <a key={build.href} href={build.href} className="group rounded-[14px] border border-[var(--gold-border)]/25 bg-[var(--surface)] p-[22px] transition-colors hover:border-[var(--gold-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--orange-text)]">
              <div className="flex items-center gap-3">
                <Image src={image.src} alt={group.name} width={44} height={44} unoptimized className="h-11 w-11 object-contain [image-rendering:pixelated]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-label)]">{group.name}</span>
              </div>
              <h2 className="mt-5 font-serif text-xl font-bold text-[var(--heading)]">{build.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">Run preparation, core items, weapon route, and gameplay.</p>
              <span className="mt-6 inline-block text-sm font-semibold text-[var(--gold-text)] group-hover:underline">View Build →</span>
            </a>
          ))}
        </div>
      </section>
    </SephiriaGreatswordBuildShell>
  );
}
