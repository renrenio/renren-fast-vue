import Mock from 'mockjs'
import requestUrl from '@/api/requestUrl'
import './modules/common'

var data = {
  code: 1,
  name: 'daxiong',
  'datas|1-10': [{}]
}
Mock.mock(requestUrl('/sys/login'), 'post', data)

export default Mock
