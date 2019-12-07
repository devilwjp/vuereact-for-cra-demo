# 一个纯净的通过create-react-app创建的项目集成了vue  
被用于VueReact(vuereact-combined)的demo用例  
在线demo https://devilwjp.github.io/vuereact-for-cra-demo/build/index.html#/  

## demo项目的创造步骤日志  
+ 通过create-react-app创建一个项目  
+ 安装相关依赖  
````  
npm i vue vue-loader vue-template-compiler react-app-rewired vuereact-combined -S
````  
+ 修改项目的启动命令(根据react-app-rewired官方说明)  
````json  
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
````  
+ 在根目创建config-overrides.js  
````jsx harmony  
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = function override(config, env) {
    config.module.rules[2].oneOf[7].exclude.push(/\.vue$/)
    config.module.rules.unshift({ // add vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
    })
    config.plugins.unshift(new VueLoaderPlugin())
    return config;
};

````  
