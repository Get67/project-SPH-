复习:
1)完成商品分类的三级列表路由跳转一级路由传参（合并参数)
2）完成search模块中对于typeNav使用(过渡动画的)
3)对于typeNav请求次数也进行优化
4)swiper插件
    swiper插件:经常制作轮播图(移动端|Pc端也可以使用)使用步骤:
    第一步:引入相应依赖包（swiper.js| swiper.css)
    第二步:页面中的结构务必要有
    第三步:初始化swiper实例,给轮播图添加动态效果
5)mock数据，通过mockjs模块实现的


#1 完美解决轮播图
 watch+nextTick 监听  监听已有数据的变化
 bannnerlist从空到请求服务器拿到数据然后得到数据是有变化的 所以可以用watch监听到数据的变化


     //定时器方法
    // setTimeout(() => {
    //   var mySwiper = new Swiper(
    //   document.querySelector(".swiper-container"), {
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable:true
    //     },
    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   })
    // }, 1000);

watch nextTick 方法 
  watch: {
    //监听 bannerlist 数据变化
    bannerList: {
      handler(newValue, oldValue) {
        //如果执行handler 说明 实例身上已经有属性了 新的属性已经进入bannerlist里了
       //只能保证bannerlist的数据已经有了  但是不能保证 v-for 执行结束没有   所以要加入nextTick 
        //nextTick 下次dom更新 循环结束之后 执行延迟回调  在修改数据之后立即使用这个方法 获取更新后的dom
        this.$nextTick(()=>{
          //当你执行这个回调  已经保证v-for完毕了  轮播图的结构已经有了
          var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        })
      },
    },
  },


$nextTick :可以保证也页面中的{结构一定是有的}，经常和很多插件一起使用【都需要DOM存在了】




2 开发floor 组件
切记 仓库中的state数据 别瞎写 乱写   数据格式取决于 服务器返回的数据
格式要对应

2.1 getFloorList 这个action在哪里触发 
需要在home路由组件中发   可以v-for 发给两个floor 遍历组件
v-for 也可以在自定义标签中使用 

C:\Users\Administrator\Desktop\project-SPH\app\src\store\home\index.js

C:\Users\Administrator\Desktop\project-SPH\app\src\pages\Home\index.vue

两个文件中的floorList 名字要相同 不然传递两个 floorlist 一个有数据一个空数据


2.3父子通信的方式
home→floor 

方式：
props 父子组件通信
自定义事件  子父
全局事件总线
pubsub-js全能
插槽
vuex







