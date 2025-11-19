<template>
  <div class="article-detail">
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="!article" class="error">文章不存在或已删除</div>
    <div v-else>
      <!-- 移除非空断言，因为v-else已经确保article存在 -->
      <h1 class="detail-title">{{ article.title }}</h1>
      <div class="detail-meta">
        <span>作者：{{ article.author }}</span>
        <span>发布日期：{{ article.date }}</span>
      </div>
      <div class="detail-content">
        <p>{{ article.content }}</p>
      </div>
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </div>

    <!-- 修正返回顶部按钮 -->
    <button class="back-to-top" @click="scrollToTop" v-show="showBackToTop">↑ 返回顶部</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArticleStore } from '../stores/articleStore'
import type { Article } from '../stores/articleStore'

const route = useRoute()
const articleStore = useArticleStore()
const article = ref<Article | null>(null)
const loading = ref(true)
const showBackToTop = ref(false) // 新增：控制按钮显示的响应式变量

// 滚动处理函数
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

// 返回顶部函数
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  const articleId = Number(route.params.id) || 0

  // 添加滚动事件监听
  window.addEventListener('scroll', handleScroll)

  await articleStore.fetchArticles()
  articleStore.getArticleById(articleId)
  article.value = articleStore.currentArticle
  loading.value = false
})

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 样式保持不变 */
.article-detail {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
}
.detail-title {
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}
.detail-meta {
  display: flex;
  gap: 2rem;
  color: #999;
  margin: 1rem 0 2rem;
  font-size: 0.9rem;
}
.detail-content {
  line-height: 2;
  color: #333;
  margin-bottom: 2rem;
}
.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #42b983;
  text-decoration: none;
  border: 1px solid #42b983;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s;
}
.back-link:hover {
  background: #42b983;
  color: #fff;
}
.loading,
.error {
  text-align: center;
  padding: 5rem 0;
  color: #666;
  font-size: 1.1rem;
}
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.6rem 1rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
  z-index: 99;
}
.back-to-top:hover {
  background: #359469;
}
</style>
