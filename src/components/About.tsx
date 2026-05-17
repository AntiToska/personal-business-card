import { experiences } from '@/data/projects'
import { Briefcase, Calendar, Building2, User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6">
            <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              关于我
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            了解<span className="text-gradient">更多关于我</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            拥有企业级后端开发经验，专注于高可用、高性能系统设计与实现
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              职业背景
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                我是一名 Java 工程师，专注于企业级后端开发。
                曾参与多个大型系统的设计与开发，对高并发、高可用系统有深入研究。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                擅长 Spring Boot、Spring Cloud 微服务架构，同时具备全栈开发能力，
                能够独立完成从需求分析到系统实现的完整流程。
              </p>
            </div>
            
            {/* Quick stats with enhanced design */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-gradient mb-1">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">年经验</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-gradient mb-1">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">项目</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-gradient mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">技术栈</div>
              </div>
            </div>
          </div>

          {/* Visual card with enhanced effects */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-20 animate-pulse-glow" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-primary p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">J</span>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Java 工程师
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-6">
                  后端开发工程师
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                    Spring Boot
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    DDD架构
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                    高并发
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work experience timeline with enhanced design */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-10 text-center">
            工作经历
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-10 hidden md:block">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                        <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-bold text-xl text-gray-800 dark:text-white">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.position}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
