import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import type { GameHubConfig, HubEntry } from '@/lib/game-hub-v1/config';
import { HubShell } from './hub-shell';
import hub from './hub.module.css';
import styles from './module-detail.module.css';

export type ModuleEntry = Pick<HubEntry, 'title' | 'summary' | 'icon'> & {
  type: string;
  moduleEffects?: readonly { label: string; value: string }[];
};

export function ModuleDetail({
  game,
  entry,
  backHref,
}: {
  game: GameHubConfig;
  entry: ModuleEntry;
  backHref: string;
}) {
  const effects = entry.moduleEffects?.filter(
    ({ label, value }) => label.trim() && value.trim(),
  );

  return (
    <HubShell game={game} active="wiki" detail>
      <article>
        <header className={hub.pageHeader}>
          <div className={styles.identity}>
            {entry.icon && (
              <div className={styles.icon}>
                <Image
                  src={entry.icon.src}
                  alt={entry.icon.alt}
                  width={96}
                  height={96}
                  unoptimized
                />
              </div>
            )}
            <div className={styles.title}>
              <p className={hub.eyebrow}>{entry.type}</p>
              <h1>{entry.title}</h1>
              {entry.summary && <p className={hub.lead}>{entry.summary}</p>}
            </div>
          </div>
        </header>

        {!!effects?.length && (
          <section className={hub.block} aria-labelledby="module-effects">
            <h2 id="module-effects">Module Effects</h2>
            <dl className={styles.effects}>
              {effects.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <a className={hub.back} href={backHref}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to Modules
        </a>
      </article>
    </HubShell>
  );
}
