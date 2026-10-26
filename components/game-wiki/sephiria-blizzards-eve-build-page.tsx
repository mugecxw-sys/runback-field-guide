import {
  Card,
  LocalGameImage,
  PageSection,
  SephiriaBuildVideo,
  SephiriaSwordShieldBuildPage,
} from '@/components/game-wiki/sephiria-sword-shield-build-page';
import { SephiriaBuildLayout, type BuildLayoutData } from '@/components/game-wiki/sephiria-build-layout';
import { sns11CoreArtifacts, sns11DamageSources, sns11Page } from '@/lib/sephiria-builds/sns-11-page';
import sns11Layout from '@/lib/sephiria-builds/sns-11-layout.json';
import { weaponBuildGroups } from '@/lib/sephiria-build-navigation';

export function SephiriaBlizzardsEveBuildPage() {
  const layout = sns11Layout as BuildLayoutData;
  const notes = weaponBuildGroups.flatMap((group) => group.builds).find((build) => build.href === sns11Page.href)!.fieldNotes;

  return (
    <SephiriaSwordShieldBuildPage data={sns11Page} layoutData={layout}>
      <PageSection id="tested-dps" number="01" title="Tested DPS">
        <Card>
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[var(--gold-text)]">
            <strong className="font-serif text-4xl font-semibold text-[var(--orange-text)] sm:text-5xl">10,000+</strong>
            <span className="text-sm font-semibold">peak DPS in our test</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">Observed during our Boss test. Peak remained below 11,000.</p>
        </Card>
      </PageSection>

      <PageSection id="build-setup" number="02" title="Build Setup">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sns11Page.setup.map((card) => (
            <Card key={card.title}>
              <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{card.title}</h3>
              <div className="mt-3 flex items-start gap-3">
                {card.image && <LocalGameImage image={card.image} />}
                <ul className="space-y-1 text-sm leading-6 text-[var(--body-soft)]">
                  {card.lines.map((line) => <li key={line}>{line}</li>)}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        <h3 className="pt-3 font-serif text-xl font-semibold text-[var(--heading)]">Core Artifacts</h3>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sns11CoreArtifacts.map((item) => (
            <Card key={item.name}>
              <div className="flex min-w-0 items-center gap-3">
                <LocalGameImage image={item.image} />
                <div className="min-w-0">
                  <h4 className="break-words text-sm font-semibold leading-6 text-[var(--heading)]">{item.name}</h4>
                  <p className="text-sm text-[var(--gold-text)]">Effective Lv{item.effectiveLevel}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="build-layout" number="03" title="Backpack / Artifact Layout">
        <p className="text-sm text-[var(--body-soft)]">{layout.activeSlots} slots · {layout.artifactCount} Artifacts · {layout.tabletCount} Tablets</p>
        <SephiriaBuildLayout layoutData={layout} />
      </PageSection>

      <PageSection id="why-this-build-works" number="04" title="Why This Build Works">
        <p className="max-w-3xl text-sm leading-7 text-[var(--body-soft)]">The build does not rely on a single attack. Blizzard Hammer supplies the largest burst hits after Dash Count is consumed, Frozen Bow gives you a manual ranged option, and automatic ice projectiles keep adding damage to Frostbitten targets.</p>
        <p className="max-w-3xl text-sm leading-7 text-[var(--body-soft)]">That lets the build keep dealing damage while attacking normally, repositioning, or backing away from a Boss.</p>
      </PageSection>

      <PageSection id="key-damage-sources" number="05" title="Key Damage Sources">
        <div className="grid gap-3 xl:grid-cols-3">
          {sns11DamageSources.map((source) => (
            <Card key={source.name}>
              <div className="flex min-w-0 items-center gap-3">
                <LocalGameImage image={source.image} />
                <div className="min-w-0">
                  <h3 className="break-words font-serif text-lg font-semibold leading-6 text-[var(--heading)]">{source.name}</h3>
                  <p className="text-sm text-[var(--gold-text)]">Effective Lv{source.effectiveLevel}</p>
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--heading)]">{source.role}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{source.detail}</p>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection id="how-to-play" number="06" title="How to Play">
        <ol className="grid gap-3 sm:grid-cols-2">
          {notes.map((note, index) => (
            <li key={note.title} className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">Play Note {index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{note.title}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection id="test-video" number="07" title="Test Video">
        <SephiriaBuildVideo
          videoPath={sns11Page.videoPath}
          title="Blizzard's Eve build DPS test"
          poster={sns11Page.videoPath.replace('gameplay-demo.mp4', 'poster.webp')}
          caption="Blizzard's Eve build DPS test — peak DPS exceeded 10,000."
        />
      </PageSection>

      <PageSection id="related-builds" number="08" title="Related Builds">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sns11Page.relatedGuides.map((guide) => (
            <a key={guide.href} href={guide.href} className="group flex min-w-0 items-center justify-between gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 transition-colors hover:border-[var(--orange-text)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]">
              <span className="min-w-0 break-words font-semibold text-[var(--heading)] group-hover:text-[var(--orange-hover)]">{guide.title}</span>
              <span aria-hidden="true" className="shrink-0 text-[var(--gold-label)]">→</span>
            </a>
          ))}
        </div>
      </PageSection>
    </SephiriaSwordShieldBuildPage>
  );
}
