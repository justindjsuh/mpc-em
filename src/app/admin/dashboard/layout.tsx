import type { MenuProps } from 'antd';
import { AppstoreOutlined, CalendarOutlined, LockOutlined, PhoneOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';

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
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.layoutContainer}>
        <div className={styles.sideNav}>
          <div className={styles.navOptions}>
            <Link href="/">
              <Image
                src="/admin_logo.png"
                alt="MPC logo"
                width={175}
                height={58}
              />
            </Link>
            <Menu
              className={styles.nav}
              style={{ width: 256 }}
              defaultSelectedKeys={['nav1']}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
