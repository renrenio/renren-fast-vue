## 介绍
- 一个轻量级的Java快速开发平台，能快速开发项目并交付【接私活利器】
- 友好的代码结构及注释，便于阅读及二次开发
- 完善的XSS防范及脚本过滤，彻底杜绝XSS攻击
- 实现前后端分离，通过token进行数据交互
- [在线访问](//fast.demo.renren.io/)
- 后台Git地址：[git.oschina.net/babaio/renren-fast](//git.oschina.net/babaio/renren-fast)

![demo-screenshot](https://github.com/daxiongYang/renren-fast-vue/blob/master/demo-screenshot/1.png)
![demo-screenshot](https://github.com/daxiongYang/renren-fast-vue/blob/master/demo-screenshot/2.png)

## 开发
```bash
# 克隆项目
git clone https://github.com/daxiongYang/renren-fast-vue.git

# 安装依赖
npm install

# 启动服务
npm run dev
```

## 发布
```bash
# 构建生产环境(默认)
npm run build

# 构建测试环境
npm run build --qa

# 构建验收环境
npm run build --uat

# 构建生产环境
npm run build --prod
```

## 其他
``` bash
# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```