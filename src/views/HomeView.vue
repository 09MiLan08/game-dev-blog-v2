<template>
  <div class="home-container">
    <!-- 顶部Banner -->
    <section class="home-banner">
      <div class="banner-content">
        <h1 class="banner-title">
          <span class="local-tag">蓉城专属</span>
          游戏开发者技术社区
        </h1>
        <p class="banner-slogan">扎根成都 · 连接游戏圈 · 搞定技术+工作</p>
        <div class="banner-btns">
          <RouterLink to="/tech-library" class="btn-primary"
            >技术干货</RouterLink
          >
          <RouterLink to="/job" class="btn-secondary">本地岗位</RouterLink>
          <RouterLink to="/activity" class="btn-tertiary">线下聚会</RouterLink>
        </div>
      </div>
    </section>

    <!-- 本地游戏公司专区 -->
    <section class="home-local-companies">
      <h2 class="section-title"><span class="icon"></span> 成都本地游戏公司</h2>
      <div class="companies-list">
        <div
          class="company-card"
          v-for="(company, idx) in localCompanies"
          :key="idx"
        >
          <img
            :src="company.logo"
            :alt="company.name + ' Logo'"
            class="company-logo"
            @error="handleImageError"
            @load="handleImageLoad"
          />
          <div class="company-info">
            <h3 class="company-name">{{ company.name }}</h3>
            <p class="company-tag">{{ company.category }}</p>
            <RouterLink
              :to="`/job?company=${company.link}`"
              class="company-link"
              >查看岗位</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 热门技术干货 -->
    <section class="home-hot-tech">
      <h2 class="section-title"><span class="icon"></span> 热门技术干货</h2>
      <div class="tech-list">
        <div class="tech-card" v-for="(item, idx) in hotTechs" :key="idx">
          <h3 class="tech-title">{{ item.title }}</h3>
          <p class="tech-summary">{{ item.summary }}</p>
          <RouterLink
            :to="`/article-detail?tab=0&title=${encodeURIComponent(item.title)}`"
            class="tech-link"
            >阅读全文 →</RouterLink
          >
        </div>
      </div>
    </section>

    <!-- 线下活动预告 -->
    <section class="home-activity">
      <div class="section-header">
        <h2 class="section-title">
          <span class="icon"></span> 成都线下活动预告
        </h2>
        <RouterLink to="/activity" class="more-link">更多活动 →</RouterLink>
      </div>

      <div class="activity-container">
        <!-- 当期主推活动 -->
        <div class="activity-card primary" v-if="currentActivity">
          <div class="activity-tag">当期活动</div>
          <div class="activity-date">
            <span class="date-month">{{ currentActivity.month }}</span>
            <span class="date-day">{{ currentActivity.day }}</span>
            <span class="date-week">{{ currentActivity.week }}</span>
            <span class="date-time">{{ currentActivity.time }}</span>
          </div>
          <div class="activity-content">
            <h3 class="activity-title">{{ currentActivity.title }}</h3>
            <div class="activity-meta">
              <span class="meta-item"> {{ currentActivity.location }}</span>
              <span class="meta-item"> 限额{{ currentActivity.quota }}人 </span>
              <span class="meta-item">
                分享嘉宾：{{ currentActivity.guests }}</span
              >
            </div>
            <p class="activity-desc">{{ currentActivity.desc }}</p>
            <div class="activity-actions">
              <RouterLink
                :to="`/activity/signup?activityId=${currentActivity.id}`"
                class="btn-signup"
                >立即报名</RouterLink
              >
              <span class="signup-count"
                >已报名：{{ currentActivity.registered }}/{{
                  currentActivity.quota
                }}</span
              >
            </div>
          </div>
        </div>

        <!-- 往期活动 -->
        <div
          class="activity-card past"
          v-for="activity in pastActivities"
          :key="activity.id"
        >
          <div class="activity-date small">
            <span class="date-month">{{ activity.month }}</span>
            <span class="date-day">{{ activity.day }}</span>
          </div>
          <div class="activity-content">
            <h3 class="activity-title">{{ activity.title }}</h3>
            <div class="activity-meta small">
              <span class="meta-item"> {{ activity.location }}</span>
              <span class="meta-item">
                参与人数：{{ activity.registered }}人</span
              >
            </div>
            <p class="activity-desc">{{ activity.desc }}</p>
            <RouterLink
              :to="`/activity/record?activityId=${activity.id}`"
              class="btn-record"
              >查看回顾</RouterLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 社区数据看板 -->
    <section class="home-data">
      <div class="data-item" v-for="(item, idx) in dataList" :key="idx">
        <div class="data-number">{{ item.number }}</div>
        <div class="data-label">{{ item.label }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// 本地游戏公司数据
const localCompanies = ref([
  {
    name: '腾讯互娱（成都）',
    logo: '/logos/tencent.png',
    category: '大厂 · 手游/端游',
    link: 'tencent',
  },
  {
    name: '网易游戏（成都）',
    logo: '/logos/netease.png',
    category: '大厂 · 二次元/竞技',
    link: 'netease',
  },
  {
    name: '米哈游（成都）',
    logo: '/logos/mihoyo.png',
    category: '大厂 · 开放世界',
    link: 'mihoyo',
  },
  {
    name: '鹰角网络（成都）',
    logo: '/logos/hypergryph.png',
    category: '二次元 · 独立游戏',
    link: 'hypergryph',
  },
  {
    name: '天象互动',
    logo: '/logos/tianxiang.png',
    category: '本地龙头 · 手游研发',
    link: 'tianxiang',
  },
  {
    name: '龙渊网络',
    logo: '/logos/longyuan.png',
    category: '本地 · 休闲/竞技游戏',
    link: 'longyuan',
  },
]);

// 图片加载处理
const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement;
  console.error(`图片加载失败: ${target.src}`);
  // 使用在线占位图作为备用
  target.src = 'https://via.placeholder.com/60x60/cccccc/ffffff?text=LOGO';
};

