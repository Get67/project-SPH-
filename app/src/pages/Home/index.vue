<template>
  <div>
    <!-- 三级联动全局组件  三级联动已经全局组件，因此不需要引入-->
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key=floor.id  :list="floor"/>

    <Brand/>


  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import { mapState } from 'vuex'



export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState( {floorList:state=>state.home.floorList})
  },
  methods:{
    add(){
      //派发 action
     this.$store.dispatch('add');

    }
  },
  mounted(){
    //获取floor 组件的数据
    this.$store.dispatch("getFloorList")
    //获取用户信息在首页展示
    this.$store.dispatch("getUserInfo")
  },

}
</script>

<style>

</style>