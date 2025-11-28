import axios from 'axios';

// 最简Axios封装，避免拦截器冲突
const request = axios.create({
  baseURL: '', // 为空，和Mock接口匹配
  timeout: 5000, // 超时时间5秒
  headers: { 'Content-Type': 'application/json' },
});

export default request;
