<template>
  <div class="activity-container">
    <!-- 标题+本地化标签 -->
    <div class="page-header">
      <h2>成都本地游戏开发活动</h2>
      <span class="local-tag">线下+线上 双模式</span>
    </div>

    <!-- 简单筛选（线下/线上/全部）- 实用不复杂 -->
    <div class="filter-bar">
      <button @click="activeFilter = 0" :class="{ active: activeFilter === 0 }">
        全部活动
      </button>
      <button @click="activeFilter = 1" :class="{ active: activeFilter === 1 }">
        线下活动
      </button>
      <button @click="activeFilter = 2" :class="{ active: activeFilter === 2 }">
        线上活动
      </button>
    </div>

    <!-- 活动卡片列表 -->
    <div class="activity-list">
      <div
        class="activity-card"
        v-for="(activity, idx) in filteredActivities"
        :key="idx"
      >
        <!-- 活动类型+状态标签 -->
        <div class="activity-tags">
          <span class="type-tag">{{
            activity.type === 1 ? '线下沙龙' : '线上直播'
          }}</span>
          <span
            class="status-tag"
            :class="activity.status === '报名中' ? 'active' : 'ended'"
          >
            {{ activity.status }}
          </span>
        </div>

        <!-- 活动核心信息 -->
        <h3 class="activity-title">
          {{ activity.title }}
          <!-- 收藏按钮 -->
          <button
            class="collect-btn"
            @click="activity.isCollected = !activity.isCollected"
          >
            {{ activity.isCollected ? '★' : '☆' }}
          </button>
        </h3>

        <!-- 活动信息 -->
        <div class="activity-meta">
          <span class="meta-item">{{ activity.date }} {{ activity.time }}</span>
          <span class="meta-item">
            {{
              activity.type === 1
                ? '' + activity.location
                : '' + activity.platform
            }}
          </span>
        </div>

        <!-- 嘉宾信息 -->
        <div class="guest-info">
          <div class="guest-avatar-placeholder">
            {{ activity.guest.substring(0, 1) }}
          </div>
          <div class="guest-detail">
            <p class="guest-name">主讲嘉宾：{{ activity.guest }}</p>
            <p class="guest-intro">{{ activity.guestIntro }}</p>
          </div>
        </div>

        <!-- 活动简介 -->
        <p class="activity-desc">
          {{ activity.desc }}
        </p>

        <!-- 操作按钮 -->
        <div class="activity-actions">
          <button class="sign-btn" @click="handleSignup(activity)">
            {{ activity.status === '报名中' ? '立即报名' : '查看回顾' }}
          </button>
          <button class="share-btn" @click="handleShare(activity)">
            分享活动
          </button>
        </div>
      </div>
    </div>

    <!-- 无活动提示 -->
    <div class="empty-tip" v-if="filteredActivities.length === 0">
      暂无对应活动，关注社区获取最新动态~
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 在script开头添加类型接口
interface Activity {
  type: 1 | 2;
  title: string;
  date: string;
  time: string;
  location?: string;
  platform?: string;
  guest: string;
  guestIntro: string;
  desc: string;
  status: '报名中' | '已结束';
  isCollected: boolean;
}
// 筛选状态：0=全部，1=线下，2=线上
const activeFilter = ref(0);

