'use client';
import type { FormProps } from 'antd';
import type { NotificationType } from '../login/page';
import { Button, Form, Input, notification } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import styles from './Reset.module.css';

export interface FieldType {
  password: string;
}

const AdminLogin: React.FC = () => {
  const [resetStatus, setResetStatus] = useState<{ status: null | 'failed' | 'success'; message: string }>({ status: null, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const openNotificationWithIcon = (type: NotificationType, message: string, description?: string) => {
    api[type]({ message, description });
  };

  useEffect(() => {
    const accessToken = searchParams.get('code');
    if (!accessToken) {
      setResetStatus({ status: 'failed', message: 'Invalid or expired reset link.' });
    }
  }, [searchParams]);

  const handleReset = async (password: string) => {
    setIsLoading(true);

    const accessToken = searchParams.get('code');

    if (!accessToken) {
      setResetStatus({ status: 'failed', message: 'Missing Token' });
      return;
    }

    const response = await fetch('/api/auth/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: accessToken, password }),
    });

    const result = await response.json();

    if (result.status === 'Success') {
      setResetStatus({ status: 'success', message: 'Password successfully reset' });
      setIsLoading(false);
      return;
    }

    if (result.status === 'Failed') {
      setResetStatus({ status: 'failed', message: 'Error updating user' });
      openNotificationWithIcon('error', 'An Error Occurred', 'Your reset link may have expired. Please restart the password reset process and try again. If the issue persists, please consult an admin.');
    }

    setIsLoading(false);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    handleReset(values.password);
  };

  const successView = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>Password Reset</h3>
      <p>
        Your password has successfully been reset.
      </p>
      <br />
      <p>
        <span
          className={styles.confirmationNav}
          role="button"
          tabIndex={0}
          onClick={() => router.push('/admin/login')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push('/admin/login');
            }
          }}
        >
          Return to sign in
        </span>
      </p>
    </motion.div>
  );

  const failedView = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>Invalid or expired link</h3>
      <p>
        Your reset link is invalid or has expired. Please initiate a new password reset process or try to
        {' '}
      </p>
      <br />
      <p>
        <span
          className={styles.confirmationNav}
          role="button"
          tabIndex={0}
          onClick={() => router.push('/admin/login')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push('/admin/login');
            }
          }}
        >
          sign in again.
        </span>
      </p>
    </motion.div>
  );

  const baseView = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>Reset your password</h3>
      <Form
        onFinish={onFinish}
        className={styles.form}
        form={form}
        name="login"
        layout="vertical"
        requiredMark={false}
      >
        <>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please enter a new password' },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isLoading}
            style={{
              padding: '1.5rem 0',
              fontWeight: 600,
              fontSize: '1rem',
              marginTop: '1rem',
              backgroundColor: '#4853EB',
            }}
          >
            Continue
          </Button>
          {/* <Button className={styles.linkBtn} color="default" variant="link" onClick={() => setView('login')}>Return to sign in</Button> */}
        </>
      </Form>
    </motion.div>
  );

  const getResetView = () => {
    if (resetStatus.status === 'success') {
      return successView;
    } else if (resetStatus.status === 'failed') {
      return failedView;
    } else {
      return baseView;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.container}>
        {contextHolder}
        <Link href="/admin/login" style={{ position: 'absolute', top: '3%', left: '5%' }}>
          <Image
            src="/admin_logo.png"
            alt="MPC logo"
            width={175}
            height={58}
            priority
          />
        </Link>
        <div className={styles.loginContainer}>
          <motion.div className={styles.loginDetails}>
            {getResetView()}
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
};

export default AdminLogin;
