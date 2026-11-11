'use client';

import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import hub from '@/components/game-hub-v1/hub.module.css';
import styles from './weapon-cards.module.css';
import type { WeaponFact } from './weapon-properties';

export type WeaponImageSource = {
  file: string;
  width: number;
  height: number;
};

type Weapon = {
  name: string;
  image: WeaponImageSource;
  facts: readonly WeaponFact[];
};

type Variant = {
  label: string;
  searchName?: string;
  image?: WeaponImageSource;
  facts: readonly WeaponFact[];
};

type StandardWeapon = Weapon & { variants: readonly Variant[] };

function WeaponImage({ file, width, height }: WeaponImageSource) {
  return (
    <div className={styles.image}>
      <Image
        src={'/images/games/void-breaker/weapons/' + file}
        alt=""
        width={width}
        height={height}
        unoptimized
      />
    </div>
  );
}

function WeaponFacts({ facts }: { facts: readonly WeaponFact[] }) {
  if (!facts.length) return null;
  return (
    <dl className={styles.facts}>
      {facts.map(({ label, value }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function WeaponCard({
  weapon,
  variants,
  search,
  endgame = false,
}: {
  weapon: Weapon;
  variants?: readonly Variant[];
  search?: string;
  endgame?: boolean;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.identity}>
        <WeaponImage {...weapon.image} />
        <div>
          {endgame && <p className={hub.eyebrow}>Endgame</p>}
          <h3>{weapon.name}</h3>
        </div>
      </div>
      <WeaponFacts facts={weapon.facts} />
      {variants && variants.length > 0 && (
        <details key={search} className={styles.variants} open={!!search}>
          <summary>
            <span>Variants ({variants.length})</span>
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <ul className={styles.variantList}>
            {variants.map(({ label, image, facts }) => (
              <li
                className={image ? styles.variantWithImage : styles.variant}
                key={label}
              >
                {image && <WeaponImage {...image} />}
                <div>
                  <h4>{label}</h4>
                  <WeaponFacts facts={facts} />
                </div>
              </li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}

export function WeaponCards({
  standard,
  endgame,
}: {
  standard: readonly StandardWeapon[];
  endgame: readonly Weapon[];
}) {
  const [query, setQuery] = useState('');
  const search = query.trim().toLowerCase().replace(/\s+/g, ' ');
  const matches = (name: string) => name.toLowerCase().includes(search);
  const visibleStandard = standard.flatMap((weapon) => {
    if (matches(weapon.name))
      return [{ weapon, variants: weapon.variants, search: '' }];

    const variants = weapon.variants.filter(({ label, searchName }) =>
      [
        label,
        searchName ?? '',
        weapon.name + ' ' + label,
        label + ' ' + weapon.name,
      ].some(matches),
    );
    return variants.length ? [{ weapon, variants, search }] : [];
  });
  const visibleEndgame = endgame.filter(({ name }) => matches(name));

  return (
    <div className={hub.block}>
      <div className={hub.filters}>
        <label className={hub.search}>
          <span>Search weapons</span>
          <span className={hub.searchField}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search by weapon series or variant"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </span>
        </label>
      </div>
      {visibleStandard.length > 0 && (
        <section className={hub.block} aria-labelledby="standard-weapons">
          <h2 id="standard-weapons">Standard Weapons</h2>
          <ul className={styles.grid}>
            {visibleStandard.map(({ weapon, variants, search }) => (
              <li key={weapon.name}>
                <WeaponCard
                  weapon={weapon}
                  variants={variants}
                  search={search}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
      {visibleEndgame.length > 0 && (
        <section className={hub.block} aria-labelledby="endgame-weapons">
          <h2 id="endgame-weapons">Endgame Weapons</h2>
          <ul className={styles.grid}>
            {visibleEndgame.map((weapon) => (
              <li key={weapon.name}>
                <WeaponCard weapon={weapon} endgame />
              </li>
            ))}
          </ul>
        </section>
      )}
      {!visibleStandard.length && !visibleEndgame.length && (
        <div className={hub.empty}>
          <p>No weapons match your search.</p>
          <button type="button" onClick={() => setQuery('')}>
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
