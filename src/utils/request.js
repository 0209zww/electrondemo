import axios from 'axios'
// import { MessageBox, Message,Loading } from 'element-ui'

import { getLocal } from './auth'

// import router from '../router'

// let baseURL = '/auth'

const service = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_API,
})
service.interceptors.request.use(
  async config => {

    config.headers['Content-Type'] = "application/json;charset=UTF-8";
    if(getLocal('token')){
       config.headers['Authorization'] = `Bearer ${getLocal('token')}`;
    }
   


    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res);

    return res
  },
  async error => {
    console.log(error);

    return Promise.reject(error)
    // }

  }
)

export default service
