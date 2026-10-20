export type ThemePreference = 'system' | 'day' | 'night';

// Runs in <head> before React or the body paints. Keep this self-contained.
export const themeBootstrap = `(() => {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => value === 'day' || value === 'night' || value === 'system';
  let preference = 'system';
  try {
    const stored = localStorage.getItem('runback-theme');
    if (valid(stored)) preference = stored;
  } catch {}
  const apply = () => {
    const theme = preference === 'system' ? (media.matches ? 'night' : 'day') : preference;
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    root.classList.toggle('dark', theme === 'night');
    window.dispatchEvent(new Event('runback-theme-change'));
  };
  window.addEventListener('runback-theme-select', event => {
    if (!valid(event.detail)) return;
    preference = event.detail;
    try { localStorage.setItem('runback-theme', preference); } catch {}
    apply();
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'runback-theme' && event.key !== null) return;
    preference = valid(event.newValue) ? event.newValue : 'system';
    apply();
  });
  media.addEventListener('change', apply);
  apply();
})();`;
