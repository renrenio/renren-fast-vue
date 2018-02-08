import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 获取导航菜单列表 / 权限
export function nav () {
  return request({
    url: requestUrl('/sys/menu/nav'),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 获取菜单列表
export function list () {
  return request({
    url: requestUrl('/sys/menu/list'),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 获取上级菜单
export function select () {
  return request({
    url: requestUrl('/sys/menu/select'),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 获取菜单信息
export function info (id) {
  return request({
    url: requestUrl('/sys/menu/info' + (isInteger(id) ? `/${id}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 添加菜单
export function add (params) {
  return request({
    url: requestUrl('/sys/menu/save'),
    method: 'post',
    data: requestParam(params)
  })
}

// 修改菜单
export function update (params) {
  return request({
    url: requestUrl('/sys/menu/update'),
    method: 'post',
    data: requestParam(params)
  })
}

// 删除菜单
export function del (id) {
  return request({
    url: requestUrl('/sys/menu/delete' + (isInteger(id) ? `/${id}` : '')),
    method: 'post',
    data: requestParam()
  })
}
