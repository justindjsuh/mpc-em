'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';
import FeaturedEvents from './ui/Landing/FeaturedEvents/FeaturedEvents';
import HeroView from './ui/Landing/HeroView';
import IntroDetails from './ui/Landing/IntroDetails';
import Ministries from './ui/Landing/Ministries/Ministries';
import RecentSermon from './ui/Landing/RecentSermon/RecentSermon';
import Layout from './ui/Layout/Layout';
import NewsletterSignup from './ui/SharedComponents/NewsletterSignup/NewsletterSignup';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = () => {
    router.push('/visitor-information');
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/landing_church.webp"
          type="image/webp"
        />
      </Head>
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
        <FeaturedEvents />
        <RecentSermon />
        <NewsletterSignup />
        <motion.div
          className={styles.planAVisit}
          onClick={handleNavigation}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 1,
            type: 'spring',
            stiffness: 100, // Makes it feel bouncy yet controlled
            damping: 15, // Slows it down for a smooth finish
            mass: 0.75, // Reduces abrupt movement
          }}
        >
          Plan A Visit
        </motion.div>
      </Layout>
    </>
  );
}
