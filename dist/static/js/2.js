webpackJsonp([2],{

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

/***/ "sIkh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/components/tree-table/index.vue + 3 modules
var tree_table = __webpack_require__("6olT");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/tree-table/index.vue
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var views_tree_table = ({
  data: function data() {
    return {
      treeTableColumns: [{
        text: '名称',
        value: 'name',
        width: 200
      }],
      datList: []
    };
  },

  components: {
    TreeTable: tree_table["a" /* default */]
  },
  created: function created() {
    this.getDeptList();
  },

  methods: {
    // 获取部门列表
    getDeptList: function getDeptList() {
      var _this = this;

      api["a" /* default */].menu.list().then(function (_ref) {
        var data = _ref.data;

        _this.datList = _this.dataTranslate(data || [], 'menuId', 'parentId');
      });
    },

    // 数据转换
    dataTranslate: function dataTranslate(data, sign, parentSign) {
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length; j++) {
          if (data[i][parentSign] === data[j][sign]) {
            data[j]['children'] = data[j]['children'] || [];
            data[j]['children'].push(data[i]);
            data.splice(i, 1);
            i--;
            break;
          }
        }
      }
      return data;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-4db75331","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/tree-table/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-dept"},[_c('tree-table',{staticStyle:{"margin-top":"10px"},attrs:{"columns":_vm.treeTableColumns,"data":_vm.datList,"border":""}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_tree_table = (esExports);
// CONCATENATED MODULE: ./src/views/tree-table/index.vue
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
  views_tree_table,
  selectortype_template_index_0_src_views_tree_table,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_tree_table = __webpack_exports__["default"] = (Component.exports);


/***/ })

});