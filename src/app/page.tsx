'use client';
import styles from './page.module.css';
import Button from './ui/Button/Button';
import Layout from './ui/Layout/Layout';

export default function Home() {
  return (
    <Layout title="">
      <div className={styles.page}>
        <Button text="Get Connected" theme="dark" onClick={() => {}} />
      </div>
    </Layout>
  );
}
