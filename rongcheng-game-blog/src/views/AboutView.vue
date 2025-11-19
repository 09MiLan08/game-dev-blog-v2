<template>
  <div class="about-page">
    <h2 class="about-title">关于蓉城游戏开发者技术社区</h2>

    <div class="about-content">
      <p class="about-desc">
        我们是专注于游戏开发全链路技术的交流社区，致力于为游戏开发者提供实用的技术干货、工具脚本与经验分享，帮助开发者提升效率、少走弯路。
      </p>

      <div class="about-section">
        <h3 class="section-title">社区定位</h3>
        <ul class="section-list">
          <li>面向游戏开发全流程（前端/后端/工具链/资源管理）开发者</li>
          <li>分享实战经验、避坑指南、自动化工具与技术选型方案</li>
          <li>打造开放的技术交流、资源共享与合作对接平台</li>
        </ul>
      </div>

      <div class="about-section">
        <h3 class="section-title">我们的优势</h3>
        <ul class="section-list">
          <li>内容聚焦游戏开发场景，拒绝泛技术冗余信息</li>
          <li>作者均为一线游戏开发者，内容兼具实用性与落地性</li>
          <li>支持技术问答、资源下载等互动功能（后续迭代）</li>
        </ul>
      </div>

      <div class="about-section">
        <h3 class="section-title">联系我们</h3>
        <p class="contact-info">邮箱：contact@rc-game-dev.com</p>
        <p class="contact-info">社区交流群：添加微信 rc-game-2025 备注“社区”</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.about-title {
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
}

.about-content {
  line-height: 1.8;
  color: #333;
}

.about-desc {
  margin-bottom: 2rem;
}

.about-section {
  margin-bottom: 2rem;
}

.section-title {
  color: #42b983;
  margin-bottom: 0.8rem;
}

.section-list {
  padding-left: 1.5rem;
  color: #555;
}

.section-list li {
  margin-bottom: 0.5rem;
}

.contact-info {
  margin-bottom: 0.5rem;
  color: #555;
}
</style>
