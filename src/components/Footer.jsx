import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={
        reduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 70, damping: 20 }
      }
    >
      <p>Copyright &#169; 2026 Ananya Agarwal. All Rights Reserved.</p>
    </motion.footer>
  );
}

export default Footer;
