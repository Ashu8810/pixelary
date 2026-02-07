'use client';

import React from 'react';
import styles from './Works.module.css';
import { FiArrowUpRight, FiCode, FiSmartphone, FiLayout, FiGlobe } from "react-icons/fi";

const projects = [
  {
    title: 'Lumina Dashboard',
    description: 'An AI-powered analytics dashboard for modern SaaS platforms, focused on clarity and data visualization.',
    category: 'Product Design',
    status: 'Live',
    icon: <FiLayout />,
    link: '#'
  },
  {
    title: 'Nexus Mobile App',
    description: 'Cross-platform mobile experience for decentralized finance, emphasizing security and ease of use.',
    category: 'Fintech',
    status: 'Beta',
    icon: <FiSmartphone />,
    link: '#'
  },
  {
    title: 'Aether OS',
    description: 'A conceptual operating system interface designed for spatial computing and minimalism.',
    category: 'Interaction Design',
    status: 'Concept',
    icon: <FiCode />,
    link: '#'
  },
  {
    title: 'Veridia Commerce',
    description: 'Sustainable e-commerce framework with headless CMS integration and hyper-optimized performance.',
    category: 'Web Development',
    status: 'Archive',
    icon: <FiGlobe />,
    link: '#'
  }
];

export default function Works() {
  return (
    <section id="works" className={styles.worksSection}>
      <div className={styles.header}>
        <span className={styles.label}>Portfolio</span>
        <h2 className={styles.title}>Selected Works.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a key={index} href={project.link} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <span className={styles.projectCategory}>{project.category}</span>
              <span className={styles.projectStatus}>{project.status}</span>
            </div>
            
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            
            <div className={styles.projectVisual}>
              {project.icon}
            </div>

            <div className={styles.projectFooter}>
              View Case Study <FiArrowUpRight />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
