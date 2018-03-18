import isInteger from 'lodash/isInteger'

// 获取定时任务列表
export function list (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/list',
    type: 'get',
    data: {}
  }
}

// 获取定时任务信息
export function info (id) {
  return {
    // isOpen: false,
    url: '/sys/schedule/info' + (isInteger(id) ? `/${id}` : ''),
    type: 'get',
    data: {}
  }
}

// 添加定时任务
export function add (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/save',
    type: 'post',
    data: {}
  }
}

// 修改定时任务
export function update (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/update',
    type: 'post',
    data: {}
  }
}

// 删除定时任务
export function del (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/delete',
    type: 'post',
    data: {}
  }
}

// 运行定时任务
export function run (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/run',
    type: 'post',
    data: {}
  }
}

// 暂停定时任务
export function pause (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/pause',
    type: 'post',
    data: {}
  }
}

// 恢复定时任务
export function resume (params) {
  return {
    // isOpen: false,
    url: '/sys/schedule/resume',
    type: 'post',
    data: {}
  }
}
