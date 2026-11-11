import { voidBreakerReleaseCategories } from '@/lib/game-hub-v1/void-breaker-release';
import { ArrowLeft } from 'lucide-react';
import { HubCard, HubFacts } from '@/components/game-hub-v1/hub-card';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import styles from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import {
  wikiLocationCategories,
  type WikiCategory,
} from '@/lib/game-hub-v1/void-breaker-wiki';
import { game } from './game';
import { ModuleCards } from './module-cards';

const wikiUrl = hubHref(game.slug, 'wiki');

export function WikiCategoryIndex() {
  return (
    <HubShell game={game} active="wiki">
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>{game.name} · Wiki</p>
        <h1>Wiki</h1>
        <p className={styles.lead}>{game.sections.wiki?.description}</p>
      </header>
      <section className={styles.block} aria-labelledby="wiki-categories">
        <h2 id="wiki-categories">Categories</h2>
        <div className={styles.cardGrid}>
          {voidBreakerReleaseCategories.map((category) => (
            <HubCard
              key={category.slug}
              href={hubHref(game.slug, 'wiki', category.slug)}
              title={category.label}
              summary={category.summary}
            />
          ))}
        </div>
      </section>
    </HubShell>
  );
}

export function WikiCategoryPage({
  category,
  initialFireMode,
}: {
  category: WikiCategory;
  initialFireMode?: string;
}) {
  if (category.slug === 'modules') {
    return (
      <HubShell game={game} active="wiki" detail>
        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>{game.name} · Wiki</p>
          <h1>Modules</h1>
          <p className={styles.lead}>
            Browse mods by type, including fire modes, optics, and abilities.
          </p>
        </header>
        <ModuleCards key={initialFireMode} initialFireMode={initialFireMode} />
        <a className={styles.back} href={wikiUrl}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
        </a>
      </HubShell>
    );
  }

  const isLocation = wikiLocationCategories.some(
    ({ slug }) => slug === category.slug,
  );
  const backHref = isLocation
    ? hubHref(game.slug, 'wiki', 'world-and-locations')
    : wikiUrl;
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>{game.name} · Wiki category</p>
        <h1>{category.label}</h1>
        <p className={styles.lead}>{category.summary}</p>
      </header>
      <HubFacts
        facts={[
          { label: 'Source records', value: String(category.records) },
          { label: 'Distinct linked PNGs', value: String(category.images) },
        ]}
      />
      {category.slug === 'world-and-locations' && (
        <section className={styles.block} aria-labelledby="wiki-locations">
          <h2 id="wiki-locations">Subcategories</h2>
          <div className={styles.cardGrid}>
            {wikiLocationCategories.map((location) => (
              <HubCard
                key={location.slug}
                href={hubHref(game.slug, 'wiki', location.slug)}
                title={location.label}
                summary={location.summary}
                label={
                  location.records +
                  ' records · ' +
                  location.images +
                  ' linked PNGs'
                }
              />
            ))}
          </div>
        </section>
      )}
      {category.subcategories?.length ? (
        <section className={styles.block} aria-labelledby="wiki-subcategories">
          <h2 id="wiki-subcategories">Subcategories</h2>
          <HubFacts
            facts={category.subcategories.map(({ label, records, images }) => ({
              label,
              value: records + ' records · ' + images + ' linked PNGs',
            }))}
          />
        </section>
      ) : null}
      <section className={styles.block} aria-labelledby="wiki-coverage">
        <h2 id="wiki-coverage">Data coverage</h2>
        <p className={styles.notes}>{category.coverage}</p>
      </section>
      <a className={styles.back} href={backHref}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to{' '}
        {isLocation ? 'World & Locations' : 'Wiki categories'}
      </a>
    </HubShell>
  );
}
