import type { ReactNode } from 'react';
import { GameDisclosureFooter } from '@/components/game-disclosure-footer';

export default function GamesLayout({ children }: { children: ReactNode }) {
  return <>{children}<GameDisclosureFooter /></>;
}
