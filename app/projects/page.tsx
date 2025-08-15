'use client';
import { motion } from 'framer-motion';
import { SelectedProjects } from '../components/ui/SelectedProjects'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-3xl font-bold text-neutral-400 dark:text-white mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projets
      </motion.h1>
      <motion.p 
        className="text-base text-neutral-400 dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Découvrez mes projets les plus récents : des templates open-source
        gratuits, et des applications web, des composants tailwind CSS
        réutilisables.
      </motion.p>
      <motion.p 
        className="text-base text-neutral-400 dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Chaque initiative est conçue pour inspirer les autres dans leur
        apprentissage de Nextjs, et ainsi favoriser le partage de connaissances
        avec les autres, et élever ainsi ensemble la communauté vers le haut.
      </motion.p>
      <motion.p 
        className="text-base text-neutral-400 dark:text-neutral-400 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Vous pouvez les utiliser dans vos projets personnels ou professionnels.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SelectedProjects />
      </motion.div>
    </div>
  )
}
