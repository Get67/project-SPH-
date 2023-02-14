import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from './router';

//Vue.config.productionTip = false
let a = 10000 ;
new Vue({
  render: h => h(App),
  //注册路由：底下写法是kv一致省略V【router小写】
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route,$router属性
  router
}).$mount('#app')
