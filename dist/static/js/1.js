webpackJsonp([1,7],{

/***/ "/6mt":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Mt3A");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("XkoO")("6bb52040", content, true);

/***/ }),

/***/ "6olT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/array/concat.js
var concat = __webpack_require__("oi+F");
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/array/from.js
var from = __webpack_require__("kfHR");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/_vue@2.5.2@vue/dist/vue.esm.js
var vue_esm = __webpack_require__("MVSX");

// CONCATENATED MODULE: ./src/components/tree-table/eval.js
/**
* @Author: jianglei
* @Date:   2017-10-12 12:06:49
*/




function treeToArray(data, expandedAll) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var tmp = [];
  from_default()(data).forEach(function (record) {
    if (record._expanded === undefined) {
      vue_esm["default"].set(record, '_expanded', expandedAll);
    }
    var _level = 1;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    vue_esm["default"].set(record, '_level', _level);
    // 如果有父元素
    if (parent) {
      vue_esm["default"].set(record, 'parent', parent);
    }
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      var children = treeToArray(record.children, expandedAll, record, _level);
      tmp = tmp.concat(children);
    }
  });
  return tmp;
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/tree-table/index.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
  Auth: Lei.j1ang
  Created: 2018/1/19-13:59
*/

/* harmony default export */ var tree_table = ({
  name: 'treeTable',
  props: {
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData: function formatData() {
      var tmp = void 0;
      if (!Array.isArray(this.data)) {
        tmp = [this.data];
      } else {
        tmp = this.data;
      }
      var func = this.evalFunc || treeToArray;
      var args = this.evalArgs ? concat_default()([tmp], this.evalArgs) : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  },
  methods: {
    showRow: function showRow(row) {
      var show = row.row.parent ? row.row.parent._expanded && row.row.parent._show : true;
      row.row._show = show;
      return show ? '' : 'display:none;';
    },
    // 切换下级是否展开
    toggleExpanded: function toggleExpanded(trIndex) {
      var record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow: function iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-35c1c946","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/tree-table/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table',_vm._b({attrs:{"data":_vm.formatData,"row-style":_vm.showRow}},'el-table',_vm.$attrs,false),[(_vm.columns.length===0)?_c('el-table-column',{attrs:{"width":"150"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._l((scope.row._level),function(space){return _c('span',{key:space,staticClass:"ms-tree-space"})}),_vm._v(" "),(_vm.iconShow(0,scope.row))?_c('span',{staticClass:"tree-ctrl",on:{"click":function($event){_vm.toggleExpanded(scope.$index)}}},[(!scope.row._expanded)?_c('i',{staticClass:"el-icon-arrow-right"}):_c('i',{staticClass:"el-icon-arrow-down"})]):_vm._e(),_vm._v("\n      "+_vm._s(scope.$index)+"\n    ")]}}])}):_vm._l((_vm.columns),function(column,index){return _c('el-table-column',{key:column.value,attrs:{"label":column.text,"width":column.width,"header-align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._l((scope.row._level),function(space){return (index === 0)?_c('span',{key:space,staticClass:"ms-tree-space"}):_vm._e()}),_vm._v(" "),(_vm.iconShow(index,scope.row))?_c('span',{staticClass:"tree-ctrl",on:{"click":function($event){_vm.toggleExpanded(scope.$index)}}},[(!scope.row._expanded)?_c('i',{staticClass:"el-icon-arrow-right"}):_c('i',{staticClass:"el-icon-arrow-down"})]):_vm._e(),_vm._v("\n      "+_vm._s(scope.row[column.value])+"\n    ")]}}])})}),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_tree_table = (esExports);
// CONCATENATED MODULE: ./src/components/tree-table/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("/6mt")
}
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35c1c946"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tree_table,
  components_tree_table,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_tree_table = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "7n7e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wCtA");
__webpack_require__("PgA/");
module.exports = __webpack_require__("UusJ").Array.from;


/***/ }),

/***/ "Mt3A":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("acE3")(false);
// imports


// module
exports.push([module.i, "\n.ms-tree-space[data-v-35c1c946] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 18px;\n  height: 14px;\n}\n.ms-tree-space[data-v-35c1c946]::before {\n    content: \"\";\n}\n.processContainer[data-v-35c1c946] {\n  width: 100%;\n  height: 100%;\n}\ntable td[data-v-35c1c946] {\n  line-height: 26px;\n}\n.tree-ctrl[data-v-35c1c946] {\n  position: relative;\n  cursor: pointer;\n  margin-left: -18px;\n}\n", ""]);

// exports


/***/ }),

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

/***/ "PgA/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("W0SX");
var $export = __webpack_require__("MITN");
var toObject = __webpack_require__("NUpW");
var call = __webpack_require__("iQda");
var isArrayIter = __webpack_require__("nR03");
var toLength = __webpack_require__("sSQC");
var createProperty = __webpack_require__("cdm/");
var getIterFn = __webpack_require__("X6b2");

