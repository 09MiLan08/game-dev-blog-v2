<template>
  <div class="discuss-section">
    <div class="section-header">
      <h3 class="section-title">游戏开发综合讨论区</h3>
      <!-- 发布帖子入口 -->
      <button class="post-btn" @click="showPostModal = true">发布帖子</button>
    </div>

    <!-- 讨论列表 -->
    <div class="discuss-list">
      <div class="discuss-item" v-for="(item, idx) in discussList" :key="idx">
        <div class="user-info">
          <div class="user-avatar">{{ item.user.substring(0, 1) }}</div>
          <div class="user-detail">
            <p class="user-name">{{ item.user }}</p>
            <p class="post-time">{{ item.time }}</p>
          </div>
        </div>
        <div class="post-content">
          <h4 class="post-title">{{ item.title }}</h4>
          <p class="post-desc">{{ item.content }}</p>
          <div class="post-tags">
            <span class="post-tag" v-for="(tag, tIdx) in item.tags" :key="tIdx">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="post-actions">
          <button class="action-btn" @click="handleLike(idx)">
            <span class="action-icon">👍</span>
            <span class="action-count">{{ item.likeNum }}</span>
          </button>
          <button class="action-btn" @click="handleCollect(idx)">
            <span class="action-icon">{{ item.isCollected ? '★' : '☆' }}</span>
            <span class="action-count">{{ item.collectNum }}</span>
          </button>
          <button class="action-btn">
            <span class="action-icon">💬</span>
            <span class="action-count">{{ item.commentNum }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 发布帖子弹窗（前端模拟） -->
    <div class="modal-mask" v-if="showPostModal">
      <div class="modal-container">
        <div class="modal-header">
          <h4>发布讨论帖子</h4>
          <button class="close-btn" @click="showPostModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">帖子标题：</label>
            <input
              v-model="postForm.title"
              class="form-control"
              placeholder="请输入讨论主题"
            />
          </div>
          <div class="form-group">
            <label class="form-label">讨论内容：</label>
            <textarea
              v-model="postForm.content"
              class="form-control"
              rows="4"
              placeholder="请详细描述你的问题或分享"
            ></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">标签（用逗号分隔）：</label>
            <input
              v-model="postForm.tags"
              class="form-control"
              placeholder="比如：Unity、性能优化、成都"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showPostModal = false">
            取消
          </button>
          <button class="confirm-btn" @click="handlePost">发布</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 讨论列表数据
const discussList = ref([
  {
    user: '游戏小萌新',
    time: '2025-11-20 14:32',
    title: 'Unity和Vue3怎么实现数据通信？',
    content:
      '想做一个Unity游戏内嵌Vue3页面的项目，请问两者之间怎么传递数据？比如游戏内角色信息同步到Vue页面，有没有成都的大佬分享下经验？',
    tags: ['Unity', 'Vue3', '跨端通信', '成都'],
    likeNum: 18,
    collectNum: 7,
    commentNum: 12,
    isCollected: false,
  },
  {
    user: '后端老司机',
    time: '2025-11-18 09:45',
    title: '游戏高并发场景下MySQL怎么优化？',
    content:
      '我们工作室的小游戏日活快1万了，最近数据库查询有点慢，主要是玩家道具、积分查询频繁，有没有优化方案？成都有没有做游戏后端的朋友交流下？',
    tags: 'MySQL、性能优化、游戏后端'.split('、'),
    likeNum: 25,
    collectNum: 11,
    commentNum: 16,
    isCollected: false,
  },
]);

// 发布帖子弹窗
const showPostModal = ref(false);
const postForm = ref({
  title: '',
  content: '',
  tags: '',
});

// 点赞
const handleLike = (idx: number) => {
  discussList.value[idx]!.likeNum++;
};

// 收藏
const handleCollect = (idx: number) => {
  const item = discussList.value[idx]!;
  item.isCollected = !item.isCollected;
  item.collectNum += item.isCollected ? 1 : -1;
};

// 发布帖子
const handlePost = () => {
  if (!postForm.value.title || !postForm.value.content) {
    alert('标题和内容不能为空！');
    return;
  }
  const newPost = {
    user: '我是开发者',
    time:
      new Date().toLocaleDateString() +
      ' ' +
      new Date().toLocaleTimeString().slice(0, 5),
    title: postForm.value.title,
    content: postForm.value.content,
    tags: postForm.value.tags
      ? postForm.value.tags.split(',').map((tag) => tag.trim())
      : ['未分类'],
    likeNum: 0,
    collectNum: 0,
    commentNum: 0,
    isCollected: false,
  };
  discussList.value.unshift(newPost); // 新增帖子放最前面
  showPostModal.value = false;
  postForm.value = { title: '', content: '', tags: '' };
  alert('帖子发布成功！');
};
</script>

<style scoped>
.discuss-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.section-title::before {
  content: '';
  width: 4px;
  height: 20px;
  background: #38b2ac;
  border-radius: 2px;
}
.post-btn {
  background: #38b2ac;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}
.post-btn:hover {
  background: #2d9690;
}
.discuss-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.discuss-item {
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  border-bottom: 1px solid #f5f7fa;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
}
.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0f8fb;
  color: #38b2ac;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.user-name {
  font-size: 0.9rem;
  color: #2c3e50;
  margin: 0 0 0.2rem;
}
.post-time {
  font-size: 0.8rem;
  color: #999;
  margin: 0;
}
.post-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.post-title {
  font-size: 1.05rem;
  color: #2c3e50;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}
.post-title:hover {
  color: #38b2ac;
}
.post-desc {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.post-tag {
  font-size: 0.8rem;
  color: #777;
  background: #f5f7fa;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.post-actions {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  min-width: 60px;
}
.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}
.action-btn:hover {
  color: #38b2ac;
}
.action-icon {
  font-size: 1.1rem;
}

/* 发布帖子弹窗 */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-container {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  padding: 1.5rem;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}
.modal-header h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
}
.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-label {
  font-size: 0.95rem;
  color: #555;
}
.form-control {
  padding: 0.7rem;
  border: 1px solid #eee;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #333;
}
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.cancel-btn {
  background: #f5f7fa;
  color: #777;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
}
.confirm-btn {
  background: #38b2ac;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .discuss-item {
    flex-direction: column;
    padding: 1rem 0;
  }
  .user-info {
    flex-direction: row;
    gap: 0.8rem;
    min-width: auto;
    margin-bottom: 0.5rem;
  }
  .post-actions {
    flex-direction: row;
    justify-content: flex-end;
    min-width: auto;
    gap: 1.5rem;
  }
}
</style>
