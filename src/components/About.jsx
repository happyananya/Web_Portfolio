import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const bentoItems = [
  {
    area: "edu1",
    icon: "/assets/education.png",
    title: "New York University",
    subtitle: "M.S. in Computer Science",
    detail: "CGPA: 3.78/4",
    period: "Sept. 2025 \u2013 May 2027",
    accent: "var(--btn-bg)",
  },
  {
    area: "edu2",
    icon: "/assets/education.png",
    title: "VIT",
    subtitle: "B.Tech in Computer Science",
    detail: "CGPA: 3.7/4",
    period: "Sept. 2021 \u2013 May 2025",
    accent: "var(--link-hover)",
  },
  {
    area: "exp",
    icon: "/assets/experience.png",
    title: "Experience",
    subtitle: "Software Engineer @ NYU VIDA Lab",
    detail: "+ 4 Prior Internships",
    period: "Samsung \u00b7 Aidash \u00b7 UTP \u00b7 NAL",
    accent: "var(--btn-bg)",
  },
  {
    area: "cert",
    icon: "/assets/checkmark.png",
    title: "Certification",
    subtitle: "AWS Certified Solutions Architect",
    detail: "Associate \u2013 SAA-C03",
    period: "",
    accent: "var(--link-hover)",
  },
  {
    area: "stats",
    stats: [
      { value: "5+", label: "Internships" },
      { value: "6", label: "Projects" },
      { value: "34+", label: "Skills" },
    ],
  },
];

function BentoCard({ item, index }) {
  if (item.stats) {
    return (
      <motion.div
        className={`bento-card bento-${item.area}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="bento-stats">
          {item.stats.map((stat) => (
            <div className="bento-stat" key={stat.label}>
              <span className="bento-stat-value">{stat.value}</span>
              <span className="bento-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`bento-card bento-${item.area}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="bento-accent" style={{ background: item.accent }} />
      <img src={item.icon} alt={item.title} className="bento-icon" />
      <h3 className="bento-title">{item.title}</h3>
      <p className="bento-subtitle">{item.subtitle}</p>
      <p className="bento-detail">{item.detail}</p>
      {item.period && <span className="bento-period">{item.period}</span>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about">
      <ScrollReveal>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
      </ScrollReveal>
      <div className="bento-grid">
        {bentoItems.map((item, index) => (
          <BentoCard item={item} index={index} key={item.area} />
        ))}
      </div>
    </section>
  );
}

export default About;
