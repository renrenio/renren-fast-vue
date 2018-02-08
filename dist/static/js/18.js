webpackJsonp([18],{

/***/ "xZFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/oss/config.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var config = ({
  data: function data() {
    return {
      visible: false,
      dataForm: {},
      dataRule: {}
    };
  },

  methods: {
    init: function init(id) {
      var _this = this;

      this.visible = true;
      api["a" /* default */].oss.config().then(function (_ref) {
        var data = _ref.data;

        _this.dataForm = data && data.code === 0 ? data.config : [];
      });
    },

    // 表单提交
    dataFormSubmit: function dataFormSubmit() {
      var _this2 = this;

      this.$refs['dataForm'].validate(function (valid) {
        if (valid) {
          api["a" /* default */].oss.addConfig(_this2.dataForm).then(function (_ref2) {
            var data = _ref2.data;

            if (data && data.code === 0) {
              _this2.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: function onClose() {
                  _this2.visible = false;
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
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-7b6b41de","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/oss/config.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":"云存储配置","close-on-click-modal":false,"visible":_vm.visible},on:{"update:visible":function($event){_vm.visible=$event}}},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.dataRule,"label-width":"120px"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.dataFormSubmit()}}},[_c('el-form-item',{attrs:{"size":"mini","label":"存储类型"}},[_c('el-radio-group',{model:{value:(_vm.dataForm.type),callback:function ($$v) {_vm.$set(_vm.dataForm, "type", $$v)},expression:"dataForm.type"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("七牛")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("阿里云")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("腾讯云")])],1)],1),_vm._v(" "),(_vm.dataForm.type === 1)?[_c('el-form-item',{attrs:{"size":"mini"}},[_c('a',{attrs:{"href":"http://www.renren.io/open/qiniu.html","target":"_blank"}},[_vm._v("免费申请(七牛)10GB储存空间")])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"七牛绑定的域名"},model:{value:(_vm.dataForm.qiniuDomain),callback:function ($$v) {_vm.$set(_vm.dataForm, "qiniuDomain", $$v)},expression:"dataForm.qiniuDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.dataForm.qiniuPrefix),callback:function ($$v) {_vm.$set(_vm.dataForm, "qiniuPrefix", $$v)},expression:"dataForm.qiniuPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKey"}},[_c('el-input',{attrs:{"placeholder":"七牛AccessKey"},model:{value:(_vm.dataForm.qiniuAccessKey),callback:function ($$v) {_vm.$set(_vm.dataForm, "qiniuAccessKey", $$v)},expression:"dataForm.qiniuAccessKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretKey"}},[_c('el-input',{attrs:{"placeholder":"七牛SecretKey"},model:{value:(_vm.dataForm.qiniuSecretKey),callback:function ($$v) {_vm.$set(_vm.dataForm, "qiniuSecretKey", $$v)},expression:"dataForm.qiniuSecretKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"空间名"}},[_c('el-input',{attrs:{"placeholder":"七牛存储空间名"},model:{value:(_vm.dataForm.qiniuBucketName),callback:function ($$v) {_vm.$set(_vm.dataForm, "qiniuBucketName", $$v)},expression:"dataForm.qiniuBucketName"}})],1)]:(_vm.dataForm.type === 2)?[_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"阿里云绑定的域名"},model:{value:(_vm.dataForm.aliyunDomain),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunDomain", $$v)},expression:"dataForm.aliyunDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.dataForm.aliyunPrefix),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunPrefix", $$v)},expression:"dataForm.aliyunPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"EndPoint"}},[_c('el-input',{attrs:{"placeholder":"阿里云EndPoint"},model:{value:(_vm.dataForm.aliyunEndPoint),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunEndPoint", $$v)},expression:"dataForm.aliyunEndPoint"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKeyId"}},[_c('el-input',{attrs:{"placeholder":"阿里云AccessKeyId"},model:{value:(_vm.dataForm.aliyunAccessKeyId),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunAccessKeyId", $$v)},expression:"dataForm.aliyunAccessKeyId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKeySecret"}},[_c('el-input',{attrs:{"placeholder":"阿里云AccessKeySecret"},model:{value:(_vm.dataForm.aliyunAccessKeySecret),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunAccessKeySecret", $$v)},expression:"dataForm.aliyunAccessKeySecret"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"BucketName"}},[_c('el-input',{attrs:{"placeholder":"阿里云BucketName"},model:{value:(_vm.dataForm.aliyunBucketName),callback:function ($$v) {_vm.$set(_vm.dataForm, "aliyunBucketName", $$v)},expression:"dataForm.aliyunBucketName"}})],1)]:(_vm.dataForm.type === 3)?[_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"腾讯云绑定的域名"},model:{value:(_vm.dataForm.qcloudDomain),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudDomain", $$v)},expression:"dataForm.qcloudDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.dataForm.qcloudPrefix),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudPrefix", $$v)},expression:"dataForm.qcloudPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AppId"}},[_c('el-input',{attrs:{"placeholder":"腾讯云AppId"},model:{value:(_vm.dataForm.qcloudAppId),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudAppId", $$v)},expression:"dataForm.qcloudAppId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretId"}},[_c('el-input',{attrs:{"placeholder":"腾讯云SecretId"},model:{value:(_vm.dataForm.qcloudSecretId),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudSecretId", $$v)},expression:"dataForm.qcloudSecretId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretKey"}},[_c('el-input',{attrs:{"placeholder":"腾讯云SecretKey"},model:{value:(_vm.dataForm.qcloudSecretKey),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudSecretKey", $$v)},expression:"dataForm.qcloudSecretKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"BucketName"}},[_c('el-input',{attrs:{"placeholder":"腾讯云BucketName"},model:{value:(_vm.dataForm.qcloudBucketName),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudBucketName", $$v)},expression:"dataForm.qcloudBucketName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Bucket所属地区"}},[_c('el-input',{attrs:{"placeholder":"如：sh（可选值 ，华南：gz 华北：tj 华东：sh）"},model:{value:(_vm.dataForm.qcloudRegion),callback:function ($$v) {_vm.$set(_vm.dataForm, "qcloudRegion", $$v)},expression:"dataForm.qcloudRegion"}})],1)]:_vm._e()],2),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.visible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dataFormSubmit()}}},[_vm._v("确定")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var oss_config = (esExports);
// CONCATENATED MODULE: ./src/views/oss/config.vue
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
  config,
  oss_config,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_oss_config = __webpack_exports__["default"] = (Component.exports);


/***/ })

});