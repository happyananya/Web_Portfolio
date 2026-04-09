import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="logo">Ananya Agarwal</Link>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <Link to="/" className="logo">Ananya Agarwal</Link>
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
                <Link to="/" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" onClick={closeMenu}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
