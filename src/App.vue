<template>
  <!-- 标题靠左贴边，导航靠右贴边 -->
  <header class="site-header">
    <div class="header-container">
      <!-- 左侧标题 -->
      <div class="header-left">
        <h3 class="header-title">
          <span class="logo-icon">🎮</span>
          蓉城游戏开发者技术社区
        </h3>
        <p class="header-subtitle">成都本地游戏开发者的技术交流平台</p>
      </div>

      <!-- 右侧导航 -->
      <nav class="header-nav">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ active: $route.name === 'home' }"
        >
          <span class="nav-icon"></span>
          首页
        </RouterLink>
        <RouterLink
          to="/tech-library"
          class="nav-link"
          :class="{ active: $route.name === 'techLibrary' }"
        >
          <span class="nav-icon"></span>
          技术资源库
        </RouterLink>
        <RouterLink
          to="/activity"
          class="nav-link"
          :class="{ active: $route.name === 'activity' }"
        >
          <span class="nav-icon"></span>
          活动中心
        </RouterLink>
        <RouterLink
          to="/community"
          class="nav-link"
          :class="{ active: $route.name === 'community' }"
        >
          <span class="nav-icon"></span>
          开发者社区
        </RouterLink>
        <RouterLink
          to="/job"
          class="nav-link"
          :class="{ active: $route.name === 'job' }"
        >
          <span class="nav-icon"></span>
          招聘与实习
        </RouterLink>

        <!-- 用户操作区域 -->
        <div class="user-actions">
          <RouterLink to="/login" class="btn-login">
            <span class="user-icon"></span>
            登录/注册
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <!-- 核心内容区 -->
  <main class="main-content">
    <RouterView />
  </main>

  <!-- 页尾 -->
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- 社区信息 -->
        <div class="footer-section">
          <h4 class="footer-title">
            <span class="logo-icon"></span>
            蓉城游戏开发者技术社区
          </h4>
          <p class="footer-desc">
            专注成都本地游戏开发技术交流，连接开发者与企业，推动成都游戏产业发展
          </p>
          <div class="social-links">
            <a href="#" class="social-link" title="微信公众号">📱</a>
            <a href="#" class="social-link" title="QQ群">💬</a>
            <a href="#" class="social-link" title="GitHub">🐙</a>
            <a href="#" class="social-link" title="B站">📺</a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h5 class="footer-subtitle">快速导航</h5>
          <div class="footer-links">
            <RouterLink to="/tech-library" class="footer-link"
              >技术文章</RouterLink
            >
            <RouterLink to="/activity" class="footer-link">开源项目</RouterLink>
            <RouterLink to="/community" class="footer-link"
              >技术问答</RouterLink
            >
            <RouterLink to="/activity" class="footer-link">开发资源</RouterLink>
          </div>
        </div>

        <!-- 联系信息 -->
        <div class="footer-section">
          <h5 class="footer-subtitle">联系我们</h5>
          <div class="contact-info">
            <p class="contact-item">contact@3310823343@qq.com</p>
            <p class="contact-item">成都市高新区天府软件园</p>
            <p class="contact-item">周一至周五 9:00-18:00</p>
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <p class="copyright">
          © 2025 蓉城游戏开发者技术社区 | 成都本地游戏开发交流平台
        </p>
        <div class="footer-legal">
          <RouterLink to="/privacy" class="legal-link">隐私政策</RouterLink>
          <RouterLink to="/terms" class="legal-link">服务条款</RouterLink>
          <RouterLink to="/contact" class="legal-link">联系我们</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>
/* 全局基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

/* 页首样式 */
.site-header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: clamp(0.8rem, 2vh, 1rem) 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 左侧标题区域 */
.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.header-title {
  font-size: clamp(1.3rem, 3vh, 1.6rem);
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.header-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
}

.logo-icon {
  font-size: clamp(1.5rem, 3.5vh, 1.8rem);
}

/* 右侧导航 */
.header-nav {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.5rem);
  white-space: nowrap;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vh, 1rem);
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #38b2ac;
  transform: translateY(-1px);
}

.nav-link.active {
  background: rgba(56, 178, 172, 0.2);
  color: #38b2ac;
  border-bottom: 2px solid #38b2ac;
}

.nav-icon {
  font-size: 1rem;
}

/* 用户操作区域 */
.user-actions {
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-login {
  background: rgba(56, 178, 172, 0.9);
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.btn-login:hover {
  background: #38b2ac;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(56, 178, 172, 0.3);
}

.user-icon {
  font-size: 0.9rem;
}

/* 核心内容区样式 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 140px); /* 动态计算高度，考虑header和footer */
  padding: 2rem 1rem 4rem;
}

/* 页尾样式 */
.site-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
  padding: 2.5rem 0 1.5rem;
  margin-top: auto;
  width: 100%;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #38b2ac;
}

.footer-desc {
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.8;
  margin: 0;
}

/* 社交媒体链接 */
.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #38b2ac;
  transform: translateY(-2px);
}

/* 页脚链接 */
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  opacity: 0.8;
}

.footer-link:hover {
  color: #38b2ac;
  opacity: 1;
}

/* 联系信息 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 底部版权区域 */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.legal-link {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 0.85rem;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.legal-link:hover {
  color: #38b2ac;
  opacity: 1;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0 1rem;
  }

  .header-nav {
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .nav-link {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }

  .user-actions {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    width: 100%;
    margin-top: 0.5rem;
  }

  .btn-login {
    width: 100%;
    justify-content: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-legal {
    justify-content: center;
  }

  .main-content {
    padding: 1.5rem 1rem 3rem;
    min-height: calc(100vh - 120px);
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 1.2rem;
  }

  .header-subtitle {
    font-size: 0.75rem;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
