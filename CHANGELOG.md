## 更新日志

### 1.2.1

*2018-06-08*

- 修复tabs关闭最后一个tab后，再次打开会保留最后一个tab bug
- 优化完善mock模拟数据
- 修复linux系统，引入主题色文件名大小写编译错误bug [#22](https://github.com/daxiongYang/renren-fast-vue/issues/22)
- 新增echarts图表、ueditor富文本编辑器demo
- 移除登录成功token前端设置的失效时间
- 修复退出／token失效后，返回登录页面未清空整站临时存储数据bug
- 修复手机号码验证正则bug
- 同步后台 修改config模块key vulue子段为paramKey paramValue
- 修复角色管理 新增修改授权接口请求错误bug
- 修复1.2 新版本的导航栏Tab错位bug [#14](https://github.com/daxiongYang/renren-fast-vue/issues/14)
- 修复动态菜单路由 最前面带/bug
- 修复其它已知bug

### 1.2.0

*2018-05-03*

- 支持菜单管理操作动态(菜单)路由
- 移除api文件夹目录，简化api请求方式
- 新增element-ui组件主题12套，可同步修改配置设置成整站主题
- 调整store状态目录结构，改变设置／获取方式
- 调整views视图层结构，更友好的支持动态(菜单)路由
- 修复其它已知bug

### 1.1.0

*2018-04-15*

- 使用SVG Sprite矢量图标，替换fontawesome字体图标
- 新增内容tabs标签页，关闭当前／其它／全部、刷新当前功能
- 新增scss变量皮肤定制
- 优化路由机制，通过meta isTab属性，设定是否通过tab标签页展示内容
- 更新element-ui 2.3.2 用于修复左侧菜单收缩卡顿问题
- 新增mock本地开发模拟数据功能
- 修复本地开发找不到baseUrl问题
- 更新element-ui 2.2.1 用于修复tree半选中状态项不能传给后台接口问题
- 修复其它已知bug

### 1.0.0

*2018-02-11*
