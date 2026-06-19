import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 px-4 py-5 text-center text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      Built with ❤️ by <Link href="https://github.com/eljohn316/">El John</Link>
    </footer>
  );
}
