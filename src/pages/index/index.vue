<script setup lang="ts">
import { useCounterStore } from '@/stores'
import Taro from '@tarojs/taro'

const CounterStore = useCounterStore()

const toRouter = () => {
  Taro.navigateTo({
    url: '/pagesSub/login/index?id=2&type=test'
  })
}
</script>

<template>
  <div>123--{{ CounterStore.counter }}</div>
  <nut-button type="primary" @click="CounterStore.addEvent">点我啊</nut-button>
  <button @click="toRouter">路由跳转</button>
</template>
<style lang="scss" scoped></style>
