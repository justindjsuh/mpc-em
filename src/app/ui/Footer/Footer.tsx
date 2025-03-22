import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <div className={styles.footerContent}>
          <div className={`${styles.col} ${styles.col1}`}>
            <Image
              aria-hidden
              src="/logo-white.png"
              alt="MPC logo"
              width={175}
              height={58}
              priority
            />
            <div className={styles.socials}>
              <a href="https://www.instagram.com/mpc.em/">
                <Image
                  src="/instagram.png"
                  alt="Instagram logo"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.facebook.com/groups/MPCEM">
                <Image
                  src="/facebook.png"
                  alt="Facebook logo"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
          <div className={styles.col}>
            <p>About Us</p>
            <Link href="/about">Our Story</Link>
            <Link href="/about">Our Mission</Link>
            <Link href="/about">Our Beliefs</Link>
            <Link href="/our-leaders">Our Leaders</Link>
          </div>
          <div className={styles.col}>
            <p>Ministries</p>
            <Link href="/em-ministries">Family Groups</Link>
            <Link href="/em-ministries">Bible Study</Link>
            <Link href="/youth-group">Youth Group</Link>
            <Link href="/childrens">Childrens Ministry</Link>
          </div>
          <div className={styles.col}>
            <p>Media</p>
            <Link href="/sermons">Sermons</Link>
            <Link href="https://www.youtube.com/@mpcemchurch7280">Live Stream</Link>
          </div>
          <div className={styles.col}>
            <p>Church Life</p>
            <Link href="/events">Events</Link>
            <Link href="/newsletter">Newsletter</Link>
          </div>
          <div className={styles.col}>
            <p>More</p>
            <Link href="/give">Give</Link>
          </div>
        </div>
        <hr className={styles.divider} />
      </div>
      <div className={styles.copyrightBar}>
        <p>
          © 2025 Montgomery Presbyterian Church English Ministry. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
