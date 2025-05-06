import Link from 'next/link';
import { GithubIcon } from '@/components/icons';

export function GithubLink() {
  return (
    <Link
      href="https://github.com/eljohn316"
      target="_blank"
      className="text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300">
      <GithubIcon className="size-6" aria-hidden="true" />
      <span className="sr-only">Github account</span>
    </Link>
  );
}
