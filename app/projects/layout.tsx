import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Tutoriels',
    template: '%s | Tutoriels | John Smith'
  },
  description: 'Guides complets et tutoriels détaillés pour maîtriser les technologies web modernes.',
};

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tutorials-section">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Tutoriels</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Guides détaillés pour approfondir vos connaissances en développement web
        </p>
      </div>
      {children}
    </div>
  );
}