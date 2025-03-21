import { motion } from 'framer-motion';
import Link from 'next/link';

export const NewcomerNav = (
  <>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
    >
      Navigation
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/get-connected">Get Connected</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/visitor-information">Visitor Information</Link>
    </motion.div>
  </>
);

export const AboutNav = (
  <>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
    >
      Navigation
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/about">Our Story</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/about">Our Mission</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/about">Our Beliefs</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/our-leaders">Our Leaders</Link>
    </motion.div>
  </>
);

export const MinistriesNav = (
  <>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.12, duration: 0.15, ease: 'easeOut' } }}
    >
      Navigation
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/em-ministries">Family Groups</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/em-ministries">Bible Study</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.25, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/youth-group">Youth Group</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/childrens">Kids</Link>
    </motion.div>
  </>
);

export const MediaNav = (
  <>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
    >
      Navigation
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/em-ministries">Sermons</Link>
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

export const ChurchLifeNav = (
  <>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
    >
      Navigation
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/events">Events</Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
    >
      <Link href="/newsletter">Newsletter</Link>
    </motion.div>
  </>
);
