import { voidBreakerReleaseMetadata } from '@/lib/game-hub-v1/void-breaker-release';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { HubShell } from '@/components/game-hub-v1/hub-shell';
import hub from '@/components/game-hub-v1/hub.module.css';
import { hubHref } from '@/lib/game-hub-v1/config';
import { game } from '../../game';
import data from './weapons.internal.json';
import { WeaponCards, type WeaponImageSource } from './weapon-cards';
import {
  weaponFacts,
  type VerifiedWeaponProperties,
} from './weapon-properties';

type WeaponRecord = {
  name: string;
  image: string;
  asset: { asset: string };
  verifiedProperties?: VerifiedWeaponProperties;
};

type VariantRecord = {
  grade: string;
  asset: { asset: string };
  displayName?: string;
  searchName?: string;
  verifiedImage?: WeaponImageSource;
  verifiedProperties?: VerifiedWeaponProperties;
};

const standard: readonly (WeaponRecord & {
  variants: readonly VariantRecord[];
})[] = data.standard;
const endgame: readonly WeaponRecord[] = data.endgame;

function publicWeapon({
  name,
  image,
  asset,
  verifiedProperties,
}: WeaponRecord) {
  return {
    name,
    image: { file: image, width: 1024, height: 512 },
    facts: weaponFacts(verifiedProperties, asset.asset),
  };
}

export const metadata: Metadata = voidBreakerReleaseMetadata(
  '/games/void-breaker/wiki/weapons',
  'Weapons · VOID/BREAKER Wiki | RUNBACK',
  'Browse standard weapons, their variants, and endgame weapons in VOID/BREAKER.',
);

export default function WeaponsPage() {
  return (
    <HubShell game={game} active="wiki" detail>
      <header className={hub.pageHeader}>
        <p className={hub.eyebrow}>{game.name} · Wiki</p>
        <h1>Weapons</h1>
        <p className={hub.lead}>
          Browse standard weapon series, their variants, and endgame weapons.
        </p>
        <p className={hub.lead}>
          Weapon stats are sourced from game assets and have not yet been fully
          verified in gameplay.
        </p>
      </header>
      <WeaponCards
        standard={standard.map((weapon) => ({
          ...publicWeapon(weapon),
          variants: weapon.variants.flatMap((variant) =>
            variant.grade !== 'C' && variant.displayName
              ? [
                  {
                    label: variant.displayName,
                    searchName: variant.searchName,
                    image: variant.verifiedImage,
                    facts: weaponFacts(
                      variant.verifiedProperties,
                      variant.asset.asset,
                    ),
                  },
                ]
              : [],
          ),
        }))}
        endgame={endgame.map(publicWeapon)}
      />
      <a className={hub.back} href={hubHref(game.slug, 'wiki')}>
        <ArrowLeft size={16} aria-hidden="true" /> Back to Wiki categories
      </a>
    </HubShell>
  );
}
