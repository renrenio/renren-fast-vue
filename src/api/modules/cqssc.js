import request from '../request'
import requestUrl from '../requestUrl'
import requestParam from '../requestParam'
import isInteger from 'lodash/isInteger'

// 时时彩配置
export function info (tid) {
  return request({
    url: requestUrl('robot/cqssc/info' + (isInteger(tid) ? `/${tid}` : '')),
    method: 'get',
    params: requestParam({}, 'get')
  })
}

// 保存
export function save (param) {
  return request({
    url: requestUrl('robot/cqssc/save'),
    method: 'post',
    data: requestParam(param)
  })
}
