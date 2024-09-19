// src/components/ThemeSwitcher.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/actions';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <p>Current Theme: {theme}</p>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
