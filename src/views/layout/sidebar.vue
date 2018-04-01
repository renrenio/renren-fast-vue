<template>
  <aside class="site-sidebar" :class="sidebarClasses">
    <div class="site-sidebar__inner">
      <el-menu
        :default-active="menuNavActive"
        :collapse="$store.state.sidebarCollapse"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-menu-item index="1-1" @click="$router.push({ name: 'home' })">
          <i class="site-sidebar__menu-icon fa fa-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <sub-menu-nav
          v-for="menuNav in $store.state.menuNavList" 
          :key="menuNav.menuId"
          :menu-nav="menuNav">
        </sub-menu-nav>
      </el-menu>
    </div>
  </aside>
</template>

<script>
  import SubMenuNav from '@/components/sub-menu-nav'
  import API from '@/api'
  import { mapMutations } from 'vuex'
  import { getRouteNameByUrl } from '@/utils'
  import isEmpty from 'lodash/isEmpty'
  export default {
    data () {
      return {
        menuNavActive: '1-1'
      }
    },
    components: {
      SubMenuNav
    },
    computed: {
      sidebarClasses () {
        let skin = this.$store.state.sidebarLayoutSkin
        return [
          !/\S/.test(skin) || skin === 'light' ? '' : `site-sidebar--${skin}`
        ]
      }
    },
    watch: {
      $route: 'routeHandle'
    },
    created () {
      this.getMenuNavList().then(() => {
        this.routeHandle(this.$route)
      })
    },
    methods: {
      // 获取菜单导航列表 / 权限
      getMenuNavList () {
        return API.menu.nav().then(({data}) => {
          if (data && data.code === 0) {
            this.UPDATE_MENU_NAV_LIST(data.menuList)
            sessionStorage.setItem('permissions', JSON.stringify(data.permissions || '[]'))
          } else {
            this.UPDATE_MENU_NAV_LIST([])
            sessionStorage.setItem('permissions', '[]')
          }
        })
      },
      // 路由操作
      routeHandle (route) {
        if (route.meta && route.meta.isTab) {
          var tab = this.$store.state.contentTabs.filter(item => item.name === route.name)[0]
          // tab不存在, 先添加
          if (isEmpty(tab)) {
            var menuNav = this.getMenuNavByRouteName(route.name, this.$store.state.menuNavList)
            if (!isEmpty(menuNav)) {
              tab = {
                id: menuNav.menuId,
                name: route.name,
                title: menuNav.name,
                type: (window.SITE_CONFIG.nestIframeRouteNameList || []).indexOf(route.name) !== -1 ? 'iframe' : 'module',
                url: menuNav.url
              }
              this.ADD_CONTENT_TAB(tab)
            } else {
              return console.error('未能找到可用tab标签页！')
            }
          }
          this.menuNavActive = tab.id + ''
          this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: route.name })
        }
      },
      // 获取菜单导航, 根据路由名称
      getMenuNavByRouteName (name, menuNavList) {
        var temp = []
        for (var i = 0; i < menuNavList.length; i++) {
          if (menuNavList[i].list && menuNavList[i].list.length >= 1) {
            temp = temp.concat(menuNavList[i].list)
          } else if (getRouteNameByUrl(menuNavList[i].url) === name) {
            return menuNavList[i]
          }
        }
        return temp.length >= 1 ? this.getMenuNavByRouteName(name, temp) : []
      },
      ...mapMutations(['UPDATE_MENU_NAV_LIST', 'ADD_CONTENT_TAB', 'UPDATE_CONTENT_TABS_ACTIVE_NAME'])
    }
  }
</script>
