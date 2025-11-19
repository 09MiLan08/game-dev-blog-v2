// src/stores/articleStore.ts
import { defineStore } from 'pinia'

// 导出Article类型
export type Article = {
  id: number
  title: string
  author: string
  date: string
  desc: string
  content: string
}

// 导出Pinia仓库
export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
    currentArticle: null as Article | null,
  }),
  actions: {
    async fetchArticles() {
      this.articles = [
        {
          id: 1,
          title: 'Vue3多端响应式开发实战',
          author: '游戏开发小杨',
          date: '2025-10-20',
          desc: '本文详解Vue3的响应式原理...',
          content: 'Vue3 响应式基于 Proxy...',
        },
        {
          id: 2,
          title: 'Python脚本自动化游戏资源打包',
          author: '后端工具达人',
          date: '2025-10-15',
          desc: '用Python+PyInstaller实现游戏资源自动压缩...',
          content: '用 Python 脚本自动压缩游戏图片...',
        },
        {
          id: 3,
          title: 'Pinia状态管理最佳实践',
          author: '前端架构师',
          date: '2025-10-10',
          desc: '告别Vuex，用Pinia简化状态管理...',
          content: 'Pinia 替代 Vuex，语法更简洁...',
        },
      ]
    },
    getArticleById(id: number) {
      this.currentArticle = this.articles.find((item) => item.id === id) || null
    },
  },
})
