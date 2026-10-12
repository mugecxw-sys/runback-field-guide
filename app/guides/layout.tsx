import type { ReactNode } from 'react';
import { GameDisclosureFooter } from '@/components/game-disclosure-footer';

export default function GuidesLayout({ children }: { children: ReactNode }) {
  return <>{children}<GameDisclosureFooter gameHref="/games/repo" /></>;
}
