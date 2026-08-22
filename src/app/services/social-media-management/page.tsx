import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Social Media Management for B2B & Tech Brands | Pixelary',
  description: 'Strategic social media management services. Build brand authority across LinkedIn, X (Twitter), and tech developer channels with consistent visual design and content execution.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/social-media-management',
  },
  openGraph: {
    title: 'Social Media Management for B2B & Tech Brands | Pixelary',
    description: 'Build brand authority across LinkedIn, X (Twitter), and developer communities with tailored social media strategy and visual content.',
    url: 'https://www.pixelary.in/services/social-media-management',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management for B2B & Tech Brands | Pixelary',
    description: 'Build brand authority across LinkedIn, X (Twitter), and developer communities with tailored social media strategy and visual content.',
  },
};

export default function SocialMediaPage() {
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
            "name": "Social Media Management",
            "item": "https://www.pixelary.in/services/social-media-management"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Social Media Management",
        "serviceType": "Social Media Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Content strategy, visual asset creation, and social presence management for tech startups and B2B enterprises.",
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
          <span style={{ color: '#ffffff' }}>Social Media Management</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Brand Presence</span>
          <h1 className={styles.title}>Social Media Strategy & Content Management</h1>
          <p className={styles.tagline}>
            Establish strong brand positioning and engage your audience across LinkedIn, X (Twitter), and developer communities with tailored content and high-quality visual assets.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Building Brand Authority Online</h2>
              <p className={styles.paragraph}>
                For B2B companies, your social channels serve as a live portfolio of your brand&apos;s culture, engineering capability, and thought leadership. Consistency and visual standards are paramount.
              </p>
              <p className={styles.paragraph}>
                We produce custom visual carousels, feature announcement graphics, and technical storytelling copy that resonates with developers, founders, and corporate buyers.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Deliverables</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Content Strategy & Planning:</strong> Editorial calendar mapping product updates, case study highlights, and industry insights.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Custom Brand Design Assets:</strong> Polished visual templates, social banners, and feature graphics tailored to your brand system.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Multi-Channel Publishing:</strong> Executing scheduled postings across LinkedIn, X, and Instagram.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Channels</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>LinkedIn</span>
                <span className={styles.techTag}>X (Twitter)</span>
                <span className={styles.techTag}>Instagram</span>
                <span className={styles.techTag}>GitHub / Dev</span>
              </div>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Elevate your social media presence</h2>
          <p className={styles.ctaDescription}>
            Get in touch with our creative team to craft a social strategy for your brand.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Social Media Strategy Session
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
