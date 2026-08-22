'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FiLayout, FiTrendingUp, FiSearch, FiShare2, FiLayers, FiSmartphone, FiLock, FiArrowUpRight } from 'react-icons/fi';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    name: 'Website Design & Development',
    description: 'Create stunning, user-friendly websites that enhance your brand’s online presence.',
    icon: <FiLayout />,
    link: '/services/website-design-development'
  },
  {
    number: '02',
    name: 'Digital Marketing',
    description: 'Boost your online reach with targeted strategies for better engagement.',
    icon: <FiTrendingUp />,
    link: '/services/digital-marketing'
  },
  {
    number: '03',
    name: 'SEO Services',
    description: 'Optimize your website for higher rankings and increased organic traffic.',
    icon: <FiSearch />,
    link: '/services/seo-services'
  },
  {
    number: '04',
    name: 'Social Media Management',
    description: 'Engage your audience and build brand loyalty through strategic management.',
    icon: <FiShare2 />,
    link: '/services/social-media-management'
  },
  {
    number: '05',
    name: 'UI/UX Design Services',
    description: 'Improve user experience with intuitive and visually appealing interfaces.',
    icon: <FiLayers />,
    link: '/services/ui-ux-design'
  },
  {
    number: '06',
    name: 'Mobile Application',
    description: 'We offer Mobile App Design & Development Services to carve your mobile app.',
    icon: <FiSmartphone />,
    link: '/services/mobile-app-development'
  },
  {
    number: '07',
    name: 'Cyber Security',
    description: 'Protect your digital assets with advanced security measures.',
    icon: <FiLock />,
    link: '/services/cyber-security'
  }
];

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  isLocked?: boolean;
}

function BentoCard({ service, index }: { service: ServiceItem, index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Asymmetrical Bento Grid logic
  let gridClass = styles.cardSpan1;
  if (index === 0) gridClass = styles.cardSpan2x2;
  else if (index === 1 || index === 4) gridClass = styles.cardSpan2x1;

  return (
    <Link 
      ref={cardRef}
      href={service.link}
      className={`${styles.serviceCard} ${gridClass}`}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      <div className={styles.cardContent}>
        <div className={styles.serviceCardHeader}>
          <div className={styles.serviceIcon}>{service.icon}</div>
          <span className={styles.serviceNumber}>{service.number}</span>
        </div>
        <div className={styles.serviceTextContainer}>
          <h3 className={styles.serviceName}>{service.name}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
        </div>
        <div className={styles.readMoreContainer}>
          <span>Learn more</span>
          <FiArrowUpRight className={styles.readMoreArrow} />
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <div className={styles.servicesSectionWrapper}>
      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.sectionLabel}>What we do</p>
            <h2 className={styles.title}>Services</h2>
          </div>
          <p className={styles.subtitle}>
            End-to-end design and development — from concept to deployment. Building digital experiences that drive growth.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <BentoCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
