webpackJsonp([15],{

/***/ "vGzp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/schedule/add-or-update.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var add_or_update = ({
  data: function data() {
    return {
      visible: false,
      dataForm: {
        id: 0,
        beanName: '',
        methodName: '',
        params: '',
        cronExpression: '',
        remark: '',
        status: 0
      },
      dataRule: {
        beanName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        methodName: [{ required: true, message: '方法名称不能为空', trigger: 'blur' }],
        cronExpression: [{ required: true, message: 'cron表达式不能为空', trigger: 'blur' }]
      }
    };
  },

  methods: {
    init: function init(id) {
      var _this = this;

      this.dataForm.id = id || 0;
      this.visible = true;
      this.$nextTick(function () {
        _this.$refs['dataForm'].resetFields();
        if (_this.dataForm.id) {
          api["a" /* default */].schedule.info(_this.dataForm.id).then(function (_ref) {
            var data = _ref.data;

            if (data && data.code === 0) {
              _this.dataForm.beanName = data.schedule.beanName;
              _this.dataForm.methodName = data.schedule.methodName;
              _this.dataForm.params = data.schedule.params;
              _this.dataForm.cronExpression = data.schedule.cronExpression;
              _this.dataForm.remark = data.schedule.remark;
              _this.dataForm.status = data.schedule.status;
            }
          });
        }
      });
    },

    // 表单提交
    dataFormSubmit: function dataFormSubmit() {
      var _this2 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          var params = {
            'jobId': _this2.dataForm.id || undefined,
            'beanName': _this2.dataForm.beanName,
            'methodName': _this2.dataForm.methodName,
            'params': _this2.dataForm.params,
            'cronExpression': _this2.dataForm.cronExpression,
            'remark': _this2.dataForm.remark,
            'status': !_this2.dataForm.id ? undefined : _this2.dataForm.status
          };
          var tick = !_this2.dataForm.id ? api["a" /* default */].schedule.add(params) : api["a" /* default */].schedule.update(params);
          tick.then(function (_ref2) {
            var data = _ref2.data;

            if (data && data.code === 0) {
              _this2.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: function onClose() {
                  _this2.visible = false;
                  _this2.$emit('refreshDataList');
                }
              });
            } else {
              _this2.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-0e01481e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/schedule/add-or-update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm.id ? '新增' : '修改',"close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"100px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"label":"bean名称","prop":"beanName"}},[_c('el-input',{attrs:{"placeholder":"spring bean名称, 如: testTask"},model:{value:(_vm.dataForm.beanName),callback:function ($$v) {_vm.$set(_vm.dataForm, "beanName", $$v)},expression:"dataForm.beanName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"方法名称","prop":"methodName"}},[_c('el-input',{attrs:{"placeholder":"方法名称"},model:{value:(_vm.dataForm.methodName),callback:function ($$v) {_vm.$set(_vm.dataForm, "methodName", $$v)},expression:"dataForm.methodName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"参数","prop":"params"}},[_c('el-input',{attrs:{"placeholder":"参数"},model:{value:(_vm.dataForm.params),callback:function ($$v) {_vm.$set(_vm.dataForm, "params", $$v)},expression:"dataForm.params"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"cron表达式","prop":"cronExpression"}},[_c('el-input',{attrs:{"placeholder":"如: 0 0 12 * * ?"},model:{value:(_vm.dataForm.cronExpression),callback:function ($$v) {_vm.$set(_vm.dataForm, "cronExpression", $$v)},expression:"dataForm.cronExpression"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"placeholder":"备注"},model:{value:(_vm.dataForm.remark),callback:function ($$v) {_vm.$set(_vm.dataForm, "remark", $$v)},expression:"dataForm.remark"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var schedule_add_or_update = (esExports);
// CONCATENATED MODULE: ./src/views/schedule/add-or-update.vue
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
  add_or_update,
  schedule_add_or_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_schedule_add_or_update = __webpack_exports__["default"] = (Component.exports);


/***/ })

});