/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import type { FormProps } from 'antd';
import { Form, notification } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login, resetPassword } from './actions';
import ForgotComponent from './components/ForgotComponent';
import LoginComponent from './components/LoginComponent';
import styles from './Login.module.css';

export type Views = 'login' | 'register' | 'forgot' | 'forgotFinal';
export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface FieldType {
  email: string;
  password: string;
}

const AdminLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [view, setView] = useState<Views>('login');
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const router = useRouter();

  const openNotificationWithIcon = (type: NotificationType, message: string, description?: string) => {
    api[type]({ message, description });
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setIsLoading(true);
    try {
      if (view === 'login') {
        const result = await login(values.email, values.password);

        if (result?.error?.message === 'Invalid login credentials') {
          openNotificationWithIcon('error', 'Login Failed', 'Incorrect email or password.');
        } else if (result?.status === 'success') {
          router.push('/admin/dashboard');
          // Delay the loading state change until after the navigation
          setTimeout(() => {
            setIsLoading(false);
          }, 0);

          // Prevent further actions after navigation
        } else {
          openNotificationWithIcon('warning', 'Login Failed', 'An error occurred, please try again.');
        }
      } else if (view === 'forgot') {
        await resetPassword(values.email);
        sessionStorage.setItem('resetEmail', email);
        setView('forgotFinal');
        setEmail(values.email);
        setIsLoading(false);
      }
    } catch {
      openNotificationWithIcon('warning', 'Login Failed', 'An error occurred, please try again.');
    } finally {
      if (view !== 'login') {
        setIsLoading(false);
      }
    }
  };

  const handleReload = () => window.location.reload();

  return (
    <div className={styles.container}>
      {contextHolder}
      <div role="button" onClick={handleReload} style={{ position: 'absolute', top: '3%', left: '5%', cursor: 'pointer' }}>
        <Image
          src="/admin_logo.png"
          alt="MPC logo"
          width={175}
          height={58}
          priority
        />
      </div>
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
                      <strong>{email}</strong>
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
                      onFinish={onFinish}
                      className={styles.form}
                      form={form}
                      name="login"
                      layout="vertical"
                      requiredMark={false}
                    >
                      {view === 'login' && <LoginComponent setView={setView} isLoading={isLoading} />}
                      {view === 'forgot' && <ForgotComponent setView={setView} isLoading={isLoading} />}
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
