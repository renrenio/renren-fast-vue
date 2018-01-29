<template>
  <div class="site-wrapper" :class="siteWarpperClasses">
    <topbar></topbar>
    <sidebar></sidebar>
    <div class="site-content__wrapper" :style="siteContentWarpperStyles">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Topbar from './topbar'
  import Sidebar from './sidebar'
  import ContentTabs from './content-tabs'
  import API from '@/api'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      Topbar,
      Sidebar,
      ContentTabs
    },
    computed: {
      siteWarpperClasses () {
        return [
          { 'site-sidebar--collapse': this.$store.state.sidebarCollapse }
        ]
      },
      siteContentWarpperStyles () {
        return [
          { 'minHeight': this.$store.state.documentClientHeight + 'px' }
        ]
      }
    },
    created () {
      this.getUserInfo()
    },
    mounted () {
      this.resetDocumentClientHeight()
      window.onresize = () => {
        this.resetDocumentClientHeight()
      }
    },
    methods: {
      // 重置窗口可视高度
      resetDocumentClientHeight () {
        this.UPDATE_DOCUMENT_CLIENT_HEIGHT({ height: document.documentElement['clientHeight'] })
      },
      // 获取当前管理员信息
      getUserInfo () {
        API.user.info().then(({data}) => {
          if (data && data.code === 0) {
            this.UPDATE_USER_INFO({
              userId: data.user.userId,
              userName: data.user.username
            })
          }
        })
      },
      ...mapMutations(['UPDATE_DOCUMENT_CLIENT_HEIGHT', 'UPDATE_USER_INFO'])
    }
  }
</script>

<style lang="scss">
  .site-wrapper {
    position: relative;
    min-width: 1180px;
  }
  .site-content__wrapper {
    position: relative;
    padding-top: 50px;
    margin-left: 230px;
    min-height: 100%;
  }
  .site-content {
    position: relative;
    padding: 15px;
  }

  /* sidebar-collapse */
  .site-sidebar--collapse {
    .site-topbar__header,
    .site-sidebar,
    .site-sidebar__inner,
    .el-menu.site-sidebar__menu {
      width: 64px;
    }
    .site-topbar__body,
    .site-content__wrapper {
      margin-left: 64px;
    }
    .site-logo {
      &__lg {
        display: none;
      }
      &__mini {
        display: inline-block;
      }
    }
    .site-sidebar,
    .site-sidebar__inner {
      overflow: initial;
    }
    .el-menu-item,
    .el-submenu__title {
      text-align: center;
    }
    .site-sidebar__menu-icon {
      margin-right: 0;
      font-size: 20px;
    }
    .el-menu-item span,
    .el-submenu > .el-submenu__title span {
      display: none;
    }
  }
</style>
