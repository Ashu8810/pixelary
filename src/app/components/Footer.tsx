import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>PIXELARY</div>
            <p className={styles.tagline}>
              B2B design & development company focused on building clean, functional, and scalable digital experiences.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigate</h4>
            <Link href="#services" className={styles.footerLink}>Services</Link>
            <Link href="#team" className={styles.footerLink}>Team</Link>
            <Link href="#contact" className={styles.footerLink}>Contact</Link>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <Link href="mailto:agrawaleshaan12@gmail.com" className={styles.footerLink}>
              agrawaleshaan12@gmail.com
            </Link>
            <div className={styles.socialLinks}>
              <Link href="https://www.instagram.com/pixelary_studio/" className={styles.socialIcon} aria-label="Instagram" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="https://x.com/Pixelary_" className={styles.socialIcon} aria-label="X (Twitter)" target="_blank">
                <FaTwitter />
              </Link>
              {/* <Link href="#" className={styles.socialIcon} aria-label="GitHub" target="_blank">
                <FaGithub />
              </Link>
              <Link href="#" className={styles.socialIcon} aria-label="LinkedIn" target="_blank">
                <FaLinkedin />
              </Link> */}
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; {currentYear} Pixelary. All rights reserved.</p>
          <p className={styles.location}>India — Remote worldwide</p>
        </div>
      </div>
    </footer>
  );
}
