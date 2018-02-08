webpackJsonp([10],{

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

/***/ "zQrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.c58e465.png";

/***/ })

});