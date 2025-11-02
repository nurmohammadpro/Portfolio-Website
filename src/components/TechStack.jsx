import CSS from '../assets/tech-icons/css.png';
import HTML from '../assets/tech-icons/html.png';
import JavaScript from '../assets/tech-icons/javascript.png';
import ReactLogo from '../assets/tech-icons/reactjs.png';
import TailwindCSS from '../assets/tech-icons/tailwindcss.png';
import Firebase from '../assets/tech-icons/firebase.png';
import Nodejs from '../assets/tech-icons/nodejs.png';
import Nextjs from '../assets/tech-icons/nextjs.png';
import { Blocks } from 'lucide-react';
import { useId, useState } from 'react';

const TechStack = () => {
  const id = useId();
  const [activeFilter, setActiveFilter] = useState('all');

  const techIcons = [
    {
      id: id,
      src: HTML,
      alt: 'HTML',
      title: 'HTML5',
      proficiency: 'proficient',
    },
    { id: id, src: CSS, alt: 'CSS', title: 'CSS3', proficiency: 'proficient' },
    {
      id: id,
      src: JavaScript,
      alt: 'JavaScript',
      title: 'JavaScript',
      proficiency: 'proficient',
    },
    {
      id: id,
      src: ReactLogo,
      alt: 'React',
      title: 'React.js',
      proficiency: 'proficient',
    },
    {
      id: id,
      src: Nextjs,
      alt: 'Next.js',
      title: 'Next.js',
      proficiency: 'intermediate',
    },
    {
      id: id,
      src: TailwindCSS,
      alt: 'Tailwind CSS',
      title: 'Tailwind CSS',
      proficiency: 'proficient',
    },
    {
      id: id,
      src: Firebase,
      alt: 'Firebase',
      title: 'Firebase',
      proficiency: 'intermediate',
    },
    {
      id: id,
      src: Nodejs,
      alt: 'Node.js',
      title: 'Node.js',
      proficiency: 'learning',
    },
  ];

  const handleSkillSelect = (skill) => {
    setActiveFilter(skill);
  };

  // Filter tech icons based on active filter
  const filteredTechIcons =
    activeFilter === 'all'
      ? techIcons
      : techIcons.filter((icon) => icon.proficiency === activeFilter);

  // Get proficiency color
  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'proficient':
        return 'bg-green-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'learning':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Get proficiency text color for filter buttons
  const getFilterTextColor = (filter) => {
    return activeFilter === filter ? 'text-primary-color' : 'text-primary';
  };

  // Get filter button background
  const getFilterBackground = (filter) => {
    return activeFilter === filter ? 'bg-card/70' : 'bg-subtle';
  };

  return (
    <>
      {/* Filter buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleSkillSelect('all')}
          className={`flex items-center gap-2 px-4 py-2 border-default rounded-sm transition-all duration-300 hover:bg-card/70 ${getFilterBackground(
            'all'
          )}`}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-blue-500"></div>
          <span className={`text-sm ${getFilterTextColor('all')}`}>
            All Skills
          </span>
        </button>
        <button
          onClick={() => handleSkillSelect('proficient')}
          className={`flex items-center gap-2 px-4 py-2 border-default rounded-sm transition-all duration-300 hover:bg-card/70 ${getFilterBackground(
            'proficient'
          )}`}
        >
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className={`text-sm ${getFilterTextColor('proficient')}`}>
            Proficient
          </span>
        </button>
        <button
          onClick={() => handleSkillSelect('intermediate')}
          className={`flex items-center gap-2 px-4 py-2 border-default rounded-sm transition-all duration-300 hover:bg-card/70 ${getFilterBackground(
            'intermediate'
          )}`}
        >
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className={`text-sm ${getFilterTextColor('intermediate')}`}>
            Intermediate
          </span>
        </button>
        <button
          onClick={() => handleSkillSelect('learning')}
          className={`flex items-center gap-2 px-4 py-2 border-default rounded-sm transition-all duration-300 hover:bg-card/70 ${getFilterBackground(
            'learning'
          )}`}
        >
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className={`text-sm ${getFilterTextColor('learning')}`}>
            Learning
          </span>
        </button>
      </div>

      {/* Enhanced grid with better spacing and hover effects */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 py-8 max-w-7xl mx-auto">
        {filteredTechIcons.map((icon, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-subtle border-default p-4 md:p-6 rounded-sm hover:shadow-sm transition-all ease-in-out duration-300 border-default relative"
          >
            {/* Proficiency indicator dot */}
            <div
              className={`absolute top-2 right-2 w-3 h-3 rounded-full ${getProficiencyColor(
                icon.proficiency
              )}`}
            ></div>

            {/* Icon container with subtle background */}
            <div className="w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center rounded-sm bg-card/50 group-hover:bg-card/70 transition-colors ease-in-out duration-300 p-2">
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title with better typography */}
            <span className="text-xs md:text-sm font-semibold text-center text-primary group-hover:text-primary-color transition-colors duration-300">
              {icon.title}
            </span>

            {/* Optional: Add a subtle border effect on hover */}
            <div className="w-0 group-hover:w-8 h-0.5 bg-primary-color mt-2 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredTechIcons.length === 0 && (
        <div className="text-center py-12">
          <Blocks className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-primary text-lg">
            No skills found for this filter.
          </p>
        </div>
      )}
    </>
  );
};

export default TechStack;
