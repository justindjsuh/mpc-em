import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { AboutNav, MediaNav, MinistriesNav, NewcomerNav, ResourcesNav } from './HeaderHelper';

const Header: React.FunctionComponent = () => {
  const [navTriggered, setNavTriggered] = useState({ triggered: false, lastVisited: '' });
  // const [mouseNavigatedOut, setMouseNavigatedOut] = useState(false);

  const [navigated, setNavigated] = useState({ navbar: false, topNav: false });
  const navigatedOut = Object.values(navigated).every(Boolean);

  const handleMouseEnter = (item: string) => {
    setNavTriggered({ triggered: true, lastVisited: item });
  };

  useEffect(() => {
    if (!navigatedOut) {
      setNavTriggered({ triggered: false, lastVisited: '' });
    }
  }, [navigatedOut]);

  return (
    <>
      <div
        className={styles.headerContainer}
        onMouseLeave={() => setNavigated((prev) => {
          return { ...prev, navbar: true };
        })}
        onMouseEnter={() => setNavigated((prev) => {
          return { ...prev, navbar: false };
        })}
      >
        <div className={styles.headerLeft}>
          <Image
            aria-hidden
            src="/logo-white.png"
            alt="Arrow Facing Top Right"
            width={175}
            height={58}
            priority
          />
          <div className={styles.navLinks}>
            <div
              className={styles.navLink}
              onMouseEnter={() => handleMouseEnter('newcomers')}
            >
              Newcomers
            </div>
            <div
              className={styles.navLink}
              onMouseEnter={() => handleMouseEnter('about')}
            >
              About Us
            </div>
            <div
              className={styles.navLink}
              onMouseEnter={() => handleMouseEnter('ministries')}
            >
              Ministries
            </div>
            <div
              className={styles.navLink}
              onMouseEnter={() => handleMouseEnter('media')}
            >
              Media
            </div>
            <div
              className={styles.navLink}
              onMouseEnter={() => handleMouseEnter('events')}
            >
              Events
            </div>
          </div>
        </div>
        <Link href="/give">Give</Link>
      </div>
      <AnimatePresence>
        {/* Need to add, && !Mouse has not left the top nav container */}
        {(navTriggered.triggered && !navigatedOut) && (
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
                  {navTriggered.lastVisited === 'events' && ResourcesNav}
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
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
