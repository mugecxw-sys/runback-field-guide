import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  SephiriaBuildMobileNav,
  SephiriaBuildSidebar,
} from '@/components/game-wiki/sephiria-build-sidebar';
import { weaponBuildGroups } from '@/lib/sephiria-build-navigation';
import { sephiriaImageManifest } from '@/lib/sephiria-image-manifest';
import { siteUrl } from '@/lib/repo-guide-pages';

const href =
  '/games/sephiria/builds/sword-and-shield/grip-of-fear-cleave-build';
const canonical = siteUrl + href;
const seoTitle = 'Sephiria Sword & Shield Build: Grip of Fear Cleave | RUNBACK';
const description =
  'Plan the Sephiria Sword & Shield Grip of Fear Cleave build with pre-run setup, core artifacts, damage mechanics, combo priorities, replacements, and a compact layout.';

const currentWeaponGroup = weaponBuildGroups.find((group) =>
  group.builds.some((build) => build.href === href),
)!;
const currentBuild = currentWeaponGroup.builds.find(
  (build) => build.href === href,
)!;
const fieldNotes = currentBuild.fieldNotes;

type LocalImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const itemImages = {
  shieldmate: {
    src: '/images/games/sephiria/wiki/items/item-ad8a8c9fdc5ad6ad.webp',
    alt: 'Shieldmate',
    width: 20,
    height: 24,
  },
  blueWristGuard: {
    src: '/images/games/sephiria/wiki/items/item-2b07459fd2bba5e7.webp',
    alt: 'Blue Wrist Guard',
    width: 23,
    height: 24,
  },
  absoluteRing: {
    src: '/images/games/sephiria/wiki/items/item-87d9f7d93e83ee1b.webp',
    alt: 'Absolute Ring',
    width: 18,
    height: 18,
  },
  swordTrainingManual: {
    src: '/images/games/sephiria/wiki/items/item-ee9cb5fa241435ec.webp',
    alt: 'Sword Training Manual',
    width: 18,
    height: 20,
  },
  valtersWorkMonocle: {
    src: '/images/games/sephiria/wiki/items/item-fe3773f4a62a3b74.webp',
    alt: 'Valter’s Work Monocle',
    width: 26,
    height: 23,
  },
  shieldTrainingManual: {
    src: '/images/games/sephiria/wiki/items/item-efab41a1712aaabe.webp',
    alt: 'Shield Training Manual',
    width: 18,
    height: 20,
  },
  silverPlate: {
    src: '/images/games/sephiria/wiki/items/item-6dc9a3ae9aad7a2c.webp',
    alt: 'Silver Plate',
    width: 26,
    height: 17,
  },
  silverBracelet: {
    src: '/images/games/sephiria/wiki/items/item-f252358efd022bf2.webp',
    alt: 'Silver Bracelet',
    width: 18,
    height: 20,
  },
  faultfinderNeedle: {
    src: '/images/games/sephiria/wiki/items/item-ea7cbd6f537c56ad.webp',
    alt: 'Faultfinder Needle',
    width: 19,
    height: 19,
  },
} satisfies Record<string, LocalImageAsset>;

const snapshotImages = {
  costume: sephiriaImageManifest['CST-02']!,
  defaultSwordAndShield: sephiriaImageManifest['WPN-01']!,
  tinyDestruction: sephiriaImageManifest['upgrade-3']!,
  gripOfFear: sephiriaImageManifest['upgrade-9']!,
};

const weaponRoute = [
  {
    label: 'Default Sword & Shield',
    image: snapshotImages.defaultSwordAndShield,
  },
  { label: 'Tiny Destruction', image: snapshotImages.tinyDestruction },
  { label: 'Grip of Fear', image: snapshotImages.gripOfFear },
];

function weaponImage(key: string): LocalImageAsset {
  const image = sephiriaImageManifest[key];
  if (!image) throw new Error(`Missing local Sephiria weapon image: ${key}`);
  return image;
}

type WeaponBuildOption = {
  name: string;
  href?: string;
  status: 'Selected' | 'Available' | 'Coming Soon';
  image: LocalImageAsset;
  buildCount: number;
};

