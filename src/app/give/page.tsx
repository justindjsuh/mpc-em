'use client';
import { motion } from 'framer-motion';
import Layout from '../ui/Layout/Layout';
import styles from './Give.module.css';

const GivePage: React.FC = () => {
  return (
    <Layout title="Give">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p>OFFERING</p>
          <h3>GIVING BACK IN FAITH AND GRATITUDE.</h3>
        </motion.div>
        <div className={styles.detailsContainer}>
          <motion.div
            className={styles.details}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          >
            <h3>STRENGTHEN OUR COMMUNITY THROUGH YOUR SUPPORT.</h3>
            <div>
              <p>At MPC, we aim to worship God by giving and contributing "cheerfully and regularly" (2 Corinthians 9:6-7) to the support of the ministry, expenses of the church, relief of the poor, and the spread of the gospel amongst all nations.</p>
              <br />
              <p>
                You can easily give through our Venmo
                {' '}
                <strong>@MPC-EM</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default GivePage;
