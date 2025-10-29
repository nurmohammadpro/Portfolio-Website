import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import DashboardImage from '../assets/InteractiveDashboard.jpg';
import LearningManagementSystem from '../assets/LearningManagementSystem.jpg';
import ModernEcommercePlatform from '../assets/ModernEcommercePlatform.jpg';
import RealtimeInventorySystem from '../assets/RealtimeInventorySystem.jpg';

const projectsData = [
  {
    id: 1,
    title: 'Interactive Dashboard',
    description:
      'A dynamic dashboard application for visualizing data, managing user tasks, and monitoring key performance indicators (KPIs). Features real-time charts and custom widgets.',
    // FIX 1: Renamed from imagePlaceholder to imageUrl
    imageUrl: DashboardImage,
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Chart.js', 'Firebase'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Modern E-commerce Platform 🛍️',
    description:
      'A full-featured e-commerce website with product listings, shopping cart functionality, secure checkout, and user authentication. Designed for a smooth shopping experience.',
    imageUrl: ModernEcommercePlatform,
    technologies: [
      'React',
      'Stripe API',
      'Firebase',
      'Redux',
      'Styled Components',
    ],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Learning Management System (LMS) 📚',
    description:
      'An intuitive platform for online courses, user progress tracking, and content management. Supports multiple user roles (student, instructor) and rich media content.',
    imageUrl: LearningManagementSystem,
    technologies: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Prisma',
      'PostgreSQL',
    ],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Real-time Inventory System 📦',
    description:
      'A robust web application for managing product inventory, tracking stock levels, and generating reports. Includes features for item search, adding, updating, and deleting.',
    imageUrl: RealtimeInventorySystem,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
    demoLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <div className=" bg-surface text-primary transition-colors duration-600">
      {/* --- Header Section --- */}
      <section className="py-16 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-primary-color text-xl font-semibold mb-2">
            My Creative Endeavors
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Projects I have been working on
          </h1>
        </div>
      </section>

      {/* --- Projects Grid Section --- */}
      <section className="py-20 px-6 ">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 bg-surface text-primary">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-xl border border-default overflow-hidden
                           hover:border-primary-color hover:shadow-lg transition-all duration-500 group"
              >
                {/* FIX 2: Corrected Image Structure & Dimensions */}
                <div className="w-full h-60 overflow-hidden border-b border-default ">
                  <img
                    src={project.imageUrl} // Now correctly using imageUrl for all projects
                    alt={project.title}
                    className="w-full h-full object-cover transition-all ease-in-out duration-1000"
                  />
                </div>

                {/* FIX 3: Consolidated Content and moved technologies/buttons inside */}
                <div className="p-8 space-y-5">
                  {' '}
                  {/* Increased space-y to 5 for better separation */}
                  {/* Title and Description */}
                  <h3 className="text-3xl font-bold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        // Changed classes for a better look
                        className="px-4 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a // Changed Link to a standard <a> tag for external/demo links
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-color text-primary
                                 px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                    <a // Changed Link to a standard <a> tag for external/GitHub links
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-primary-color text-primary-color
                                 px-6 py-3 rounded-lg font-medium hover:bg-primary-color hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-20 px-6 bg-subtle text-center rounded-sm mb-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-secondary mb-8">
            If you like what you see and have a project in mind, let's connect!
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-primary-color text-primary px-10 py-4 rounded-lg text-lg font-medium hover:bg-primary-hover border-default hover:border-primary-color transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
