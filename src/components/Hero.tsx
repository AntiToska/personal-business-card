import { ChevronDown, Github, Linkedin, Mail, Code2, Database, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(102, 126, 234, 0.4) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Avatar with enhanced effects */}
          <div className="relative inline-block mb-8 animate-float">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-primary p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-2xl">
                <span className="text-6xl sm:text-7xl font-bold text-gradient">J</span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-lg animate-pulse">
              <span className="w-4 h-4 bg-white rounded-full" />
            </div>
          </div>

          {/* Title with enhanced gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight">
            <span className="block mb-2">你好，我是</span>
            <span className="text-gradient">Java 工程师</span>
          </h1>

          {/* Subtitle with more personality */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            专注于企业级后端开发，热爱技术，追求卓越。
            <br className="hidden sm:block" />
            拥有丰富的分布式系统和高并发处理经验。
          </p>

          {/* Tech showcase */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Java 21</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <Database className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">DDD架构</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">高并发</span>
            </div>
          </div>

          {/* CTA buttons with enhanced styles */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                查看项目
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300"
            >
              联系我
            </a>
          </div>

          {/* Social links with enhanced design */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="#"
              className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="group p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator with enhanced animation */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700">
            <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
        </a>
      </div>
    </section>
  )
}
