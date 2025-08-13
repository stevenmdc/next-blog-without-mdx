import { ProjectCard } from './Card'

const videoSources = [
  {
    title: "Motion",
    description: "A new way to craft motion website, faster.",
    thumbnailVideo: "/videos/motion-ui-vd002.mp4",
    fullVideo: "/videos/motion-ui-vd002.mp4",
  },
  {
    title: "Motion Pro",
    description: "UI kit to make beautiful, animated interfaces with ease.",
    thumbnailVideo: "/videos/motion-ui-vd001.mp4",
    fullVideo: "/videos/motion-ui-vd001.mp4",
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