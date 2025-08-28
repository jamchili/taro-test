import Taro from "@tarojs/taro";
import { defineStore } from "pinia";
import { loginRes, userInfoType } from "types";
import { reactive } from "vue";


export const useuserInfoStore = defineStore(
  'userInfo',
  () => {
    const userInfo = reactive({}) as userInfoType
    const addToken = (data: loginRes) => {
      userInfo.tokenObj = data as loginRes
      console.log('userInfo存了', userInfo);

    }

    const removeToken = () => {
      userInfo.tokenObj.refresh_token = ''
      userInfo.tokenObj.token = ''
    }

    return {
      userInfo, addToken, removeToken
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return Taro.getStorageSync(key)
        },
        setItem(key, value) {
          Taro.setStorageSync(key, value)
        },
      }
    }

  }

)