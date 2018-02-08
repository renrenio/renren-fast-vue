webpackJsonp([14],{

/***/ "bPsF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/schedule/log.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      visible: false,
      dataForm: {
        id: ''
      },
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false
    };
  },

  methods: {
    init: function init() {
      this.visible = true;
      this.getDataList();
    },

    // 获取数据列表
    getDataList: function getDataList() {
      var _this = this;

      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        jobId: this.dataForm.id
      };
      api["a" /* default */].log.scheduleList(params).then(function (_ref) {
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

    // 失败信息
    showErrorInfo: function showErrorInfo(id) {
      var _this2 = this;

      api["a" /* default */].log.scheduleInfo(id).then(function (_ref2) {
        var data = _ref2.data;

        if (data && data.code === 0) {
          _this2.$alert(data.log.error);
        } else {
          _this2.$message.error(data.msg);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-5af6dc4a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/schedule/log.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":"日志列表","close-on-click-modal":false,"visible":_vm.visible,"width":"75%"},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.getDataList()}}},[_c('el-form-item',[_c('el-input',{attrs:{"placeholder":"任务ID","clearable":""},model:{value:(_vm.dataForm.id),callback:function ($$v) {_vm.$set(_vm.dataForm, "id", $$v)},expression:"dataForm.id"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{on:{"click":function($event){_vm.getDataList()}}},[_vm._v("查询")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":"","height":"460"}},[_c('el-table-column',{attrs:{"prop":"logId","header-align":"center","align":"center","width":"80","label":"日志ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"jobId","header-align":"center","align":"center","width":"80","label":"任务ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"beanName","header-align":"center","align":"center","label":"bean名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"methodName","header-align":"center","align":"center","label":"方法名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"params","header-align":"center","align":"center","label":"参数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","header-align":"center","align":"center","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status === 0)?_c('el-tag',{attrs:{"size":"small"}},[_vm._v("成功")]):_c('el-tag',{staticStyle:{"cursor":"pointer"},attrs:{"size":"small","type":"danger"},nativeOn:{"click":function($event){_vm.showErrorInfo(scope.row.logId)}}},[_vm._v("失败")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"times","header-align":"center","align":"center","label":"耗时(单位: 毫秒)"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","header-align":"center","align":"center","width":"180","label":"执行时间"}})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var schedule_log = (esExports);
// CONCATENATED MODULE: ./src/views/schedule/log.vue
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
  log,
  schedule_log,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_schedule_log = __webpack_exports__["default"] = (Component.exports);


/***/ })

});