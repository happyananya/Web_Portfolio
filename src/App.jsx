import React, { useState } from "react";

function App() {
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
        <div className="logo">Ananya Agarwal</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Ananya Agarwal</div>
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
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contacts
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src="/assets/dp.png" alt="Ananya Agarwal profile picture" />
        </div>
        <div className="section_text">
          <p className="section__text__p1">Hello, I&apos;m</p>
          <h1 className="title">Ananya Agarwal</h1>
          <p className="section__text__p2">An Aspiring Data Scientist</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("/assets/Ananya_Agarwal_Resume.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.location.href = "#contact";
              }}
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
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src="/assets/IMG_0127.jpeg" alt="Profile Picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src="/assets/experience.png" alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  Research Intern <br />
                  National Aerospace Laboratories
                </p>
              </div>
              <div className="details-container">
                <img src="/assets/education.png" alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  B.Tech in Computer Science and Engineering
                  <br />
                  Currently Studying in Year 3
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Working on new and out of the box ideas excite me. I enjoy learning new skills and exploring technology in all directions.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#experience";
          }}
        />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Research Intern at NAL</h2>
              <div className="article-container">
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Computer Vision</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Deep Learning</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Matplotlib</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>TensorFlow-Keras</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Other Skills</h2>
              <div className="article-container">
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Python</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>MySQL</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Statistics</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>AWS Cloud</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Data Structures</h3>
                  </div>
                </article>
                <article>
                  <img src="/assets/checkmark.png" alt="Experience" className="icon" />
                  <div>
                    <h3>Algorithms</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#projects";
          }}
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/assets/l.png" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Health Application</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href = "https://github.com/happyananya/healthapp";
                  }}
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/assets/p.png" alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Safe Site Predictor</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href = "https://github.com/happyananya/Phishing_Project";
                  }}
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#projects";
          }}
        />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
            <p>
              <a href="mailto:ananya.agarwal2014@gmail.com">ananya.agarwal2014@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/ananya-agarwal03/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Ananya Agarwal. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
