//配置路由的地方

import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)

//引入
import routes from "./routes";

//引入store仓库
import Store from "@/store";
import store from "@/store";

//先把vuerouter 原型对象的push 先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push replace 方法
//第一个参数：告诉原来的push方法，你往哪传递
//第二个参数：成功的回调
//第三个参数：失败的回调
//call()方法改变originPush的this为这个回调函数的this，也就是让原本指向window的this变为指向vueRouter的实例对象
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //call || apply 区别 相同点：都可以调用函数一次，都可以篡改上下文this一次
        //不同点：call 与 apply 传递参数 call传递用逗号隔开，apply方法执行，传递数组
        originPush.call(this)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

//配置路由
let router = new VueRouter({
    //配置路由
    //k v 一致省略v
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

})
//全局守卫 ：前置守卫  路由跳转之前进行判断
router.beforeEach(async (to, from, next) => {
    //to:可以获取到你要跳转到那个路由信息
    //from:可以获取到你从哪个路由而来的信息
    //next：放行函数 next()放行next(path)放行到指定路由
    //next(false)

    let token = store.state.user.token;
    let name = Store.state.user.userInfo.name;
    //用户已经登陆了还想去login[不能去，停留在首页]
    if (token) {
        if (to.path == '/login') {
            next('/home')

        } else {
            //登陆,去的不是login 【homel search|detail|shopcart
            //如果用户名已有
            if (name) {
                next()

            } else {
                //没有用户名 派发派发action让仓库存储用户信息在跳转
                try {
                    //获取用户信息成功
                    await store.dispatch('getUserInfo')
                    next()

                } catch (error) {
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }

        }
    } else {
        //未登录  不能去交易相关的   不能去支付 【pay|paysuccess】 不能去个人中心
        //未登录 全部去 登录页面  
        let toPath = to.path;
        if (toPath.indexOf('/trade')!=-1 ||toPath.indexOf('/pay')!=-1 ||toPath.indexOf('/center')!=-1 ) {
            //把原本去的网站 带上
            next('/login?redirect='+toPath)
        }else{
            //去的地方不是 上面home search shopcart 就让去
            next()
        }
      

    }

})

export default router