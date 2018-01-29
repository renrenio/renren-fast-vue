webpackJsonp([1,2,4,6],{

/***/ "6f/g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/.6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("34v0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/views/layout/topbar.vue + 2 modules
var topbar = __webpack_require__("8HvM");

// EXTERNAL MODULE: ./src/views/layout/sidebar.vue + 6 modules
var sidebar = __webpack_require__("jqh9");

// EXTERNAL MODULE: ./src/views/layout/content-tabs.vue + 2 modules
var content_tabs = __webpack_require__("sPSN");

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./node_modules/.3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("EcfS");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/index.vue

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

    this.documentClientHeightReset();
    window.onresize = function () {
      _this.documentClientHeightReset();
    };
  },

  methods: extends_default()({
    // 重置窗口可视高度
    documentClientHeightReset: function documentClientHeightReset() {
      this.UPDATE_DOCUMENT_CLIENT_HEIGHT({ height: document.documentElement['clientHeight'] });
    },

    // 获取当前管理员信息
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      api["i" /* getUserInfo */]().then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this2.UPDATE_USER_INFO({
            userId: data.user.userId,
            userName: data.user.username
          });
        }
      });
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_DOCUMENT_CLIENT_HEIGHT', 'UPDATE_USER_INFO']))
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-2739ab3c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-wrapper",class:_vm.siteWarpperClasses},[_c('topbar'),_vm._v(" "),_c('sidebar'),_vm._v(" "),_c('div',{staticClass:"site-content__wrapper",style:(_vm.siteContentWarpperStyles)},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_layout = (esExports);
// CONCATENATED MODULE: ./src/views/layout/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("aIhR")
}
var normalizeComponent = __webpack_require__("mPyB")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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

