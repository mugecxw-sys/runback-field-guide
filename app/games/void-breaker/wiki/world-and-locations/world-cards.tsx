'use client';

import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import styles from './world-cards.module.css';
import type {
  WorldContent,
  WorldIcon,
  WorldMarker,
  WorldZone,
} from './world-types';

function MarkerIcon({ icon, name }: { icon: WorldIcon; name: string }) {
  return (
    <span className={styles.icon} title={icon.kind}>
      <Image
        src={icon.src}
        width={icon.width}
        height={icon.height}
        alt={`${name}: ${icon.kind.toLowerCase()}`}
        unoptimized
      />
    </span>
  );
}

function MarkerCard({ marker }: { marker: WorldMarker }) {
  return (
    <article className={styles.card} data-marker={marker.name}>
      <div className={marker.icon ? styles.markerIdentity : undefined}>
        {marker.icon && (
          <div className={styles.icons}>
            <MarkerIcon icon={marker.icon} name={marker.name} />
          </div>
        )}
        <div>
          <h4>{marker.name}</h4>
          <p className={styles.description}>{marker.description}</p>
        </div>
      </div>
    </article>
  );
}

function ZoneCard({ zone, search }: { zone: WorldZone; search: string }) {
  const reveal =
    !!search &&
    zone.enemies.some((enemy) =>
      `${enemy.name} ${enemy.tags.join(' ')}`.toLowerCase().includes(search),
    );
  return (
    <article className={styles.card} data-zone={zone.number}>
      <h3>{zone.name}</h3>
      <p className={styles.count}>
        {zone.enemies.length} enemy entries in encounter configurations
      </p>
      <p className={styles.description}>
        <span className={styles.label}>Includes</span>{' '}
        {zone.representatives.join(' · ')}
      </p>
      {!!zone.modifiers.length && (
        <p className={styles.context}>
          Some encounter configurations apply {zone.modifiers.join(' · ')}{' '}
          modifiers.
        </p>
      )}
      {!!zone.groups.length && (
        <div className={styles.groups}>
          {zone.groups.map((group, index) => (
            <div key={index}>
              <p className={styles.label}>
                {zone.name} · {group.label}
              </p>
              <p>
                {group.members
                  .map(
                    (enemy) =>
                      `${enemy.count} ${enemy.name}${enemy.count === 1 ? '' : 's'}`,
                  )
                  .join(' + ')}
              </p>
            </div>
          ))}
          <p className={styles.context}>
            Each row describes a separate configuration.
          </p>
        </div>
      )}
      {zone.boss && (
        <div className={styles.association}>
          <p>
            <span className={styles.label}>Associated boss</span>{' '}
            <a href={zone.boss.href}>{zone.boss.name}</a>
          </p>
          <p className={styles.context}>
            Zone association from the{' '}
            <a href={zone.boss.sourceHref} target="_blank" rel="noreferrer">
              official ASCENSION update
            </a>
            .
          </p>
        </div>
      )}
      <details
        className={styles.enemies}
        key={search}
        open={reveal || undefined}
      >
        <summary>
          Enemy entries ({zone.enemies.length})
          <ChevronDown size={16} aria-hidden="true" />
        </summary>
        <ul>
          {zone.enemies.map((enemy) => (
            <li key={enemy.name}>
              <span>{enemy.name}</span>
              {!!enemy.tags.length && (
                <span className={styles.enemyTags}>
                  {enemy.tags.join(' · ')}
                </span>
              )}
            </li>
          ))}
        </ul>
        <a className={styles.reference} href="/games/void-breaker/wiki/enemies">
          View enemy reference
        </a>
      </details>
    </article>
  );
}

