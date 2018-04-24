import Vue from 'vue'
import Router from 'vue-router'

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有开发环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

// 路由定义使用说明:
// 1. 代码中路由统一使用name属性跳转.
// 2. 开放path属性用做简短路由, 比如: '/a1', 访问地址: www.renren.io/#/a1
export default new Router({
  mode: 'hash',
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
        // 通过isTab属性, 设定是否通过tab标签页展示内容
        { path: '/home', component: _import('home/index'), name: 'home', desc: '首页' },
        { path: '/theme', component: _import('theme/index'), name: 'theme', desc: '主题' },
        { path: '/job/schedule', component: _import('modules/job/schedule'), name: 'schedule', desc: '定时任务', meta: { isTab: true } },
        { path: '/oss', component: _import('modules/oss/index'), name: 'oss', desc: '文件上传', meta: { isTab: true } },
        { path: '/sys/config', component: _import('modules/sys/config'), name: 'config', desc: '参数管理', meta: { isTab: true } },
        { path: '/sys/log', component: _import('modules/sys/log'), name: 'log', desc: '系统日志', meta: { isTab: true } },
        { path: '/sys/menu', component: _import('modules/sys/menu'), name: 'menu', desc: '菜单管理', meta: { isTab: true } },
        { path: '/sys/role', component: _import('modules/sys/role'), name: 'role', desc: '角色管理', meta: { isTab: true } },
        { path: '/sys/user', component: _import('modules/sys/user'), name: 'user', desc: '管理员管理', meta: { isTab: true } }
      ],
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
})
