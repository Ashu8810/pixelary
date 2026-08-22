import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../subpage.module.css';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'UI/UX Design Agency for B2B Startups & Products | Pixelary',
  description: 'Custom UI/UX design services. We craft intuitive user interfaces, cohesive design systems, and wireframes for web applications and mobile products.',
  alternates: {
    canonical: 'https://www.pixelary.in/services/ui-ux-design',
  },
  openGraph: {
    title: 'UI/UX Design Services | Pixelary',
    description: 'Transform user experience with data-driven UI/UX design. Figma prototypes, visual systems, and user workflow optimization.',
    url: 'https://www.pixelary.in/services/ui-ux-design',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Services | Pixelary',
    description: 'Transform user experience with data-driven UI/UX design. Figma prototypes, visual systems, and user workflow optimization.',
  },
};

export default function UiUxDesignPage() {
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
            "name": "UI/UX Design",
            "item": "https://www.pixelary.in/services/ui-ux-design"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "UI/UX Design Services",
        "serviceType": "Design Agency",
        "provider": {
          "@type": "Organization",
          "name": "Pixelary",
          "url": "https://www.pixelary.in"
        },
        "description": "User experience research, interactive prototyping, and design system engineering for software applications.",
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
          <span style={{ color: '#ffffff' }}>UI/UX Design Services</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Design Specialization</span>
          <h1 className={styles.title}>UI/UX Design & Product Experience</h1>
          <p className={styles.tagline}>
            We design pixel-perfect user interfaces and thoughtful user journeys that simplify complex software features into effortless digital experiences.
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Product-First Interface Design</h2>
              <p className={styles.paragraph}>
                Great software design is more than visual aesthetic — it is about clarity, flow, and reducing cognitive friction for the user. Whether you are launching a new SaaS product or redesigning a complex web workflow, our UI/UX methodology prioritizes usability alongside modern visual appeal.
              </p>
              <p className={styles.paragraph}>
                As co-founders with dual design and engineering backgrounds, we bridge the gap between design concepts and front-end reality. Every layout, button state, and animation token we design is created with developer handover and production implementation in mind.
              </p>
            </section>

            <section className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>Design Capabilities</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>User Research & Wireframing:</strong> Mapping user personas, structural site architecture, and interaction wireframes.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Design System Creation:</strong> Scalable UI kits, typography scales, color palettes, and accessible component libraries in Figma.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Interactive Prototyping:</strong> High-fidelity clickable prototypes that allow stakeholders to test workflows before writing code.</span>
                </li>
                <li className={styles.listItem}>
                  <FiCheckCircle className={styles.listIcon} />
                  <span><strong>Micro-Animations & Micro-Interactions:</strong> Subtle hover states, loading skeletons, and interactive visual feedback that delight users.</span>
                </li>
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Tools & Systems</h3>
              <div className={styles.techTagGrid}>
                <span className={styles.techTag}>Figma</span>
                <span className={styles.techTag}>Framer</span>
                <span className={styles.techTag}>Design Systems</span>
                <span className={styles.techTag}>User Flows</span>
                <span className={styles.techTag}>Micro-interactions</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Case Study Spotlight</h3>
              <p className={styles.paragraph} style={{ fontSize: '0.875rem' }}>
                Check out TEDxBMSIT for a showcase of volumetric spotlighting and editorial visual UI:
              </p>
              <Link href="/work/tedxbmsit" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem' }}>
                <span>View TEDxBMSIT Case Study</span>
                <FiArrowRight />
              </Link>
            </div>
          </aside>
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Elevate your product&apos;s user experience</h2>
          <p className={styles.ctaDescription}>
            Partner directly with our lead designers to turn complex user journeys into intuitive interface designs.
          </p>
          <Link href="/#contact" className={styles.ctaButton}>
            Start a Design Project
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
