<template>
  <div>
    <Header />
    <!-- 路由组件出口地方 -->
    <router-view></router-view>
    <!-- 在Home Search 下显示 登录 注册是隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: '',
  components: {
    Header,
    Footer
  },
  mounted(){
        //通知vuex 发请求 获取数据 存储 仓库中
        //派发action 获取三级列表数据
        this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>