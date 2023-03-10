// 路由配置信息
//引入一级路由组件
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';


//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder';
import GroupOrder from '@/pages/Center/groupOrder';


//懒加载
// const foo = ()=> import ('@/pages/Home')








// 当打包构建应用时，javaScript包会变得非常大，影响页面加载。
// 如果我们育把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        //二级路由
        children: [
            {
                path: 'myOrder',
                component: MyOrder,
            },
            {
                path: 'groupOrder',
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myOrder'
            },
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/Trade') {
                next()
            } else {
                next(false)
            }
        }

    },
    {
        path: "/Home",
        component:()=> import ('@/pages/Home'),
        meta: { show: true }
    },
    {
        path: "/Search:keyword?",
        component: ()=> import ('@/pages/Search'),
        meta: { show: true },
        name: "search",

        // 面试题4:路由组件能不 能传递props数据?
        //布尔值写法
        // props:true,
        //对象写法  额外传递一些props
        // props:{a:1,b:2},
        //函数写法 可以params query 通过props传递给路由组件
        props: ($route) => {
            return { keyword: $route.params.keyword, k: $route.query.k }
        }
    },
    {
        path: "/Login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/Register",
        component: Register,
        meta: { show: false }
    },
    //重定向  项目跑起来的时候 访问立马定向到首页
    {
        path: '*',
        redirect: "/home"
    },
    {
        path: '/Detail/:skuId?',
        component: Detail,
        meta: { show: true }
    },
    {
        path: '/addCartSuccess',
        name: 'addCartSuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/ShopCart',
        name: 'ShopCart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/Trade',
        name: 'Trade',
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面必须从购物车来
            //其他地方来的 都停在原地
            if (from.path == '/ShopCart') {
                next()
            } else {
                next(false)
            }
        }
    },
]