import React from "react";
import Hero from "../components/Hero";
import WaveDivider from "../components/WaveDivider";
import About from "../components/About";
import Experience from "../components/Experience";
import SkillConstellation from "../components/SkillConstellation";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function LandingPage({ darkMode }) {
  return (
    <>
      <Hero />
      <WaveDivider />
      <About />
      <Experience />
      <SkillConstellation darkMode={darkMode} />
      <Projects />
      <Contact />
    </>
  );
}

export default LandingPage;
