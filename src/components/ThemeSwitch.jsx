import { FaMoon, FaSun } from 'react-icons/fa6';

export const ThemeSwitch = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
      className={`
         w-16 h-8 px-1 rounded-full
        border border-[var(--card-border)] backdrop-blur-md
        transition-all duration-300 shadow-md
        ${isDark ? 'bg-[var(--card-bg)]' : 'bg-white/60'}
      `}
    >
      <div
        className={`
          relative w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-300
          ${
            isDark
              ? 'translate-x-8 bg-[var(--tw-accent)] drop-shadow-[0_0_6px_var(--tw-accent)]'
              : 'translate-x-0 bg-gray-300'
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
