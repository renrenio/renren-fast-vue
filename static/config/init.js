/**
 * 动态加载初始资源
 */
;(function() {
  var resList = {
    icon: window.SITE_CONFIG.cdnUrl + '/static/img/favicon.ico',
    css: [
      window.SITE_CONFIG.cdnUrl + '/static/css/app.css',
    ],
    js: [
      window.SITE_CONFIG.cdnUrl + '/static/js/manifest.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/vendor.js',
      window.SITE_CONFIG.cdnUrl + '/static/js/app.js',
      window.SITE_CONFIG.cdnUrl + '/static/plugins/mock-1.0.0-beta3/mock-min.js'
    ]
  };

  // 图标
  (function () {
    var _icon = document.createElement('link');
    _icon.setAttribute('rel', 'shortcut icon');
    _icon.setAttribute('type', 'image/x-icon');
    _icon.setAttribute('href', resList.icon);
      document.getElementsByTagName('head')[0].appendChild(_icon);
  })();

  // 样式
  (function () {
    var _script = null;
    for (var i = 0; i < resList.css.length; i++) {
      _style = document.createElement('link');
      _style.href = resList.css[i];
      _style.setAttribute('rel', 'stylesheet');
      document.getElementsByTagName('head')[0].appendChild(_style);
    }
  })();

  // 脚本
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      var _script = null;
      for (var i = 0; i < resList.js.length; i++) {
        _script = document.createElement('script');
        _script.src = resList.js[i];
        _script.async = false
        document.getElementsByTagName('body')[0].appendChild(_script);
      }
    }
  };
})();