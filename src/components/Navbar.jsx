import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav id="desktop-nav">
        <a href="#profile" className="logo">
          Ananya Agarwal
        </a>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
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
              <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
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
            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
