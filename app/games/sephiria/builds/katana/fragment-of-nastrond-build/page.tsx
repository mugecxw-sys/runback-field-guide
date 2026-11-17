import type { Metadata } from 'next';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';
import { greatswordBuildGuideCss } from '@/lib/sephiria-builds/greatsword-build-guide';
import { renderKatanaFragmentOfNastrondBuildGuide } from '@/lib/sephiria-builds/katana-fragment-of-nastrond-build-guide';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';

const href = '/games/sephiria/builds/katana/fragment-of-nastrond-build';
const group = listedWeaponBuildGroups.find((entry) => entry.builds.some((build) => build.href === href))!;
const position = group.builds.findIndex((build) => build.href === href);
const currentBuild = group.builds[position];

export const metadata: Metadata = {
  title: `Sephiria ${currentBuild.title} | RUNBACK`,
  description: `${currentBuild.title} build for Sephiria — a Difficulty 60 Cold Damage katana build: attacking after a Tackle activates Frost Relic: Skaði, so Scabbard of Exorcism, Frozen Bow and Tiny Magic Conch do the killing. 18,000 DPS.`,
  alternates: { canonical: href },
};

export default function KatanaFragmentOfNastrondBuildPage() {
  const previous = group.builds[position - 1];
  const next = group.builds[position + 1];
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <style>{greatswordBuildGuideCss}</style>
      <article lang="en" className="bg-pg">
        <div dangerouslySetInnerHTML={{ __html: renderKatanaFragmentOfNastrondBuildGuide(currentBuild.title) }} />
        <nav aria-label="Katana build navigation" className="bg-wrap" style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', borderTop: '1px solid color-mix(in srgb,var(--gold-border) 25%,transparent)', paddingTop: 28 }}>
            {previous && <a href={previous.href}>← {previous.title}</a>}
            <a href={group.href}>Back to Katana Builds</a>
            {next && <a href={next.href}>{next.title} →</a>}
          </div>
        </nav>
      </article>
    </SephiriaGreatswordBuildShell>
  );
}
