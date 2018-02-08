;(function(window, document) {
  var resList = {
    css: [
      window.SITE_CONFIG['cdnUrl'] + '/static/css/app.css'
    ],
    js: [
      window.SITE_CONFIG['cdnUrl'] + '/static/js/manifest.js',
      window.SITE_CONFIG['cdnUrl'] + '/static/js/vendor.js',
      window.SITE_CONFIG['cdnUrl'] + '/static/js/app.js'
    ]
  };

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

  document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
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