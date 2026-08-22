'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <div className={styles.logoContainer}>
            <span className={styles.logoMain}>PIXELARY</span>
            <span className={styles.logoSub}>DESIGN & DEVELOPMENT</span>
          </div>
        </Link>
        
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksMobileActive : ''}`}>
          <Link href="/services" className={styles.navLink} onClick={closeMobileMenu}>Services</Link>
          <Link href="/work" className={styles.navLink} onClick={closeMobileMenu}>Work</Link>
          <Link href="/blog" className={styles.navLink} onClick={closeMobileMenu}>Blog</Link>
          <Link href="/#team" className={styles.navLink} onClick={closeMobileMenu}>Team</Link>
          <Link href="/#contact" className={styles.navLink} onClick={closeMobileMenu}>Contact</Link>
          <Link href="/#contact" className={`${styles.ctaButton} ${styles.mobileOnlyCta}`} onClick={closeMobileMenu}>
            Book a Consultation
          </Link>
        </div>

        <div className={styles.headerActions}>
          <Link href="/#contact" className={`${styles.ctaButton} ${styles.desktopOnlyCta}`} onClick={closeMobileMenu}>
            Book a Consultation
          </Link>
          <button className={styles.hamburgerButton} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
