import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 获取群组列表
export function list (params) {
  return request({
    url: requestUrl('/robot/recharge/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 审核
export function approve (params) {
  return request({
    url: requestUrl('/robot/recharge/approve'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
