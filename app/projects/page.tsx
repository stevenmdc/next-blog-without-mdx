import Link from 'next/link'
import { SelectedProjects } from '../components/ui/SelectedProjects'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Projets
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Découvrez mes projets récents, des applications web aux outils open
        source. Chaque projet est une opportunité d'apprendre et de partager.
      </p>
      <SelectedProjects />
    </div>
  )
}
