'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Members.module.css';

const members = [
  {
    name: 'Ashutosh patel',
    image: '/members/Ashu.png',
    link: 'https://ashutoshpatel.me'
  },
  {
    name: 'Eshaan Agrawal',
    image: '/members/eshaan.png',
    link: 'https://eshaanagrawal.me'
  },
  {
    name: 'Aditya Chauhan',
    image: '/members/Aditya_chaunahan.png',
    link: '#'
  },
  {
    name: 'Ryan P',
    image: '/members/ryan.png',
    link: '#'
  },
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
          <Link href={member.link || '#'} key={index} className={styles.memberCard}>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
