<template>
  <header class="site-topbar">
    <div class="site-topbar__header">
      <h1 class="site-logo">
        <a class="site-logo__lg" href="/">Vue-cli-basic</a>
        <a class="site-logo__mini" href="/">Vue</a>
      </h1>
    </div>
    <div class="site-topbar__body clearfix">
      <el-menu
        class="site-topbar__menu"
        mode="horizontal">
        <el-menu-item class="site-topbar__switch" index="1-1" @click="switchSidebarCollapseHandle()">
          <icon-svg name="zhedie"></icon-svg>
        </el-menu-item>
      </el-menu>
      <el-menu
        class="site-topbar__menu site-topbar__menu--right"
        mode="horizontal">
        <el-menu-item class="site-topbar__avatar" index="1-2">
          <el-dropdown placement="bottom" :hide-on-click="false">
            <span class="el-dropdown-link">
              <img src="~@/assets/img/avatar.png" :alt="$store.state.user.name">
              {{ $store.state.user.name }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="updatePasswordHandle()">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>
  </header>
</template>

<script>
  import UpdatePassword from './update-password'
  import API from '@/api'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        updatePassowrdVisible: false
      }
    },
    components: {
      UpdatePassword
    },
    methods: {
      // 切换侧边栏, 水平折叠收起状态
      switchSidebarCollapseHandle () {
        this.SWITCH_SIDEBAR_COLLAPSE({ collapse: !this.$store.state.sidebarCollapse })
      },
      // 修改密码
      updatePasswordHandle () {
        this.updatePassowrdVisible = true
        this.$nextTick(() => {
          this.$refs.updatePassowrd.init()
        })
      },
      // 退出
      logoutHandle () {
        API.common.logout().then(({data}) => {
          if (data && data.code === 0) {
            this.$cookie.delete('token')
            this.$router.replace({ name: 'login' })
          }
        })
      },
      ...mapMutations(['SWITCH_SIDEBAR_COLLAPSE'])
    }
  }
</script>
