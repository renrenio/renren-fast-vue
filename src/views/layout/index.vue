<template>
  <div class="site-wrapper" :class="siteWarpperClasses" v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中">
    <template v-if="!loading">
      <navbar></navbar>
      <sidebar></sidebar>
      <div class="site-content__wrapper" :style="siteContentWarpperStyles">
        <main class="site-content" :class="{ 'site-content--tabs': routeIsTab }">
          <el-card v-if="!routeIsTab" :body-style="contentViewStyles">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-card>
          <!-- tab标签页, 内容展示方式 -->
          <content-tabs v-else></content-tabs>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
  import Navbar from './navbar'
  import Sidebar from './sidebar'
  import ContentTabs from './content-tabs'
  import API from '@/api'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        loading: true
      }
    },
    components: {
      Navbar,
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
      },
      routeIsTab () {
        return this.$route.meta && this.$route.meta.isTab
      },
      contentViewStyles () {
        var height = this.$store.state.documentClientHeight
        height -= 50 // site-topbar
        height -= 15 // site-content padding-top
        height -= 15 // site-content padding-bottom
        height -= 2  // el-card border-top border-bottom
        height += 'px'
        return [
          { minHeight: height }
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
            this.loading = false
            this.DELETE_CONTENT_TABS([])
            this.UPDATE_USER_ID({ id: data.user.userId })
            this.UPDATE_USER_NAME({ name: data.user.username })
          }
        })
      },
      ...mapMutations(['UPDATE_DOCUMENT_CLIENT_HEIGHT', 'UPDATE_USER_ID', 'UPDATE_USER_NAME', 'DELETE_CONTENT_TABS'])
    }
  }
</script>
