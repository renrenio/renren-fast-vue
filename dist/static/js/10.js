webpackJsonp([10],{

/***/ "s0e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/generator/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var generator = ({
  data: function data() {
    return {
      dataForm: {
        tableName: ''
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
        tableName: this.dataForm.tableName
      };
      api["d" /* getGeneratorList */](params).then(function (_ref) {
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
    },

    // 多选
    selectionChangeHandle: function selectionChangeHandle(val) {
      this.selectionDataList = val;
    },

    // 生成代码
    generateCode: function generateCode(tableName) {
      var tableNameList = [];
      if (tableName && /\S/.test(tableName)) {
        tableNameList.push(tableName);
      } else {
        tableNameList = this.selectionDataList.map(function (item) {
          return item.tableName;
        });
      }
      location.href = api["b" /* generateCode */](tableNameList);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-2baa1957","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/generator/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-user"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"表名","clearable":""},model:{value:(_vm.dataForm.tableName),callback:function ($$v) {_vm.$set(_vm.dataForm, "tableName", $$v)},expression:"dataForm.tableName"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{on:{"click":function($event){_vm.getDataList()}}},[_vm._v("查询")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":_vm.selectionDataList.length <= 0},on:{"click":function($event){_vm.generateCode()}}},[_vm._v("生成代码")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":""},on:{"selection-change":_vm.selectionChangeHandle}},[_c('el-table-column',{attrs:{"type":"selection","header-align":"center","align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"tableName","header-align":"center","align":"center","label":"表头"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"engine","header-align":"center","align":"center","label":"Engine"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"tableComment","header-align":"center","align":"center","label":"表备注"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","header-align":"center","align":"center","width":"180","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","header-align":"center","align":"center","width":"200","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.generateCode(scope.row.tableName)}}},[_vm._v("生成代码")])]}}])})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_generator = (esExports);
// CONCATENATED MODULE: ./src/views/generator/index.vue
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
  generator,
  views_generator,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_generator = __webpack_exports__["default"] = (Component.exports);


/***/ })

});