import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import VueCookie from 'vue-cookie'

import App from '@/App'

import '@/element-ui'
import '@/icons'
import '@/assets/scss/index.scss'

import http from '@/utils/http'
import { isAuth } from '@/utils'

Vue.use(VueCookie)
Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

Vue.prototype.$http = http    // 挂载, ajax请求方法
Vue.prototype.isAuth = isAuth // 挂载, 权限方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
