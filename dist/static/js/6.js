webpackJsonp([6,17,18],{

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


/***/ }),

/***/ "oi/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/index.js + 11 modules
var api = __webpack_require__("gyMJ");

// EXTERNAL MODULE: ./src/views/oss/config.vue + 2 modules
var config = __webpack_require__("xZFR");

// EXTERNAL MODULE: ./src/views/oss/upload.vue + 2 modules
var upload = __webpack_require__("GpWj");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/oss/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataListSelections: [],
      configVisible: false,
      uploadVisible: false
    };
  },

  components: {
    Config: config["default"],
    Upload: upload["default"]
  },
  activated: function activated() {
    this.getDataList();
  },

  methods: {
    // 获取数据列表
    getDataList: function getDataList() {
      var _this = this;

      this.dataListLoading = true;
      var params = {
        page: this.pageIndex,
        limit: this.pageSize
      };
      api["a" /* default */].oss.list(params).then(function (_ref) {
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

    // 多选
    selectionChangeHandle: function selectionChangeHandle(val) {
      this.dataListSelections = val;
    },

    // 云存储配置
    configHandle: function configHandle() {
      var _this2 = this;

      this.configVisible = true;
      this.$nextTick(function () {
        _this2.$refs.config.init();
      });
    },

    // 上传文件
    uploadHandle: function uploadHandle() {
      var _this3 = this;

      this.uploadVisible = true;
      this.$nextTick(function () {
        _this3.$refs.upload.init();
      });
    },

    // 删除
    deleteHandle: function deleteHandle(id) {
      var _this4 = this;

      var ids = id ? [id] : this.dataListSelections.map(function (item) {
        return item.id;
      });
      this.$confirm('\u786E\u5B9A\u5BF9[id=' + ids.join(',') + ']\u8FDB\u884C[' + (id ? '删除' : '批量删除') + ']\u64CD\u4F5C?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        api["a" /* default */].oss.del(ids).then(function (_ref2) {
          var data = _ref2.data;

          if (data && data.code === 0) {
            _this4.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: function onClose() {
                _this4.getDataList();
              }
            });
          } else {
            _this4.$message.error(data.msg);
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-5899e553","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/oss/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-oss"},[_c('el-form',{attrs:{"inline":true,"model":_vm.dataForm}},[_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.configHandle()}}},[_vm._v("云存储配置")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.uploadHandle()}}},[_vm._v("上传文件")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","disabled":_vm.dataListSelections.length <= 0},on:{"click":function($event){_vm.deleteHandle()}}},[_vm._v("批量删除")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.dataListLoading),expression:"dataListLoading"}],staticStyle:{"width":"100%"},attrs:{"data":_vm.dataList,"border":""},on:{"selection-change":_vm.selectionChangeHandle}},[_c('el-table-column',{attrs:{"type":"selection","header-align":"center","align":"center","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","header-align":"center","align":"center","width":"80","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"url","header-align":"center","align":"center","label":"URL地址"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createDate","header-align":"center","align":"center","width":"180","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"fixed":"right","header-align":"center","align":"center","width":"200","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text","size":"small"},on:{"click":function($event){_vm.deleteHandle(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('el-pagination',{attrs:{"current-page":_vm.pageIndex,"page-sizes":[10, 20, 50, 100],"page-size":_vm.pageSize,"total":_vm.totalPage,"layout":"total, sizes, prev, pager, next, jumper"},on:{"size-change":_vm.sizeChangeHandle,"current-change":_vm.currentChangeHandle}}),_vm._v(" "),(_vm.configVisible)?_c('config',{ref:"config"}):_vm._e(),_vm._v(" "),(_vm.uploadVisible)?_c('upload',{ref:"upload",on:{"refreshDataList":_vm.getDataList}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_oss = (esExports);
// CONCATENATED MODULE: ./src/views/oss/index.vue
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
  oss,
  views_oss,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_oss = __webpack_exports__["default"] = (Component.exports);


/***/ }),

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