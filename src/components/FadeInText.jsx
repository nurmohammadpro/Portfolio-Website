import { motion } from "framer-motion"
import { useIntersectionObserver } from "../contexts/useIntersectionObserver"

const FadeInText = ({ children, delay = 0, duration = 0.8, stagger = false, className }) => {
  const [ref, isIntersecting] = useIntersectionObserver()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.05 : 0,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  }

  // If children is a string, split into words for word-by-word animation
  if (typeof children === "string") {
    const words = children.split(" ")
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={itemVariants} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  // For JSX elements, wrap the entire content
  return (
    <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isIntersecting ? "visible" : "hidden"}>
      <motion.div variants={itemVariants}>{children}</motion.div>
    </motion.div>
  )
}

export default FadeInText
