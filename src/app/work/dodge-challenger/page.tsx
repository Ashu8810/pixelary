import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Dodge Challenger Showcase Case Study | Pixelary Web Experience',
  description: 'Read how Pixelary built a cinematic engineering showcase for the Dodge Challenger featuring custom interactive visual design and performance optimization.',
  alternates: {
    canonical: 'https://www.pixelary.in/work/dodge-challenger',
  },
  openGraph: {
    title: 'Dodge Challenger Showcase Case Study | Pixelary',
    description: 'Cinematic engineering showcase highlighting muscle car performance, interactive Specs visualizer, and sound design.',
    url: 'https://www.pixelary.in/work/dodge-challenger',
    siteName: 'Pixelary',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dodge Challenger Showcase Case Study | Pixelary',
    description: 'Cinematic engineering showcase highlighting muscle car performance, interactive Specs visualizer, and sound design.',
  },
};

export default function DodgeChallengerCaseStudy() {
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
            "name": "Dodge Challenger Case Study",
            "item": "https://www.pixelary.in/work/dodge-challenger"
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "name": "Dodge Challenger Digital Showcase",
        "url": "https://dodgechallanger.in/",
        "author": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "A cinematic web experience showcasing the Dodge Challenger muscle car heritage and interactive engineering specifications."
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
          <span style={{ color: '#ffffff' }}>Dodge Challenger Case Study</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Automotive Web Showcase</span>
          <h1 className={styles.title}>Dodge Challenger — Cinematic Muscle & Engineering Showcase</h1>
          <p className={styles.tagline}>
            An interactive web experience capturing the legacy, muscle car horsepower, and engineering craftsmanship of the Dodge Challenger.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://dodgechallanger.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              <span>Visit Live Showcase</span>
              <FiExternalLink />
            </a>
          </div>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <p className={styles.paragraph}>
                The Dodge Challenger digital experience was built as an immersive showcase to bring automotive storytelling to life on the web. The goal was to combine high-performance web assets with interactive specs, engine roar audio triggers, and fluid visual transitions.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Key Innovations</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Cinematic Visual Storytelling:</strong> Dark, high-contrast visual design paired with AVIF/WebP image optimization for crisp asset loading.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Interactive Specs Visualizer:</strong> Dynamic comparison grids for horsepower, torque, 0-60mph acceleration, and trim packages.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Audio & Motion Interactivity:</strong> Integrated Web Audio triggers for engine sounds alongside smooth scroll animations.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tech Stack</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>Next.js</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>CSS Modules</span>
                <span className={styles.techTag}>Web Audio API</span>
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
          <h2 className={styles.ctaTitle}>Want to craft a high-impact showcase for your product?</h2>
          <p className={styles.ctaDescription}>
            Let’s discuss your vision and build a custom web experience that wows your audience.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Project Consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
