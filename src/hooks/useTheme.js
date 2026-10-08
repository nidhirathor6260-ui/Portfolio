import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function readInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  // index.html applies the saved theme before first paint; default is dark.
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage can be blocked (private mode); the theme still works for this visit */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0E1524' : '#F3F5F9');
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return [theme, toggleTheme];
}
