'use client';

import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import { hubHref, type HubGroup } from '@/lib/game-hub-v1/config';
import { DemoBadge } from './hub-card';
import styles from './hub.module.css';

export function HubWiki({
  slug,
  groups,
  demo,
  pageSize = 24,
}: {
  slug: string;
  groups: readonly HubGroup[];
  demo?: boolean;
  pageSize?: number;
}) {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [pages, setPages] = useState(1);
  const limit = Number.isSafeInteger(pageSize) && pageSize > 0 ? pageSize : 24;
  const activeGroup = groups.find((group) => group.slug === category);
  const filterFields =
    activeGroup?.fields?.filter((field) => field.filter) ?? [];
  const total = groups.reduce(
    (count, group) => count + group.entries.length,
    0,
  );
  const search = query.trim().toLowerCase();
  const records = (activeGroup ? [activeGroup] : groups)
    .flatMap((group) => group.entries.map((entry) => ({ group, entry })))
    .filter(
      ({ group, entry }) =>
        [group.label, entry.title, entry.summary].some((value) =>
          value.toLowerCase().includes(search),
        ) &&
        filterFields.every(
          ({ key }) =>
            !filters[key] || entry.attributes?.[key] === filters[key],
        ),
    );
  const visibleRecords = records.slice(0, pages * limit);

  return (
    <section className={styles.block} aria-labelledby="wiki-records">
      <h2 id="wiki-records">Reference library</h2>
      <div className={styles.filters}>
        <label className={styles.search}>
          <span>Search records</span>
          <span className={styles.searchField}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search titles or descriptions"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPages(1);
              }}
            />
          </span>
        </label>
        <fieldset className={styles.categories} aria-label="Filter by category">
          {[
            { slug: '', label: 'All categories', count: total },
            ...groups.map(({ slug, label, entries }) => ({
              slug,
              label,
              count: entries.length,
            })),
          ].map((group) => (
            <button
              key={group.slug}
              type="button"
              aria-pressed={group.slug === category}
              onClick={() => {
                if (group.slug === category) return;
                setCategory(group.slug);
                setFilters({});
                setPages(1);
              }}
            >
              {group.label}{' '}
              <span className={styles.categoryCount}>({group.count})</span>
            </button>
          ))}
        </fieldset>
        {activeGroup && filterFields.length > 0 && (
          <fieldset
            className={styles.fieldFilters}
            aria-label={activeGroup.label + ' filters'}
          >
            {filterFields.map(({ key, label }) => {
              const choices = new Set(
                activeGroup.entries
                  .map((entry) => entry.attributes?.[key])
                  .filter(Boolean),
              );
              return (
                <label key={key}>
                  {label}
                  <select
                    value={filters[key] ?? ''}
                    onChange={(event) => {
                      setFilters({ ...filters, [key]: event.target.value });
                      setPages(1);
                    }}
                  >
                    <option value="">Any</option>
                    {Array.from(choices).map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
              );
            })}
          </fieldset>
        )}
      </div>
      <output className={styles.resultCount}>
        {records.length} {records.length === 1 ? 'record' : 'records'}
        {visibleRecords.length < records.length &&
          ' · Showing ' + String(visibleRecords.length)}
      </output>
      {records.length ? (
        <ul className={styles.records}>
          {visibleRecords.map(({ group, entry }) => (
            <li key={entry.slug}>
              <a
                className={styles.record}
                href={entry.href ?? hubHref(slug, 'wiki', entry.slug)}
              >
                <div>
                  <div className={styles.recordMeta}>
                    {entry.icon && (
                      <Image
                        src={entry.icon.src}
                        alt={entry.icon.alt}
                        width={36}
                        height={36}
                        unoptimized
                      />
                    )}
                    <span className={styles.eyebrow}>{group.label}</span>
                    {(demo || entry.demo) && <DemoBadge />}
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.summary}</p>
                </div>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>No records match your filters.</p>
          <button
            type="button"
            onClick={() => {
              setCategory('');
              setQuery('');
              setFilters({});
              setPages(1);
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      {visibleRecords.length < records.length && (
        <button
          className={styles.loadMore}
          type="button"
          onClick={() => setPages(pages + 1)}
        >
          Load more records
        </button>
      )}
    </section>
  );
}
