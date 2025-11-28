<template>
  <div class="contact-container">
    <div class="contact-header">
      <h2>联系我们</h2>
      <p class="subtitle">我们随时为您提供帮助</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <div class="info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
          </div>
          <div class="info-details">
            <h3>微信</h3>
            <p class="contact-value">xx15811297761h</p>
            <small>工作日 9:00-18:00 在线</small>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              ></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="info-details">
            <h3>邮箱</h3>
            <p class="contact-value">3310823343@qq.com</p>
            <small>24小时内回复</small>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="info-details">
            <h3>地址</h3>
            <p class="contact-value">成都市高新区游戏产业园</p>
            <small>欢迎莅临参观</small>
          </div>
        </div>
      </div>

      <div class="social-links">
        <h3>关注我们</h3>
        <div class="social-icons">
          <a href="#" class="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              ></path>
            </svg>
          </a>
          <a href="#" class="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.contact-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.contact-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
}

.contact-header h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #38b2ac;
  border-radius: 2px;
}

.subtitle {
  font-size: 1.1rem;
  color: #718096;
  margin-top: 1rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid #38b2ac;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #e6fffa;
  border-radius: 10px;
  margin-right: 1rem;
  color: #38b2ac;
  flex-shrink: 0;
}

.info-details h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.contact-value {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 0.3rem;
  font-weight: 500;
}

.info-details small {
  color: #718096;
  font-size: 0.85rem;
}

.social-links {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.social-links h3 {
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #edf2f7;
  color: #4a5568;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background-color: #38b2ac;
  color: white;
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .contact-container {
    padding: 1.5rem 1rem;
  }

  .contact-header h2 {
    font-size: 1.7rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .info-card {
    flex-direction: column;
    text-align: center;
  }

  .info-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