const handleImageLoad = (e: Event) => {
  console.log('图片加载成功:', (e.target as HTMLImageElement).src);
};

// 热门技术干货
const hotTechs = ref([
  {
    title: 'Vue3游戏UI开发',
    summary: '用组合式API实现适配多端的游戏角色面板，提升开发效率和用户体验',
  },
  {
    title: 'Unity粒子特效优化',
    summary: '成都游戏公司面试高频：粒子系统性能调优实战技巧',
  },
  {
    title: 'Django游戏后台接口',
    summary: '快速搭建玩家登录、道具管理接口，支持高并发场景',
  },
  {
    title: 'MySQL游戏表设计',
    summary: 'MMORPG玩家表分表+索引优化实战，解决大数据量性能问题',
  },
]);

// 活动数据
const currentActivity = ref({
  id: 1,
  month: '12月',
  day: '21',
  week: '周六',
  time: '14:00-17:00',
  title: '成都游戏开发者沙龙 · 性能优化专场',
  location: '成都高新区天府三街腾讯大厦B座',
  quota: 80,
  registered: 45,
  guests: '腾讯高级工程师张工、网易技术专家李工',
  desc: '邀请腾讯/网易资深工程师分享游戏客户端性能优化技巧，包括渲染优化、内存管理、网络同步等核心话题。现场提供技术答疑和简历内推机会。',
});

const pastActivities = ref([
  {
    id: 2,
    month: '11月',
    day: '15',
    title: 'Unity技术分享会',
    location: '成都武侯区网易大厦',
    registered: 60,
    desc: 'Unity引擎最新功能解析和实战应用案例分享',
  },
  {
    id: 3,
    month: '10月',
    day: '28',
    title: '独立游戏开发经验交流',
    location: '成都高新区天府软件园',
    registered: 35,
    desc: '本地独立游戏团队分享从立项到上线的完整开发历程',
  },
]);

