import Mock from 'mockjs'
import http from '@/utils/httpRequest'
import merge from 'lodash/merge'
import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as schedule from './modules/schedule'

console.log('\n%c!<-------------------- 接口拦截, mock模拟数据 s -------------------->', 'color:blue')

// tips
// 1. 关闭[业务模块集]拦截, create方法[第2个参数]设置. (默认开启)
// 2. 关闭[业务模块对象]拦截, 通过模块返回对象中的[isOpen属性, 默认开启]设置. (默认开启)

fnCreate(common, false)      // 公共
fnCreate(user, false)        // 管理员管理
fnCreate(role, false)        // 角色管理
fnCreate(menu, false)        // 菜单管理
fnCreate(log, false)         // 系统日志
fnCreate(config, false)      // 参数管理
fnCreate(oss, false)         // 文件服务
fnCreate(schedule, false)    // 定时任务

console.log('%c!<-------------------- 接口拦截, mock模拟数据 e -------------------->\n\n', 'color:blue')

/**
 * 创建mock模拟数据
 * @param {*} mods 模块集
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mods, isOpen = true) {
  if (isOpen) {
    for (var key in mods) {
      var mod = mods[key]() || {}
      if (mod.isOpen !== false) {
        // 添加默认[mock]属性, 方便调试
        mod.data = merge({ 'mock': true }, mod.data)

        // 控制台输出信息
        console.log('\n')
        console.log(' url: ', mod.url)
        console.log('type: ', mod.type)
        console.log('data: ', mod.data)
        console.log('\n')

        // 2种url拦截方式
        Mock.mock(http.adornUrl(mod.url), mod.type, mod.data)
        Mock.mock(new RegExp(mod.url, 'g'), mod.type, mod.data)
      }
    }
  }
}
