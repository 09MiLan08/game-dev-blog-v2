module.exports = {
  root: true, // 表示这是根配置文件，不再向上查找
  env: {
    browser: true, // 支持浏览器环境的API（比如window、document）
    es2021: true, // 支持ES2021语法
    node: true, // 支持Node环境的API（比如require、module）
  },
  extends: [
    "eslint:recommended", // 启用ESLint默认推荐规则
    "plugin:vue/vue3-recommended", // 启用Vue3的推荐规则
    "@vue/eslint-config-typescript", // 启用TypeScript的规则
    "plugin:prettier/recommended", // 整合Prettier，让ESLint兼容Prettier规则
  ],
  parserOptions: {
    ecmaVersion: "latest", // 支持最新ECMAScript语法
    parser: "@typescript-eslint/parser", // 用TypeScript解析器处理TS代码
  },
  plugins: [
    "vue", // Vue的ESLint插件
    "@typescript-eslint", // TypeScript的ESLint插件
  ],
  rules: {
    // 自定义规则：关闭"组件名必须多单词"的检查（避免之前Navbar的警告）
    "vue/multi-word-component-names": "off",
    // 开发环境允许console.log，生产环境警告（方便调试）
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
