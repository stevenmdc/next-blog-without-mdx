'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const pathMapping: Record<string, string> = {
  'articles': 'Articles',
  'cli-tricks': 'CLI Tricks',
  'javascript-patterns': 'JavaScript Patterns',
  'css-patterns': 'CSS Patterns',
  'tutorials': 'Tutoriels',
  'nextjs-optimization': 'Optimisation Next.js',
};

export default function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;
  
  const pathSegments = pathname.split('/').filter(Boolean);
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Accueil', href: '/' }
  ];
  
  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name = pathMapping[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      name,
      href: currentPath
    });
  });

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon 
                  className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 mx-2" 
                  aria-hidden="true" 
                />
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}