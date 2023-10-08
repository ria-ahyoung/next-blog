import { DEFAULT_THEME } from '@/static';
import { ThemeMode } from '.';

export default function getThemeFromLocalStorage() {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as ThemeMode) || DEFAULT_THEME;
  }
  return DEFAULT_THEME;
}
