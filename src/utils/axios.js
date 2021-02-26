import axios from 'axios'

axios.defaults.withCredentials=true

const Require = axios.create({
  timeout:5000,
  headers:{
    'Access-Control-Allow-Origin': 'true',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials:true
})

Require.interceptors.request.use( config => {
  return config
})

Require.interceptors.response.use(
  respose => {
    if(respose.code == 200){
      return respose.data
    }else{
      return Promise.reject(respose)
    }
  },error => {
    return Promise.reject(error)
  }
)

export default Require