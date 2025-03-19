import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.css';
import { AboutNav, MediaNav, MinistriesNav, NewcomerNav, ResourcesNav } from './HeaderHelper';

const Header: React.FunctionComponent = () => {
  const [navTriggered, setNavTriggered] = useState({ triggered: false, lastVisited: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navigated, setNavigated] = useState({ navbar: false, topNav: false });
  const navigatedOut = Object.values(navigated).every(Boolean);

  const handleMouseEnter = (item: string) => {
    setTimeout(() => {
      setNavTriggered({ triggered: true, lastVisited: item });
    }, 100);
  };

  useEffect(() => {
    if (navigatedOut) {
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
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenuDropdown}
            initial={{ height: '0vh' }}
            animate={{ height: '100vh' }}
            exit={{ height: '0vh' }}
            transition={{
              type: 'spring',
              stiffness: 70, // Higher = faster, snappier spring
              damping: 10, // Higher = more friction, slower bounce
              mass: 0.5, // Lower = lighter spring
            }}
          >
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
                animate={{ opacity: 1, transition: { delay: 0.02, duration: 0.3, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
              >
                <Link href="/get-connected">Get Connected</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.04, duration: 0.3, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
              >
                <Link href="/visitor-information">Visitors</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.06, duration: 0.3, ease: 'easeOut' },
                }}
                exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
              >
                <Link href="/about">About Us</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.08, duration: 0.3, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
              >
                <Link href="/sermons">Sermons</Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
                exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
              >
                <Link href="/events">Events</Link>
              </motion.div>
            </div>
            {/* <div className={styles.navSpecificActionsMobile}>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
                >
                  Newcomers
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.14, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/get-connected">Get Connected</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.16, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/visitor-information">Visitor Information</Link>
                </motion.div>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.18, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
                >
                  Navigation
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/about">Our Story</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.22, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/about">Our Mission</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.24, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/about">Our Beliefs</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.26, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/our-leaders">Our Leaders</Link>
                </motion.div>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.28, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
                >
                  Navigation
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/em-ministries">Family Groups</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.32, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/em-ministries">Bible Study</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.34, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/youth-group">Youth Group</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.36, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/childrens">Kids</Link>
                </motion.div>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.38, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
                >
                  Navigation
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/em-ministries">Sermons</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.42, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="https://www.youtube.com/@mpcemchurch7280">Live Stream</Link>
                </motion.div>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.44, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
                >
                  Navigation
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.46, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/events">Events</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.48, duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
                >
                  <Link href="/newsletter">Newsletter</Link>
                </motion.div>
              </div>
            </div> */}
          </motion.div>
        )}
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
