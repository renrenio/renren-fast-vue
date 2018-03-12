import Mock from 'mockjs'

// 登录
export function login () {
  var res = {
    code: 1,
    name: 'daxiong'
  }
  Mock.mock('/sys/login', 'post', res)
}
