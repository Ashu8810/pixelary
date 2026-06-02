import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logo}>PIXELARY</div>
          <div className={styles.socialLinks}>
            {/* <Link href="#" className={styles.socialIcon} aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="GitHub">
              <FaGithub />
            </Link>
            <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin />
            </Link> */}
            <Link href="https://www.instagram.com/pixelary_studio/" className={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>&copy; {currentYear} Pixelary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
