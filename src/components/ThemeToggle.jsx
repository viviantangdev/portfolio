import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='gradient-btn cursor-pointer'
    >
      {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
};

export default ThemeToggle;
