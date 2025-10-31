import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScroolToTop from './components/ScroolToTop';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="font-body bg-surface p-2">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />;
            <Route path="/about" element={<About />} />;
            <Route path="/projects" element={<Projects />} />;
            <Route path="/skills" element={<Skills />} />;
            <Route path="/contact" element={<Contact />} />;
          </Routes>
          <Footer />
          <ScroolToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
