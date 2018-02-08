webpackJsonp([3,10,20,23],{

/***/ "6f/g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("4YfN");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/views/layout/topbar.vue + 2 modules
var topbar = __webpack_require__("8HvM");

// EXTERNAL MODULE: ./src/views/layout/sidebar.vue + 5 modules
var sidebar = __webpack_require__("jqh9");

// EXTERNAL MODULE: ./src/views/layout/content-tabs.vue + 2 modules
var content_tabs = __webpack_require__("sPSN");

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./node_modules/_vuex@3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("9rMa");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/index.vue

//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var layout = ({
  components: {
    Topbar: topbar["default"],
    Sidebar: sidebar["default"],
    ContentTabs: content_tabs["default"]
  },
  computed: {
    siteWarpperClasses: function siteWarpperClasses() {
      return [{ 'site-sidebar--collapse': this.$store.state.sidebarCollapse }];
    },
    siteContentWarpperStyles: function siteContentWarpperStyles() {
      return [{ 'minHeight': this.$store.state.documentClientHeight + 'px' }];
    }
  },
  created: function created() {
    this.getUserInfo();
  },
  mounted: function mounted() {
    var _this = this;

    this.resetDocumentClientHeight();
    window.onresize = function () {
      _this.resetDocumentClientHeight();
    };
  },

  methods: extends_default()({
    // 重置窗口可视高度
    resetDocumentClientHeight: function resetDocumentClientHeight() {
      this.UPDATE_DOCUMENT_CLIENT_HEIGHT({ height: document.documentElement['clientHeight'] });
    },

    // 获取当前管理员信息
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      api["a" /* default */].user.info().then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this2.UPDATE_USER_ID({ id: data.user.userId });
          _this2.UPDATE_USER_NAME({ name: data.user.username });
        }
      });
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_DOCUMENT_CLIENT_HEIGHT', 'UPDATE_USER_ID', 'UPDATE_USER_NAME']))
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-2739ab3c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-wrapper",class:_vm.siteWarpperClasses},[_c('topbar'),_vm._v(" "),_c('sidebar'),_vm._v(" "),_c('div',{staticClass:"site-content__wrapper",style:(_vm.siteContentWarpperStyles)},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_layout = (esExports);
// CONCATENATED MODULE: ./src/views/layout/index.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  layout,
  views_layout,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_layout = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "8HvM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("4YfN");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/views/layout/update-password.vue + 2 modules
var update_password = __webpack_require__("OHGg");

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./node_modules/_vuex@3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("9rMa");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/topbar.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var topbar = ({
  data: function data() {
    return {
      updatePassowrdVisible: false
    };
  },

  components: {
    UpdatePassword: update_password["default"]
  },
  methods: extends_default()({
    // 切换侧边栏, 水平折叠收起状态
    switchSidebarCollapseHandle: function switchSidebarCollapseHandle() {
      this.SWITCH_SIDEBAR_COLLAPSE({ collapse: !this.$store.state.sidebarCollapse });
    },

    // 修改密码
    updatePasswordHandle: function updatePasswordHandle() {
      var _this = this;

      this.updatePassowrdVisible = true;
      this.$nextTick(function () {
        _this.$refs.updatePassowrd.init();
      });
    },

    // 退出
    logoutHandle: function logoutHandle() {
      var _this2 = this;

      this.$confirm('\u786E\u5B9A\u8FDB\u884C[\u9000\u51FA]\u64CD\u4F5C?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        api["a" /* default */].common.logout().then(function (_ref) {
          var data = _ref.data;

          if (data && data.code === 0) {
            _this2.DELETE_CONTENT_TABS([]);
            _this2.$cookie.delete('token');
            _this2.$router.replace({ name: 'login' });
          }
        });
      });
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['SWITCH_SIDEBAR_COLLAPSE', 'DELETE_CONTENT_TABS']))
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-20bcf8b8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/topbar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"site-topbar"},[_c('div',{staticClass:"site-topbar__header"},[_c('h1',{staticClass:"site-logo",on:{"click":function($event){_vm.$router.push({ name: 'home' })}}},[_c('a',{staticClass:"site-logo__lg",attrs:{"href":"javascript:;"}},[_vm._v("Vue-cli-basic")]),_vm._v(" "),_c('a',{staticClass:"site-logo__mini",attrs:{"href":"javascript:;"}},[_vm._v("Vue")])])]),_vm._v(" "),_c('div',{staticClass:"site-topbar__body clearfix"},[_c('el-menu',{staticClass:"site-topbar__menu",attrs:{"mode":"horizontal"}},[_c('el-menu-item',{staticClass:"site-topbar__switch",attrs:{"index":"1-1"},on:{"click":function($event){_vm.switchSidebarCollapseHandle()}}},[_c('icon-svg',{attrs:{"name":"zhedie"}})],1)],1),_vm._v(" "),_c('el-menu',{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{"mode":"horizontal"}},[_c('el-menu-item',{staticClass:"site-topbar__avatar",attrs:{"index":"1-2"}},[_c('el-dropdown',{attrs:{"placement":"bottom","hide-on-click":false}},[_c('span',{staticClass:"el-dropdown-link"},[_c('img',{attrs:{"src":__webpack_require__("zQrT"),"alt":_vm.$store.state.user.name}}),_vm._v("\n            "+_vm._s(_vm.$store.state.user.name)+"\n          ")]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{nativeOn:{"click":function($event){_vm.updatePasswordHandle()}}},[_vm._v("修改密码")]),_vm._v(" "),_c('el-dropdown-item',{nativeOn:{"click":function($event){_vm.logoutHandle()}}},[_vm._v("退出")])],1)],1)],1)],1)],1),_vm._v(" "),(_vm.updatePassowrdVisible)?_c('update-password',{ref:"updatePassowrd"}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layout_topbar = (esExports);
// CONCATENATED MODULE: ./src/views/layout/topbar.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  topbar,
  layout_topbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_layout_topbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jqh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("3cXf");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("4YfN");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/sub-menu-nav/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var sub_menu_nav = ({
  name: 'sub-menu-nav',
  props: {
    menuNav: Object,
    required: true
  },
  components: {
    SubMenuNav: src_components_sub_menu_nav
  },
  methods: {
    // 跳转到菜单导航对应路由
    gotoRouteHandle: function gotoRouteHandle(url) {
      var routeName = Object(utils["a" /* getRouteNameByUrl */])(url);
      if (/\S/.test(routeName)) {
        this.$router.push({ name: routeName });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-1673aaa0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/sub-menu-nav/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.menuNav.list && _vm.menuNav.list.length >= 1)?_c('el-submenu',{attrs:{"data-idx":_vm.menuNav.menuId + '',"index":_vm.menuNav.menuId + ''}},[_c('template',{attrs:{"slot":"title"},slot:"title"},[_c('i',{class:['site-sidebar__menu-icon', _vm.menuNav.icon ? _vm.menuNav.icon : 'fa fa-circle-o']}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.menuNav.name))])]),_vm._v(" "),_vm._l((_vm.menuNav.list),function(item){return _c('sub-menu-nav',{key:item.menuId,attrs:{"menu-nav":item}})})],2):_c('el-menu-item',{attrs:{"index":_vm.menuNav.menuId + '',"data-idx":_vm.menuNav.menuId + ''},on:{"click":function($event){_vm.gotoRouteHandle(_vm.menuNav.url)}}},[_c('i',{class:['site-sidebar__menu-icon', _vm.menuNav.icon ? _vm.menuNav.icon : 'fa fa-circle-o']}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.menuNav.name))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_sub_menu_nav = (esExports);
// CONCATENATED MODULE: ./src/components/sub-menu-nav/index.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  sub_menu_nav,
  components_sub_menu_nav,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_sub_menu_nav = (Component.exports);

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./node_modules/_vuex@3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("9rMa");

// EXTERNAL MODULE: ./node_modules/_lodash@4.17.4@lodash/isEmpty.js
var isEmpty = __webpack_require__("Xo2K");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/sidebar.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var sidebar = ({
  data: function data() {
    return {
      menuNavActive: '1-1'
    };
  },

  components: {
    SubMenuNav: src_components_sub_menu_nav
  },
  watch: {
    $route: 'routeHandle'
  },
  created: function created() {
    var _this = this;

    this.getMenuNavList().then(function () {
      _this.routeHandle(_this.$route);
    });
  },

  methods: extends_default()({
    // 获取菜单导航列表 / 权限
    getMenuNavList: function getMenuNavList() {
      var _this2 = this;

      return api["a" /* default */].menu.nav().then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this2.UPDATE_MENU_NAV_LIST(data.menuList);
          sessionStorage.setItem('permissions', stringify_default()(data.permissions || '[]'));
        } else {
          _this2.UPDATE_MENU_NAV_LIST([]);
          sessionStorage.setItem('permissions', '[]');
        }
      });
    },

    // 路由操作
    routeHandle: function routeHandle(route) {
      if (/^\/n\/.*$/.test(route.path)) {
        var tab = this.$store.state.contentTabs.filter(function (item) {
          return item.name === route.name;
        });
        // tab不存在, 先添加
        if (isEmpty_default()(tab)) {
          var menuNav = this.getMenuNavByRouteName(route.name, this.$store.state.menuNavList);
          if (!isEmpty_default()(menuNav)) {
            this.menuNavActive = menuNav.menuId + '';
            this.ADD_CONTENT_TAB({
              id: menuNav.menuId,
              name: route.name,
              title: menuNav.name,
              type: (window.SITE_CONFIG.nestIframeRouteNameList || []).indexOf(route.name) !== -1 ? 'iframe' : 'module',
              url: menuNav.url
            });
          }
        }
        this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: route.name });
      }
    },

    // 获取菜单导航, 根据路由名称
    getMenuNavByRouteName: function getMenuNavByRouteName(name, menuNavList) {
      for (var i = 0; i < menuNavList.length; i++) {
        if (menuNavList[i].list && menuNavList[i].list.length >= 1) {
          return this.getMenuNavByRouteName(name, menuNavList[i].list);
        } else {
          if (Object(utils["a" /* getRouteNameByUrl */])(menuNavList[i].url) === name) {
            return menuNavList[i];
          }
        }
      }
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_MENU_NAV_LIST', 'ADD_CONTENT_TAB', 'UPDATE_CONTENT_TABS_ACTIVE_NAME']))
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-15e14c46","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/sidebar.vue
var sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"site-sidebar"},[_c('div',{staticClass:"site-sidebar__inner"},[_c('el-menu',{staticClass:"site-sidebar__menu",attrs:{"default-active":_vm.menuNavActive,"collapse":_vm.$store.state.sidebarCollapse,"show-timeout":0,"hide-timeout":0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[_c('el-menu-item',{attrs:{"index":"1-1"},on:{"click":function($event){_vm.$router.push({ name: 'home' })}}},[_c('i',{staticClass:"site-sidebar__menu-icon fa fa-home"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("首页")])]),_vm._v(" "),_vm._l((_vm.$store.state.menuNavList),function(menuNav){return _c('sub-menu-nav',{key:menuNav.menuId,attrs:{"menu-nav":menuNav}})})],2)],1)])}
var sidebar_staticRenderFns = []
var sidebar_esExports = { render: sidebar_render, staticRenderFns: sidebar_staticRenderFns }
/* harmony default export */ var layout_sidebar = (sidebar_esExports);
// CONCATENATED MODULE: ./src/views/layout/sidebar.vue
var sidebar_normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var sidebar___vue_template_functional__ = false
/* styles */
var sidebar___vue_styles__ = null
/* scopeId */
var sidebar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var sidebar___vue_module_identifier__ = null
var sidebar_Component = sidebar_normalizeComponent(
  sidebar,
  layout_sidebar,
  sidebar___vue_template_functional__,
  sidebar___vue_styles__,
  sidebar___vue_scopeId__,
  sidebar___vue_module_identifier__
)

/* harmony default export */ var views_layout_sidebar = __webpack_exports__["default"] = (sidebar_Component.exports);


/***/ }),

