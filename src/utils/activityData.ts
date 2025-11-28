// 活动数据接口
export interface Activity {
  id: number;
  title: string;
  month: string; // 月份（如：12月）
  day: string; // 日期（如：21日）
  week: string; // 星期（如：周六）
  time: string; // 时间（如：14:00-17:00）
  location: string; // 地点
  quota: number; // 限额人数
  registered: number; // 已报名人数
  guests: string; // 分享嘉宾
  desc: string; // 活动描述
  isCurrent: boolean; // 是否为当期活动（true=当期，false=往期）
}

// 活动数据
export const activityData: Activity[] = [
  {
    id: 1,
    title: '成都游戏开发者沙龙 · 性能优化专场',
    month: '12月',
    day: '21日',
    week: '周六',
    time: '14:00-17:00',
    location: '成都高新区天府三街腾讯大厦B座 2F会议室',
    quota: 50,
    registered: 32,
    guests: '腾讯互娱 高级工程师/网易游戏 性能优化专家',
    desc: '聚焦游戏客户端性能痛点：Unity/Unreal引擎帧率优化、Shader减负技巧、资源加载策略，现场带代码案例拆解，还有大厂内推通道和自由交流环节，适合初中级游戏开发者。',
    isCurrent: true,
  },
  {
    id: 2,
    title: '独立游戏开发实战分享会',
    month: '11月',
    day: '16日',
    week: '周四',
    time: '19:00-21:00',
    location: '成都武侯区锦里东路10号创意园',
    quota: 45,
    registered: 42,
    guests: '本土独立游戏团队《蜀山志》开发组',
    desc: '本土独立游戏团队分享《蜀山志》开发历程，从美术资源到玩法迭代的全流程经验，解析中小团队如何控制开发成本、优化用户体验。',
    isCurrent: false,
  },
  {
    id: 3,
    title: '游戏UI设计趋势沙龙',
    month: '10月',
    day: '28日',
    week: '周五',
    time: '14:30-17:30',
    location: '成都高新区天府五街菁蓉汇',
    quota: 40,
    registered: 36,
    guests: '网易游戏UI设计师/字节跳动游戏视觉专家',
    desc: '结合Vue3/React前端技术，分享游戏UI适配多端的设计技巧，附组件库实战案例，解析如何平衡视觉效果与性能开销。',
    isCurrent: false,
  },
];
