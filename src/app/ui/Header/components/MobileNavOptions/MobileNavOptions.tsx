import type { IActivePathOptions } from '../../Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const MobileQuickLinks: React.FC = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.36, duration: 0.15, ease: 'easeOut' } }}
      >
        Quick Links
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.42, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.33, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/get-connected">Get Connected</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.44, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/visitor-information">Visitor Info</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.46, duration: 0.3, ease: 'easeOut' },
        }}
        exit={{ opacity: 0, transition: { delay: 0.27, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/about">Our Story</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.48, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.24, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/sermons">Sermons</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.21, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/events">Events</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.52, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.18, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/give">Give</Link>
      </motion.div>
    </>
  );
};

interface IMobileMenuHomeProps {
  handleMobileNavClick: (arg: IActivePathOptions) => void;
}

export const MobileMenuHome: React.FC<IMobileMenuHomeProps> = ({ handleMobileNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.54, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.15, ease: 'easeOut' } }}
      >
        Navigation
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.56, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClick('newcomers')}
      >
        <div>Newcomers</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.58, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClick('about')}
      >
        <div>About </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClick('ministries')}
      >
        <div>Ministries</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.62, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClick('media')}
      >
        <div>Media</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.64, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClick('churchLife')}
      >
        <div>Church Life</div>
      </motion.div>
    </>
  );
};

export const NewcomerMobileNav: React.FC = () => {
  return (
    <>
      <p>Newcomers</p>
      <Link href="/get-connected">Get Connected</Link>
      <Link href="/visitor-information">Visitor Info</Link>
    </>
  );
};

export const AboutMobileNav: React.FC = () => {
  return (
    <>
      <p>About Us</p>
      <Link href="/about">Our Story</Link>
      <Link href="/about">Our Mission</Link>
      <Link href="/about">Our Beliefs</Link>
      <Link href="/our-leaders">Our Leaders</Link>
    </>
  );
};

export const MinistriesMobileNav: React.FC = () => {
  return (
    <>
      <p>Ministries</p>
      <Link href="/em-ministries">Family Groups</Link>
      <Link href="/em-ministries">Bible Study</Link>
      <Link href="/youth-group">Youth Group</Link>
      <Link href="/childrens">Kids</Link>
    </>
  );
};

export const MediaMobileNav: React.FC = () => {
  return (
    <>
      <p>Media</p>
      <Link href="/em-ministries">Sermons</Link>
      <Link href="https://www.youtube.com/@mpcemchurch7280">Live Stream</Link>
    </>
  );
};

export const ChurchLifeMobileNav: React.FC = () => {
  return (
    <>
      <p>Church Life</p>
      <Link href="/events">Events</Link>
      <Link href="/newsletter">Newsletter</Link>
    </>
  );
};
