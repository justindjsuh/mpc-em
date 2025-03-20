'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Layout from './ui/Layout/Layout';

export default function Home() {
  return (
    <Layout title="">
      <div className={styles.page}>
        <Image
          src="/landing_church.png"
          alt="an interior of the church chapel"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
          width={1300}
          height={800}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </Layout>
  );
}
