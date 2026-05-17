# Personal Business Card

一个现代化的个人名片网站，展示 Java 工程师的项目经验和技术栈。

## 技术栈

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署到 GitHub Pages

### 1. 在 GitHub 上创建仓库

- 访问 https://github.com/new
- 创建一个新仓库（推荐命名为 `personal-business-card`）
- 不要初始化 README、.gitignore 或 license

### 2. 推送到 GitHub

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/personal-business-card.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 3. 部署到 GitHub Pages

#### 方法 1：手动部署（简单）

```bash
# 构建项目
npm run build

# 将 dist 文件夹的内容推送到 gh-pages 分支
# 或者使用以下方法之一
```

#### 方法 2：使用 gh-pages 包（推荐）

```bash
# 安装 gh-pages
npm install -D gh-pages

# 在 package.json 中添加 deploy 脚本
# "deploy": "gh-pages -d dist"

# 部署
npm run deploy
```

### 4. 启用 GitHub Pages

- 进入仓库的 Settings
- 找到 Pages 部分
- 在 Source 中选择 `gh-pages` 分支
- 点击 Save

网站将会部署在：`https://你的用户名.github.io/personal-business-card/`

## 项目结构

```
├── src/
│   ├── components/      # 组件
│   ├── data/           # 数据
│   ├── App.tsx         # 主应用
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
└── dist/               # 构建输出
```

## 自定义内容

编辑 `src/data/projects.ts` 文件来更新：
- 个人信息
- 项目经验
- 技术栈
- 工作经历

