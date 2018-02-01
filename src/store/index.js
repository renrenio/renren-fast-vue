import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  // 侧边栏, 水平折叠收起状态
  sidebarCollapse: false,
  // 页面文档可视高度(随窗口改变大小)
  documentClientHeight: 0,
  // 菜单导航列表
  menuNavList: [],
  // 内容区域tabs标签页
  contentTabs: {
    activeName: '',
    tabList: []
  },
  // 菜单导航iframe嵌套地址
  menuNavIframeUrl: '//demo.open.renren.io/renren-fast/',
  // 菜单导航类型映射表, module: vue重构(默认), iframe: iframe方式嵌套
  menuNavTypeMap: {
    'sql': 'iframe'
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
