<template>
  <div class="detail-container">
    <!-- 加载状态 -->
    <div class="loading-tip" v-if="isLoading">
      <span class="spinner"></span> 加载文章中...
    </div>

    <!-- 错误提示 -->
    <div class="error-tip" v-else-if="errorMsg">
      <span class="error-icon">文章不存在或已删除</span> {{ errorMsg }}
      <button class="refresh-btn" @click="fetchArticle()">刷新重试</button>
    </div>

    <!-- 文章内容 -->
    <div class="article-wrapper" v-else>
      <!-- 文章头部 -->
      <div class="article-header">
        <h2 class="article-title">{{ article?.title }}</h2>
        <div class="article-meta">
          <span class="meta-item"> 作者：{{ article?.author }}</span>
          <span class="meta-item"> 发布时间：{{ article?.date }}</span>
          <span class="meta-item">
            标签：
            <span class="tag" v-for="(tag, idx) in article?.tags" :key="idx">
              {{ tag }}
            </span>
          </span>
        </div>
      </div>

      <!-- 文章正文 -->
      <div class="article-content">
        <p
          v-for="(paragraph, idx) in formatContent(article?.fullContent || '')"
          :key="idx"
        >
          {{ paragraph }}
        </p>
      </div>

      <!-- 文章操作 -->
      <div class="article-actions">
        <button class="collect-btn" @click="isCollected = !isCollected">
          <span class="icon">{{ isCollected ? '★' : '☆' }}</span>
          {{ isCollected ? '已收藏' : '收藏文章' }}
        </button>
        <button class="share-btn" @click="handleShare()">
          <span class="icon"></span> 分享文章
        </button>
      </div>

      <!-- 返回按钮 -->
      <button class="back-btn" @click="goBack()">
        <span class="icon"></span> 返回技术库
      </button>

      <!-- 回到顶部 -->
      <button
        class="to-top-btn"
        @click="scrollToTop()"
        :class="{ show: isShowToTop }"
      >
        ↑ 顶部
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { techData, type Article } from '@/utils/techData';

// 路由实例
const route = useRoute();
const router = useRouter();

// 响应式状态：处理加载、错误、文章数据
const isLoading = ref(true);
const errorMsg = ref('');
const article = ref<Article | undefined>(undefined);
const isCollected = ref(false);
const isShowToTop = ref(false);

// 格式化文章内容
const formatContent = (content: string) => {
  // 按换行符分割成段落，过滤空行
  return content.split('\n').filter((para) => para.trim());
};

// 核心：获取文章数据
const fetchArticle = () => {
  isLoading.value = true;
  errorMsg.value = '';

  try {
    // 处理路由参数：严格校验，避免报错
    const tabKey = Number(route.query.tab);
    const articleTitle = route.query.title as string | undefined;

    // 校验参数合法性
    if (isNaN(tabKey)) throw new Error('路由参数错误：分类索引无效');
    if (!articleTitle) throw new Error('路由参数错误：文章标题缺失');
    if (!techData[tabKey]) throw new Error('该技术分类不存在');

    //  查找对应文章
    const targetArticle = techData[tabKey].find(
      (item) => item.title === articleTitle
    );
    if (!targetArticle) throw new Error('文章不存在或已被删除');

    //  赋值文章数据
    article.value = targetArticle;
    // 初始化收藏状态
    isCollected.value = false;
  } catch (err) {
    // 捕获错误并显示
    errorMsg.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

// 返回逻辑
const goBack = () => {
  const tabKey = Number(route.query.tab) || 0;
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ path: '/tech-lirary', query: { tab: tabKey.toString() } });
  }
};

// 分享功能
const handleShare = () => {
  if (!article.value) return;
  alert(`分享文章《${article.value.title}》\n链接：${window.location.href}`);
};

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 监听滚动
const handleScroll = () => {
  isShowToTop.value = window.scrollY > 300;
};

// 生命周期：挂载时获取文章，监听滚动
onMounted(() => {
  fetchArticle();
  window.addEventListener('scroll', handleScroll);
});

// 生命周期：卸载时移除滚动监听，避免内存泄漏
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 全局容器：居中+响应式 */
.detail-container {
  max-width: 800px;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* 加载状态 */
.loading-tip {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #777;
  font-size: 1rem;
}
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #f0f8fb;
  border-top: 3px solid #38b2ac;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 错误提示 */
.error-tip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #e74c3c;
  font-size: 1rem;
  text-align: center;
  padding: 2rem;
  background: #fef7f7;
  border-radius: 8px;
  width: 100%;
}
.error-icon {
  font-size: 1.5rem;
}
.refresh-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: #38b2ac;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}
.refresh-btn:hover {
  background: #2d9690;
}

/* 文章容器 */
.article-wrapper {
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* 文章头部 */
.article-header {
  margin-bottom: 1.8rem;
  border-bottom: 1px solid #f5f7fa;
  padding-bottom: 1rem;
}
.article-title {
  font-size: 1.6rem;
  color: #2c3e50;
  margin: 0 0 1rem;
  line-height: 1.4;
}
.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.9rem;
  color: #777;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.tag {
  background: #f0f8fb;
  color: #38b2ac;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

/* 文章正文 */
.article-content {
  margin-bottom: 2rem;
  font-size: 1.05rem;
  color: #333;
  line-height: 1.8;
}
.article-content p {
  margin: 0 0 1.2rem;
  text-indent: 2em;
}
.article-content p:last-child {
  margin-bottom: 0;
}

/* 文章操作按钮 */
.article-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.collect-btn,
.share-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.collect-btn {
  background: #fef6e7;
  color: #f39c12;
}
.collect-btn:hover {
  background: #fdeccd;
}
.share-btn {
  background: #f0f8fb;
  color: #38b2ac;
}
.share-btn:hover {
  background: #e8f4f8;
}
.icon {
  font-size: 1.1rem;
}

/* 返回按钮 */
.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: none;
  background: #38b2ac;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.3s ease;
}
.back-btn:hover {
  background: #2d9690;
}

/* 回到顶部按钮 */
.to-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: #38b2ac;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
}
.to-top-btn.show {
  opacity: 1;
  visibility: visible;
}
.to-top-btn:hover {
  background: #2d9690;
  transform: translateY(-3px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .article-wrapper {
    padding: 1.2rem;
  }
  .article-title {
    font-size: 1.3rem;
  }
  .article-content {
    font-size: 0.95rem;
    line-height: 1.7;
  }
  .article-content p {
    text-indent: 1.5em;
  }
  .article-actions {
    flex-direction: column;
  }
  .collect-btn,
  .share-btn,
  .back-btn {
    width: 100%;
    justify-content: center;
  }
  .to-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}
</style>
