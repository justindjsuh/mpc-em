'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Button from './ui/Button/Button';
import Layout from './ui/Layout/Layout';

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/visitor-information');
  };

  return (
    <Layout title="">
      <div className={styles.page}>
        <motion.div
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(-50%, -50%)' }}
        >
          <motion.h1
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            MONTGOMERY PRESBYTERIAN CHURCH
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            A community of Christ-followers.
          </motion.p>
          <motion.p
            className={styles.heroDesc2}
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            Step into faith, truth, and community.
          </motion.p>
          <motion.p
            className={styles.serviceTime}
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          >
            EM Service | 9:45 AM
          </motion.p>
          <motion.div
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
          >
            <Button
              text="Join Us For Worship"
              onClick={handleNavigate}
              theme="light"
              iconTheme="dark"
              filled
            />
          </motion.div>
        </motion.div>
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
