import Vue from 'vue'
const _import = require('./import-' + process.env.NODE_ENV)

/**
 * 判断当前路由是否为默认路由
 * true: 默认路由, false: 动态菜单路由
 * @param {*} currentRoute
 * @param {*} defaultRouteList
 */
export function currentRouteIsDefault (currentRoute, defaultRouteList) {
  var temp = []
  for (var i = 0; i < defaultRouteList.length; i++) {
    if (currentRoute.path === defaultRouteList[i].path) {
      return true
    } else if (defaultRouteList[i].children && defaultRouteList[i].children.length >= 1) {
      temp = temp.concat(defaultRouteList[i].children)
    }
  }
  return temp.length >= 1 ? currentRouteIsDefault(currentRoute, temp) : false
}

/**
 * 添加动态菜单路由
 * @param {*} menuList
 */
export function addMenuListRoutes (menuList = [], routes = []) {
  var temp = []
  var tempRouteName = ''
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].list && menuList[i].list.length >= 1) {
      temp = temp.concat(menuList[i].list)
    } else {
      tempRouteName = getRouteNameByUrl(menuList[i].url)
      if (/\S/.test(tempRouteName) && tempRouteName !== 'sql') {
        routes.push({
          path: tempRouteName,
          component: _import(`modules/${tempRouteName}/index`),
          name: tempRouteName,
          desc: tempRouteName,
          meta: { isTab: true }
        })
      }
    }
  }
  return temp.length >= 1 ? addMenuListRoutes(temp, routes) : [
    {
      path: '/',
      component: _import('main'),
      redirect: { name: 'home' },
      desc: '主入口整体布局',
      children: routes,
      beforeEnter (to, from, next) {
        let token = Vue.cookie.get('token')
        if (!token || !/\S/.test(token)) {
          next({ name: 'login' })
        }
        next()
      }
    },
    { path: '*', redirect: { name: '404' } }
  ]
}

function getRouteNameByUrl (url) {
  let val = /.*\/(.*)\.html/.exec(url)
  return val && val.length >= 1 ? val[1] : ''
}
