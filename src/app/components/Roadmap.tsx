'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Roadmap.module.css';
import { FiLayers, FiCpu, FiCode, FiZap, FiAnchor, FiTarget, FiGrid, FiArrowRight } from "react-icons/fi";

const roadmapData = [
  {
    id: 'intro',
    label: null,
    heading: 'Pixelary — How We Think and Work',
    content: <p>A simple, product-driven approach to design and development.</p>,
    type: 'intro',
    icon: null,
    image: null
  },
  {
    id: 'foundation',
    label: '01 — Foundation',
    heading: 'Bridging design and development',
    content: (
      <>
        <p>Pixelary was created to bring design thinking and engineering execution together.</p>
        <p>We believe strong products are built when thoughtful design meets solid engineering. Our focus is clarity, usability, and execution — not unnecessary complexity.</p>
      </>
    ),
    type: 'node',
    icon: <FiAnchor />,
    image: '/roadmap/foundation.png'
  },
  {
    id: 'capabilities',
    label: '02 — Capabilities',
    heading: 'What we build',
    content: (
      <>
        <div className={styles.compactList}>
          <div>UI/UX design for web products</div>
          <div>Website and front-end development</div>
          <div>Design-to-code execution</div>
          <div>Clean, responsive, performance-focused builds</div>
        </div>
        <p className={styles.note}>Each project is handled end-to-end — from concept to deployment.</p>
      </>
    ),
    type: 'node',
    icon: <FiLayers />,
    image: '/roadmap/capabilities.png'
  },
  {
    id: 'process',
    label: '03 — Process',
    heading: 'How we work',
    content: (
      <div className={styles.processSteps}>
        <div className={styles.step}>
          <span className={styles.stepNum}>01 Understand</span>
          <span className={styles.stepDesc}>Define the problem and product goals</span>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>02 Design</span>
          <span className={styles.stepDesc}>Create clear, functional interfaces</span>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>03 Build</span>
          <span className={styles.stepDesc}>Develop reliable, scalable front-end solutions</span>
        </div>
        <div className={styles.step}>
          <span className={styles.stepNum}>04 Refine</span>
          <span className={styles.stepDesc}>Improve details, performance, and usability</span>
        </div>
      </div>
    ),
    type: 'node',
    icon: <FiTarget />,
    image: '/roadmap/process.png'
  },
  {
    id: 'work',
    label: '04 — In Progress',
    heading: 'Work and process',
    content: (
      <>
        <p>Pixelary documents its work openly.</p>
        <p>This includes design explorations, development builds, iterations, refinements, and ongoing improvements.</p>
        <p className={styles.note}>Current work and progress can be explored through the links below.</p>
      </>
    ),
    type: 'node',
    icon: <FiCode />,
    image: '/roadmap/work.png'
  },
  {
    id: 'philosophy',
    label: null,
    heading: 'Built with intention',
    content: <p>Pixelary focuses on building things that are simple, usable, and built to last.</p>,
    type: 'outro',
    icon: null,
    image: null
  }
];

export default function Roadmap() {
  const [activeId, setActiveId] = useState<string>('intro');
  const observerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute('data-id') || '');
          }
        });
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px', // Strict center focus
        threshold: 0
      }
    );

    Object.values(observerRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.line}></div>
      
      <div className={styles.nodesWrapper}>
        {roadmapData.map((item) => {
          const isActive = activeId === item.id;
          
          return (
            <div 
              key={item.id}
              ref={(el) => { observerRefs.current[item.id] = el; }}
              data-id={item.id}
              className={`${styles.node} ${isActive ? styles.active : ''} ${styles[item.type]}`}
            >
              <div className={styles.markerColumn}>
                <div className={styles.marker}></div>
              </div>

              <div className={styles.mainGrid}>
                <div className={styles.contentColumn}>
                  {item.icon && <div className={styles.nodeIcon}>{item.icon}</div>}
                  <div className={styles.textContent}>
                      {item.label && <div className={styles.label}>{item.label}</div>}
                      <div className={styles.heading}>{item.heading}</div>
                      <div className={styles.body}>{item.content}</div>
                  </div>
                </div>

                {item.image && (
                  <div className={styles.graphicColumn}>
                    <div className={styles.imageWrapper}>
                      <img src={item.image} alt={item.heading} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
