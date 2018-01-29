webpackJsonp([4],{

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

/***/ "kWVt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-topbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n  height: 50px;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n  background-color: #3e8ef7;\n}\n.site-topbar__header {\n  float: left;\n  width: 230px;\n  height: 50px;\n}\n.site-logo {\n  display: table-cell;\n  vertical-align: middle;\n  width: 230px;\n  height: 50px;\n  margin: 0;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n}\n.site-logo__lg, .site-logo__mini {\n    color: #fff;\n}\n.site-logo__lg:focus, .site-logo__lg:hover, .site-logo__mini:focus, .site-logo__mini:hover {\n      color: #fff;\n      text-decoration: none;\n}\n.site-logo__mini {\n    display: none;\n}\n.site-topbar__switch {\n  font-size: 18px;\n  border-bottom: none !important;\n}\n.site-topbar__avatar {\n  border-bottom: none !important;\n}\n.site-topbar__avatar .el-dropdown-link > img {\n    width: 36px;\n    height: auto;\n    margin-right: 5px;\n    border-radius: 100%;\n}\n.site-topbar__body {\n  position: relative;\n  margin-left: 230px;\n  padding-right: 15px;\n  background-color: #fff;\n}\n.site-topbar__menu {\n  float: left;\n  background-color: transparent;\n  border-bottom: 0;\n}\n.site-topbar__menu--right {\n    float: right;\n}\n.site-topbar__menu .el-menu-item,\n  .site-topbar__menu .el-submenu .el-submenu__title {\n    height: 50px;\n    line-height: 50px;\n}\n.site-topbar__menu .el-submenu > .el-menu {\n    top: 55px;\n}\n", ""]);

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

/***/ "zQrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.c58e465.png";

/***/ })

});