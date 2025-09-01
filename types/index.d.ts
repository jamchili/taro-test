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

export type channelsType = {
  id: number,
  name: string
}

export type UserChannelRes = { channels: channelsType[] }


export type ArticleListReq = {
  channel_id: number,
  timestamp: number
}



