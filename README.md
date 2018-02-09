# Vue-cli-basic

> 基于Vue.js 2.0+生态圈，构建一套常用／基础的代码结构规范。通过实现人人开源renren-fast轻量级权限管理系统，验证可行性！

## Demo
[在线 Demo](//fast.demo.renren.io/)
![demo-screenshot](//github.com/daxiongYang/vue-cli-basic/demo-screenshot/1518154896410.png)
![demo-screenshot](//github.com/daxiongYang/vue-cli-basic/demo-screenshot/1518154896420.png)

## 开发
```bash
# 克隆项目
git clone https://github.com/daxiongYang/vue-cli-basic.git

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