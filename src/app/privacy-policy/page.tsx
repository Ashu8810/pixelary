import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../subpage.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pixelary B2B Web Studio',
  description: 'Read Pixelary’s Privacy Policy. Learn how we collect, process, and protect user data submitted via our contact form and measured via Google Analytics (GA4).',
  alternates: {
    canonical: 'https://www.pixelary.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Pixelary',
    description: 'Information regarding data handling, contact form processing, Google Analytics (GA4) usage, and user privacy rights.',
    url: 'https://www.pixelary.in/privacy-policy',
    siteName: 'Pixelary',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Pixelary',
    description: 'Information regarding data handling, contact form processing, Google Analytics (GA4) usage, and user privacy rights.',
  },
};

export default function PrivacyPolicyPage() {
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
            "name": "Privacy Policy",
            "item": "https://www.pixelary.in/privacy-policy"
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
          <span style={{ color: '#ffffff' }}>Privacy Policy</span>
        </nav>

        <header className={styles.hero}>
          <span className={styles.badge}>Legal & Transparency</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.tagline}>
            Last updated: August 2026. This Privacy Policy details how Pixelary collects, uses, and safeguards information when you visit pixelary.in or submit project inquiries.
          </p>
        </header>

        <div className={styles.legalBody}>
          <div className={styles.disclaimerBox}>
            <strong>Entity Note:</strong> Pixelary currently operates as an unregistered founder partnership led by Ashutosh Patel and Eshaan Agrawal in India (&quot;Pixelary&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). This policy outlines our data handling practices and will be formally updated upon formal corporate entity registration.
          </div>

          <h2>1. Information We Collect</h2>
          <p>
            When you interact with <strong>pixelary.in</strong>, we may collect the following categories of information:
          </p>
          <ul>
            <li><strong>Direct Form Submissions:</strong> When you complete our contact or consultation form, we collect your name, email address, company name, project type, budget range, and project brief details.</li>
            <li><strong>Automated Usage Data (Google Analytics 4):</strong> We utilize Google Analytics (GA4) to measure website traffic, user interactions, page views, session duration, device types, and geographic location (country level). GA4 uses cookies and anonymized identifiers.</li>
          </ul>

          <h2>2. How We Process and Use Your Information</h2>
          <p>
            We process collected information strictly for legitimate business purposes:
          </p>
          <ul>
            <li>To review project briefs and respond to consultation requests within 24 hours.</li>
            <li>To communicate regarding proposed design and development engagements.</li>
            <li>To analyze website performance, optimize user experience, and audit route traffic.</li>
          </ul>

          <h2>3. Third-Party Service Providers</h2>
          <p>
            We rely on trusted third-party service providers to power our website infrastructure:
          </p>
          <ul>
            <li><strong>Web3Forms:</strong> Contact form submissions are processed securely via Web3Forms API and forwarded to our designated email addresses (agrawaleshaan12@gmail.com).</li>
            <li><strong>Google Analytics 4 (GA4):</strong> Analyzes visitor engagement. Google processes data in accordance with their Privacy Policy. You can opt out of GA4 tracking by using browser ad-blockers or Google’s Analytics Opt-out Add-on.</li>
            <li><strong>Vercel / Hosting Providers:</strong> Web server hosting and static file delivery. Log data (IP address, user agent) may be automatically logged for security and rate-limiting purposes.</li>
          </ul>

          <h2>4. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses first-party and third-party cookies strictly required for website functionality and anonymous analytics telemetry (Google Analytics 4). We do not run advertising remarketing pixels or sell personal data to third parties.
          </p>

          <h2>5. Data Retention & Security</h2>
          <p>
            Contact form submissions are retained in our secure email inbox for as long as necessary to evaluate inquiries and execute client projects. We enforce HTTPS encryption across all routes and apply rate-limiting measures to prevent automated spam.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal information provided to us. To exercise these rights or raise privacy questions, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:agrawaleshaan12@gmail.com" style={{ color: '#38BDF8' }}>agrawaleshaan12@gmail.com</a>
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any revisions will be published directly on this page with an updated revision date.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
