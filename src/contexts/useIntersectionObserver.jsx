import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  // Add options as parameter with default value
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
        ...options, // Now options is defined
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // options is now a dependency

  return [ref, isIntersecting];
};
