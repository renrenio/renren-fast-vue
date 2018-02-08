webpackJsonp([7],{

/***/ "P5+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/menu/add-or-update.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    var validateUrl = function validateUrl(rule, value, callback) {
      if (_this.dataForm.type === 1 && !/\S/.test(value)) {
        callback(new Error('菜单URL不能为空'));
      } else {
        callback();
      }
    };
    return {
      visible: false,
      dataForm: {
        id: 0,
        type: 1,
        name: '',
        parentId: 0,
        parentName: '',
        url: '',
        perms: '',
        orderNum: 0,
        icon: ''
      },
      dataRule: {
        name: [{ required: true, message: '菜单名称不能为空', trigger: 'blur' }],
        parentName: [{ required: true, message: '上级菜单不能为空', trigger: 'change' }],
        url: [{ validator: validateUrl, trigger: 'blur' }]
      },
      menuList: [],
      menuListTreeProps: {
        label: 'name',
        children: 'children'
      }
    };
  },

  methods: {
    init: function init(id) {
      var _this2 = this;

      this.dataForm.id = id || 0;
      api["a" /* default */].menu.select().then(function (_ref) {
        var data = _ref.data;

        _this2.menuList = Object(utils["c" /* treeDataTranslate */])(data.menuList, 'menuId');
      }).then(function () {
        _this2.visible = true;
        _this2.$nextTick(function () {
          _this2.$refs['dataForm'].resetFields();
        });
      }).then(function () {
        if (!_this2.dataForm.id) {
          // 新增
          _this2.menuListTreeSetCurrentNode();
        } else {
          // 修改
          api["a" /* default */].menu.info(_this2.dataForm.id).then(function (_ref2) {
            var data = _ref2.data;

            _this2.dataForm.id = data.menu.menuId;
            _this2.dataForm.type = data.menu.type;
            _this2.dataForm.name = data.menu.name;
            _this2.dataForm.parentId = data.menu.parentId;
            _this2.dataForm.url = data.menu.url;
            _this2.dataForm.perms = data.menu.perms;
            _this2.dataForm.orderNum = data.menu.orderNum;
            _this2.dataForm.icon = data.menu.icon;
            _this2.menuListTreeSetCurrentNode();
          });
        }
      });
    },

    // 菜单树选中
    menuListTreeCurrentChangeHandle: function menuListTreeCurrentChangeHandle(data, node) {
      this.dataForm.parentId = data.menuId;
      this.dataForm.parentName = data.name;
    },

    // 菜单树设置当前选中节点
    menuListTreeSetCurrentNode: function menuListTreeSetCurrentNode() {
      this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId);
      this.dataForm.parentName = (this.$refs.menuListTree.getCurrentNode() || {})['name'];
    },

    // 表单提交
    dataFormSubmit: function dataFormSubmit() {
      var _this3 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          var params = {
            'menuId': _this3.dataForm.id || undefined,
            'type': _this3.dataForm.type,
            'name': _this3.dataForm.name,
            'parentId': _this3.dataForm.parentId,
            'url': _this3.dataForm.url,
            'perms': _this3.dataForm.perms,
            'orderNum': _this3.dataForm.orderNum,
            'icon': _this3.dataForm.icon
          };
          var tick = !_this3.dataForm.id ? api["a" /* default */].menu.add(params) : api["a" /* default */].menu.update(params);
          tick.then(function (_ref3) {
            var data = _ref3.data;

            if (data && data.code === 0) {
              _this3.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: function onClose() {
                  _this3.visible = false;
                  _this3.$emit('refreshDataList');
                }
              });
            } else {
              _this3.$message.error(data.msg);
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-18869c66","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/menu/add-or-update.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":!_vm.dataForm.id ? '新增' : '修改',"close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"80px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"label":"类型","prop":"type"}},[_c('el-radio-group',{model:{value:(_vm.dataForm.type),callback:function ($$v) {_vm.$set(_vm.dataForm, "type", $$v)},expression:"dataForm.type"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("目录")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("菜单")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("按钮")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"菜单名称","prop":"name"}},[_c('el-input',{attrs:{"placeholder":"菜单名称或按钮名称"},model:{value:(_vm.dataForm.name),callback:function ($$v) {_vm.$set(_vm.dataForm, "name", $$v)},expression:"dataForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"上级菜单","prop":"parentName"}},[_c('el-popover',{ref:"menuListPopover",attrs:{"placement":"bottom-end","trigger":"click"}},[_c('el-tree',{ref:"menuListTree",attrs:{"data":_vm.menuList,"props":_vm.menuListTreeProps,"node-key":"menuId","default-expand-all":true,"highlight-current":true,"expand-on-click-node":false},on:{"current-change":_vm.menuListTreeCurrentChangeHandle}})],1),_vm._v(" "),_c('el-input',{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{"readonly":true,"placeholder":"点击选择上级菜单"},model:{value:(_vm.dataForm.parentName),callback:function ($$v) {_vm.$set(_vm.dataForm, "parentName", $$v)},expression:"dataForm.parentName"}})],1),_vm._v(" "),(_vm.dataForm.type === 1)?_c('el-form-item',{attrs:{"label":"菜单URL","prop":"url"}},[_c('el-input',{attrs:{"placeholder":"菜单URL"},model:{value:(_vm.dataForm.url),callback:function ($$v) {_vm.$set(_vm.dataForm, "url", $$v)},expression:"dataForm.url"}})],1):_vm._e(),_vm._v(" "),(_vm.dataForm.type !== 0)?_c('el-form-item',{attrs:{"label":"授权标识","prop":"perms"}},[_c('el-input',{attrs:{"placeholder":"多个用逗号分隔, 如: user:list,user:create"},model:{value:(_vm.dataForm.perms),callback:function ($$v) {_vm.$set(_vm.dataForm, "perms", $$v)},expression:"dataForm.perms"}})],1):_vm._e(),_vm._v(" "),(_vm.dataForm.type !== 2)?_c('el-form-item',{attrs:{"label":"排序号","prop":"orderNum"}},[_c('el-input-number',{attrs:{"controls-position":"right","min":0,"label":"排序号"},model:{value:(_vm.dataForm.orderNum),callback:function ($$v) {_vm.$set(_vm.dataForm, "orderNum", $$v)},expression:"dataForm.orderNum"}})],1):_vm._e(),_vm._v(" "),(_vm.dataForm.type !== 2)?_c('el-form-item',{attrs:{"label":"菜单图标","prop":"icon"}},[_c('el-row',[_c('el-col',{attrs:{"span":22}},[_c('el-input',{attrs:{"placeholder":"菜单图标"},model:{value:(_vm.dataForm.icon),callback:function ($$v) {_vm.$set(_vm.dataForm, "icon", $$v)},expression:"dataForm.icon"}})],1),_vm._v(" "),_c('el-col',{staticClass:"icon-tips",attrs:{"span":2}},[_c('el-tooltip',{attrs:{"placement":"top","effect":"light"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('span',[_vm._v("获取图标: ")]),_c('br'),_vm._v("\n              1. 暂时兼容旧版引入使用 "),_c('a',{attrs:{"href":"//fontawesome.io/icons/","target":"_blank"}},[_vm._v("fontawesome")]),_c('br'),_vm._v("\n              2. 之后统一全站修改使用 "),_c('a',{attrs:{"href":"//github.com/daxiongYang/vue-cli-basic/blob/master/src/iconfont/index.js","target":"_blank"}},[_vm._v("iconfont")])]),_vm._v(" "),_c('i',{staticClass:"el-icon-warning"})])],1)],1)],1):_vm._e()],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var menu_add_or_update = (esExports);
// CONCATENATED MODULE: ./src/views/menu/add-or-update.vue
function injectStyle (ssrContext) {
  __webpack_require__("txIV")
}
var normalizeComponent = __webpack_require__("46Yf")
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
  add_or_update,
  menu_add_or_update,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_menu_add_or_update = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RUy8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("acE3")(false);
// imports


// module
exports.push([module.i, "\n.mod-menu .menu-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu .icon-tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "txIV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("RUy8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("XkoO")("22ed4791", content, true);

/***/ })

});