webpackJsonp([22],{

/***/ "dyKt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/config/add-or-update.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        key: '',
        value: '',
        remark: ''
      },
      dataRule: {
        key: [{ required: true, message: '参数名不能为空', trigger: 'blur' }],
        value: [{ required: true, message: '参数值不能为空', trigger: 'blur' }]
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
          api["a" /* default */].config.info(_this.dataForm.id).then(function (_ref) {
            var data = _ref.data;

            if (data && data.code === 0) {
              _this.dataForm.key = data.config.key;
              _this.dataForm.value = data.config.value;
              _this.dataForm.remark = data.config.remark;
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
            'id': _this2.dataForm.id || undefined,
            'key': _this2.dataForm.key,
            'value': _this2.dataForm.value,
            'remark': _this2.dataForm.remark
          };
          var tick = !_this2.dataForm.id ? api["a" /* default */].config.add(params) : api["a" /* default */].config.update(params);
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-404745c9","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/config/add-or-update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm.id ? '新增' : '修改',"close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"80px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"label":"参数名","prop":"key"}},[_c('el-input',{attrs:{"placeholder":"参数名"},model:{value:(_vm.dataForm.key),callback:function ($$v) {_vm.$set(_vm.dataForm, "key", $$v)},expression:"dataForm.key"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"参数值","prop":"value"}},[_c('el-input',{attrs:{"placeholder":"参数值"},model:{value:(_vm.dataForm.value),callback:function ($$v) {_vm.$set(_vm.dataForm, "value", $$v)},expression:"dataForm.value"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"placeholder":"备注"},model:{value:(_vm.dataForm.remark),callback:function ($$v) {_vm.$set(_vm.dataForm, "remark", $$v)},expression:"dataForm.remark"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var config_add_or_update = (esExports);
// CONCATENATED MODULE: ./src/views/config/add-or-update.vue
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
  config_add_or_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_config_add_or_update = __webpack_exports__["default"] = (Component.exports);


/***/ })

});