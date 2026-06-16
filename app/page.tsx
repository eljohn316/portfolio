import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { DocumentAttachmentIcon, MailAtSign01Icon } from '@hugeicons/core-free-icons';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <Container>
      <div className="mt-8 flex justify-end">
        <ThemeToggle />
      </div>
      <div className="py-24">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
          Hi, I&apos;m{' '}
          <span className="underline decoration-blue-500 decoration-2 underline-offset-5">
            El John Bonga
          </span>
        </h1>
        <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-400">
          I&apos;m a self-taught Full Stack Developer from the Philippines with hands-on experience
          in full-stack development gained through intensive self-study and project-based learning.
        </p>
        <div className="mt-10 flex gap-x-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-sm bg-blue-500 px-6 py-3 text-sm leading-none font-semibold text-blue-50 shadow-sm duration-200 hover:bg-blue-500/90">
            <HugeiconsIcon icon={DocumentAttachmentIcon} className="-ml-1 size-5" />
            Resume
          </Link>
          <Link
            href="mailto:bongaeljohn@gmail.com"
            className="inline-flex items-center gap-2 rounded-sm bg-zinc-900 px-6 py-3 text-sm leading-none font-semibold text-indigo-50 shadow-sm duration-200 hover:bg-zinc-800 dark:bg-zinc-700 dark:hover:bg-zinc-700/90">
            <HugeiconsIcon icon={MailAtSign01Icon} className="-ml-1 size-5" />
            Email
          </Link>
        </div>
      </div>
    </Container>
  );
}