// EXTERNAL MODULE: ./node_modules/.6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("34v0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./node_modules/.3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("EcfS");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/topbar.vue

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
    var _this = this;

    var validatePassword = function validatePassword(rule, value, callback) {
      if (!/\S/.test(value)) {
        callback(new Error('原密码不能为空'));
      } else {
        callback();
      }
    };
    var validateNewPassword = function validateNewPassword(rule, value, callback) {
      if (!/\S/.test(value)) {
        callback(new Error('新密码不能为空'));
      } else if (_this.updatePasswordForm.password !== value) {
        callback(new Error('新原密码不一致'));
      } else {
        callback();
      }
    };
    return {
      updatePasswordDialogVisible: false,
      updatePasswordForm: {
        password: '',
        newPassword: ''
      },
      updatePasswordRule: {
        password: [{ validator: validatePassword, trigger: 'blur' }],
        newPassword: [{ validator: validateNewPassword, trigger: 'blur' }]
      }
    };
  },

  methods: extends_default()({
    // 切换侧边栏, 水平折叠收起状态
    switchSidebarCollapse: function switchSidebarCollapse() {
      this.SWITCH_SIDEBAR_COLLAPSE({ collapse: !this.$store.state.sidebarCollapse });
    },

    // 显示修改密码弹窗
    showUpdatePasswordDialog: function showUpdatePasswordDialog() {
      var _this2 = this;

      this.updatePasswordDialogVisible = true;
      this.$nextTick(function () {
        _this2.$refs['updatePasswordForm'].resetFields();
      });
    },

    // 修改密码
    updatePasswordFormSubmit: function updatePasswordFormSubmit() {
      var _this3 = this;

      this.$refs['updatePasswordForm'].validate(function (valid) {
        if (valid) {
          var params = {
            'password': _this3.updatePasswordForm.password,
            'newPassword': _this3.updatePasswordForm.newPassword
          };
          api["o" /* updatePassword */](params).then(function (_ref) {
            var data = _ref.data;

            if (data && data.code === 0) {
              _this3.$message({
                message: '操作成功',
                type: 'success'
              });
            } else {
              _this3.$message.error(data.msg);
            }
          });
        }
      });
    },

    // 退出（未提供api回调接口, 暂时统一response拦截302处理）
    logoutHandle: function logoutHandle() {
      api["l" /* logout */]().then(function (_ref2) {
        var data = _ref2.data;
      });
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['SWITCH_SIDEBAR_COLLAPSE']))
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-20bcf8b8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/topbar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"site-topbar"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"site-topbar__body clearfix"},[_c('el-menu',{staticClass:"site-topbar__menu",attrs:{"mode":"horizontal"}},[_c('el-menu-item',{staticClass:"site-topbar__switch",attrs:{"index":"1"},on:{"click":function($event){_vm.switchSidebarCollapse()}}},[_c('icon-svg',{attrs:{"name":"zhedie"}})],1)],1),_vm._v(" "),_c('el-menu',{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{"mode":"horizontal"}},[_c('el-menu-item',{staticClass:"site-topbar__avatar",attrs:{"index":"2"}},[_c('el-dropdown',{attrs:{"placement":"bottom","hide-on-click":false}},[_c('span',{staticClass:"el-dropdown-link"},[_c('img',{attrs:{"src":__webpack_require__("zQrT"),"alt":_vm.$store.state.userInfo.userName}}),_vm._v("\n            "+_vm._s(_vm.$store.state.userInfo.userName)+"\n          ")]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{nativeOn:{"click":function($event){_vm.showUpdatePasswordDialog()}}},[_vm._v("修改密码")]),_vm._v(" "),_c('el-dropdown-item',{nativeOn:{"click":function($event){_vm.logoutHandle()}}},[_vm._v("退出")])],1)],1)],1)],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"修改密码","visible":_vm.updatePasswordDialogVisible,"width":"550px","append-to-body":true},on:{"update:visible":function($event){_vm.updatePasswordDialogVisible=$event}}},[_c('el-form',{ref:"updatePasswordForm",attrs:{"model":_vm.updatePasswordForm,"rules":_vm.updatePasswordRule,"label-width":"70px"}},[_c('el-form-item',{attrs:{"label":"账号"}},[_c('span',[_vm._v(_vm._s(_vm.$store.state.userInfo.userName))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"原密码","prop":"password"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.updatePasswordForm.password),callback:function ($$v) {_vm.$set(_vm.updatePasswordForm, "password", $$v)},expression:"updatePasswordForm.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新密码","prop":"newPassword"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.updatePasswordForm.newPassword),callback:function ($$v) {_vm.$set(_vm.updatePasswordForm, "newPassword", $$v)},expression:"updatePasswordForm.newPassword"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.updatePasswordDialogVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.updatePasswordFormSubmit()}}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-topbar__header"},[_c('h1',{staticClass:"site-logo"},[_c('a',{staticClass:"site-logo__lg",attrs:{"href":"/"}},[_vm._v("Vue-cli-basic")]),_vm._v(" "),_c('a',{staticClass:"site-logo__mini",attrs:{"href":"/"}},[_vm._v("Vue")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layout_topbar = (esExports);
// CONCATENATED MODULE: ./src/views/layout/topbar.vue
function injectStyle (ssrContext) {
  __webpack_require__("ptgo")
}
var normalizeComponent = __webpack_require__("mPyB")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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

/***/ "JcNx":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("xnfZ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("wkH5")("fc541d62", content, true);

/***/ }),

/***/ "Tnon":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("nRl2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("wkH5")("72e39c79", content, true);

/***/ }),

/***/ "aIhR":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("pTld");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("wkH5")("171eed08", content, true);

/***/ }),

/***/ "iGjo":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-content--tabs {\n  padding: 0;\n}\n.site-content--tabs > .el-tabs .el-tabs__header {\n    padding: 0 15px;\n    background-color: #fff;\n}\n.site-content--tabs > .el-tabs .el-tabs__nav-wrap:after {\n    display: none;\n}\n.site-content--tabs > .el-tabs .el-tabs__content {\n    padding: 0 15px 15px;\n}\n.site-content--tabs > .el-tabs .el-pagination {\n    margin-top: 15px;\n    text-align: right;\n}\n.site-content--tabs > .el-tabs .el-breadcrumb {\n    padding: 0 0 15px;\n    margin-bottom: 22px;\n    border-bottom: 1px solid #ebeef5;\n}\n", ""]);

// exports


/***/ }),

/***/ "jOdH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iGjo");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("wkH5")("a3ae598c", content, true);

/***/ }),

/***/ "jqh9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/.6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("34v0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./src/utils/common.js
/**
 * 根据url获取路由名称
 */
