import isInteger from 'lodash/isInteger'

// 获取参数列表
export function list (params) {
  return {
    // isOpen: false,
    url: '/sys/config/list',
    type: 'get',
    data: {}
  }
}

// 获取参数信息
export function info (id) {
  return {
    // isOpen: false,
    url: '/sys/config/info' + (isInteger(id) ? `/${id}` : ''),
    type: 'get',
    data: {}
  }
}

// 添加参数
export function add (params) {
  return {
    // isOpen: false,
    url: '/sys/config/save',
    type: 'post',
    data: {}
  }
}

// 修改参数
export function update (params) {
  return {
    // isOpen: false,
    url: '/sys/config/update',
    type: 'post',
    data: {}
  }
}

// 删除参数
export function del (params) {
  return {
    // isOpen: false,
    url: '/sys/config/delete',
    type: 'post',
    data: {}
  }
}
