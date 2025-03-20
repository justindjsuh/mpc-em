import type { EventsApiResponse } from '@/app/lib/definitions';
import { convertDatesIntoReadable } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import styles from './FeaturedEvents.module.css';

const FeaturedEvents: React.FC = () => {
  const [data, setData] = useState<EventsApiResponse[]>([]);
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/events');
  };

  const fetchEvents = async () => {
    const res = await fetch('/api/events');
    const data = await res.json();
    setData(data.slice(0, 3));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className={styles.eventsContainer}>
      <motion.div
        className={styles.eventsHeader}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <p>JOIN US</p>
        <h3>Featured Events</h3>
      </motion.div>
      <motion.div
        className={styles.eventCardContainer}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        {data.map((event) => {
          const { startDate, endDate } = convertDatesIntoReadable(event.start_date, event.end_date);
          return (
            <Link href="/events" className={styles.eventCard} key={event.id}>
              <div className={styles.eventImgContainer}>
                <Image
                  src={event.image_url}
                  width={400}
                  height={200}
                  alt={`${event.name} image`}
                />
              </div>
              <div className={styles.eventDetails}>
                <p className={styles.eventDate}>
                  {startDate}
                  {' '}
                  -
                  {' '}
                  {endDate}
                </p>
                <p className={styles.eventName}>{event.name}</p>
              </div>
            </Link>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 1 }}
      >
        <Button text="View All Events" theme="dark" iconTheme="dark" onClick={handleNavigation} />
      </motion.div>
    </div>
  );
};

export default FeaturedEvents;
