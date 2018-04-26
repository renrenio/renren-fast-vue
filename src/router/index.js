// 路由定义使用说明:
// 1. 代码中路由统一使用name属性跳转.
// 2. 开放path属性用做简短路由, 比如: '/a1', 访问地址: www.renren.io/#/a1
import Vue from 'vue'
import Router from 'vue-router'
import { currentRouteIsDefault, addMenuListRoutes } from './utils'
import http from '@/utils/http'

Vue.use(Router)

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有开发环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddMenuListRoutes: false,
  routes: [
    { path: '/404', component: _import('error/404'), name: '404', desc: '404未找到' },
    { path: '/login', component: _import('login/index'), name: 'login', desc: '登录' },
    {
      path: '/',
      component: _import('main'),
      name: 'main',
      redirect: { name: 'home' },
      desc: '主入口整体布局',
      children: [
        { path: '/home', component: _import('home/index'), name: 'home', desc: '首页' },
        { path: '/theme', component: _import('theme/index'), name: 'theme', desc: '主题' }
        // { path: '/schedule', component: _import('modules/schedule/index'), name: 'schedule', desc: '定时任务', meta: { isTab: true } },
        // { path: '/oss', component: _import('modules/oss/index'), name: 'oss', desc: '文件上传', meta: { isTab: true } },
        // { path: '/config', component: _import('modules/config/index'), name: 'config', desc: '参数管理', meta: { isTab: true } },
        // { path: '/log', component: _import('modules/log/index'), name: 'log', desc: '系统日志', meta: { isTab: true } },
        // { path: '/menu', component: _import('modules/menu/index'), name: 'menu', desc: '菜单管理', meta: { isTab: true } },
        // { path: '/role', component: _import('modules/role/index'), name: 'role', desc: '角色管理', meta: { isTab: true } },
        // { path: '/user', component: _import('modules/user/index'), name: 'user', desc: '管理员管理', meta: { isTab: true } }
      ],
      beforeEnter (to, from, next) {
        let token = Vue.cookie.get('token')
        if (!token || !/\S/.test(token)) {
          next({ name: 'login' })
        }
        next()
      }
    }
    // { path: '*', redirect: { name: '404' } }
  ]
})

console.log(router)

router.beforeEach((to, from, next) => {
  console.log(router.options.isAddMenuListRoutes)
  if (router.options.isAddMenuListRoutes || currentRouteIsDefault(to, router.options.routes.filter(item => item.path !== '/'))) {
    next()
  } else if (sessionStorage.getItem('menuList')) {
    router.addRoutes(addMenuListRoutes(JSON.parse(sessionStorage.getItem('menuList'))))
    router.options.isAddMenuListRoutes = true
    next({ ...to, replace: true })
  } else {
    http({
      url: http.adornUrl('/sys/menu/nav'),
      method: 'get',
      params: http.adornParams()
    }).then(({data}) => {
      if (data && data.code === 0) {
        router.addRoutes(addMenuListRoutes(data.menuList))
        router.options.isAddMenuListRoutes = true
        sessionStorage.setItem('menuList', JSON.stringify(data.menuList || '[]'))
        sessionStorage.setItem('permissions', JSON.stringify(data.permissions || '[]'))
      } else {
        sessionStorage.setItem('menuList', '[]')
        sessionStorage.setItem('permissions', '[]')
      }
      next({ ...to, replace: true })
    })
  }
})

export default router
