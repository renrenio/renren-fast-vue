webpackJsonp([9],{

/***/ "QWih":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/log/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var log = ({
  data: function data() {
    return {
      dataForm: {
        key: ''
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      selectionDataList: []
    };
  },
  created: function created() {
    this.getDataList();
  },

  methods: {
    // 获取数据列表
    getDataList: function getDataList() {
      var _this = this;

      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sidx: '',
        order: 'asc',
        key: this.dataForm.key
      };
      api["e" /* getLogList */](params).then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this.dataList = data.page.list;
          _this.totalPage = data.page.totalCount;
        } else {
          _this.dataList = [];
          _this.totalPage = 0;
        }
        _this.dataListLoading = false;
      });
    },

    // 每页数
    sizeChangeHandle: function sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },

    // 当前页
    currentChangeHandle: function currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-7391db48","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/log/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-user"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"用户名／用户操作","clearable":""},model:{value:(_vm.dataForm.key),callback:function ($$v) {_vm.$set(_vm.dataForm, "key", $$v)},expression:"dataForm.key"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{on:{"click":function($event){_vm.getDataList()}}},[_vm._v("查询")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":""}},[_c('el-table-column',{attrs:{"prop":"id","header-align":"center","align":"center","width":"80","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","header-align":"center","align":"center","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"operation","header-align":"center","align":"center","label":"用户操作"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"method","header-align":"center","align":"center","label":"请求方法"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"params","header-align":"center","align":"center","label":"请求参数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"time","header-align":"center","align":"center","label":"执行时长(毫秒)"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ip","header-align":"center","align":"center","label":"IP地址"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createDate","header-align":"center","align":"center","width":"180","label":"创建时间"}})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_log = (esExports);
// CONCATENATED MODULE: ./src/views/log/index.vue
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
  log,
  views_log,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_log = __webpack_exports__["default"] = (Component.exports);


/***/ })

});