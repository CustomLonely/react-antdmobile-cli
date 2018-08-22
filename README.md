\## 技术栈

react+ react-router-dom+ webpack + ES6/7 + fribee+ less+antdmobile+ flex + svg

\## 项目运行

\####  注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本 

cd test

yarn install  安装依赖

yarn start 运行项目

yarn build 打包项目

## 项目布局

\```

.

├── build                                       // 项目打包路径

├── config                                      // webpack配置文件

├── dist                                         // 上线项目文件，放在服务器即可正常访问

├── public                                // 项目截图

├── src                                         // 源码目录

│   ├── components                              // 组件

│   ├── config                                  // 基本配置

│   ├── assets                                 // 公共资源

│   ├── pages

│   │   └── Pages.js                           // 路由配置

│   ├── utils                                 // 数据请求模块

│   └── style

│       ├── basic.scss                         // 公共样式文件

│       ├── base.scss                          // 样式配置文件

│   ├── index.js                                 // 程序入口文件，加载各种公共组件

├── favicon.ico                                 // 图标

├── index.html                                  // 入口html文件

.

```

```