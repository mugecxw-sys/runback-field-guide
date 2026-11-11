'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import styles from './chaos-cards.module.css';
import type { ChaosContent, ChaosEntry, ChaosKind } from './chaos-types';

const groups: { kind: ChaosKind; title: string }[] = [
  { kind: 'difficulty', title: 'Difficulty Modifiers' },
  { kind: 'corruptors', title: 'Corruptor Effects' },
  { kind: 'obelisks', title: 'Obelisk Offers' },
];
const normalize = (value: string) => value.toLowerCase().trim().replace(/\s+/g, ' ');

function ChaosCard({ entry }: { entry: ChaosEntry }) {
  return (
    <article className={styles.card} data-chaos-entry={entry.name}>
      <div className={entry.icon ? styles.identity : undefined}>
        {entry.icon && (
          <span className={styles.icon}>
            <Image {...entry.icon} alt="" unoptimized />
          </span>
        )}
        <h3>{entry.name}</h3>
      </div>
      <p className={styles.description}>{entry.description}</p>
    </article>
  );
}

export function ChaosCards({ content }: { content: ChaosContent }) {
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<ChaosKind | 'all'>('all');
  const search = normalize(query);
  const visible = content.entries.filter((entry) =>
    (kind === 'all' || entry.category === kind) &&
    [entry.name, entry.description].some((value) => normalize(value).includes(search)));
  return (
    <div className={hub.block}>
      <div className={`${hub.filters} ${styles.toolbar}`}>
        <label className={hub.search}>
          <span>Search records</span>
          <span className={hub.searchField}>
            <Search size={18} aria-hidden="true" />
            <input type="search" placeholder="Search names or descriptions"
              value={query} onChange={(event) => setQuery(event.target.value)} />
          </span>
        </label>
        <label className={styles.type}>
          <span>Type</span>
          <select value={kind} onChange={(event) => setKind(event.target.value as ChaosKind | 'all')}>
            <option value="all">All</option>
            <option value="difficulty">Difficulty</option>
            <option value="corruptors">Corruptors</option>
            <option value="obelisks">Obelisk Offers</option>
          </select>
        </label>
        <div className={styles.results}>
          <output aria-live="polite">{visible.length} {visible.length === 1 ? 'record' : 'records'}</output>
          {(query || kind !== 'all') && (
            <button type="button" onClick={() => { setQuery(''); setKind('all'); }}>Clear filters</button>
          )}
        </div>
      </div>
      {visible.length === 0 && <div className={hub.empty}><p>No records match your search and filters.</p></div>}
      {groups.map((group) => {
        const entries = visible.filter((entry) => entry.category === group.kind);
        if (!entries.length) return null;
        return (
          <section key={group.kind} className={styles.section} aria-labelledby={`chaos-${group.kind}`}>
            <h2 id={`chaos-${group.kind}`}>{group.title} <span>({entries.length})</span></h2>
            <ul className={styles.grid} aria-label={group.title}>
              {entries.map((entry) => <li key={entry.name}><ChaosCard entry={entry} /></li>)}
            </ul>
            {group.kind === 'corruptors' && (
              <p className={styles.note}>All six Corruptor definitions reference {content.configuredReward} as a configured reward. Actual reward delivery has not been verified.</p>
            )}
          </section>
        );
      })}
    </div>
  );
}

