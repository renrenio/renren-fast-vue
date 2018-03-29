// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'       // api: https://github.com/vuejs/vue-router
import store from '@/store'         // api: https://github.com/vuejs/vuex
import VueCookie from 'vue-cookie'  // api: https://github.com/alfhen/vue-cookie
import '@/element-ui'               // api: https://github.com/ElemeFE/element
import '@/iconfont'                 // api: http://www.iconfont.cn/
import '@/assets/scss/index.scss'
import { isAuth } from '@/utils'

Vue.use(VueCookie)
Vue.config.productionTip = false

// 非生产环境, 适配mockjs模拟数据. api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}

// 挂载权限方法
Vue.prototype.isAuth = isAuth

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
