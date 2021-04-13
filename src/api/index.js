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

// 视频页 查询视频信息
export const queryContentInfo = (data) => {
  return Require({
    url: '/index/queryVideoInfo',
    method: 'post',
    data,
  })
}

// 给视频点赞
export const contentLikes = (data) => {
  return  Require({
    url : '/index/contentLike',
    method : 'post',
    data,
  })
}

// 给视频取消点赞
export const cancelLikes = (data) => {
  return Require({
    url : '/index/cancelLike',
    method : 'post',
    data,
  })
}

// 查询视频是否点赞
export const isLikequery = (data) => {
  return Require({
    url: '/index/isLike',
    method : 'post',
    data,
  })
}

// 关注用户
export const concern = (data) => {
  return Require({
    url : '/index/concern',
    method : 'post',
    data
  })
}

// 查询帖子信息
export const queryComment = (data) => {
  return Require({
    url: '/index/queryComment',
    method : 'post',
    data
  })
}

// 提交评论信息
export const addComment = (data) => {
  return Require({
    url: '/index/addComment',
    method : 'post',
    data
  })
}






