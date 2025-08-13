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
    { name: 'Optimisation Next.js', href: '/articles/nextjs-optimization' },
  ]},
  { name: 'Projects', href: '/projects', children: [
  ]},
  { name: 'About', href: '/about', children: [
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
                  ? 'text-white' 
                  : 'text-neutral-400'
              }`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}