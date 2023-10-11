'use client';
import { useContext } from 'react';

import { ThemeContext } from '@/contexts';

import styles from './themeToggle.module.css';

const ThemeToggle = () => {
  const { themeMode, onClickTheme } = useContext(ThemeContext);
  const themeIcon = themeMode === 'dark' ? '🌖' : '🌞';

  return (
    <div className={styles.container} onClick={onClickTheme}>
      <div
        className={styles.ball}
        style={
          themeMode === 'dark'
            ? { right: 2, background: '#0f172a' }
            : { left: 2, background: 'white' }
        }
      >
        {themeIcon}
      </div>
    </div>
  );
};

export default ThemeToggle;
