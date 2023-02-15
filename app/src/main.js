import Vue from 'vue'
import App from './App.vue'
//三级联动组件-注册为全局组件
import TypeNav from '@/pages/Home/TypeNav';

//第一个参数:全局组件的名字   第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)
//引入路由
import router from './router';

//Vue.config.productionTip = false
//let a = 10000 ;

//测试
import {reqCategoryList}from '@/api';
reqCategoryList();

new Vue({
  render: h => h(App),
  //注册路由：底下写法是kv一致省略V【router小写】
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route,$router属性
  router
}).$mount('#app')
