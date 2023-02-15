//对于axios进行二次封装


//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
//start 进度条开始 done 进度条结束


//引入
import axios from "axios";

//1:利用axios对象的方法create，去创建一个axios实例
//2:request就是axios，只不过稍微配置一下

const requests = axios.create({
    //配置对象
    //基础路径 发请求时候路径中会出现api   默认自带/api
    baseURL:"/api" ,
    //请求时间 5秒
    timeout:5000,       
});

//请求拦截器
//请求拦截器:在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config  配置对象  对象里有个 header 请求头 很重要
    //进度条开始动
    nProgress.start();
    return config;
});


//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功回调函数   可以做一些事
    //进度条结束
    nProgress.done();
    return res.data;
 
},(error)=>{
    //响应失败函数
    return Promise.reject(new Error('faile'));
});




//对外暴露
export default requests;






















