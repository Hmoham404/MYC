import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);
const themeStorageKey = 'myc-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'night';
    }

    return window.localStorage.getItem(themeStorageKey) || 'night';
  });

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'night' ? 'day' : 'night'));
  };

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}