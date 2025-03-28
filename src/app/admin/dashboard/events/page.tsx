'use client';
import type { EventsApiResponse } from '@/app/lib/definitions';
import type { PopconfirmProps, TableColumnsType } from 'antd';
import type { NotificationType } from '../../login/page';
import { convertDatesIntoReadable } from '@/app/lib/utils';
import { DeleteFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
import { Button, Empty, Input, Modal, notification, Popconfirm, Skeleton, Space, Table } from 'antd';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import styles from './Events.module.css';

const startDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const endDateColumnRenderer = (date: string) => {
  const { startDate } = convertDatesIntoReadable(date, date);
  return startDate;
};

const AdminEvents: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<EventsApiResponse | null>(null);
  const [isModalOpen, setIsOpenModal] = useState(false);
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType, message: string, description?: string) => {
    api[type]({ message, description });
  };
  const { loading, events, setEvents } = useContext(UserContext);

  const confirm = async (id: number) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (response.ok) {
        openNotificationWithIcon('success', 'Event Deleted');
        const res = await fetch('/api/events');
        const data: EventsApiResponse[] = await res.json();
        setEvents(data);
      } else {
        openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${data.error}`);
      }
    } catch (error) {
      openNotificationWithIcon('error', 'Action Failed', `Something went wrong. Please try again or consult an admin with the  following error: ${error}`);
    }
  };

  const cancel: PopconfirmProps['onCancel'] = () => {

  };

  const handleEditClick = (rowRecord: EventsApiResponse) => {
    const { startDate, endDate } = convertDatesIntoReadable(rowRecord.start_date, rowRecord.end_date);
    setDates({ startDate, endDate });
    setActiveEvent(rowRecord);
    setIsOpenModal(true);
  };

  const columns: TableColumnsType<EventsApiResponse> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      ellipsis: true,
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
      width: 80,
      render: startDateColumnRenderer,
      responsive: ['md'],
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_date',
      width: 80,
      render: endDateColumnRenderer,
      responsive: ['md'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      width: 100,
      responsive: ['md'],
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 80,
      render: (_, record) => (
        <Space size="middle">
          <Button shape="circle" icon={<EditFilled />} onClick={() => handleEditClick(record)} />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this event?"
            onConfirm={() => confirm(record.id)}
            onCancel={cancel}
            okText="Confirm"
            cancelText="Cancel"
          >
            <Button shape="circle" icon={<DeleteFilled />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

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

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {contextHolder}
      <div className={styles.eventHeader}>
        <h3>Events</h3>
        <Button icon={<PlusOutlined />}>Add Event</Button>
      </div>
      <Table
        key="eventsTable"
        dataSource={events}
        columns={columns}
        tableLayout="fixed"
        locale={{
          emptyText: loading ? <Skeleton active /> : <Empty />,
        }}
        pagination={{ pageSize: 10 }}
      />
      <Modal title="Edit Event" open={isModalOpen} onCancel={onClose} footer={null}>
        <div className={styles.modalContainer}>
          <div>
            <Input value={activeEvent?.name} />
            <p className={styles.modalEventName}></p>
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
    </motion.div>
  );
};

export default AdminEvents;
