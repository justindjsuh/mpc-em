'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../ui/Layout/Layout';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './YouthGroup.module.css';

const YouthGroup: React.FC = () => {
  return (
    <Layout title="Youth Group">
      <div className={styles.container}>
        <motion.div
          className={styles.headerContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>YOUTH GROUP</p>
          <h3>EXPLORE LIFE AND FAITH TOGETHER.</h3>
        </motion.div>
        <div className={styles.transition}>
          <motion.div
            className={styles.imgContainer}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/youth-group.png"
              alt="person holding bag"
              style={{ objectFit: 'cover' }}
              priority
              fill
            />
          </motion.div>
        </div>
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          >
            <h3>EXPLORE YOUR FAITH WITH FRIENDS IN OUR YOUTH GROUP.</h3>
            <div className={styles.details}>
              <p>Our Youth Group — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
              <p className={styles.pastorInfo}>PASTOR INFORMATION</p>
              <div>
                <p>First Name Last Name</p>
                <p>Email Address</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <PlanVisitFooter />
    </Layout>
  );
};

export default YouthGroup;
