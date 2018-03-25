import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 获取投注订单列表
export function list (params) {
  return request({
    url: requestUrl('/robot/order/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}
