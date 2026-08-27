// SchoolFeatures.jsx
import React from "react";
import { motion } from "framer-motion";
import "./schoolfeatures.css";

const features = [
  {
    title: "Nature-Embedded Campus",
    description:
      "Our school is nestled in peaceful natural surroundings, creating a nurturing environment for learning and growth.",
    image: "/images/nature.jpg",
  },
  {
    title: "CCTV Surveillance",
    description:
      "Complete CCTV coverage ensures the safety and security of all students throughout the campus.",
    image: "/images/cctv.jpg",
  },
  {
    title: "Spacious Facilities",
    description:
      "Well-maintained playgrounds and modern sports facilities to support physical development.",
    image: "/images/spacious.jpg",
  },
  {
    title: "Digital Classrooms",
    description:
      "State-of-the-art digital classrooms equipped with modern educational technology.",
    image: "/images/dig-class.jpg",
  },
  {
    title: "Playway Method",
    description:
      "Specialized Playway teaching methodology for Nursery and Pre-Nursery classes for holistic development.",
    image: "/images/playway.jpg",
  },
  {
    title: "Transportation",
    description:
      "Convenient and safe bus service available for students from various locations.",
    image: "/images/Transportation.jpg",
  },
  {
    title: "Value-Based Education",
    description:
      "We focus on imparting knowledge deeply rooted in strong values while embracing innovation.",
    image: "/images/value.jpg",
  },
  {
    title: "Green Environment",
    description:
      "Our campus blends with nature, creating a peaceful space for academic and moral growth.",
    image: "/images/greenenv.jpg",
  },
  {
    title: "Dedicated Faculty",
    description:
      "Our experienced teachers bring passion and expertise to shape the bright minds of tomorrow.",
    image: "/images/faculty.jpg",
  },
];

const SchoolFeatures = () => {
  return (
    <div className="features-section">
      <h1 className="section-title">Our School Features</h1>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className="feature-image"
              style={{ backgroundImage: `url(${feature.image})` }}
            >
              <div className="feature-title-overlay">
                <h2>{feature.title}</h2>
              </div>
            </div>
            <div className="feature-description">
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SchoolFeatures;
