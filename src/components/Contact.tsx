import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: '邮箱', value: 'contact@example.com' },
    { icon: Phone, label: '电话', value: '+86 138-xxxx-xxxx' },
    { icon: MapPin, label: '地址', value: '中国' },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full mb-6">
            <Send className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              联系我
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            让我们<span className="text-gradient">一起合作</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            欢迎与我联系，讨论项目合作或技术交流，期待与你一起创造价值
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="font-semibold text-gray-800 dark:text-white text-lg">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                社交媒体:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gradient-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                发送消息
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    主题
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="消息主题"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    消息内容
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="请输入您的消息..."
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full py-5 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    发送消息
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
