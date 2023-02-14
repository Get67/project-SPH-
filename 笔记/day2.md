1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?
--路由跳转有两种形式：声明式导航，编程式导航
--声明式导航没有这类问题 vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误？
 vue-router 3.5.3 引入promise


function push(){
    return new Promise((resolve,reject)=>{

    })
}
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。
1.3通过底部的代码，可以实现解决错误(治标不治本)
      this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})
将来在别的组件中 push | replace 编程式导航还是有类似错误


1.4
this：当前组件实例（search）
this.$router属性：当前属性vuerouter类的一个实例 当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push：vuerouter类的一个实例

$router是VueRouter类的实例
push是VueRouter类的一个原型方法
所以对原型方法push进行修改，修改结果就会作用于组件实例的$router实例。

#2Home 模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务













