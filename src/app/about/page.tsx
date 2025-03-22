'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../ui/Layout/Layout';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './page.module.css';

const AboutUsPage: React.FC = () => {
  return (
    <Layout title="About Us">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeaderContainer}>
            <p>WHO WE ARE</p>
            <h3>DISCOVER OUR STORY AND MISSION.</h3>
          </div>
        </div>
      </motion.div>
      <div className={`${styles.container} ${styles.container2}`}>
        <motion.div
          className={styles.aboutContainer}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 1 }}
        >
          <div className={styles.ourStoryContainer}>
            <h3>OUR STORY</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ante habitasse tempor varius nisl integer litora interdum. Porta scelerisque malesuada sed condimentum tellus dapibus non netus mi. Condimentum maecenas at risus quam; et penatibus fusce viverra? Risus integer accumsan penatibus class eget. Dolor urna sed neque; risus morbi sapien!</p>
          </div>
        </motion.div>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.ourMissionContainer}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={styles.imgContainer}>
            <Image
              src="/about_us.png"
              alt="MPC Group Picture"
              fill
              priority
            />
          </div>
          <div className={styles.ourMissionTextContainer}>
            <h3>OUR MISSION</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ante habitasse tempor varius nisl integer litora interdum. Porta scelerisque malesuada sed condimentum tellus dapibus non netus mi. Condimentum maecenas at risus quam; et penatibus fusce viverra? Risus integer accumsan penatibus class eget. Dolor urna sed neque; risus morbi sapien!</p>
          </div>
        </motion.div>
      </div>
      <div className={`${styles.container} ${styles.container2}`}>
        <div className={styles.aboutContainer}>
          <motion.div
            className={styles.beliefsContainer}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>OUR BELIEFS</h3>
            <div className={styles.beliefsText}>
              <p>We are the English-speaking ministry within MPC. We belong to the KAPC denomination, holding to the doctrinal standards in the Westminster Confession of Faith.</p>
              <p>In short, we believe in the truth of the Bible. It shapes how we worship, how we live our lives, and how we care for others. We invite you to come worship with us and find joy in the gospel of Jesus Christ alongside one another.</p>
            </div>
          </motion.div>
        </div>
      </div>
      <PlanVisitFooter />
    </Layout>
  );
};

export default AboutUsPage;
