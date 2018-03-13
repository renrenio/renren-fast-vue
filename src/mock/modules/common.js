import Mock from 'mockjs'

// 登录
export function login () {
  return {
    url: '/sys/login',
    type: 'post',
    data: {
      code: 0,
      expire: 60 * 60 * 12,
      msg: 'success',
      token: Mock.Random.guid()
    }
  }
}