// 活动数据
const activityData = ref<Activity[]>([
  {
    type: 1, // 1=线下，2=线上
    title: '游戏UI技术分享 · 跨端适配实战',
    date: '2025-11-25',
    time: '14:00-17:00',
    location: '成都市高新区天府软件园A区2栋 3F会议室',
    guest: '李姐',
    guestIntro: '成都某头部游戏厂UI负责人（10年游戏UI设计经验）',
    desc: '针对游戏UI适配手机/平板/PC多端的痛点，分享Vue3+Figma落地技巧，带实战案例拆解，适合游戏前端/UI设计师',
    status: '报名中',
    isCollected: false,
  },
  {
    type: 2,
    title: 'Unity与前端跨端通信实践',
    date: '2025-12-02',
    time: '20:00-21:30',
    platform: '腾讯会议（群内通知房间号）',
    guest: '阿柴',
    guestIntro: '成都独立游戏开发者（代表作《蜀山小侠》）',
    desc: '讲解Unity与前端页面的数据交互、事件通信实现方案，解决跨端开发中的数据同步问题，适合Unity开发者/前端工程师',
    status: '报名中',
    isCollected: false,
  },
  {
    type: 1,
    title: '独立游戏开发融资分享会',
    date: '2025-10-18',
    time: '15:00-17:30',
    location: '成都市武侯区环球中心E2栋 创业咖啡',
    guest: '张哥',
    guestIntro: '成都本地天使投资人（专注游戏行业）',
    desc: '分享独立游戏团队融资技巧、商业计划书撰写要点，现场可1v1咨询，适合有融资需求的独立游戏团队',
    status: '已结束',
    isCollected: false,
  },
  {
    type: 2,
    title: 'MySQL游戏数据库优化实战',
    date: '2025-11-10',
    time: '19:30-21:00',
    platform: 'B站直播（房间号：123456）',
    guest: '老杨',
    guestIntro: '网易游戏（成都）后端技术专家',
    desc: '针对游戏高并发场景，讲解MySQL分表分库、索引优化、慢查询排查技巧，附游戏项目真实案例',
    status: '已结束',
    isCollected: false,
  },
]);

// 筛选后的活动
const filteredActivities = computed(() => {
  if (activeFilter.value === 0) return activityData.value;
  return activityData.value.filter((act) => act.type === activeFilter.value);
});

// 报名操作
const handleSignup = (activity: Activity) => {
  if (activity.status === '报名中') {
    alert(`报名${activity.title}：添加微信15811297761备注"${activity.title}"`);
  } else {
    alert(`活动已结束，可联系管理员获取回顾资料~`);
  }
};

// 分享操作
const handleShare = (activity: Activity) => {
  alert(`分享活动：${activity.title}（可复制链接发给好友）`);
};
</script>

<style scoped>
/* 全局容器 */
.activity-container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 标题区 */
.page-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0 1.5rem;
}
.page-header h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
  border-left: 4px solid #38b2ac;
  padding-left: 0.8rem;
}
.local-tag {
  background: #f0f8fb;
  color: #38b2ac;
  font-size: 0.85rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

/* 筛选栏 */
.filter-bar {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.filter-bar button {
  padding: 0.5rem 1.2rem;
  border: 1px solid #eee;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}
.filter-bar button.active {
  background: #38b2ac;
  color: white;
  border-color: #38b2ac;
}

/* 活动列表 */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* 活动卡片 */
.activity-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;
  position: relative;
}
.activity-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

/* 活动标签 */
.activity-tags {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}
.type-tag {
  font-size: 0.8rem;
  color: #38b2ac;
  background: #f0f8fb;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.status-tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.status-tag.active {
  background: #e8f5e9;
  color: #4caf50;
}
.status-tag.ended {
  background: #fafafa;
  color: #999;
}

/* 活动标题 */
.activity-title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.collect-btn {
  background: none;
  border: none;
  color: #ffc107;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
}

/* 活动信息 */
.activity-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #777;
  flex-wrap: wrap;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

/* 嘉宾信息 */
.guest-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.guest-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background: #f5f7fa;
}
.guest-name {
  font-size: 0.95rem;
  color: #2c3e50;
  margin: 0 0 0.3rem;
}
.guest-intro {
  font-size: 0.85rem;
  color: #777;
  margin: 0;
}

/* 活动简介 */
.activity-desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 操作按钮 */
.activity-actions {
  display: flex;
  gap: 1rem;
}
.sign-btn {
  background: #38b2ac;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}
.sign-btn:hover {
  background: #2d9690;
}
.share-btn {
  background: white;
  color: #38b2ac;
  border: 1px solid #38b2ac;
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.share-btn:hover {
  background: #f0f8fb;
}

/* 无活动提示 */
.empty-tip {
  text-align: center;
  padding: 3rem 0;
  color: #999;
  font-size: 0.95rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .activity-meta {
    gap: 0.8rem;
  }
  .activity-actions {
    flex-direction: column;
  }
  .sign-btn,
  .share-btn {
    width: 100%;
  }
  .guest-avatar-placeholder {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f0f8fb;
    color: #38b2ac;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
}
</style>
