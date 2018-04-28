<template>
  <aside class="site-sidebar" :class="sidebarClasses">
    <div class="site-sidebar__inner">
      <el-menu
        :default-active="menuActiveName"
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-menu-item index="1-1" @click="$router.push({ name: 'home' })">
          <icon-svg name="shouye" class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">首页</span>
        </el-menu-item>
        <sub-menu
          v-for="menu in menuList" 
          :key="menu.menuId"
          :menu="menu"
          :dynamicRoutes="dynamicRoutes">
        </sub-menu>
      </el-menu>
    </div>
  </aside>
</template>

<script>
  import SubMenu from './main-sidebar-sub-menu'
  import isEmpty from 'lodash/isEmpty'
  export default {
    data () {
      return {
        dynamicRoutes: []
      }
    },
    components: {
      SubMenu
    },
    computed: {
      sidebarLayoutSkin: {
        get () { return this.$store.state.common.sidebarLayoutSkin }
      },
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold }
      },
      menuList: {
        get () { return this.$store.state.common.menuList },
        set (val) { this.$store.commit('common/updateMenuList', val) }
      },
      menuActiveName: {
        get () {
          let name = this.$store.state.common.menuActiveName
          return /\S/.test(name) ? name : '1-1'
        },
        set (val) { this.$store.commit('common/updateMenuActiveName', val) }
      },
      mainTabs: {
        get () { return this.$store.state.common.mainTabs },
        set (val) { this.$store.commit('common/updateMainTabs', val) }
      },
      mainTabsActiveName: {
        get () { return this.$store.state.common.mainTabsActiveName },
        set (val) { this.$store.commit('common/updateMainTabsActiveName', val) }
      },
      sidebarClasses () {
        return [
          !/\S/.test(this.sidebarLayoutSkin) || this.sidebarLayoutSkin === 'light' ? '' : `site-sidebar--${this.sidebarLayoutSkin}`
        ]
      }
    },
    watch: {
      '$route' (route) {
        if (route.meta.isTab) {
          var tab = this.mainTabs.filter(item => item.name === route.name)[0]
          // tab不存在, 先添加
          if (isEmpty(tab)) {
            var menu = this.getMenuByRouteName(route.name, this.menuList)
            if (!isEmpty(menu)) {
              tab = {
                id: menu.menuId,
                name: route.name,
                title: menu.name,
                type: (window.SITE_CONFIG.nestIframeRouteNameList || []).indexOf(route.name) !== -1 ? 'iframe' : 'module',
                url: menu.url
              }
              this.mainTabs = this.mainTabs.concat(tab)
            } else {
              return console.error('未能找到可用标签页！')
            }
          }
          this.menuActiveName = tab.id + ''
          this.mainTabsActiveName = route.name
        }
      }
    },
    created () {
      this.menuList = JSON.parse(sessionStorage.getItem('menuList') || '[]')
      this.dynamicRoutes = JSON.parse(sessionStorage.getItem('dynamicRoutes') || '[]')
    },
    methods: {
      // 获取菜单, 根据路由名称
      getMenuByRouteName (name, menuList) {
        var temp = []
        for (var i = 0; i < menuList.length; i++) {
          if (menuList[i].list && menuList[i].list.length >= 1) {
            temp = temp.concat(menuList[i].list)
          } else if (menuList[i].url === name) {
            return menuList[i]
          }
        }
        return temp.length >= 1 ? this.getMenuByRouteName(name, temp) : []
      }
    }
  }
</script>