function getRouteNameByUrl(url) {
  var val = /.*\/(.*)\.html/.exec(url);
  return val && val.length >= 1 ? val[1] : '';
}
// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/sub-menu-nav.vue
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
    menuNav: Object
  },
  components: {
    SubMenuNav: src_components_sub_menu_nav
  },
  methods: {
    // 跳转到菜单导航对应路由
    gotoRouteByMenuNav: function gotoRouteByMenuNav(menuNav) {
      var routeName = getRouteNameByUrl(menuNav.url);
      if (/\S/.test(routeName)) {
        this.$router.push({ name: routeName });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-71308446","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/sub-menu-nav.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.menuNav.list && _vm.menuNav.list.length >= 1)?_c('el-submenu',{attrs:{"data-idx":_vm.menuNav.menuId + '',"index":_vm.menuNav.menuId + ''}},[_c('template',{attrs:{"slot":"title"},slot:"title"},[_c('icon-svg',{staticClass:"site-sidebar__menu-icon",class:_vm.menuNav.icon,attrs:{"name":"xitong"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.menuNav.name))])],1),_vm._v(" "),_vm._l((_vm.menuNav.list),function(item){return _c('sub-menu-nav',{key:item.menuId,attrs:{"menu-nav":item}})})],2):_c('el-menu-item',{attrs:{"index":_vm.menuNav.menuId + '',"data-idx":_vm.menuNav.menuId + ''},on:{"click":function($event){_vm.gotoRouteByMenuNav(_vm.menuNav)}}},[_vm._v("\n  "+_vm._s(_vm.menuNav.name)+"\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_sub_menu_nav = (esExports);
// CONCATENATED MODULE: ./src/components/sub-menu-nav.vue
function injectStyle (ssrContext) {
  __webpack_require__("JcNx")
}
var normalizeComponent = __webpack_require__("mPyB")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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

// EXTERNAL MODULE: ./node_modules/.3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("EcfS");

// EXTERNAL MODULE: ./node_modules/.4.17.4@lodash/isEmpty.js
var isEmpty = __webpack_require__("0F+T");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/sidebar.vue

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
      menuNavActive: '1-1',
      menuNavOpeneds: ['1'],
      isCollapse: false
    };
  },

  components: {
    SubMenuNav: src_components_sub_menu_nav
  },
  watch: {
    $route: 'routeHandle'
  },
  created: function created() {
    this.routeHandle(this.$route, true);
  },

  methods: extends_default()({
    // 路由操作
    // isInit: 页面第一次加载时, 需先获取菜单导航列表, 再进行其他操作
    routeHandle: function routeHandle(route, isInit) {
      var _this = this;

      if (/^\/n\/.*$/.test(route.path)) {
        // tab不存在添加, 存在选中
        var tab = this.$store.state.contentTabs.tabList.filter(function (tab) {
          return tab.name === route.name;
        });
        if (isEmpty_default()(tab)) {
          if (isInit && isEmpty_default()(this.$store.state.menuNavList)) {
            this.getMenuNavList().then(function () {
              _this.addContentTab(route.name);
            });
          } else {
            this.addContentTab(route.name);
          }
        } else {
          this.UPDATE_CONTENT_TABS_ACTIVE_NAME({ name: route.name });
          this.menuNavActive = tab[0].id + '';
        }
      } else {
        if (isInit) {
          this.getMenuNavList();
        }
      }
    },

    // 添加内容tab项
    addContentTab: function addContentTab(name) {
      var menuNav = this.getMenuNavByRouteName(name);
      this.UPDATE_CONTENT_TABS({
        activeName: name,
        tabList: this.$store.state.contentTabs.tabList.concat({
          id: menuNav.menuId,
          title: menuNav.name,
          name: name,
          type: this.$store.state.menuNavTypeMap[name],
          url: menuNav.url
        })
      });
      this.menuNavActive = menuNav.menuId + '';
    },

    // 获取菜单导航列表
    getMenuNavList: function getMenuNavList() {
      var _this2 = this;

      return api["f" /* getMenuNavList */]().then(function (_ref) {
        var data = _ref.data;

        _this2.UPDATE_MENU_NAV_LIST(data && data.code === 0 ? data.menuList : []);
      });
    },

    // 根据路由名称获取菜单导航
    getMenuNavByRouteName: function getMenuNavByRouteName(name) {
      var menuNavList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.$store.state.menuNavList;

      for (var i = 0; i < menuNavList.length; i++) {
        if (menuNavList[i].list && menuNavList[i].list.length >= 1) {
          return this.getMenuNavByRouteName(name, menuNavList[i].list);
        } else {
          if (getRouteNameByUrl(menuNavList[i].url) === name) {
            return menuNavList[i];
          }
        }
      }
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_MENU_NAV_LIST', 'UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME']))
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-15e14c46","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/sidebar.vue
var sidebar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"site-sidebar"},[_c('div',{staticClass:"site-sidebar__inner"},[_c('el-menu',{staticClass:"site-sidebar__menu",attrs:{"default-active":_vm.menuNavActive,"default-openeds":_vm.menuNavOpeneds,"collapse":_vm.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[_c('el-menu-item',{attrs:{"index":"1-1"},on:{"click":function($event){_vm.$router.push({ name: 'home' })}}},[_c('icon-svg',{staticClass:"site-sidebar__menu-icon",attrs:{"name":"shouye"}}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("首页")])],1),_vm._v(" "),_vm._l((_vm.$store.state.menuNavList),function(menuNav){return _c('sub-menu-nav',{key:menuNav.menuId,attrs:{"menu-nav":menuNav}})})],2)],1)])}
var sidebar_staticRenderFns = []
var sidebar_esExports = { render: sidebar_render, staticRenderFns: sidebar_staticRenderFns }
/* harmony default export */ var layout_sidebar = (sidebar_esExports);
// CONCATENATED MODULE: ./src/views/layout/sidebar.vue
function sidebar_injectStyle (ssrContext) {
  __webpack_require__("Tnon")
}
var sidebar_normalizeComponent = __webpack_require__("mPyB")
/* script */

/* template */

/* template functional */
  var sidebar___vue_template_functional__ = false
/* styles */
var sidebar___vue_styles__ = sidebar_injectStyle
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

/***/ "kWVt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-topbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  height: 50px;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  background-color: #3e8ef7;\n}\n.site-topbar__header {\n  float: left;\n  width: 230px;\n  height: 50px;\n}\n.site-logo {\n  display: table-cell;\n  vertical-align: middle;\n  width: 230px;\n  height: 50px;\n  margin: 0;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.site-logo__lg, .site-logo__mini {\n    color: #fff;\n}\n.site-logo__lg:focus, .site-logo__lg:hover, .site-logo__mini:focus, .site-logo__mini:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.site-logo__mini {\n    display: none;\n}\n.site-topbar__switch {\n  font-size: 18px;\n  border-bottom: none !important;\n}\n.site-topbar__avatar {\n  border-bottom: none !important;\n}\n.site-topbar__avatar .el-dropdown-link > img {\n    width: 36px;\n    height: auto;\n    margin-right: 5px;\n    border-radius: 100%;\n}\n.site-topbar__body {\n  position: relative;\n  margin-left: 230px;\n  padding-right: 15px;\n  background-color: #fff;\n}\n.site-topbar__menu {\n  float: left;\n  background-color: transparent;\n  border-bottom: 0;\n}\n.site-topbar__menu--right {\n    float: right;\n}\n.site-topbar__menu .el-menu-item,\n  .site-topbar__menu .el-submenu .el-submenu__title {\n    height: 50px;\n    line-height: 50px;\n}\n.site-topbar__menu .el-submenu > .el-menu {\n    top: 55px;\n}\n", ""]);

// exports


/***/ }),

