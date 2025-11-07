import { Routes, Route, useLocation } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AnimatePresence } from "framer-motion"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScroolToTop from "./components/ScroolToTop"
import PageTransition from "./components/PageTransition"

const App = () => {
  const location = useLocation()

  return (
    <ThemeProvider>
      <div className="font-body bg-surface px-2">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Homepage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition>
                  <Skills />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScroolToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
