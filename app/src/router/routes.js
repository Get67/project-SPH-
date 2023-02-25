// 路由配置信息
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

export default [
    {
        path:"/Home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/Search:keyword?",
        component:Search,
        meta:{show:true},
        name:"search",
        
        // 面试题4:路由组件能不 能传递props数据?
        //布尔值写法
        // props:true,
        //对象写法  额外传递一些props
        // props:{a:1,b:2},
        //函数写法 可以params query 通过props传递给路由组件
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
    },
    {
        path:'/Detail/:skuid?',
        component:Detail,
        meta:{show:true}
    },
]