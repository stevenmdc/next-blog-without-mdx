'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
}

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Articles', href: '/articles', children: [
    { name: 'CLI Tricks', href: '/articles/cli-tricks' },
    { name: 'JavaScript Patterns', href: '/articles/javascript-patterns' },
    { name: 'CSS Patterns', href: '/articles/css-patterns' },
  ]},
  { name: 'Tutoriels', href: '/tutorials', children: [
    { name: 'Optimisation Next.js', href: '/tutorials/nextjs-optimization' },
  ]},
];

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`mb-8 ${className}`}>
      <div className="flex flex-wrap gap-6">
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            <Link
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 ${
                isActiveLink(item.href) 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
            
            {item.children && (
              <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg border border-gray-200 dark:border-zinc-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-zinc-700 ${
                      pathname === child.href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}