const weaponBuilds: WeaponBuildOption[] = weaponBuildGroups.map((group) => ({
  name: group.name,
  href: group.builds[0]?.href,
  status:
    group.builds.length === 0
      ? 'Coming Soon'
      : group.name === currentWeaponGroup.name
        ? 'Selected'
        : 'Available',
  image: weaponImage(group.imageKey),
  buildCount: group.builds.length,
}));

type SetupCard = {
  title: string;
  lines: string[];
  image?: LocalImageAsset;
};

const setupCards: SetupCard[] = [
  { title: 'Talent Setup', lines: ['Survival 10', 'Swiftness 10', 'Wrath 10'] },
  {
    title: 'Starting Item',
    lines: ['Shieldmate'],
    image: itemImages.shieldmate,
  },
  {
    title: 'Fruit Skewer',
    lines: ['Adaptive ×1', 'Sturdy ×3', 'Wind Song ×1', 'Precision ×1'],
    image: {
      src: '/images/games/sephiria/wiki/pre-run/fruit-skewer.webp',
      alt: 'Fruit Skewer',
      width: 50,
      height: 50,
    },
  },
];

const coreItems = [
  {
    name: 'Shieldmate',
    level: 'Lv7',
    role: 'Cleave sustain',
    image: itemImages.shieldmate,
  },
  {
    name: 'Blue Wrist Guard',
    level: 'Lv6',
    role: 'Special Attack scaling',
    image: itemImages.blueWristGuard,
  },
  {
    name: 'Absolute Ring',
    level: 'Lv3',
    role: 'Cleave damage',
    image: itemImages.absoluteRing,
  },
  {
    name: 'Sword Training Manual',
    level: 'Lv3',
    role: 'Attack Speed',
    image: itemImages.swordTrainingManual,
  },
  {
    name: 'Valter’s Work Monocle',
    level: 'Lv5',
    role: 'Critical scaling',
    image: itemImages.valtersWorkMonocle,
  },
];

const directDamage = [
  {
    title: 'Sturdy 10',
    detail:
      'Sturdy 2 / 4 / 6 / 8 adds Physical Damage. Sturdy 10 adds +15% Physical Damage Amplification.',
  },
  {
    title: 'Tiny Destruction',
    detail: 'Special Attack: Cleave Damage +40%.',
  },
  {
    title: 'Core Artifacts',
    detail:
      'Blue Wrist Guard Lv6: +42% Special Attack Damage. Absolute Ring Lv3: +45 Special Attack Damage.',
  },
  {
    title: 'Precision 8',
    detail:
      'Adds +10% Critical Chance and supports the build’s critical scaling.',
  },
];

const cleaveEngine = [
  {
    title: 'Wind Song',
    detail:
      'Thresholds 2 / 4 / 6 / 8 add Attack Speed. Wind Song 10 adds Weapon Damage +15% and Dash Count +1.',
  },
  {
    title: 'Attack Speed',
    detail:
      'Grip of Fear gains Rising Dread every 3 seconds; its stack gain rate increases in proportion to Attack Speed. Attack Speed does not directly raise one Cleave hit’s damage.',
  },
  {
    title: 'Grip of Fear',
    detail: 'Build around Rising Dread and repeated Cleave use.',
  },
  {
    title: 'Shieldmate',
    detail: 'No longer consumes MP, supporting repeated Cleave use.',
  },
];

