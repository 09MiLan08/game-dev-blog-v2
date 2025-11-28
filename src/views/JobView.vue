<template>
  <div class="job-container">
    <h2>成都游戏行业招聘</h2>
    <span class="local-tag">本地岗位</span>

    <!-- 简化筛选-->
    <div class="filter-bar">
      <button @click="curFilter = 0" :class="{ active: curFilter === 0 }">
        全部
      </button>
      <button @click="curFilter = 1" :class="{ active: curFilter === 1 }">
        前端开发
      </button>
      <button @click="curFilter = 2" :class="{ active: curFilter === 2 }">
        后端开发
      </button>
      <button @click="curFilter = 3" :class="{ active: curFilter === 3 }">
        实习生
      </button>
    </div>

    <!-- 简化卡片 -->
    <div class="job-list">
      <div class="job-card" v-for="(job, idx) in showJobs" :key="idx">
        <h3 class="job-title">{{ job.company }} - {{ job.position }}</h3>
        <div class="job-info">
          <p>薪资：{{ job.salary }} {{ job.salaryUnit }}</p>
          <p>地点：{{ job.location }}</p>
          <p>技能要求：{{ job.skills }}</p>
          <!-- 简化成字符 -->
        </div>
        <button
          class="apply-btn"
          @click="alert(`投递${job.position}，邮箱：${job.email}`)"
        >
          申请岗位
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 简化变量名
const curFilter = ref(0);
const jobData = ref([
  {
    company: '成都掌趣科技',
    position: '游戏前端开发',
    salary: '16-24K',
    salaryUnit: '·14薪',
    location: '成都武侯区',
    skills: 'Vue3、TS、Canvas、跨端通信',
    email: 'hr-zhangqu@163.com',
    filterKey: 1,
  },
  {
    company: '成都尼毕鲁',
    position: 'Python后端实习生',
    salary: '180',
    salaryUnit: '元/天',
    location: '成都高新区（可远程）',
    skills: 'Python、Django、MySQL',
    email: 'intern-hr@nipuru.com',
    filterKey: 3,
  },
]);

const showJobs = computed(() => {
  if (curFilter.value === 0) return jobData.value;
  return jobData.value.filter((item) => item.filterKey === curFilter.value);
});
</script>

<style scoped>
/* 简化样式 */
.job-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}
.job-title {
  color: #2c3e50;
  border-left: 3px solid #38b2ac;
  padding-left: 0.5rem;
}
.filter-bar {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}
.filter-bar button.active {
  background: #38b2ac;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 1rem;
}
.job-card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.apply-btn {
  background: #38b2ac;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
