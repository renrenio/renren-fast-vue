import * as types from './mutation-types'

export default {
  [types.SET_NAVBAR_LAYOUT_TYPE] (state, { type }) {
    state.navbarLayoutType = type
  },
  [types.SET_SIDEBAR_LAYOUT_SKIN] (state, { skin }) {
    state.sidebarLayoutSkin = skin
  },
  [types.SWITCH_SIDEBAR_COLLAPSE] (state, { collapse }) {
    state.sidebarCollapse = collapse
  },

  [types.UPDATE_DOCUMENT_CLIENT_HEIGHT] (state, { height }) {
    state.documentClientHeight = height
  },

  [types.UPDATE_MENU_NAV_LIST] (state, list) {
    state.menuNavList = list
  },

  [types.ADD_CONTENT_TAB] (state, tab) {
    state.contentTabs.push(tab)
  },

  [types.UPDATE_CONTENT_TABS] (state, tabs) {
    state.contentTabs = tabs
  },

  [types.DELETE_CONTENT_TABS] (state) {
    state.contentTabs = []
  },

  [types.UPDATE_CONTENT_TABS_ACTIVE_NAME] (state, { name }) {
    state.contentTabsActiveName = name
  }
}
