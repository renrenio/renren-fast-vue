<template>
  <div
    class="site-wrapper"
    :class="{ 'site-sidebar--fold': sidebarFold }"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar />
      <main-sidebar />
      <div class="site-content__wrapper" :style="{ 'min-height': documentClientHeight + 'px' }">
        <main class="site-content" :class="{ 'site-content--tabs': $route.meta.isTab }">
          <!-- 主入口标签页 s -->
          <el-tabs
            v-if="$route.meta.isTab"
            v-model="mainTabsActiveName"
            :closable="true"
            @tab-click="selectedTabHandle"
            @tab-remove="removeTabHandle">
            <el-dropdown class="site-tabs__tools" :show-timeout="0">
              <i class="el-icon-arrow-down el-icon--right"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="tabsCloseCurrentHandle">关闭当前标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsCloseOtherHandle">关闭其它标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsCloseAllHandle">关闭全部标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsRefreshCurrentHandle">刷新当前标签页</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-tab-pane
              v-for="item in mainTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name">
              <el-card :style="siteContentViewHeight">
                <iframe
                  v-if="item.type === 'iframe'"
                  :src="item.url"
                  width="100%" height="100%" frameborder="0" scrolling="yes">
                </iframe>
                <keep-alive v-else>
                  <router-view v-if="item.name === mainTabsActiveName" />
                </keep-alive>
              </el-card>
            </el-tab-pane>
          </el-tabs>
          <!-- 主入口标签页 e -->
          <el-card v-else :style="siteContentViewHeight">
            <keep-alive>
              <router-view />
            </keep-alive>
          </el-card>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
  import MainNavbar from './main-navbar'
  import MainSidebar from './main-sidebar'
  import isEmpty from 'lodash/isEmpty'
  export default {
    data () {
      return {
        loading: true
      }
    },
    components: {
      MainNavbar,
      MainSidebar
    },
    computed: {
      documentClientHeight: {
        get () { return this.$store.state.common.documentClientHeight },
        set (val) { this.$store.commit('common/updateDocumentClientHeight', val) }
      },
      sidebarFold: {
        get () { return this.$store.state.common.sidebarFold }
      },
      menuActiveName: {
        get () { return this.$store.state.common.menuActiveName },
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
      userId: {
        get () { return this.$store.state.user.id },
        set (val) { this.$store.commit('user/updateId', val) }
      },
      userName: {
        get () { return this.$store.state.user.name },
        set (val) { this.$store.commit('user/updateName', val) }
      },
      siteContentViewHeight () {
        var height = this.documentClientHeight - 50 - 30 - 2
        if (this.$route.meta.isTab) {
          height -= 40
          return this.$route.meta.isIframe ? { height: height + 'px' } : { minHeight: height + 'px' }
        }
        return { minHeight: height + 'px' }
      }
    },
    created () {
      this.getUserInfo()
    },
    mounted () {
      this.resetDocumentClientHeight()
    },
    methods: {
      // 重置窗口可视高度
      resetDocumentClientHeight () {
        this.documentClientHeight = document.documentElement['clientHeight']
        window.onresize = () => {
          this.documentClientHeight = document.documentElement['clientHeight']
        }
      },
      // 获取当前管理员信息
      getUserInfo () {
        this.$http({
          url: this.$http.adornUrl('/sys/user/info'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.loading = false
            this.mainTabs = []
            this.userId = data.user.userId
            this.userName = data.user.username
          }
        })
      },
      // tabs, 选中tab
      selectedTabHandle (tab) {
        tab = this.mainTabs.filter(item => item.name === tab.name)
        if (!isEmpty(tab)) {
          this.$router.push({ name: tab[0].name })
        }
      },
      // tabs, 删除tab
      removeTabHandle (tabName) {
        var newTabs = this.mainTabs.filter(item => item.name !== tabName)
        if (newTabs.length <= 0) {
          this.menuActiveName = ''
          this.$router.push({ name: 'home' })
        } else {
          // 当前选中tab被删除
          if (tabName === this.mainTabsActiveName) {
            this.$router.push({ name: newTabs[newTabs.length - 1].name }, () => {
              this.mainTabsActiveName = this.$route.name
            })
          }
          this.mainTabs = newTabs
        }
      },
      // tabs, 关闭当前
      tabsCloseCurrentHandle () {
        this.removeTabHandle(this.mainTabsActiveName)
      },
      // tabs, 关闭其它
      tabsCloseOtherHandle () {
        this.mainTabs = this.mainTabs.filter(item => item.name === this.mainTabsActiveName)
      },
      // tabs, 关闭全部
      tabsCloseAllHandle () {
        this.mainTabs = []
        this.menuActiveName = ''
        this.$router.push({ name: 'home' })
      },
      // tabs, 刷新当前
      tabsRefreshCurrentHandle () {
        var tempTabName = this.mainTabsActiveName
        this.removeTabHandle(tempTabName)
        this.$nextTick(() => {
          this.$router.push({ name: tempTabName })
        })
      }
    }
  }
</script>
