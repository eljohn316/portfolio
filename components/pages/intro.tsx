import Link from 'next/link';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import {
  DocumentAttachmentIcon,
  GithubIcon,
  LinkedinIcon,
  MailAtSign01Icon
} from '@hugeicons/core-free-icons';
import { Container } from '@/components/layout/container';

type Link = {
  text: string;
  href: string;
  icon: IconSvgElement;
};
const links: Link[] = [
  {
    text: 'Resume',
    href: 'https://drive.google.com/file/d/1nJUsRk8eYq3Nyj4IPXeFQYJ9Q9jab189/view?usp=sharing',
    icon: DocumentAttachmentIcon
  },
  {
    text: 'Email',
    href: 'mailto:bongaeljohn@gmail.com',
    icon: MailAtSign01Icon
  },
  {
    text: 'GitHub',
    href: 'https://github.com/eljohn316/',
    icon: GithubIcon
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/el-john-bonga/',
    icon: LinkedinIcon
  }
];

export function Intro() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
        Hi, I&apos;m{' '}
        <span className="underline decoration-blue-500 decoration-2 underline-offset-5">
          El John Bonga
        </span>
      </h1>
      <p className="mt-5 leading-7 text-zinc-700 dark:text-zinc-400">
        I&apos;m a self-taught Full Stack Developer from the Philippines with hands-on experience in
        full-stack development gained through intensive self-study and project-based learning.
      </p>
      <div className="xs:flex-row mt-8 flex flex-col gap-2">
        {links.map(({ text, href, icon: Icon }) => (
          <Link
            key={text}
            href={href}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-zinc-900 bg-transparent px-4 py-2 text-sm leading-none font-semibold text-zinc-900 shadow-sm duration-200 hover:bg-zinc-200 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900">
            <HugeiconsIcon icon={Icon} className="-ml-1 size-5" />
            {text}
          </Link>
        ))}
      </div>
    </Container>
  );
}
