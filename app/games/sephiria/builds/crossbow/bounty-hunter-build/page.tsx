import type { Metadata } from 'next';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';
import { greatswordBuildGuideCss } from '@/lib/sephiria-builds/greatsword-build-guide';
import { renderCrossbowBountyHunterBuildGuide } from '@/lib/sephiria-builds/crossbow-bounty-hunter-build-guide';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';

const href = '/games/sephiria/builds/crossbow/bounty-hunter-build';
const group = listedWeaponBuildGroups.find((entry) => entry.builds.some((build) => build.href === href))!;
const position = group.builds.findIndex((build) => build.href === href);
const currentBuild = group.builds[position];

export const metadata: Metadata = {
  title: `Sephiria ${currentBuild.title} | RUNBACK`,
  description: `${currentBuild.title} build for Sephiria — why Dash Count is a damage stat, how Advanced Reload turns dashing into a reload, and the Sturdy/Precision item setup behind a 29,000 DPS run.`,
  alternates: { canonical: href },
};

export default function CrossbowBountyHunterBuildPage() {
  const previous = group.builds[position - 1];
  const next = group.builds[position + 1];
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <style>{greatswordBuildGuideCss}</style>
      <article lang="en" className="bg-pg">
        <div dangerouslySetInnerHTML={{ __html: renderCrossbowBountyHunterBuildGuide(currentBuild.title) }} />
        <nav aria-label="Colossal Crossbow build navigation" className="bg-wrap" style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', borderTop: '1px solid color-mix(in srgb,var(--gold-border) 25%,transparent)', paddingTop: 28 }}>
            {previous && <a href={previous.href}>← {previous.title}</a>}
            <a href={group.href}>Back to Colossal Crossbow Builds</a>
            {next && <a href={next.href}>{next.title} →</a>}
          </div>
        </nav>
      </article>
    </SephiriaGreatswordBuildShell>
  );
}
