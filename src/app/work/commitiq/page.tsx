import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'CommitIQ Case Study | FastAPI & React Engineering | Pixelary',
  description: 'Discover how Pixelary built CommitIQ using FastAPI, async SQLAlchemy, and GitHub Actions to combat contribution farming and protect open-source repository health.',
  alternates: {
    canonical: 'https://www.pixelary.in/work/commitiq',
  },
  openGraph: {
    title: 'CommitIQ Intelligence Case Study | Pixelary',
    description: 'Repository health intelligence built with FastAPI, async SQLAlchemy, React, and GitHub Actions rate-limiting workflows.',
    url: 'https://www.pixelary.in/work/commitiq',
    siteName: 'Pixelary',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CommitIQ Intelligence Case Study | Pixelary',
    description: 'Repository health intelligence built with FastAPI, async SQLAlchemy, React, and GitHub Actions rate-limiting workflows.',
  },
};

export default function CommitIQCaseStudy() {
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
            "name": "CommitIQ Case Study",
            "item": "https://www.pixelary.in/work/commitiq"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "CommitIQ Intelligence",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://commit-iq-iota.vercel.app",
        "author": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "Repository health intelligence for GitHub projects. Analyzes commit history to turn raw engineering activity into maintainability signals."
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
          <span style={{ color: '#ffffff' }}>CommitIQ Case Study</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Development Tool & Infrastructure</span>
          <h1 className={styles.title}>CommitIQ — Repository Health Intelligence & Contribution Spam Mitigation</h1>
          <p className={styles.tagline}>
            A developer intelligence platform built with Python (FastAPI), async SQLAlchemy, React/TypeScript, and automated GitHub Actions workflows.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="https://commit-iq-iota.vercel.app" 
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
                CommitIQ is a repository health intelligence service designed to analyze raw commit histories, PR velocity, and contributor patterns for open-source and private engineering projects. By parsing GitHub API telemetry, it converts raw activity into maintainability signals for engineering leads.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>The Challenge: Contribution-Farming Incident</h2>
              <p className={styles.paragraph}>
                During active open-source operations, the repository faced a severe contribution-farming incident. An automated or malicious contributor opened approximately 45 pull requests and 80 issues overnight, overloading notification channels, reviewer bandwidth, and repository triage.
              </p>
              <p className={styles.paragraph}>
                Standard manual moderation was unsustainable. The project required an immediate backend solution to parse commit signals, isolate spam contributions, and prevent automated issue generation without blocking legitimate open-source contributors.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>The Solution & Technical Architecture</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>FastAPI & Async SQLAlchemy Backend:</strong> High-concurrency Python API server capable of querying GitHub REST and GraphQL APIs concurrently without blocking runtime event loops.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Automated GitHub Actions Rate-Limiting Workflows:</strong> Created custom CI/CD bot workflows that detect rapid-fire PR/issue creations, apply triage labels automatically, and enforce contribution rate limits.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Historical Backfill Scripts:</strong> Engineered data backfill scripts to parse existing commit logs, flag suspicious activity bursts, and clean up spam triage data accurately.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>React/TypeScript Analytics Dashboard:</strong> Clean, real-time visual dashboard showcasing maintainability metrics, active contributor velocity, and automated flag alerts.</span>
                </li>
              </ul>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Real Shipped Outcome</h2>
              <p className={styles.paragraph}>
                The automated rate-limiting workflows and backfill scripts successfully contained the contribution-farming incident, filtered out bot-generated pull requests, and restored maintainer review speed. CommitIQ continues to monitor repository health with automated telemetry signals.
              </p>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tech Stack</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>FastAPI</span>
                <span className={styles.techTag}>Python</span>
                <span className={styles.techTag}>Async SQLAlchemy</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>GitHub Actions</span>
                <span className={styles.techTag}>Vercel</span>
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
                  <Link href="/services/cyber-security" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Cyber Security & Rate Limiting
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Need custom backend software or developer tools?</h2>
          <p className={styles.ctaDescription}>
            Partner directly with our co-founders to engineer resilient Python, FastAPI, and React software applications.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Discuss Your Software Project
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
