import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

/**
 * ThemeContext manages color mode (light/dark).
 * It writes an attribute to the document for potential theming and persists preference in localStorage.
 */
const ThemeContext = createContext({
  theme: 'light',
  // PUBLIC_INTERFACE
  toggleTheme: () => {},
});

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  /** Provides theme state and toggle to the application. */
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return saved || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* noop */
    }
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(t => (t === 'light' ? 'dark' : 'light')),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// PUBLIC_INTERFACE
export function useTheme() {
  /** Hook: Returns the theme context with { theme, toggleTheme } */
  return useContext(ThemeContext);
}
