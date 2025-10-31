import { userIntersectionObserver } from '../contexts/useIntersectionObserver';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  ...props
}) => {
  const [ref] = userIntersectionObserver();

  return (
    <section
      ref={ref}
      className={`opacity-0 transition-opacity duration-1000 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
