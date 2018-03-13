import Mock from 'mockjs'
import requestUrl from '@/api/requestUrl'
// import * as common from './modules/common'

var addModule = (mods) => {
  for (var key in mods) {
    var mod = mods[key]()
    Mock.mock(requestUrl(mod.url), mod.type, mod.data)
  }
}

addModule(require('./modules/common'))
// Mock.mock(requestUrl('/sys/login'), 'post', common.login)
