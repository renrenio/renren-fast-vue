import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取日志列表
export function list (params) {
  return request({
    url: requestUrl('/sys/log/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取定时任务日志列表
export function scheduleList (params) {
  return request({
    url: requestUrl('/sys/scheduleLog/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取定时任务日志信息
export function scheduleInfo (logId) {
  return request({
    url: requestUrl('/sys/scheduleLog/info' + (isInteger(logId) ? `/${logId}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}
