'use client';
import { logout } from '@/app/lib/logout';
import { useTransition } from 'react';

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      onClick={() => startTransition(logout)}
      disabled={isPending}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
