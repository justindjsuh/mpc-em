'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Layout from '../ui/Layout/Layout';
import LeaderProfileCard from '../ui/SharedComponents/LeaderProfileCard/LeaderProfileCard';
import styles from './OurLeaders.module.css';

const OurLeaders: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const firstCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = firstCardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }, // Adjust this value if needed (30% visible to trigger)
    );

    if (firstCardRef.current) {
      observer.observe(firstCardRef.current);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <Layout title="Our Leaders">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>MEET OUR LEADERS</p>
            <h3>EMPOWERED TO SERVE, CALLED TO LEAD.</h3>
          </motion.div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.details}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            >
              “With upright heart he shepherded them and guided them with his skillful hand.”
              <span>— Psalm 78:72</span>
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p>Our leaders desire to faithfully serve and adhere to the teachings of Scripture —  Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
            </motion.div>
          </div>
        </div>
        <div className={styles.leadersSection}>
          <div className={styles.details2}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              OUR MPC LEADERS
            </motion.h3>
            <div className={styles.leaderImgs}>
              <motion.div
                ref={firstCardRef}
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                }}
              >
                <LeaderProfileCard imageSrc="/pastor_jon.png" name="Jonathan Back" position="EM Pastor" />
              </motion.div>
              <motion.div
                style={{ overflow: 'hidden' }}
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 0.2,
                }}
              >
                <LeaderProfileCard imageSrc="/elder_yi.png" name="Seung Yi" position="Ordained Elder" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 0.4,
                }}
              >
                <LeaderProfileCard imageSrc="/dan_choi.png" name="Dan Choi" position="Deacon" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 0.6,
                }}
              >
                <LeaderProfileCard imageSrc="/david_lim.png" name="David Lim" position="Worship Leader" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 0.8,
                }}
              >
                <LeaderProfileCard imageSrc="/inae_choi.png" name="Inae Choi" position="Steering Member" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 1,
                }}
              >
                <LeaderProfileCard imageSrc="/daniel_choi.png" name="Daniel Choi" position="Steering Member" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 1.2,
                }}
              >
                <LeaderProfileCard imageSrc="/jooyoung_choi.png" name="Jooyoung Choi" position="Steering Member" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80, // Lower stiffness = looser movement
                  damping: 20, // Reduces abrupt stop
                  mass: 1, // Lighter mass = more bounce
                  duration: 0.1,
                  delay: 1.4,
                }}
              >
                <LeaderProfileCard imageSrc="/alex_paik.png" name="Alex Paik" position="Steering Member" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurLeaders;
