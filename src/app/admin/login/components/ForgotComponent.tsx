'use client';
import type { IViewProps } from './LoginComponent';
import { Button, Form, Input } from 'antd';
import styles from '../Login.module.css';

const ForgotComponent: React.FC<IViewProps> = ({ setView }) => {
  const handleForgotPasswordClick = () => {
    setView('forgotFinal');
  };

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
      <Button
        onClick={handleForgotPasswordClick}
        type="primary"
        htmlType="submit"
        block
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
      <Button className={styles.linkBtn} color="default" variant="link" onClick={() => setView('login')}>Return to sign in</Button>
    </>
  );
};

export default ForgotComponent;
