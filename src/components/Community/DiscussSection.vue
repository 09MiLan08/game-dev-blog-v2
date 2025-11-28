<template>
  <div class="discuss-section">
    <h3>社区综合讨论区</h3>
    <div class="discuss-item" v-for="item in discussList" :key="item.id">
      <div class="discuss-header">
        <span class="author">{{ item.author }}</span>
        <span class="time">{{ item.time }}</span>
      </div>
      <p class="discuss-content">{{ item.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const discussList = [
  {
    id: 1,
    author: '游戏开发阿泽',
    time: '2025-11-18',
    content:
      '有没有大佬分享下Unity和Vue3跨端通信的经验？做本地小游戏需要用到这个',
  },
  {
    id: 2,
    author: '前端小卷',
    time: '2025-11-15',
    content: 'MySQL存储游戏玩家数据时，怎么优化查询速度？数据量一大就卡顿',
  },
];
</script>

<style scoped>
.discuss-item {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}
.discuss-header {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}
</style>
