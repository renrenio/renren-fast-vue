<template>
  <aside class="site-sidebar">
    <div class="site-sidebar__inner">
      <el-menu
        :default-active="menuNavActive"
        :default-openeds="menuNavOpeneds"
        :collapse="$store.state.sidebarCollapse"
        class="site-sidebar__menu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1-1" @click="$router.push({ name: 'home' })">
          <icon-svg name="shouye" class="site-sidebar__menu-icon"></icon-svg>
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
  import { getRouteNameByUrl } from '@/utils'
  import { mapMutations } from 'vuex'
  import isEmpty from 'lodash/isEmpty'
  export default {
    data () {
      return {
        menuNavActive: '1-1',
        menuNavOpeneds: ['1'],
        isCollapse: false
      }
    },
    components: {
      SubMenuNav
    },
    watch: {
      $route: 'routeHandle'
    },
    created () {
      this.routeHandle(this.$route, true)
    },
    methods: {
      // 路由操作
      // isInit: 页面第一次加载时, 需先获取菜单导航列表, 再进行其他操作
      routeHandle (route, isInit) {
        if (/^\/n\/.*$/.test(route.path)) {
          // tab不存在添加, 存在选中
          let tab = this.$store.state.contentTabs.tabList.filter(tab => tab.name === route.name)
          if (isEmpty(tab)) {
            if (isInit && isEmpty(this.$store.state.menuNavList)) {
              this.getMenuNavList().then(() => {
                this.addContentTab(route.name)
              })
            } else {
              this.addContentTab(route.name)
            }
          } else {
            this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: route.name })
            this.menuNavActive = tab[0].id + ''
          }
        } else {
          if (isInit) {
            this.getMenuNavList()
          }
        }
      },
      // 添加内容tab项
      addContentTab (name) {
        let menuNav = this.getMenuNavByRouteName(name)
        this.UPDATE_CONTENT_TABS({
          activeName: name,
          tabList: this.$store.state.contentTabs.tabList.concat({
            id: menuNav.menuId,
            title: menuNav.name,
            name: name,
            type: this.$store.state.menuNavTypeMap[name] === 'iframe' ? 'iframe' : 'module',
            url: menuNav.url
          })
        })
        this.menuNavActive = menuNav.menuId + ''
      },
      // 获取菜单导航列表
      getMenuNavList () {
        return API.menu.nav().then(({data}) => {
          this.UPDATE_MENU_NAV_LIST(data && data.code === 0 ? data.menuList : [])
        })
      },
      // 获取菜单导航, 根据路由名称
      getMenuNavByRouteName (name, menuNavList = this.$store.state.menuNavList) {
        for (var i = 0; i < menuNavList.length; i++) {
          if (menuNavList[i].list && menuNavList[i].list.length >= 1) {
            return this.getMenuNavByRouteName(name, menuNavList[i].list)
          } else {
            if (getRouteNameByUrl(menuNavList[i].url) === name) {
              return menuNavList[i]
            }
          }
        }
      },
      ...mapMutations(['UPDATE_MENU_NAV_LIST', 'UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME'])
    }
  }
</script>

<style lang="scss">
  .site-sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    z-index: 1020;
    width: 230px;
    background-color: #545c64;
    overflow: hidden;
  }
  .site-sidebar__inner {
    position: relative;
    z-index: 1;
    width: 250px;
    height: 100%;
    padding-bottom: 15px;
    overflow-y: scroll;
  }
  .el-menu.site-sidebar__menu {
    width: 230px;
    border-right: 0;
  }
  .site-sidebar__menu-icon {
    margin-right: 5px;
    font-size: 18px;
  }
</style>
