'use client';
import { Button as AntButton, Checkbox, Form, Input, Select } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GetConnected.module.css';

// type PurposeType = 'Visiting' | 'Family Group' | 'Bible Study' | 'Other';

// interface FieldType {
//   email?: string;
//   fullName?: string;
//   message?: string;
//   phoneNumber?: string;
//   purpose?: PurposeType;
// }

const GetConnected: React.FC = () => {
  const [form] = Form.useForm();

  // const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  //   console.log(values);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.rightContainer}>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
        >
          Join a community that is desiring God.
        </motion.h3>
      </div>
      <div className={styles.leftContainer}>
        <div className={styles.formContainer}>
          <h3>Get in touch</h3>
          <motion.div
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <Form
              form={form}
              name="get-connected"
              // onFinish={onFinish}
              layout="vertical"
              scrollToFirstError
            >
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your full name.',
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item name="phoneNumber" label="Phone Number">
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: 'email',
                    message: 'Please enter a valid email.',
                  },
                  {
                    required: true,
                    message: 'Please enter your email.',
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item name="purpose" label="How Can We Help?" rules={[{ required: true, message: 'Please select an item.' }]}>
                <Select size="large">
                  <Select.Option value="Visiting">Visiting</Select.Option>
                  <Select.Option value="Family Groups">Family Groups</Select.Option>
                  <Select.Option value="Bible Study">Bible Study</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Checkbox>
                  Would you like to meet with the pastor during your visit?
                </Checkbox>
              </Form.Item>
              <Form.Item name="message" label="Message">
                <Input.TextArea rows={2} />
              </Form.Item>
              <AntButton
                type="primary"
                htmlType="submit"
                block
                style={{ padding: '1.5rem 0', backgroundColor: '#262626' }}
              >
                Get Connected
              </AntButton>
            </Form>
          </motion.div>
        </div>
      </div>
      <Link href="/" className={styles.imgContainer} style={{ position: 'absolute', top: '5%', left: '5%' }}>
        <Image
          src="/logo-white.png"
          alt="MPC logo"
          width={175}
          height={58}
        />
      </Link>
    </div>
  );
};

export default GetConnected;
