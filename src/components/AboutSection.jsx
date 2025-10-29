import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div id="about" className="w-full px-6 py-20 bg-subtle rounded-sm">
      <div className="flex flex-col gap-6 mx-auto max-w-7xl text-justify">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
          Who I am?
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-secondary mb-4 leading-relaxed">
            Hi, I'm Nur Mohammad! I'm a dedicated Frontend Web Developer with 1
            year of professional experience, specializing in the React
            ecosystem. My mission is to build intuitive, high-performance web
            applications that deliver the best possible user experience.
          </p>

          <p className="text-lg text-secondary leading-relaxed">
            I work across the entire modern stack, leveraging TailwindCSS for
            pixel-perfect styling, and Next.js for building robust, scalable
            interfaces. I'm driven by a commitment to clean code, user-centric
            design, and continuous learning to stay ahead of the rapidly
            evolving frontend landscape.
          </p>

          <div className="mt-8 text-center">
            <p className="">
              <Link
                to="/about"
                className="text-center border-primary-color  px-8 py-4 rounded-sm items-center text-primary-color font-semibold hover:text-primary-hover transition-colors text-lg"
              >
                Read My Full Journey & Experience →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
