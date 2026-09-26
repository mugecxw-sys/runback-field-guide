import type { NextConfig } from 'next';
import { sephiriaLegacyRedirects } from './lib/sephiria-wiki-data';

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/guides/upgrades-explained', destination: '/guides/upgrade-priority', permanent: true },
      { source: '/guides/first-shop-priority', destination: '/guides/upgrade-priority', permanent: true },
      { source: '/guides/when-to-save-or-spend-in-r-e-p-o', destination: '/guides/upgrade-priority', permanent: true },
      { source: '/guides/common-beginner-mistakes-in-r-e-p-o', destination: '/guides/first-run-guide', permanent: true },
      { source: '/guides/levels-and-objectives-what-changes-between-runs', destination: '/guides/first-run-guide', permanent: true },
      { source: '/guides/monster-counter-cheat-sheet', destination: '/games/repo/enemies', permanent: true },
      { source: '/guides/valuable-routes-and-safe-carry-plans', destination: '/guides/cart-guide', permanent: true },
      { source: '/guides/carrying-and-physics-tips', destination: '/guides/cart-guide', permanent: true },
      { source: '/guides/current-version-changes-what-players-should-retest', destination: '/guides/r-e-p-o-patch-notes-explained-for-players', permanent: true },
      ...sephiriaLegacyRedirects.map(({ oldUrl, destination }) => ({
        source: oldUrl,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
