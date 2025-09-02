<template>
  <div class="custom-tabs">
    <!-- 标签栏 -->
    <div class="tabs-nav">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="tab-nav-item"
        :class="{
          active: activeName === tab.name,
          disabled: tab.disabled
        }"
        @click="handleTabClick(tab)"
      >
        {{ tab.title }}
      </div>
    </div>

    <!-- 内容区 -->
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'line', // 'line' | 'card'
    validator: value => ['line', 'card'].includes(value)
  },
  color: {
    type: String,
    default: '#1989fa'
  }
})

const emit = defineEmits(['update:modelValue', 'tab-click'])

const tabs = ref([])
const activeName = ref(props.modelValue)

provide('activeName', activeName)
provide('tabs', tabs)

// 处理标签点击
const handleTabClick = tab => {
  if (tab.disabled) return

  activeName.value = tab.name
  emit('update:modelValue', tab.name)
  emit('tab-click', tab.name)
}

// 监听 modelValue 变化
</script>

<style scoped>
.custom-tabs {
  width: 100%;
}

.tabs-nav {
  display: flex;
  position: relative;
  border-bottom: 1px solid #eee;
}

.tab-nav-item {
  padding: 12px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

.tab-nav-item.active {
  /* color: v-bind('props.color'); */
  font-weight: 500;
}

.tab-nav-item.disabled {
  color: #c8c9cc;
  cursor: not-allowed;
}

/* 下划线样式 */
.custom-tabs .tab-nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 36%;
  right: 0;
  height: 3px;
  width: 22px;
  background-color: v-bind('props.color');
  border-radius: 3px 3px 0 0;
}

/* 卡片样式 */
/* .custom-tabs.type-card .tabs-nav {
  gap: 4px;
  border-bottom: none;
} */

.custom-tabs.type-card .tab-nav-item {
  border: 1px solid #eee;
  border-radius: 4px 4px 0 0;
  margin-bottom: -1px;
}

.tabs-content {
  padding: 16px 0;
}
</style>
