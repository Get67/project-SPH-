#1：vue-cli脚手架初始化项目
node + webpack + （淘宝镜像）

操作cmd ------ vue create app  //创建项目 项目名：app
安装vue2

----------------------------------------------------

node_modules            项目依赖文件夹
public                  一般放置静态资源（图片）注意webpack打包时，原封不动打包到dist文件夹
src                     源代码文件夹
    assets              一般放置静态资源，多个组件共用的静态页面，注意webpack打包时，webpack会把assets当模块打包到js文件里
    components          一般放置非路由组件（或者常用的全局组件）
    app.vue             唯一的根组件，vue中的组件都是.vue文件
    main.js             程序的入口文件，最先执行的文件
.gitignore              git忽略文件
babel.config.js         配置文件（babel相关）
package.json            记录项目信息，有什么依赖，项目身份证
package-lock.json       缓存性文件
README.md               说明文件
vue.config.js           配置文件（vue相关）
jsconfig.json           个性化js


#2：项目的其他配置
2.1项目运行起来时候，浏览器自动打开
--package.json--
  "scripts": {
    "serve": "vue-cli-service serve --open",//找到这一行加上--open
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

问题：npm run serve  后“http://0.0.0.0:8080/ 的页面可能存在问题...” 的解决方案
答：在项目的 vue.config.js 文件中配置 devServer 属性即可
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {                            //这个devServer就是
    open: true,
    host: 'localhost',
    port: 8080                            //看见没8080 
  }
})

或者 再加一句          --host=localhost



问题：vscode cmd 执行npm run serve 都找不到package.json
答：运行目录没找对，去项目根目录 打开vscode 或者 cmd 再运行

2.2eslint校验功能关闭
在根目录下创建vue.config.js，
比如：声明变量但是没有使用，eslink校验工具报错
打开 vue.config.js ，在大括号内输入
lintOnSave: false 控制台不报错，编译通过。
lintOnSave: 'warning' 控制台提示错误，编译通过

如果改了false 还是一直报错  关闭vscode  重新开 


2.3sec文件夹简写方法，配置别名 @
创建jsconfig.json文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"     //@就是src
            ]
        }
    },
    "exclude": [
        "node_modules",   //这两个文件夹不能用
        "dist"
        
    ]
}


#3项目路由的分析
vue-router
前端路由：kv键值对
key：URL （地址栏中的路径）
value：相应的路由组件
注意：项目上中下结构

路由组件：
Home首页路由组件，Search路由组件，，Login登录路由，Refister注册路由
非路由组件：
Header头部，【首页，搜索页】
Footer底部【首页，搜索页】登录页，注册页 没有

#4完成非路由组件Header 与 Footer业务
项目中 不以 html css 为主 ，主要搞业务，逻辑
在开发项目时
1：静态页面(html css)
2:拆分组件
3：获取服务器的数据动态展示
4：完成相应的动态业务逻辑

注意1：创建组件的时候，组件结构+组件的样式+图片的资源
注意2：项目采用less样式，浏览器不识别less样式，需要通过less、less-loader（这个安装成@5）进行处理less，把less变为css样式，浏览器才能识别
注意3：想让组件识别less样式，style标签上加lang="less"

#4.1使用组件的步骤（非路由组件）
-创建/定义
-引入
-注册
-使用

2023年2月13日21:17:11

#5路由组件的搭建
vue-router
命令：npm install vue-router@3.5.3 
在上面分析时候，路由组件应该有4个：Hmoe，Search，Login，Register

-components文件夹：经常放置非路由组件（共用全局组件）
-pages|views文件夹：经常放置路由组件

#5.1配置路由
项目当中配置的路由一般放置在router文件夹中

#5.2总结
路由组件 与 非路由组件 的区别？
1.路由组件一般放置在pages | views 文件夹中 非路由组件一般放置components文件夹中
2.路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用时候，一般是以标签的形式使用
3.注册完路由，不管路由组件，还是非路由组件身上都有$route,$router属性

$route：一般获取路由信息【路径，query，params等等】
$router：一般进行编程式导航 进行路由跳转【push|replace】

#5.3 路由的跳转
路由的跳转有两种形式，
声明式导航router-link，可以进行路由的跳转
编程式导航push|replace，可以进行路由的跳转

编程式导航：声明式能做的 编程式都能做，编程式除了进行路由跳转还有其他的业务功能

#6 Footer组件显示与隐藏
显示或者隐藏组件：v-if  |  v-show
Footer组件：在Home，Search显示，在Login，R注册时候的消失的
<Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>  
千万别写 【./home】【./search】

6.1我们可以根据组件身上的$route 获取当前路由的信息 通过 路由路径判断Footer显示与隐藏
6.2配置路由时候，可以给路由配置元信息【mata】路由需要配置对象，key v不能乱取名 乱写 
meta:{show:false}
 v-show="$route.meta.show

 #8路由传参
 8.1路由跳转有几种方式？
 声明式导航：router-link（务必有to属性），可以实现路由的跳转
 编程式导航：利用的是组件实例的$router.push |replace方法 可以跳转（可以写自己的业务）

 8.2路由传参 参数有几种写法？
 params参数:属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数:不属于路径当中的一部分，类似于ajax中的queryString     /home?k=v&kv=,不需要占位

9)路由传参相关面试题
1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
2:如何指定params参数可传可不传?
比如:配置路由的时候，占位了(params参数)，但是路由跳转的时候就不传递。路径会出现问题
http://localhost:808e/#/?k=QWE
http://localhost:8080/#/search

3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决?
4:路由组件能不能传递props数据?






