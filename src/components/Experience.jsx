import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "NYU - VIDA Lab",
    role: "Software Engineer",
    location: "New York, USA",
    period: "Feb. 2026 - Present",
    color: "#0d9488",
    bullets: [
      "Modernized a large-scale image intelligence platform from Angular 4 to Angular 20, migrating 31 components, 9 services, and 8 data models to a modular standalone architecture integrated with Firebase.",
      "Designed backend data processing pipelines and Cloud Functions (Node.js) for image transformation, metadata ingestion, and access control.",
      "Implemented evaluation-driven workflows for validating annotation consistency, improving reliability of human-in-the-loop data labeling systems.",
    ],
  },
  {
    company: "Universiti Teknologi PETRONAS",
    role: "Project Intern",
    location: "Seri Iskandar, Malaysia",
    period: "Jan. 2025 - May 2025",
    color: "#7c3aed",
    bullets: [
      "Developed a scalable code analysis pipeline to detect AI-generated C programs using 9+ software engineering metrics.",
      "Engineered feature extraction and clustering workflows on structured code datasets, achieving a Silhouette Score of 0.48.",
      "Built automated parsing and preprocessing pipelines for unstructured source code data.",
    ],
  },
  {
    company: "Samsung Research",
    role: "PRISM Project Intern",
    location: "Remote",
    period: "June 2024 - Dec. 2024",
    color: "#2563eb",
    bullets: [
      "Engineered an incremental learning pipeline in PyTorch to mitigate catastrophic forgetting, retaining 85% accuracy.",
      "Evaluated CNN and Vision Transformer (ViT) architectures under continual learning constraints.",
      "Designed experimental evaluation frameworks to benchmark model performance across sequential datasets.",
    ],
  },
  {
    company: "Aidash",
    role: "Data Science Intern",
    location: "Bangalore, India",
    period: "June 2024 - July 2024",
    color: "#dc2626",
    bullets: [
      "Implemented YOLOv8 architecture to detect alligator cracks on roads, achieving a precision of 91.26%.",
      "Boosted model recall by 50% using Canny edge detection and CLAHE preprocessing on a 25,000-image dataset.",
    ],
  },
  {
    company: "National Aerospace Laboratories",
    role: "Research Intern",
    location: "Remote",
    period: "Oct. 2023 - Dec. 2023",
    color: "#d97706",
    bullets: [
      "Spearheaded VGG19 algorithm implementation, attaining 70% accuracy in symbol and shape recognition using 90,000 images.",
      "Developed a grid-based display system, achieving 80% accuracy in identifying coordinates for various shapes and symbols.",
    ],
  },
];

function Experience() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector(".htl-card").offsetWidth;
    scrollRef.current.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section id="experience">
      <ScrollReveal>
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
      </ScrollReveal>

      <div className="htl-wrapper">
        <button className="htl-arrow htl-arrow-left" onClick={() => scroll(-1)} aria-label="Scroll left">
          &#8249;
        </button>

        <div className="htl-track" ref={scrollRef}>
          {/* Horizontal line */}
          <div className="htl-line" />

          {experiences.map((exp, index) => (
            <motion.div
              className="htl-item"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Dot on the line */}
              <div className="htl-dot" style={{ background: exp.color }} />

              {/* Period label above the line */}
              <span className="htl-period">{exp.period}</span>

              {/* Card below the line */}
              <motion.div
                className="htl-card"
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="htl-card-accent" style={{ background: exp.color }} />
                <h3 className="htl-card-company">{exp.company}</h3>
                <p className="htl-card-role">{exp.role}</p>
                <p className="htl-card-location">{exp.location}</p>
                <ul className="htl-card-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <button className="htl-arrow htl-arrow-right" onClick={() => scroll(1)} aria-label="Scroll right">
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default Experience;
