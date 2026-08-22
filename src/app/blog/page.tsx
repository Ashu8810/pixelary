import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../subpage.module.css';

export const metadata: Metadata = {
  title: 'Blog & Engineering Insights | Pixelary B2B Web Studio',
  description: 'Technical articles and guides on Next.js web development, FastAPI architecture, UI/UX design systems, and startup B2B website engineering.',
  alternates: {
    canonical: 'https://www.pixelary.in/blog',
  },
  openGraph: {
    title: 'Blog & Engineering Insights | Pixelary',
    description: 'Technical articles and guides on Next.js web development, FastAPI architecture, UI/UX design systems, and startup B2B website engineering.',
    url: 'https://www.pixelary.in/blog',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Engineering Insights | Pixelary',
    description: 'Technical articles and guides on Next.js web development, FastAPI architecture, UI/UX design systems, and startup B2B website engineering.',
  },
};

const upcomingPosts = [
  {
    title: 'Next.js App Router vs. Traditional React SPA for B2B Startups',
    excerpt: 'An in-depth technical comparison of server rendering, static export, hydration cost, and SEO benefits for early-stage B2B SaaS sites.',
    category: 'Web Engineering',
    date: 'Coming Soon'
  },
  {
    title: 'How Much Does a Custom B2B Website Cost in India (2026 Breakdown)',
    excerpt: 'A transparent guide to pricing models, design tokens, backend infrastructure, and maintenance costs when hiring a developer-led agency.',
    category: 'Agency Insights',
    date: 'Coming Soon'
  },
  {
    title: 'Mitigating Automated Contribution Farming on Open-Source Repositories',
    excerpt: 'Lessons learned building GitHub Actions rate-limiting workflows, FastAPI async backfills, and spam triage systems.',
    category: 'Security & DevOps',
    date: 'Coming Soon'
  }
];

export default function BlogIndexPage() {
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
            "name": "Blog",
            "item": "https://www.pixelary.in/blog"
          }
        ]
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
          <span style={{ color: '#ffffff' }}>Blog</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Insights & Engineering</span>
          <h1 className={styles.title}>Pixelary Blog & Technical Articles</h1>
          <p className={styles.tagline}>
            Deep dives into modern web engineering, FastAPI backend architecture, UI design systems, and long-tail B2B SEO strategies.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {upcomingPosts.map((post, idx) => (
            <div key={idx} className={styles.sectionBlock} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className={styles.badge} style={{ fontSize: '0.75rem', marginBottom: 0 }}>{post.category}</span>
                <span style={{ fontSize: '0.8rem', color: '#888888' }}>{post.date}</span>
              </div>
              <h2 className={styles.sectionTitle} style={{ fontSize: '1.25rem' }}>{post.title}</h2>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>{post.excerpt}</p>
            </div>
          ))}
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Want to discuss a custom web product?</h2>
          <p className={styles.ctaDescription}>
            Subscribe to our upcoming articles or reach out directly to discuss your project goals with our team.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