$export($export.S + $export.F * !__webpack_require__("A91l")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "RUy8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("acE3")(false);
// imports


// module
exports.push([module.i, "\n.mod-menu .menu-list__input > .el-input__inner {\n  cursor: pointer;\n}\n.mod-menu .icon-tips {\n  font-size: 18px;\n  text-align: center;\n  color: #e6a23c;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "cdm/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("qRYU");
var createDesc = __webpack_require__("+BLA");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "hOt0":
/***/ (function(module, exports) {

// for a legacy code and future fixes
module.exports = function () {
  return Function.call.apply(Array.prototype.concat, arguments);
};


/***/ }),

/***/ "kfHR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("7n7e"), __esModule: true };

/***/ }),

/***/ "oi+F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("hOt0"), __esModule: true };

/***/ }),

/***/ "sS1m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/tree-table/index.vue + 3 modules
var tree_table = __webpack_require__("6olT");

// EXTERNAL MODULE: ./src/views/menu/add-or-update.vue + 2 modules
var add_or_update = __webpack_require__("P5+K");

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__("0xDb");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/menu/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var menu = ({
  data: function data() {
    return {
      dataForm: {},
      treeTableColumns: [{
        text: 'ID',
        value: 'menuId',
        width: '120'
      }],
      dataList: [],
      dataListLoading: false,
      addOrUpdateVisible: false
    };
  },

  components: {
    TreeTable: tree_table["a" /* default */],
    AddOrUpdate: add_or_update["default"]
  },
  activated: function activated() {
    this.getDataList();
  },

  methods: {
    // 获取数据列表
    getDataList: function getDataList() {
      var _this = this;

      this.dataListLoading = true;
      api["a" /* default */].menu.list().then(function (_ref) {
        var data = _ref.data;

        _this.dataList = Object(utils["c" /* treeDataTranslate */])(data, 'menuId');
        _this.dataListLoading = false;
      });
    },

    // 新增 / 修改
    addOrUpdateHandle: function addOrUpdateHandle(id) {
      var _this2 = this;

      this.addOrUpdateVisible = true;
      this.$nextTick(function () {
        _this2.$refs.addOrUpdate.init(id);
      });
    },

    // 删除
    deleteHandle: function deleteHandle(id) {
      var _this3 = this;

      this.$confirm('\u786E\u5B9A\u5BF9[id=' + id + ']\u8FDB\u884C[\u5220\u9664]\u64CD\u4F5C?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        var params = {
          'menuId': id
        };
        api["a" /* default */].menu.del(params).then(function (_ref2) {
          var data = _ref2.data;

          if (data && data.code === 0) {
            _this3.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: function onClose() {
                _this3.getDataList();
              }
            });
          } else {
            _this3.$message.error(data.msg);
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-09818e1e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/menu/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-menu"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm}},[_c('el-form-item',[(_vm.isAuth('sys:user:save'))?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOrUpdateHandle()}}},[_vm._v("新增")]):_vm._e()],1)],1),_vm._v(" "),_c('tree-table',{staticStyle:{"width":"100%"},attrs:{"columns":_vm.treeTableColumns,"data":_vm.dataList,"border":""}},[_c('el-table-column',{attrs:{"prop":"name","header-align":"center","align":"center","label":"菜单名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"parentName","header-align":"center","align":"center","label":"上级菜单"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"icon","header-align":"center","align":"center","label":"图标"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{class:['fa-lg', scope.row.icon]})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","header-align":"center","align":"center","label":"类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type === 0)?_c('el-tag',{attrs:{"size":"small"}},[_vm._v("目录")]):(scope.row.type === 1)?_c('el-tag',{attrs:{"size":"small","type":"success"}},[_vm._v("菜单")]):(scope.row.type === 2)?_c('el-tag',{attrs:{"size":"small","type":"info"}},[_vm._v("按钮")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderNum","header-align":"center","align":"center","label":"排序号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"url","header-align":"center","align":"center","width":"150","show-overflow-tooltip":true,"label":"菜单URL"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"perms","header-align":"center","align":"center","width":"150","show-overflow-tooltip":true,"label":"授权标识"}}),_vm._v(" "),_c('el-table-column',{attrs:{"header-align":"center","align":"center","width":"200","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(_vm.isAuth('sys:user:update'))?_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.addOrUpdateHandle(scope.row.menuId)}}},[_vm._v("修改")]):_vm._e(),_vm._v(" "),(_vm.isAuth('sys:user:delete'))?_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.deleteHandle(scope.row.menuId)}}},[_vm._v("删除")]):_vm._e()]}}])})],1),_vm._v(" "),(_vm.addOrUpdateVisible)?_c('add-or-update',{ref:"addOrUpdate",on:{"refreshDataList":_vm.getDataList}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_menu = (esExports);
// CONCATENATED MODULE: ./src/views/menu/index.vue
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
  menu,
  views_menu,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_menu = __webpack_exports__["default"] = (Component.exports);


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