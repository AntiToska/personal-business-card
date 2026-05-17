import { ExternalLink, Github, FolderOpen } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl card-hover"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Card border gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Image section with enhanced effects */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        
        {/* Floating folder icon */}
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg">
            <FolderOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.link}
            className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="#"
            className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
        
        {/* Project title on hover */}
        <div className="absolute bottom-4 left-4 right-16">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6">
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Tags with enhanced styling */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 rounded-lg border border-purple-100 dark:border-purple-800/30"
              style={{
                animationDelay: `${(index * 0.1) + (tagIndex * 0.02)}s`
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
