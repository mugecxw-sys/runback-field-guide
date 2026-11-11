'use client';

import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import moduleDetail from '@/components/game-hub-v1/module-detail.module.css';
import { voidBreakerFireModes } from '@/lib/game-hub-v1/void-breaker-fire-modes';
import {
  moduleTypes,
  voidBreakerModules,
  type ModuleType,
} from '@/lib/game-hub-v1/void-breaker-modules';
import styles from './module-cards.module.css';

const pageSize = 24;

function FireModeSeries({
  series,
  initiallyOpen,
}: {
  series: (typeof voidBreakerFireModes)[number];
  initiallyOpen: boolean;
}) {
  const variantEffects = new Map<string, string[]>();
  for (const { weapon, additionalEffect } of series.variants) {
    if (additionalEffect) {
      const weapons = variantEffects.get(additionalEffect) ?? [];
      weapons.push(weapon);
      variantEffects.set(additionalEffect, weapons);
    }
  }

  return (
    <details className={styles.series} open={initiallyOpen}>
      <summary className={styles.card}>
        <span className={moduleDetail.icon}>
          <Image
            src={series.icon.src}
            alt=""
            width={48}
            height={48}
            loading="eager"
            unoptimized
          />
        </span>
        <span className={styles.content}>
          <span className={hub.eyebrow}>
            {series.variants.length}{' '}
            {series.variants.length === 1 ? 'variant' : 'variants'}
          </span>
          <span className={styles.seriesTitle}>{series.title}</span>
          <span className={styles.description}>{series.method}</span>
        </span>
        <ChevronDown size={18} aria-hidden="true" />
      </summary>
      <ul className={styles.variants}>
        {series.variants.map(({ entry, weapon, damageTooltip }) => (
          <li key={entry.slug} className={styles.variant}>
            <h3>{entry.title}</h3>
            <p className={styles.description}>{weapon}</p>
            {(damageTooltip || series.activation) && (
              <dl className={styles.effects}>
                {damageTooltip && (
                  <>
                    <div>
                      <dt>Effect</dt>
                      <dd>Damage {damageTooltip}</dd>
                    </div>
                    <div>
                      <dt>Condition</dt>
                      <dd>While this fire mode is selected</dd>
                    </div>
                  </>
                )}
                {series.activation && (
                  <div>
                    <dt>Activation</dt>
                    <dd>{series.activation}</dd>
                  </div>
                )}
              </dl>
            )}
          </li>
        ))}
      </ul>
      {(series.additionalEffect || variantEffects.size > 0) && (
        <div className={styles.copyNotes}>
          <h3>Additional Effect</h3>
          {series.additionalEffect && <p>{series.additionalEffect}</p>}
          {variantEffects.size > 0 && (
            <ul>
              {Array.from(variantEffects, ([effect, weapons]) => (
                <li key={effect}>
                  <strong>{weapons.join(', ')}.</strong> {effect}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </details>
  );
}

export function ModuleCards({ initialFireMode }: { initialFireMode?: string }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<ModuleType | ''>(() =>
    voidBreakerFireModes.some(({ slug }) => slug === initialFireMode)
      ? 'Fire Mode'
      : '',
  );
  const [highlightedSeries, setHighlightedSeries] = useState(initialFireMode);
  const [page, setPage] = useState(1);
  const heading = useRef<HTMLHeadingElement>(null);
  const search = query.trim().toLowerCase();
  const grouped = type === 'Fire Mode';
  const terms = search.match(/[a-z0-9]+/g) ?? [];
  const fireModes = grouped
    ? voidBreakerFireModes
        .map((series) => ({
          ...series,
          variants: series.variants.filter(({ entry, weapon }) => {
            const text = [
              series.title,
              series.method,
              entry.title,
              entry.type,
              entry.summary,
              weapon,
            ]
              .join(' ')
              .toLowerCase();
            return terms.every((term) => text.includes(term));
          }),
        }))
        .filter(({ variants }) => variants.length)
    : [];
  const variantCount = fireModes.reduce(
    (count, series) => count + series.variants.length,
    0,
  );
  const visible = grouped
    ? []
    : voidBreakerModules.filter(
        (entry) =>
          (!type || entry.type === type) &&
          [entry.title, entry.type, entry.summary].some((value) =>
            value.toLowerCase().includes(search),
          ),
      );
  const resultSize = grouped ? fireModes.length : visible.length;
  const pages = Math.max(1, Math.ceil(resultSize / pageSize));
  const start = (page - 1) * pageSize;
  const pageEntries = visible.slice(start, start + pageSize);

  function filterType(value: ModuleType | '') {
    setType(value);
    setHighlightedSeries(undefined);
    setPage(1);
  }

  function goToPage(value: number) {
    setPage(value);
    heading.current?.focus();
  }

  return (
    <section className={hub.block} aria-labelledby="all-modules">
      <h2 id="all-modules" ref={heading} tabIndex={-1}>
        All Modules
      </h2>
      <div className={hub.filters}>
        <label className={hub.search}>
          <span>Search modules</span>
          <span className={hub.searchField}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search by name, type, or description"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />
          </span>
        </label>
        <fieldset className={hub.categories} aria-label="Module type">
          <button
            type="button"
            aria-pressed={!type}
            onClick={() => filterType('')}
          >
            All types
          </button>
          {moduleTypes.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={type === option}
              onClick={() => filterType(option)}
            >
              {option}s
            </button>
          ))}
        </fieldset>
      </div>
      <output className={hub.resultCount}>
        {grouped
          ? `${fireModes.length} series · ${variantCount} ${variantCount === 1 ? 'variant' : 'variants'}`
          : `${visible.length === voidBreakerModules.length ? visible.length : visible.length + ' of ' + voidBreakerModules.length} preview modules`}
        {pages > 1 &&
          !grouped &&
          ' · Showing ' +
            String(start + 1) +
            '–' +
            String(start + pageEntries.length)}
      </output>
      {grouped && (
        <p className={styles.tooltipNote}>
          Displayed values are sourced from game tooltip data.
        </p>
      )}
      {grouped && resultSize ? (
        <ul className={styles.grid}>
          {fireModes.slice(start, start + pageSize).map((series) => (
            <li key={series.slug}>
              <FireModeSeries
                series={series}
                initiallyOpen={
                  Boolean(search) || highlightedSeries === series.slug
                }
                key={search}
              />
            </li>
          ))}
        </ul>
      ) : resultSize ? (
        <ul className={styles.grid}>
          {pageEntries.map((entry) => (
            <li key={entry.slug}>
              <article className={styles.card}>
                <div className={moduleDetail.icon}>
                  <Image
                    src={entry.icon.src}
                    alt={entry.icon.alt}
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <div className={styles.content}>
                  <p className={hub.eyebrow}>{entry.type}</p>
                  <h3>{entry.title}</h3>
                  <p className={styles.description}>{entry.summary}</p>
                  {entry.moduleEffects?.length ? (
                    <dl className={styles.effects}>
                      {entry.moduleEffects.map(({ label, value }) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className={hub.empty}>
          <p>No modules match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              filterType('');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      {pages > 1 && (
        <nav className={hub.categories} aria-label="Module pages">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => goToPage(page - 1)}
          >
            Previous
          </button>
          <span className={hub.resultCount}>
            Page {page} of {pages}
          </span>
          <button
            type="button"
            disabled={page === pages}
            onClick={() => goToPage(page + 1)}
          >
            Next
          </button>
        </nav>
      )}
    </section>
  );
}
