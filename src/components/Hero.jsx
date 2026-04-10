import React from "react";
import { motion } from "framer-motion";
import { RESUME_PDF_HREF } from "../constants";

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="profile">
      <motion.div
        className="section__pic-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          className="section__pic-img"
          src="/assets/profile-hero.png"
          alt="Portrait of Ananya Agarwal with the Golden Gate Bridge in the background"
        />
      </motion.div>
      <motion.div
        className="section_text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <p className="section__text__p1">Hello, I&apos;m</p>
        <h1 className="title">Ananya Agarwal</h1>
        <p className="section__text__p2">M.S. Computer Science @ NYU</p>
        <p className="section__text__tagline">
          Building reliable systems: full-stack apps, data
          pipelines, and evaluation-driven ML
        </p>
        <div className="btn-container">
          <a
            className="btn btn-color-2"
            href={RESUME_PDF_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <button type="button" className="btn btn-color-1" onClick={scrollToContact}>
            Contact
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/ananya-agarwal03/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ananya Agarwal on LinkedIn"
          >
            <img src="/assets/linkedin.png" alt="" className="icon" width={32} height={32} />
          </a>
          <a
            href="https://github.com/happyananya"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ananya Agarwal on GitHub"
          >
            <img src="/assets/github.png" alt="" className="icon" width={32} height={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
