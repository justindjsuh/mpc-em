import { createClient } from '@/app/lib/supabaseClient';
import LogoutButton from '@/app/ui/LogoutButton/LogoutButton';

import { redirect } from 'next/navigation';
import styles from './AdminDashboard.module.css';

const AdminDashboard: React.FC = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/admin/login');
  }

  return (
    <div className={styles.container}>
      <h1>TESTEST</h1>
      <p>
        Hello
        {data.user.email}
      </p>
      <LogoutButton />
    </div>
  );
};

export default AdminDashboard;
