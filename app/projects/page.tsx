import { SelectedProjects } from '../components/ui/SelectedProjects'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Projets
      </h1>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
        Découvrez mes projets les plus récents : des templates open-source
        gratuits, et des applications web, des composants tailwind CSS
        réutilisables.
      </p>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
        Chaque initiative est conçue pour inspirer les autres dans leur
        apprentissage de Nextjs, et ainsi favoriser le partage de connaissances
        avec les autres, et élever ainsi ensemble la communauté vers le haut.
      </p>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
        Vous pouvez les utiliser dans vos projets personnels ou professionnels.
      </p>
      <SelectedProjects />
    </div>
  )
}
