import { FaMoon, FaSun } from 'react-icons/fa6';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
      className='
        w-16 h-8 px-1 rounded-full
        border border-[var(--card-border)] backdrop-blur-md
        transition-all duration-300 shadow-sm bg-[var(--card-bg)]'
    >
      <div
        className={`
          relative w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-300 bg-[var(--tw-accent)]
          ${
            isDark
              ? 'translate-x-8  '
              : 'translate-x-0 bg-gray-200'
          }
        `}
      >
        {isDark ? (
          <FaMoon className='text-white text-sm' />
        ) : (
          <FaSun className='text-yellow-400 text-sm' />
        )}
      </div>
    </button>
  );
};
