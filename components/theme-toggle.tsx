'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@wrksz/themes/client';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun01Icon } from '@hugeicons/core-free-icons';

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
        <HugeiconsIcon icon={Moon02Icon} className="size-6" />
        <span className="sr-only">Toggle dark mode</span>
      </button>
      <button
        type="button"
        className="hidden text-zinc-200 hover:text-zinc-300 dark:inline-block"
        onClick={() => setTheme('light')}>
        <HugeiconsIcon icon={Sun01Icon} className="size-6" />
        <span className="sr-only">Toggle light mode</span>
      </button>
    </>
  );
}
