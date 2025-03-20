import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../page.module.css';
import Button from '../Button/Button';

const HeroView: React.FC = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/visitor-information');
  };

  return (
    <div className={styles.page}>
      <motion.div
        className={styles.heroTitle}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(-50%, -50%)' }}
      >
        <h1>MONTGOMERY PRESBYTERIAN CHURCH</h1>
        <p className={styles.heroDesc}>A community of Christ-followers.</p>
        <p className={styles.heroDesc2}>Step into faith, truth, and community.</p>
        <p className={styles.serviceTime}>EM Service | 9:45 AM</p>
        <div>
          <Button
            text="Join Us For Worship"
            onClick={handleNavigate}
            theme="light"
            iconTheme="dark"
            filled
          />
        </div>
      </motion.div>
      <Image
        src="/landing_church.png"
        alt="an interior of the church chapel"
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
        width={1300}
        height={800}
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
};

export default HeroView;
