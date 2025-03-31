'use client';
import type { TableColumnsType } from 'antd';
import type { EventsApiResponse } from '../lib/definitions';
import { Button as AntButton, Modal, Skeleton, Table } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { convertDatesIntoReadable } from '../lib/utils';
import Button from '../ui/Button/Button';
import Layout from '../ui/Layout/Layout';
import PlanVisitFooter from '../ui/SharedComponents/PlanVisitFooter/PlanVisitFooter';
import styles from './Events.module.css';

const startDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const endDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const columns: TableColumnsType<EventsApiResponse> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 250,
    ellipsis: true,
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    width: 120,
    render: startDateColumnRenderer,
    responsive: ['md'],
  },
  {
    title: 'End Date',
    dataIndex: 'end_date',
    key: 'end_date',
    width: 120,
    render: endDateColumnRenderer,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true,
    responsive: ['md'],
  },
];

const EventsList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [data, setData] = useState<EventsApiResponse[]>([]);
  const [pastEvents, setPastEvents] = useState<EventsApiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState<EventsApiResponse | undefined>(undefined);
  const [dates, setDates] = useState({ startDate: '', endDate: '' });

  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch('/api/events');
    const data: EventsApiResponse[] = await res.json();
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    const past = data.filter((event) => {
      if (!today) {
        return false;
      }
      return event.end_date < today;
    });
    const upcoming = data.filter((event) => {
      if (!today) {
        return false;
      }
      return event.end_date >= today;
    });

    setPastEvents(past);
    setData(upcoming);
    setLoading(false);
  };

  const handleRowClick = (rowRecord: EventsApiResponse) => {
    setActiveEvent(rowRecord);
    setIsOpenModal(true);
  };

  // const handlePastModalClose = () => setIsPastOpenModal(false);

  const formatDescription = (text: string) => {
    // Replace newlines with <br /> tags
    let formattedText = text.replace(/\n/g, '<br />');

    // Convert bullet points (starting with '-') to <ul> <li> items
    formattedText = formattedText
      .split('\n')
      .map((line) => {
        if (line.startsWith('-')) {
          // Remove the "-" and add the list item
          return `<li>${line.substring(1).trim()}</li>`;
        }
        return line;
      })
      .join('');

    // Wrap the list items in a <ul> container
    formattedText = `<ul>${formattedText}</ul>`;
    return formattedText;
  };

  const openModal = (event: EventsApiResponse, startDate: string, endDate: string) => {
    setActiveEvent(event);
    setDates({ startDate, endDate });
    setIsOpenModal(true);
  };

  const onClose = () => setIsOpenModal(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Layout title="Events">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>EVENTS</p>
            <h3>CELEBRATE, CONNECT, AND GROW WITH US.</h3>
          </motion.div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.details}>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            >
              JOIN US IN FELLOWSHIP WHILE SERVING THE COMMUNITY AROUND US.
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p>At MPC we have events to keep you engaged with the community, both within and outside of MPC. Join us in fellowship, grow closer to one another, and glorify God through it all.</p>
            </motion.div>
          </div>
        </div>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetails2}>
            <motion.div
              className={styles.eventDetailsHeader}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            >
              <p>OUR EVENTS</p>
              <div>
                <Button
                  text="Upcoming Events"
                  iconTheme="dark"
                  theme="dark"
                  filled={activeTab === 'upcoming'}
                  showIcon={false}
                  onClick={() => setActiveTab('upcoming')}
                />
                <Button
                  text="Past Events"
                  iconTheme="dark"
                  theme="dark"
                  filled={activeTab === 'past'}
                  showIcon={false}
                  onClick={() => setActiveTab('past')}
                />
              </div>
            </motion.div>
            <div className={styles.eventSectionContainer}>
              <div className={styles.eventCardContainer}>
                {loading
                  ? [...Array.from({ length: 3 })].map((_, index) => ( // Render 3 skeleton placeholders while loading
                      // eslint-disable-next-line react/no-array-index-key
                      <div className={styles.eventCard} key={index}>
                        <Skeleton.Node className={styles.placeholderSq} active>
                          <div className={styles.eventImgContainer}></div>
                        </Skeleton.Node>
                        <div className={styles.eventDetails}>
                          <Skeleton.Input size="small" style={{ width: '90%' }} active />
                          <Skeleton.Input size="small" style={{ width: '70%' }} active />
                          <Skeleton.Button style={{ width: '100%' }} active />
                        </div>
                      </div>
                    ))
                  : (activeTab === 'upcoming'
                      ? data.map((event) => {
                          const { startDate, endDate } = convertDatesIntoReadable(event.start_date, event.end_date);
                          return (
                            <div className={styles.eventCard} key={event.id}>
                              <div className={styles.eventImgContainer}>
                                <Image
                                  src={event.image_url}
                                  fill
                                  sizes="(max-width: 768px) 35vw, (max-width: 1200px) 400px, 400px"
                                  alt={`${event.name} image`}
                                />
                              </div>
                              <div className={styles.eventDetails}>
                                <p className={styles.eventName}>{event.name}</p>
                                <p className={styles.eventDate}>
                                  {startDate}
                                  {' '}
                                  -
                                  {' '}
                                  {endDate}
                                </p>
                                <AntButton
                                  style={{
                                    backgroundColor: '#262626',
                                    fontWeight: 500,
                                    fontFamily: 'Metropolis',
                                    fontSize: '.875rem',
                                    marginTop: '.75rem',
                                  }}
                                  type="primary"
                                  onClick={() => openModal(event, startDate, endDate)}
                                >
                                  View Details
                                </AntButton>
                              </div>
                            </div>
                          );
                        })
                      : (
                          <Table
                            key="pastEventTable"
                            dataSource={pastEvents}
                            columns={columns}
                            scroll={{ x: 'max-content' }}
                            onRow={record => ({
                              onClick: () => handleRowClick(record),
                            })}
                          />
                        ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title="Event Details" open={isModalOpen} onCancel={onClose} footer={null}>
        <div className={styles.modalContainer}>
          <div className={`${styles.eventImgContainer} ${styles.modalImgContainer}`}>
            <Image
              src={activeEvent?.image_url || ''}
              fill
              sizes="(max-width: 768px) 35vw, (max-width: 1200px) 400px, 400px"
              alt={`${activeEvent?.name} image`}
            />
          </div>
          <div>
            <p className={styles.modalEventName}>{activeEvent?.name}</p>
            <p className={styles.eventDate}>
              {dates.startDate}
              {' '}
              -
              {' '}
              {dates.endDate}
            </p>
          </div>
          {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml */}
          <p className={styles.eventDescription} dangerouslySetInnerHTML={{ __html: formatDescription(activeEvent?.description || '') }}></p>
          <div>
            <p className={styles.headerText}>Links</p>
            <div className={styles.linkContainer}>
              {activeEvent?.links?.map((link, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <Link key={idx} href={link.link} className={styles.link}>
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      <PlanVisitFooter />
    </Layout>
  );
};

export default EventsList;
