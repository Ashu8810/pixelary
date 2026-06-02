import Link from 'next/link';
import React from 'react';
import styles from './CuratedPortfolios.module.css';
import { FiBookmark, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiNodedotjs, SiMongodb, SiExpress, SiFlutter, SiDart, SiFirebase, SiRedux, SiGraphql, SiOpenai, SiVercel, SiCloudflare, SiHostinger, SiFramer, SiPython, SiCss, SiJavascript, SiHtml5, SiGithubactions, SiFastapi, SiVite, SiFlask } from 'react-icons/si';

const portfolios = [
  {
    id: 1,
    name: 'Elyaitra',
    location: 'India',
    members: 'Eshaan Agrawal, Ashutosh Patel, Ryan P & Aditya Chauhan',
    // experience: '6 years',
    banner: '/portfolios/elyaitra.svg',
    avatar: '/portfolios/elyaitra1.png',
    technologies: [<SiReact key="react" title="React" />, <SiTypescript key="ts" title="TypeScript" />, <SiNextdotjs key="next" title="Next.js" />, <SiTailwindcss key="tailwind" title="Tailwind CSS" />, <SiOpenai key="openai" title="OpenAI" />, <SiNodedotjs key="node" title="Node.js" />, <SiVercel key="vercel" title="Vercel" />],
    isFeatured: true,
    link: 'https://elyaitra.com'
  },
  {
    id: 2,
    name: 'Smart Hostel Mess Management System',
    location: 'India',
    members: 'Ashutosh Patel',

    banner: '/portfolios/smart_hostel_mess_management_system.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiNodedotjs key="node" />, <SiCloudflare key="cloudflare" />, <SiHostinger key="hostinger" />],
    isFeatured: false,
    link: 'https://smarthostelmess.vercel.app/'
  },
  {
    id: 3,
    name: 'Dodge Challenger',
    location: 'India',
    members: 'Ashutosh Patel',

    banner: '/portfolios/dodge_challenger.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiFramer key="framer" />],
    isFeatured: true,
    link: 'https://dodgechallanger.in/'
  },
  {
    id: 4,
    name: 'CommitIQ',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/commitiq.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiTypescript key="typescript" title="TypeScript" />, <SiPython key="python" title="Python" />, <SiCss key="css" title="CSS" />, <SiJavascript key="javascript" title="JavaScript" />, <SiHtml5 key="html" title="HTML" />, <SiReact key="react" title="React" />, <SiGithubactions key="githubactions" title="GitHub Actions" />, <SiFastapi key="fastapi" title="FastAPI" />, <SiVite key="vite" title="Vite" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/CommitIQ---'
  },
  {
    id: 5,
    name: 'Dark Mode',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/dark_mode.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiJavascript key="javascript" title="JavaScript" />, <SiHtml5 key="html" title="HTML" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/Dark-Mode'
  },
  {
    id: 6,
    name: 'Eshaanag',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/eshaanag.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiReact key="react" title="React" />, <SiExpress key="express" title="Express" />, <SiFlask key="flask" title="Flask" />, <SiFastapi key="fastapi" title="FastAPI" />, <SiVite key="vite" title="Vite" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/eshaanag'
  },
  {
    id: 7,
    name: 'Eshaanag.Github.Io',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/eshaanag_github_io.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiHtml5 key="html" title="HTML" />, <SiJavascript key="javascript" title="JavaScript" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/eshaanag.github.io'
  },
  {
    id: 8,
    name: 'Kernel Kondom',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/kernel_kondom.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiPython key="python" title="Python" />, <SiJavascript key="javascript" title="JavaScript" />, <SiCss key="css" title="CSS" />, <SiHtml5 key="html" title="HTML" />, <SiFlask key="flask" title="Flask" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/kernel-kondom'
  },
  {
    id: 9,
    name: 'Marketing Campaign',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/marketing_campaign.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiHtml5 key="html" title="HTML" />],
    isFeatured: false,
    link: 'https://marketing-campaign-one.vercel.app'
  },
  {
    id: 10,
    name: 'RadiX AI',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/radix_ai.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiTypescript key="typescript" title="TypeScript" />, <SiJavascript key="javascript" title="JavaScript" />, <SiCss key="css" title="CSS" />, <SiReact key="react" title="React" />, <SiNextdotjs key="nextjs" title="Next.js" />, <SiTailwindcss key="tailwindcss" title="Tailwind CSS" />, <SiGithubactions key="githubactions" title="GitHub Actions" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/radix-ai'
  },
  {
    id: 11,
    name: 'VibeGuard',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/vibeguard.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiTypescript key="typescript" title="TypeScript" />, <SiCss key="css" title="CSS" />, <SiHtml5 key="html" title="HTML" />, <SiJavascript key="javascript" title="JavaScript" />, <SiReact key="react" title="React" />, <SiNextdotjs key="nextjs" title="Next.js" />, <SiTailwindcss key="tailwindcss" title="Tailwind CSS" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/vibeguard'
  },
  {
    id: 12,
    name: 'Vibeguard Test',
    location: 'India',
    members: 'Eshaan Agrawal',
    banner: '/portfolios/vibeguard_test.svg',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiJavascript key="javascript" title="JavaScript" />, <SiExpress key="express" title="Express" />],
    isFeatured: false,
    link: 'https://github.com/eshaanag/vibeguard-test'
  }
];

export default function CuratedPortfolios() {
  return (
    <section id="work" className={styles.curatedSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Curated Projects</h2>



        <div className={styles.portfoliosGrid}>
          {portfolios.map((item) => (
            <Link href={item.link} key={item.id} className={styles.cardLink}>
              <div className={styles.portfolioCard}>
                <div className={styles.cardBanner}>
                  <img src={item.banner} alt={item.name} className={styles.bannerImg} />
                  <button className={styles.bookmarkBtn}>
                    <FiBookmark />
                  </button>
                </div>

                <div className={`${styles.cardContent} ${!item.avatar ? styles.noAvatar : ''}`}>
                  <div className={styles.profileInfo}>
                    <div className={styles.profileHeader}>
                      <h3 className={styles.profileName}>{item.name} <span className={styles.dot}>.</span> <span className={styles.country}>{item.location}</span></h3>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>

                    <div className={styles.brandLogos}>
                      {item.technologies.map((tech, i) => (
                        <span key={i} className={styles.brandIcon}>{tech}</span>
                      ))}
                      {item.isFeatured && (
                          <div className={styles.featuredBadge}>
                              <div className={styles.featuredInner}></div>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
