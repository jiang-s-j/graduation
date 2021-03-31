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
// 注册接口
export const registerIndex = (data) => {
  return Require({
    url: '/index/register',
    method: 'post',
    data,
  })
}
// 上传文件接口
export const uploadIndex = (data) => {
  return Require({
    url:'/index/upload',
    method: 'post',
    data,
  })
}

// 上传视频存入数据库
export const postVideo = (data) => {
  return Require({
    url:'/index/postVideo',
    method: 'post',
    data
  })
}

// 获取热门视频
export const pushHot = (data) => {
  return Require({
    url: '/index/pushHot',
    method: 'post',
    data,
  })
}

// 获取关注视频
export const pushConcern = (data) => {
  return Require({
    url: '/index/pushConcern',
    method: 'post',
    data,
  })
}
// 修改用户信息
export const userInformtionMdify = (data) => {
  return Require({
    url: '/index/userInformationModify',
    method: 'post',
    data,
  })
}
// 查询用户信息
export const queryUserInfo = () => {
  return Require({
    url: '/index/queryUserInfo',
    method: 'post',
  })
}





