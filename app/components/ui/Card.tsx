'use client'
import { useState, useRef } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon, PlayIcon } from '@heroicons/react/24/outline'

const videoSources = [
  {
    title: 'Nim - Personal Website Template',
    description:
      'A modern, responsive personal website template built with Next.js and TypeScript.',
    thumbnailVideo: '/videos/nim-personal-website-template.mp4',
    fullVideo: '/videos/nim-personal-website-template.mp4',
  },
  {
    title: 'Nim - Personal Website Template 01',
    description:
      'Enhanced version of the personal website template with additional features.',
    thumbnailVideo: '/videos/nim-personal-website-template-01.mp4',
    fullVideo: '/videos/nim-personal-website-template-01.mp4',
  },
]

export function ProjectCard({
  project,
}: {
  project: (typeof videoSources)[0]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) // Référence pour la vidéo

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0 // Remet la vidéo au début
    }
  }

  return (
    <>
      <div
        className="relative bg-neutral-900 rounded-lg overflow-hidden cursor-pointer group hover:bg-neutral-800 transition-colors"
        onClick={() => setIsOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-video relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          >
            <source src={project.thumbnailVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <PlayIcon className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-neutral-400 text-sm">{project.description}</p>
        </div>
      </div>

      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-neutral-800">
              <DialogTitle className="text-white font-semibold">
                {project.title}
              </DialogTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video">
              <video
                className="w-full h-full"
                controls
                autoPlay
                muted
                playsInline
              >
                <source src={project.fullVideo} type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <p className="text-neutral-300">{project.description}</p>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
