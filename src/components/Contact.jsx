import React from "react";
import ScrollReveal from "./ScrollReveal";

function Contact() {
  return (
    <section id="contact">
      <ScrollReveal>
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
      </ScrollReveal>
      <ScrollReveal variant="scaleIn" delay={0.2}>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
            <p>
              <a href="mailto:aa13549@nyu.edu">aa13549@nyu.edu</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/ananya-agarwal03/">LinkedIn</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src="/assets/github.png" alt="GitHub icon" className="icon contact-icon" />
            <p>
              <a href="https://github.com/happyananya">GitHub</a>
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Contact;
