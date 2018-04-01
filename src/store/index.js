import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  // 导航条, 布局风格, defalut(默认) / inverse(反向)
  navbarLayoutType: 'default',
  // 侧边栏, 布局皮肤, light(浅色) / dark(黑色)
  sidebarLayoutSkin: 'light',
  // 侧边栏, 水平折叠收起状态
  sidebarCollapse: false,
  // 页面文档可视高度(随窗口改变大小)
  documentClientHeight: 0,
  // 菜单导航
  menuNavList: [],
  // 内容区域tabs标签页
  contentTabs: [],
  contentTabsActiveName: ''
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
