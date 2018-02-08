var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var shell = require('gulp-shell');
var replace = require('gulp-replace');
var del = require('del');

var distPath = path.resolve('./dist'); // 输出目录
var version = ''; // 版本号
var versionPath = distPath + '/'; // 版本号文件目录
var nodeEnv = 'qa'; // 环境

// 创建版本文件目录名称
(function () {
  var d = new Date();
  version = (d.getFullYear().toString().slice(2))
    + ((d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1))
    + (d.getDate() >= 10 ? d.getDate() : '0' + d.getDate());
  versionPath += version
})();

// 打包
gulp.task('webpack', shell.task([
  'node build/build.js'
]));

// 生成版本文件目录中
gulp.task('versionBuild', ['webpack'], function () {
  return gulp.src(`${distPath}/static/**/*`)
    .pipe(gulp.dest(`${versionPath}/static/`))
});

// 替换manifest.js占位标记变量
gulp.task('replace', ['versionBuild'], function () {
  return gulp.src(`${versionPath}/static/js/manifest.js`)
    .pipe(replace(/"\.\/"/g, 'window.SITE_CONFIG[\'baseUrl\']'))
    .pipe(gulp.dest(`${versionPath}/static/js/`))
});

// 替换${versionPath}/static/config/index-${nodeEnv}.js STATIC_FILENAME变量
// 合并index-${nodeEnv}.js + init.js 到 config/index.js
gulp.task('replaceCdnPath', ['versionBuild'], function () {
  // var txt = 'window.SITE_CONFIG['staticFileName'] = ' + (nodeEnv === 'prod' ? `\'${version}\'` : `\'lt\/${version}\'`)
  return gulp.src([`${versionPath}/static/config/index-${nodeEnv}.js`, `${versionPath}/static/config/init.js`])
    .pipe(replace(/window.SITE_CONFIG['staticFileName'] = \'.*\'/g, `window.SITE_CONFIG['staticFileName'] = \'${version}\'`))
    .pipe(concat('index.js'))
    .pipe(gulp.dest(`${distPath}/config/`))
});

// 清空
gulp.task('clean', function () {
  return fnClean([versionPath])
});
function fnClean (path) {
  return del(path)
}

gulp.task('default', function () {
  console.log('\n测试环境打包使用: gulp qa \n验收环境打包使用：gulp uat \n生产环境打包使用：gulp prod\n')
});

// 测试环境
gulp.task('qa', ['clean'], function () {
  nodeEnv = 'qa';
  gulp.start(['replace', 'replaceCdnPath'], function () {
    fnClean([`${distPath}/static`, `${versionPath}/static/config`])
  })
});

// 验收环境
gulp.task('uat', ['clean'], function () {
  nodeEnv = 'uat';
  gulp.start(['replace', 'replaceCdnPath'], function () {
    fnClean([`${distPath}/static`, `${versionPath}/static/config`])
  })
});

// 生成环境
gulp.task('prod', ['clean'], function () {
  nodeEnv = 'prod';
  gulp.start(['replace', 'replaceCdnPath'], function () {
    fnClean([`${distPath}/static`, `${versionPath}/static/config`])
  })
});
