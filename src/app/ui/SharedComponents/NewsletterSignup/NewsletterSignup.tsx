import { motion } from 'framer-motion';
import Button from '../../Button/Button';
import styles from './NewsletterSignup.module.css';

const NewsletterSignup: React.FC = () => {
  const handleNewsletterOnclick = () => {
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.newsletterContainer}>
        <motion.div
          className={styles.newsletterText}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
        >
          <p>STAY UP TO DATE</p>
          <h3>Join Our Newsletter</h3>
        </motion.div>
        <motion.div
          className={styles.inputContainer}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
        >
          <input type="text" placeholder="Email Address"></input>
          <Button
            text="Sign Up"
            iconTheme="dark"
            theme="dark"
            onClick={handleNewsletterOnclick}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
