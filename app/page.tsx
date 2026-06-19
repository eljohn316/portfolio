import { Intro } from '@/components/pages/intro';
import { TechStack } from '@/components/pages/tech-stack';
import { Projects } from '@/components/pages/projects';
import { Contact } from '@/components/pages/contact';
import { Footer } from '@/components/pages/footer';

export default function Home() {
  return (
    <>
      <div className="space-y-20 sm:space-y-24">
        <Intro />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
