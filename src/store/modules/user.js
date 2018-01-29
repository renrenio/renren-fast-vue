import * as types from '../mutation-types'
import merge from 'lodash/merge'

const state = {
  userId: '',
  userName: ''
}

const getters = {
}

const actions = {
}

const mutations = {
  [types.UPDATE_USER_INFO] (state, info) {
    state = merge(state, info)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
