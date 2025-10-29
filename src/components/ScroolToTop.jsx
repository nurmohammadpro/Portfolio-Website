import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    // Throttle the scroll event for better performance
    let ticking = false;
    const throttledToggle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledToggle, { passive: true });

    return () => window.removeEventListener('scroll', throttledToggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-2 
             bg-primary-color text-primary rounded-full 
             transition-all duration-300 border-default  cursor-pointer shadow-sm
             ${
               isVisible
                 ? 'opacity-100 translate-y-0'
                 : 'opacity-0 translate-y-4 pointer-events-none'
             }`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
