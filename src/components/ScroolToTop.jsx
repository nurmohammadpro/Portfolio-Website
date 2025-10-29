import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScroolToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 
                text-primary rounded-full border border-primary-color
                 shadow-xl hover:bg-primary-hover transition-opacity duration-500
                 focus:outline-none focus:ring-1 focus:ring-primary-color/50 cursor-pointer
                
                 ${
                   isVisible
                     ? 'opacity-100 translate-y-0'
                     : 'opacity-0 translate-y-4 pointer-events-none'
                 }`}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScroolToTop;
