import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../../Button/Button';
import styles from './PlanVisitFooter.module.css';

interface IPlantVisitFooterProps {
  delay?: number;
  theme?: 'dark' | 'light';
}

const PlanVisitFooter: React.FC<IPlantVisitFooterProps> = ({ delay = 0.4, theme = 'dark' }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/visitor-information');
  };

  return (
    <div className={clsx(styles.container, {
      [styles.lightContainer!]: theme === 'light',
    })}
    >
      <motion.div
        className={clsx(styles.planVisitContainer, {
          [styles.light!]: theme === 'light',
        })}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay,
          type: 'spring',
          stiffness: 100, // Makes it feel bouncy yet controlled
          damping: 15, // Slows it down for a smooth finish
          mass: 0.75, // Reduces abrupt movement
        }}
      >
        <h3>Want to plan a visit?</h3>
        <div className={styles.buttonContainer}>
          {theme === 'dark'
            ? (
                <Button text="Visitor Information" theme="light" iconTheme="light" onClick={handleNavigation} />
              )
            : (
                <Button text="Visitor Information" theme="dark" iconTheme="dark" onClick={handleNavigation} />
              )}
        </div>
      </motion.div>
    </div>
  );
};

export default PlanVisitFooter;
