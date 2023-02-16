1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?
--路由跳转有两种形式：声明式导航，编程式导航
--声明式导航没有这类问题 vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误？
 vue-router 3.5.3 引入promise


function push(){
    return new Promise((resolve,reject)=>{

    })
}
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。
1.3通过底部的代码，可以实现解决错误(治标不治本)
      this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})
将来在别的组件中 push | replace 编程式导航还是有类似错误


1.4
this：当前组件实例（search）
this.$router属性：当前属性vuerouter类的一个实例 当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push：vuerouter类的一个实例

$router是VueRouter类的实例
push是VueRouter类的一个原型方法
所以对原型方法push进行修改，修改结果就会作用于组件实例的$router实例。

#2Home 模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务


#3：三级联动组件完成
--由于三级联动，在Home Search Detail 把三级联动注册为全局组件
好处：一次注册，就可以在项目任意位置使用

#4:完成其余静态组件 
HTML css 图片-----结构 样式 图片资源


#5 postman测试接口
postcode 插件测试接口

get：
http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList

--刚刚经过postman工具测试，接口是没有问题的
--如果服务器返回的数据code字段200，代表服务器返回数据成功
--整个项目，接口前缀都有/api字样

#6axios 二次封装
向服务器发请求：XMLHttpRequest、fetch、JQ、axios 


6.1为什么二次封装？
请求拦截器、响应拦截器:请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情

6.2在项目当中经常出现API文件夹   一般是关于axios
接口中 路径带有/api

  baseURL:"/api"    
//基础路径 发请求时候路径中会出现api
http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList


6.3可看axios 文档


#7：API接口统一管理

项目很小：完全可以组件生命周期函数中发请求
项目大：axios.get（'xxx'）  统一管理 

#7.1跨域问题 
什么是跨域:协议、域名、端口号不同请求，称之为跨域

http://localhost:8080/#/home----前端项目本地服务器
http://39.98.123.211----后台服务器
http://gmall-h5-api.atguigu.cn 后台服务器更新

SONP、CROS、代理   可以解决


#8 nprogress进度条的使用
start 进度条开始 done 进度条结束
颜色去 nprogress.css里 bar 修改


#9vuex状态管理库

vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据。
切记，并不是全部项目都需要Vuex，如果项目很小，完全不需要Vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，vuex
state
mutation
sactions
getters
modules

个人问题
我写的
const actions = {
    add(context){
        context.commit("ADD")
    }
};

老师的
const actions = {
    add(commit){
        commit("ADD")
    }
};
百度：
实践中，咱们会常常用到 ES2015 的 参数解构来简化代码（特别是咱们须要调用 commit不少次的时候）：
老师的是 参数解构 来简化代码 

但是我实际用却不行


2023年2月16日14:57:32
const actions = {
    add({commit}){
        commit("ADD")
    }
};
给commit加上{} 也可以

结构赋值的问题




9.2 vuex 基本使用

9.3 vuex 模块化开发
如果项目过大，组件过多，接口也很多，数据也很多,可以让Vuex实现模块式开发模拟state存储数据


#10：完成TypeNav三级联动展示数据业务



































































