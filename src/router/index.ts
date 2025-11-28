import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyView from '@/views/PrivacyView.vue';
// 新增导入
import ActivityView from '@/views/ActivityView.vue';

import JobView from '@/views/JobView.vue';
import CommunityView from '@/views/CommunityView.vue';
import TechLibraryView from '@/views/TechLibraryView.vue';
import ArticleDetailView from '@/views/ArticleDetailView.vue';
import TermsView from '@/views/TermsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/privacy', name: 'privacy', component: PrivacyView },
    { path: '/terms', name: 'terms', component: TermsView },

    { path: '/activity', name: 'activity', component: ActivityView },

    { path: '/job', name: 'job', component: JobView },
    { path: '/community', name: 'community', component: CommunityView },
    {
      path: '/tech-library',
      name: 'techLibrary',
      component: TechLibraryView,
    },
    {
      path: '/article-detail',
      name: 'articleDetail',
      component: ArticleDetailView,
    },
  ],
});

export default router;
