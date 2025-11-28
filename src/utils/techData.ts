export interface Article {
  title: string;
  summary: string;
  fullContent: string;
  date: string; // 新增：文章日期
  author: string; // 新增：文章作者
  publishTime: string;
  tags: string[];
}

// 分板块独立数据
export const techData: Record<number, Article[]> = {
  // 技术文章
  0: [
    {
      title: 'Vue3游戏UI开发',
      summary: 'Vue3组合式API实现游戏角色面板...',
      fullContent:
        'Vue3的setup语法糖简化游戏UI组件开发，ref用于响应式绑定角色血量、等级等状态，computed处理属性联动，配合Tailwind CSS快速实现适配多端的游戏UI布局。',
      date: '2025-11-20',
      author: '成都前端老刘',
      publishTime: '2025-11-20 14:30',
      tags: ['Vue3', '游戏UI', '组合式API'],
    },
    {
      title: 'React游戏后台',
      summary: 'React Hooks管理游戏用户状态...',
      fullContent:
        '用useContext+useReducer替代Redux，实现游戏后台的用户权限、角色信息等状态管理，自定义Hook封装重复逻辑，减少冗余代码，提升开发效率。',
      date: '2025-11-25',
      author: 'React开发小王',
      publishTime: '2025-11-25 12:00',
      tags: ['Vue3', '游戏UI', '组合式API'],
    },
    {
      title: 'TS游戏类型约束',
      summary: 'TypeScript泛型工具约束游戏道具类型...',
      fullContent:
        '通过Partial、Pick、Record等泛型工具，定义游戏道具的动态类型，解决道具扩展时的类型报错问题，确保代码健壮性，避免生产环境类型相关bug。',
      date: '2025-11-15',
      author: 'TS类型控',
      publishTime: '2025-11-15 16:20',
      tags: ['TypeScript', '泛型工具', '游戏类型约束'],
    },
    {
      title: 'Vite游戏构建',
      summary: 'Vite优化游戏项目构建速度...',
      fullContent:
        'Vite的依赖预构建功能将第三方包转为ES模块，减少浏览器请求数；配合rollup-plugin-visualizer分析打包体积，拆分大型资源，游戏项目构建时间从100s优化至15s。',
      date: '2025-11-12',
      author: '构建优化师',
      publishTime: '2025-11-12 09:45',
      tags: ['Vite', '构建优化', '游戏工程化'],
    },
    {
      title: '前端性能优化',
      summary: '游戏页首屏加载+动画优化...',
      fullContent:
        '首屏资源懒加载（图片、组件），CDN加速静态资源；动画使用requestAnimationFrame替代setTimeout，避免布局抖动，游戏活动页首屏加载时间从4.5s优化至1.1s。',
      date: '2025-11-08',
      author: '性能调优师',
      publishTime: '2025-11-08 14:10',
      tags: ['前端性能', '懒加载', '游戏活动页'],
    },
  ],
  // 引擎周刊
  1: [
    {
      title: 'Unity粒子特效',
      summary: 'Unity粒子系统实现火焰技能...',
      fullContent:
        'Unity粒子系统的Shape模块设置火焰范围，Velocity Over Lifetime控制粒子运动轨迹，Collision模块实现粒子与角色的碰撞反馈，配合Shader实现火焰渐变效果。',
      date: '2025-11-20',
      author: 'Unity特效师',
      publishTime: '2025-11-20 11:30',
      tags: ['Unity', '粒子系统', '游戏特效'],
    },
    {
      title: 'Unreal蓝图优化',
      summary: '简化敌人AI蓝图节点...',
      fullContent:
        '将敌人巡逻、攻击、追击逻辑封装为蓝图函数，使用Event Dispatch分发事件，替代复杂的分支节点，蓝图节点从230个减少至65个，运行帧率提升18%。',
      date: '2025-11-18',
      author: 'Unreal蓝图师',
      publishTime: '2025-11-18 15:40',
      tags: ['Unreal', '蓝图优化', '游戏AI'],
    },
    {
      title: 'Cocos资源分包',
      summary: 'Cocos Creator分包缩小游戏包体...',
      fullContent:
        '将游戏资源拆分为基础包（核心逻辑+通用资源）和关卡包（各关卡专属资源），首包体积从180MB压缩至45MB，用户下载转化率提升35%，支持关卡资源按需加载。',
      date: '2025-11-16',
      author: 'Cocos工程师',
      publishTime: '2025-11-16 10:25',
      tags: ['Cocos Creator', '资源分包', '包体优化'],
    },
    {
      title: '引擎热更新',
      summary: 'Unity/Unreal热更新方案...',
      fullContent:
        'Unity使用Addressables管理资源+Lua实现逻辑热更，支持增量更新；Unreal通过Pak包打包资源，配合蓝图补丁实现热更新，无需重新提交应用商店审核。',
      date: '2025-11-10',
      author: '热更新专家',
      publishTime: '2025-11-10 17:00',
      tags: ['Unity', 'Unreal', '游戏热更新'],
    },
  ],
  // 精品教程
  2: [
    {
      title: 'Python爬游戏数据',
      summary: 'Scrapy爬Steam游戏排行...',
      fullContent:
        'Scrapy框架定义Spider爬取Steam游戏名称、评分、销量数据，Middleware设置UA伪装和代理IP突破反爬，Pipeline将数据存储至MySQL，定时任务实现数据实时更新。',
      date: '2025-11-22',
      author: '爬虫爱好者',
      publishTime: '2025-11-22 09:15',
      tags: ['Python', 'Scrapy', '游戏数据爬取'],
    },
    {
      title: 'MySQL游戏表设计',
      summary: 'MMORPG玩家表分表+索引...',
      fullContent:
        '玩家表按服务器ID分表，避免单表数据量过大；给玩家ID、登录时间、角色等级等字段建立索引，优化查询SQL，玩家信息查询响应时间从300ms降至20ms。',
      date: '2025-11-21',
      author: '数据库架构师',
      publishTime: '2025-11-21 13:50',
      tags: ['MySQL', '分表分库', '游戏数据库'],
    },
    {
      title: 'STM32游戏手柄',
      summary: 'STM32实现手柄按键+震动...',
      fullContent:
        'STM32的GPIO口配置为输入模式读取按键状态，通过消抖算法处理按键抖动；定时器生成PWM信号控制震动马达的强度和频率，UART串口实现手柄与上位机的通信。',
      date: '2025-11-19',
      author: '硬件开发者',
      publishTime: '2025-11-19 14:30',
      tags: ['STM32', '游戏手柄', '硬件开发'],
    },
    {
      title: 'Django游戏接口',
      summary: 'Django REST实现玩家登录接口...',
      fullContent:
        'Django REST Framework的ModelSerializer序列化玩家数据，ViewSet实现登录、注册、信息修改等CRUD接口，JWT实现身份认证，权限类控制接口访问权限，支持接口限流防刷。',
      date: '2025-11-17',
      author: '后端开发者',
      publishTime: '2025-11-17 16:45',
      tags: ['Django', 'REST API', '游戏后端'],
    },
  ],
};
