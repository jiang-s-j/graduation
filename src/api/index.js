import Require from '@/utils/axios'
import Path from '@/config/path.js'


// node.js express mock 模拟数据
// 推荐模快初始化
export const getRecommend = () => {
  return Require({
    url: `${Path.baseUrl}/getInitRecommend`,
    method: 'post',
  })
}

// thinkPhp 服务器 接口
// 登录接口
export const loginIndex = (data) => {
  return Require({
    url:'/index/login',
    method: 'post',
    data,
  })
}

// 退出接口
export const logoutIndex = (data) => {
  return Require({
    url: '/index/logout',
    method: 'post',
    data,
  })
}

export const registerIndex = (data) => {
  return Require({
    url: '/index/register',
    method: 'post',
    data,
  })
}


