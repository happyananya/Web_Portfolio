import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  spring = true,
}) {
  const reduceMotion = useReducedMotion();
  const useSpring = spring && !reduceMotion;

  const transition = useSpring
    ? {
        type: "spring",
        stiffness: 85,
        damping: 22,
        mass: 0.85,
        delay,
      }
    : { duration: reduceMotion ? 0.01 : duration, delay: reduceMotion ? 0 : delay, ease: "easeOut" };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
