webpackJsonp([2],{

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

/***/ "nRl2":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "\n.site-sidebar {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  bottom: 0;\n  z-index: 1020;\n  width: 230px;\n  background-color: #545c64;\n  overflow: hidden;\n}\n.site-sidebar__inner {\n  position: relative;\n  z-index: 1;\n  width: 250px;\n  height: 100%;\n  padding-bottom: 15px;\n  overflow-y: scroll;\n}\n.el-menu.site-sidebar__menu {\n  width: 230px;\n  border-right: 0;\n}\n.site-sidebar__menu-icon {\n  margin-right: 5px;\n  font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "xnfZ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("WpAN")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

});