/***/ "sPSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("4YfN");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_lodash@4.17.4@lodash/isEmpty.js
var isEmpty = __webpack_require__("Xo2K");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/_vuex@3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("9rMa");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/content-tabs.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var content_tabs = ({
  data: function data() {
    return {};
  },

  computed: {
    tabActiveName: {
      get: function get() {
        return this.$store.state.contentTabsActiveName;
      },
      set: function set(val) {
        this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: val });
      }
    }
  },
  methods: extends_default()({
    // tab内容容器显示高度
    contentViewHeight: function contentViewHeight(tab) {
      var height = this.$store.state.documentClientHeight;
      height -= 50; // site-topbar
      height -= 40; // el-tabs__header
      height -= 15; // el-tabs__header margin-bottom
      height -= 15; // el-tabs__content padding-bottom
      height -= 2; // el-card border-top border-bottom
      height += 'px';
      return tab.type === 'iframe' ? { height: height } : { minHeight: height };
    },

    // 获取iframe嵌套地址
    getNestIframeUrl: function getNestIframeUrl(url) {
      return window.SITE_CONFIG.nestIframeUrl + url;
    },

    // 选中tab
    selectedTabHandle: function selectedTabHandle(tab) {
      tab = this.$store.state.contentTabs.filter(function (item) {
        return item.name === tab.name;
      });
      if (!isEmpty_default()(tab)) {
        this.$router.push({ name: tab[0].name });
      }
    },

    // 删除tab
    removeTabHandle: function removeTabHandle(tabName) {
      var _this = this;

      var newTabs = this.$store.state.contentTabs.filter(function (item) {
        return item.name !== tabName;
      });
      // 当前选中tab被删除
      if (tabName === this.tabActiveName) {
        this.$router.push({ name: newTabs[newTabs.length - 1].name }, function () {
          _this.tabActiveName = _this.$route.name;
        });
      }
      this.UPDATE_CONTENT_TABS(newTabs);
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME']))
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-6f6d84d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/content-tabs.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-content site-content--tabs"},[_c('el-tabs',{attrs:{"closable":_vm.$store.state.contentTabs.length > 1},on:{"tab-click":_vm.selectedTabHandle,"tab-remove":_vm.removeTabHandle},model:{value:(_vm.tabActiveName),callback:function ($$v) {_vm.tabActiveName=$$v},expression:"tabActiveName"}},_vm._l((_vm.$store.state.contentTabs),function(item){return _c('el-tab-pane',{key:item.name,attrs:{"label":item.title,"name":item.name}},[_c('el-card',{attrs:{"body-style":_vm.contentViewHeight(item)}},[(item.type === 'iframe')?_c('iframe',{attrs:{"src":_vm.getNestIframeUrl(item.url),"width":"100%","height":"100%","frameborder":"0","scrolling":"yes"}}):_c('keep-alive',[(item.name === _vm.tabActiveName)?_c('router-view'):_vm._e()],1)],1)],1)}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layout_content_tabs = (esExports);
// CONCATENATED MODULE: ./src/views/layout/content-tabs.vue
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  content_tabs,
  layout_content_tabs,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_layout_content_tabs = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zQrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.c58e465.png";

/***/ })

});