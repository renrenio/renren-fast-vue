// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'       // api: https://router.vuejs.org/
import store from './store'         // api: https://vuex.vuejs.org/
import VueCookie from 'vue-cookie'  // api: https://github.com/alfhen/vue-cookie
import '@/assets/css/normalize.css' // api: https://github.com/necolas/normalize.css
import '@/element-ui'               // api: https://github.com/ElemeFE/element
import '@/iconfont'                 // api: http://www.iconfont.cn/

Vue.config.productionTip = false

Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
