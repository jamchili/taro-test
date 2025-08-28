import Taro from '@tarojs/taro';
import axios, { AxiosAdapter, type Method } from 'axios'
import adapter from 'axios-miniprogram-adapter'
import { ApiReq } from 'types';

axios.defaults.adapter = adapter as AxiosAdapter


// 创建axios实例
const instance = axios.create({
  baseURL: 'http://geek.itheima.net.'

});

// axios请求拦截器
instance.interceptors.request.use(config => {

  return config;
}, e => Promise.reject(e))

// axios响应拦截器
instance.interceptors.response.use(res => {
  return res.data
},
  e => {
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