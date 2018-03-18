// 获取文件列表
export function list (params) {
  return {
    // isOpen: false,
    url: '/sys/oss/list',
    type: 'get',
    data: {}
  }
}

// 获取云存储配置信息
export function config () {
  return {
    // isOpen: false,
    url: '/sys/oss/config',
    type: 'get',
    data: {}
  }
}

// 保存云存储配置信息
export function addConfig (params) {
  return {
    // isOpen: false,
    url: '/sys/oss/saveConfig',
    type: 'post',
    data: {}
  }
}

// 删除文件
export function del (params) {
  return {
    // isOpen: false,
    url: '/sys/oss/delete',
    type: 'post',
    data: {}
  }
}
