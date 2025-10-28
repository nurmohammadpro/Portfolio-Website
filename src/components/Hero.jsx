import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Photo from '../assets/PP.jpg';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary-color text-lg font-medium">
                Hello, I'm a
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Frontend <br />
                <span className="text-primary-color">Web Developer</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-secondary font-medium">
                React | Next.js | TailwindCSS
              </h2>
              <p className="text-lg text-secondary max-w-lg leading-relaxed">
                I build fast, responsive, and beautiful user interfaces.
                Passionate about modern JavaScript frameworks and clean,
                component-based architecture.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="#projects"
                className="bg-surface text-primary px-8 py-3 rounded-lg font-medium border-default transition-colors flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 " />
              </Link>
              <button className="border-primary-color text-primary-color border-2 px-8 py-3 rounded-lg font-medium hover:bg-primary-color hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <Link
                to="#contact"
                className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image/Graphic (Styling preserved) */}
          <div className="relative hidden md:block">
            <div className="w-80 h-80 mx-auto bg-primary-color/50 rounded-full flex items-center justify-center p-2">
              <div className="w-full h-full bg-surface rounded-full flex items-center justify-center p-4">
                <div className="w-full h-full bg-subtle rounded-full flex items-center justify-center">
                  <img src={Photo} alt="photo" className="rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements - Enhanced visibility with custom classes */}
          {/* <div
            className={`absolute -top-4 -right-4 w-24 h-24 rounded-2xl ${
              isDarkMode ? 'bg-primary-color/30' : 'bg-primary-color/10'
            } border border-primary-color/40 backdrop-blur-sm`}
          ></div>
          <div
            className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl ${
              isDarkMode ? 'bg-primary-color/30' : 'bg-primary-color/10'
            } border border-primary-color/40 backdrop-blur-sm`}
          ></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
