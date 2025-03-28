'use client';
import type { EventsApiResponse } from '@/app/lib/definitions';
import type { MenuProps } from 'antd';
import { logout } from '@/app/lib/logout';
import { AppstoreOutlined, CalendarOutlined, LockOutlined, LogoutOutlined, PhoneOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState, useTransition } from 'react';
import { verifyUser } from '../login/actions';
import styles from './layout.module.css';
import { UserContext } from './UserContext';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/admin/dashboard',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
  },
  {
    key: '/admin/dashboard/events',
    label: 'Manage Events',
    icon: <CalendarOutlined />,
  },
  {
    key: '/admin/dashboard/leaders',
    label: 'Manage Leaders',
    icon: <TeamOutlined />,
  },
  {
    key: '/admin/dashboard/requests',
    label: 'Manage Access',
    icon: <LockOutlined />,
  },
  {
    key: '/admin/dashboard/contact',
    label: 'Contact',
    icon: <PhoneOutlined />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

const mobileItems: MenuItem[] = [
  {
    key: 'mobileNav',
    label: 'Navigation',
    children: [
      {
        key: '/admin/dashboard',
        label: 'Dashboard',
        icon: <AppstoreOutlined />,
      },
      {
        key: '/admin/dashboard/events',
        label: 'Manage Events',
        icon: <CalendarOutlined />,
      },
      {
        key: '/admin/dashboard/leaders',
        label: 'Manage Leaders',
        icon: <TeamOutlined />,
      },
      {
        key: '/admin/dashboard/requests',
        label: 'Manage Access',
        icon: <LockOutlined />,
      },
      {
        key: '/admin/dashboard/contact',
        label: 'Contact',
        icon: <PhoneOutlined />,
      },
      {
        key: 'logout',
        label: 'Logout',
        icon: <LogoutOutlined />,
      },
    ],

  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  // const [height, setHeight] = useState('auto');
  const [userEmail, setUserEmail] = useState('');
  const [, startTransition] = useTransition();
  const [events, setEvents] = useState<EventsApiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const handleNavClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      startTransition(logout);
    }
    router.push(e.key);
  };

  const verify = async () => {
    const { email } = await verifyUser();
    setUserEmail(email);
  };

  useEffect(() => {
    verify();
  }, []);

  // useEffect(() => {
  //   if (ref.current) {
  //     const remToPx = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) * 6;
  //     setHeight(`${ref.current.scrollHeight + remToPx}px`);
  //   }
  // }, [pathname]);

  const userContextValue = useMemo(() => ({ userEmail, events, loading, setEvents }), [events, loading, userEmail]);

  const getEventRecords = async () => {
    const res = await fetch('/api/events');
    const data: EventsApiResponse[] = await res.json();

    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    getEventRecords();
  }, []);

  return (
    <UserContext value={userContextValue}>
      <div className={styles.container}>
        <div className={styles.container2}></div>
        <div className={styles.logoNav}>
          <Link href="/">
            <Image
              src="/admin_logo.png"
              alt="MPC logo"
              width={175}
              height={58}
            />
          </Link>
        </div>
        <div className={styles.layoutContainer}>
          <div className={styles.sideNav}>
            <div className={styles.navOptions}>
              <Menu
                onClick={handleNavClick}
                className={styles.nav}
                style={{ width: 256 }}
                defaultSelectedKeys={[pathname]}
                mode="inline"
                items={items}
              />
            </div>
            <div className={`${styles.navOptions} ${styles.mobileNav}`}>
              <Menu
                onClick={handleNavClick}
                className={styles.nav}
                style={{ width: '92vw' }}
                defaultSelectedKeys={[pathname]}
                mode="inline"
                items={mobileItems}
              />
            </div>
          </div>
          <motion.div
            className={styles.mainContent}
            // initial={{ height: 'auto' }}
            // animate={{ height }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <div ref={ref}>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </UserContext>
  );
}
