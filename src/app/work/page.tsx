import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../subpage.module.css';
import { projects } from '../data/works';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Client Work & Case Studies | Pixelary Web Development',
  description: 'Explore Pixelary’s portfolio of shipped web experiences and engineering case studies, including CommitIQ, TEDxBMSIT, and Dodge Challenger.',
  alternates: {
    canonical: 'https://www.pixelary.in/work',
  },
  openGraph: {
    title: 'Client Work & Case Studies | Pixelary',
    description: 'Real shipped web products engineered with Next.js, React, FastAPI, and bespoke UI design systems.',
    url: 'https://www.pixelary.in/work',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Work & Case Studies | Pixelary',
    description: 'Real shipped web products engineered with Next.js, React, FastAPI, and bespoke UI design systems.',
  },
};

export default function WorkIndexPage() {
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Pixelary Case Studies",
        "itemListElement": projects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": project.title,
          "url": `https://www.pixelary.in/work/${project.slug}`
        }))
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
          <span style={{ color: '#ffffff' }}>Work</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Portfolio & Case Studies</span>
          <h1 className={styles.title}>Crafting High-Performance Web Experiences</h1>
          <p className={styles.tagline}>
            Explore our featured client case studies — from FastAPI developer tools to cinematic event platforms and automotive product showcases.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.sectionBlock} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div 
                style={{ 
                  height: '200px', 
                  borderRadius: '12px', 
                  backgroundImage: `url(${project.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.1)'
                }} 
              />
              <div>
                <span className={styles.badge} style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{project.category}</span>
                <h2 className={styles.sectionTitle} style={{ fontSize: '1.4rem', marginTop: '0.25rem' }}>{project.title}</h2>
                <p className={styles.paragraph} style={{ fontSize: '0.9rem' }}>{project.description}</p>
              </div>

              <div className={styles.techTagGrid}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Link href={`/work/${project.slug}`} style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span>Read Case Study</span>
                  <FiArrowUpRight />
                </Link>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#888888', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <span>Visit Live</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Have a web project in mind?</h2>
          <p className={styles.ctaDescription}>
            We build custom, scalable web applications and digital platforms. Let&apos;s discuss your project requirements.
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
