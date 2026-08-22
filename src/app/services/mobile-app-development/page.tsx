import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Mobile Application Design & Development Services | Pixelary',
  description: 'Custom mobile application design and development services. We build high-performance React Native & cross-platform iOS and Android apps.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile Application Development | Pixelary',
    description: 'Custom iOS & Android mobile application development with silky-smooth performance and offline capability.',
    url: 'https://www.pixelary.in/services/mobile-app-development',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Application Development | Pixelary',
    description: 'Custom iOS & Android mobile application development with silky-smooth performance and offline capability.',
  },
};

export default function MobileAppPage() {
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
            "name": "Services",
            "item": "https://www.pixelary.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mobile Application Development",
            "item": "https://www.pixelary.in/services/mobile-app-development"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Mobile Application Development",
        "serviceType": "Mobile App Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Cross-platform iOS and Android mobile app engineering, native API integrations, and mobile UI design.",
        "areaServed": "Worldwide"
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
          <Link href="/services" className={styles.breadcrumbLink}>Services</Link>
          <span>/</span>
          <span style={{ color: '#ffffff' }}>Mobile Application Development</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Mobile Engineering</span>
          <h1 className={styles.title}>Mobile Application Design & Development</h1>
          <p className={styles.tagline}>
            We engineer high-performance mobile applications for iOS and Android. Built with robust cross-platform frameworks, secure REST/GraphQL backends, and responsive touch UI.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>High-Speed Mobile Apps That Scale</h2>
              <p className={styles.paragraph}>
                Mobile users expect instant responsiveness, offline resilience, and fluid motion design. We help startups and businesses bring mobile app concepts to life with clean code architectures and secure backend connectivity.
              </p>
              <p className={styles.paragraph}>
                Whether building a companion app for your web platform or launching a standalone mobile product, our team manages the complete lifecycle from mobile UI design to App Store and Google Play publishing.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Cross-Platform Efficiency:</strong> Build once and ship across iOS and Android with single-codebase reliability.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Backend & API Syncing:</strong> Real-time WebSocket, GraphQL, and REST API integration with automated caching.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Secure Authentication:</strong> Biometric login (Face ID / Fingerprint), OAuth 2.0, and JWT auth flow implementation.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>App Store Deployment:</strong> Complete setup for Apple Developer Program and Google Play Console publishing.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Mobile Stack</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>React Native</span>
                <span className={styles.techTag}>Expo</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>REST / GraphQL</span>
                <span className={styles.techTag}>Firebase</span>
                <span className={styles.techTag}>Supabase</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Backend Expertise</h3>
              <p className={styles.paragraph} style={{ fontSize: '0.875rem' }}>
                Need a high-concurrency API server for your app? Learn about our FastAPI & Python backend work:
              </p>
              <Link href="/work/commitiq" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                <span>Read CommitIQ Case Study</span>
                <FiArrowRight />
              </Link>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Have a mobile app concept?</h2>
          <p className={styles.ctaDescription}>
            Consult with our engineering team to review tech stacks, timelines, and deployment strategies.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Discuss Your Mobile App
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
