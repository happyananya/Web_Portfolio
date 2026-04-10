import React from "react";
import { motion } from "framer-motion";

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
            src="/assets/IMG_0127.jpeg"
          alt="Ananya Agarwal profile picture"
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
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/assets/master_ananya_agarwal_resume.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={scrollToContact}
          >
            Contact
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn Profile"
            className="icon"
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/ananya-agarwal03/";
            }}
          />
          <img
            src="/assets/github.png"
            alt="My Github Profile"
            className="icon"
            onClick={() => {
              window.location.href = "https://github.com/happyananya";
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