/***/ "nRl2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-sidebar {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  bottom: 0;\n  z-index: 1020;\n  width: 230px;\n  background-color: #545c64;\n  overflow: hidden;\n}\n.site-sidebar__inner {\n  position: relative;\n  z-index: 1;\n  width: 250px;\n  height: 100%;\n  padding-bottom: 15px;\n  overflow-y: scroll;\n}\n.el-menu.site-sidebar__menu {\n  width: 230px;\n  border-right: 0;\n}\n.site-sidebar__menu-icon {\n  margin-right: 5px;\n  font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "pTld":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-wrapper {\n  position: relative;\n  min-width: 1180px;\n}\n.site-content__wrapper {\n  position: relative;\n  padding-top: 50px;\n  margin-left: 230px;\n  min-height: 100%;\n}\n.site-content {\n  position: relative;\n  padding: 15px;\n}\n\n/* sidebar-collapse */\n.site-sidebar--collapse .site-topbar__header,\n.site-sidebar--collapse .site-sidebar,\n.site-sidebar--collapse .site-sidebar__inner,\n.site-sidebar--collapse .el-menu.site-sidebar__menu {\n  width: 64px;\n}\n.site-sidebar--collapse .site-topbar__body,\n.site-sidebar--collapse .site-content__wrapper {\n  margin-left: 64px;\n}\n.site-sidebar--collapse .site-logo__lg {\n  display: none;\n}\n.site-sidebar--collapse .site-logo__mini {\n  display: inline-block;\n}\n.site-sidebar--collapse .site-sidebar,\n.site-sidebar--collapse .site-sidebar__inner {\n  overflow: initial;\n}\n.site-sidebar--collapse .el-menu-item,\n.site-sidebar--collapse .el-submenu__title {\n  text-align: center;\n}\n.site-sidebar--collapse .site-sidebar__menu-icon {\n  margin-right: 0;\n  font-size: 20px;\n}\n.site-sidebar--collapse .el-menu-item span,\n.site-sidebar--collapse .el-submenu > .el-submenu__title span {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "ptgo":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kWVt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("wkH5")("b7e6bcb2", content, true);

