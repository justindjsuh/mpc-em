'use client';
import { Button as AntButton, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button/Button';
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
  const router = useRouter();

  // const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  //   console.log(values);
  // };

  const handleNavigation = () => {
    router.push('/visitor-information');
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.formContainer}>
          <h3>Join a community that is desiring God.</h3>
          <p>Get in touch with one of our leaders!</p>
          <hr className={styles.divider} />
          <div className={styles.form}>
            <Form
              form={form}
              name="get-connected"
              // onFinish={onFinish}
              layout="vertical"
              scrollToFirstError
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
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
                    <Input placeholder="Full Name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="phoneNumber" label="Phone Number">
                    <Input placeholder="Phone Number" size="large" />
                  </Form.Item>
                </Col>
              </Row>
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
                <Input placeholder="Email" size="large" />
              </Form.Item>
              <Form.Item name="purpose" label="How Can We Help?" rules={[{ required: true, message: 'Please select an item.' }]}>
                <Select size="large" placeholder="Select an option">
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
              <Form.Item name="message" label="Mesage">
                <Input.TextArea rows={4} />
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
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.churchImgContainer}>
          <Image
            src="/church_bg.png"
            alt="Church Background"
            fill
            sizes="(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 25vw"
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
        <div className={styles.glassCard}>
          <h3>Join Us For Worship</h3>
          <p>Tune in either online or join us in-person!</p>
          <Button text="Learn More" theme="dark" iconTheme="dark" onClick={handleNavigation} />
        </div>
      </div>
      <div className={styles.imgContainer} style={{ position: 'absolute', top: '2%', left: '2%' }}>
        <Image
          src="/logo-dark.png"
          alt="MPC logo"
          width={175}
          height={58}
        />
      </div>
    </div>
  );
};

export default GetConnected;
