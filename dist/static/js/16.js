webpackJsonp([16],{

/***/ "0icb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/role/add-or-update.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      menuList: [],
      menuListTreeProps: {
        label: 'name',
        children: 'children'
      },
      dataForm: {
        id: 0,
        roleName: '',
        remark: ''
      },
      dataRule: {
        roleName: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
      }
    };
  },

  methods: {
    init: function init(id) {
      var _this = this;

      this.dataForm.id = id || 0;
      api["a" /* default */].menu.list().then(function (_ref) {
        var data = _ref.data;

        _this.menuList = Object(utils["c" /* treeDataTranslate */])(data, 'menuId');
      }).then(function () {
        _this.visible = true;
        _this.$nextTick(function () {
          _this.$refs['dataForm'].resetFields();
          _this.$refs.menuListTree.setCheckedKeys([]);
        });
      }).then(function () {
        if (_this.dataForm.id) {
          api["a" /* default */].role.info(_this.dataForm.id).then(function (_ref2) {
            var data = _ref2.data;

            if (data && data.code === 0) {
              _this.dataForm.roleName = data.role.roleName;
              _this.dataForm.remark = data.role.remark;
              _this.$refs.menuListTree.setCheckedKeys(data.role.menuIdList);
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
            'roleId': _this2.dataForm.id || undefined,
            'roleName': _this2.dataForm.roleName,
            'remark': _this2.dataForm.remark,
            'menuIdList': _this2.$refs.menuListTree.getCheckedKeys()
          };
          var tick = !_this2.dataForm.id ? api["a" /* default */].role.add(params) : api["a" /* default */].role.update(params);
          tick.then(function (_ref3) {
            var data = _ref3.data;

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
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-e599e086","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/role/add-or-update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm.id ? '新增' : '修改',"close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"80px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"label":"角色名称","prop":"roleName"}},[_c('el-input',{attrs:{"placeholder":"角色名称"},model:{value:(_vm.dataForm.roleName),callback:function ($$v) {_vm.$set(_vm.dataForm, "roleName", $$v)},expression:"dataForm.roleName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"placeholder":"备注"},model:{value:(_vm.dataForm.remark),callback:function ($$v) {_vm.$set(_vm.dataForm, "remark", $$v)},expression:"dataForm.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"size":"mini","label":"授权"}},[_c('el-tree',{ref:"menuListTree",attrs:{"data":_vm.menuList,"props":_vm.menuListTreeProps,"node-key":"menuId","default-expand-all":true,"show-checkbox":""}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var role_add_or_update = (esExports);
// CONCATENATED MODULE: ./src/views/role/add-or-update.vue
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
  role_add_or_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_role_add_or_update = __webpack_exports__["default"] = (Component.exports);


/***/ })

});