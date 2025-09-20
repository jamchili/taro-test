<script setup lang="ts">
import { channelsType } from 'types'
import { computed, ref } from 'vue'

const props = defineProps<{
  ownList: channelsType[]
  allList: channelsType[]
  modelValue: number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void // 默认的 v-model 事件
  (e: 'addX', value: channelsType): void
  (e: 'removeX', value: number): void
}>()

const show = ref(false)

const editChannelList = computed(() => {
  return props.allList.filter(i => {
    return !props.ownList.some(v => v.id === i.id)
  })
})

const channelEdit = (val: number) => {
  console.log('我触发了')
  emits('update:modelValue', val)
}

defineExpose({
  show
})
</script>

<template>
  <nut-action-sheet v-model:visible="show" title="频道管理">
    <div class="custom-content">
      <div class="sheet-title">
        <h2>我的频道{{ modelValue }}</h2>
        <span class="edit-btn">编辑</span>
      </div>
      <div class="channel-container">
        <div
          class="channel-item"
          v-for="(item, index) in ownList"
          :key="index"
          @click="channelEdit(index)"
        >
          <span :class="{ activeIndex: index == modelValue }">{{
            item.name
          }}</span
          ><span style="margin-left: 2rem" @click="emits('removeX', item.id)"
            >x</span
          >
        </div>
      </div>

      <div class="sheet-title">
        <h2>可选频道</h2>
      </div>
      <div class="channel-container">
        <div
          class="channel-item"
          v-for="(item, index) in editChannelList"
          :key="index"
          @click="emits('addX', item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </nut-action-sheet>
</template>
<style lang="scss" scoped>
.activeIndex {
  color: red !important;
}
.custom-content {
  padding: 10px 10px;
  margin-bottom: 55px;
  font-size: 0.7rem;
  .sheet-title {
    display: flex;
    width: 100%;
    font-size: 0.5rem;
    margin-bottom: 10px;
    h2 {
      flex: 1;
    }
    .edit-btn {
      padding: 5px;
      border-radius: 2px;
      border: 1px solid red;
    }
  }
  .channel-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4px;
    .channel-item {
      border: solid 1px gray;
      text-align: center;
    }
  }
}
</style>
