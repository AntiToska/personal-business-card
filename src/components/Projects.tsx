import { useState } from 'react'
import { Briefcase } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const allTags = [
    'all',
    ...new Set(projects.flatMap((project) => project.tags)),
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with enhanced design */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              项目作品
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            精选<span className="text-gradient">项目展示</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            展示我参与过的一些代表性项目，涵盖电商、金融、企业级应用等多个领域
          </p>
        </div>

        {/* Filter tags with enhanced styling */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((tag, index) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden ${
                activeFilter === tag
                  ? 'bg-gradient-primary text-white shadow-xl shadow-purple-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {tag === 'all' ? '全部' : tag}
            </button>
          ))}
        </div>

        {/* Project grid with staggered animations */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg">暂无相关项目</p>
          </div>
        )}
      </div>
    </section>
  )
}
