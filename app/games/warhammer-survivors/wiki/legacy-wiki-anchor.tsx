'use client';

import { useEffect } from 'react';
import { warhammerWikiCategories, warhammerWikiHref } from '@/lib/game-hub-v1/warhammer-wiki-categories';

export function LegacyWikiAnchor({ groups }: { groups: readonly { slug: string; entries: readonly string[] }[] }) {
  useEffect(() => {
    function followEntryAnchor() {
      const prefix = '#sample-entry-';
      const hash = window.location.hash;
      if (!hash.startsWith(prefix)) return;
      let slug: string;
      try {
        slug = decodeURIComponent(hash.slice(prefix.length));
      } catch {
        return;
      }
      const group = groups.find(({ entries }) => entries.includes(slug));
      const category = warhammerWikiCategories.find(({ groups }) => group && groups.some((id) => id === group.slug));
      if (category) window.location.replace(warhammerWikiHref(category.slug) + hash);
    }
    followEntryAnchor();
    window.addEventListener('hashchange', followEntryAnchor);
    return () => window.removeEventListener('hashchange', followEntryAnchor);
  }, [groups]);
  return null;
}
