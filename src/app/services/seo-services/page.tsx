import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Technical SEO Services & Search Optimization | Pixelary',
  description: 'Technical SEO services for B2B companies and Next.js applications. Improve Google rankings, structured JSON-LD data, Core Web Vitals, and organic traffic growth.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/seo-services',
  },
  openGraph: {
    title: 'SEO Services & Technical Search Optimization | Pixelary',
    description: 'Data-driven technical SEO audits, dynamic sitemaps, JSON-LD structured data, and on-page optimization for B2B sites.',
    url: 'https://www.pixelary.in/services/seo-services',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services & Technical Search Optimization | Pixelary',
    description: 'Data-driven technical SEO audits, dynamic sitemaps, JSON-LD structured data, and on-page optimization for B2B sites.',
  },
};

export default function SeoServicesPage() {
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
            "name": "SEO Services",
            "item": "https://www.pixelary.in/services/seo-services"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "SEO Services",
        "serviceType": "Search Engine Optimization Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Technical SEO auditing, structured data implementation, search crawlability, and performance optimization.",
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
          <span style={{ color: '#ffffff' }}>SEO Services</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Organic Growth Service</span>
          <h1 className={styles.title}>Technical SEO & Search Engine Optimization</h1>
          <p className={styles.tagline}>
            Turn search engines into your most reliable customer acquisition channel with technical SEO architecture, structured metadata, and fast web infrastructure.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Why Technical SEO Matters</h2>
              <p className={styles.paragraph}>
                Building a visually appealing website is only half the battle. If search crawlers cannot understand your page hierarchy, index individual routes, or verify your organization authority, your organic reach will stagnate.
              </p>
              <p className={styles.paragraph}>
                At Pixelary, we specialize in developer-grade technical SEO. We eliminate indexation roadblocks, implement rich JSON-LD schema graphs, optimize Core Web Vitals, and build keyword-focused route structures that rank organically for high-intent B2B search terms.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Our Technical SEO Checklist</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Structured JSON-LD Schema:</strong> Implement Organization, ProfessionalService, FAQPage, Service, and BreadcrumbList schemas for Rich Snippet eligibility.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Dynamic XML Sitemap & Robots Management:</strong> Clean route indexing, canonical URL definitions, and crawler control rules.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Core Web Vitals Tuning:</strong> Reserve layout space for zero CLS, optimize LCP images, and minimize JavaScript bundle bloat.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Keyword & Heading Hierarchy:</strong> Strategic H1/H2 tagging, metadata optimization, and semantic HTML structure.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>SEO Capabilities</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>JSON-LD Schema</span>
                <span className={styles.techTag}>Next.js Metadata</span>
                <span className={styles.techTag}>Core Web Vitals</span>
                <span className={styles.techTag}>Canonical URLs</span>
                <span className={styles.techTag}>Rich Snippets</span>
                <span className={styles.techTag}>Google Search Console</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Case Studies</h3>
              <p className={styles.paragraph} style={{ fontSize: '0.875rem' }}>
                See how we structure multi-route SEO architectures across our platforms:
              </p>
              <Link href="/work" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                <span>Browse All Work</span>
                <FiArrowRight />
              </Link>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Want to audit and improve your search rankings?</h2>
          <p className={styles.ctaDescription}>
            Book an SEO technical audit with our engineering team today to identify rank barriers and optimization opportunities.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book an SEO Audit
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
