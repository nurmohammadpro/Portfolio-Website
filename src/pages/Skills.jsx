import { div } from 'motion/react-client';
import TechStack from '../components/TechStack';

const Skills = () => {
  return (
    <div className="w-full min-h-screen">
      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary-color text-xl font-semibold mb-2">
            My Tech Stacks
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Where I am Skilled at
          </h1>
        </div>
      </section>
      <TechStack />
    </div>
  );
};

export default Skills;
