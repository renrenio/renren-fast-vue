import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'

// 获取群组列表
export function list (params) {
  return request({
    url: requestUrl('/robot/team/list'),
    method: 'get',
    params: requestParam(params, 'get')
  })
}
