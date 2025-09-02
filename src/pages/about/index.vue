<template>
  <Tabs v-model="activeTab1" color="red">
    <TabPane
      v-for="(item, index) in 4"
      :key="index"
      :name="index"
      title="标签 1"
    >
      内容 1
    </TabPane>
  </Tabs>

  <!-- <Tabs v-model="activeTab1">
    <TabPane title="标签 1"> 内容 1 </TabPane>
    <TabPane title="标签 2"> 内容 1 </TabPane>
  </Tabs> -->
</template>

<script setup>
import { ref } from 'vue'
import Tabs from '@/components/x-tabs.vue'
import TabPane from '@/components/x-tab.vue'

const activeTab1 = ref(0)
</script>

<style scoped></style>
