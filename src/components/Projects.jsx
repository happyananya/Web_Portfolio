import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "InsightFlow",
    tech: "Python, FastAPI, React, RAG, PostgreSQL, Docker",
    description:
      "Full-stack NL-to-SQL application enabling non-technical users to query relational databases conversationally, with a RAG pipeline using FAISS vector search and Sentence Transformers for accurate SQL generation via Google Gemini.",
    link: "https://github.com/happyananya/insightFlow",
  },
  {
    title: "nomz - Restaurant Recommendation App",
    tech: "Django, React, TypeScript, AWS, PostgreSQL, CI/CD",
    description:
      "Full-stack data platform integrating public health datasets with user-generated signals across 18 data models, enabling large-scale search, ranking, and filtering across NYC restaurants with CI/CD pipelines.",
    link: "https://www.nomz.dpdns.org/",
  },
  {
    title: "Student Performance Visualization",
    tech: "Python, SHAP, UMAP, Regression Modeling",
    description:
      "End-to-end ML pipeline on 1,000+ records with 25 features, training 10 regression models to predict student performance (best R\u00B2 of 0.88), with SHAP-based interpretability and UMAP dimensionality reduction.",
    link: "https://github.com/happyananya/Student-Performance-Visualization",
  },
  {
    title: "Hand Gesture & Facial Movement Virtual Mouse",
    tech: "Python, OpenCV, MediaPipe, PyAutoGUI",
    description:
      "Real-time computer vision system enabling cursor control via hand gestures and facial movements, with dual-mode interaction pipelines supporting dynamic switching between input systems.",
    link: "https://github.com/happyananya/Hand-Gesture-and-Facial-Movement-Controlled-Virtual-Mouse",
  },
  {
    title: "Next Word Prediction",
    tech: "Python, RNN",
    description:
      "Recurrent Neural Network model that predicts the next word for apps, search engines, and autocorrect features. Users input base text and specify the number of words to generate.",
    link: "https://github.com/happyananya/NextWordPrediction",
  },
  {
    title: "Safe Site Predictor",
    tech: "Python, Machine Learning",
    description:
      "Machine learning model to predict whether a website is safe or a phishing site, helping users identify potentially malicious URLs before visiting them.",
    link: "https://github.com/happyananya/Phishing_Project",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="flip-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <h2 className="flip-card-title">{project.title}</h2>
          <p className="flip-card-tech">{project.tech}</p>
          <p className="flip-card-hint">Hover to see details</p>
        </div>
        {/* Back */}
        <div className="flip-card-back">
          <p className="flip-card-description">{project.description}</p>
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.open(project.link, "_blank")}
          >
            View Project
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="flip-cards-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
