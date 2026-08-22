import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Digital Marketing & B2B Growth Strategy | Pixelary',
  description: 'B2B digital marketing services tailored for tech companies and startups. Performance marketing, conversion funnel optimization, and growth analytics.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/digital-marketing',
  },
  openGraph: {
    title: 'Digital Marketing & B2B Growth Strategy | Pixelary',
    description: 'Data-driven B2B digital marketing, landing page conversion optimization, and targeted customer acquisition.',
    url: 'https://www.pixelary.in/services/digital-marketing',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing & B2B Growth Strategy | Pixelary',
    description: 'Data-driven B2B digital marketing, landing page conversion optimization, and targeted customer acquisition.',
  },
};

export default function DigitalMarketingPage() {
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
            "name": "Digital Marketing",
            "item": "https://www.pixelary.in/services/digital-marketing"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Digital Marketing",
        "serviceType": "Marketing Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "B2B performance marketing, landing page CRO, search ads, and analytics telemetry.",
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
          <span style={{ color: '#ffffff' }}>Digital Marketing</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Growth Engineering</span>
          <h1 className={styles.title}>B2B Digital Marketing & Conversion Growth</h1>
          <p className={styles.tagline}>
            Connect with decision-makers, scale your customer acquisition pipeline, and optimize your web conversion funnels with data-backed marketing strategies.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Performance-Driven B2B Marketing</h2>
              <p className={styles.paragraph}>
                In B2B tech and software services, generic marketing campaigns rarely convert high-value clients. Success requires aligning technical product positioning with clear visual messaging and frictionless landing pages.
              </p>
              <p className={styles.paragraph}>
                We combine web development precision with digital marketing strategy — pairing high-speed Next.js landing pages with Google Analytics telemetry, campaign tracking, and lead capture workflows.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Core Services</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Landing Page Conversion Optimization (CRO):</strong> Designing dedicated campaign pages engineered to maximize form completion rates.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Analytics & Telemetry Setup:</strong> Implementation of GA4 event tracking, UTM attribution models, and conversion goals.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Search & Social Campaign Strategy:</strong> Targeted PPC and search ad positioning for B2B keywords and key verticals.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Marketing Tools</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>Google Analytics 4</span>
                <span className={styles.techTag}>UTM Tracking</span>
                <span className={styles.techTag}>Landing Page CRO</span>
                <span className={styles.techTag}>Search Ads</span>
                <span className={styles.techTag}>Funnel Optimization</span>
              </div>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Scale your digital pipeline</h2>
          <p className={styles.ctaDescription}>
            Speak with our team to map out a conversion-driven growth strategy for your product.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Growth Consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
