import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取定时任务列表
export function list (params) {
  return request({
    url: requestUrl('/sys/schedule/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取定时任务信息
export function info (id) {
  return request({
    url: requestUrl('/sys/schedule/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加定时任务
export function add (params) {
  return request({
    url: requestUrl('/sys/schedule/save'),
    method: 'post',
    data: requestParam(params)
  })
}

// 修改定时任务
export function update (params) {
  return request({
    url: requestUrl('/sys/schedule/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除定时任务
export function del (params) {
  return request({
    url: requestUrl('/sys/schedule/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 运行定时任务
export function run (params) {
  return request({
    url: requestUrl('/sys/schedule/run'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 暂停定时任务
export function pause (params) {
  return request({
    url: requestUrl('/sys/schedule/pause'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}

// 恢复定时任务
export function resume (params) {
  return request({
    url: requestUrl('/sys/schedule/resume'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
