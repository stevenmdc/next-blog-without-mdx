import { ProjectCard } from './Card'

const videoSources = [
  {
    title: "Nim - Personal Website Template",
    description: "A modern, responsive personal website template built with Next.js and TypeScript.",
    thumbnailVideo: "/videos/nim-personal-website-template.mp4",
    fullVideo: "/videos/nim-personal-website-template.mp4",
  },
  {
    title: "Nim - Personal Website Template 01",
    description: "Enhanced version of the personal website template with additional features.",
    thumbnailVideo: "/videos/nim-personal-website-template-01.mp4",
    fullVideo: "/videos/nim-personal-website-template-01.mp4",
  },
]

export function SelectedProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {videoSources.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}