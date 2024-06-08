# uniQuery 贡献指南

## 环境搭建

* 需要安装 [Node.js](http://nodejs.org/)。
* 克隆仓库到本地后，执行 ```npm install``` 安装开发依赖。
* 安装 ```HBuilder X``` 作为编辑器

## 开发

### 源码部分

直接使用命令行运行即可启动和编辑代码了。

下面列出源码目录：

- uniQuery/src（根目录）
    - components：组件源码
    - libs：api源码
    - tools：被复用的一些方法

### 微信公众号

稍微特殊一点的是，微信公众号测试还需要对```offiaccount.config.js```进行配置。

> 如果配置有问题，可以提[issue](https://github.com/oi-contrib/uniQuery/issues)告诉我们。

然后启动微信公众号测试服务器：

```shell
npm run offiaccount
```

最后在微信APP中访问( ```http://127.0.0.1:8080/index.html``` )即可。

### 文档部分

编辑文档前，请先使用 ```npm run build:h5``` 进行H5打包：

然后执行用例同步：

```shell
npm run build:docs
```

最后启动文档：

```shell
npm run dev:docs
```

## 提交 PR

* fork 本仓库，在自己仓库基于 dev 分支创建专用分支用于提交更改。
* commit 内容请说明清楚本次 PR 的主要目的和改动，描述清楚即可。
* 提交之前确保进行了完善的测试。
* 确保 PR 提交到 dev 分支。
* 修复 Bug 请提供详细的描述信息，或链接到对应的 issue。