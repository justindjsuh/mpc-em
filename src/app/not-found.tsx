// app/not-found.tsx
import Button from './ui/Button/Button';

export default function NotFound() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fafafa' }}>
      <div>
        <h1 style={{ fontSize: '8rem' }}>
          404
          {' '}
          <span style={{ fontSize: '2rem', marginLeft: '-1rem' }}>Not Found</span>
        </h1>
        <p style={{ marginBottom: '1rem' }}>Oops! The page you&apos;re looking for doesn&apos;t seem to exist. Let&apos;s get you back on track!</p>
        <Button filled iconTheme="dark" theme="light" text="Return Home" />
      </div>
    </div>
  );
}
