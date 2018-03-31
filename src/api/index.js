import * as common from './modules/common'
import * as user from './modules/user'
import * as role from './modules/role'
import * as menu from './modules/menu'
import * as log from './modules/log'
import * as config from './modules/config'
import * as oss from './modules/oss'
import * as schedule from './modules/schedule'
import * as team from './modules/team'
import * as recharge from './modules/recharge'
import * as pk10 from './modules/pk10'
import * as cqssc from './modules/cqssc'
import * as order from './modules/order'
import * as cash from './modules/cash'

export default {
  common,     // 公共
  user,       // 管理员管理
  role,       // 角色管理
  menu,       // 菜单管理
  log,        // 系统日志
  config,     // 参数管理
  oss,        // 文件服务
  schedule,    // 定时任务
  team,         // 群管理
  recharge,    // 充值管理
  pk10,         // pk10
  cqssc,         // 重庆时时彩
  order,          // 订单管理
  cash            // 提现

}
