import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // GitHub Pages 部署配置：将下面的 /your-repo-name/ 替换为你的仓库名称
  // base: '/personal-business-card/',
})