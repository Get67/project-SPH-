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
  }
}
</script>

<style>

</style>