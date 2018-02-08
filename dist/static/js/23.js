webpackJsonp([23],{

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


/***/ })

});