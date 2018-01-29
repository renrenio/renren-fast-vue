webpackJsonp([8],{

/***/ "oi/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 3 modules
var api = __webpack_require__("gyMJ");

// CONCATENATED MODULE: ./node_modules/.7.1.1@babel-loader/lib!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/oss/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var oss = ({
  data: function data() {
    return {
      dataForm: {},
      dataList: [],
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      selectionDataList: [],
      configDialogVisible: false,
      configDataForm: {},
      uploadDialogVisible: false,
      uploadUrl: api["m" /* ossUpload */](),
      uploadFileList: []
    };
  },
  created: function created() {
    this.getConfig();
    this.getDataList();
  },

  methods: {
    // 获取配置信息
    getConfig: function getConfig() {
      var _this = this;

      api["g" /* getOssConfig */]().then(function (_ref) {
        var data = _ref.data;

        if (data && data.code === 0) {
          _this.configDataForm = data.config;
        } else {
          _this.configDataForm = {};
        }
      });
    },

    // 修改配置信息
    updateConfig: function updateConfig() {
      var _this2 = this;

      api["n" /* updateOssConfig */](this.configDataForm).then(function (_ref2) {
        var data = _ref2.data;

        if (data && data.code !== 0) {
          var self = _this2;
          _this2.$message({
            message: '操作成功',
            type: 'success',
            onClose: function onClose() {
              self.configDialogVisible = false;
            }
          });
          _this2.getConfig();
        } else {
          _this2.$message.error(data.msg);
        }
      });
    },

    // 获取数据列表
    getDataList: function getDataList() {
      var _this3 = this;

      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sidx: '',
        order: 'asc'
      };
      api["h" /* getOssList */](params).then(function (_ref3) {
        var data = _ref3.data;

        if (data && data.code === 0) {
          _this3.dataList = data.page.list;
          _this3.totalPage = data.page.totalCount;
        } else {
          _this3.dataList = [];
          _this3.totalPage = 0;
        }
        _this3.dataListLoading = false;
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

    // 删除
    deleteHandle: function deleteHandle(id) {
      var _this4 = this;

      var idList = [];
      if (id && /\S/.test(id)) {
        idList.push(id);
      } else {
        idList = this.selectionDataList.map(function (item) {
          return item.id;
        });
      }
      api["a" /* deleteOss */](idList).then(function (_ref4) {
        var data = _ref4.data;

        if (data && data.code === 0) {
          _this4.$message({
            message: '操作成功',
            type: 'success'
          });
          _this4.getDataList();
        } else {
          _this4.$message.error(data.msg);
        }
      });
    },

    // 图片上传之前
    uploadBeforeUploadHandle: function uploadBeforeUploadHandle(file) {
      if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        this.$message.error('只支持jpg、png、gif格式的图片！');
        return false;
      } else if (this.uploadFileList.length >= 1) {
        this.$message.error('图片只能同时上传一张');
        return false;
      }
    },

    // 图片上传成功
    uploadSuccessHandle: function uploadSuccessHandle(response, file, fileList) {},

    // 图片上传失败
    uploadErrorHandle: function uploadErrorHandle(e, file, fileList) {}
  }
});
// CONCATENATED MODULE: ./node_modules/.13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-5899e553","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/.13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/oss/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-user"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"danger","disabled":!_vm.configDataForm.type},on:{"click":function($event){_vm.configDialogVisible = true}}},[_vm._v("云存储配置")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":!_vm.configDataForm.type},on:{"click":function($event){_vm.uploadDialogVisible = true}}},[_vm._v("上传文件")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":_vm.selectionDataList.length <= 0},on:{"click":function($event){_vm.deleteHandle()}}},[_vm._v("删除")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":""},on:{"selection-change":_vm.selectionChangeHandle}},[_c('el-table-column',{attrs:{"type":"selection","header-align":"center","align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","header-align":"center","align":"center","width":"80","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"url","header-align":"center","align":"center","label":"URL地址"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createDate","header-align":"center","align":"center","width":"180","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","header-align":"center","align":"center","width":"200","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.deleteHandle(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}}),_vm._v(" "),_c('el-dialog',{attrs:{"title":"云存储配置","close-on-click-modal":false,"visible":_vm.configDialogVisible},on:{"update:visible":function($event){_vm.configDialogVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.configDataForm,"label-width":"120px"}},[_c('el-form-item',{attrs:{"size":"mini","label":"存储类型"}},[_c('el-radio-group',{model:{value:(_vm.configDataForm.type),callback:function ($$v) {_vm.$set(_vm.configDataForm, "type", $$v)},expression:"configDataForm.type"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("七牛")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("阿里云")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("腾讯云")])],1)],1),_vm._v(" "),(_vm.configDataForm.type === 1)?[_c('el-form-item',{attrs:{"size":"mini"}},[_c('a',{attrs:{"href":"http://www.renren.io/open/qiniu.html","target":"_blank"}},[_vm._v("免费申请(七牛)10GB储存空间")])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"七牛绑定的域名"},model:{value:(_vm.configDataForm.qiniuDomain),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qiniuDomain", $$v)},expression:"configDataForm.qiniuDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.configDataForm.qiniuPrefix),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qiniuPrefix", $$v)},expression:"configDataForm.qiniuPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKey"}},[_c('el-input',{attrs:{"placeholder":"七牛AccessKey"},model:{value:(_vm.configDataForm.qiniuAccessKey),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qiniuAccessKey", $$v)},expression:"configDataForm.qiniuAccessKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretKey"}},[_c('el-input',{attrs:{"placeholder":"七牛SecretKey"},model:{value:(_vm.configDataForm.qiniuSecretKey),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qiniuSecretKey", $$v)},expression:"configDataForm.qiniuSecretKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"空间名"}},[_c('el-input',{attrs:{"placeholder":"七牛存储空间名"},model:{value:(_vm.configDataForm.qiniuBucketName),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qiniuBucketName", $$v)},expression:"configDataForm.qiniuBucketName"}})],1)]:(_vm.configDataForm.type === 2)?[_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"阿里云绑定的域名"},model:{value:(_vm.configDataForm.aliyunDomain),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunDomain", $$v)},expression:"configDataForm.aliyunDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.configDataForm.aliyunPrefix),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunPrefix", $$v)},expression:"configDataForm.aliyunPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"EndPoint"}},[_c('el-input',{attrs:{"placeholder":"阿里云EndPoint"},model:{value:(_vm.configDataForm.aliyunEndPoint),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunEndPoint", $$v)},expression:"configDataForm.aliyunEndPoint"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKeyId"}},[_c('el-input',{attrs:{"placeholder":"阿里云AccessKeyId"},model:{value:(_vm.configDataForm.aliyunAccessKeyId),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunAccessKeyId", $$v)},expression:"configDataForm.aliyunAccessKeyId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AccessKeySecret"}},[_c('el-input',{attrs:{"placeholder":"阿里云AccessKeySecret"},model:{value:(_vm.configDataForm.aliyunAccessKeySecret),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunAccessKeySecret", $$v)},expression:"configDataForm.aliyunAccessKeySecret"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"BucketName"}},[_c('el-input',{attrs:{"placeholder":"阿里云BucketName"},model:{value:(_vm.configDataForm.aliyunBucketName),callback:function ($$v) {_vm.$set(_vm.configDataForm, "aliyunBucketName", $$v)},expression:"configDataForm.aliyunBucketName"}})],1)]:(_vm.configDataForm.type === 3)?[_c('el-form-item',{attrs:{"label":"域名"}},[_c('el-input',{attrs:{"placeholder":"腾讯云绑定的域名"},model:{value:(_vm.configDataForm.qcloudDomain),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudDomain", $$v)},expression:"configDataForm.qcloudDomain"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径前缀"}},[_c('el-input',{attrs:{"placeholder":"不设置默认为空"},model:{value:(_vm.configDataForm.qcloudPrefix),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudPrefix", $$v)},expression:"configDataForm.qcloudPrefix"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"AppId"}},[_c('el-input',{attrs:{"placeholder":"腾讯云AppId"},model:{value:(_vm.configDataForm.qcloudAppId),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudAppId", $$v)},expression:"configDataForm.qcloudAppId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretId"}},[_c('el-input',{attrs:{"placeholder":"腾讯云SecretId"},model:{value:(_vm.configDataForm.qcloudSecretId),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudSecretId", $$v)},expression:"configDataForm.qcloudSecretId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SecretKey"}},[_c('el-input',{attrs:{"placeholder":"腾讯云SecretKey"},model:{value:(_vm.configDataForm.qcloudSecretKey),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudSecretKey", $$v)},expression:"configDataForm.qcloudSecretKey"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"BucketName"}},[_c('el-input',{attrs:{"placeholder":"腾讯云BucketName"},model:{value:(_vm.configDataForm.qcloudBucketName),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudBucketName", $$v)},expression:"configDataForm.qcloudBucketName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Bucket所属地区"}},[_c('el-input',{attrs:{"placeholder":"如：sh（可选值 ，华南：gz 华北：tj 华东：sh）"},model:{value:(_vm.configDataForm.qcloudRegion),callback:function ($$v) {_vm.$set(_vm.configDataForm, "qcloudRegion", $$v)},expression:"configDataForm.qcloudRegion"}})],1)]:_vm._e()],2),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.configDialogVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.updateConfig()}}},[_vm._v("确定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"上传文件","close-on-click-modal":false,"visible":_vm.uploadDialogVisible},on:{"update:visible":function($event){_vm.uploadDialogVisible=$event}}},[_c('el-upload',{staticStyle:{"text-align":"center"},attrs:{"drag":"","action":_vm.uploadUrl,"before-upload":_vm.uploadBeforeUploadHandle,"on-success":_vm.uploadSuccessHandle,"on-error":_vm.uploadErrorHandle,"multiple":""}},[_c('i',{staticClass:"el-icon-upload"}),_vm._v(" "),_c('div',{staticClass:"el-upload__text"},[_vm._v("将文件拖到此处，或"),_c('em',[_vm._v("点击上传")])]),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("只支持jpg、png、gif格式的图片！")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.uploadDialogVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.uploadDialogVisible = false}}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_oss = (esExports);
// CONCATENATED MODULE: ./src/views/oss/index.vue
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
  oss,
  views_oss,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_oss = __webpack_exports__["default"] = (Component.exports);


/***/ })

});