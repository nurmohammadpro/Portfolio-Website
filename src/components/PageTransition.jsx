import { motion } from "framer-motion"

const PageTransition = ({ children }) => {
    const variants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>
            {children}
        </motion.div>
    )
}

export default PageTransition
