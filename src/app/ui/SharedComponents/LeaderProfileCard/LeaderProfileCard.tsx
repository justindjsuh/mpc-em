'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LeaderProfileCards.module.css';

interface ILeaderProfileProp {
  imageSrc: string;
  name: string;
  position: string;
}

const LeaderProfileCard: React.FC<ILeaderProfileProp> = ({
  imageSrc,
  name,
  position,
}) => {
  return (
    <div>
      <motion.div
        className={styles.container}
      >
        <div className={styles.imgContainer}>
          <Image
            src={imageSrc}
            fill
            sizes="(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 20vw"
            style={{ objectFit: 'cover' }}
            alt={`Image of ${name}`}
          />
        </div>
        <h4>{name}</h4>
        <p>{position}</p>
      </motion.div>
    </div>
  );
};

export default LeaderProfileCard;
