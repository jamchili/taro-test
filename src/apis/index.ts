import request from "@/utils/http"
import type { ArticleListReq, loginReq, loginRes, UserChannelRes } from "types"


export const loginAPI = (data: loginReq) => {
  return request<loginRes>('/v1_0/authorizations', 'post', data)
}

/**
 * 获取用户频道列表
 */
export const getUserChannelsApi = () => {
  return request<UserChannelRes>('/v1_0/user/channels')
}


/**
 * 获取文章列表
 * @param data
 * @returns 
 */
export const getArticleListApi = (data: ArticleListReq) => {
  return request('/v1_0/articles', 'get', data)
}


/**
 * 获取所有频道列表
 */
export const getChannelsApi = () => {
  return request<UserChannelRes>('/v1_0/channels')
}