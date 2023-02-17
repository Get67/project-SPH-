复习:
1)商品分类的三级列表由静态变为动态形式【获取服务器数据:解决跨域问题】
2）函数防抖与节流【面试频率很好】
3）路由跳转:声明式导航（router-1ink）、编程式导航
编程式导航解决这个问题:自定义属性



1)开发search模块中的TypeNav商品分类菜单（过渡动画效果)
过渡动画:前提组件|元素务 必要有v-if|v-show指令才可以进行过渡动画

2)现在咱们的商品分类三级列表可以进行优化?
在App根组件当中发请求【根组件mounted】执行一次

3）合并 parms query 参数

个人笔记
vue实战-合并参数
1.三级列表合并参数
点击三级列表的链接触发事件传递query参数，而此时，若在搜索框中搜索一个属性，再进行三级列表点击会使得搜索框处params参数被覆盖，而实际上是需要这两者的参数判断得到商品信息的，所以需要合并参数。

在TypeNav的goSearch方法上添加
判断如果$route中的params存在则添加到location中传递参数。
 前加  let location = { name: "search" };
location.query = query
        if(this.$route.params){
          location.params = this.$route.params
        }
        this.$router.push(location)
1
2
3
4
5
展示
2.在搜索点击事件中合并参数
点击搜索某个属性时，若存在query参数则会被params覆盖，所以需要合并参数。

在Hearder的goSearch方法上添加
 if(this.$route.query){
            let location={
            name:'search',
            params:{keyword:this.keyword || undefined},
          }
          location.query = this.$route.query
          this.$router.push(location)
        }
1
2
3
4
5
6
7
8
3.$route中存在两种参数
————————————————
版权声明：本文为CSDN博主「bying666」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/bying666/article/details/127035450



4)开发首页 home 当中的listcontainer组件与 floor组件？
但是这你需要知道一件事情 服务器返回的数据（接口)只有商品分类菜单分类数据，对于ListContainer组件与Floor组件数据服务器没有提供的。
https://docschina.org/
mock 模拟 ： 模拟数据 需要 mockjs
第一步 src 创建mock文件夹
第二步准备json数据 创建在mock文件夹中   格式化 不留空格 
第三步把mock数据需要的图片放置到public文件夹中【public】文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中
第四步 开始模拟 mockjs模拟数据  创建mockServe.js
第五步 mockServe.js文件 在入口文件中引入 至少执行一次 才能模拟数据




5 轮播图开发 
swiper
第一步 引入 包         npm i swiper@5
第二步 页面结构 务必要有 不能改
第三步 页面中有结构 再new swiper 实例 （轮播图添加效果）









