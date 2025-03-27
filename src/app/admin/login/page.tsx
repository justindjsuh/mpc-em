'use client';
import { Form } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ForgotComponent from './components/ForgotComponent';
import LoginComponent from './components/LoginComponent';
import styles from './Login.module.css';

export type Views = 'login' | 'register' | 'forgot' | 'forgotFinal';

// interface FieldType {
//   email?: string;
//   password?: string;
// }

const AdminLogin: React.FC = () => {
  const [view, setView] = useState<Views>('login');
  const [form] = Form.useForm();

  // const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  //   console.log(values);
  // };

  return (
    <div className={styles.container}>
      <div className={styles['sine-wave-overaly']}></div>
      <Link href="/" style={{ position: 'absolute', top: '3%', left: '5%' }}>
        <Image
          src="/admin_logo.png"
          alt="MPC logo"
          width={175}
          height={58}
        />
      </Link>
      <div className={styles.loginContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.loginDetails}
            initial={{ height: '400px' }}
            animate={{
              height: view === 'login' ? '400px' : '330px',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {view === 'forgotFinal'
              ? (
                  <motion.div
                    key={view}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3>Check your email</h3>
                    <p>
                      Thanks! If
                      {' '}
                      <strong>aewf@gmail.com</strong>
                      {' '}
                      matches an email we have on file, then we've sent you an email containing further instructions for resetting your password.
                    </p>
                    <br />
                    <p>
                      If you haven't received an email in 5 minutes, check your spam,
                      resend, or
                      {' '}
                      <span
                        className={styles.confirmationNav}
                        role="button"
                        tabIndex={0}
                        onClick={() => setView('forgot')}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setView('forgot');
                          }
                        }}
                      >
                        try a different email.
                      </span>
                    </p>
                  </motion.div>
                )
              : (
                  <motion.div
                    key={view}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3>{view === 'login' ? 'Sign in to your account' : 'Reset your password'}</h3>
                    <Form
                      className={styles.form}
                      form={form}
                      name="login"
                      layout="vertical"
                      requiredMark={false}
                    >
                      {view === 'login' && <LoginComponent setView={setView} />}
                      {view === 'forgot' && <ForgotComponent setView={setView} />}
                    </Form>
                  </motion.div>
                )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminLogin;
