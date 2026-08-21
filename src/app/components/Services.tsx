'use client';
import React, { useRef, useState } from 'react';
import { FiLayout, FiTrendingUp, FiSearch, FiShare2, FiLayers, FiSmartphone, FiLock } from 'react-icons/fi';
import styles from './Services.module.css';

const services = [
  {
    number: '01',
    name: 'Website Design & Development',
    description: 'Create stunning, user-friendly websites that enhance your brand’s online presence.',
    icon: <FiLayout />,
    link: 'https://brightpixel.in/web-design-company-in-pune/'
  },
  {
    number: '02',
    name: 'Digital Marketing',
    description: 'Boost your online reach with targeted strategies for better engagement.',
    icon: <FiTrendingUp />,
    link: 'https://brightpixel.in/best-digital-marketing-company-in-pune/'
  },
  {
    number: '03',
    name: 'SEO Services',
    description: 'Optimize your website for higher rankings and increased organic traffic.',
    icon: <FiSearch />,
    link: 'https://brightpixel.in/seo-company-in-pune/'
  },
  {
    number: '04',
    name: 'Social Media Managing',
    description: 'Engage your audience and build brand loyalty through strategic management.',
    icon: <FiShare2 />,
    link: 'https://brightpixel.in/social-media-marketing-company-in-pune/'
  },
  {
    number: '05',
    name: 'UI/UX Design Services',
    description: 'Improve user experience with intuitive and visually appealing interfaces.',
    icon: <FiLayers />,
    link: 'https://brightpixel.in/ui-ux-design-company-in-pune/'
  },
  {
    number: '06',
    name: 'Mobile Application',
    description: 'We offer Mobile App Design Services to carve your mobile app.',
    icon: <FiSmartphone />,
    link: 'https://brightpixel.in/mobile-app-development-company-in-pune/'
  },
  {
    number: '07',
    name: 'Cyber Security',
    description: 'Protect your digital assets with advanced security measures.',
    icon: <FiLock />,
    isLocked: true
  }
];

function BentoCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div 
      ref={cardRef}
      className={`${styles.serviceCard} ${gridClass} ${service.isLocked ? styles.serviceCardLocked : ''}`}
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
      </div>
    </div>
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
