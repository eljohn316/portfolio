'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@wrksz/themes/client';
import { MoonIcon, SunIcon } from '@/components/icons';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="size-5 rounded-full bg-zinc-200" />;

  return (
    <>
      <button
        type="button"
        className="text-zinc-400 hover:text-zinc-500 dark:hidden"
        onClick={() => setTheme('dark')}>
        <span className="sr-only">Toggle dark mode</span>
        <MoonIcon className="size-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="hidden text-zinc-200 hover:text-zinc-300 dark:inline-block"
        onClick={() => setTheme('light')}>
        <span className="sr-only">Toggle light mode</span>
        <SunIcon className="size-5" aria-hidden="true" />
      </button>
    </>
  );
}
