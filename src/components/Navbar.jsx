import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { RESUME_PDF_HREF } from "../constants";

const navBarTransition = {
  type: "spring",
  stiffness: 100,
  damping: 22,
  mass: 0.8,
};

function Navbar({ darkMode, onToggleTheme }) {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        id="desktop-nav"
        initial={reduceMotion ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reduceMotion ? { duration: 0 } : navBarTransition}
      >
        <a href="#profile" className="logo">
          Ananya Agarwal
        </a>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href={RESUME_PDF_HREF} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
            </li>
          </ul>
        </div>
      </motion.nav>

      <motion.nav
        id="hamburger-nav"
        initial={reduceMotion ? false : { y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={reduceMotion ? { duration: 0 } : navBarTransition}
      >
        <a href="#profile" className="logo">
          Ananya Agarwal
        </a>
        <div className="nav-right">
          <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
          <div className="hamburger-menu">
            <div
              className={`hamburger-icon ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
              <li>
                <a href="#experience" onClick={closeMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={RESUME_PDF_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
