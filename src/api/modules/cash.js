import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 获取提现列表
export function list (params) {
  return request({
    url: requestUrl('/robot/cash/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}

// 审核
export function approve (params) {
  return request({
    url: requestUrl('/robot/cash/approve'),
    method: 'post',
    data: requestParam(params, 'post', false)
  })
}
