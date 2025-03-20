import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import MainDropdown from './components/MainDropdown/MainDropdown';
import { MobileMenuHome, MobileQuickLinks } from './components/MobileNavOptions/MobileNavOptions';
import styles from './Header.module.css';
import { mobileNavMenuMap } from './HeaderHelper';

export interface INavTriggeredState {
  triggered: boolean;
  lastVisited: string;
}

export type IActivePathOptions = 'newcomers' | 'about' | 'ministries' | 'media' | 'resources';

const Header: React.FunctionComponent = () => {
  // General States
  const [navTriggered, setNavTriggered] = useState<INavTriggeredState>({ triggered: false, lastVisited: '' });
  const [navigated, setNavigated] = useState<Record<string, boolean>>({ navbar: false, topNav: false });
  // Mobile States
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [step, setStep] = useState(1);
  const [activePath, setActivePath] = useState<IActivePathOptions>('newcomers');

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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    if (!mobileMenuOpen) {
      setStep(1);
    }
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (route: IActivePathOptions) => {
    setStep(2);
    setActivePath(route);
  };

  const handleMobileNavBack = () => {
    setStep(1);
    setActivePath('newcomers');
  };

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
          <HamburgerMenu
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenuDropdown}
            initial={{ height: '0vh' }}
            animate={{ height: '101vh' }}
            exit={{ height: '0vh' }}
            transition={{
              height: {
                duration: 0.7, // Total duration of the animation
                ease: [0.7, 0.01, 0.5, 1], // Custom cubic bezier for a natural feel
                times: [0, 0.1, 1], // Control the animation flow over time (0 = start, 1 = end)
                // Example: First 30% is slow, last 70% is faster
              },
              opacity: {
                duration: 0.8, // Duration for fade in
                delay: 0.5, // Delay opacity until height animation has started
              },
              backdropFilter: {
                duration: 0.3,
                ease: 'easeInOut',
              },
            }}
          >
            <AnimatePresence mode="wait">
              {step === 1
                ? (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.quickActionsMobile}>
                        <MobileQuickLinks />
                      </div>
                      <div className={styles.quickActionsMobile2}>
                        <MobileMenuHome handleMobileNavClick={handleMobileNavClick} />
                      </div>
                    </motion.div>
                  )
                : (
                    <motion.div
                      key="step-2"
                    >
                      <div style={{ position: 'absolute', top: '3.5%', left: '5%', zIndex: 10 }}>
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -20, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                        >

                          <Image
                            src="/chevron-left.svg"
                            alt="left chevron"
                            width={35}
                            height={35}
                            onClick={handleMobileNavBack}
                          />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={styles.quickActionsMobile}>
                          {mobileNavMenuMap[activePath]}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
            </AnimatePresence>
          </motion.div>
        )}
        {(navTriggered.triggered && !navigatedOut) && (
          <MainDropdown setNavigated={setNavigated} navTriggered={navTriggered} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
