'use client';
// app/not-found.tsx
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';
import { useRouter } from 'next/navigation';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default function NotFound() {
  const { styles } = useStyle();
  const router = useRouter();

  return (
    <>
      <ConfigProvider
        button={{
          className: styles.linearGradientButton,
        }}
      >
        <Space>
          <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fafafa' }}>
            <div>
              <h1 style={{ fontSize: '8rem' }}>
                404
                {' '}
                <span style={{ fontSize: '2rem', marginLeft: '-1rem' }}>Not Found</span>
              </h1>
              <p style={{ marginBottom: '1rem' }}>Oops! The page you&apos;re looking for doesn&apos;t seem to exist. Let&apos;s get you back on track!</p>
              <Button type="primary" size="large" onClick={() => router.push('/')}>Return Home</Button>
            </div>
          </div>
        </Space>
      </ConfigProvider>
    </>
  );
}
