"use client";
import Link from 'next/link';
import { 
  FaReact, 
  FaNodeJs, 
  FaGit, 
  FaNpm 
} from "react-icons/fa";

import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiSupabase, 
  SiNotion, 
  SiGithubactions 
} from "react-icons/si";
import Header from './components/Header';
import styles from './page.module.css';
import Services from './components/Services';
import Members from './components/Members';
import Works from './components/Works';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

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
          Pixelary is a B2B design and development company focused on creating clean, functional, and scalable digital experiences.
        </p>

        <div className={styles.techStackSection}>
          <p className={styles.techStackLabel}>Stack</p>
          <div className={styles.techStackGrid}>
            <span title="React" style={{ color: '#61DAFB' }}><FaReact /></span>
            <span title="Next.js" style={{ color: '#000000' }}><SiNextdotjs /></span>
            <span title="TypeScript" style={{ color: '#3178C6' }}><SiTypescript /></span>
            <span title="Tailwind CSS" style={{ color: '#38BDF8' }}><SiTailwindcss /></span>

            <span title="Node.js" style={{ color: '#339933' }}><FaNodeJs /></span>
            <span title="PostgreSQL" style={{ color: '#4169E1' }}><SiPostgresql /></span>
            <span title="MongoDB" style={{ color: '#47A248' }}><SiMongodb /></span>
            <span title="Firebase" style={{ color: '#FFCA28' }}><SiFirebase /></span>
            <span title="Supabase" style={{ color: '#3ECF8E' }}><SiSupabase /></span>

            <span title="Git" style={{ color: '#F05032' }}><FaGit /></span>
            <span title="GitHub Actions" style={{ color: '#2088FF' }}><SiGithubactions /></span>
            {/* <span title="Docker" style={{ color: '#2496ED' }}><FaDocker /></span> */}
            <span title="Notion" style={{ color: '#000000' }}><SiNotion /></span>
            <span title="npm" style={{ color: '#CB3837' }}><FaNpm /></span>
          </div>
        </div>

        <div className={styles.heroPill}>
          <span className={styles.pillText}>
            Have a project in mind?
          </span>
          <Link href="#contact" className={styles.pillButton}>
            Get in touch
          </Link>
        </div>
      </section>

      <Services />
      <div className={styles.sectionDivider}></div>
      <Members />
      <div className={styles.sectionDivider}></div>
      <Works />
      <div className={styles.sectionDivider}></div>
      <Faq />
      <div className={styles.sectionDivider}></div>
      <Contact />
      <Footer />

    </main>
  )
}
