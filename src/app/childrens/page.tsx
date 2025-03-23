'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../ui/Layout/Layout';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './Childrens.module.css';

const ChildrensMinistry: React.FC = () => {
  return (
    <Layout title="Childrens Ministry">
      <div className={styles.container}>
        <motion.div
          className={styles.headerContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>CHILDREN'S MINISTRY</p>
          <h3>FAITH AND FUN FOR EVERY CHILD.</h3>
        </motion.div>
        <div className={styles.transition}>
          <motion.div
            className={styles.imgContainer}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/childrens.png"
              alt="child playing with kid toys"
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
            <h3>NUTURE YOUNG HEARTS IN OUR CHILDREN'S MINISTRY.</h3>
            <div className={styles.details}>
              <p>The Children&apos;s Ministry — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta.</p>
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

export default ChildrensMinistry;
