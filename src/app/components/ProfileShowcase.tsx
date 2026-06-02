'use client';

import React from 'react';
import styles from './ProfileShowcase.module.css';
import { FiGithub, FiLinkedin, FiInstagram, FiLayers, FiArrowRight, FiMail } from "react-icons/fi";

const profiles = [
  {
    id: 'portfolio',
    name: 'Main Portfolio',
    role: 'Curated Work',
    icon: <FiLayers />,
    link: '#',
    color: '#111'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    role: 'Professional Network',
    icon: <FiLinkedin />,
    link: '#',
    color: '#0077B5'
  },
  {
    id: 'github',
    name: 'GitHub',
    role: 'Code Repositories',
    icon: <FiGithub />,
    link: '#',
    color: '#333'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    role: 'Visual Diary',
    icon: <FiInstagram />,
    link: '#',
    color: '#E4405F'
  },
  {
    id: 'email',
    name: 'Email',
    role: 'Get in Touch',
    icon: <FiMail />,
    link: 'mailto:contact@pixelary.design',
    color: '#D44638'
  }
];

export default function ProfileShowcase() {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Connect & Explore</h2>
        <p className={styles.subtitle}>Discover my digital footprint across platforms.</p>
      </div>

      <div className={styles.grid}>
        {profiles.map((profile) => (
          <a key={profile.id} href={profile.link} className={styles.card} target="_blank" rel="noopener noreferrer">
            <div className={styles.cardHeader} style={{ backgroundColor: profile.color + '10' }}>
              <div className={styles.iconWrapper} style={{ color: profile.color }}>
                {profile.icon}
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <span className={styles.name}>{profile.name}</span>
                <span className={styles.role}>{profile.role}</span>
              </div>
              <div className={styles.action}>
                <FiArrowRight />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
