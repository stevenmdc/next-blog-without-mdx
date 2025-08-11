import Link from 'next/link';

const tutorials = [
  {
    title: "Optimisation des performances avec Next.js : Guide complet",
    description: "Next.js offre de nombreuses fonctionnalités pour optimiser les performances de vos applications React. Dans ce tutoriel, nous explorerons les techniques essentielles pour créer des applications rapides et efficaces.",
    href: "/tutorials/nextjs-optimization",
    date: "2025-01-08",
    level: "Intermédiaire",
    readingTime: "15 min"
  }
];

export default function TutorialsPage() {
  return (
    <div className="space-y-8">
      {tutorials.map((tutorial) => (
        <article key={tutorial.href} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                {tutorial.level}
              </span>
              <span>{tutorial.readingTime} de lecture</span>
              <time>
                {new Date(tutorial.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <Link 
              href={tutorial.href}
              className="block group"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tutorial.title}
              </h2>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {tutorial.description}
            </p>
            
            <Link 
              href={tutorial.href}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Commencer le tutoriel →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}