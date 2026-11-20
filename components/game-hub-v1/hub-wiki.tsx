'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import { hubHref, type HubGroup } from '@/lib/game-hub-v1/config';
import { ExpandableWikiCard } from './expandable-wiki-card';
import { DemoBadge } from './hub-card';
import styles from './hub.module.css';

function attributeValues(value: string | readonly string[] | undefined): readonly string[] {
  if (typeof value === 'string') return [value];
  return value ?? [];
}

function equivalentFieldValue(left: string, right: string): boolean {
  const normalize = (value: string) => value
    .toLowerCase()
    .replace(/^found\s+(?:at|on)\s+/, '')
    .replace(/[.\s]+$/g, '')
    .trim();
  return normalize(left) === normalize(right);
}

export function HubWiki({
  slug,
  groups,
  demo,
  pageSize = 24,
  compactGrid,
  showResultCount = true,
  expandable = false,
}: {
  slug: string;
  groups: readonly HubGroup[];
  demo?: boolean;
  pageSize?: number;
  compactGrid?: boolean;
  showResultCount?: boolean;
  expandable?: boolean;
}) {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [pages, setPages] = useState(1);
  const [focusSlug, setFocusSlug] = useState('');
  const limit = Number.isSafeInteger(pageSize) && pageSize > 0 ? pageSize : 24;
  const activeGroup = expandable && groups.length === 1 ? groups[0] : groups.find((group) => group.slug === category);
  const compactList = compactGrid ?? (groups.length > 0 && groups.every((group) => group.entryDisplay === 'compact'));
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
        [
          group.label,
          entry.title,
          entry.summary,
          ...Object.values(entry.attributes ?? {}).flatMap(attributeValues),
        ].some((value) =>
          value.toLowerCase().includes(search),
        ) &&
        filterFields.every(({ key, multiValue }) => {
          const selected = filters[key];
          if (!selected) return true;
          const value = entry.attributes?.[key];
          return multiValue
            ? attributeValues(value).includes(selected)
            : value === selected;
        }),
    );
  const visibleRecords = records.slice(0, pages * limit);

  useEffect(() => {
    const selectHashTarget = () => {
      const rawHash = window.location.hash.slice(1);
      if (!rawHash.startsWith('sample-entry-')) return;
      let targetSlug = rawHash.slice('sample-entry-'.length);
      try {
        targetSlug = decodeURIComponent(targetSlug);
      } catch {
        return;
      }
      const targetGroup = groups.find((group) =>
        group.entries.some((entry) => entry.slug === targetSlug),
      );
      const targetEntry = targetGroup?.entries.find((entry) => entry.slug === targetSlug);
      if (!targetGroup || !targetEntry) return;
      setCategory(targetGroup.slug);
      setFilters({});
      setQuery(targetEntry.title);
      setPages(1);
      setFocusSlug(targetEntry.slug);
    };
    window.addEventListener('hashchange', selectHashTarget);
    const frame = window.requestAnimationFrame(selectHashTarget);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', selectHashTarget);
    };
  }, [groups]);

  useEffect(() => {
    if (!focusSlug) return;
    const targetIndex = records.findIndex(({ entry }) => entry.slug === focusSlug);
    if (targetIndex < 0) return;
    const requiredPages = Math.ceil((targetIndex + 1) / limit);
    if (pages < requiredPages) {
      requestAnimationFrame(() => setPages(requiredPages));
      return;
    }
    const target = document.getElementById('sample-entry-' + focusSlug);
    if (!target) return;
    const expanded = expandable ? target.querySelector('details') : null;
    if (expanded) expanded.open = true;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.focus({ preventScroll: true });
      setFocusSlug('');
    });
  }, [focusSlug, records, pages, limit, expandable]);

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
        {(!expandable || groups.length > 1) && <fieldset className={styles.categories} aria-label="Filter by category">
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
        </fieldset>}
        {activeGroup && filterFields.length > 0 && (
          <fieldset
            className={styles.fieldFilters}
            aria-label={activeGroup.label + ' filters'}
          >
            {filterFields.map(({ key, label, multiValue, allLabel }) => {
              const choices = new Set(
                activeGroup.entries.flatMap((entry) => {
                  const value = entry.attributes?.[key];
                  if (!value) return [];
                  return multiValue ? [...attributeValues(value)] : [String(value)];
                }),
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
                    <option value="">{allLabel ?? 'Any'}</option>
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
      {showResultCount && <output className={styles.resultCount}>
        {records.length} {records.length === 1 ? 'record' : 'records'}
        {visibleRecords.length < records.length &&
          ' · Showing ' + String(visibleRecords.length)}
      </output>}
      {records.length ? (
        <ul className={`${styles.records} ${compactList ? styles.compactRecords : ''} ${expandable ? 'items-start' : ''}`}>
          {visibleRecords.map(({ group, entry }) => {
            const entryDisplay = entry.entryDisplay ?? group.entryDisplay ?? 'detail';
            const facts = (
              <dl className={expandable ? 'space-y-1 text-xs leading-snug text-[var(--body-soft)]' : styles.recordFacts}>
                      {(group.fields ?? []).flatMap(({ key, label }) => {
                        const rawValue = entry.attributes?.[key];
                        if (!rawValue || !rawValue.length) return [];
                        const values = attributeValues(rawValue);
                        const field = group.fields?.find((candidate) => candidate.key === key);
                        const equivalent = field?.deduplicateWith
                          ? attributeValues(entry.attributes?.[field.deduplicateWith])
                          : [];
                        if (
                          equivalent.length === values.length &&
                          values.every((value) => equivalent.some((other) => equivalentFieldValue(value, other)))
                        ) return [];
                        return [{ key, label, values }];
                      }).map(({ key, label, values }) => (
                        <div key={key}>
                          <dt className={expandable ? 'inline font-semibold text-[var(--heading)]' : undefined}>{label}{expandable ? ': ' : ''}</dt>
                          <dd className={expandable ? 'inline' : undefined}>{values.map((value, index) => (
                            <span className={expandable ? undefined : styles.factValue} key={`${key}-${index}-${value}`}>{expandable && index > 0 ? ' · ' : ''}{value}</span>
                          ))}</dd>
                        </div>
                      ))}
                    </dl>
            );
            const fields = (
              <>
                <div>
                  <div className={styles.recordMeta}>
                    {entry.icon && (
                      <Image
                        src={entry.icon.src}
                        alt={entry.icon.alt}
                        width={group.entryIconSize ?? 36}
                        height={group.entryIconSize ?? 36}
                        className={group.entryIconSize ? styles.recordPreview : undefined}
                        unoptimized
                      />
                    )}
                    <span className={styles.eyebrow}>{group.label}</span>
                    {(demo || entry.demo) && <DemoBadge />}
                  </div>
                  <h3>{entry.title}</h3>
                  {entry.summary && !expandable && <p>{entry.summary}</p>}
                  {entryDisplay === 'compact' && facts}
                </div>
                {entryDisplay !== 'compact' && <ArrowRight size={18} aria-hidden="true" />}
              </>
            );
            if (expandable) {
              return (
                <li id={'sample-entry-' + entry.slug} key={entry.slug} tabIndex={-1} className="min-w-0">
                  <ExpandableWikiCard
                    entry={entry}
                    preview={<>
                      <div className="flex items-center gap-2">
                        {entry.icon && <Image src={entry.icon.src} alt="" width={24} height={24} className="h-6 w-6 shrink-0 object-contain" unoptimized />}
                        <span className={styles.eyebrow}>{group.label}</span>
                      </div>
                      <h3 className="mt-1 line-clamp-2 font-serif font-semibold text-[var(--heading)] [overflow-wrap:break-word]">{entry.title}</h3>
                      {entry.summary && <p className="mt-1 line-clamp-1 text-sm text-[var(--body-soft)]">{entry.summary}</p>}
                    </>}
                    facts={facts}
                  />
                </li>
              );
            }
            return (
              <li id={'sample-entry-' + entry.slug} key={entry.slug} tabIndex={-1}>
                {entryDisplay === 'compact' ? (
                  entry.href ? (
                    <a className={styles.record} href={entry.href}>{fields}</a>
                  ) : (
                    <article className={styles.record}>
                      {fields}
                      {group.compactRelationLinks && entry.relatedLinks && entry.relatedLinks.length > 0 && (
                        <dl className={styles.recordFacts}>
                          <div>
                            <dt>Related</dt>
                            <dd>{entry.relatedLinks.map((link, index) => (
                              <span className={styles.factValue} key={`${link.href}-${index}`}>
                                <a href={link.href}>{link.title}</a>
                              </span>
                            ))}</dd>
                          </div>
                        </dl>
                      )}
                    </article>
                  )
                ) : (
                  <a
                    className={styles.record}
                    href={entry.href ?? hubHref(slug, 'wiki', entry.slug)}
                  >
                    {fields}
                  </a>
                )}
              </li>
            );
          })}
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
