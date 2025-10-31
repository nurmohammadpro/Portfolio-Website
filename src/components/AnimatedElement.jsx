import { useIntersectionObserver } from '../contexts/useIntersectionObserver';

const AnimatedElement = ({
  children,
  as: Component = 'div',
  className = '',
  animation = 'fade-up',
  delay = 0,
  ...props
}) => {
  const [ref] = useIntersectionObserver();
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <Component
      ref={ref}
      className={`${animation} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;
