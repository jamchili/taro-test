<script setup lang="ts">
import { getChannelsApi, getUserChannelsApi } from '@/apis'
import { useCounterStore } from '@/stores'
import Taro from '@tarojs/taro'
import type { channelsType } from 'types'
import { onMounted, reactive, ref } from 'vue'
import ArticleList from './components/ArticleList.vue'
import { IconFont } from '@nutui/icons-vue-taro'
import ChannelEdit from './components/ChannelEdit.vue'

const tabsIndex = ref(0)
let channelList = ref<channelsType[]>([])
let allList = ref<channelsType[]>([])

const isShowChannelEdit = ref<boolean>(false)

const CounterStore = useCounterStore()

const toRouter = () => {
  Taro.navigateTo({
    url: '/pagesSub/login/index?id=2&type=test'
  })
}

//获取频道数据
const getChannelsList = async () => {
  const res = await getUserChannelsApi()
  channelList.value = res.data.channels
  const res2 = await getChannelsApi()
  allList.value = res2.data.channels
}

onMounted(async () => {
  await getChannelsList()
})

//子组件实例
const channelEdit = ref<InstanceType<typeof ChannelEdit> | null>(null)

const toggleChannelEdit = () => {
  console.log(channelEdit)

  if (channelEdit.value) {
    channelEdit.value.show = !channelEdit.value.show // 访问子组件的 show
  }
}

const removeEvent = (e: channelsType) => {
  channelList.value.filter(v => {
    v.id !== e.id
  })
  console.log('e', e)
}
</script>

<template>
  <nav>我是导航栏</nav>
  <div class="JD-icon">
    <IconFont name="horizontal" size="24" @click="toggleChannelEdit"></IconFont>
  </div>

  <div class="nut-container">
    <nut-tabs
      v-model="tabsIndex"
      title-scroll
      title-gutter="10"
      name="tabName"
      :ellipsis="false"
    >
      <nut-tab-pane
        v-for="(item, index) in channelList"
        :key="index"
        :title="item.name"
        :pane-key="index"
      >
        <div>下标{{ tabsIndex }}</div>
      </nut-tab-pane>
    </nut-tabs>
  </div>
  <!-- 编辑组件 -->
  <ChannelEdit
    :all-list="allList"
    :own-list="channelList"
    v-model="tabsIndex"
    ref="channelEdit"
    @add-x="channelList.push($event)"
    @remove-x="channelList = channelList.filter(v => v.id != $event)"
  ></ChannelEdit>
</template>
<style lang="scss" scoped>
.nut-container {
  width: 60vw;
}
nav {
  height: 54px;
  line-height: 54px;
  background-color: aqua;
  text-align: center;
}
.JD-icon {
  position: absolute;
  top: 65px;
  right: 0px;
  width: 20px;
  background-color: red;
  z-index: 999;
}
</style>
