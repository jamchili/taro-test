export type ApiReq<T> = {
  message: string,
  data: T
}

export type loginReq = {
  mobile: string,
  code: string
}


export type loginRes = {
  refresh_token: string,
  token: string
}

export type userInfoType = {
  tokenObj: loginRes
}



