import isInteger from 'lodash/isInteger'

// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'menuList': [{
        'menuId': 1,
        'parentId': 0,
        'parentName': null,
        'name': '系统管理',
        'url': null,
        'perms': null,
        'type': 0,
        'icon': 'fa fa-cog',
        'orderNum': 0,
        'open': null,
        'list': [{
          'menuId': 2,
          'parentId': 1,
          'parentName': null,
          'name': '管理员列表',
          'url': 'modules/sys/user.html',
          'perms': null,
          'type': 1,
          'icon': 'fa fa-user',
          'orderNum': 1,
          'open': null,
          'list': null
        },
        {
          'menuId': 3,
          'parentId': 1,
          'parentName': null,
          'name': '角色管理',
          'url': 'modules/sys/role.html',
          'perms': null,
          'type': 1,
          'icon': 'fa fa-user-secret',
          'orderNum': 2,
          'open': null,
          'list': null
        },
        {
          'menuId': 4,
          'parentId': 1,
          'parentName': null,
          'name': '菜单管理',
          'url': 'modules/sys/menu.html',
          'perms': null,
          'type': 1,
          'icon': 'fa fa-th-list',
          'orderNum': 3,
          'open': null,
          'list': null
        },
        {
          'menuId': 5,
          'parentId': 1,
          'parentName': null,
          'name': 'SQL监控',
          'url': 'druid/sql.html',
          'perms': null,
          'type': 1,
          'icon': 'fa fa-bug',
          'orderNum': 4,
          'open': null,
          'list': null
        },
        {
          'menuId': 6,
          'parentId': 1,
          'parentName': null,
          'name': '定时任务',
          'url': 'modules/job/schedule.html',
          'perms': null,
          'type': 1,
          'icon': 'fa fa-tasks',
          'orderNum': 5,
          'open': null,
          'list': null
        },
        {
          'menuId': 27,
          'parentId': 1,
          'parentName': null,
          'name': '参数管理',
          'url': 'modules/sys/config.html',
          'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
          'type': 1,
          'icon': 'fa fa-sun-o',
          'orderNum': 6,
          'open': null,
          'list': null
        },
        {
          'menuId': 30,
          'parentId': 1,
          'parentName': null,
          'name': '文件上传',
          'url': 'modules/oss/oss.html',
          'perms': 'sys:oss:all',
          'type': 1,
          'icon': 'fa fa-file-image-o',
          'orderNum': 6,
          'open': null,
          'list': null
        },
        {
          'menuId': 29,
          'parentId': 1,
          'parentName': null,
          'name': '系统日志',
          'url': 'modules/sys/log.html',
          'perms': 'sys:log:list',
          'type': 1,
          'icon': 'fa fa-file-text-o',
          'orderNum': 7,
          'open': null,
          'list': null
        }]
      }],
      'code': 0,
      'permissions': ['sys:schedule:info', 'sys:menu:update', 'sys:menu:delete', 'sys:config:info', 'sys:menu:list', 'sys:config:save', 'sys:config:update', 'sys:schedule:resume', 'sys:user:delete', 'sys:config:list', 'sys:user:update', 'sys:role:list', 'sys:menu:info', 'sys:menu:select', 'sys:schedule:update', 'sys:schedule:save', 'sys:role:select', 'sys:user:list', 'sys:menu:save', 'sys:role:save', 'sys:schedule:log', 'sys:role:info', 'sys:schedule:delete', 'sys:role:update', 'sys:schedule:list', 'sys:user:info', 'sys:schedule:run', 'sys:config:delete', 'sys:role:delete', 'sys:user:save', 'sys:schedule:pause', 'sys:log:list', 'sys:oss:all']
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: [{
      'menuId': 1,
      'parentId': 0,
      'parentName': null,
      'name': '系统管理',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': 'fa fa-cog',
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 2,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '管理员列表',
      'url': 'modules/sys/user.html',
      'perms': null,
      'type': 1,
      'icon': 'fa fa-user',
      'orderNum': 1,
      'open': null,
      'list': null
    },
    {
      'menuId': 3,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '角色管理',
      'url': 'modules/sys/role.html',
      'perms': null,
      'type': 1,
      'icon': 'fa fa-user-secret',
      'orderNum': 2,
      'open': null,
      'list': null
    },
    {
      'menuId': 4,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '菜单管理',
      'url': 'modules/sys/menu.html',
      'perms': null,
      'type': 1,
      'icon': 'fa fa-th-list',
      'orderNum': 3,
      'open': null,
      'list': null
    },
    {
      'menuId': 5,
      'parentId': 1,
      'parentName': '系统管理',
      'name': 'SQL监控',
      'url': 'druid/sql.html',
      'perms': null,
      'type': 1,
      'icon': 'fa fa-bug',
      'orderNum': 4,
      'open': null,
      'list': null
    },
    {
      'menuId': 6,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '定时任务',
      'url': 'modules/job/schedule.html',
      'perms': null,
      'type': 1,
      'icon': 'fa fa-tasks',
      'orderNum': 5,
      'open': null,
      'list': null
    },
    {
      'menuId': 7,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '查看',
      'url': null,
      'perms': 'sys:schedule:list,sys:schedule:info',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 8,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '新增',
      'url': null,
      'perms': 'sys:schedule:save',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 9,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '修改',
      'url': null,
      'perms': 'sys:schedule:update',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 10,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '删除',
      'url': null,
      'perms': 'sys:schedule:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 11,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '暂停',
      'url': null,
      'perms': 'sys:schedule:pause',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 12,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '恢复',
      'url': null,
      'perms': 'sys:schedule:resume',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 13,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '立即执行',
      'url': null,
      'perms': 'sys:schedule:run',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 14,
      'parentId': 6,
      'parentName': '定时任务',
      'name': '日志列表',
      'url': null,
      'perms': 'sys:schedule:log',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 15,
      'parentId': 2,
      'parentName': '管理员列表',
      'name': '查看',
      'url': null,
      'perms': 'sys:user:list,sys:user:info',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 16,
      'parentId': 2,
      'parentName': '管理员列表',
      'name': '新增',
      'url': null,
      'perms': 'sys:user:save,sys:role:select',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 17,
      'parentId': 2,
      'parentName': '管理员列表',
      'name': '修改',
      'url': null,
      'perms': 'sys:user:update,sys:role:select',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 18,
      'parentId': 2,
      'parentName': '管理员列表',
      'name': '删除',
      'url': null,
      'perms': 'sys:user:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 19,
      'parentId': 3,
      'parentName': '角色管理',
      'name': '查看',
      'url': null,
      'perms': 'sys:role:list,sys:role:info',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 20,
      'parentId': 3,
      'parentName': '角色管理',
      'name': '新增',
      'url': null,
      'perms': 'sys:role:save,sys:menu:list',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 21,
      'parentId': 3,
      'parentName': '角色管理',
      'name': '修改',
      'url': null,
      'perms': 'sys:role:update,sys:menu:list',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 22,
      'parentId': 3,
      'parentName': '角色管理',
      'name': '删除',
      'url': null,
      'perms': 'sys:role:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 23,
      'parentId': 4,
      'parentName': '菜单管理',
      'name': '查看',
      'url': null,
      'perms': 'sys:menu:list,sys:menu:info',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 24,
      'parentId': 4,
      'parentName': '菜单管理',
      'name': '新增',
      'url': null,
      'perms': 'sys:menu:save,sys:menu:select',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 25,
      'parentId': 4,
      'parentName': '菜单管理',
      'name': '修改',
      'url': null,
      'perms': 'sys:menu:update,sys:menu:select',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 26,
      'parentId': 4,
      'parentName': '菜单管理',
      'name': '删除',
      'url': null,
      'perms': 'sys:menu:delete',
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 27,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '参数管理',
      'url': 'modules/sys/config.html',
      'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
      'type': 1,
      'icon': 'fa fa-sun-o',
      'orderNum': 6,
      'open': null,
      'list': null
    },
    {
      'menuId': 29,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '系统日志',
      'url': 'modules/sys/log.html',
      'perms': 'sys:log:list',
      'type': 1,
      'icon': 'fa fa-file-text-o',
      'orderNum': 7,
      'open': null,
      'list': null
    },
    {
      'menuId': 30,
      'parentId': 1,
      'parentName': '系统管理',
      'name': '文件上传',
      'url': 'modules/oss/oss.html',
      'perms': 'sys:oss:all',
      'type': 1,
      'icon': 'fa fa-file-image-o',
      'orderNum': 6,
      'open': null,
      'list': null
    },
    {
      'menuId': 31,
      'parentId': 0,
      'parentName': null,
      'name': 'test',
      'url': null,
      'perms': null,
      'type': 0,
      'icon': null,
      'orderNum': 5,
      'open': null,
      'list': null
    },
    {
      'menuId': 46,
      'parentId': 2,
      'parentName': '管理员列表',
      'name': 'test',
      'url': null,
      'perms': null,
      'type': 2,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    },
    {
      'menuId': 47,
      'parentId': 1,
      'parentName': '系统管理',
      'name': 'test2',
      'url': '/test/test2.html',
      'perms': null,
      'type': 1,
      'icon': null,
      'orderNum': 0,
      'open': null,
      'list': null
    }]
  }
}

// 获取上级菜单
export function select () {
  return {
    isOpen: false,
    url: '/sys/menu/select',
    type: 'get',
    data: {}
  }
}

// 获取菜单信息
export function info (id) {
  return {
    isOpen: false,
    url: '/sys/menu/info' + (isInteger(id) ? `/${id}` : ''),
    type: 'get',
    data: {}
  }
}

// 添加菜单
export function add (params) {
  return {
    isOpen: false,
    url: '/sys/menu/save',
    type: 'post',
    data: {}
  }
}

// 修改菜单
export function update (params) {
  return {
    isOpen: false,
    url: '/sys/menu/update',
    type: 'post',
    data: {}
  }
}

// 删除菜单
export function del (id) {
  return {
    isOpen: false,
    url: '/sys/menu/delete' + (isInteger(id) ? `/${id}` : ''),
    type: 'post',
    data: {}
  }
}
