//当前模块 API 统一管理

import requests from "./request";
import mockRequests from "./mockAjax";


//三级联动接口
//http://gmall-h5-api.atguigu.cn          /api/product/getBaseCategoryList get请求 无参数
//发请求  axios 发请求 返回是 promise对象          
//已经自带了api                                 他url就叫/api/product/getBaseCategoryList
//所以请求网址才会/api/api 两个api : 
//http://localhost:8080/api【这个api是request.js中  baseURL:"/api" ,】/api【这个api是他本身url就叫/api】/product/getBaseCategoryList
export const reqCategoryList = () => requests({ url: '/api/product/getBaseCategoryList', method: 'get' });





// 获取banner home 轮播图的接口
export const reqGetBannerList = () => mockRequests.get('/banner')



//获取floor 组件的数据
export const reqFloorList = () => mockRequests.get('/floor')


//获取搜索模块数据 地址/api/list  请求方式 post 参数
//当前接口 给服务器传递params 至少是一个空对象
//获取搜索模块的数据 传递一个默认参数 至少是一个空对象 
export const reqGetSearchInfo = (paramas) => requests({ url: "/api/list", method: 'post', data: paramas })



//获取产品详情信息的接口 url： /api/item/{skuId}
//   get 带产品id

export const reqGoodsInfo = (skuId) => requests({ url: `/api/item/${skuId}`, method: 'get' })




////将产品添加到购物车中（获取更新某一个产品的个数)
//         /api/cart/addToCart/{skuId}/{skuNum}    POSt
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/api/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })




//获取购物车列表的数据 的接口
//          /api/cart/cartList    get

export const reqCartList = () => requests({ url: '/api/cart/cartList', method: 'get' })















