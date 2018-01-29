webpackJsonp([6],{

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


/***/ })

});