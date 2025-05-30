'use client';
import { AuthProvider, useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Protected({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push('/signin');
  }, [user, router]);
  if (!user) return null;
  return <>{children}</>;
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Protected>{children}</Protected>
    </AuthProvider>
  );
}