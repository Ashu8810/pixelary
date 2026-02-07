import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaAws, FaFigma } from "react-icons/fa";
import { SiVercel, SiPython, SiC, SiReplit } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoRocketSharp } from "react-icons/io5"; // Antigravity
import { GoHeartFill } from "react-icons/go"; // Lovable
import styles from './page.module.css'
import Roadmap from './components/Roadmap';
import Members from './components/Members';
import CuratedPortfolios from './components/CuratedPortfolios';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <span className={styles.logoMain}>PIXELARY</span>
              <span className={styles.logoSub}>DESIGN & DEVELOPMENT</span>
            </div>
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="#">Work</Link>
            <Link href="#">Studio</Link>
            <Link href="#">Insights</Link>
          </div>

          <div className={styles.headerActions}>
            <Link href="mailto:pixelarystudio@gmail.com" className={styles.ctaButton}>
              Start a project
            </Link>
          </div>
        </nav>
      </header>

      <section className={styles.hero}>
        {/* Background Grid Lines - Scoped to Hero */}
        <div className={styles.heroGrid}>
          <div className={styles.heroGridLine}></div>
          <div className={styles.heroGridLine}></div>
          <div className={styles.heroGridLine}></div>
          <div className={styles.heroGridLine}></div>
          <div className={styles.heroGridLine}></div>
          <div className={styles.heroGridLine}></div>
        </div>

        <h1 className={styles.hook}>
          Designing and building <br />
          <span className={styles.hookHighlight}>__modern web products.</span>
        </h1>
        <p className={styles.description}>
          Pixelary is a design and development studio focused on creating clean, functional, and scalable digital experiences.
        </p>

        <div className={styles.techStackSection}>
          <p className={styles.techStackLabel}>Stack</p>
          <div className={styles.techStackGrid}>
            <span title="GitHub" style={{ color: '#000000' }}><FaGithub /></span>
            <span title="Vercel" style={{ color: '#000000' }}><SiVercel /></span>
            <span title="Python" style={{ color: '#3776AB' }}><SiPython /></span>
            <span title="C" style={{ color: '#00599C' }}><SiC /></span>
            <span title="Framer Motion" style={{ color: '#0055FF' }}><TbBrandFramerMotion /></span>
            <span title="Figma" style={{ color: '#F24E1E' }}><FaFigma /></span>
            <span title="AWS" style={{ color: '#FF9900' }}><FaAws /></span>
            <span title="Antigravity" style={{ color: '#8A2BE2' }}><IoRocketSharp /></span>
            <span title="Replit" style={{ color: '#F26207' }}><SiReplit /></span>
            <span title="Lovable" style={{ color: '#FF4081' }}><GoHeartFill /></span>
          </div>
        </div>

        <div className={styles.heroPill}>
          <span className={styles.pillText}>
            Have a project in mind?
          </span>
          <Link href="mailto:pixelarystudio@gmail.com" className={styles.pillButton}>
            Get in touch
          </Link>
        </div>
      </section>

      <Members />
      <div className={styles.sectionDivider}></div>
      <Roadmap />
      <div className={styles.sectionDivider}></div>
      <CuratedPortfolios />

    </main>
  )
}
