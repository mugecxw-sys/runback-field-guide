'use client';

import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import styles from './enemy-cards.module.css';
import type {
  BossEntry,
  CombatNote,
  EnemyEntry,
  EnemyFamily,
} from './enemy-types';

const zoneLabel = (zone: number) => `Zone ${String(zone).padStart(2, '0')}`;

function EnemyFacts({ entry }: { entry: EnemyEntry }) {
  return (
    <div
      className={styles.facts}
      data-entity={entry.name}
      data-related={entry.relatedOnly}
    >
      {entry.image && (
        <Image
          src={entry.image.src}
          width={entry.image.width}
          height={entry.image.height}
          alt=""
          className={styles.image}
          unoptimized
        />
      )}
      {!!entry.tags.length && (
        <p className={styles.tags}>{entry.tags.join(' · ')}</p>
      )}
      {entry.nameNote && <p className={styles.caption}>{entry.nameNote}</p>}
      {entry.relatedOnly ? (
        <p>{entry.relation}</p>
      ) : (
        <>
          {!!entry.zones.length && (
            <dl>
              <div>
                <dt>Encounter configurations</dt>
                <dd>{entry.zones.map(zoneLabel).join(' · ')}</dd>
              </div>
            </dl>
          )}
          {!!entry.modifiers.length && (
            <dl>
              <div>
                <dt>Encounter modifiers</dt>
                <dd>{entry.modifiers.join(' · ')}</dd>
              </div>
            </dl>
          )}
          {!!entry.examples.length && (
            <p className={styles.caption}>Encounter information</p>
          )}
          {entry.examples.map((example) => (
            <div className={styles.example} key={example.context}>
              <p>{example.context}</p>
              <p>{example.text}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function BossAchievements({
  achievements,
}: {
  achievements: BossEntry['achievements'];
}) {
  return (
    <section className={styles.achievementSection} aria-label="Achievements">
      <h4>Achievements</h4>
      <dl className={styles.achievements}>
        {achievements.map((achievement) => (
          <div key={achievement.name}>
            <dt>{achievement.name}</dt>
            <dd>{achievement.objective}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function BossCard({ boss }: { boss: BossEntry }) {
  return (
    <article className={styles.card} data-entity={boss.name} data-boss="true">
      <p className={styles.tags}>Boss {String(boss.number).padStart(2, '0')}</p>
      <h3>{boss.name}</h3>
      {!!boss.zones.length && (
        <p className={styles.facts}>
          Region: {boss.zones.map(zoneLabel).join(' · ')}
        </p>
      )}
      <BossAchievements achievements={boss.achievements} />
    </article>
  );
}

export function EnemyCards({
  families,
  bosses,
  notes,
}: {
  families: readonly EnemyFamily[];
  bosses: readonly BossEntry[];
  notes: readonly CombatNote[];
}) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [zone, setZone] = useState('all');
  const [tag, setTag] = useState('all');
  const search = query.trim().toLowerCase();
  const matches = (entry: EnemyEntry, family: string) =>
    (zone === 'all' || entry.zones.includes(Number(zone))) &&
    (tag === 'all' || entry.tags.includes(tag)) &&
    (!search ||
      [
        entry.name,
        ...(entry.searchNames ?? []),
        family,
        ...entry.tags,
        ...entry.encounterTypes,
        ...entry.zones.map(zoneLabel),
      ]
        .join(' ')
        .toLowerCase()
        .includes(search));
  const filtered =
    category === 'bosses'
      ? []
      : families.flatMap((family) => {
          const baseMatches = matches(family.base, family.name);
          const variants = family.variants.filter((entry) =>
            matches(entry, family.name),
          );
          return baseMatches || variants.length
            ? [{ ...family, baseMatches, variants }]
            : [];
        });
  const filteredBosses =
    category === 'enemies'
      ? []
      : bosses.filter((boss) => matches(boss, 'Boss'));
  const entities = filtered.flatMap((family) => [
    ...(family.baseMatches ? [family.base] : []),
    ...family.variants,
  ]);
  const relatedCount = entities.filter((entry) => entry.relatedOnly).length;
  const enemyCount = entities.length - relatedCount;
  const primaryCounts = [
    ...(enemyCount
      ? [
          `${enemyCount} ${enemyCount === 1 ? 'enemy' : 'enemies'} with encounter data`,
        ]
      : []),
    ...(filteredBosses.length
      ? [
          `${filteredBosses.length} ${filteredBosses.length === 1 ? 'boss' : 'bosses'}`,
        ]
      : []),
  ];
  const active =
    !!search || category !== 'all' || zone !== 'all' || tag !== 'all';
  const reset = () => {
    setQuery('');
    setCategory('all');
    setZone('all');
    setTag('all');
  };
  const tags = [
    ...new Set(
      families
        .flatMap((family) => [family.base, ...family.variants])
        .flatMap((entry) => entry.tags),
    ),
  ].sort();

  return (
    <>
      <div className={styles.toolbar}>
        <label className={hub.search}>
          <span className="sr-only">Search enemies and bosses</span>
          <span className={hub.searchField}>
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, variant or Zone 03…"
            />
          </span>
        </label>
        <div className={styles.filters}>
          <label>
            Category
            <select
              aria-label="Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">Enemies &amp; Bosses</option>
              <option value="enemies">Enemies</option>
              <option value="bosses">Bosses</option>
            </select>
          </label>
          <label>
            Zone
            <select
              aria-label="Zone"
              value={zone}
              onChange={(event) => setZone(event.target.value)}
            >
              <option value="all">All zones</option>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {zoneLabel(n)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Variant
            <select
              aria-label="Variant"
              value={tag}
              onChange={(event) => setTag(event.target.value)}
            >
              <option value="all">All variants</option>
              {tags.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </label>
          {active && (
            <button type="button" onClick={reset}>
              Reset filters
            </button>
          )}
        </div>
      </div>
      <output className={hub.resultCount} aria-live="polite">
        {primaryCounts.join(' · ')}
        {!!relatedCount && (
          <span className={styles.additionalCount}>
            {relatedCount} additional named{' '}
            {relatedCount === 1 ? 'variant has' : 'variants have'} no confirmed
            encounter {relatedCount === 1 ? 'location' : 'locations'}.
          </span>
        )}
      </output>
      {!!enemyCount && (
        <p className={styles.caption}>
          Enemy totals include base enemies and variants with encounter data.
          Variants (N) counts the visible variant entries within each family.
        </p>
      )}
      {!entities.length && !filteredBosses.length && (
        <div className={hub.empty}>
          <p>No enemies or bosses match your search.</p>
          <button type="button" onClick={reset}>
            Clear search and filters
          </button>
        </div>
      )}
      {!!filtered.length && (
        <section className={styles.section} aria-labelledby="enemies-heading">
          <h2 id="enemies-heading">Enemies</h2>
          <div className={styles.grid}>
            {filtered.map((family) => (
              <article className={styles.card} key={family.name}>
                <h3>{family.name}</h3>
                {family.baseMatches && <EnemyFacts entry={family.base} />}
                {!!family.variants.length && (
                  <details
                    key={`${query}|${category}|${zone}|${tag}`}
                    className={styles.variants}
                    open={active || undefined}
                  >
                    <summary>
                      Variants ({family.variants.length})
                      <ChevronDown size={16} aria-hidden="true" />
                    </summary>
                    <ul>
                      {family.variants.map((variant) => (
                        <li key={variant.name}>
                          <h4>{variant.name}</h4>
                          <EnemyFacts entry={variant} />
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
      {!!filteredBosses.length && (
        <section className={styles.section} aria-labelledby="bosses-heading">
          <h2 id="bosses-heading">Bosses</h2>
          <div className={styles.grid}>
            {filteredBosses.map((boss) => (
              <BossCard boss={boss} key={boss.name} />
            ))}
          </div>
          <p className={styles.caption}>
            Voidweaver’s Zone 05 association is supported by the{' '}
            <a
              href="https://steamcommunity.com/app/2615540/allnews/"
              target="_blank"
              rel="noreferrer"
            >
              official ASCENSION update
            </a>
            .
          </p>
        </section>
      )}
      <section
        className={styles.section}
        aria-labelledby="combat-notes-heading"
      >
        <h2 id="combat-notes-heading">Shared Combat Notes</h2>
        <p className={styles.caption}>
          General rules from in-game tutorial text.
        </p>
        <dl className={styles.notes}>
          {notes.map((note) => (
            <div key={note.label}>
              <dt>{note.label}</dt>
              <dd>{note.text}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
