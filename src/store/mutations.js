import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SWITCH_SIDEBAR_COLLAPSE] (state, { collapse }) {
    state.sidebarCollapse = collapse
  },

  [types.UPDATE_DOCUMENT_CLIENT_HEIGHT] (state, { height }) {
    state.documentClientHeight = height
  },

  [types.UPDATE_MENU_NAV_LIST] (state, list) {
    state.menuNavList = list
  },

  [types.UPDATE_CONTENT_TABS] (state, tabs) {
    state.contentTabs = tabs
  },

  [types.UPDATE_CONTENT_TABS_ACTIVE_NAME] (state, { name }) {
    Vue.set(state.contentTabs, 'activeName', name)
  }
}
