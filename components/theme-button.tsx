'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons';

export function ThemeButton() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="size-6 rounded-full bg-gray-200" />;

  return (
    <>
      <button
        type="button"
        className="text-gray-400 hover:text-gray-500 dark:hidden"
        onClick={() => setTheme('dark')}>
        <span className="sr-only">Toggle dark mode</span>
        <MoonIcon className="size-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="hidden text-gray-200 hover:text-gray-300 dark:inline-block"
        onClick={() => setTheme('light')}>
        <span className="sr-only">Toggle light mode</span>
        <SunIcon className="size-6" aria-hidden="true" />
      </button>
    </>
  );
}
