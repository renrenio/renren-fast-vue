<template>
  <div class="site-content site-content--tabs">
    <el-tabs
      v-model="tabActiveName"
      :closable="$store.state.contentTabs.tabList.length > 1"
      @tab-click="selectedTabHandle"
      @tab-remove="removeTabHandle">
        <el-tab-pane
          v-for="item in $store.state.contentTabs.tabList"
          :key="item.name"
          :label="item.title"
          :name="item.name">
          <el-card :body-style="contentViewHeight(item)">
            <iframe
              v-if="item.type === 'iframe'"
              :src="iframePath + item.url"
              width="100%" height="100%" frameborder="0" scrolling="yes">
            </iframe>
            <keep-alive v-else>
              <router-view v-if="item.name === tabActiveName"></router-view>
            </keep-alive>
          </el-card>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import isEmpty from 'lodash/isEmpty'
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        iframePath: '//demo.open.renren.io/renren-fast/'
      }
    },
    computed: {
      tabActiveName: {
        get () {
          return this.$store.state.contentTabs.activeName
        },
        set (val) {
          this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: val })
        }
      }
    },
    methods: {
      // tab内容容器显示高度
      contentViewHeight (tab) {
        var height = this.$store.state.documentClientHeight
        height -= 50 // site-topbar
        height -= 40 // el-tabs__header
        height -= 15 // el-tabs__header margin-bottom
        height -= 15 // el-tabs__content padding-bottom
        height -= 2  // el-card border-top border-bottom
        height += 'px'
        return tab.type === 'iframe' ? { height } : { minHeight: height }
      },
      // 选中tab
      selectedTabHandle (tab) {
        tab = this.$store.state.contentTabs.tabList.filter(item => item.name === tab.name)
        if (!isEmpty(tab)) {
          this.$router.push({ name: tab[0].name })
        }
      },
      // 删除tab
      removeTabHandle (tabName) {
        var newTabList = this.$store.state.contentTabs.tabList.filter(item => item.name !== tabName)
        if (!isEmpty(newTabList)) {
          // 当前选中tab被删除
          if (this.tabActiveName === tabName) {
            this.$router.push({ name: newTabList[newTabList.length - 1].name }, () => {
              this.tabActiveName = this.$route.name
            })
          }
          this.UPDATE_CONTENT_TABS({
            activeName: this.tabActiveName,
            tabList: newTabList
          })
        }
      },
      ...mapMutations(['UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME'])
    }
  }
</script>

<style lang="scss">
  .site-content--tabs {
    padding: 55px 0 0;

    > .el-tabs {
      .el-tabs__header {
        position: fixed;
        top: 50px;
        left: 230px;
        right: 0;
        z-index: 930;
        padding: 0 15px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        background-color: #fff;
      }
      .el-tabs__nav-wrap {
        margin-bottom: 0;
        &:after {
          display: none;
        }
      }
      .el-tabs__content {
        padding: 0 15px 15px;
      }
      .el-pagination {
        margin-top: 15px;
        text-align: right;
      }
      .el-breadcrumb {
        padding: 0 0 15px;
        margin-bottom: 22px;
        border-bottom: 1px solid #ebeef5;
      }
    }
  }
</style>

