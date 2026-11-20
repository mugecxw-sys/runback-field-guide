import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
  findHubEntry,
  getHubSection,
  hubHref,
  hubSections,
  visibleHubSections,
  type GameHubConfig,
  type HubEntry,
  type HubGroup,
  type HubResourceSection,
} from '@/lib/game-hub-v1/config';
import { DemoBadge, HubCard, HubFacts } from './hub-card';
import { HubShell, sectionIcons } from './hub-shell';
import { HubWiki } from './hub-wiki';
import styles from './hub.module.css';

function DemoNote() {
  return (
    <p className={styles.demoNote}>
      <DemoBadge />{' '}
      <span>
        Sample content for reviewing the Game Hub. Game statistics and test
        results are omitted.
      </span>
    </p>
  );
}

export function HubOverview({ game }: { game: GameHubConfig }) {
  const featured =
    !game.demo &&
    game.featured &&
    findHubEntry(game, game.featured.section, game.featured.entry);
  return (
    <HubShell game={game} active="overview">
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>RUNBACK Game Hub</p>
          <h1>{game.name}</h1>
          <p className={styles.lead}>{game.description}</p>
          <div className={styles.heroMeta}>
            <span className={styles.badge}>Game version {game.version}</span>
            {game.officialHref && (
              <a href={game.officialHref}>
                Official game page <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className={styles.cover}>
          <Image
            src={game.cover.src}
            alt={game.cover.alt}
            fill
            style={{ objectFit: game.coverFit ?? 'cover' }}
            sizes="(max-width: 680px) 100vw, 48vw"
            unoptimized
          />
        </div>
      </header>
      {game.showInfoFacts !== false && game.info.length > 0 && (
        <HubFacts facts={game.info} />
      )}
      {game.demo && <DemoNote />}
      <section className={styles.block} aria-labelledby="explore-hub">
        <h2 id="explore-hub">Explore the Hub</h2>
        <div className={styles.cardGrid}>
          {visibleHubSections(game)
            .filter((section) => section !== 'overview')
            .map((section) => (
              <HubCard
                key={section}
                href={hubHref(game.slug, section)}
                title={hubSections[section].label}
                summary={game.useSectionCardDescriptions
                  ? getHubSection(game, section)?.description ?? hubSections[section].description
                  : hubSections[section].description}
                icon={sectionIcons[section]}
                demo={game.demo}
              />
            ))}
        </div>
      </section>
      {game.featured && featured && !featured.entry.demo && (
        <section className={styles.block} aria-labelledby="featured-hub">
          <h2 id="featured-hub">Featured</h2>
          <HubCard
            href={
              featured.entry.href ??
              hubHref(game.slug, game.featured.section, featured.entry.slug)
            }
            title={featured.entry.title}
            summary={featured.entry.summary}
            label={featured.group.label}
          />
        </section>
      )}
    </HubShell>
  );
}

export function HubSectionPage({
  game,
  section,
  groups,
  description,
  pageSize,
  compactGrid,
  showResultCount,
  emptyState,
  heading,
  breadcrumbLabel,
  breadcrumbHref,
  notice,
}: {
  game: GameHubConfig;
  section: HubResourceSection;
  groups: readonly HubGroup[];
  description: string;
  pageSize?: number;
  compactGrid?: boolean;
  showResultCount?: boolean;
  emptyState?: { title: string; description: string };
  heading?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  notice?: { text: string; href: string; label: string };
}) {
  return (
    <HubShell
      game={game}
      active={section}
      breadcrumbLabel={breadcrumbLabel}
      breadcrumbHref={breadcrumbHref}
    >
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>{game.name}</p>
        <h1>{heading ?? hubSections[section].label}</h1>
        <p className={styles.lead}>{description}</p>
        {notice && (
          <p className={styles.sampleNotice}>
            {notice.text}{' '}
            <a href={notice.href}>{notice.label}</a>
          </p>
        )}
      </header>
      {game.demo && <DemoNote />}
      {emptyState && !groups.some((group) => group.entries.length) ? (
        <output className={styles.emptyState}>
          <div className={styles.empty}>
            <h2>{emptyState.title}</h2>
            <p>{emptyState.description}</p>
          </div>
        </output>
      ) : section === 'wiki' ? (
        <HubWiki
          slug={game.slug}
          groups={groups}
          demo={game.demo}
          pageSize={pageSize}
          compactGrid={compactGrid}
          showResultCount={showResultCount}
        />
      ) : (
        groups
          .filter((group) => group.entries.length)
          .map((group) => (
            <section
              key={group.slug}
              className={styles.block}
              aria-labelledby={'group-' + group.slug}
            >
              <h2 id={'group-' + group.slug}>{group.label}</h2>
              <div className={styles.cardGrid}>
                {group.entries.map((entry) => (
                  <HubCard
                    key={entry.slug}
                    href={entry.href ?? hubHref(game.slug, section, entry.slug)}
                    title={entry.title}
                    summary={entry.summary}
                    icon={sectionIcons[section]}
                    demo={game.demo || entry.demo}
                  />
                ))}
              </div>
            </section>
          ))
      )}
    </HubShell>
  );
}

export function HubEntryPage({
  game,
  section,
  group,
  entry,
  back,
  breadcrumbLabel,
  breadcrumbHref,
  alternateLink,
}: {
  game: GameHubConfig;
  section: HubResourceSection;
  group: HubGroup;
  entry: HubEntry;
  back?: { href: string; label: string };
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  alternateLink?: { href: string; label: string };
}) {
  const demo = game.demo || entry.demo;
  const facts = (group.fields ?? [])
    .filter(({ hideInDetail }) => !hideInDetail)
    .flatMap(({ key, label }) => {
      const value = entry.attributes?.[key];
      return value
        ? [{ label, value: typeof value === 'string' ? value : value.join(', ') }]
        : [];
    })
    .concat(entry.facts ?? []);
  const related = (entry.related ?? []).flatMap((slug) => {
    if (slug === entry.slug) return [];
    const record = findHubEntry(game, section, slug);
    return record ? [record] : [];
  });
  return (
    <HubShell
      game={game}
      active={section}
      detail
      breadcrumbLabel={breadcrumbLabel}
      breadcrumbHref={breadcrumbHref}
    >
      <article>
        <header className={styles.pageHeader}>
          <div className={styles.recordMeta}>
            {entry.icon && (
              <Image
                src={entry.icon.src}
                alt={entry.icon.alt}
                width={52}
                height={52}
                unoptimized
              />
            )}
            <p className={styles.eyebrow}>{group.label}</p>
            {demo && <DemoBadge />}
          </div>
          <h1>{entry.title}</h1>
          {entry.summary && <p className={styles.lead}>{entry.summary}</p>}
          {alternateLink && (
            <p className={styles.sampleNotice}>
              <a href={alternateLink.href}>{alternateLink.label}</a>
            </p>
          )}
        </header>
        {demo && <DemoNote />}
        {entry.image && (
          <div className={styles.entryImage}>
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              unoptimized
            />
          </div>
        )}
        {facts.length > 0 && <HubFacts facts={facts} />}
        {entry.detail && (
          <section className={styles.block} aria-labelledby="entry-notes">
            <h2 id="entry-notes">
              {section === 'wiki' ? 'Reference notes' : 'Overview'}
            </h2>
            <p className={styles.notes}>{entry.detail}</p>
          </section>
        )}
        {entry.detailSections?.map((detailSection, sectionIndex) => (
          <section
            className={styles.block}
            aria-labelledby={`detail-section-${sectionIndex}`}
            key={detailSection.title}
          >
            <h2 id={`detail-section-${sectionIndex}`}>{detailSection.title}</h2>
            {detailSection.description && <p className={styles.notes}>{detailSection.description}</p>}
            <div className={styles.detailTableWrap}>
              <table className={styles.detailTable}>
                <thead>
                  <tr>
                    {detailSection.columns.map(({ key, label }) => (
                      <th scope="col" key={key}>{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detailSection.rows.map((row, rowIndex) => (
                    <tr key={`${detailSection.title}-${rowIndex}`}>
                      {detailSection.columns.map(({ key, label }) => (
                        <td data-label={label} key={key}>{row[key] ?? ''}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
        {entry.relatedLinks && entry.relatedLinks.length > 0 && (
          <section className={styles.block} aria-labelledby="sample-related-links">
            <h2 id="sample-related-links">Related entries</h2>
            <div className={styles.cardGrid}>
              {entry.relatedLinks.map((link) => (
                <HubCard
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  summary={link.summary ?? ''}
                  label={link.label}
                />
              ))}
            </div>
          </section>
        )}
        {related.length > 0 && (
          <section className={styles.block} aria-labelledby="related-entries">
            <h2 id="related-entries">Related entries</h2>
            <div className={styles.cardGrid}>
              {related.map(({ group: relatedGroup, entry: item }) => (
                <HubCard
                  key={item.slug}
                  href={item.href ?? hubHref(game.slug, section, item.slug)}
                  title={item.title}
                  summary={item.summary}
                  label={relatedGroup.label}
                  demo={game.demo || item.demo}
                />
              ))}
            </div>
          </section>
        )}
        <a
          className={styles.back}
          href={back?.href ?? hubHref(game.slug, section)}
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to{' '}
          {back?.label ?? hubSections[section].label}
        </a>
      </article>
    </HubShell>
  );
}
