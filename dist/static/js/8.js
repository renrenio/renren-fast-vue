webpackJsonp([8],{

/***/ "B6fr":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("acE3")(false);
// imports


// module
exports.push([module.i, "\n.site-content--home {\n  line-height: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "KR8f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.1@babel-loader/lib!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/home/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var home = ({
  data: function data() {
    return {};
  },

  computed: {
    contentViewStyles: function contentViewStyles() {
      var height = this.$store.state.documentClientHeight;
      height -= 50; // site-topbar
      height -= 15; // site-content padding-top
      height -= 15; // site-content padding-bottom
      height += 'px';
      return [{ minHeight: height }];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.3.0@vue-loader/lib/template-compiler?{"id":"data-v-e5e88f1e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/home/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"site-content site-content--home"},[_c('el-card',{style:(_vm.contentViewStyles)},[_c('h3',[_vm._v("项目介绍")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"http://demo.renren.io/renren-fast/","target":"_blank"}},[_vm._v("http://demo.renren.io/renren-fast/")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://demo.renren.io/renren-fast/swagger/index.html","target":"_blank"}},[_vm._v("http://demo.renren.io/renren-fast/swagger/index.html")])]),_vm._v(" "),_c('li',[_vm._v("一个轻量级的Java快速开发平台，能快速开发项目并交付【接私活利器】")]),_vm._v(" "),_c('li',[_vm._v("友好的代码结构及注释，便于阅读及二次开发")]),_vm._v(" "),_c('li',[_vm._v("完善的XSS防范及脚本过滤，彻底杜绝XSS攻击")]),_vm._v(" "),_c('li',[_vm._v("实现前后端分离，通过token进行数据交互")]),_vm._v(" "),_c('li',[_vm._v("推荐使用阿里云服务器部署项目，免费领取阿里云优惠券，请点击【"),_c('a',{attrs:{"href":"https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=y93lfwbg&productCode=dmspre&utm_source=y93lfwbg","target":"_blank"}},[_vm._v("免费领取")]),_vm._v("】")])]),_vm._v(" "),_c('h3',[_vm._v("获取帮助")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Git地址："),_c('a',{attrs:{"href":"http://git.oschina.net/babaio/renren-fast","target":"_blank"}},[_vm._v("http://git.oschina.net/babaio/renren-fast")])]),_vm._v(" "),_c('li',[_vm._v("使用手册："),_c('a',{attrs:{"href":"http://www.renren.io/open/renren-fast","target":"_blank"}},[_vm._v("http://www.renren.io/open/renren-fast")])]),_vm._v(" "),_c('li',[_vm._v("代码生成器："),_c('a',{attrs:{"href":"http://git.oschina.net/babaio/renren-generator","target":"_blank"}},[_vm._v("http://git.oschina.net/babaio/renren-generator")])]),_vm._v(" "),_c('li',[_vm._v("其他项目："),_c('a',{attrs:{"href":"http://www.renren.io/open/","target":"_blank"}},[_vm._v("http://www.renren.io/open/")])]),_vm._v(" "),_c('li',[_vm._v("如需关注项目最新动态，请Watch、Star项目，同时也是对项目最好的支持")])]),_vm._v(" "),_c('h3',[_vm._v("官方QQ群")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("高级群：324780204(大牛云集，跟大牛学习新技能)")]),_vm._v(" "),_c('li',[_vm._v("普通群：145799952(学习交流，互相解答各种疑问)")])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var views_home = (esExports);
// CONCATENATED MODULE: ./src/views/home/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("QuaJ")
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
  home,
  views_home,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_home = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "QuaJ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("B6fr");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("XkoO")("2294ad98", content, true);

/***/ })

});