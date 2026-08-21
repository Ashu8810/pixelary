'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import styles from './Members.module.css';

const members = [
  {
    name: 'Ashutosh Patel',
    role: 'Co-founder',
    bio: 'Focused on creating clean interfaces and pixel-perfect builds.',
    image: '/members/Ashu.png',
    link: 'https://ashutoshpatel.me',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ashutosh-patel2901/',
      twitter: 'https://x.com/ashu00770',
      instagram: 'https://www.instagram.com/_ashu_h3r3/',
      email: 'mailto:ashutoshpatel0044@gmail.com'
    }
  },
  {
    name: 'Eshaan Agrawal',
    role: 'Co-founder',
    bio: 'Building scalable web apps and backend systems.',
    image: '/members/eshaan.png',
    link: 'https://eshaanagrawal.me',
    socials: {
      linkedin: 'https://www.linkedin.com/in/eshaan-agrawal-b565a4235/',
      twitter: 'https://x.com/eshaanagrawall',
      instagram: 'https://www.instagram.com/me_eshaanagrawal/',
      email: 'mailto:eshaanagrawal172@gmail.com'
    }
  },
];

export default function Members() {
  return (
    <section id="team" className={styles.membersSection}>
      <p className={styles.sectionLabel}>Who we are</p>
      <h2 className={styles.title}>The Founders</h2>
      <p className={styles.philosophy}>
        We're a founder-led studio that believes great products come from the intersection of thoughtful design and solid engineering. No layers, no overhead — just direct access to the co-founders building your product.
      </p>

      <div className={styles.membersGrid}>
        {members.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.avatar}
                />
              </div>
            </div>
            <div className={styles.memberInfo}>
              <span className={styles.memberName}>{member.name}</span>
              <span className={styles.memberRole}>{member.role}</span>
              <span className={styles.memberBio}>{member.bio}</span>
            </div>
            <Link href={member.link || '#'} className={styles.portfolioButton} target="_blank" rel="noopener noreferrer">
              View Portfolio
            </Link>
            
            <div className={styles.socialLinks}>
              {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>}
              {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FiTwitter /></a>}
              {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>}
              {member.socials.email && <a href={member.socials.email} aria-label="Email"><FiMail /></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
