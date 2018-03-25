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

// 绑定机器人
export function bindRobot (param) {
  return request({
    url: requestUrl('robot/team/bindRobot'),
    method: 'post',
    data: requestParam(param)
  })
}

// 修改游戏状态
export function updateGame (param) {
  return request({
    url: requestUrl('robot/team/updateGame'),
    method: 'post',
    data: requestParam(param)
  })
}