// 社区数据
const dataList = ref([
  { number: '1.2k+', label: '成都注册开发者' },
  { number: '32+', label: '本地合作游戏公司' },
  { number: '500+', label: '技术干货文章' },
  { number: '16+', label: '线下落地活动' },
]);
</script>

<style scoped>
/* 全局样式 */
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 2rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title .icon {
  font-size: 1.5rem;
  color: #38b2ac;
}

/* Banner样式 */
.home-banner {
  background: linear-gradient(135deg, #2c3e50 0%, #38b2ac 100%);
  color: white;
  border-radius: 12px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
}

.home-banner::before {
  content: '🐼';
  font-size: 10rem;
  position: absolute;
  top: -2rem;
  right: 2rem;
  opacity: 0.1;
}

.banner-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.banner-title .local-tag {
  background: #e74c3c;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.banner-slogan {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.banner-btns {
  display: flex;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.btn-primary,
.btn-secondary,
.btn-tertiary {
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #38b2ac;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid white;
}

.btn-tertiary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-primary:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}

.btn-secondary:hover,
.btn-tertiary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 本地游戏公司 */
.companies-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.company-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.company-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.company-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.company-name {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.company-tag {
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 1rem;
}

.company-link {
  color: #38b2ac;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: auto;
  font-weight: 600;
}

.company-link:hover {
  text-decoration: underline;
}

/* 热门技术干货 */
.tech-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.tech-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.tech-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.tech-title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.tech-summary {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tech-link {
  color: #38b2ac;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.tech-link:hover {
  text-decoration: underline;
}

/* 线下活动 */
.home-activity {
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.more-link {
  color: #38b2ac;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.more-link:hover {
  text-decoration: underline;
}

.activity-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activity-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.activity-card.primary {
  border-left: 4px solid #38b2ac;
}

.activity-card.past {
  border-left: 4px solid #95a5a6;
  opacity: 0.8;
}

.activity-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.activity-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #e74c3c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.activity-date {
  background: #38b2ac;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  text-align: center;
}

.activity-date.small {
  min-width: 60px;
  padding: 0.8rem;
}

.date-month {
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.date-day {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.date-week {
  font-size: 0.8rem;
  opacity: 0.9;
}

.date-time {
  font-size: 0.8rem;
  opacity: 0.9;
  margin-top: 0.3rem;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.activity-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1rem;
}

.activity-meta.small {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.meta-item {
  font-size: 0.9rem;
  color: #666;
}

.activity-desc {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.activity-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-signup {
  background: #38b2ac;
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-signup:hover {
  background: #2d9690;
}

.btn-record {
  color: #38b2ac;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.btn-record:hover {
  text-decoration: underline;
}

.signup-count {
  font-size: 0.9rem;
  color: #666;
}

/* 社区数据 */
.home-data {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  background: white;
  border-radius: 12px;
  padding: 2.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
}

.data-item {
  text-align: center;
  flex: 1;
  min-width: 120px;
}

.data-number {
  font-size: 2rem;
  color: #38b2ac;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.data-label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .banner-title {
    font-size: 1.8rem;
  }

  .banner-btns {
    flex-direction: column;
    align-items: flex-start;
  }

  .companies-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .tech-list {
    grid-template-columns: 1fr;
  }

  .activity-card {
    flex-direction: column;
  }

  .activity-date {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .home-data {
    gap: 1.5rem;
    padding: 2rem 1rem;
  }

  .data-number {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .companies-list {
    grid-template-columns: 1fr;
  }

  .home-banner {
    padding: 2.5rem 1.5rem;
  }

  .banner-title {
    font-size: 1.5rem;
  }

  .activity-meta.small {
    flex-direction: column;
    gap: 0.3rem;
  }
}
</style>
