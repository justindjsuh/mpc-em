import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../Button/Button';
import styles from './PlanVisitFooter.module.css';

const PlanVisitFooter: React.FC = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/visitor-information');
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.planVisitContainer}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: 0.4,
          type: 'spring',
          stiffness: 100, // Makes it feel bouncy yet controlled
          damping: 15, // Slows it down for a smooth finish
          mass: 0.75, // Reduces abrupt movement
        }}
      >
        <h3>Want to plan a visit?</h3>
        <div className={styles.buttonContainer}>
          <Button text="Visitor Information" theme="light" iconTheme="light" onClick={handleNavigation} />
        </div>
      </motion.div>
    </div>
  );
};

export default PlanVisitFooter;
