<template>
  <div class="survey-section">
    <h3>游戏开发技术需求问卷</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>常用开发技术：</label>
        <div v-for="tech in techOptions" :key="tech">
          <input type="checkbox" v-model="formData.tech" :value="tech" />
          {{ tech }}
        </div>
      </div>
      <div class="form-group">
        <label>当前急需解决的技术问题：</label>
        <textarea
          v-model="formData.problem"
          rows="3"
          placeholder="请简要描述..."
        ></textarea>
      </div>
      <button type="submit" class="submit-btn">提交问卷</button>
    </form>
    <p class="submit-tip" v-if="submitted">问卷提交成功，感谢您的反馈！</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const formData = reactive({
  tech: [] as string[],
  problem: '',
});
const submitted = ref(false);
const techOptions = ['Vue3', 'Python', 'MySQL', 'Unity', 'Unreal'];
const handleSubmit = () => {
  console.log('问卷提交数据：', formData);
  submitted.value = true;
  // 重置表单
  formData.tech = [];
  formData.problem = '';
  setTimeout(() => (submitted.value = false), 3000);
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}
.submit-btn {
  background: #38b2ac;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  cursor: pointer;
}
.submit-tip {
  color: #2ecc71;
  margin-top: 1rem;
}
</style>
