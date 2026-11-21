import type { Metadata } from 'next';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';
import { greatswordBuildGuideCss } from '@/lib/sephiria-builds/greatsword-build-guide';
import { renderStaffIonicaSpiritBuildGuide } from '@/lib/sephiria-builds/staff-ilonica-spirit-build-guide';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';

const href = '/games/sephiria/builds/staff/ilonica-spirit-build';
const group = listedWeaponBuildGroups.find((entry) => entry.builds.some((build) => build.href === href))!;
const position = group.builds.findIndex((build) => build.href === href);
const currentBuild = group.builds[position];

export const metadata: Metadata = {
  title: `Sephiria ${currentBuild.title} | RUNBACK`,
  description: `${currentBuild.title} build for Sephiria — a Difficulty 60 staff that cannot cast Grimoire by hand: the Flower Staff spin becomes Grimoire: Bolt Barrage and fires every bolt you carry. 6,000 DPS.`,
  alternates: { canonical: href },
};

export default function StaffIonicaSpiritBuildPage() {
  const previous = group.builds[position - 1];
  const next = group.builds[position + 1];
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <style>{greatswordBuildGuideCss}</style>
      <article lang="en" className="bg-pg">
        <div dangerouslySetInnerHTML={{ __html: renderStaffIonicaSpiritBuildGuide(currentBuild.title) }} />
        <nav aria-label="Staff build navigation" className="bg-wrap" style={{ marginTop: 72 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', borderTop: '1px solid color-mix(in srgb,var(--gold-border) 25%,transparent)', paddingTop: 28 }}>
            {previous && <a href={previous.href}>← {previous.title}</a>}
            <a href={group.href}>Back to Staff Builds</a>
            {next && <a href={next.href}>{next.title} →</a>}
          </div>
        </nav>
      </article>
    </SephiriaGreatswordBuildShell>
  );
}
