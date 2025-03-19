import { motion } from 'framer-motion';
import styles from './HamburgerMenu.module.css';

interface IHamburgerMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (arg: boolean) => void;
}

const HamburgerMenu: React.FC<IHamburgerMenuProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <button
      type="button"
      className={styles.hamburger}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      <motion.div
        className={styles.line}
        initial={false}
        animate={{
          rotate: mobileMenuOpen ? 45 : 0,
          y: mobileMenuOpen ? 7 : 0,
          transition: { duration: 0.3 },
        }}
      />
      <motion.div
        className={styles.line}
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 0 : 1,
          transition: { duration: 0.2 },
        }}
      />
      <motion.div
        className={styles.line}
        initial={false}
        animate={{
          rotate: mobileMenuOpen ? -45 : 0,
          y: mobileMenuOpen ? -7 : 0,
          transition: { duration: 0.3 },
        }}
      />
    </button>
  );
};

export default HamburgerMenu;
