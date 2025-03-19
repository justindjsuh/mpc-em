import Head from 'next/head';
import Header from '../Header/Header';

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
