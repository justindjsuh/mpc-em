'use client';
import type { IActivePathOptions } from '../../Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface INavProps {
  handleNavClickAction: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export const MobileQuickLinks: React.FC<INavProps> = ({ handleNavClickAction }) => {
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
        <Link href="/get-connected" onClick={e => handleNavClickAction(e, '/get-connected')}>Get Connected</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.44, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.3, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/visitor-information" onClick={e => handleNavClickAction(e, '/visitor-information')}>Visitor Info</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.46, duration: 0.3, ease: 'easeOut' },
        }}
        exit={{ opacity: 0, transition: { delay: 0.27, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/about" onClick={e => handleNavClickAction(e, '/about')}>Our Story</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.48, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.24, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/sermons" onClick={e => handleNavClickAction(e, '/sermons')}>Sermons</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.21, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/events" onClick={e => handleNavClickAction(e, '/events')}>Events</Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.52, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.18, duration: 0.15, ease: 'easeOut' } }}
      >
        <Link href="/give" onClick={e => handleNavClickAction(e, '/give')}>Give</Link>
      </motion.div>
    </>
  );
};

interface IMobileMenuHomeProps {
  handleMobileNavClickAction: (arg: IActivePathOptions) => void;
}

export const MobileMenuHome: React.FC<IMobileMenuHomeProps> = ({ handleMobileNavClickAction }) => {
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
        onClick={() => handleMobileNavClickAction('newcomers')}
      >
        <div>Newcomers</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.58, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.09, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClickAction('about')}
      >
        <div>About </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.06, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClickAction('ministries')}
      >
        <div>Ministries</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.62, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { delay: 0.03, duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClickAction('media')}
      >
        <div>Media</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.64, duration: 0.3, ease: 'easeOut' } }}
        exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
        onClick={() => handleMobileNavClickAction('churchLife')}
      >
        <div>Church Life</div>
      </motion.div>
    </>
  );
};

export const NewcomerMobileNav: React.FC = () => {
  const pathname = usePathname();

  const handleNavClickAction = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };
  return (
    <>
      <p>Newcomers</p>
      <Link href="/get-connected" onClick={e => handleNavClickAction(e, '/get-connected')}>Get Connected</Link>
      <Link href="/visitor-information" onClick={e => handleNavClickAction(e, '/visitor-information')}>Visitor Info</Link>
    </>
  );
};

export const AboutMobileNav: React.FC = () => {
  const pathname = usePathname();

  const handleNavClickAction = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <p>About Us</p>
      <Link href="/about" onClick={e => handleNavClickAction(e, '/about')}>Our Story</Link>
      <Link href="/about" onClick={e => handleNavClickAction(e, '/about')}>Our Mission</Link>
      <Link href="/about" onClick={e => handleNavClickAction(e, '/about')}>Our Beliefs</Link>
      <Link href="/our-leaders" onClick={e => handleNavClickAction(e, '/our-leaders')}>Our Leaders</Link>
    </>
  );
};

export const MinistriesMobileNav: React.FC = () => {
  const pathname = usePathname();

  const handleNavClickAction = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <p>Ministries</p>
      <Link href="/em-ministries" onClick={e => handleNavClickAction(e, '/em-ministries')}>Family Groups</Link>
      <Link href="/em-ministries" onClick={e => handleNavClickAction(e, '/em-ministries')}>Bible Study</Link>
      <Link href="/youth-group" onClick={e => handleNavClickAction(e, '/youth-group')}>Youth Group</Link>
      <Link href="/childrens" onClick={e => handleNavClickAction(e, '/childrens')}>Kids</Link>
    </>
  );
};

export const MediaMobileNav: React.FC = () => {
  const pathname = usePathname();

  const handleNavClickAction = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <p>Media</p>
      <Link href="/sermons" onClick={e => handleNavClickAction(e, '/sermons')}>Sermons</Link>
      <Link href="https://www.youtube.com/@mpcemchurch7280">Live Stream</Link>
    </>
  );
};

export const ChurchLifeMobileNav: React.FC = () => {
  const pathname = usePathname();

  const handleNavClickAction = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <p>Church Life</p>
      <Link href="/events" onClick={e => handleNavClickAction(e, '/events')}>Events</Link>
      <Link href="/newsletter" onClick={e => handleNavClickAction(e, '/newsletter')}>Newsletter</Link>
    </>
  );
};
