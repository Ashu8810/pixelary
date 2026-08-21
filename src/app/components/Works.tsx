'use client';

import React from 'react';
import styles from './Works.module.css';
import { FiArrowUpRight, FiCode, FiSmartphone, FiLayout, FiGlobe } from "react-icons/fi";

import { projects } from '../data/works';
export default function Works() {
  return (
    <section id="works" className={styles.worksSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
        <span className={styles.label}>What we build</span>
        <h2 className={styles.title}>We don't just provide services, we craft experiences.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a key={index} href={project.link} className={`${styles.projectCard} ${styles[`card${index + 1}`]}`} target="_blank" rel="noopener noreferrer">
            <div className={styles.pin}></div>
            
            <div className={styles.cardInner}>
              <div 
                className={styles.visualContent}
                style={project.image ? { 
                  backgroundImage: `url(${project.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                } : {}}
              >
                <div 
                  className={styles.projectNumber}
                  style={project.image ? { color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 4px 12px rgba(0,0,0,0.5)' } : {}}
                >
                  {project.number}
                </div>
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectFooter}>
                  View Case Study <FiArrowUpRight />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}
