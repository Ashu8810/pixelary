import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../subpage.module.css';
import { FiLayout, FiTrendingUp, FiSearch, FiShare2, FiLayers, FiSmartphone, FiLock, FiArrowUpRight } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'B2B Design & Software Development Services | Pixelary',
  description: 'Explore Pixelary’s core engineering and design services: Website Design & Development, UI/UX Design, Mobile App Development, SEO Services, Digital Marketing, and Cyber Security.',
  alternates: {
    canonical: 'https://www.pixelary.in/services',
  },
  openGraph: {
    title: 'B2B Web Design & Software Development Services | Pixelary',
    description: 'Custom Next.js web engineering, UI/UX design, mobile applications, and SEO services tailored for startups and B2B enterprises.',
    url: 'https://www.pixelary.in/services',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Web Design & Software Development Services | Pixelary',
    description: 'Custom Next.js web engineering, UI/UX design, mobile applications, and SEO services tailored for startups and B2B enterprises.',
  },
};

const serviceList = [
  {
    title: 'Website Design & Development',
    slug: 'website-design-development',
    tagline: 'High-performance Next.js websites built for scale, SEO, and conversions.',
    icon: <FiLayout />,
    summary: 'We build custom, fast, and responsive websites using modern technologies like React, Next.js, and TypeScript. Designed to captivate visitors and convert them into paying clients.'
  },
  {
    title: 'UI/UX Design Services',
    slug: 'ui-ux-design',
    tagline: 'Intuitive visual systems, wireframes, and user-centered interface design.',
    icon: <FiLayers />,
    summary: 'Transform user experience with data-driven UI/UX design. From wireframes to design systems, we craft delightful interfaces that maximize engagement and ease of use.'
  },
  {
    title: 'Mobile Application Development',
    slug: 'mobile-app-development',
    tagline: 'Native and cross-platform mobile apps engineered for speed and elegance.',
    icon: <FiSmartphone />,
    summary: 'Build high-performance mobile applications tailored for iOS and Android. Seamless API integration, offline support, and silky-smooth motion design.'
  },
  {
    title: 'SEO Services',
    slug: 'seo-services',
    tagline: 'Technical SEO, keyword targeting, and sustainable organic traffic growth.',
    icon: <FiSearch />,
    summary: 'Improve search engine rankings and attract targeted organic leads. We audit technical performance, optimize meta architecture, and structure data for rich snippets.'
  },
  {
    title: 'Cyber Security',
    slug: 'cyber-security',
    tagline: 'Vulnerability audits, code hardening, and application security.',
    icon: <FiLock />,
    summary: 'Protect your web applications and API endpoints. We conduct security audits, harden cloud deployments, and implement rate-limiting and threat mitigation.'
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    tagline: 'Targeted PPC campaigns, conversion rate optimization, and brand scaling.',
    icon: <FiTrendingUp />,
    summary: 'Drive qualified pipeline growth with strategic digital marketing campaigns tailored for B2B tech products, SaaS applications, and modern service businesses.'
  },
  {
    title: 'Social Media Management',
    slug: 'social-media-management',
    tagline: 'Strategic content management, brand positioning, and community building.',
    icon: <FiShare2 />,
    summary: 'Establish authority across LinkedIn, X (Twitter), and developer channels. Consistent brand messaging, visual assets, and engagement management.'
  }
];

export default function ServicesPage() {
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Pixelary Services",
        "itemListElement": serviceList.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": service.title,
          "url": `https://www.pixelary.in/services/${service.slug}`
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
          <span style={{ color: '#ffffff' }}>Services</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Capabilities & Engineering</span>
          <h1 className={styles.title}>B2B Design & Software Services</h1>
          <p className={styles.tagline}>
            End-to-end web engineering, product design, and growth strategy. We partner directly with founders and product teams to craft scalable digital products.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {serviceList.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className={styles.sectionBlock} style={{ textDecoration: 'none', transition: 'border-color 0.2s ease, transform 0.2s ease' }}>
              <div style={{ fontSize: '1.8rem', color: '#38BDF8', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h2 className={styles.sectionTitle} style={{ fontSize: '1.25rem' }}>{service.title}</h2>
              <p className={styles.paragraph} style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {service.summary}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>
                <span>Explore capability</span>
                <FiArrowUpRight />
              </div>
            </Link>
          ))}
        </div>

        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Need a custom solution for your product?</h2>
          <p className={styles.ctaDescription}>
            Talk directly to the co-founders building your web product. We offer transparent timelines, high-speed execution, and top-tier code quality.
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
