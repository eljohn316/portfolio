import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { MailAtSign01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export function Contact() {
  return (
    <section id="Contact">
      <Container>
        <h3 className="font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-50">
          Contact
        </h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400">
          I&apos;m currently looking for full-time opportunities! Feel free to reach out.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="mailto:bongaeljohn@gmail.com"
            className="inline-flex items-center gap-x-3 rounded-sm bg-blue-500 px-4 py-2 text-sm font-medium text-blue-50 duration-300 hover:bg-blue-600">
            <HugeiconsIcon icon={MailAtSign01Icon} className="-ml-1 size-5" /> Get in touch
          </Link>
        </div>
      </Container>
    </section>
  );
}
