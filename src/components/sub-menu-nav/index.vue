<template>
  <el-submenu
    v-if="menuNav.list && menuNav.list.length >= 1"
    :data-idx="menuNav.menuId + ''"
    :index="menuNav.menuId + ''">
    <template slot="title">
      <icon-svg name="xitong" class="site-sidebar__menu-icon" :class="menuNav.icon"></icon-svg>
      <span>{{ menuNav.name }}</span>
    </template>
    <sub-menu-nav
      v-for="item in menuNav.list" 
      :key="item.menuId"
      :menu-nav="item">
    </sub-menu-nav>
  </el-submenu>
  <el-menu-item
    v-else
    :index="menuNav.menuId + ''"
    :data-idx="menuNav.menuId + ''"
    @click="gotoRouteByMenuNav(menuNav)">
    {{ menuNav.name }}
  </el-menu-item>
</template>

<script>
  import { getRouteNameByUrl } from '@/utils'
  import SubMenuNav from '../sub-menu-nav'
  export default {
    name: 'sub-menu-nav',
    props: {
      menuNav: Object
    },
    components: {
      SubMenuNav
    },
    methods: {
      // 跳转到菜单导航对应路由
      gotoRouteByMenuNav (menuNav) {
        var routeName = getRouteNameByUrl(menuNav.url)
        if (/\S/.test(routeName)) {
          this.$router.push({ name: routeName })
        }
      }
    }
  }
</script>
