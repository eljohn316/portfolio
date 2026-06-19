import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft02Icon } from '@hugeicons/core-free-icons';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <Container>
      <div className="text-center">
        <h3 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
          Page not found
        </h3>
        <p className="mt-2 text-zinc-700 dark:text-zinc-400">
          Sorry, the page you&apos;re looking for does not exists.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-900 bg-transparent px-4 py-2 text-sm leading-none font-semibold text-zinc-900 shadow-sm duration-200 hover:bg-zinc-200 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
          <HugeiconsIcon icon={ArrowLeft02Icon} className="-ml-1 size-4" />
          Take me Home
        </Link>
      </div>
    </Container>
  );
}
