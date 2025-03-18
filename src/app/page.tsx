'use client';
import styles from './page.module.css';
import Button from './ui/Button/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <Button text="Get Connected" theme="dark" onClick={() => {}} />
    </div>
  );
}
