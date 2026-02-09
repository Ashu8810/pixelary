import Link from 'next/link';
import React from 'react';
import styles from './CuratedPortfolios.module.css';
import { FiSearch, FiFilter, FiBookmark, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma, SiNodedotjs, SiMongodb, SiExpress, SiFlutter, SiDart, SiFirebase, SiRedux, SiGraphql, SiOpenai, SiVercel, SiCloudflare, SiHostinger, SiFramer } from 'react-icons/si';

const portfolios = [
  {
    id: 1,
    name: 'Elyaitra',
    location: 'India',
    members: 'Eshaan Agrawal, Ashutosh Patel, Ryan P & Aditya Chauhan',
    // experience: '6 years',
    banner: '/portfolios/elyaitra.png',
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

    banner: '/portfolios/Smart_mess.png',
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

    banner: '/portfolios/Doge_challenger.png',
    avatar: '/portfolios/Ashu.png',
    technologies: [<SiReact key="react" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiFramer key="framer" />],
    isFeatured: true,
    link: 'https://dodgechallanger.in/'
  },
  // {
  //   id: 4,
  //   name: 'Fintech App',
  //   location: 'Singapore',
  //   members: 'Alex Chen',
  //   experience: '8 years',
  //   banner: '/portfolios/banner4.png',
  //   avatar: '/portfolios/avatar1.png',
  //   technologies: [<SiFlutter key="flutter" />, <SiDart key="dart" />, <SiFirebase key="firebase" />],
  //   isFeatured: true,
  //   link: '#'
  // },
  // {
  //   id: 5,
  //   name: 'Health Tracker',
  //   location: 'USA',
  //   members: 'Sarah Jordan',
  //   experience: '4 years',
  //   banner: '/portfolios/banner5.png',
  //   avatar: '/portfolios/avatar3.png',
  //   technologies: [<SiReact key="react" />, <SiRedux key="redux" />, <SiGraphql key="graphql" />],
  //   isFeatured: false,
  //   link: '#'
  // }
];

export default function CuratedPortfolios() {
  return (
    <section id="work" className={styles.curatedSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Curated Projects</h2>

        <div className={styles.filterBar}>
          <div className={styles.actionsRow}>
            <button className={styles.actionButton}>
              <FiFilter /> Filters
            </button>
            <div className={styles.searchWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input type="text" placeholder="Search Members" className={styles.searchInput} />
            </div>
          </div>
        </div>

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
                  <div className={styles.avatarWrapper}>
                    <img src={item.avatar} alt={item.name} className={styles.avatarImg} />
                    <div className={styles.profileBadge}>
                      <FiBriefcase />
                    </div>
                  </div>

                  <div className={styles.profileInfo}>
                    <div className={styles.profileHeader}>
                      <h3 className={styles.profileName}>{item.name} <span className={styles.dot}>.</span> <span className={styles.country}>{item.location}</span></h3>
                    </div>
                    <p className={styles.roleText}>{item.members}</p>
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
