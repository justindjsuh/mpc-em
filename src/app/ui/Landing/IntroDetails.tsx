import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../page.module.css';
import Button from '../Button/Button';

const IntroDetails: React.FC = () => {
  return (
    <div className={styles.churchIntroDetails}>
      <motion.div
        className={styles.detailDescription}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <p>VISIT</p>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsMainText}>
            <h3>COME AS YOU ARE. GROW IN FAITH AND CONNECTION.</h3>
          </div>
          <div className={styles.detailsSubText}>
            <p>We at MPC Lorem ipsum odor amet, consectetuer adipiscing elit. Et cursus urna laoreet metus nam consectetur; nec ipsum porta. Netus lobortis sit arcu tincidunt, aliquam class.</p>
            <Button text="Plan Your Visit" onClick={() => {}} theme="dark" iconTheme="dark" />
          </div>
        </div>
      </motion.div>
      <motion.hr
        className={styles.divider}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      />
      <motion.div
        className={styles.serviceTimes}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <div className={styles.serviceDetails}>
          <div className={styles.onlineDetailsContainer}>
            <p className={styles.serviceType}>ONLINE</p>
            <a
              href="https://www.youtube.com/@mpcemchurch7280"
              className={styles.onlineLocation}
            >
              <p className={styles.location}>TUNE IN</p>
              <Image
                aria-hidden
                src="/arrow-up-right-dark.svg"
                alt="Arrow Facing Top Right"
                width={22}
                height={22}
              />
            </a>
          </div>
          <div className={styles.vertical}></div>
          <p className={styles.serviceTimeDetails}>
            9:45
            <span>AM</span>
          </p>
        </div>
        <div className={styles.serviceDetails}>
          <div className={styles.onlineDetailsContainer}>
            <p className={styles.serviceType}>IN-PERSON</p>
            <p className={styles.location}>MAIN CHAPEL</p>
          </div>
          <div className={styles.vertical}></div>
          <p className={styles.serviceTimeDetails}>
            9:45
            <span>AM</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroDetails;
