// 彻底简化Mock，只保留核心逻辑
import Mock from 'mockjs';

// 直接拦截请求，返回固定数据
Mock.mock('/articles', 'post', {
  list: [
    {
      id: '1',
      title: 'Vue3+Pinia实战游戏博客',
      author: '成都某游戏厂前端',
      date: '2025-11-20',
      desc: '基于Vue3开发游戏开发者社区',
      category: '前端开发',
      content: '详情内容',
    },
    {
      id: '2',
      title: 'Canvas游戏性能优化',
      author: '成都独立游戏开发者',
      date: '2025-11-19',
      desc: '提升游戏帧率的技巧',
      category: '性能优化',
      content: '详情内容',
    },
  ],
  total: 2,
});
