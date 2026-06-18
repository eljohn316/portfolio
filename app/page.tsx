import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  DocumentAttachmentIcon,
  GithubIcon,
  LinkedinIcon,
  MailAtSign01Icon
} from '@hugeicons/core-free-icons';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { TechStack } from '@/components/pages/tech-stack';

export default function Home() {
  return (
    <>
      <Container>
        <div className="mt-8 flex justify-end">
          <ThemeToggle />
        </div>
        <div className="py-20 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
            Hi, I&apos;m{' '}
            <span className="underline decoration-blue-500 decoration-2 underline-offset-5">
              El John Bonga
            </span>
          </h1>
          <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-400">
            I&apos;m a self-taught Full Stack Developer from the Philippines with hands-on
            experience in full-stack development gained through intensive self-study and
            project-based learning.
          </p>
          <div className="xs:flex-row mt-10 flex flex-col gap-2">
            <Link
              href="https://drive.google.com/file/d/1nJUsRk8eYq3Nyj4IPXeFQYJ9Q9jab189/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-blue-500 px-4 py-2 text-sm leading-none font-semibold text-blue-50 shadow-sm duration-200 hover:bg-blue-500/90">
              <HugeiconsIcon icon={DocumentAttachmentIcon} className="-ml-1 size-5" />
              Resume
            </Link>
            <Link
              href="mailto:bongaeljohn@gmail.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-900 bg-transparent px-4 py-2 text-sm leading-none font-semibold text-zinc-900 shadow-sm duration-200 hover:bg-zinc-200 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
              <HugeiconsIcon icon={MailAtSign01Icon} className="-ml-1 size-5" />
              Email
            </Link>
            <Link
              href="https://github.com/eljohn316/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-900 bg-transparent px-4 py-2 text-sm leading-none font-semibold text-zinc-900 shadow-sm duration-200 hover:bg-zinc-200 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
              <HugeiconsIcon icon={GithubIcon} className="-ml-1 size-5" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/el-john-bonga/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-900 bg-transparent px-4 py-2 text-sm leading-none font-semibold text-zinc-900 shadow-sm duration-200 hover:bg-zinc-200 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
              <HugeiconsIcon icon={LinkedinIcon} className="-ml-1 size-5" />
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
      <TechStack />
    </>
  );
}
