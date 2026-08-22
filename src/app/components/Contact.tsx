'use client';

import React, { useState } from 'react';
import { FiMail, FiClock, FiMapPin, FiCheck } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '91e234f0-d412-4609-a135-76c32c5c0881',
          ...formData,
          subject: `Project Inquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ''}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Error submitting form", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <p className={styles.sectionLabel}>Get in touch</p>
          <h2 className={styles.title}>Start a project</h2>
          <p className={styles.subtitle}>
            Have an idea or a project in mind? Tell us about it — we&apos;ll review your brief and get back to you within 24 hours.
          </p>

          <div className={styles.contactMeta}>
            <div className={styles.contactMetaItem}>
              <div className={styles.contactMetaIcon}><FiMail /></div>
              <div className={styles.contactMetaText}>
                <span className={styles.contactMetaLabel}>Email</span>
                <span className={styles.contactMetaValue}>agrawaleshaan12@gmail.com</span>
              </div>
            </div>
            <div className={styles.contactMetaItem}>
              <div className={styles.contactMetaIcon}><FiClock /></div>
              <div className={styles.contactMetaText}>
                <span className={styles.contactMetaLabel}>Response time</span>
                <span className={styles.contactMetaValue}>Within 24 hours</span>
              </div>
            </div>
            <div className={styles.contactMetaItem}>
              <div className={styles.contactMetaIcon}><FiMapPin /></div>
              <div className={styles.contactMetaText}>
                <span className={styles.contactMetaLabel}>Location</span>
                <span className={styles.contactMetaValue}>India — Remote worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name (optional)"
                  className={styles.formInput}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Project type</label>
                <select
                  name="projectType"
                  className={styles.formSelect}
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a type</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Design to Code">Design to Code</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Budget range</label>
              <select
                name="budget"
                className={styles.formSelect}
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select a range (optional)</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $5,000">$1,000 – $5,000</option>
                <option value="$5,000 - $15,000">$5,000 – $15,000</option>
                <option value="$15,000+">$15,000+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Tell us about your project *</label>
              <textarea
                name="description"
                required
                placeholder="Brief overview of your project, goals, and timeline..."
                className={styles.formTextarea}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send project brief
            </button>
            <p className={styles.formNote}>
              We&apos;ll review your brief and schedule a discovery call within 24 hours.
            </p>
          </form>
        ) : (
          <div className={`${styles.contactForm} ${styles.successMessage}`}>
            <div className={styles.successIcon}><FiCheck /></div>
            <h3 className={styles.successTitle}>Brief sent!</h3>
            <p className={styles.successText}>
              Thanks for reaching out. We&apos;ll review your project brief and get back to you within 24 hours to schedule a discovery call.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
