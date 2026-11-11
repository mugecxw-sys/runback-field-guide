import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './hub.module.css';

export function DemoBadge() {
  return <span className={styles.badge}>Demo</span>;
}

export function HubCard({
  href,
  title,
  summary,
  label,
  demo,
  icon: Icon,
}: {
  href: string;
  title: string;
  summary: string;
  label?: string;
  demo?: boolean;
  icon?: LucideIcon;
}) {
  return (
    <a className={styles.card} href={href}>
      <div className={styles.cardMeta}>
        {Icon && (
          <span className={styles.iconTile}>
            <Icon size={19} aria-hidden="true" />
          </span>
        )}
        {label && <span className={styles.eyebrow}>{label}</span>}
        {demo && <DemoBadge />}
      </div>
      <div className={styles.cardHeading}>
        <h3>{title}</h3>
        <ArrowRight size={17} aria-hidden="true" />
      </div>
      <p>{summary}</p>
    </a>
  );
}

export function HubFacts({
  facts,
}: {
  facts: readonly { label: string; value: string }[];
}) {
  return (
    <dl className={styles.facts}>
      {facts.map(({ label, value }) => (
        <div key={label}>
          <dt className={styles.eyebrow}>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
