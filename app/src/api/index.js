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

//删除购物 产品的接口
// url /api/cart/deleteCart/{skuId}       method:DELETE

export const reqDeleteCartById = (skuId) => requests({ url: `/api/cart/deleteCart/${skuId} `, method: 'delete' })


//修改商品的选中状态
//  /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateChecked = (skuId,isChecked) => requests({ url: `/api/cart/checkCart/${skuId}/${isChecked} `, method: 'get' })



//4.1获取验证码----/api/user/passport/sendCode/{phone}
export const reqGetCode = (phone)=>requests({
url:`/api/user/passport/sendCode/${phone}`, method: 'get'
})


//注册
//url:        /api/user/passport/register  method:post   phone code password
//注册的接口
export const reqUserRegister = (data)=>requests({url:`/api/user/passport/register`,method:'post',data});
    

//登录
//   url: /api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:`/api/user/passport/login`,method:'post',data});


//获取用户信息【需要带着用户的token向服务器要用户信息】
//url /api/user/passport/auth/getUserInfo method:get

export const reqUserInfo = ()=>requests({url:`/api/user/passport/auth/getUserInfo`,method:'get'});

//退出登录
// URL:/api/user/passport/logout get
export const reqLogout = ()=>requests({url:`/api/user/passport/logout`,method:'get'});


//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList method:get

export const reqAddressInfo = ()=>requests({url:`/api/user/userAddress/auth/findUserAddressList`,method:'get'});



///获取商品清单
//URL: /api/order/auth/trade method:get
export const reqOrderInfo = ()=>requests({url:`/api/order/auth/trade`,method:'get'});


//提交订单的接口
// url： /api/order/auth/submitOrder?tradeNo={tradeNo}method:post

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});


//获取支付信息 金额
// url： /api/payment/weixin/createNative/{orderId}   GET
export const reqPayInfo = (orderId)=>requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'});