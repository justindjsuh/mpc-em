/* eslint-disable jsx-a11y/interactive-supports-focus */
'use client';
import type { Views } from '../page';
import { Button, Form, Input } from 'antd';
import styles from '../Login.module.css';

export interface IViewProps {
  setView: (view: Views) => void;
  isLoading?: boolean;
}

const LoginComponent: React.FC<IViewProps> = ({ setView, isLoading }) => {
  const passwordLabel = (
    <div className={styles.passwordHeader}>
      <span>Password</span>
      <div
        role="button"
        onClick={() => setView('forgot')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setView('forgot');
          }
        }}
      >
        Forgot your password?
      </div>
    </div>
  );

  return (
    <>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={passwordLabel}
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        loading={isLoading}
        block
        style={{
          padding: '1.5rem 0',
          fontWeight: 600,
          fontSize: '1rem',
          marginTop: '1rem',
          backgroundColor: '#4853EB',
        }}
      >
        Sign in
      </Button>
    </>
  );
};

export default LoginComponent;
