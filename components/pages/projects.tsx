import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { GithubIcon, LinkSquare01Icon } from '@hugeicons/core-free-icons';
import { Container } from '@/components/container';
import {
  FastAPIIcon,
  NextjsIcon,
  PostgresIcon,
  PrismaIcon,
  PydanticIcon,
  PythonIcon,
  ReactIcon,
  SQLAlchemyIcon,
  SQliteIcon,
  TailwindCSSIcon,
  TypescriptIcon
} from '@/components/ui/dev-icons';
import { TechBadge } from '@/components/ui/tech-badge';

type Project = {
  name: string;
  image: string;
  description: string;
  technologies: {
    name: string;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
  demoLink?: string;
  sourceCodeLink?: string;
};

const projects: Project[] = [
  {
    name: 'Jobty',
    image: '/jobty.png',
    description:
      'A command line interface (CLI) designed for quickly tracking and managing job applications.',
    technologies: [
      {
        name: 'Python',
        icon: PythonIcon
      },
      {
        name: 'Pydantic',
        icon: PydanticIcon
      },
      {
        name: 'SQLAlchemy',
        icon: SQLAlchemyIcon
      },
      {
        name: 'SQLite',
        icon: SQliteIcon
      }
    ],
    demoLink: 'https://pypi.org/project/jobty/'
  },
  {
    name: 'Savory Point',
    image: '/savory-point.png',
    description:
      'Savory Point is a recipe sharing platform where food enthusiasts can discover, create, and share their favorite recipes with the community.',
    technologies: [
      {
        name: 'Next.js',
        icon: NextjsIcon
      },
      {
        name: 'TailwindCSS',
        icon: TailwindCSSIcon
      },
      {
        name: 'Prisma',
        icon: PrismaIcon
      },
      {
        name: 'PostgreSQL',
        icon: PostgresIcon
      }
    ],
    demoLink: 'https://github.com/eljohn316/savory-point',
    sourceCodeLink: 'https://savory-point.vercel.app/'
  },
  {
    name: 'Invoicy',
    image: '/invoicy.png',
    description:
      'Invoicy is a full stack invoicing application. Providing a seamless experience for creating, managing, and tracking invoices.',
    technologies: [
      {
        name: 'Python',
        icon: PythonIcon
      },
      {
        name: 'FastAPI',
        icon: FastAPIIcon
      },
      {
        name: 'SQLAlchemy',
        icon: SQLAlchemyIcon
      },
      {
        name: 'PostgreSQL',
        icon: PostgresIcon
      },
      {
        name: 'React',
        icon: ReactIcon
      },
      {
        name: 'TypeScript',
        icon: TypescriptIcon
      },
      {
        name: 'TailwindCSS',
        icon: TailwindCSSIcon
      }
    ],
    demoLink: 'https://invoicy-five.vercel.app/',
    sourceCodeLink: 'https://github.com/eljohn316/invoicy-backend'
  }
];

export function Projects() {
  return (
    <section id="projects">
      <Container>
        <h3 className="font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-50">
          Projects
        </h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400">
          These are the projects I&apos;ve built throughout my full-stack development journey,
          showcasing my growth, skills, and creativity.
        </p>
        <div className="mt-8 space-y-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-md border border-zinc-300 shadow-xs dark:border-zinc-700">
              <Image
                src={project.image}
                alt={project.name}
                height={288}
                width={630}
                className="aspect-square h-72 w-full bg-top object-cover"
              />
              <div className="px-4 pt-6 pb-4">
                <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-300">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-pretty text-zinc-700 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map(({ name, icon: Icon }) => (
                    <TechBadge
                      key={name}
                      name={name}
                      icon={Icon}
                      className="border-zinc-300 px-2 py-1 shadow-xs"
                    />
                  ))}
                </div>
                {(project.demoLink || project.sourceCodeLink) && (
                  <div className="mt-6 flex items-center gap-x-6 border-t border-zinc-300 pt-4 dark:border-zinc-700">
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="inline-flex items-center gap-x-2 text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400/90">
                        <HugeiconsIcon icon={LinkSquare01Icon} className="-ml-1 size-4 shrink-0" />
                        Demo
                      </Link>
                    )}
                    {project.sourceCodeLink && (
                      <Link
                        href={project.sourceCodeLink}
                        target="_blank"
                        className="inline-flex items-center gap-x-2 text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-400/90">
                        <HugeiconsIcon icon={GithubIcon} className="-ml-1 size-4 shrink-0" />
                        Source Code
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
