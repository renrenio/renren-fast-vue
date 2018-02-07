import * as types from '../mutation-types'

const state = {
  id: 0,
  name: ''
}

const getters = {
}

const actions = {
}

const mutations = {
  [types.UPDATE_USER_ID] (state, { id }) {
    state.id = id
  },
  [types.UPDATE_USER_NAME] (state, { name }) {
    state.name = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
