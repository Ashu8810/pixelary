'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Members.module.css';

const members = [
  {
    name: 'Ashutosh patel',
    image: '/members/siddhartha.png'
  },
  {
    name: 'Eshaan Agrawal',
    image: '/members/rachel.png'
  },
  // {
  //   name: 'Prasannadeep Das',
  //   image: '/members/prasannadeep.png'
  // },
  // {
  //   name: 'Adyatha Bhat',
  //   image: '/members/adyatha.png'
  // },
  // {
  //   name: 'Arjun Raghavan',
  //   image: '/members/arjun.png'
  // }
];

export default function Members() {
  return (
    <section className={styles.membersSection}>
      <h2 className={styles.title}>Our Team</h2>
      <div className={styles.membersGrid}>
        {members.map((member, index) => (
          <div key={index} className={styles.memberCard}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.avatar}
                />
              </div>
            </div>
            <span className={styles.memberName}>{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
