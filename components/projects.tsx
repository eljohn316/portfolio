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
    id: 'interactive-comments-section',
    name: 'Interactive Comments Section',
    image: '/screenshots/interactive-comments-section.png',
    description: 'FrontendMentor challenge',
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
    description: 'FrontendMentor challenge',
    links: {
      source:
        'https://github.com/eljohn316/frontendmentor-challenges-hub/tree/main/challenges/multi-step-form',
      preview: 'https://multi-step-form-navy-nu.vercel.app/'
    },
    technologies: ['Next.js', 'TailwindCSS', 'TypeScript', 'React Hook Form'],
    tags: ['frontend', 'frontendmentor']
  },
  {
    id: 'product-request-feedback-app',
    name: 'Product Request Feedback App',
    image: '/screenshots/product-request-feedback-app.png',
    description: 'FrontendMentor challenge',
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
    id: 'todo-app',
    name: 'Todo App',
    image: '/screenshots/todo-app.png',
    description: 'FrontendMentor challenge',
    links: {
      source:
        'https://github.com/eljohn316/frontendmentor-challenges-hub/tree/main/challenges/todo',
      preview: 'https://todo-app-xi-steel-72.vercel.app/'
    },
    technologies: ['React.js', 'Styled Components', 'TypeScript'],
    tags: ['frontend', 'frontendmentor']
  },
  {
    id: 'savory-point',
    name: 'Savory Point',
    image: '/screenshots/savory-point.png',
    description: 'Recipe sharing web application',
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
  }
];

export function Projects() {
  return (
    <div className="xs:grid-cols-2 xs:gap-x-6 mt-16 grid gap-y-12 md:mt-20">
      {PROJECTS.map((project) => (
        <div key={project.id}>
          <div className="relative h-48 overflow-hidden rounded-md border border-gray-200 shadow-sm">
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
            <h3 className="mt-4 font-bold text-gray-900 dark:text-zinc-200">{project.name}</h3>
            <p className="text-sm text-gray-700 dark:text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
                className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Live demo</span>
                <ArrowUpRightIcon className="size-5" aria-hidden="true" />
              </Link>
              <Link
                href={project.links.source}
                target="_blank"
                className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Source code</span>
                <GithubIcon className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
