'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../../Button/Button';
import styles from './SideNav.module.css';

const SideNav: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3>Want to chat?</h3>
        <p>If you&apos;d prefer to speak with one of our leaders feel free to reach out to us!</p>
        <Button
          theme="light"
          iconTheme="light"
          text="Get Conected"
          onClick={() => handleNavigation('/get-connected')}
        />
      </div>
      <div className={styles.transition}>
        <hr className={styles.divider} />
        <p>OR</p>
        <hr className={styles.divider} />
      </div>
      <div className={styles.bot}>
        <h3>Join us online!</h3>
        <Link href="https://www.youtube.com/@mpcemchurch7280">
          <Button theme="light" iconTheme="light" text="Tune in" />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
