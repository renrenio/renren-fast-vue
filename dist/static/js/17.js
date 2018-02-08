webpackJsonp([17],{

/***/ "GpWj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/oss/upload.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var upload = ({
  data: function data() {
    return {
      visible: false,
      url: '',
      num: 0,
      successNum: 0,
      fileList: []
    };
  },

  methods: {
    init: function init(id) {
      this.url = api["a" /* default */].oss.upload(this.$cookie.get('token'));
      this.visible = true;
    },

    // 上传之前
    beforeUploadHandle: function beforeUploadHandle(file) {
      if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        this.$message.error('只支持jpg、png、gif格式的图片！');
        return false;
      }
      this.num++;
    },

    // 上传成功
    successHandle: function successHandle(response, file, fileList) {
      var _this = this;

      this.fileList = fileList;
      this.successNum++;
      if (response && response.code === 0) {
        if (this.num === this.successNum) {
          this.$confirm('操作成功, 是否继续操作?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).catch(function () {
            _this.visible = false;
          });
        }
      } else {
        this.$message.error(response.msg);
      }
    },

    // 弹窗关闭时
    closeHandle: function closeHandle() {
      this.fileList = [];
      this.$emit('refreshDataList');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-fb851b60","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/oss/upload.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":"上传文件","close-on-click-modal":false,"visible":_vm.visible},on:{"close":_vm.closeHandle,"update:visible":function($event){_vm.visible=$event}}},[_c('el-upload',{staticStyle:{"text-align":"center"},attrs:{"drag":"","action":_vm.url,"before-upload":_vm.beforeUploadHandle,"on-success":_vm.successHandle,"multiple":"","file-list":_vm.fileList}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v("将文件拖到此处，或"),_c('em',[_vm._v("点击上传")])]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("只支持jpg、png、gif格式的图片！")])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var oss_upload = (esExports);
// CONCATENATED MODULE: ./src/views/oss/upload.vue
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
  upload,
  oss_upload,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_oss_upload = __webpack_exports__["default"] = (Component.exports);


/***/ })

});