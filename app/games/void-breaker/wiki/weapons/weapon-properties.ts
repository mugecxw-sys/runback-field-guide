const labels = {
  damage: 'Damage',
  fireRate: 'Fire Rate (RPM)',
  magazineSize: 'Magazine Size',
  reloadTime: 'Reload Time',
  reloadSpeed: 'Reload Speed',
  accuracy: 'Accuracy',
  handling: 'Handling',
  projectileCount: 'Projectile Count',
  defaultFireMode: 'Default Fire Mode',
  specialEffect: 'Special Effect',
  unlockCondition: 'Unlock Condition',
} as const;

type Property = keyof typeof labels;

// Source-confirmed values are permitted only for the three explicit asset stats.
// Other properties require gameplay verification.
export type VerifiedWeaponProperties = Partial<
  Record<
    Property,
    {
      assetId: string;
      rawField: string;
      rawValue: string | number;
      text: string;
      source: string;
      sourceBuild: string;
      // JSON statuses are checked against the allowed states before rendering.
      status: string;
    }
  >
>;

export type WeaponFact = { label: string; value: string };

const assetFields: Partial<Record<Property, string>> = {
  damage: 'damage',
  fireRate: 'rpm',
  magazineSize: 'magazine_size',
};

export function weaponFacts(
  verified: VerifiedWeaponProperties | undefined,
  assetId: string,
): WeaponFact[] {
  return (Object.keys(labels) as Property[]).flatMap((key) => {
    const field = verified?.[key];
    if (
      !field ||
      field.assetId !== assetId ||
      !field.rawField.trim() ||
      !field.source.trim() ||
      !field.sourceBuild.trim() ||
      !field.text.trim()
    ) {
      return [];
    }

    const rawValue = field.rawValue;
    const hasValue =
      typeof rawValue === 'number'
        ? Number.isFinite(rawValue)
        : typeof rawValue === 'string' && !!rawValue.trim();
    const sourceConfirmed =
      field.status === 'source-confirmed' &&
      field.rawField === assetFields[key] &&
      typeof rawValue === 'number' &&
      field.text === String(rawValue);
    return hasValue && (sourceConfirmed || field.status === 'gameplay-verified')
      ? [{ label: labels[key], value: field.text }]
      : [];
  });
}
