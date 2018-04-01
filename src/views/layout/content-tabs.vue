<template>
  <el-tabs
    v-model="tabActiveName"
    :closable="$store.state.contentTabs.length > 1"
    @tab-click="selectedTabHandle"
    @tab-remove="removeTabHandle">
    <el-tab-pane
      v-for="item in $store.state.contentTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name">
      <el-card :body-style="contentViewStyles(item)">
        <iframe
          v-if="item.type === 'iframe'"
          :src="getNestIframeUrl(item.url)"
          width="100%" height="100%" frameborder="0" scrolling="yes">
        </iframe>
        <keep-alive v-else>
          <router-view v-if="item.name === tabActiveName"></router-view>
        </keep-alive>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import isEmpty from 'lodash/isEmpty'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: {
      tabActiveName: {
        get () {
          return this.$store.state.contentTabsActiveName
        },
        set (val) {
          this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: val })
        }
      }
    },
    methods: {
      // tab内容容器显示高度
      contentViewStyles (tab) {
        var height = this.$store.state.documentClientHeight
        height -= 50 // site-topbar
        height -= 40 // el-tabs__header
        height -= 15 // el-tabs__header margin-bottom
        height -= 15 // el-tabs__content padding-bottom
        height -= 2  // el-card border-top border-bottom
        height += 'px'
        return [
          tab.type === 'iframe' ? { height } : { minHeight: height }
        ]
      },
      // 获取iframe嵌套地址
      getNestIframeUrl (url) {
        return window.SITE_CONFIG.nestIframeUrl + url
      },
      // 选中tab
      selectedTabHandle (tab) {
        tab = this.$store.state.contentTabs.filter(item => item.name === tab.name)
        if (!isEmpty(tab)) {
          this.$router.push({ name: tab[0].name })
        }
      },
      // 删除tab
      removeTabHandle (tabName) {
        var newTabs = this.$store.state.contentTabs.filter(item => item.name !== tabName)
        // 当前选中tab被删除
        if (tabName === this.tabActiveName) {
          this.$router.push({ name: newTabs[newTabs.length - 1].name }, () => {
            this.tabActiveName = this.$route.name
          })
        }
        this.UPDATE_CONTENT_TABS(newTabs)
      },
      ...mapMutations(['UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME'])
    }
  }
</script>
