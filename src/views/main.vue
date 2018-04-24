<template>
  <div
    class="site-wrapper"
    :class="{ 'site-sidebar--collapse': this.$store.state.sidebarCollapse }"
    v-loading.fullscreen.lock="loading"
    element-loading-text="拼命加载中">
    <template v-if="!loading">
      <main-navbar />
      <main-sidebar />
      <div class="site-content__wrapper" :style="{ 'min-height': this.$store.state.documentClientHeight + 'px' }">
        <main class="site-content" :class="{ 'site-content--tabs': routeIsTab }">
          <!-- 标签页展示内容 s -->
          <el-tabs
            v-if="routeIsTab"
            v-model="tabActiveName"
            :closable="true"
            @tab-click="selectedTabHandle"
            @tab-remove="removeTabHandle">
            <!-- 标签页工具 s -->
            <el-dropdown class="site-tabs__tools" :show-timeout="0">
              <i class="el-icon-arrow-down el-icon--right"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="tabsCloseCurrentHandle">关闭当前标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsCloseOtherHandle">关闭其它标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsCloseAllHandle">关闭全部标签页</el-dropdown-item>
                <el-dropdown-item @click.native="tabsRefreshCurrentHandle">刷新当前标签页</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- 标签页工具 e -->
            <el-tab-pane
              v-for="item in $store.state.contentTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name">
              <el-card :style="siteContentViewHeight">
                <iframe
                  v-if="item.type === 'iframe'"
                  :src="getNestIframeUrl(item.url)"
                  width="100%" height="100%" frameborder="0" scrolling="yes">
                </iframe>
                <keep-alive v-else>
                  <router-view v-if="item.name === tabActiveName" />
                </keep-alive>
              </el-card>
            </el-tab-pane>
          </el-tabs>
          <!-- 标签页展示内容 e -->
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
  import { mapMutations } from 'vuex'
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
      siteContentViewHeight () {
        var height = this.$store.state.documentClientHeight - 50 - 30 - 2
        if (this.routeIsTab) {
          height -= 40
          return this.$route.meta && this.$route.meta.isIframe ? { height: height + 'px' } : { minHeight: height + 'px' }
        }
        return { minHeight: height + 'px' }
      },
      routeIsTab () {
        return this.$route.meta && this.$route.meta.isTab
      },
      tabActiveName: {
        get () {
          return this.$store.state.contentTabsActiveName
        },
        set (name) {
          this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name })
        }
      }
    },
    watch: {
      '$store.state.contentTabs' (tabs) {
        if (tabs.length <= 0) {
          this.UPDATE_MENU_NAV_ACTIVE_NAME({ name: '' })
          this.$router.push({ name: 'home' })
        }
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
        this.$http({
          url: this.$http.adornUrl('/sys/user/info'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.loading = false
            this.DELETE_CONTENT_TABS()
            this.UPDATE_USER_ID({ id: data.user.userId })
            this.UPDATE_USER_NAME({ name: data.user.username })
          }
        })
      },
      // 获取iframe嵌套地址
      getNestIframeUrl (url) {
        return window.SITE_CONFIG.nestIframeUrl + url
      },
      // tabs, 选中tab
      selectedTabHandle (tab) {
        tab = this.$store.state.contentTabs.filter(item => item.name === tab.name)
        if (!isEmpty(tab)) {
          this.$router.push({ name: tab[0].name })
        }
      },
      // tabs, 删除tab
      removeTabHandle (tabName) {
        var newTabs = this.$store.state.contentTabs.filter(item => item.name !== tabName)
        // 当前选中tab被删除
        if (newTabs.length >= 1 && tabName === this.tabActiveName) {
          this.$router.push({ name: newTabs[newTabs.length - 1].name }, () => {
            this.tabActiveName = this.$route.name
          })
        }
        this.UPDATE_CONTENT_TABS(newTabs)
      },
      // tabs, 关闭当前
      tabsCloseCurrentHandle () {
        this.removeTabHandle(this.tabActiveName)
      },
      // tabs, 关闭其它
      tabsCloseOtherHandle () {
        this.UPDATE_CONTENT_TABS(this.$store.state.contentTabs.filter(item => item.name === this.tabActiveName))
      },
      // tabs, 关闭全部
      tabsCloseAllHandle () {
        this.DELETE_CONTENT_TABS()
      },
      // tabs, 刷新当前
      tabsRefreshCurrentHandle () {
        var tempTabName = this.tabActiveName
        this.removeTabHandle(tempTabName)
        this.$nextTick(() => {
          this.$router.push({ name: tempTabName })
        })
      },
      ...mapMutations(['UPDATE_DOCUMENT_CLIENT_HEIGHT', 'UPDATE_USER_ID', 'UPDATE_USER_NAME', 'UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME', 'DELETE_CONTENT_TABS', 'UPDATE_MENU_NAV_ACTIVE_NAME'])
    }
  }
</script>
