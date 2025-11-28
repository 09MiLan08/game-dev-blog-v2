<template>
  <div class="recruit-section">
    <h3>成都本地游戏项目招募</h3>
    <div v-for="project in projects" :key="project.id" class="project-item">
      <h4>{{ project.title }}</h4>
      <p>招募岗位：{{ project.post }}</p>
      <p>技术要求：{{ project.tech }}</p>
      <p>联系方式：{{ project.contact }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: '独立像素风游戏开发',
    post: '前端开发、美术设计师(技术向)',
    tech: 'Vue3、Canvas、Aseprite',
    contact: '微信：xx15811297761h',
  },
  {
    id: 2,
    title: '游戏数据统计系统开发',
    post: 'Python后端、数据分析师',
    tech: 'Python、MySQL、FastAPI',
    contact: '邮箱：3310823343@qq.com',
  },
];
</script>

<style scoped>
.project-item {
  border-bottom: 1px dashed #eee;
  padding: 1rem 0;
}
.project-item:last-child {
  border: none;
}
</style>
