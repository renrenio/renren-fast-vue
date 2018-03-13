import Mock from 'mockjs'
import requestUrl from '@/api/requestUrl'
import './modules/common'

var data = {
  code: 0,
  token: Mock.Random.guid()
}
Mock.mock(requestUrl('/sys/login'), 'post', data)

export default Mock
