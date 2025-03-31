'use client';
import type { TableColumnsType } from 'antd';
import type { YoutubeVideo } from '../lib/definitions';
import { Empty, Skeleton, Table } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { convertSingleDate } from '../lib/utils';
import Layout from '../ui/Layout/Layout';
import SideNav from '../ui/SharedComponents/SideNav/SideNav';
import styles from './Sermons.module.css';

const columns: TableColumnsType<YoutubeVideo> = [
  {
    title: 'Date',
    key: 'date',
    width: 250,
    render: (_, record) =>
      record?.snippet ? <span>{convertSingleDate(record.snippet.publishedAt) || 'N/A'}</span> : <Skeleton.Input active />,
  },
  {
    title: 'Title',
    key: 'title',
    width: 450,
    render: (_, record) =>
      record?.snippet ? <div className={styles.ellipsisCell}>{record.snippet.title || 'N/A'}</div> : <Skeleton.Input active />,
    responsive: ['md'],
  },
  {
    title: 'Passage',
    key: 'passage',
    width: 450,
    // ellipsis: true,
    render: (_, record) =>
      record?.snippet ? <div className={styles.ellipsisCell}>{record.snippet.description || 'N/A'}</div> : <Skeleton.Input active />,
  },
  {
    title: 'Speaker',
    key: 'speaker',
    width: 450,
    render: (_, record) =>
      record?.snippet ? <div className={styles.ellipsisCell}>{record.snippet.description || 'N/A'}</div> : <Skeleton.Input active />,
    responsive: ['md'],
  },
];

const SermonList: React.FC = () => {
  const [sermons, setSermons] = useState<YoutubeVideo[]>([]);
  const [latestSermon, setLatestSermon] = useState<YoutubeVideo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRowClick = (record: YoutubeVideo) => {
    window.open(`https://www.youtube.com/watch?v=${record?.snippet?.resourceId?.videoId}`, '_blank', 'noopener,noreferrer');
  };

  const fetchAllSermons = async () => {
    setIsLoading(true);
    const res = await fetch('/api/sermons?type=all');
    const data = await res.json();

    setLatestSermon(data[0]);
    setSermons(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllSermons();
  }, []);

  return (
    <Layout title="Sermons">
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>SERMONS</p>
            <h3>FIND WISDOM AND STRENGTH THROUGH GOD&apos;S WORD.</h3>
          </motion.div>
        </div>
        <div className={styles.detailContainer}>
          <div className={styles.details}>
            <div className={styles.youtubeContainer}>
              <motion.a
                href={`https://www.youtube.com/watch?v=${latestSermon?.snippet?.resourceId?.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 1 }}
              >
                <Image
                  alt="Latest Sermon Thumbnail"
                  src="/youtube_img.png"
                  fill
                  sizes="(max-width: 768px) 35vw, (max-width: 1200px) 400px, 400px"
                  priority
                />
              </motion.a>
            </div>
            <div className={styles.detailText}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
              >
                OUR MOST RECENT SERMON
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p>We encourage you to take a listen to any of our extensive list of sermons we have available for you! Whether it would be our most recent sermon, or a sermon of the past, we want you to have every resource to keep you engaged with God's Word any day of the week. </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.sermonArchiveContainer}>
          <div className={styles.sermonArchive}>
            <p>SERMON ARCHIVE</p>
            <div className={styles.bottomContainer}>
              <div className={styles.tableContainer}>
                <Table
                  key="sermonsTable"
                  dataSource={sermons}
                  columns={columns}
                  onRow={record => ({
                    onClick: () => handleRowClick(record),
                  })}
                  // loading={isLoading}
                  locale={{
                    emptyText: isLoading ? <Skeleton active /> : <Empty />,
                  }}
                  pagination={{ pageSize: 10 }}
                />
              </div>
              <div className={styles.sideNav}>
                <SideNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SermonList;
