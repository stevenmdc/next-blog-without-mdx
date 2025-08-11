'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNavigation() {
  const pathname = usePathname();
  
  const shouldHideNavigation = pathname.startsWith('/articles') || pathname.startsWith('/tutorials');
  
  if (shouldHideNavigation) {
    return null;
  }
  
  return <Navigation />;
}