<template>
  <div class="privacy-policy">
    <!-- 页面头部 -->
    <div class="policy-header">
      <h1>隐私政策</h1>
      <p class="last-update">最后更新日期：2024年12月</p>
    </div>

    <!-- 政策内容 -->
    <div class="policy-content">
      <!-- 引言 -->
      <section class="policy-section">
        <h2>引言</h2>
        <p>
          蓉城游戏开发者技术社区（以下简称"我们"）深知个人信息对您的重要性，并承诺保护您的个人信息安全。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则。
        </p>
      </section>

      <!-- 信息收集 -->
      <section class="policy-section">
        <h2>一、我们如何收集和使用您的个人信息</h2>
        <div class="policy-list">
          <div class="policy-item">
            <h3>1.1 账号信息</h3>
            <p>
              当您注册社区账号时，我们会收集您的用户名、邮箱地址等必要信息，用于创建账户和提供社区服务。
            </p>
          </div>
          <div class="policy-item">
            <h3>1.2 技术内容</h3>
            <p>
              您发布的文章、代码、项目等内容将公开显示，用于技术交流和知识分享。
            </p>
          </div>
          <div class="policy-item">
            <h3>1.3 使用数据</h3>
            <p>
              我们会收集您使用我们服务的数据，包括浏览记录、搜索查询等，用于改善服务质量。
            </p>
          </div>
        </div>
      </section>

      <!-- 信息保护 -->
      <section class="policy-section">
        <h2>二、我们如何保护您的个人信息</h2>
        <ul class="protection-list">
          <li>采用加密技术保护数据传输和存储安全</li>
          <li>严格的内部权限管理制度，限制人员接触个人信息</li>
          <li>定期进行安全漏洞扫描和渗透测试</li>
          <li>制定应急响应计划，及时应对安全事件</li>
        </ul>
      </section>

      <!-- 用户权利 -->
      <section class="policy-section">
        <h2>三、您的权利</h2>
        <div class="rights-grid">
          <div class="right-item">
            <span class="right-icon"></span>
            <div>
              <h4>访问权</h4>
              <p>您有权访问我们持有的关于您的个人信息</p>
            </div>
          </div>
          <div class="right-item">
            <span class="right-icon"></span>
            <div>
              <h4>更正权</h4>
              <p>您可以要求更正不准确的个人信息</p>
            </div>
          </div>
          <div class="right-item">
            <span class="right-icon"></span>
            <div>
              <h4>删除权</h4>
              <p>在特定情况下，您可以要求删除个人信息</p>
            </div>
          </div>
          <div class="right-item">
            <span class="right-icon"></span>
            <div>
              <h4>撤回同意</h4>
              <p>您可以随时撤回对个人信息处理的同意</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 政策声明 -->
      <section class="policy-section important-notice">
        <h2>重要声明</h2>
        <div class="notice-content">
          <p>
            我们严格遵守《中华人民共和国网络安全法》、《中华人民共和国数据安全法》、《中华人民共和国个人信息保护法》等法律法规，坚决维护国家安全和公共利益。
          </p>
          <p class="patriotic-text">
            <span class="flag">践行</span>
            我们始终坚持社会主义核心价值观，积极履行社会责任，自觉维护网络空间清朗，共同营造健康向上的技术交流环境。
          </p>
        </div>
      </section>

      <!-- 联系方式 -->
      <section class="policy-section contact-section">
        <h2>联系我们</h2>
        <p>如果您对隐私政策有任何疑问、意见或建议，请通过以下方式联系我们：</p>
        <div class="contact-info">
          <p>邮箱：3310823343@qq.com</p>
          <p>工作时间：周一至周五 9:00-18:00</p>
          <p>地址：成都市高新区天府软件园</p>
        </div>
      </section>
    </div>

    <!-- 页脚提示 -->
    <div class="policy-footer">
      <p>
        请仔细阅读本隐私政策，继续使用我们的服务即表示您同意本政策的全部内容。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.privacy-policy {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  line-height: 1.6;
  color: #2c3e50;
}

/* 页面头部 */
.policy-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
}

.policy-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2c3e50 0%, #38b2ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-update {
  color: #666;
  font-size: 1rem;
}

/* 政策内容 */
.policy-content {
  margin-bottom: 3rem;
}

.policy-section {
  margin-bottom: 3rem;
}

.policy-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #38b2ac;
}

.policy-section p {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.7;
}

/* 政策列表 */
.policy-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.policy-item {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #38b2ac;
}

.policy-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

/* 保护措施列表 */
.protection-list {
  list-style: none;
  padding: 0;
}

.protection-list li {
  padding: 0.8rem 0;
  padding-left: 2rem;
  position: relative;
  color: #4a5568;
}

.protection-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #38b2ac;
  font-weight: bold;
}

/* 用户权利网格 */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.right-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.right-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #38b2ac;
}

.right-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.right-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.right-item p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

/* 重要声明 */
.important-notice {
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #fed7d7;
}

.important-notice h2 {
  color: #c53030;
  border-left-color: #c53030;
}

.patriotic-text {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
  margin-top: 1.5rem !important;
  font-weight: 500;
}

.flag {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

/* 联系信息 */
.contact-section {
  background: #f0fff4;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #9ae6b4;
}

.contact-section h2 {
  border-left-color: #38a169;
}

.contact-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: #2d3748;
}

/* 页脚 */
.policy-footer {
  text-align: center;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.policy-footer p {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .privacy-policy {
    padding: 1rem;
  }

  .policy-header h1 {
    font-size: 2rem;
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }

  .policy-item,
  .important-notice,
  .contact-section {
    padding: 1rem;
  }

  .right-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .policy-header h1 {
    font-size: 1.75rem;
  }

  .policy-section h2 {
    font-size: 1.3rem;
  }
}
</style>
