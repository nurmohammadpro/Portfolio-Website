import TechStack from "../components/TechStack"
import AboutSection from "../components/AboutSection"
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import { ArrowRight, Briefcase } from "lucide-react"
import FadeInText from "../components/FadeInText"
import { useIntersectionObserver } from "../contexts/useIntersectionObserver"
import { motion } from "framer-motion"

const Homepage = () => {
  const [techRef, techInView] = useIntersectionObserver()
  const [ctaRef, ctaInView] = useIntersectionObserver()

  const highlights = [
    {
      number: "1+",
      label: "Years Experience",
      description: "Professional frontend development",
    },
    {
      number: "10+",
      label: "Projects Completed",
      description: "Diverse range of web applications",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Dedicated to excellence",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto p-2">
        <Hero />
        <AboutSection />
      </div>

      <section className="py-20 my-20 px-6 bg-card border-t border-b border-default rounded-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary-color mb-2">{highlight.number}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{highlight.label}</h3>
                <p className="text-secondary">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={techRef}
            initial={{ opacity: 0 }}
            animate={techInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary-color text-lg font-semibold mb-2">My Technical Toolkit</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Technologies I Work With</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              I specialize in modern frontend technologies and tools that help build beautiful, performant web
              experiences.
            </p>
          </motion.div>

          <TechStack />
        </div>
      </section>

      <section className="py-20 px-6 bg-subtle rounded-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary-color text-lg font-semibold mb-2">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A selection of projects I'm proud of, showcasing my skills in design, development, and problem-solving.
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary-color text-primary px-8 py-4 rounded-sm font-semibold hover:shadow-sm border-primary-color cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="w-5 h-5" />
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-24 px-6 bg-card">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-primary"
        >
          <FadeInText delay={0.2} duration={0.8} stagger>
            Let's Create Something Amazing Together
          </FadeInText>
          <p className="text-xl text-secondary mt-6 mb-10 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Whether you need a freelancer or want to
            discuss frontend development, feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-primary-color text-primary px-8 py-4 rounded-sm font-semibold hover:shadow-sm border-default transition-all duration-300 flex items-center gap-2 group"
            >
              See My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary-color text-primary-color px-8 py-4 rounded-sm font-semibold hover:bg-primary-color hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Homepage
