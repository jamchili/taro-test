<script setup lang="ts">
import { inject, computed, Ref } from 'vue'

interface TabContext {
  activeName: Ref<string | number>
  tabs: Ref<
    Array<{
      name: string | number
      title?: string
      disabled?: boolean
    }>
  >
}

const props = defineProps<{
  name: string | number
  title?: string
  disabled?: boolean
}>()

const tabsContext = inject<TabContext>('tabsContext')

if (tabsContext) {
  tabsContext.tabs.value.push({
    name: props.name,
    title: props.title,
    disabled: props.disabled
  })
}

const isActive = computed(() => {
  return tabsContext?.activeName.value == props.name
})
</script>

<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>
