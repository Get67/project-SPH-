import Vue from 'vue'
import App from './App.vue'
//三级联动组件-注册为全局组件
import TypeNav from '@/components/TypeNav';

//第一个参数:全局组件的名字   第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from './router';

//轮播图全局组件
import Carousel from '@/components/Carousel';
Vue.component(Carousel.name,Carousel)

// //测试
// import {reqGetSearchInfo} from '@/api'
// console.log(reqGetSearchInfo({}));


//引入仓库
import store from './store';

//引入swiper样式
import "swiper/css/swiper.css"

//Vue.config.productionTip = false
//let a = 10000 ;
//引入mockserver.js
import '@/mock/mockServe'



new Vue({
  render: h => h(App),
  //注册路由：底下写法是kv一致省略V【router小写】
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route,$router属性
  router,

  //注册仓库  组件实例的身上 会 多一个属性 $store 属性
  store,





}).$mount('#app')
