import isInteger from 'lodash/isInteger'

// 获取日志列表
export function list (params) {
  return {
    // isOpen: false,
    url: '/sys/log/list',
    type: 'get',
    data: {}
  }
}

// 获取定时任务日志列表
export function scheduleList (params) {
  return {
    // isOpen: false,
    url: '/sys/scheduleLog/list',
    type: 'get',
    data: {}
  }
}

// 获取定时任务日志信息
export function scheduleInfo (id) {
  return {
    // isOpen: false,
    url: '/sys/scheduleLog/info' + (isInteger(id) ? `/${id}` : ''),
    type: 'get',
    data: {}
  }
}
