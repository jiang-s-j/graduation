import Require from '@/utils/axios'

// 获取必应背景图
// export const getBackgroundImg = () => {
//   return Require({
//     url: '/api/HPImageArchive.aspx',
//     method:'post',
//     data:{
//       format:'js',
//       idx: '0',
//       n: '1',
//     }
//   })
// }

export const testapi = () => {
  return Require({
    url: '/mock/test',
    method: 'get',
  })
}

export const getRecommend = () => {
  return Require({
    url: '/mock/recommend/mockData',
    method: 'psot',
    data: {},
  })
}
