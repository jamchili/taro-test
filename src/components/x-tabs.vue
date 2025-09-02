<script setup lang="ts">
import { provide, ref, watch } from 'vue'

interface TabItem {
  name: string | number
  title?: string
  disabled?: boolean
}

const props = defineProps<{
  modelValue: string | number
}>()

const emit = defineEmits(['update:modelValue'])
const activeName = ref(props.modelValue)
const tabs = ref<TabItem[]>([])

const updateActive = (name: string | number) => {
  activeName.value = name
  emit('update:modelValue', name)
}

provide('tabsContext', {
  activeName,
  tabs,
  updateActive
})
</script>

<template>
  <div>
    <div class="custom-tabs">
      <!-- 标题栏 -->
      <div class="tabs-nav">
        <div
          class="tab-nav-item"
          :class="{
            active: activeName == item.name
          }"
          v-for="(item, index) in tabs"
          :key="index"
          @click="updateActive(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>

    <div>
      123
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.custom-tabs {
  width: 100%;
  .tabs-nav {
    display: flex;
    border-bottom: 1px solid #eee;
    .tab-nav-item {
      padding: 12px 20px;
      font-size: 14px;
      color: #666;
      position: relative;
    }
    .active {
      // color: red;
    }
    .active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 36%;
      right: 0;
      height: 3px;
      width: 22px;
      background-color: red;
      border-radius: 3px 3px 0 0;
    }
  }
}
</style>
