import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Articles',
    template: '%s | Articles | John Smith'
  },
  description: 'Découvrez mes derniers articles sur le développement web, JavaScript, CSS et les outils de développement.',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="articles-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Articles</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Conseils pratiques et astuces pour améliorer votre workflow de développement
        </p>
      </div>
      {children}
    </div>
  );
}