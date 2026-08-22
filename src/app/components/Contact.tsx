'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiClock, FiMapPin, FiCheck } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botcheck, setBotcheck] = useState(false);
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

    // Spam honeypot check: If botcheck is filled by automated script, drop submission silently
    if (botcheck) {
      setSubmitted(true);
      return;
    }

    if (isSubmitting) return;

    // Input sanitization & boundary checks
    const trimmedName = formData.name.trim().slice(0, 100);
    const trimmedEmail = formData.email.trim().slice(0, 100);
    const trimmedCompany = formData.company.trim().slice(0, 100);
    const trimmedDescription = formData.description.trim().slice(0, 3000);

    if (!trimmedName || !trimmedEmail || !trimmedDescription) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '91e234f0-d412-4609-a135-76c32c5c0881',
          name: trimmedName,
          email: trimmedEmail,
          company: trimmedCompany,
          projectType: formData.projectType,
          budget: formData.budget,
          description: trimmedDescription,
          botcheck: botcheck,
          subject: `Project Inquiry from ${trimmedName}${trimmedCompany ? ` — ${trimmedCompany}` : ''}`
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
    } finally {
      setIsSubmitting(false);
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
            {/* Honeypot field for bot detection */}
            <input 
              type="checkbox" 
              name="botcheck" 
              className="hidden" 
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              onChange={e => setBotcheck(e.target.checked)} 
            />

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
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
                  maxLength={100}
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
                  maxLength={100}
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
                maxLength={3000}
                placeholder="Brief overview of your project, goals, and timeline..."
                className={styles.formTextarea}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? 'Sending...' : 'Send project brief'}
            </button>
            <p className={styles.formNote}>
              We&apos;ll review your brief and schedule a discovery call within 24 hours. By submitting, you agree to our <Link href="/privacy-policy" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy Policy</Link>.
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
