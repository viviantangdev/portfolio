import { useEffect, useState } from 'react';

export const useThemeMode = (initial = true) => {
  const [isDark, setIsDark] = useState(initial);

  useEffect(() => {
    const classList = document.documentElement.classList;
    isDark ? classList.add('dark') : classList.remove('dark');
  }, [isDark]);

  return [isDark, setIsDark];
};
