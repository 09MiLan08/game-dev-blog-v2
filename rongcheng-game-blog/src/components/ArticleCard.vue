<template>
  <div class="article-card">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-meta">
      <span>作者：{{ author }}</span>
      <span>日期：{{ date }}</span>
    </div>
    <p class="card-desc">{{ desc }}</p>
    <router-link :to="`/articles/${id}`" class="card-link">阅读全文 →</router-link>
  </div>
</template>

<script setup lang="ts">
// 接收父组件传递的文章数据
defineProps<{
  id: number
  title: string
  author: string
  date: string
  desc: string
}>()
</script>

<style scoped>
.article-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s;
}
.article-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.card-title {
  margin: 0 0 1rem;
  color: #2c3e50;
}
.card-meta {
  display: flex;
  gap: 1.5rem;
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.card-desc {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}
.card-link {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
}
.card-link:hover {
  text-decoration: underline;
}
</style>
