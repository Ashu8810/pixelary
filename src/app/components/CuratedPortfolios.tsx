import Link from 'next/link';
import React from 'react';
import styles from './CuratedPortfolios.module.css';
import { FiSearch, FiFilter, FiBookmark, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { FaMicrosoft, FaGoogle } from 'react-icons/fa';
import { SiFlipkart, SiSwiggy, SiZomato, SiMeta } from 'react-icons/si';

const portfolios = [
  {
    id: 1,
    name: 'Elyaitra',
    location: 'India',
    members: 'Eshaan Agrawal, Ashutosh Patel, Ryan P & Aditya Chauhan',
    // experience: '6 years',
    banner: '/portfolios/elyaitra.png',
    avatar: '/portfolios/elyaitra1.png',
    brands: [<FaMicrosoft key="ms" />, <FaGoogle key="google" />],
    isFeatured: true,
    link: 'https://elyaitra.com'
  },
  {
    id: 2,
    name: 'Pixelary',
    location: 'India',
    members: 'Ayush Dhibar',
    experience: '',
    banner: '/portfolios/banner2.png',
    avatar: '/portfolios/avatar2.png',
    brands: [<SiSwiggy key="swiggy" />],
    isFeatured: false,
    link: '#'
  },
  {
    id: 3,
    name: 'Glancel',
    location: 'India',
    members: 'Gautami Duvve',
    experience: '5 years',
    banner: '/portfolios/banner3.png',
    avatar: '/portfolios/avatar3.png',
    brands: [<SiMeta key="meta" />],
    isFeatured: true,
    link: '#'
  },
  {
    id: 4,
    name: 'Fintech App',
    location: 'Singapore',
    members: 'Alex Chen',
    experience: '8 years',
    banner: '/portfolios/banner4.png',
    avatar: '/portfolios/avatar1.png',
    brands: [<FaGoogle key="google" />, <FaMicrosoft key="ms" />],
    isFeatured: true,
    link: '#'
  },
  {
    id: 5,
    name: 'Health Tracker',
    location: 'USA',
    members: 'Sarah Jordan',
    experience: '4 years',
    banner: '/portfolios/banner5.png',
    avatar: '/portfolios/avatar3.png',
    brands: [<SiMeta key="meta" />],
    isFeatured: false,
    link: '#'
  }
];

export default function CuratedPortfolios() {
  return (
    <section className={styles.curatedSection}>
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
                    <div className={styles.experienceInfo}>
                      {item.experience && (
                        <>
                          <span className={styles.expYears}>{item.experience}</span>
                          <span className={styles.expLabel}>Experience</span>
                        </>
                      )}
                    </div>
                    <div className={styles.brandLogos}>
                      {item.brands.map((brand, i) => (
                        <span key={i} className={styles.brandIcon}>{brand}</span>
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
