<template>
  <div class="tech-library">
    <!-- 简单选项卡 -->
    <div class="tabs">
      <button
        v-for="(tab, idx) in tabs"
        :key="idx"
        @click="activeTab = idx"
        :class="{ active: activeTab === idx }"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 文章列表 -->
    <div class="article-list">
      <div
        v-for="(article, idx) in currentArticles"
        :key="idx"
        class="article-card"
      >
        <div class="article-header">
          <h3>{{ article.title }}</h3>
          <span class="date">{{ article.date }}</span>
        </div>
        <p class="summary">{{ article.summary }}</p>
        <div class="article-footer">
          <span class="author">作者: {{ article.author }}</span>
          <RouterLink
            :to="`/article-detail?tab=${activeTab}&id=${idx}`"
            class="read-btn"
          >
            阅读全文
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 简单分页 -->
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        下一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { techData } from '@/utils/techData';

// 简单状态管理
const tabs = ['技术文章', '引擎周刊', '精品教程'];
const activeTab = ref(0);
const currentPage = ref(1);
const pageSize = 6; // 每页6篇文章

// 计算当前显示的文章
const currentArticles = computed(() => {
  const articles = techData[activeTab.value] || [];
  const start = (currentPage.value - 1) * pageSize;
  return articles.slice(start, start + pageSize);
});

// 总页数
const totalPages = computed(() => {
  const articles = techData[activeTab.value] || [];
  return Math.ceil(articles.length / pageSize);
});

// 翻页方法
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

// 切换标签时重置页码
const switchTab = (idx: number) => {
  activeTab.value = idx;
  currentPage.value = 1;
};
</script>

<style scoped>
.tech-library {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* 选项卡样式 */
.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.tabs button {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.tabs button.active {
  color: #38b2ac;
  border-bottom-color: #38b2ac;
  font-weight: bold;
}

.tabs button:hover {
  background: #f5f5f5;
}

/* 文章列表 */
.article-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #38b2ac;
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 10px;
}

.article-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 18px;
  flex: 1;
}

.date {
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  margin-left: 15px;
}

.summary {
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.author {
  color: #888;
  font-size: 14px;
}

.read-btn {
  background: #38b2ac;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: background 0.3s;
}

.read-btn:hover {
  background: #2d9690;
}

/* 分页样式 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
}

.pagination button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.pagination button:hover:not(:disabled) {
  background: #38b2ac;
  color: white;
  border-color: #38b2ac;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination span {
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .tech-library {
    padding: 15px;
  }

  .article-header {
    flex-direction: column;
    gap: 5px;
  }

  .date {
    margin-left: 0;
  }

  .pagination {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
