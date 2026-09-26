import { sephiriaAllRecords } from './sephiria-wiki-data';

export const sephiriaInternalRecords = sephiriaAllRecords.map((entry) => ({
  id: entry.id,
  verificationStatus: 'PROMPT_SUPPLIED',
  sourcePrimary: null as string | null,
  sourceSecondary: null as string | null,
  internalNotes: null as string | null,
  lastVerifiedVersion: null as string | null,
}));

export function validateSephiriaRecords() {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const entry of sephiriaAllRecords) {
    if (!entry.id || ids.has(entry.id)) throw new Error(`Duplicate or missing Sephiria record id: ${entry.id}`);
    if (!entry.slug || slugs.has(entry.slug)) throw new Error(`Duplicate or missing Sephiria record slug: ${entry.slug}`);
    if (!entry.name.trim()) throw new Error(`Missing Sephiria record name: ${entry.id}`);
    ids.add(entry.id);
    slugs.add(entry.slug);
  }
  const internalById = new Map(sephiriaInternalRecords.map((entry) => [entry.id, entry]));
  if (internalById.size !== sephiriaAllRecords.length) throw new Error('Missing or duplicate internal Sephiria records');
  for (const entry of sephiriaAllRecords) {
    if (!internalById.get(entry.id)?.verificationStatus) throw new Error(`Missing internal verification status: ${entry.id}`);
    for (const relatedId of entry.relatedIds) {
      if (!ids.has(relatedId)) throw new Error(`Unresolved Sephiria relation ${entry.id} -> ${relatedId}`);
    }
  }
  return true;
}
