import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';
import { Code, Palette, Database, Cloud, Smartphone, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      skills: ["Node.js", "Express", "Python", "REST APIs", "Authentication"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Storage",
      description: "Designing and managing data storage solutions",
      skills: ["MongoDB", "Firebase", "PostgreSQL", "Prisma", "Redis"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Deployment, hosting, and cloud services",
      skills: ["Vercel", "Netlify", "Git", "GitHub Actions", "Docker"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications",
      skills: ["React Native", "Expo", "PWA", "Responsive Design"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces and experiences",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-primary-color text-xl font-semibold mb-2">
            My Technical Arsenal
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies 
            I use to bring ideas to life through code and design.
          </p>
        </div>
      </section>

      {/* Tech Stack Component */}
      <section className="py-16">
        <TechStack />
      </section>

      {/* Skills Categories */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Organized by development domains and specializations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-default rounded-sm hover:shadow-sm p-6 transition-all duration-300 group"
              >
                <div className="text-primary-color mb-4 transition-all ease-in-out duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
          <button className="bg-primary-color text-primary hover:shadow-sm px-8 py-4 rounded-sm font-semibold hover:bg-primary-color/90 transition-colors duration-300 border-primary-color cursor-pointer">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Skills;