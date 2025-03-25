'use client';
import { motion } from 'framer-motion';
import Layout from '../ui/Layout/Layout';
import NewsletterSignup from '../ui/SharedComponents/NewsletterSignup/NewsletterSignup';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <Layout title="Newsletter">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>NEWSLETTER</p>
          <h3>GET THE LATEST NEWS AND ANNOUNCEMENTS.</h3>
        </motion.div>
        <div className={styles.detailsContainer}>
          <motion.div
            className={styles.details}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            <h3>STAY CONNECTED THROUGH OUR NEWSLETTER.</h3>
            <p>The best way to stay up to date is with our newsletter. Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
          </motion.div>
        </div>
        <div className={`${styles.detailsContainer} ${styles.detailsContainer2}`}>
          <motion.div
            className={`${styles.details} ${styles.details2}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            <h3>WHAT CAN I EXPECT?</h3>
            <p>Our newsletter includes — Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
          </motion.div>
        </div>
      </div>
      <NewsletterSignup />
      <PlanVisitFooter />
    </Layout>
  );
};

export default Newsletter;
