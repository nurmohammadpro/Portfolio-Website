// components/Hero.jsx
import { Link } from "react-router-dom"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Photo from "../assets/PP.jpg"
import { useIntersectionObserver } from "../contexts/useIntersectionObserver"
import AnimatedElement from "./AnimatedElement"
import FadeInText from "./FadeInText"

const Hero = () => {
  const [sectionRef] = useIntersectionObserver()

  return (
    <section ref={sectionRef} className="pt-32 pb-20 opacity-0 transition-opacity duration-1000">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <AnimatedElement animation="fade-up" delay="100">
                <p className="text-primary-color text-lg font-medium">Hello, I'm a</p>
              </AnimatedElement>

              <FadeInText delay={0.2} duration={0.8} stagger>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">Frontend Web Developer</h1>
              </FadeInText>

              <AnimatedElement animation="fade-up" delay="300">
                <h2 className="text-2xl md:text-3xl text-secondary font-medium">React | Next.js | TailwindCSS</h2>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" delay="400">
                <p className="text-lg text-secondary max-w-lg leading-relaxed">
                  I build fast, responsive, and beautiful user interfaces. Passionate about modern JavaScript frameworks
                  and clean, component-based architecture.
                </p>
              </AnimatedElement>
            </div>

            {/* CTA Buttons */}
            <AnimatedElement animation="fade-up" delay="500">
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects"
                  className="bg-surface text-primary px-8 py-3 rounded-sm font-medium border-default transition-colors flex items-center gap-2 group"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-primary-color text-primary-color border-2 px-8 py-3 rounded-sm font-medium hover:bg-primary-color hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </AnimatedElement>

            {/* Social Links */}
            <AnimatedElement animation="fade-up" delay="600">
              <div className="flex gap-4 pt-6">
                <Link
                  to="https://github.com/nurmohammadpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/nur-mohammad-149515b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <a
                  href="mailto:nurprodev@gmail.com"
                  className="p-3 rounded-full bg-subtle text-primary hover:text-primary-color hover:bg-input transition-colors"
                  aria-label="Email Nur Mohammad"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Content */}
          <AnimatedElement animation="fade-up" delay="700" className="relative hidden md:block">
            <div className="w-80 h-80 mx-auto bg-primary-color/50 rounded-2xl flex flex-1 items-center justify-end p-2">
              <div className="w-full h-full bg-surface rounded-3xl flex items-center justify-items-end p-4">
                <div className="w-full h-full bg-subtle rounded-3xl flex items-center justify-end">
                  <img src={Photo || "/placeholder.svg"} alt="photo" className="rounded-3xl" />
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

export default Hero
