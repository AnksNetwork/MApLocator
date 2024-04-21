import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Map Locator</h1>
      <h2>Welcome to Map Locator</h2>
    </header>
  );
};

export default Header;