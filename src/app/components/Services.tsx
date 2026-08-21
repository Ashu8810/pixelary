import React from 'react';
import { FiLayout, FiPenTool, FiTrendingUp, FiSearch, FiBox, FiShare2, FiLayers, FiSmartphone, FiPrinter, FiArrowRight, FiLock } from 'react-icons/fi';
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
    description: 'Engage your audience and build brand loyalty through strategic social media management.',
    icon: <FiShare2 />,
    link: 'https://brightpixel.in/social-media-marketing-company-in-pune/'
  },
  {
    number: '05',
    name: 'UI/UX Design Services',
    description: 'Improve user experience with intuitive and visually appealing designs.',
    icon: <FiLayers />,
    link: 'https://brightpixel.in/ui-ux-design-company-in-pune/'
  },
  {
    number: '06',
    name: 'Mobile Application Development',
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

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <p className={styles.sectionLabel}>What we do</p>
      <h2 className={styles.title}>Services</h2>
      <p className={styles.subtitle}>
        End-to-end design and development — from concept to deployment.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} ${service.isLocked ? styles.serviceCardLocked : ''}`}>
            <div className={styles.serviceCardHeader}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div>
                <span className={styles.serviceNumber}>{service.number}</span>
                <h3 className={styles.serviceName}>{service.name}</h3>
              </div>
            </div>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
