'use client';
import type { EventsApiResponse } from '@/app/lib/definitions';
import type { TableColumnsType } from 'antd';
import { convertDatesIntoReadable } from '@/app/lib/utils';
import { Empty, Modal, Skeleton, Table } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

const AdminEvents: React.FC = () => {
  const [events, setEvents] = useState<EventsApiResponse[]>([]);
  const [activeEvent, setActiveEvent] = useState<EventsApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [dates, setDates] = useState({ startDate: '', endDate: '' });

  const getEventRecords = async () => {
    const res = await fetch('/api/events');
    const data: EventsApiResponse[] = await res.json();

    setEvents(data);
    setLoading(false);
  };

  const handleRowClick = (rowRecord: EventsApiResponse) => {
    setActiveEvent(rowRecord);
    setIsOpenModal(true);
  };

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

  const onClose = () => setIsOpenModal(false);

  useEffect(() => {
    getEventRecords();
  }, []);

  return (
    <div className={styles.container}>
      <Table
        key="pastEventTable"
        dataSource={events}
        columns={columns}
        scroll={{ x: 'max-content' }}
        onRow={record => ({
          onClick: () => handleRowClick(record),
        })}
        locale={{
          emptyText: loading ? <Skeleton active /> : <Empty />,
        }}
        pagination={{ pageSize: 10 }}
      />
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
    </div>
  );
};

export default AdminEvents;
