import { skills } from '@/data/projects'
import { Cpu } from 'lucide-react'

export default function Skills() {
  const categories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              技术栈
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            我的<span className="text-gradient">技术能力</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            熟练掌握多种技术栈，具备全栈开发能力，持续学习和探索新技术
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{category.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1500 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 h-3 bg-gradient-primary rounded-full opacity-20 blur-sm" 
                             style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats section with enhanced design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: '项目经验', value: '6+' },
            { label: '技术栈', value: '10+' },
            { label: '持续学习', value: '始终' },
            { label: '代码质量', value: '高' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl font-extrabold text-gradient mb-3 transition-transform group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
