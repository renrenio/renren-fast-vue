/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id, pid) {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (data[j][id] === data[i][pid]) {
        data[j]['children'] = data[j]['children'] || []
        data[j]['children'].push(data[i])
        data.splice(i, 1)
        i--
        break
      }
    }
  }
  return data
}

/**
 * 获取字符串字节长度
 */
export function getStringLength (s) {
  return s.replace(/[\u4e00-\u9fa5\uff00-\uffff]/g, '**').length
}

/**
 * 获取路由名称, 根据url地址
 */
export function getRouteNameByUrl (url) {
  let val = /.*\/(.*)\.html/.exec(url)
  return val && val.length >= 1 ? val[1] : ''
}
