// types/Article.ts

// 文章基础接口
export interface Article {
  id: string | number; // 文章ID
  title: string; // 文章标题
  summary: string; // 文章摘要
  content?: string; // 文章内容（可选）
  author: string; // 作者
  date: string; // 发布日期
  category: number; // 分类（0:技术文章, 1:引擎周刊, 2:精品教程）
  tags: string[]; // 标签数组
  views: number; // 阅读量
  likes: number; // 点赞数
  comments: number; // 评论数
  readTime: string; // 阅读时长
  difficulty?: 'beginner' | 'intermediate' | 'advanced'; // 难度等级
  featured?: boolean; // 是否推荐
  bookmarked?: boolean; // 是否收藏
}

// 文章分类类型
export type ArticleCategory = '技术文章' | '引擎周刊' | '精品教程';

// 文章难度类型
export type ArticleDifficulty = '初级' | '中级' | '高级';

// 文章查询参数接口
export interface ArticleQueryParams {
  tab?: string; // 标签页
  id?: string; // 文章ID
  title?: string; // 文章标题
  category?: ArticleCategory; // 文章分类
  page?: number; // 页码
  pageSize?: number; // 每页数量
}

// 文章分页响应接口
export interface ArticlePageResponse {
  articles: Article[]; // 文章列表
  total: number; // 总条数
  page: number; // 当前页码
  pageSize: number; // 每页数量
  totalPages: number; // 总页数
}

// 文章创建/更新接口
export interface ArticleCreateRequest {
  title: string;
  summary: string;
  content: string;
  category: number;
  tags: string[];
  difficulty: ArticleDifficulty;
}

// 文章统计接口
export interface ArticleStats {
  totalArticles: number; // 总文章数
  totalViews: number; // 总阅读量
  totalLikes: number; // 总点赞数
  totalComments: number; // 总评论数
  averageReadTime: string; // 平均阅读时长
}
