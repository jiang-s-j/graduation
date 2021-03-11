import Require from '@/utils/axios'
import Path from '@/config/path.js'



// 推荐模快初始化
export const getRecommend = () => {
  return Require({
    url: `/${Path.baseUrl}/getInitRecommend`,
    method: 'post',
  })
}

// 登录接口
export const loginIndex = (data) => {
  return Require({
    url:'/index/login',
    method: 'post',
    data,
  })
}


