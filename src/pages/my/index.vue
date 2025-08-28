<script setup lang="ts">
import { useuserInfoStore } from '@/stores/userInfo'

const userInfoStore = useuserInfoStore()
</script>

<template>
  <div class="my-container">
    <header>
      <nut-avatar size="large">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        />
      </nut-avatar>
      <div class="user-info">
        <span>二狗-{{ userInfoStore.userInfo.tokenObj.refresh_token }}</span>
        <span>1971-08-17-{{ userInfoStore.userInfo.tokenObj.token }}</span>
      </div>
    </header>
    <nut-cell title="编辑资料" desc=">"></nut-cell>
    <nut-cell title="小智同学" desc=">"></nut-cell>
    <nut-cell title="系统设置" desc=">"></nut-cell>
    <nut-cell title="退出登录" desc=">"></nut-cell>
  </div>
</template>
<style lang="scss">
.my-container header {
  height: 140px;
  width: 100%;
  background-color: #3194fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my-container header .user-info {
  margin-left: 10px;
}
</style>
