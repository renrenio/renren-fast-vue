import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取参数列表
export function list (params) {
  return request({
    url: requestUrl('/sys/config/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取参数信息
export function info (id) {
  return request({
    url: requestUrl('/sys/config/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加参数
export function add (params) {
  return request({
    url: requestUrl('/sys/config/save'),
    method: 'post',
    data: requestParam(params)
  })
}

// 修改参数
export function update (params) {
  return request({
    url: requestUrl('/sys/config/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除参数
export function del (params) {
  return request({
    url: requestUrl('/sys/config/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
