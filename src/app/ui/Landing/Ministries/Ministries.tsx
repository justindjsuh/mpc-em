import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../Button/Button';
import styles from './Ministries.module.css';

const Ministries: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.ministriesContainer}>
      <motion.div
        className={styles.ministryHeader}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p>CONNECT</p>
        <h3>Ministries</h3>
      </motion.div>
      <div className={styles.ministryContent}>
        <motion.div
          className={styles.ministryCard}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.cardContainer}>
            <p className={styles.cardHeader}>Weekly Bible Study</p>
            <p>Join us for our weekly Bible study on Wednesdays at 7:30 PM in the church library!</p>
          </div>
          <Button
            text="Learn More"
            theme="dark"
            iconTheme="dark"
            onClick={() => handleNavigation('em-ministries')}
          />
        </motion.div>
        <motion.div
          className={styles.ministryCard}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.cardContainer}>
            <p className={styles.cardHeader}>Family Groups</p>
            <p>Enjoy fellowship with brothers and sisters in the same stage of life!</p>
          </div>
          <Button
            text="Learn More"
            theme="dark"
            iconTheme="dark"
            onClick={() => handleNavigation('em-ministries')}
          />
        </motion.div>
        <motion.div
          className={styles.ministryCard}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.cardContainer}>
            <p className={styles.cardHeader}>Get Connected</p>
            <p>Want to engage with the leaders of our community and get plugged in? Get connected!</p>
          </div>
          <Button
            text="Learn More"
            theme="dark"
            iconTheme="dark"
            onClick={() => handleNavigation('get-connected')}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Ministries;
