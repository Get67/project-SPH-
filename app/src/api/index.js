//当前模块 API 统一管理

import requests from "./request";
import mockRequests from "./mockAjax";


//三级联动接口
//http://gmall-h5-api.atguigu.cn          /api/product/getBaseCategoryList get请求 无参数
//发请求  axios 发请求 返回是 promise对象          
//已经自带了api                                 他url就叫/api/product/getBaseCategoryList
//所以请求网址才会/api/api 两个api : 
//http://localhost:8080/api【这个api是request.js中  baseURL:"/api" ,】/api【这个api是他本身url就叫/api】/product/getBaseCategoryList
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'}) ;  




    
// 获取banner home 轮播图的接口
export const reqGetBannerList = ()=>mockRequests.get('/banner')



//获取floor 组件的数据
export const reqFloorList = ()=>mockRequests.get('/floor')


//获取搜索模块数据 地址/api/list  请求方式 post 参数
//当前接口 给服务器传递params 至少是一个空对象
//获取搜索模块的数据 传递一个默认参数 至少是一个空对象 
export const reqGetSearchInfo = (paramas) =>requests({url:"/api/list",method:'post',data:paramas})
































