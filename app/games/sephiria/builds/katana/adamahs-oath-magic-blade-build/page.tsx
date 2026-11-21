import type { Metadata } from 'next';
import { SephiriaGreatswordBuildShell } from '@/components/game-wiki/sephiria-greatsword-build-shell';
import { greatswordBuildGuideCss } from '@/lib/sephiria-builds/greatsword-build-guide';
import { renderKatanaAdamahsOathBuildGuide } from '@/lib/sephiria-builds/katana-adamahs-oath-build-guide';
import { listedWeaponBuildGroups } from '@/lib/sephiria-build-navigation';

const href = '/games/sephiria/builds/katana/adamahs-oath-magic-blade-build';
const group = listedWeaponBuildGroups.find((entry) => entry.builds.some((build) => build.href === href))!;
const position = group.builds.findIndex((build) => build.href === href);
const currentBuild = group.builds[position];

export const metadata: Metadata = {
  title: `Sephiria ${currentBuild.title} | RUNBACK`,
  description: `${currentBuild.title} build for Sephiria — a Difficulty 60 katana where Adamah’s Oath turns every magic cast into a Magic Blade that hits for 20 + 70% of your empty MP. Keep the mana bar big and empty. 22,000 DPS.`,
  alternates: { canonical: href },
};

export default function KatanaAdamahsOathMagicBladeBuildPage() {
  const previous = group.builds[position - 1];
  const next = group.builds[position + 1];
  return (
    <SephiriaGreatswordBuildShell activeHref={href}>
      <style>{greatswordBuildGuideCss}</style>
      <article lang="en" className="bg-pg">
        <div dangerouslySetInnerHTML={{ __html: renderKatanaAdamahsOathBuildGuide(currentBuild.title) }} />
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
