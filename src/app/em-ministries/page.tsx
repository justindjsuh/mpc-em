'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button/Button';
import Layout from '../ui/Layout/Layout';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './EmMinistries.module.css';

const EmMinistries: React.FC = () => {
  const router = useRouter();

  const section1Ref = useRef(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsStuck(entry.boundingClientRect.top <= 0);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px 0px -100% 0px', // No offset, strictly when top reaches viewport top
        threshold: 0, // Trigger as soon as any part of it enters/leaves,
      },
    );

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleNavigation = () => {
    router.push('/get-connected');
  };

  return (
    <Layout title="EM Ministries">
      <div className={styles.container}>
        <motion.div
          className={styles.headerContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>FAMILY GROUPS & BIBLE STUDY</p>
          <h3>GROWING TOGETHER IN FAITH AND FELLOWSHIP.</h3>
        </motion.div>
        <div className={styles.transition}>
          <motion.div
            className={styles.imgContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/em-ministries.png"
              alt="people praying for a person with their hands on their back"
              style={{ objectFit: 'cover' }}
              priority
              fill
            />
          </motion.div>
        </div>
        <div ref={section1Ref} className={`${styles.contentContainer} ${isStuck ? styles.stuck : ''}`}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3>BUILD MEANINGFUL RELATIONSHIPS IN OUR FAMILY GROUPS.</h3>
            <div className={styles.details}>
              <p>Our Family Groups — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
              <Button text="Get Connected" theme="dark" iconTheme="dark" onClick={handleNavigation} />
            </div>
          </motion.div>
          <motion.div
            className={`${styles.content} ${styles.content2}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3>WHAT CAN I EXPECT?</h3>
            <div className={styles.details}>
              <p>Our Family Groups — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
            </div>
          </motion.div>
        </div>
        <div className={`${styles.contentContainer} ${styles.contentContainer2}`}>
          <div className={styles.content}>
            <div className={styles.details}>
              <p>Our Family Groups — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
              <Button text="Get Connected" theme="dark" iconTheme="dark" onClick={handleNavigation} />
            </div>
            <h3>EXPLORE SCRIPTURE AND DEEPEN YOUR FAITH.</h3>
          </div>
          <div className={`${styles.content} ${styles.content2}`}>
            <h3>WHAT CAN I EXPECT?</h3>
            <div className={styles.details}>
              <p>Our Bible Studies — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
            </div>
          </div>
        </div>
      </div>
      <PlanVisitFooter theme="light" />
    </Layout>
  );
};

export default EmMinistries;
