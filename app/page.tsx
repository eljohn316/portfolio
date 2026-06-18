import { Intro } from '@/components/pages/intro';
import { Projects } from '@/components/pages/projects';
import { TechStack } from '@/components/pages/tech-stack';

export default function Home() {
  return (
    <div className="space-y-20 py-8 sm:space-y-24 sm:py-10">
      <Intro />
      <TechStack />
      <Projects />
    </div>
  );
}
