/**
 * 生产环境
 */
;(function () {
  window.SITE_CONFIG = {}
  // api请求地址
  window.SITE_CONFIG.baseUrl = '//demo.renren.io/renren-fast/'

  // 嵌套iframe地址
  window.SITE_CONFIG.nestIframeUrl = '//demo.renren.io/renren-fast/'
  // 嵌套iframe路由名称列表
  window.SITE_CONFIG.nestIframeRouteNameList = ['sql']
  
  // 静态资源文件夹名称
  window.SITE_CONFIG.staticFileName = '180401'
  // cdn地址
  window.SITE_CONFIG.cdnUrl = './' + window.SITE_CONFIG.staticFileName
})();

/**
 * 动态加载初始资源
 */
;(function(window, document) {
  var resList = {
    css: [
      window.SITE_CONFIG.cdnUrl + '/static/css/app.css'
    ],
    js: [
      window.SITE_CONFIG.cdnUrl + '/static/js/manifest.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/vendor.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/app.js'
    ]
  };

  // 样式
  (function () {
    document.getElementsByTagName('html')[0].style.opacity = 0;
    var i = 0;
    var _style = null;
    var createStyles = function () {
      if (i >= resList.css.length) {
        document.getElementsByTagName('html')[0].style.opacity = 1;
        return;
      }
      _style = document.createElement('link');
      _style.href = resList.css[i];
      _style.setAttribute('rel', 'stylesheet');
      _style.onload = function () {
        i++;
        createStyles();
      }
      document.getElementsByTagName('head')[0].appendChild(_style);
    }
    createStyles();
  })();

  // 脚本
  var isLoad = false;
  document.onreadystatechange = function () {
    if (!isLoad && (document.readyState === 'interactive' || document.readyState === 'complete')) {
      isLoad = true;
      var i = 0;
      var _script = null;
      var createScripts = function () {
        if (i >= resList.js.length) {
          return;
        }
        _script = document.createElement('script');
        _script.src = resList.js[i];
        _script.onload = function () {
          i++;
          createScripts();
        }
        document.getElementsByTagName('body')[0].appendChild(_script);
      }
      createScripts();
    }
  };
})(window, document);