export function WorldCards({ content }: { content: WorldContent }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [zone, setZone] = useState('all');
  const search = query.trim().toLowerCase();
  const zones =
    category === 'all' || category === 'zones'
      ? content.zones.filter(
          (entry) =>
            (zone === 'all' || entry.number === Number(zone)) &&
            (!search ||
              [
                entry.name,
                String(entry.number),
                entry.boss?.name ?? '',
                ...entry.modifiers,
                ...entry.enemies.flatMap((enemy) => [
                  enemy.name,
                  ...enemy.tags,
                ]),
              ]
                .join(' ')
                .toLowerCase()
                .includes(search)),
        )
      : [];
  const markers =
    zone === 'all' && category !== 'zones'
      ? content.markers.filter(
          (entry) =>
            (category === 'all' ||
              category === 'markers' ||
              category === entry.group) &&
            (!search ||
              [entry.name, entry.description, ...entry.searchNames]
                .join(' ')
                .toLowerCase()
                .includes(search)),
        )
      : [];
  const active = !!query || category !== 'all' || zone !== 'all';
  const objectiveNotes = content.notes
    .slice(1)
    .filter(
      (note) =>
        zone === 'all' ||
        note.label ===
          `Zone ${String(Number(zone)).padStart(2, '0')} objective`,
    );
  const reset = () => {
    setQuery('');
    setCategory('all');
    setZone('all');
  };
  const counts = [
    ...(zones.length
      ? [`${zones.length} ${zones.length === 1 ? 'zone' : 'zones'}`]
      : []),
    ...(markers.length
      ? [
          `${markers.length} marker ${markers.length === 1 ? 'definition' : 'definitions'}`,
        ]
      : []),
  ];
  return (
    <>
      <div className={styles.toolbar}>
        <label className={hub.search}>
          <span className="sr-only">Search Zones, enemies and map markers</span>
          <span className={hub.searchField}>
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search Zone, enemy, marker or purpose…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
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
              <option value="all">All content</option>
              <option value="zones">Zones</option>
              <option value="markers">Map markers</option>
              {['Encounters', 'Navigation', 'Points of Interest'].map(
                (group) => (
                  <option key={group}>{group}</option>
                ),
              )}
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
              {content.zones.map((entry) => (
                <option key={entry.number} value={entry.number}>
                  {entry.name}
                </option>
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
      {zone !== 'all' && (
        <p className={styles.caption}>
          Map markers are excluded from Zone filters because their locations are
          not confirmed.
        </p>
      )}
      <output className={hub.resultCount} aria-live="polite">
        {counts.join(' · ')}
      </output>
      <p className={styles.caption}>
        Marker definitions explain map symbols, not fixed locations. Their Zone
        placements are not confirmed.
      </p>
      {!zones.length && !markers.length && (
        <div className={hub.empty}>
          <p>
            {zone !== 'all' && category !== 'all' && category !== 'zones'
              ? 'No marker definitions can be shown for this Zone because their locations are not confirmed.'
              : 'No zones or marker definitions match your search.'}
          </p>
          <button type="button" onClick={reset}>
            Clear search and filters
          </button>
        </div>
      )}
      {!!zones.length && (
        <section className={styles.section} aria-labelledby="zones-heading">
          <h2 id="zones-heading">Zones</h2>
          <div className={styles.grid}>
            {zones.map((entry) => (
              <ZoneCard
                zone={entry}
                search={search}
                key={`${entry.number}|${category}|${zone}`}
              />
            ))}
          </div>
        </section>
      )}
      {!!markers.length && (
        <section className={styles.section} aria-labelledby="markers-heading">
          <h2 id="markers-heading">Map Markers &amp; Encounters</h2>
          <p className={styles.caption}>
            Grouped for this reference; these are not official game categories.
            Icons are map markers, not enemy portraits.
          </p>
          {['Encounters', 'Navigation', 'Points of Interest'].map((group) => {
            const entries = markers.filter((entry) => entry.group === group);
            return entries.length ? (
              <section
                className={styles.markerGroup}
                aria-label={group}
                key={group}
              >
                <h3>{group}</h3>
                <div className={styles.grid}>
                  {entries.map((entry) => (
                    <MarkerCard marker={entry} key={entry.name} />
                  ))}
                </div>
              </section>
            ) : null;
          })}
        </section>
      )}
      <section className={styles.section} aria-labelledby="world-notes-heading">
        <h2 id="world-notes-heading">World Notes</h2>
        <p className={styles.note}>{content.notes[0].text}</p>
        {!!objectiveNotes.length && (
          <details className={styles.objectives}>
            <summary>
              Regional objective texts
              <ChevronDown size={16} aria-hidden="true" />
            </summary>
            <p className={styles.caption}>
              Recorded objectives, not a complete unlock route.
            </p>
            <dl>
              {objectiveNotes.map((note) => (
                <div key={note.label}>
                  <dt>{note.label}</dt>
                  <dd>{note.text}</dd>
                </div>
              ))}
            </dl>
          </details>
        )}
      </section>
    </>
  );
}
