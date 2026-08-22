import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Web Application Cyber Security & Code Audits | Pixelary',
  description: 'Web security services for software products and APIs. Vulnerability assessments, rate-limiting, authentication hardening, and threat mitigation.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/cyber-security',
  },
  openGraph: {
    title: 'Cyber Security & Web Hardening Services | Pixelary',
    description: 'Protect your web applications, API endpoints, and cloud infrastructure with security code reviews and rate-limiting workflows.',
    url: 'https://www.pixelary.in/services/cyber-security',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Security & Web Hardening Services | Pixelary',
    description: 'Protect your web applications, API endpoints, and cloud infrastructure with security code reviews and rate-limiting workflows.',
  },
};

export default function CyberSecurityPage() {
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
            "name": "Cyber Security",
            "item": "https://www.pixelary.in/services/cyber-security"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Cyber Security",
        "serviceType": "Application Security Consulting",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Code vulnerability audits, API security, automated rate-limiting, and DDoS/bot protection for web applications.",
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
          <span style={{ color: '#ffffff' }}>Cyber Security</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Security & Reliability</span>
          <h1 className={styles.title}>Application Security & Infrastructure Protection</h1>
          <p className={styles.tagline}>
            Protect your web applications, user data, and backend APIs with threat analysis, rate-limiting, and secure cloud deployment architectures.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Defending Modern Digital Assets</h2>
              <p className={styles.paragraph}>
                As web products scale, automated bot traffic, contribution-farming, credential stuffing, and injection attacks pose significant risks to application uptime and user trust. Security cannot be an afterthought — it must be engineered into your codebase from day one.
              </p>
              <p className={styles.paragraph}>
                At Pixelary, we bring hands-on experience in mitigating real-world security incidents. From building automated GitHub Actions rate-limiting scripts for repository health (as seen in our CommitIQ case study) to securing REST & GraphQL API routes against abuse, we help engineering teams fortify their codebases.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Security Capabilities</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>API Rate-Limiting & Bot Mitigation:</strong> Implementing token-bucket and IP-based rate limiting on sensitive API endpoints.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Authentication & Authorization Hardening:</strong> Secure JWT storage, multi-factor auth (MFA), and RBAC access control policies.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Code Vulnerability Audits:</strong> Reviewing React & Node.js dependencies, environment variable secrets, and XSS/CSRF vectors.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Security Headers & CSP:</strong> Enforcing Content Security Policies (CSP), HSTS, CORS configuration, and X-Frame-Options.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Security Focus</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>Rate Limiting</span>
                <span className={styles.techTag}>CORS / CSP</span>
                <span className={styles.techTag}>OAuth 2.0</span>
                <span className={styles.techTag}>FastAPI Security</span>
                <span className={styles.techTag}>GitHub Actions</span>
                <span className={styles.techTag}>WAF Setup</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Real Incident Case Study</h3>
              <p className={styles.paragraph} style={{ fontSize: '0.875rem' }}>
                Read how CommitIQ contained a contribution-farming incident of ~45 PRs and ~80 issues overnight:
              </p>
              <Link href="/work/commitiq" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                <span>Read CommitIQ Security Story</span>
                <FiArrowRight />
              </Link>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Need a security review for your web app?</h2>
          <p className={styles.ctaDescription}>
            Consult with our engineering team to review rate-limiting strategies and infrastructure hardening.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Book a Security Review
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
