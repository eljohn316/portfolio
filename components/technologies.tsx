import Image from 'next/image';

const TECHNOLOGIES = [
  { name: 'HTML', image: '/technologies/html.svg' },
  { name: 'CSS', image: '/technologies/css.svg' },
  { name: 'TailwindCSS', image: '/technologies/tailwindcss.svg' },
  { name: 'JavaScript', image: '/technologies/javascript.svg' },
  { name: 'TypeScript', image: '/technologies/typescript.svg' },
  { name: 'React.js', image: '/technologies/react.svg' },
  { name: 'Next.js', image: '/technologies/nextjs.svg' },
  { name: 'Node.js', image: '/technologies/nodejs.svg' },
  { name: 'PostgreSQL', image: '/technologies/postgresql.svg' },
  { name: 'Express.js', image: '/technologies/express.svg' },
  { name: 'Prisma', image: '/technologies/prisma.svg' },
  { name: 'Git', image: '/technologies/git.svg' }
];

function Technology({ tech }: { tech: (typeof TECHNOLOGIES)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <p className="font-mono text-sm font-medium text-gray-700 dark:text-zinc-200">{tech.name}</p>
      <Image src={tech.image} alt={tech.name} height={40} width={40} className="size-10" />
    </div>
  );
}

export function Technologies() {
  return (
    <div className="xs:grid-cols-3 mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 md:grid-cols-4">
      {TECHNOLOGIES.map((tech) => (
        <Technology key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
