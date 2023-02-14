//配置路由的地方

import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

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
    routes:[
        {
            path:"/Home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/Search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search",
            
            // 面试题4:路由组件能不 能传递props数据?
            //布尔值写法
            // props:true,
            //对象写法  额外传递一些props
            // props:{a:1,b:2},
            //函数写法 可以params query 通过props传递给卤藕组件
            props:($route)=>{
                return {keyword:$route.params.keyword,k:$route.query.k}
            }
        },
        {
            path:"/Login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/Register",
            component:Register,
            meta:{show:false}
        },
        //重定向  项目跑起来的时候 访问立马定向到首页
        {
            path:'*',
            redirect:"/home"
        }
    ]
})