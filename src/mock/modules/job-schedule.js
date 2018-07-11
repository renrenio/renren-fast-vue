import Mock from 'mockjs'

// 生成数据列表
var dataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  let name = Mock.Random.name()
  dataList.push(Mock.mock({
    'jobId': '@increment',
    'beanName': name,
    'methodName': name,
    'params': '-',
    'cronExpression': '0 0/30 * * * ?',
    'status': 1,
    'remark': '@csentence',
    'createTime': '@datetime'
  }))
}

// 获取定时任务列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/schedule/list',
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

// 获取定时任务信息
export function info () {
  return {
    // isOpen: false,
    url: '/sys/schedule/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'user': dataList[0]
    }
  }
}

// 添加定时任务
export function add () {
  return {
    // isOpen: false,
    url: '/sys/schedule/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改定时任务
export function update () {
  return {
    // isOpen: false,
    url: '/sys/schedule/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除定时任务
export function del () {
  return {
    // isOpen: false,
    url: '/sys/schedule/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 运行定时任务
export function run () {
  return {
    // isOpen: false,
    url: '/sys/schedule/run',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 暂停定时任务
export function pause () {
  return {
    // isOpen: false,
    url: '/sys/schedule/pause',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 恢复定时任务
export function resume () {
  return {
    // isOpen: false,
    url: '/sys/schedule/resume',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
