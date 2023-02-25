//配置路由的地方

import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)

//引入
import routes from "./routes";

//先把vuerouter 原型对象的push 先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push replace 方法
//第一个参数：告诉原来的push方法，你往哪传递
//第二个参数：成功的回调
//第三个参数：失败的回调
//call()方法改变originPush的this为这个回调函数的this，也就是让原本指向window的this变为指向vueRouter的实例对象
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call || apply 区别 相同点：都可以调用函数一次，都可以篡改上下文this一次
        //不同点：call 与 apply 传递参数 call传递用逗号隔开，apply方法执行，传递数组
        originPush.call(this)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    //k v 一致省略v
    routes,
    //滚动行为
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}
    }

})