'use client';

import { createContext, useEffect, useState } from 'react';
import getThemeFromLocalStorage from './getThemeFromLocalStorage';

import { DEFAULT_THEME } from '@/static';

import type { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextInterface {
  themeMode: ThemeMode;
  onClickTheme: () => void;
}

const defaultState: ThemeContextInterface = {
  themeMode: DEFAULT_THEME,
  onClickTheme: () => {}
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() =>
    getThemeFromLocalStorage()
  );

  const onClickTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, onClickTheme }}>
      <div className={themeMode}>{children}</div>
    </ThemeContext.Provider>
  );
};
