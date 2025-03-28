'use client';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import styles from './AdminDashboard.module.css';

const AdminDashboard: React.FC = () => {
  const { userEmail } = useContext(UserContext);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Welcome back.</h1>
      <p>
        Signed in as
        {' '}
        {userEmail}
      </p>
    </motion.div>
  );
};

export default AdminDashboard;
