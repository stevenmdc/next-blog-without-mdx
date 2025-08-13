// app/articles/page.tsx
import Link from 'next/link';
import { title } from 'process';

const articles = [
  {
    title: "5 Tiny CLI Tricks You (Probably) Didn't Know",
    description: "A lightning-round of command-line nuggets to level-up your dev workflow.",
    href: "/articles/cli-tricks",
    date: "2025-01-15"
  },
  {
    title: "6 Sneaky JavaScript Patterns to Cut Boilerplate",
    description: "Micro-optimizations and quality-of-life hacks to keep your scripts lean, readable, and bug-resistant.",
    href: "/articles/javascript-patterns",
    date: "2025-01-10"
  },
  {
    title: "6 CSS Patterns to Cut Boilerplate",
    description: "Micro-optimizations and quality-of-life hacks to keep your styles tight, maintainable, and future-proof.",
    href: "/articles/css-patterns",
    date: "2025-01-05"
  },
  {
    title: "Optimisation des performances avec Next.js : Guide complet",
    description: "Next.js offre de nombreuses fonctionnalités pour optimiser les performances de vos applications React. Découvrez les techniques essentielles pour créer des applications rapides et efficaces.",
    href: "/articles/nextjs-optimization",
    date: "2025-01-01"
  },
  {
    title: "Usefuls Git Commands",
    description: "A collection of useful Git commands to enhance your workflow and productivity.",
    href: "/articles/usefuls-git-cmd",
    date: "2025-08-08"
  },
];

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <article key={article.href} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
          <div className="space-y-3">
            <div className="space-y-2">
              <Link 
                href={article.href}
                className="block group"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h2>
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {article.description}
            </p>
            <Link 
              href={article.href}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors"
            >
              Lire l'article →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}