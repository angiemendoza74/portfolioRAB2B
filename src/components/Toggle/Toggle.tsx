import { useEffect, useState } from 'react';
import './Toggle.scss';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || '');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('dark', 'light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleTheme} className="toggle">
      <span className="toggle__icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
      <span className="toggle__label">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  );
}
