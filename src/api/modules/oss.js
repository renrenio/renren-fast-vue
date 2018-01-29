import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 获取文件列表
export function list (params) {
  return request({
    url: requestUrl('/sys/oss/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 获取云存储配置信息
export function config () {
  return request({
    url: requestUrl('/sys/oss/config'),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 保存云存储配置信息
export function addConfig (params) {
  return request({
    url: requestUrl('/sys/oss/saveConfig'),
    method: 'post',
    data: requestParam(params)
  })
}

// 上传文件
export function upload (token) {
  return requestUrl(`/sys/oss/upload?token=${token}`)
}

// 删除文件
export function del (params) {
  return request({
    url: requestUrl('/sys/oss/delete'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
