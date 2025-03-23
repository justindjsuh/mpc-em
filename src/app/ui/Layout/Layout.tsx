'use client';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, title }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top on route change
  }, [pathname]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
