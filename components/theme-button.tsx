'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons';

export function ThemeButton() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="size-6" />;

  if (theme === 'light')
    return (
      <button
        type="button"
        className="text-gray-400 hover:text-gray-500"
        onClick={() => setTheme('dark')}>
        <span className="sr-only">Toggle dark mode</span>
        <MoonIcon className="size-6" aria-hidden="true" />
      </button>
    );

  return (
    <button
      type="button"
      className="text-gray-200 hover:text-gray-300"
      onClick={() => setTheme('light')}>
      <span className="sr-only">Toggle light mode</span>
      <SunIcon className="size-6" aria-hidden="true" />
    </button>
  );
}
