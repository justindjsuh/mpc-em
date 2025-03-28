// app/admin/reset/layout.tsx

import { Suspense } from 'react';
// Import your page component

export default function ResetLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}
