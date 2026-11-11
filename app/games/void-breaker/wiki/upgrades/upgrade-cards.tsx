'use client';

import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import styles from './upgrade-cards.module.css';
import type { Upgrade } from './upgrade-types';

const searchable = (text: string) =>
  text.toLowerCase().trim().replace(/\s+/g, ' ');

function UpgradeCard({
  upgrade,
  search,
}: {
  upgrade: Upgrade;
  search: string;
}) {
  return (
    <article className={styles.card} data-upgrade={upgrade.name}>
      <div className={upgrade.icon ? styles.identity : undefined}>
        {upgrade.icon && (
          <span className={styles.icon}>
            <Image
              {...upgrade.icon}
              alt=""
              unoptimized
            />
          </span>
        )}
        <h2>{upgrade.name}</h2>
      </div>
      <p className={styles.description}>{upgrade.description}</p>
      {upgrade.tiers.length > 0 && (
        <details key={search} className={styles.tiers} open={!!search}>
          <summary>
            <span>Listed tiers ({upgrade.tiers.length})</span>
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <table className={styles.table} aria-label={`${upgrade.name} tiers`}>
            <thead>
              <tr>
                <th scope="col">Tier</th>
                <th scope="col">Effect</th>
                <th scope="col">Voidium cost</th>
              </tr>
            </thead>
            <tbody>
              {upgrade.tiers.map(({ tier, effect, voidiumCost }) => (
                <tr key={tier}>
                  <th scope="row">Tier {tier}</th>
                  <td>{effect}</td>
                  <td>{voidiumCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      )}
    </article>
  );
}

export function UpgradeCards({ upgrades }: { upgrades: readonly Upgrade[] }) {
  const [query, setQuery] = useState('');
  const search = searchable(query);
  const visible = upgrades.filter((upgrade) =>
    [
      upgrade.name,
      upgrade.description,
      ...upgrade.tiers.flatMap((tier) => [
        tier.effect,
        String(tier.voidiumCost),
      ]),
    ].some((value) => searchable(value).includes(search)),
  );

  return (
    <div className={hub.block}>
      <div className={`${hub.filters} ${styles.toolbar}`}>
        <label className={hub.search}>
          <span>Search upgrades</span>
          <span className={hub.searchField}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search by name, effect or Voidium cost"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </span>
        </label>
        <div className={styles.results}>
          <output aria-live="polite">
            {visible.length} {visible.length === 1 ? 'upgrade' : 'upgrades'}
          </output>
          {query && (
            <button type="button" onClick={() => setQuery('')}>
              Clear search
            </button>
          )}
        </div>
      </div>
      {visible.length > 0 ? (
        <ul className={styles.grid} aria-label="Upgrade entries">
          {visible.map((upgrade) => (
            <li key={upgrade.name}>
              <UpgradeCard upgrade={upgrade} search={search} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={hub.empty}>
          <p>No upgrades match your search.</p>
        </div>
      )}
    </div>
  );
}