/***/ }),

/***/ "sPSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/.6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("34v0");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/.4.17.4@lodash/isEmpty.js
var isEmpty = __webpack_require__("0F+T");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/.3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("EcfS");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/layout/content-tabs.vue

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
    return {
      iframePath: '//demo.open.renren.io/renren-security/'
    };
  },

  computed: {
    tabActiveName: {
      get: function get() {
        return this.$store.state.contentTabs.activeName;
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

    // 选中tab
    selectedTabHandle: function selectedTabHandle(tab) {
      tab = this.$store.state.contentTabs.tabList.filter(function (item) {
        return item.name === tab.name;
      });
      if (!isEmpty_default()(tab)) {
        this.$router.push({ name: tab[0].name });
      }
    },

    // 删除tab
    removeTabHandle: function removeTabHandle(tabName) {
      var _this = this;

      var newTabList = this.$store.state.contentTabs.tabList.filter(function (item) {
        return item.name !== tabName;
      });
      if (!isEmpty_default()(newTabList)) {
        // 当前选中tab被删除
        if (this.tabActiveName === tabName) {
          this.$router.push({ name: newTabList[newTabList.length - 1].name }, function () {
            _this.tabActiveName = _this.$route.name;
          });
        }
        this.UPDATE_CONTENT_TABS({
          activeName: this.tabActiveName,
          tabList: newTabList
        });
      }
    }
  }, Object(vuex_esm["b" /* mapMutations */])(['UPDATE_CONTENT_TABS', 'UPDATE_CONTENT_TABS_ACTIVE_NAME']))
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-6f6d84d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/layout/content-tabs.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-content site-content--tabs"},[_c('el-tabs',{attrs:{"closable":_vm.$store.state.contentTabs.tabList.length > 1},on:{"tab-click":_vm.selectedTabHandle,"tab-remove":_vm.removeTabHandle},model:{value:(_vm.tabActiveName),callback:function ($$v) {_vm.tabActiveName=$$v},expression:"tabActiveName"}},_vm._l((_vm.$store.state.contentTabs.tabList),function(item){return _c('el-tab-pane',{key:item.name,attrs:{"label":item.title,"name":item.name}},[_c('el-card',{attrs:{"body-style":_vm.contentViewHeight(item)}},[(item.type === 'iframe')?_c('iframe',{attrs:{"src":_vm.iframePath + item.url,"width":"100%","height":"100%","frameborder":"0","scrolling":"yes"}}):_c('keep-alive',[(item.name === _vm.tabActiveName)?_c('router-view'):_vm._e()],1)],1)],1)}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layout_content_tabs = (esExports);
// CONCATENATED MODULE: ./src/views/layout/content-tabs.vue
function injectStyle (ssrContext) {
  __webpack_require__("jOdH")
}
var normalizeComponent = __webpack_require__("mPyB")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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

/***/ "xnfZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "zQrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.c58e465.png";

/***/ })

});