import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Braces, EllipsisVertical, X } from 'lucide-react';
import { useState } from 'react';

const generateId = () => {
  return crypto.randomUUID();
};

const navItems = [
  { id: generateId(), title: 'Home', path: '/' },
  { id: generateId(), title: 'About', path: '/about' },
  { id: generateId(), title: 'Projects', path: '/projects' },
  { id: generateId(), title: 'Skills', path: '/skills' },
  { id: generateId(), title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <nav className="h-16 flex items-center justify-between relative">
        {/* Logo */}
        <div>
          <Link to="/" className="bg-surface">
            <Braces strokeWidth={2} className="text-primary w-8 h-8" />
          </Link>
        </div>

        {/* Desktop Navigation & Controls */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation Items - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className="px-4 py-2 rounded-md hover:bg-subtle focus:bg-subtle transition-colors duration-200 cursor-pointer"
              >
                <NavButton title={item.title} />
              </Link>
            ))}
          </div>

          {/* Theme Toggle - Visible on all screens */}
          <ThemeToggle />
          
          {/* Mobile Menu Button - Hidden on desktop */}
          <button
            onClick={toggleNav}
            className="lg:hidden p-2 rounded-sm focus:outline-none transition-colors duration-200 hover:bg-subtle"
          >
            <EllipsisVertical className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          fixed inset-0 z-50 lg:hidden fade-up
          transition-all duration-300 ease-in-out
          ${showNav ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          {/* Backdrop */}
          <div 
            className={`
              absolute inset-0 bg-black/50 backdrop-blur-sm
              transition-opacity duration-300
              ${showNav ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={closeNav}
          />
          
          {/* Menu Panel */}
          <div className={`
            absolute top-0 right-0 h-full w-80 max-w-full
            bg-surface 
            transform transition-transform duration-300 ease-out
            ${showNav ? 'translate-x-0' : 'translate-x-full'}
          `}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 ">
              <Link 
                to="/" 
                className="flex items-center gap-2"
                onClick={closeNav}
              >
                <Braces strokeWidth={2} className="text-primary w-6 h-6" />
                <span className="text-primary font-semibold">Portfolio</span>
              </Link>
              <button
                onClick={closeNav}
                className="p-2 rounded-sm hover:bg-subtle transition-colors duration-200"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeNav}
                  className={`
                    block px-4 py-4 rounded-lg
                    hover:bg-subtle active:bg-card
                    transition-all duration-300 ease-out
                    transform opacity-0 -translate-y-4
                    ${showNav ? 'animate-fade-in-up' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="text-primary text-lg font-medium">
                    {item.title}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Theme Toggle */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className={`
                transform opacity-0 -translate-y-4
                ${showNav ? 'animate-fade-in-up' : ''}
              `}
              style={{
                animationDelay: `${navItems.length * 0.1 + 0.1}s`,
                animationFillMode: 'forwards'
              }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;