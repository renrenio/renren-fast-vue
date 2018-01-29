webpackJsonp([12],{

/***/ "knae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/dept/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dept = ({
  data: function data() {
    return {
      deptList: [],
      deptListLoading: false
    };
  },
  created: function created() {
    this.getDeptList();
  },

  methods: {
    // 获取部门列表
    getDeptList: function getDeptList() {
      var _this = this;

      this.deptListLoading = true;
      api["c" /* getDeptList */]().then(function (_ref) {
        var data = _ref.data;

        _this.deptList = data || [];
        _this.deptListLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-f61c8b52","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/dept/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-dept"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.deptListLoading),expression:"deptListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.deptList,"border":""}},[_c('el-table-column',{attrs:{"type":"selection","header-align":"center","align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"deptId","header-align":"center","align":"center","width":"80","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","header-align":"center","align":"center","label":"部门名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentName","header-align":"center","align":"center","label":"上级部门"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderNum","header-align":"center","align":"center","label":"排序号"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_dept = (esExports);
// CONCATENATED MODULE: ./src/views/dept/index.vue
var normalizeComponent = __webpack_require__("mPyB")
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
  dept,
  views_dept,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_dept = __webpack_exports__["default"] = (Component.exports);


/***/ })

});