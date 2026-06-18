import { JSX } from 'react';
import { Container } from '@/components/container';
import {
  JavascriptIcon,
  PythonIcon,
  HTMLIcon,
  CSSIcon,
  DockerIcon,
  ExpressIcon,
  FlaskIcon,
  GitIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresIcon,
  ReactIcon,
  TailwindCSSIcon,
  TypescriptIcon
} from '@/components/ui/dev-icons';
import { TechBadge } from '@/components/ui/tech-badge';

type Technology = {
  name: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
};

const technologies: Technology[] = [
  {
    name: 'HTML',
    icon: HTMLIcon
  },
  {
    name: 'CSS',
    icon: CSSIcon
  },
  {
    name: 'TailwindCSS',
    icon: TailwindCSSIcon
  },
  {
    name: 'Next.js',
    icon: NextjsIcon
  },
  {
    name: 'React',
    icon: ReactIcon
  },
  {
    name: 'Python',
    icon: PythonIcon
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon
  },
  {
    name: 'Express',
    icon: ExpressIcon
  },
  {
    name: 'Flask',
    icon: FlaskIcon
  },
  {
    name: 'Node.js',
    icon: NodejsIcon
  },
  {
    name: 'Docker',
    icon: DockerIcon
  },

  {
    name: 'Git',
    icon: GitIcon
  },
  {
    name: 'MongoDB',
    icon: MongoDBIcon
  },
  {
    name: 'PostgreSQL',
    icon: PostgresIcon
  }
];

export function TechStack() {
  return (
    <section id="tech-stack">
      <Container>
        <h3 className="font-bold tracking-wide text-zinc-700 uppercase dark:text-zinc-50">
          Tech Stack
        </h3>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-400">
          I have built a strong foundation with the following technologies and have dedicated much
          of my free time to applying these skills in real-world projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-2 gap-y-3">
          {technologies.map(({ name, icon: Icon }) => (
            <TechBadge key={name} name={name} icon={Icon} />
          ))}
        </div>
      </Container>
    </section>
  );
}
