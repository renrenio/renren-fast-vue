import isInteger from 'lodash/isInteger'

// 获取角色列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/role/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': 2,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': [{
          'roleId': 3,
          'roleName': '系统管理员',
          'remark': '系统管理员',
          'createUserId': 1,
          'menuIdList': null,
          'createTime': '2018-03-11 17:03:29'
        }]
      }
    }
  }
}

// 获取角色列表, 根据当前用户
export function select () {
  return {
    isOpen: false,
    url: '/sys/role/select',
    type: 'get',
    data: {}
  }
}

// 获取角色信息
export function info (id) {
  return {
    // isOpen: false,
    url: '/sys/role/info' + (isInteger(id) ? `/${id}` : ''),
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'role': {
        'roleId': 3,
        'roleName': '系统管理员',
        'remark': '系统管理员',
        'createUserId': 1,
        'menuIdList': [1, 2, 15, 16, 17, 18, 3, 19, 20, 21, 22, 4, 23, 24, 25, 26, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 27, 29, 30, 31, -666666],
        'createTime': '2018-03-11 17:03:29'
      }
    }
  }
}

// 添加角色
export function add () {
  return {
    // isOpen: false,
    url: '/sys/role/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改角色
export function update () {
  return {
    // isOpen: false,
    url: '/sys/role/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除角色
export function del () {
  return {
    // isOpen: false,
    url: '/sys/role/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
