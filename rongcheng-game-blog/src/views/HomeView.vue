<template>
  <div class="home">
    <h2>欢迎来到蓉城游戏开发者技术社区</h2>
    <p>分享游戏开发、前端技术、Python工具等干货内容</p>

    <!-- 文章列表：遍历Pinia中的articles数据 -->
    <div class="article-list">
      <ArticleCard
        v-for="article in articleStore.articles"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :author="article.author"
        :date="article.date"
        :desc="article.desc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入文章卡片组件
import ArticleCard from '../components/ArticleCard.vue';
// 引入Pinia仓库
import { useArticleStore } from '../stores/articleStore';
// 引入Vue生命周期钩子
import { onMounted } from 'vue';

// 初始化Pinia仓库实例
const articleStore = useArticleStore();

// 组件挂载时，调用Pinia的action获取文章数据
onMounted(() => {
  // 调用fetchArticles初始化数据（模拟接口请求）
  articleStore.fetchArticles();
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem; /* 增加内边距，避免内容贴边 */
}
.article-list {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* 响应式网格布局 */
  gap: 1.5rem; /* 卡片间距 */
}
</style>
