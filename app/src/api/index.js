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














