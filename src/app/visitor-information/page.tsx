'use client';
import type { CollapseProps } from 'antd';
import type { CSSProperties } from 'react';
import { Collapse, theme } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../ui/Layout/Layout';
import SideNav from '../ui/SharedComponents/SideNav/SideNav';
import styles from './VisitorInformation.module.css';

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = panelStyle => [
  {
    key: '1',
    label: <strong>Sunday Service Information</strong>,
    children: <p>Our service begins at 9:45 AM in the main sanctuary. There are two entrances if you are facing the church from the parking lot — the main sanctuary is located near the left one.</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <strong>Where is MPC located?</strong>,
    children: <p>MPC is located at 3260 Morris Road, Lansdale PA 19446.</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <strong>Do you have parking?</strong>,
    children: <p>You will find ample parking in our dedicated parking lot in front of our building!</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <strong>What can I expect Sunday Service to be like?</strong>,
    children: <p>Our weekly gatherings are characterized by our desire to worship and encounter God through corporate prayer, singing contemporary songs and hymns, the preaching of God's word, and fellowship with each other. Located just inside the main entrance, a welcoming staff member will be there to welcome you and answer any questions you have.</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <strong>What if I have kids?</strong>,
    children: <p>Nursery and preschool are available later at 11:45 AM. Children and youth services are also available at 11:45 AM.</p>,
    style: panelStyle,
  },
];

const VisitorInformation: React.FC = () => {
  const { token } = theme.useToken();

  const PlusOutlined = (
    <Image
      src="/plus.svg"
      width={25}
      height={25}
      alt="Plus Icon"
    />
  );

  const panelStyle: React.CSSProperties = {
    marginBottom: 12,
    backgroundColor: '#fafafa',
    borderRadius: token.borderRadiusLG,
    border: 'none',
    boxShadow: '0 2px 5px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.15)',
  };

  return (
    <Layout title="Visitor Information">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p>VISITOR INFORMATION</p>
          <h3>WE'RE HAPPY YOU'RE HERE</h3>
        </motion.div>
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div className={styles.leftSide}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              >
                WELCOME TO MPC
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
              >
                Our hope is that no matter who you are or where you are in your life, that you would join us in loving and worshiping God.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
              >
                <Collapse
                  bordered={false}
                  style={{ backgroundColor: '#fafafa' }}
                  items={getItems(panelStyle)}
                  expandIcon={({ isActive }) => (
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.1, ease: 'easeInOut' }}
                    >
                      {isActive ? PlusOutlined : PlusOutlined}
                    </motion.span>
                  )}
                  expandIconPosition="end"
                  size="large"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <SideNav />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisitorInformation;
