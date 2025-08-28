<template>
  <nut-form ref="formRef" :model-value="formData">
    <nut-form-item
      label="电话"
      prop="mobile"
      required
      :rules="[{ required: true, message: '请输入电话' }]"
    >
      <nut-input
        v-model="formData.mobile"
        placeholder="请输入电话"
        type="text"
      />
    </nut-form-item>
    <nut-form-item
      label="验证码"
      prop="code"
      required
      :rules="[{ required: true, message: '请输入验证码' }]"
    >
      <nut-input
        v-model="formData.code"
        placeholder="请输入验证码"
        type="text"
      />
    </nut-form-item>

    <nut-space style="margin: 10px">
      <nut-button type="primary" size="small" @click="submit">提交</nut-button>
    </nut-space>
  </nut-form>
</template>

<script lang="ts" setup>
import { loginAPI } from '@/apis'
import { useuserInfoStore } from '@/stores'
import { FormInstance } from '@nutui/nutui-taro'
import Taro from '@tarojs/taro'
import { loginReq } from 'types'
import { reactive, ref } from 'vue'

const formData = reactive<loginReq>({
  mobile: '13911111111',
  code: '246810'
})
const formRef = ref<FormInstance>()

const userInfo = useuserInfoStore()

const loginFn = async () => {
  const res = await loginAPI(formData)
  // console.log('---', )
  userInfo.addToken(res.data)

  Taro.switchTab({
    url: '/pages/my/index'
  })
}

const submit = async () => {
  try {
    await formRef.value?.validate()
    await loginFn()
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss">
.create {
  padding: 0 15px;
}
</style>
