import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../subpage.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Pixelary B2B Web Studio',
  description: 'Read Pixelary’s Terms and Conditions. Guidelines governing website usage, service engagements, intellectual property ownership, and liability limitations.',
  alternates: {
    canonical: 'https://www.pixelary.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | Pixelary',
    description: 'Terms of service governing pixelary.in website usage, design & development project engagements, intellectual property rights, and governing law (India).',
    url: 'https://www.pixelary.in/terms-and-conditions',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Pixelary',
    description: 'Terms of service governing pixelary.in website usage, design & development project engagements, intellectual property rights, and governing law (India).',
  },
};

export default function TermsAndConditionsPage() {
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
            "name": "Terms & Conditions",
            "item": "https://www.pixelary.in/terms-and-conditions"
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
          <span style={{ color: '#ffffff' }}>Terms & Conditions</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Legal Agreement</span>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.tagline}>
            Last updated: August 2026. Please review these terms governing your access to pixelary.in and client engagements with Pixelary.
          </p>
        </header>

        <div className={styles.legalBody}>
          <div className={styles.disclaimerBox}>
            <strong>Entity Note:</strong> Pixelary currently operates as an unregistered founder partnership led by Ashutosh Patel and Eshaan Agrawal in India (&quot;Pixelary&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These terms apply to all visitors and client project inquiries.
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing <strong>pixelary.in</strong>, submitting a consultation brief, or entering into a service agreement with Pixelary, you agree to be bound by these Terms & Conditions.
          </p>

          <h2>2. Services & Project Engagements</h2>
          <p>
            Pixelary provides custom B2B web design, full-stack software development, UI/UX design, mobile application engineering, and technical SEO services. Specific project deliverables, timelines, milestone payments, and acceptance criteria are governed by individual client proposals or Statement of Work (SOW) documents agreed upon prior to project commencement.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All custom source code, design assets, and documentation created specifically for a client under a signed engagement agreement transfer to client ownership upon full payment of agreed project fees.
          </p>
          <p>
            The branding, visual identity, website layout, graphics, text copy, and proprietary helper utilities on <strong>pixelary.in</strong> remain the sole intellectual property of Pixelary.
          </p>

          <h2>4. Website Content & Showcase Projects</h2>
          <p>
            Case studies, portfolio cards, and client work highlighted on this website (such as CommitIQ, TEDxBMSIT, and Dodge Challenger) represent real shipped software projects engineered by our co-founders. External links to client domains are provided for demonstration purposes.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Pixelary shall not be liable for any indirect, incidental, or consequential damages resulting from the use of pixelary.in or temporary website downtime.
          </p>

          <h2>6. Governing Law & Dispute Resolution</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or in connection with these terms shall be subject to informal co-founder negotiation first and, if unresolved, the jurisdiction of courts in India.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:agrawaleshaan12@gmail.com" style={{ color: '#38BDF8' }}>agrawaleshaan12@gmail.com</a> / <a href="mailto:ashutoshpatel0044@gmail.com" style={{ color: '#38BDF8' }}>ashutoshpatel0044@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
