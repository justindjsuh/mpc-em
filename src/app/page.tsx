'use client';
import styles from './page.module.css';
import HeroView from './ui/Landing/HeroView';
import IntroDetails from './ui/Landing/IntroDetails';
import Ministries from './ui/Landing/Ministries/Ministries';
import Layout from './ui/Layout/Layout';

export default function Home() {
  return (
    <Layout title="">
      <HeroView />
      <IntroDetails />
      <div className={styles.transitionBar}>
        <p>Welcome to MPC EM!</p>
        <p className={styles.desktopDetails}>•</p>
        <p className={styles.desktopDetails}>860-930-6215</p>
        <p className={styles.desktopDetails}>•</p>
        <p className={styles.desktopDetails}>3260 Morris Rd, Lansdale, PA 19446</p>
      </div>
      <Ministries />
    </Layout>
  );
}
