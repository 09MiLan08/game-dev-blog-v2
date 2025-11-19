import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import AboutView from '../views/AboutView.vue' // 新增这行

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/articles/:id', // 正确的动态路由格式
      name: 'articleDetail',
      component: ArticleDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
