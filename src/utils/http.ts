import { useuserInfoStore } from '@/stores';
import Taro from '@tarojs/taro';
import axios, { AxiosAdapter, type Method } from 'axios'
// import adapter from 'axios-miniprogram-adapter'
import { ApiReq } from 'types';

// axios.defaults.adapter = adapter as AxiosAdapter


// 创建axios实例
const instance = axios.create({
  baseURL:
    'https://geek.itheima.net'

});

// axios请求拦截器
instance.interceptors.request.use(config => {
  const { userInfo } = useuserInfoStore()
  //分装请求头

  // console.log('token', userInfo.tokenObj.token);

  if (userInfo.tokenObj && userInfo.tokenObj.token) {
    config.headers.Authorization = `Bearer ${userInfo.tokenObj.token}`
  }

  return config;
}, e => Promise.reject(e))

// axios响应拦截器
instance.interceptors.response.use(res => {
  return res.data
},
  e => {
    console.log('-e--', e)
    Taro.showModal({
      title: e.response.data.message
    })

    return Promise.reject(e)
  })

const request = <T>(url: string, method: Method = 'get', data: object = {}) => {
  return instance<any, ApiReq<T>>({
    url: url,
    method: method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
  });
}

export default request