var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var path = require('path');
var del  = require('del');

var distPath    = path.resolve('./dist');
var version     = ''; // 版本号(静态资源文件夹名称)
var versionPath = ''; // 版本号路径(静态资源文件夹路径)
var env         = ''; // 环境

// 创建版本号 / 版本号路径
(function () {
  var d = new Date();
  version = (d.getFullYear().toString().slice(2))
    + ((d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1))
    + (d.getDate() >= 10 ? d.getDate() : '0' + d.getDate());
  versionPath = distPath + '/' + version;
})();

// 编译
gulp.task('build', $.shell.task([ 'node build/build.js' ]));

// 创建版本号目录
gulp.task('create:versionPath', ['build'], function () {
  return gulp.src(`${distPath}/static/**/*`)
    .pipe(gulp.dest(`${versionPath}/static/`))
});

// 替换${versionPath}/static/js/manifest.js window.SITE_CONFIG.cdnUrl占位变量
gulp.task('replace:cdnUrl', ['create:versionPath'], function () {
  return gulp.src(`${versionPath}/static/js/manifest.js`)
    .pipe($.replace(new RegExp(`"${require('./config').build.assetsPublicPath}"`, 'g'), 'window.SITE_CONFIG.cdnUrl + "/"'))
    .pipe(gulp.dest(`${versionPath}/static/js/`))
});

// 替换${versionPath}/static/config/index-${env}.js window.SITE_CONFIG.staticFileName配置变量
gulp.task('replace:staticFileName', ['create:versionPath'], function () {
  return gulp.src(`${versionPath}/static/config/index-${env}.js`)
    .pipe($.replace(/window.SITE_CONFIG\['staticFileName'\] = '.*'/g, `window.SITE_CONFIG['staticFileName'] = '${version}'`))
    .pipe(gulp.dest(`${versionPath}/static/config/`))
});

// 合并${versionPath}/static/config/[index-${env}, init].js 至 ${distPath}/config/index.js
gulp.task('concat:config', ['replace:staticFileName'], function () {
  return gulp.src([`${versionPath}/static/config/index-${env}.js`, `${versionPath}/static/config/init.js`])
    .pipe($.concat('index.js'))
    .pipe(gulp.dest(`${distPath}/config/`))
});

// 清空
gulp.task('clean', function () {
  return del([versionPath])
});

gulp.task('default', ['clean'], function () {
  // 获取环境配置
  env = process.env.npm_config_qa ? 'qa' : process.env.npm_config_uat ? 'uat' : 'prod'
  // 开始打包编译
  gulp.start(['build', 'create:versionPath', 'replace:cdnUrl', 'replace:staticFileName', 'concat:config'], function () {
    // 清除, 编译 / 处理项目中产生的文件
    del([`${distPath}/static`, `${versionPath}/static/config`])
  })
});
