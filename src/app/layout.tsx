import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const metropolis = localFont({
  src: [
    {
      path: '../../public/fonts/Metropolis-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-metropolis',
});

export const metadata: Metadata = {
  title: 'Home | MPC EM',
  description: 'Montgomery Presbyterian Church English Ministry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={metropolis.className}>
        {children}
      </body>
    </html>
  );
}
