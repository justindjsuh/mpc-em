'use client';
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
    key: 'nav1',
    label: 'Dashboard',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'nav2',
    label: 'Manage Events',
    icon: <CalendarOutlined />,
  },
  {
    key: 'nav3',
    label: 'Manage Leaders',
    icon: <TeamOutlined />,
  },
  {
    key: 'nav4',
    label: 'Manage Access',
    icon: <LockOutlined />,
  },
  {
    key: 'nav5',
    label: 'Contact',
    icon: <PhoneOutlined />,
  },
  {
    key: 'nav6',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [height, setHeight] = useState('auto');
  const [userEmail, setUserEmail] = useState('');
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const handleNavClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case 'nav1':
        router.push('/admin/dashboard');
        break;
      case 'nav2':
        router.push('/admin/dashboard/events');
        break;
      case 'nav3':
        router.push('/admin/dashboard/leaders');
        break;
      case 'nav6':
        startTransition(logout);
    }
  };

  const verify = async () => {
    const { email } = await verifyUser();
    setUserEmail(email);
  };

  useEffect(() => {
    verify();
  }, []);

  useEffect(() => {
    if (ref.current) {
      const remToPx = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) * 6;
      setHeight(`${ref.current.scrollHeight + remToPx}px`);
    }
  }, [pathname]);

  const userContextValue = useMemo(() => ({ userEmail }), [userEmail]);

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
                defaultSelectedKeys={['nav1']}
                mode="inline"
                items={items}
              />
            </div>
          </div>
          <motion.div
            className={styles.mainContent}
            initial={{ height: 'auto' }}
            animate={{ height }}
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
