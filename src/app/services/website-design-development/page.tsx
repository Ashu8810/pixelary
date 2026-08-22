import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Next.js Website Design & Development Agency India | Pixelary',
  description: 'Custom Next.js & React website design and development services. We build high-speed, SEO-optimized, B2B websites and custom web platforms for scaling startups.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/website-design-development',
  },
  openGraph: {
    title: 'Website Design & Development Services | Pixelary',
    description: 'Custom Next.js & React website engineering with zero technical debt, high Lighthouse scores, and responsive UI layout.',
    url: 'https://www.pixelary.in/services/website-design-development',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Design & Development Services | Pixelary',
    description: 'Custom Next.js & React website engineering with zero technical debt, high Lighthouse scores, and responsive UI layout.',
  },
};

export default function WebsiteDesignPage() {
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
            "name": "Website Design & Development",
            "item": "https://www.pixelary.in/services/website-design-development"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Website Design & Development",
        "serviceType": "Web Development Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Custom Next.js website design and full-stack React software development for B2B companies and tech startups.",
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
          <span style={{ color: '#ffffff' }}>Website Design & Development</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Core Engineering Service</span>
          <h1 className={styles.title}>Website Design & Custom Web Development</h1>
          <p className={styles.tagline}>
            We design and engineer bespoke B2B websites using Next.js, React, and TypeScript. Built for lightning performance, top search engine rankings, and smooth user conversion flows.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Overview & Engineering Philosophy</h2>
              <p className={styles.paragraph}>
                In modern B2B SaaS and digital products, your website is your digital flagship. Generic page builders and heavy legacy platforms often degrade user experience, slow down page loading, and hurt organic search discovery.
              </p>
              <p className={styles.paragraph}>
                At Pixelary, we take a code-first, component-driven approach. By pairing Next.js App Router server rendering with tailored CSS modules and TypeScript, we ensure zero layout shifts, near-instant initial page loads, and seamless accessibility across desktop and mobile devices.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>What We Deliver</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Custom Next.js & React Architecture:</strong> Clean, maintainable codebases structured for fast iteration and scalable feature expansion.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Responsive UI/UX Layouts:</strong> Tailored mobile-first visual design system that aligns perfectly with your brand identity.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Built-in SEO & Performance Optimization:</strong> Dynamic XML sitemaps, structured JSON-LD schemas, OpenGraph tags, and sub-second rendering.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>CMS & API Integration:</strong> Seamless pairing with headless CMS tools (Sanity, Strapi, Notion) and third-party APIs.</span>
                </li>
              </ul>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Our Process</h2>
              <p className={styles.paragraph}>
                <strong>1. Discovery & Architecture:</strong> We map your target audience, site structure, conversion paths, and technical requirements.
              </p>
              <p className={styles.paragraph}>
                <strong>2. High-Fidelity Design:</strong> Interactive Figma prototypes ensuring clear visual hierarchy and pixel-perfect design tokens.
              </p>
              <p className={styles.paragraph}>
                <strong>3. Component Engineering:</strong> Clean production build using Next.js, React 19, and optimized CSS modules.
              </p>
              <p className={styles.paragraph}>
                <strong>4. Auditing & Launch:</strong> Lighthouse performance tuning, cross-browser verification, dynamic sitemap registration, and deployment.
              </p>
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
                <span className={styles.techTag}>Tailwind CSS</span>
                <span className={styles.techTag}>Node.js</span>
                <span className={styles.techTag}>PostgreSQL</span>
                <span className={styles.techTag}>Vercel</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Related Work</h3>
              <p className={styles.paragraph} style={{ fontSize: '0.875rem' }}>
                See how we engineered high-fidelity web experiences for our clients:
              </p>
              <ul className={styles.list} style={{ marginTop: '0.5rem' }}>
                <li>
                  <Link href="/work/dodge-challenger" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>Dodge Challenger Showcase</span>
                    <FiArrowRight />
                  </Link>
                </li>
                <li>
                  <Link href="/work/tedxbmsit" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span>TEDxBMSIT Web Platform</span>
                    <FiArrowRight />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to build a faster, better website?</h2>
          <p className={styles.ctaDescription}>
            Get direct access to the co-founders building your web product. Let’s discuss your project goals and scope.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Free Consultation
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
