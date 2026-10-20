'use client';

import { useSyncExternalStore } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import type { ThemePreference } from '@/lib/theme';

const choices = [
  { value: 'system', label: 'System', Icon: Monitor },
  { value: 'day', label: 'Day', Icon: Sun },
  { value: 'night', label: 'Night', Icon: Moon },
] as const;

function subscribe(onChange: () => void) {
  window.addEventListener('runback-theme-change', onChange);
  return () => window.removeEventListener('runback-theme-change', onChange);
}

function getSnapshot() {
  return `${document.documentElement.dataset.themePreference ?? 'system'}:${document.documentElement.dataset.theme ?? 'night'}`;
}

function getServerSnapshot() {
  return 'system:night';
}

export function ThemeSwitcher() {
  const [preference, resolved] = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).split(':');
  function select(value: ThemePreference) {
    window.dispatchEvent(new CustomEvent('runback-theme-select', { detail: value }));
  }

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      {choices.map(({ value, label, Icon }) => (
        <button key={value} type="button" aria-label={`${label} theme`} title={`${label} theme`} aria-pressed={preference === value} onClick={() => select(value)}>
          <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
        </button>
      ))}
      <span className="sr-only" aria-live="polite">Current theme: {resolved === 'day' ? 'Day' : 'Night'}</span>
    </div>
  );
}