const replacements = [
  {
    missing: 'Blue Wrist Guard',
    missingImage: itemImages.blueWristGuard,
    replacement: 'Shield Training Manual',
    replacementImage: itemImages.shieldTrainingManual,
    keeps: 'Sturdy contribution and Special Attack Damage scaling.',
    tradeoff:
      'Caps at +8% Special Attack Damage (Lv2), versus Blue Wrist Guard’s +42% at Lv6.',
  },
  {
    missing: 'Absolute Ring',
    missingImage: itemImages.absoluteRing,
    replacement: 'Silver Plate',
    replacementImage: itemImages.silverPlate,
    keeps: 'Sturdy contribution and Special Attack scaling (+10% at Lv3).',
    tradeoff:
      'Gives up +45 flat Special Attack Damage and +60 range at Ring Lv3; adds +10% Normal Attack Damage.',
  },
  {
    missing: 'Sword Training Manual',
    missingImage: itemImages.swordTrainingManual,
    replacement: 'Silver Bracelet',
    replacementImage: itemImages.silverBracelet,
    keeps:
      'Wind Song contribution and Attack Speed for Rising Dread generation.',
    tradeoff:
      'At Lv3 it gives +12% Attack Speed versus the Manual’s +26%, and also reduces Move Speed by 8%.',
  },
  {
    missing: 'Valter’s Work Monocle',
    missingImage: itemImages.valtersWorkMonocle,
    replacement: 'Faultfinder Needle',
    replacementImage: itemImages.faultfinderNeedle,
    keeps: 'Precision contribution and Critical Chance (+15% at Lv5).',
    tradeoff:
      'At Lv5 it gives +15% Critical Chance versus the Monocle’s +45%; it has no close-range critical-damage penalty.',
  },
];

const relatedGuides = [
  {
    href: '/games/sephiria/guides/chapter-1-clear-guide',
    title: 'Chapter 1 Clear Guide',
  },
  {
    href: '/games/sephiria/guides/chapter-2-clear-guide',
    title: 'Chapter 2 Clear Guide',
  },
  {
    href: '/games/sephiria/guides/chapter-3-the-tree-guide',
    title: 'Chapter 3 Guide',
  },
  {
    href: '/games/sephiria/guides/chapter-4-fragment-guide',
    title: 'Chapter 4 Fragment Guide',
  },
  {
    href: '/games/sephiria/wiki/weapons',
    title: 'Sephiria Weapon Index',
  },
  {
    href: '/games/sephiria/wiki/weapon-upgrades',
    title: 'Weapon Upgrade Tree',
  },
];

const layoutPreviewColumns = 6;
const layoutPreviewRows = 4;
const layoutPreviewCells = Array.from(
  { length: layoutPreviewColumns * layoutPreviewRows },
  (_, index) => index,
);

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical },
  openGraph: {
    title: seoTitle,
    description,
    type: 'article',
    url: canonical,
    siteName: 'RUNBACK',
  },
  twitter: {
    card: 'summary',
    title: seoTitle,
    description,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'RUNBACK', item: siteUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sephiria',
      item: siteUrl + '/games/sephiria',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Sword & Shield Build',
      item: canonical,
    },
  ],
};

function PageSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id + '-heading'}
      className="mt-10 min-w-0 scroll-mt-24 border-t border-[var(--gold-border)]/25 pt-6 sm:mt-12 sm:pt-7"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
        Build Guide / {number}
      </p>
      <h2
        id={id + '-heading'}
        className="mb-4 mt-2 font-serif text-2xl font-semibold leading-tight text-[var(--heading)] sm:mb-5 sm:text-3xl"
      >
        {title}
      </h2>
      <div className="min-w-0 space-y-4 text-[var(--body)]">{children}</div>
    </section>
  );
}

function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        'min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 ' +
        className
      }
    >
      {children}
    </div>
  );
}

function LocalGameImage({
  image,
  size = 44,
}: {
  image: LocalImageAsset;
  size?: number;
}) {
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

function BuildSnapshotField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 border border-[var(--neutral-edge)]/10 bg-[var(--surface)] p-3">
      <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">
        {label}
      </dt>
      <dd className="mt-1 break-words text-sm font-semibold leading-6 text-[var(--heading)]">
        {children}
      </dd>
    </div>
  );
}

function WeaponBuildCard({ option }: { option: WeaponBuildOption }) {
  const className =
    'flex min-h-[4.25rem] min-w-0 items-center gap-3 border p-3 transition-colors ' +
    (option.status === 'Selected'
      ? 'border-[var(--orange-text)]/60 bg-[var(--surface-raised)] text-[var(--heading)] hover:border-[var(--orange-text)]'
      : 'border-[var(--gold-border)]/25 bg-[var(--surface)] text-[var(--secondary)]');

  const content = (
    <>
      <LocalGameImage image={option.image} size={44} />
      <span className="min-w-0">
        <span className="block break-words text-sm font-semibold leading-5">
          {option.name}
        </span>
        <span
          className={
            'mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] ' +
            (option.status === 'Selected'
              ? 'text-[var(--orange-text)]'
              : 'text-[var(--muted)]')
          }
        >
          {option.buildCount > 0 && `${option.buildCount} Build · `}
          {option.status}
        </span>
      </span>
    </>
  );

  return option.href ? (
    <a
      href={option.href}
      aria-current={option.status === 'Selected' ? 'page' : undefined}
      className={className}
    >
      {content}
    </a>
  ) : (
    <div aria-disabled="true" className={className}>
      {content}
    </div>
  );
}

