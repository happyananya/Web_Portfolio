import React from "react";
import { motion } from "framer-motion";

const GITHUB_PROFILE = "https://github.com/happyananya";

const featuredProjects = [
  {
    title: "InsightFlow",
    tech: "Python, FastAPI, React, RAG, PostgreSQL, Docker",
    description:
      "Full-stack NL-to-SQL application enabling non-technical users to query relational databases conversationally, with a RAG pipeline using FAISS vector search and Sentence Transformers for accurate SQL generation via Google Gemini.",
    code: "https://github.com/happyananya/insightFlow",
  },
  {
    title: "nomz - Restaurant Recommendation App",
    tech: "Django, React, TypeScript, AWS, PostgreSQL, CI/CD",
    description:
      "Full-stack data platform integrating public health datasets with user-generated signals across 18 data models, enabling large-scale search, ranking, and filtering across NYC restaurants with CI/CD pipelines.",
    live: "https://www.nomz.dpdns.org/",
  },
];

const moreProjects = [
  {
    title: "Student Performance Visualization",
    tech: "Python, SHAP, UMAP, Regression Modeling",
    code: "https://github.com/happyananya/Student-Performance-Visualization",
  },
  {
    title: "Hand Gesture & Facial Movement Virtual Mouse",
    tech: "Python, OpenCV, MediaPipe, PyAutoGUI",
    code: "https://github.com/happyananya/Hand-Gesture-and-Facial-Movement-Controlled-Virtual-Mouse",
  },
  {
    title: "Next Word Prediction",
    tech: "Python, RNN",
    code: "https://github.com/happyananya/NextWordPrediction",
  },
  {
    title: "Safe Site Predictor",
    tech: "Python, Machine Learning",
    code: "https://github.com/happyananya/Phishing_Project",
  },
];

function ProjectCard({ project, index }) {
  const { title, tech, description, code, live } = project;

  return (
    <motion.div
      className="project-card project-card--featured"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="project-card-inner">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-tech">{tech}</p>
        <p className="project-card-description">{description}</p>
        <div className="project-card-actions">
          {code ? (
            <a
              href={code}
              className="btn btn-color-2 project-btn project-btn--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          ) : null}
          {live ? (
            <a
              href={live}
              className="btn btn-color-1 project-btn project-btn--link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>

      <h2 className="projects-subheading">Featured</h2>
      <div className="projects-featured-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>

      <details className="projects-more">
        <summary className="projects-more-summary">
          More on GitHub
          <span className="projects-more-count">{moreProjects.length} projects</span>
        </summary>
        <ul className="projects-more-list">
          {moreProjects.map((project) => (
            <li className="projects-more-row" key={project.title}>
              <div className="projects-more-main">
                <span className="projects-more-title">{project.title}</span>
                <span className="projects-more-tech">{project.tech}</span>
              </div>
              <div className="projects-more-actions">
                {project.code ? (
                  <a
                    href={project.code}
                    className="projects-more-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    className="projects-more-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <p className="projects-more-footer">
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            View all repositories on GitHub →
          </a>
        </p>
      </details>
    </section>
  );
}

export default Projects;
