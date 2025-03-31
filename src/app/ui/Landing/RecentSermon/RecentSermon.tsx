'use client';
import type { YoutubeVideo } from '@/app/lib/definitions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import styles from './RecentSermon.module.css';

const RecentSermon: React.FC = () => {
  const [sermon, setSermon] = useState<YoutubeVideo | null>(null);
  const router = useRouter();

  const fetchLatestSermon = async () => {
    const res = await fetch('/api/sermons?type=latest');
    const data = await res.json();
    setSermon(data[0]);
  };

  const handleNavigation = () => {
    router.push('/sermons');
  };

  useEffect(() => {
    fetchLatestSermon();
  }, []);

  return (
    <div className={styles.sermonsContainer}>
      <div className={styles.youtubeContainer}>
        <motion.a
          href={sermon ? `https://www.youtube.com/watch?v=${sermon.id.videoId}` : ''}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
        >
          <Image
            alt="Latest Sermon Thumbnail"
            src="/youtube_img.png"
            fill
          />
        </motion.a>
      </div>
      <motion.div
        className={styles.sermonText}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <div className={styles.sermonDetailText}>
          <p className={styles.sermonHeader}>LISTEN</p>
          <h3>Recent Sermon</h3>
          <p>Feel free to listen to our most recent sermon! We also have an extensive library of sermons for you to listen to, to keep you engaged throughout the week.</p>
        </div>
        <Button
          text="View All Sermons"
          theme="dark"
          iconTheme="dark"
          onClick={handleNavigation}
        />
      </motion.div>
    </div>
  );
};

export default RecentSermon;
