import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Selected Projects',
    template: 'Projects | Steven Madec',
  },
  description:
    "Découvrez mes projets récents, des applications web aux outils open source. Chaque projet est une opportunité d'apprendre et de partager.",
}

export default function TutorialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="projects-section">{children}</div>
}
