import Link from 'next/link';
import Image from 'next/image';
import { Tag, type TagVariants } from '@/components/tag';
import { ArrowUpRightIcon, GithubIcon } from '@/components/icons';

type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  links: {
    source: string;
    preview: string;
  };
  technologies: string[];
  tags: TagVariants['variant'][];
};

const PROJECTS: Project[] = [
  {
    id: 'product-request-feedback-app',
    name: 'Product Request Feedback App',
    image: '/screenshots/product-request-feedback-app.png',
    description:
      'Full-stack web application developed using Express.js for the backend and React for the frontend.',
    links: {
      preview: 'https://product-request-feedback-app.vercel.app/',
      source: 'https://github.com/eljohn316/product-request-feedback-app'
    },
    technologies: [
      'React.js',
      'TanStack Router',
      'TanStack Query',
      'TailwindCSS',
      'TypeScript',
      'Express.js',
      'Node.js',
      'Prisma',
      'PostgreSQL'
    ],
    tags: ['fullstack', 'frontendmentor']
  },

  {
    id: 'savory-point',
    name: 'Savory Point',
    image: '/screenshots/savory-point.png',
    description:
      'Recipe-sharing platform built using Next.js, TailwindCSS, Prisma ORM and PostgreSQL.',
    links: {
      preview: 'https://savory-point.vercel.app/',
      source: 'https://github.com/eljohn316/savory-point'
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'React Hook Form',
      'Prisma',
      'PostgreSQL'
    ],
    tags: ['fullstack']
  },
  {
    id: 'invoice-app',
    name: 'Invoice app',
    description:
      'An invoice management application developed with Next.js, TailwindCSS, SWR, GraphQL, Prisma ORM and PostgreSQL.',
    image: '/screenshots/invoice-app.png',
    links: {
      preview: 'https://invoice-app-fem.vercel.app/',
      source: 'https://github.com/eljohn316/invoice-app'
    },
    tags: ['fullstack', 'frontendmentor'],
    technologies: ['Next.js', 'TailwindCSS', 'GraphQL', 'SWR', 'Prisma', 'PostgreSQL']
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    image: '/screenshots/todo-app.png',
    description: 'A purely client-side todo application built with React and Styled Components.',
    links: {
      source:
        'https://github.com/eljohn316/frontendmentor-challenges-hub/tree/main/challenges/todo',
      preview: 'https://todo-app-xi-steel-72.vercel.app/'
    },
    technologies: ['React.js', 'Styled Components', 'TypeScript'],
    tags: ['frontend', 'frontendmentor']
  },
  {
    id: 'interactive-comments-section',
    name: 'Interactive Comments Section',
    image: '/screenshots/interactive-comments-section.png',
    description:
      'An interactive comments section application built with React.js and Dexie.js for storage.',
    links: {
      source:
        'https://github.com/eljohn316/frontendmentor-challenges-hub/tree/main/challenges/interactive-comments-section',
      preview: 'https://interactive-comments-section-app.vercel.app/'
    },
    technologies: ['React.js', 'TailwindCSS', 'TypeScript'],
    tags: ['frontend', 'frontendmentor']
  },
  {
    id: 'multi-step-form',
    name: 'Multi Step Form',
    image: '/screenshots/multi-step-form.png',
    description: 'Multi-step form app created with Next.js and React Hook Form for validation.',
    links: {
      source:
        'https://github.com/eljohn316/frontendmentor-challenges-hub/tree/main/challenges/multi-step-form',
      preview: 'https://multi-step-form-navy-nu.vercel.app/'
    },
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'React Hook Form'],
    tags: ['frontend', 'frontendmentor']
  }
];

export function Projects() {
  return (
    <div className="mx-auto mt-16 max-w-xl space-y-16 sm:space-y-24 md:mt-20">
      {PROJECTS.map((project) => (
        <div key={project.id}>
          <div className="relative h-48 overflow-hidden rounded-md border border-gray-200 shadow-sm sm:h-72">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="50vw"
              className="size-full object-cover"
            />
          </div>
          <div className="mt-4 px-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} variant={tag} />
              ))}
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-zinc-200">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 border-y border-gray-200 py-3.5">
              {project.technologies.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-gray-200 px-2 py-2.5 font-mono text-xs leading-0 font-medium text-gray-800 dark:bg-zinc-600 dark:text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-x-3">
              <Link
                href={project.links.preview}
                target="_blank"
                className="inline-flex items-center gap-x-2.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-blue-50 hover:bg-blue-800">
                Live demo
                <ArrowUpRightIcon className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href={project.links.source}
                target="_blank"
                className="inline-flex items-center gap-x-2.5 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200">
                Source code
                <GithubIcon className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
