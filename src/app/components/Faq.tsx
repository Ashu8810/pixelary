'use client';

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './Faq.module.css';

const faqs = [
  {
    question: "What is Pixelary and what do you do?",
    answer: "Pixelary is a B2B design and development company focused on creating clean, functional, and scalable digital experiences. We partner with startups and established businesses to design, build, and optimize custom web products, mobile applications, and high-performance websites."
  },
  {
    question: "What services does Pixelary provide?",
    answer: "We provide end-to-end design and development solutions. This includes Custom Web Design & Development (React, Next.js), UI/UX Design, custom Web Applications, Mobile App Development, SEO optimization, and Digital Marketing strategies."
  },

  {
    question: "How do I start a project with Pixelary?",
    answer: "Starting a project is simple. You can send us a brief through our Contact form specifying your name, company, project type, budget, and description. We'll review your inquiry and get back to you within 24 hours to schedule a discovery call."
  },
  {
    question: "Where is Pixelary based and do you work remotely?",
    answer: "We are based in India but operate entirely remote-first, collaborating with clients worldwide. We use modern collaboration tools to ensure seamless communication, regular updates, and smooth project handoffs."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Got Questions?</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.activeItem : ''}`}
              >
                <button 
                  className={styles.faqQuestionButton} 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div 
                  className={styles.faqAnswerContainer}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
