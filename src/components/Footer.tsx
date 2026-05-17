import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-white font-bold text-xl">Java 工程师</span>
            </div>
            <p className="text-gray-500 text-center md:text-left max-w-sm">
              专注于企业级后端开发，热爱技术，追求卓越
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="hover:text-white transition-colors duration-200 font-medium">
                关于
              </a>
              <a href="#projects" className="hover:text-white transition-colors duration-200 font-medium">
                项目
              </a>
              <a href="#skills" className="hover:text-white transition-colors duration-200 font-medium">
                技能
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-200 font-medium">
                联系
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:scale-110">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:scale-110">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:scale-110">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Java 工程师</span>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2024 Java 工程师. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
