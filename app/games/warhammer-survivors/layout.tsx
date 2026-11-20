import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: { index: true, follow: true },
  alternates: { canonical: null },
};

export default function GameHubLayout({ children }: { children: ReactNode }) {
  return children;
}
