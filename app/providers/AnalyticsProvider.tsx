// app/providers/AnalyticsProvider.tsx
'use client';
import { useEffect } from 'react';
import { initAnalytics } from '../lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY) {
      initAnalytics(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY);
    }
  }, []);

    return <>{children}</>;
  }