function MechanicCard({ title, detail }: { title: string; detail: string }) {
  return (
    <Card>
      <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">{detail}</p>
    </Card>
  );
}

export default function SephiriaSwordAndShieldBuildPage() {
  return (
    <main className="min-h-screen bg-[var(--wiki-page-bg)] px-4 py-6 text-[var(--text)] sm:px-5 sm:py-8">
      <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-9">
        <aside className="hidden lg:block">
          <div className="sticky top-24 border-r border-[var(--gold-border)]/20 pr-5">
            <SephiriaBuildSidebar activeHref={href} />
          </div>
        </aside>
        <div className="min-w-0">
          <SephiriaBuildMobileNav activeHref={href} />
          <article className="mx-auto min-w-0 max-w-[1120px]">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbSchema).replace(
                  /</g,
                  '\\u003c',
                ),
              }}
            />

            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex min-w-0 flex-wrap gap-2 text-xs text-[var(--muted)] sm:text-sm"
            >
              <a
                className="underline-offset-4 hover:text-[var(--orange-hover)] hover:underline"
                href="/"
              >
                RUNBACK
              </a>
              <span aria-hidden="true">/</span>
              <a
                className="underline-offset-4 hover:text-[var(--orange-hover)] hover:underline"
                href="/games/sephiria"
              >
                Sephiria
              </a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sword &amp; Shield Build</span>
            </nav>

            <section aria-labelledby="weapon-builds-heading">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
                SEPHIRIA BUILDS
              </p>
              <h2
                id="weapon-builds-heading"
                className="mb-3 mt-1 font-serif text-2xl font-semibold text-[var(--heading)]"
              >
                Weapon Builds
              </h2>
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 10rem), 1fr))',
                }}
              >
                {weaponBuilds.map((option) => (
                  <WeaponBuildCard key={option.name} option={option} />
                ))}
              </div>
            </section>

            <section
              aria-labelledby="weapon-build-list-heading"
              className="mt-6"
            >
              <h2
                id="weapon-build-list-heading"
                className="mb-3 font-serif text-2xl font-semibold text-[var(--heading)]"
              >
                {currentWeaponGroup.name} Builds
              </h2>
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
                }}
              >
                {currentWeaponGroup.builds.map((build) => (
                  <a
                    key={build.href}
                    href={build.href}
                    aria-current={build.href === href ? 'page' : undefined}
                    className="min-w-0 border border-[var(--orange-text)]/60 bg-[var(--surface)] p-4 hover:border-[var(--orange-text)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">
                        {build.title}
                      </h3>
                      {build.href === href && (
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--orange-text)]">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--body-soft)]">
                      <span className="font-semibold text-[var(--heading)]">
                        Weapon Route:
                      </span>{' '}
                      {build.weaponRoute.join(' → ')}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--body-soft)]">
                      <span className="font-semibold text-[var(--heading)]">
                        Final Build:
                      </span>{' '}
                      {build.finalBuild.join(' · ')}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            <header
              className="mt-8 grid min-w-0 gap-5 border border-[var(--gold-border)]/35 bg-[var(--surface)] p-5 sm:p-8"
              style={{
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))',
              }}
            >
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
                  RUNBACK FIELD GUIDE / SEPHIRIA
                </p>
                <h1 className="mt-3 break-words font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--heading)] sm:text-5xl">
                  Sephiria Sword &amp; Shield Build
                </h1>
                <p className="mt-3 font-serif text-xl font-semibold text-[var(--gold-text)] sm:text-2xl">
                  Grip of Fear Cleave Build
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--body-soft)] sm:text-base">
                  Wind Song’s Attack Speed accelerates Rising Dread generation
                  through Grip of Fear; Cleave and its direct scaling remain the
                  damage focus.
                </p>
              </div>
              <aside
                aria-label="Build Snapshot"
                className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface-inset)] p-4 sm:p-5"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--gold-label)]">
                  Build Snapshot
                </p>
                <dl className="mt-4 grid gap-2">
                  <BuildSnapshotField label="Costume">
                    <span className="inline-flex items-center gap-2">
                      <LocalGameImage
                        image={snapshotImages.costume}
                        size={36}
                      />
                      White Rabbit
                    </span>
                  </BuildSnapshotField>
                  <BuildSnapshotField label="Weapon Route">
                    <span className="flex flex-wrap items-center gap-1.5">
                      {weaponRoute.map((step, index) => (
                        <span
                          key={step.label}
                          className="inline-flex items-center gap-1.5"
                        >
                          {index > 0 && (
                            <span
                              aria-hidden="true"
                              className="text-[var(--muted)]"
                            >
                              →
                            </span>
                          )}
                          <LocalGameImage image={step.image} size={32} />
                          <span>{step.label}</span>
                        </span>
                      ))}
                    </span>
                  </BuildSnapshotField>
                  <BuildSnapshotField label="Final Build">
                    Sturdy 10 · Wind Song 10 · Precision 8
                  </BuildSnapshotField>
                </dl>
              </aside>
            </header>

            <PageSection id="before-the-run" number="01" title="Before the Run">
              <div className="grid gap-3 sm:grid-cols-3">
                {setupCards.map((card) => (
                  <Card key={card.title}>
                    <div className="flex items-center gap-3">
                      {card.image && (
                        <LocalGameImage image={card.image} size={44} />
                      )}
                      <h3 className="font-serif text-lg font-semibold text-[var(--heading)]">
                        {card.title}
                      </h3>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--body-soft)]">
                      {card.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </PageSection>

            <PageSection id="core-items" number="02" title="Core Items">
              <div
                className="grid min-w-0 gap-3"
                style={{
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 13rem), 1fr))',
                }}
              >
                {coreItems.map((item) => (
                  <article
                    key={item.name}
                    className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <LocalGameImage image={item.image} size={48} />
                      <div className="min-w-0">
                        <h3 className="break-words font-serif text-lg font-semibold leading-6 text-[var(--heading)]">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm font-bold text-[var(--gold-text)]">
                          Target {item.level}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[var(--body-soft)]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </PageSection>

            <PageSection
              id="damage-mechanics"
              number="03"
              title="How This Build Deals Damage"
            >
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">
                  Direct Damage
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {directDamage.map((item) => (
                    <MechanicCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
              <div className="pt-2">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--gold-label)]">
                  Cleave Engine
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {cleaveEngine.map((item) => (
                    <MechanicCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-6 text-[var(--body-soft)]">
                <span className="font-semibold text-[var(--heading)]">
                  Main Damage:
                </span>{' '}
                Cleave / Special Attack
              </p>
            </PageSection>

            <PageSection id="how-to-play" number="04" title="How to Play">
              <ol className="grid gap-3 sm:grid-cols-2">
                {fieldNotes.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex min-w-0 gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4"
                  >
                    <span
                      style={{ flexShrink: 0, width: 28, height: 28 }}
                      className="flex items-center justify-center border border-[var(--gold-border)]/40 text-xs font-bold tabular-nums text-[var(--gold-text)]"
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-6 text-[var(--heading)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--body-soft)]">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </PageSection>

            <PageSection id="replacements" number="05" title="Replacements">
              <p className="max-w-3xl text-sm leading-7 text-[var(--body-soft)]">
                These temporary swaps share the missing Artifact’s Combo
                category, so replacing it in the same bag slot preserves that
                category count. Each card shows the effect you give up.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {replacements.map((swap) => (
                  <article
                    key={swap.missing}
                    className="min-w-0 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4"
                  >
                    <div className="space-y-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <LocalGameImage image={swap.missingImage} size={40} />
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">
                            Missing
                          </p>
                          <p className="break-words font-semibold text-[var(--heading)]">
                            {swap.missing}
                          </p>
                        </div>
                      </div>
                      <div className="flex min-w-0 items-center gap-3">
                        <LocalGameImage
                          image={swap.replacementImage}
                          size={40}
                        />
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold-label)]">
                            Use
                          </p>
                          <p className="break-words font-semibold text-[var(--heading)]">
                            {swap.replacement}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 border-t border-[var(--neutral-edge)]/10 pt-3 text-sm leading-6">
                      <p className="text-[var(--body-soft)]">
                        <span className="font-semibold text-[var(--heading)]">
                          Keeps:
                        </span>{' '}
                        {swap.keeps}
                      </p>
                      <p className="text-[var(--body-soft)]">
                        <span className="font-semibold text-[var(--heading)]">
                          Trade-off:
                        </span>{' '}
                        {swap.tradeoff}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </PageSection>

            <PageSection id="build-layout" number="06" title="Build Layout">
              <div
                className="grid max-w-[760px] gap-4 sm:items-start"
                style={{
                  maxWidth: '760px',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(min(100%, 17rem), 1fr))',
                }}
              >
                <div
                  aria-label="Unassigned backpack layout preview"
                  className="grid gap-1.5"
                  style={{
                    maxWidth: '22rem',
                    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                  }}
                >
                  {layoutPreviewCells.map((cell) => (
                    <div
                      key={cell}
                      aria-hidden="true"
                      className="flex aspect-square min-w-0 items-center justify-center border border-[var(--gold-border)]/25 bg-[var(--surface)] text-[var(--muted)]"
                    >
                      <span className="text-sm leading-none">·</span>
                    </div>
                  ))}
                </div>
                <aside className="border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4">
                  <p className="text-sm leading-6 text-[var(--body-soft)]">
                    Artifacts start at Lv1. Tablet effects raise their effective
                    levels.
                  </p>
                  <div className="mt-4 space-y-3 border-t border-[var(--neutral-edge)]/10 pt-4 text-sm">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] font-semibold text-[var(--gold-text)]"
                      >
                        ◇
                      </span>
                      <span className="text-[var(--secondary)]">Artifact</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center border border-[var(--orange-text)]/40 bg-[var(--surface-inset)] font-semibold text-[var(--orange-text)]"
                      >
                        ▤
                      </span>
                      <span className="text-[var(--secondary)]">Tablet</span>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-[var(--neutral-edge)]/10 pt-3 text-xs leading-5 text-[var(--muted)]">
                    This compact grid shows the six-column bag shape. Artifact
                    and Tablet slot assignments are not included here.
                  </p>
                </aside>
              </div>
            </PageSection>

            <PageSection id="gameplay-demo" number="07" title="Gameplay Demo">
              <div className="max-w-[640px]">
                <div
                  aria-label="Gameplay video placeholder"
                  className="flex aspect-video w-full items-center justify-center border border-dashed border-[var(--gold-border)]/45 bg-[var(--surface)] p-4 text-center"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="mx-auto flex h-10 w-10 items-center justify-center border border-[var(--gold-border)]/35 bg-[var(--surface-inset)] text-lg text-[var(--gold-text)]"
                    >
                      ▶
                    </span>
                    <p className="mt-3 text-sm font-semibold text-[var(--heading)]">
                      Gameplay video coming after the final recorded run.
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--body-soft)]">
                  See how the build plays in a real run.
                </p>
              </div>
            </PageSection>

            <PageSection id="related-guides" number="08" title="Related Guides">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {relatedGuides.map((guide) => (
                  <a
                    key={guide.href}
                    href={guide.href}
                    className="group flex min-w-0 items-center justify-between gap-3 border border-[var(--gold-border)]/25 bg-[var(--surface)] p-4 transition-colors hover:border-[var(--orange-text)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--orange-text)]"
                  >
                    <span className="min-w-0 break-words font-semibold text-[var(--heading)] group-hover:text-[var(--orange-hover)]">
                      {guide.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[var(--gold-label)]"
                    >
                      →
                    </span>
                  </a>
                ))}
              </div>
            </PageSection>
          </article>
        </div>
      </div>
    </main>
  );
}
