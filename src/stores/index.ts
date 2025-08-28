import { createPinia } from "pinia";

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
export default pinia
pinia.use(piniaPluginPersistedstate)  // 注册插件

export * from './counter'

export * from './userInfo'