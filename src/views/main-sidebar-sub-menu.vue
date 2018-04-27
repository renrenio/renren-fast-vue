<template>
  <el-submenu
    v-if="menu.list && menu.list.length >= 1"
    :data-idx="menu.menuId + ''"
    :index="menu.menuId + ''">
    <template slot="title">
      <icon-svg :name="menu.icon" class="site-sidebar__menu-icon"></icon-svg>
      <span>{{ menu.name }}</span>
    </template>
    <sub-menu
      v-for="item in menu.list" 
      :key="item.menuId"
      :menu="item">
    </sub-menu>
  </el-submenu>
  <el-menu-item
    v-else
    :index="menu.menuId + ''"
    :data-idx="menu.menuId + ''"
    @click="gotoRouteHandle(menu.url)">
    <icon-svg :name="menu.icon" class="site-sidebar__menu-icon"></icon-svg>
    <span>{{ menu.name }}</span>
  </el-menu-item>
</template>

<script>
  import SubMenu from './main-sidebar-sub-menu'
  import { getRouteNameByUrl } from '@/utils'
  export default {
    name: 'sub-menu',
    props: {
      menu: Object,
      required: true
    },
    components: {
      SubMenu
    },
    methods: {
      // 跳转到菜单对应路由
      gotoRouteHandle (url) {
        var routeName = getRouteNameByUrl(url)
        if (/\S/.test(routeName)) {
          this.$router.push({ name: routeName })
        }
      }
    }
  }
</script>
