import Mock from 'mockjs'

// 生成数据列表
var dataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  dataList.push(Mock.mock({
    'id': '@increment',
    'username': '@name',
    'operation': '保存角色',
    'method': 'io.renren.modules.sys.controller.SysRoleController.save()',
    'params': '{\'roleId\':1,\'roleName\':\'aaa\',\'remark\':\'111\',\'createUserId\':1,\'menuIdList\':[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30],\'createTime\':\'Mar 8,2018 2:29:31 PM\'}',
    'time|1-100': 100,
    'ip': '@ip',
    'createDate': '@datetime'
  }))
}
var scheduleDataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  let name = Mock.Random.name()
  scheduleDataList.push(Mock.mock({
    'logId': '@increment',
    'jobId': '@increment(1000)',
    'beanName': name,
    'methodName': name,
    'params': '-',
    'status|0-1': 1,
    'error': null,
    'times|1-1000': 1000,
    'createTime': '@datetime'
  }))
}

// 获取日志列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/log/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': dataList
      }
    }
  }
}

// 获取定时任务日志列表
export function scheduleList () {
  return {
    // isOpen: false,
    url: '/sys/scheduleLog/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': scheduleDataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': scheduleDataList
      }
    }
  }
}

// 获取定时任务日志信息
export function scheduleInfo () {
  let name = Mock.Random.name()
  return {
    // isOpen: false,
    url: '/sys/scheduleLog/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'log': {
        'logId': 1225,
        'jobId': 3,
        'beanName': name,
        'methodName': name,
        'params': null,
        'status': 1,
        'error': `org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named '${name}' available`,
        'times': Mock.Random.integer(1, 1000),
        'createTime': Mock.Random.datetime
      }
    }
  }
}
