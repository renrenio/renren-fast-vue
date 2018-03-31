function install(Vue, options) {

// 全局filter
  Vue.filter('filterPrice', function (value) { // 价格过滤器 格式 20.00
    if (!value) return '0.00'
    return `${(value / 100).toFixed(2)}`
  })
}

export default install
