import Image from 'next/image';
import { Card, LocalGameImage, PageSection, SephiriaBuildSetupCards, SephiriaBuildVideo, SephiriaSwordShieldBuildPage } from './sephiria-sword-shield-build-page';
import {
  electricGameplayNotes, shockAvoidItem, shockComboTargets, shockCoreArtifacts,
  shockDifficulty60Guide, shockRunMedia, shockSupportingArtifacts,
} from '@/lib/sephiria-builds/shock-difficulty-60';

function ArtifactCard({ item }: { item: (typeof shockCoreArtifacts)[number] }) {
  return <Card>
    <div className="flex min-w-0 items-center gap-3">
      <LocalGameImage image={item.image} />
      <div className="min-w-0"><h4 className="break-words font-semibold leading-6 text-[var(--heading)]">{item.name}</h4><p className="text-sm text-[var(--gold-text)]">Max Lv{item.maxLevel}</p></div>
    </div>
    <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">{item.role}</p>
    <p className="mt-2 text-xs text-[var(--muted)]">{item.categories.join(' / ')}</p>
  </Card>;
}

export function SephiriaShockDifficulty60Page() {
  return (
    <SephiriaSwordShieldBuildPage data={shockDifficulty60Guide}>
      <PageSection id="before-the-run" title="Before the Run">
        <SephiriaBuildSetupCards cards={shockDifficulty60Guide.setup} />
      </PageSection>

      <PageSection id="core-items" title="Core Artifacts">
        <h3 className="font-serif text-xl font-semibold text-[var(--heading)]">Core</h3>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{shockCoreArtifacts.map((item) => <ArtifactCard key={item.name} item={item} />)}</div>
        <h3 className="pt-3 font-serif text-xl font-semibold text-[var(--heading)]">Supporting Artifacts</h3>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{shockSupportingArtifacts.map((item) => <ArtifactCard key={item.name} item={item} />)}</div>
      </PageSection>

      <PageSection id="combo-targets" title="Core Combo Targets">
        <div className="grid gap-3 sm:grid-cols-3">{shockComboTargets.map((combo) => <Card key={combo.name}><h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{combo.name}</h3><p className="mt-2 text-xl font-semibold text-[var(--orange-text)]">{combo.count} / {combo.count}</p></Card>)}</div>
        <Card><h3 className="font-semibold text-[var(--heading)]">Extra bonuses from this run</h3><p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">Storm Cloud, Companion, and other temporary combos appeared during this clear. They are extra bonuses, not core requirements.</p></Card>
      </PageSection>

      <PageSection id="damage" title="How This Build Deals Damage">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">{shockDifficulty60Guide.damageHeading}</p>
        <div className="grid gap-3 sm:grid-cols-2">{shockDifficulty60Guide.damageSteps.map((step) => <Card key={step.title}><h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{step.detail}</p></Card>)}</div>
        <Card><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">Main Damage</p><p className="mt-2 text-xl font-semibold text-[var(--orange-text)]">Continuous Electrocution + repeated close-range triggers</p></Card>
      </PageSection>

      <PageSection id="how-to-play" title="How to Play">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{electricGameplayNotes.map((note) => <Card key={note.title}>
          <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">{note.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{note.detail}</p>
          {note.multipliers && <ul className="mt-3 space-y-2 text-sm font-semibold leading-6 text-[var(--gold-text)]">{note.multipliers.map((line) => <li key={line}>{line}</li>)}</ul>}
        </Card>)}</div>
      </PageSection>

      <PageSection id="mistakes" title="Important Mistakes to Avoid">
        <div className="grid gap-3 sm:grid-cols-2">
          <Card><div className="flex items-center gap-3"><LocalGameImage image={shockAvoidItem.image} /><h3 className="font-serif text-lg font-semibold text-[var(--heading)]">Do Not Take Plasma Helmet</h3></div><p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">Plasma Helmet reduces the damage of each Electrocution stack for this build.</p></Card>
          <Card><h3 className="font-serif text-lg font-semibold text-[var(--heading)]">Compass Placement</h3><p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">Do not place Thunderstorm Tracking Compass below Thunder’s Earring. The Compass is primarily a trigger, and its damage contribution is far lower than Electro Chakram’s. Do not sacrifice a more important layout just to strengthen the Compass itself.</p></Card>
        </div>
      </PageSection>

      <PageSection id="run-result" title="My Difficulty 60 Result">
        <Card><dl className="grid gap-4 text-sm leading-6 sm:grid-cols-2">
          <div><dt className="font-semibold text-[var(--gold-text)]">Difficulty</dt><dd>60</dd></div>
          <div><dt className="font-semibold text-[var(--gold-text)]">Costume</dt><dd>Frog — used in this clear</dd></div>
          <div><dt className="font-semibold text-[var(--gold-text)]">Weapon Route</dt><dd>Sword &amp; Shield → Conductor → Blinding Silence</dd></div>
          <div><dt className="font-semibold text-[var(--gold-text)]">Core Combo Targets</dt><dd>Magitech 10/10 · Precision 10/10 · Curse 4/4</dd></div>
          <div><dt className="font-semibold text-[var(--gold-text)]">Final DPS</dt><dd>About 20,000 in my run</dd></div>
          <div><dt className="font-semibold text-[var(--gold-text)]">Result</dt><dd>Cleared Difficulty 60 comfortably once the build was complete.</dd></div>
        </dl></Card>
        <div className="grid items-start gap-4 xl:grid-cols-2">
          <figure className="min-w-0"><a href={shockRunMedia.layout.src} target="_blank" rel="noreferrer" aria-label="Open the full final Build screenshot"><Image {...shockRunMedia.layout} alt="The final Electric Build and Combo totals from this Difficulty 60 clear" unoptimized className="block h-auto w-full border border-[var(--gold-border)]/25" /></a><figcaption className="mt-2 text-sm leading-6 text-[var(--body-soft)]">The final Build from this run. Open the image to inspect the item layout.</figcaption></figure>
          <figure className="min-w-0"><a href={shockRunMedia.dps.src} target="_blank" rel="noreferrer" aria-label="Open the full DPS screenshot"><Image {...shockRunMedia.dps} alt="DPS screenshot from the tested Sword and Shield Electric Build" unoptimized className="block h-auto w-full border border-[var(--gold-border)]/25" /></a><figcaption className="mt-2 text-sm leading-6 text-[var(--body-soft)]">Around 20,000 DPS in this Difficulty 60 run.</figcaption></figure>
        </div>
        <h3 className="pt-2 font-serif text-xl font-semibold text-[var(--heading)]">Difficulty 60 Gameplay</h3>
        <SephiriaBuildVideo videoPath={shockRunMedia.video} poster={shockRunMedia.poster} preload="metadata" title="Difficulty 60 Electric Build gameplay" caption="This is the final version of the Electric Build from my Difficulty 60 clear. The run reached about 20,000 DPS once the build was complete." />
      </PageSection>

      <PageSection id="related-guides" title="Related Guides">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{shockDifficulty60Guide.relatedGuides.map((guide) => <a key={guide.href} href={guide.href} className="flex min-w-0 items-center justify-between gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 font-semibold text-[var(--heading)] hover:border-[var(--orange-text)]/60 hover:text-[var(--orange-hover)]"><span>{guide.title}</span><span aria-hidden="true">→</span></a>)}</div>
      </PageSection>
    </SephiriaSwordShieldBuildPage>
  );
}
