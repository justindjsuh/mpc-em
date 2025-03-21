import type { INavTriggeredState } from '../../Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../Header.module.css';
import { AboutNav, ChurchLifeNav, MediaNav, MinistriesNav, NewcomerNav } from '../MainNavOptions/MainNavOptions';

interface IMainDropdownProps {
  setNavigated: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  navTriggered: INavTriggeredState;
}

const MainDropdown: React.FC<IMainDropdownProps> = ({
  setNavigated,
  navTriggered,
}) => {
  return (
    <div className={styles.navDropdownContainer}>
      <motion.div
        className={styles.navDropdownTop}
        initial={{ height: '0%' }}
        animate={{ height: '50%' }}
        exit={{ height: '0%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onMouseLeave={() => setNavigated((prev) => {
          return { ...prev, topNav: true };
        })}
        onMouseEnter={() => setNavigated((prev) => {
          return { ...prev, topNav: false };
        })}

      >
        <div className={styles.expandedNav}>
          <div className={styles.quickActions}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.15, ease: 'easeOut' } }}
            >
              Quick Links
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.05, duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
            >
              <Link href="/get-connected">Get Connected</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
            >
              <Link href="/visitor-information">Visitors</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' },
              }}
              exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
            >
              <Link href="/about">About Us</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
            >
              <Link href="/sermons">Sermons</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
            >
              <Link href="/events">Events</Link>
            </motion.div>
          </div>
          <div className={styles.navSpecificActions}>
            {navTriggered.lastVisited === 'newcomers' && NewcomerNav}
            {navTriggered.lastVisited === 'about' && AboutNav}
            {navTriggered.lastVisited === 'ministries' && MinistriesNav}
            {navTriggered.lastVisited === 'media' && MediaNav}
            {navTriggered.lastVisited === 'events' && ChurchLifeNav}
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.navDropdownBot}
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(10px)', transition: { delay: 0.2, duration: 0.2, ease: 'easeOut' } }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.2, ease: 'easeOut' } }}
      >
      </motion.div>
    </div>
  );
};

export default MainDropdown;
