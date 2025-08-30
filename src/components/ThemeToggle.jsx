import { useEffect, useState } from 'react';
import useSystemTheme from '../hooks/useSystemTheme';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState(systemTheme);

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
      className='gradient-btn'
    >
      {theme === 'dark' ? <IoSunnyOutline/> : <IoMoonOutline/>}
    </button>
  );
};

export default ThemeToggle;
