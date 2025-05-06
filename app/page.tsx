import Link from 'next/link';
import { MailIcon } from '@/components/icons';
import { Technologies } from '@/components/technologies';
import { Projects } from '@/components/projects';
import { Section, SectionDescription, SectionHeader, SectionHeading } from '@/components/section';

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6 lg:py-32">
        <p className="font-mono text-lg font-semibold text-gray-700 lg:text-xl dark:text-zinc-300">
          Hi, I&apos;m El John Bonga
        </p>
        <p className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-5xl leading-tight font-bold text-transparent lg:mt-6 lg:text-6xl">
          I love building things for the web
        </p>
        <div className="mt-14 space-x-4 lg:mt-16">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-block rounded-md border border-blue-700 bg-white px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 md:text-base lg:px-6 lg:py-2.5">
            Resume
          </Link>
          <Link
            href="#projects"
            className="inline-block rounded-md bg-blue-700 px-5 py-2 text-sm font-medium text-blue-50 hover:bg-blue-800 md:text-base lg:px-6 lg:py-2.5">
            Projects
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-2xl px-4 sm:px-6">
        <Section id="skills">
          <SectionHeader>
            <SectionHeading>Skills</SectionHeading>
            <SectionDescription>
              Since the beginning of my web development journey, I have built a strong foundation
              with the following technologies and have dedicated much of my free time to applying
              these skills in real-world projects.
            </SectionDescription>
          </SectionHeader>
          <Technologies />
        </Section>
        <Section id="projects">
          <SectionHeader>
            <SectionHeading>Projects</SectionHeading>
            <SectionDescription>
              These are the projects I&apos;ve built throughout my web development journey,
              showcasing my growth, skills, and creativity.
            </SectionDescription>
            <p className="text-xs font-semibold text-blue-700">(More coming soon...)</p>
          </SectionHeader>
          <Projects />
        </Section>
        <Section id="contact">
          <SectionHeader>
            <SectionHeading>Contact</SectionHeading>
          </SectionHeader>
          <div className="mt-8 space-y-6 text-center">
            <p className="text-gray-600 dark:text-zinc-300">
              I&apos;m currently looking for full-time opportunities! Feel free to reach out.
            </p>
            <Link
              href="mailto:bongaeljohn07@gmail.com"
              className="inline-flex items-center gap-x-2 rounded-full bg-blue-700 px-4 py-2.5 font-semibold text-blue-50 hover:bg-blue-800">
              <MailIcon className="size-5" aria-hidden="true" />
              Get in touch
            </Link>
          </div>
        </Section>
      </main>
      <footer className="bg-gray-100 px-4 py-8 text-center dark:bg-zinc-900">
        <p className="text-xs text-gray-500 dark:text-zinc-300">
          Designed & Built by{' '}
          <Link href="https://github.com/eljohn316" target="_blank" className="font-medium">
            El John Bonga
          </Link>
        </p>
      </footer>
    </>
  );
}
