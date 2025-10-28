import { Link } from 'react-router-dom';
import { Briefcase, Heart, Lightbulb, Code, BookOpen } from 'lucide-react';
import Card from '../components/Card';
import Highlights from '../components/Highlights';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation & Problem Solving',
    description:
      'Constantly seeking better, more efficient ways to solve complex UI challenges and deliver delightful user experiences.',
  },
  {
    icon: Code,
    title: 'Clean Code & Performance',
    description:
      'Committed to writing scalable, maintainable, and highly performant code, focusing on core web vitals and accessibility.',
  },
  {
    icon: Heart,
    title: 'User-Centric Design',
    description:
      'Bridging the gap between design and functionality, ensuring every element is intuitive, beautiful, and valuable to the end-user.',
  },
];

const highlightsData = [
  {
    position: 'Senior Frontend Developer',
    company: 'Tech Solutions Co.',
    year: '2022 - Present',
    description: [
      'Developed and maintained core features using **Vanilla JavaScript** and **React JS**.',
      'Integrated **Firebase** for user authentication and real-time database functions.',
      'Contributed to component library creation using Storybook (optional detail).',
    ],
  },
  {
    position: 'Junior Web Developer',
    company: 'Startup Innovators',
    year: '2021 - 2022',
    description: [
      'Assisted in the development of user-friendly web applications using **React** and **Node.js**.',
      'Collaborated with designers to implement responsive UI components.',
      'Participated in code reviews and contributed to team knowledge sharing.',
    ],
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen bg-surface transition-colors duration-300 text-primary">
      {/* Navigation (Added from Homepage structure) */}

      {/* End Navigation */}

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary-color text-xl font-semibold mb-2">
            My Journey & Philosophy
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            About Me
          </h1>
        </div>
      </section>

      {/* --- */}

      {/* Professional Summary */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-primary-color" />A Passion for
            Frontend Excellence
          </h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed text-justify">
            <p>
              I'm Nur Mohammad, a dedicated Frontend Web Developer with 1 year
              of professional experience specializing in the React ecosystem. My
              mission is to translate complex problems into intuitive,
              high-performance web applications. I thrive on bringing designs to
              life pixel-perfectly while ensuring the best possible user
              experience.
            </p>
            <p>
              My expertise spans the entire modern frontend stack, from styling
              with **TailwindCSS** and semantic **HTML/CSS** to state management
              in **Next.js** applications. I have hands-on experience
              integrating with backend services, utilizing **Firebase** for
              rapid prototyping, and building robust, scalable interfaces.
            </p>
            <p>
              Beyond the code, I am a firm believer in continuous learning. The
              frontend landscape evolves rapidly, and I am committed to staying
              ahead of the curve, constantly exploring new tools and best
              practices to deliver value.
            </p>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Experience Timeline / Key Roles */}
      <section className="py-20 px-6 bg-card border-t border-b border-default rounded-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center flex justify-center items-center gap-3">
            <Briefcase className="w-7 h-7 text-primary-color" />
            Key Experience Highlights
          </h2>

          <div className="space-y-12">
            {highlightsData.map((highlight, index) => (
              <Highlights
                key={index}
                position={highlight.position}
                company={highlight.company}
                year={highlight.year}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* My Core Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
