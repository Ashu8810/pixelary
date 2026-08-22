import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './subpage.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.container} style={{ textAlign: 'center', padding: '8rem 1.5rem' }}>
        <span className={styles.badge}>404 Error</span>
        <h1 className={styles.title} style={{ fontSize: '4rem', marginTop: '1rem' }}>Page Not Found</h1>
        <p className={styles.tagline} style={{ margin: '1rem auto 2.5rem auto' }}>
          The page you are looking for doesn’t exist or has been moved. Explore our core services or case studies below.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className={styles.ctaButton}>
            Return Home
          </Link>
          <Link href="/services" className={styles.ctaButton} style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
            Explore Services
          </Link>
          <Link href="/work" className={styles.ctaButton} style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
            View Case Studies
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
