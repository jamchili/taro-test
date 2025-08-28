import request from "@/utils/http"
import type { loginReq, loginRes } from "types"


export const loginAPI = (data: loginReq) => {
  return request<loginRes>('/v1_0/authorizations', 'post', data)
}