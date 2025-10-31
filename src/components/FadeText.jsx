import { useInView, useScroll, useTransform } from 'motion/react';
import { filter } from 'motion/react-client';
import { motion } from 'motion/react';
import { useRef } from 'react';

const FadeText = () => {
  //   const containerRef = useRef(null);
  //   const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ['start end', 'end start'],
  //   });

  //   const opactity = useTransform(
  //     scrollYProgress,
  //     [0, 0.2, 0.8, 1],
  //     [0, 1, 1, 0]
  //   );
  //   const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <div className="min-h-screen bg-surface text-primary">
      {/* <motion.section
        style={{ opactity, scale }}
        className="h-screen items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opactity: 0, y: 60, filter: '' }}
            animate={
              isInView
                ? {
                    opactity: 1,
                    y: 0,
                    filter: '',
                  }
                : {}
            }
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl font-light mb-8"
          >
            What I am at home?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-secondary"
          >
            The ultimate entertainment experience
          </motion.p>
        </div>
      </motion.section> */}

      <motion.div
        animate (element, { filter: "blur(10px)" }, { delay: 0.3 }) 
      >
        <h2 className="font-bold text-primary">
          These are the tech stacks I am skilled at
        </h2>
      </motion.div>
    </div>
  );
};

export default FadeText;
