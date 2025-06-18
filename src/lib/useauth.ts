'use client';

import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { useRouter } from 'next/navigation';

export function useAuthRedirect() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/signin');
      }
      setLoading(false);
    };
    getSession();
  }, [router]);

  return loading;
}
