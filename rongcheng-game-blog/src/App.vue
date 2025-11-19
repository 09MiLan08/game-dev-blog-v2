<template>
  <div class="app-container">
    <!-- 头部导航 -->
    <header class="blog-header">
      <h1>蓉城游戏开发者技术社区</h1>
      <nav>
        <!-- 给当前激活的导航项加样式 -->
        <router-link to="/" class="nav-link" active-class="active"
          >首页</router-link
        >
        <router-link to="/articles" class="nav-link" active-class="active"
          >文章列表</router-link
        >
        <router-link to="/about" class="nav-link" active-class="active"
          >关于社区</router-link
        >
      </nav>
    </header>

    <!-- 内容区域（路由出口） -->
    <main class="blog-content">
      <router-view />
    </main>

    <!-- 底部 -->
    <footer class="blog-footer">
      <p>© 2025 蓉城游戏开发者技术社区</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.blog-header {
  padding: 1rem 2rem;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky; /* 导航栏吸顶 */
  top: 0;
  z-index: 100;
}
.nav-link {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}
.nav-link.active {
  /* 当前页面的导航项高亮 */
  color: #42b983;
  font-weight: 500;
}
.nav-link:hover {
  color: #42b983;
}
.blog-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto; /* 内容居中 */
  width: 100%;
}
.blog-footer {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #eee;
}
</style>
