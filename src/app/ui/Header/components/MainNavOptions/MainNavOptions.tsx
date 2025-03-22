import { motion } from 'framer-motion';
import Link from 'next/link';

export interface INavProps {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export const NewcomerNav: React.FC<INavProps> = ({ handleNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
      >
        Newcomers
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/get-connected" onClick={e => handleNavClick(e, '/get-connected')}>Get Connected</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/visitor-information" onClick={e => handleNavClick(e, '/visitor-information')}>Visitor Information</Link>
      </motion.div>
    </>
  );
};

export const AboutNav: React.FC<INavProps> = ({ handleNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
      >
        About Us
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/about" onClick={e => handleNavClick(e, '/about')}>Our Story</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/about" onClick={e => handleNavClick(e, '/about')}>Our Mission</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/about" onClick={e => handleNavClick(e, '/about')}>Our Beliefs</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/our-leaders" onClick={e => handleNavClick(e, '/our-leaders')}>Our Leaders</Link>
      </motion.div>
    </>
  );
};

export const MinistriesNav: React.FC<INavProps> = ({ handleNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
      >
        Ministries
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/em-ministries" onClick={e => handleNavClick(e, '/em-ministries')}>Family Groups</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/em-ministries" onClick={e => handleNavClick(e, '/em-ministries')}>Bible Study</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/youth-group" onClick={e => handleNavClick(e, '/youth-group')}>Youth Group</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/childrens" onClick={e => handleNavClick(e, '/childrens')}>Kids</Link>
      </motion.div>
    </>
  );
};

export const MediaNav: React.FC<INavProps> = ({ handleNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
      >
        Media
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/em-ministries" onClick={e => handleNavClick(e, '/em-ministries')}>Sermons</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="https://www.youtube.com/@mpcemchurch7280">Live Stream</Link>
      </motion.div>
    </>
  );
};

export const ChurchLifeNav: React.FC<INavProps> = ({ handleNavClick }) => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
      >
        Church Life
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/events" onClick={e => handleNavClick(e, '/events')}>Events</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/newsletter" onClick={e => handleNavClick(e, '/newsletter')}>Newsletter</Link>
      </motion.div>
    </>
  );
};
