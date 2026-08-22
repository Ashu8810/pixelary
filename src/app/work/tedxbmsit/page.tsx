import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'TEDxBMSIT Web Platform Case Study | Pixelary Visual Engineering',
  description: 'Explore the TEDxBMSIT digital platform designed and developed by Pixelary, featuring a volumetric spotlight system and editorial-grade layout.',
  alternates: {
    canonical: 'https://www.pixelary.in/work/tedxbmsit',
  },
  openGraph: {
    title: 'TEDxBMSIT Web Platform Case Study | Pixelary',
    description: 'Cinematic digital experience built for TEDxBMSIT with volumetric visual spotlighting and responsive editorial design.',
    url: 'https://www.pixelary.in/work/tedxbmsit',
    siteName: 'Pixelary',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDxBMSIT Web Platform Case Study | Pixelary',
    description: 'Cinematic digital experience built for TEDxBMSIT with volumetric visual spotlighting and responsive editorial design.',
  },
};

export default function TEDxBMSITCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.pixelary.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://www.pixelary.in/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "TEDxBMSIT Case Study",
            "item": "https://www.pixelary.in/work/tedxbmsit"
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "name": "TEDxBMSIT Digital Platform",
        "url": "https://www.tedxbmsitm.in/",
        "author": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "A premium cinematic platform built for TEDxBMSIT featuring visual spotlighting, editorial layout, and event speaker showcases."
      }
    ]
  };

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span>/</span>
          <Link href="/work" className={styles.breadcrumbLink}>Work</Link>
          <span>/</span>
          <span style={{ color: '#ffffff' }}>TEDxBMSIT Case Study</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Cinematic Event Experience</span>
          <h1 className={styles.title}>TEDxBMSIT — Volumetric Spotlight & Editorial Web Platform</h1>
          <p className={styles.tagline}>
            A high-fidelity digital presence built for TEDxBMSIT, featuring custom volumetric lighting effects, responsive editorial typography, and speaker discovery systems.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://www.tedxbmsitm.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              <span>Visit Live Platform</span>
              <FiExternalLink />
            </a>
          </div>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p className={styles.paragraph}>
                TEDxBMSIT required a web platform that reflected the prestige, intellectual rigor, and editorial standards of the global TEDx brand. The platform needed to introduce the annual theme, highlight prominent speakers, and drive ticket inquiries seamlessly.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Visual & Technical Features</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Volumetric Spotlight System:</strong> Engineered custom CSS/canvas lighting effects that react to scroll depth and mouse focus, reflecting TED’s iconic stage spotlight aesthetic.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Editorial Layout & Typography:</strong> Formatted speaker profiles and editorial content using high-contrast grid layouts and fluid font scaling.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Performance Optimization:</strong> Lazy-loaded high-resolution image assets and optimized animation frame rates for 60fps performance on mobile.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tech Stack</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>Next.js</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>Framer Motion</span>
                <span className={styles.techTag}>Tailwind CSS</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Services Used</h3>
              <ul className={styles.list}>
                <li>
                  <Link href="/services/website-design-development" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Website Design & Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem' }}>
                    UI/UX Design Services
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Building an event or brand experience?</h2>
          <p className={styles.ctaDescription}>
            Let’s collaborate to build a standout digital platform tailored to your audience.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
