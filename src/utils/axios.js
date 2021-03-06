import axios from 'axios'

axios.defaults.withCredentials=true

const Require = axios.create({
  timeout:500000,
  headers:{
    'Access-Control-Allow-Origin': 'true',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials:true
})

Require.interceptors.request.use( config => {
  let token = localStorage.getItem('token')
  if(token){
    config.headers.token = token
  }
  return config
})

Require.interceptors.response.use(
  respose => {
    if(respose.status == 200){
      return respose.data
    }else{
      return Promise.reject(respose)
    }
  },error => {
    return Promise.reject(error)
  }
)

export default Require